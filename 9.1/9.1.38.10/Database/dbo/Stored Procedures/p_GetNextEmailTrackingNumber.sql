

CREATE PROCEDURE dbo.p_GetNextEmailTrackingNumber(
    @IsOffline bit,
    @SystemUserId uniqueidentifier = NULL,
    @BusinessUnitId uniqueidentifier = NULL)
AS;
BEGIN;
    -- Do not display the returned row count.
    SET NOCOUNT ON;

    -- Declare variables of interest.
    DECLARE @maximumTrackingNumber  int;            -- maximum tracking number
    DECLARE @trackingPrefix         nvarchar(256);  -- tracking prefix history list
    DECLARE @trackingTokenId        int;            -- tracking token id
    DECLARE @trackingTokenIdDigits  tinyint;        -- tracking token id digit count
    DECLARE @trackingTokenIdBase    int;            -- tracking token id base
    DECLARE @nextTrackingNumber     int;            -- tracking number (online mode only)

    -- Get tracking information from the organization (assumes we have only one).
    SELECT
        @maximumTrackingNumber      = MaximumTrackingNumber,
        @trackingPrefix             = TrackingPrefix, 
        @trackingTokenIdDigits      = TrackingTokenIdDigits, 
        @trackingTokenIdBase        = TrackingTokenIdBase 
    FROM OrganizationBase;

    -- Normalize the maximum tracking number.
    IF (@maximumTrackingNumber IS NULL)
    BEGIN;
        SET @maximumTrackingNumber = 9999;   -- default max tracking number
    END;

    IF (@maximumTrackingNumber > 2147483647)
    BEGIN;
        SET @maximumTrackingNumber = 2147483647; -- max int
    END;

    -- Normalize the tracking token id digit count.
    IF (@trackingTokenIdDigits IS NULL)
    BEGIN;
        SET @trackingTokenIdDigits = 3;  -- digits reserved for the tracking token id
    END;

    -- Normalize the tracking token id base.
    IF (@trackingTokenIdBase IS NULL)
    BEGIN;
        SET @trackingTokenIdBase = 0; -- default base for tracking token ids
    END;

    -- If the maximum tracking number is set to zero or less, we do not use tokens.
    IF (@maximumTrackingNumber <= 0)
    BEGIN;
        -- Set values
        SELECT @nextTrackingNumber      = 0,
               @maximumTrackingNumber   = 0,
               @trackingPrefix          = '',
               @trackingTokenId         = 0,
               @trackingTokenIdDigits   = 0,
               @trackingTokenIdBase     = 0;
    END;
    ELSE
    BEGIN;
        IF (@SystemUserId IS NULL)
        BEGIN;
            SELECT @trackingTokenId = 0,
                   @nextTrackingNumber = NEXT VALUE FOR [dbo].SO_NextEmailTrackingNumber;
        END;
        ELSE
        BEGIN;
            -- Create a transaction to read and increment the tracking number.
            -- Since we will update only when offline, the transaction may not be required.
            -- However, this unifies the logic, and offline locking has almost no cost (since there is only one user).
            -- TODO: Make sure we restore locking in the stored procedure generating tracking tokens once security and platform caches have migrated to managed code.
            BEGIN TRANSACTION;
                -- Get the tracking number from the user.
                -- Added UPDLOCK hints to query to prevent duplicate token numbers being returned for two different sessions.
                SELECT @nextTrackingNumber = NextTrackingNumber,
                       @trackingTokenId = TrackingTokenId
                FROM UserSettingsBase WITH (UPDLOCK)
                WHERE SystemUserId = @SystemUserId;
                
                -- In offline mode, we increment a registry value and must skip the update.
                -- If we incremented the database value while offline, this would cause problems on client synchronization.
                -- The latest update between the online and offline changes would win, which could be the lower number.
                IF (@IsOffline = 0)
                BEGIN;
                    -- Increment and normalize the tracking number.
                    IF ((@nextTrackingNumber IS NULL) OR (@nextTrackingNumber >= @maximumTrackingNumber))
                        SET @nextTrackingNumber = 0;

                    SET @nextTrackingNumber = (@nextTrackingNumber + 1);

                    -- Update the tracking number on the for the user.
                    UPDATE UserSettingsBase
                    SET NextTrackingNumber = @nextTrackingNumber
                    FROM UserSettingsBase
                    WHERE SystemUserId = @SystemUserId;
                END;
            COMMIT TRANSACTION;
        END;
    END;

    -- Return results.
    SELECT
        @trackingPrefix         AS 'trackingprefix',
        @nextTrackingNumber     AS 'nexttrackingnumber',
        @trackingTokenId        AS 'trackingtokenid',
        @maximumTrackingNumber  AS 'maximumtrackingnumber',
        @trackingTokenIdDigits  AS 'trackingtokeniddigits',
        @trackingTokenIdBase    AS 'trackingtokenidbase';
END;