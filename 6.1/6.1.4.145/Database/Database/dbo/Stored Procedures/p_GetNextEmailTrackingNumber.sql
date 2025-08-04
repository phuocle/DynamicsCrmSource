CREATE PROCEDURE p_GetNextEmailTrackingNumber 
 @IsOffline bit, @SystemUserId uniqueidentifier = NULL, @BusinessUnitId uniqueidentifier = NULL
AS
BEGIN
	-- Do not display the returned row count
	SET NOCOUNT ON
		-- Declare variables of interest
	DECLARE @maximumtrackingnumber	int				-- maximum tracking number
	DECLARE @trackingprefix			nvarchar(256)	-- tracking prefix history list
	DECLARE @trackingtokenid		int				-- tracking token id
	DECLARE @trackingtokeniddigits	tinyint			-- tracking token id digit count
	DECLARE @trackingtokenidbase	int				-- tracking token id base
	DECLARE @nexttrackingnumber		int				-- tracking number (online mode only)

	-- Get tracking information from the organization (assumes we have only one)
	SELECT 
		@maximumtrackingnumber		= MaximumTrackingNumber,
		@trackingprefix				= TrackingPrefix, 
		@trackingtokeniddigits		= TrackingTokenIdDigits, 
		@trackingtokenidbase		= TrackingTokenIdBase 
	FROM OrganizationBase with (nolock)
	
		-- Normalize the maximum tracking number
	IF @maximumtrackingnumber IS NULL SELECT @maximumtrackingnumber = 9999 -- default max tracking number
	
	-- Normalize the tracking token id digit count
	IF @trackingtokeniddigits IS NULL SELECT @trackingtokeniddigits = 3 -- digits reserved for the tracking token id
	
	-- Normalize the tracking token id base
	IF @trackingtokenidbase IS NULL SELECT @trackingtokenidbase = 0 -- default base for tracking token ids
		
	-- If the maximum tracking number is set to zero or less, we do not use tokens
	IF (@maximumtrackingnumber <= 0)
	BEGIN
		-- Set values
		SELECT @nexttrackingnumber		= 0
		SELECT @maximumtrackingnumber	= 0
		SELECT @trackingprefix			= ''
		SELECT @trackingtokenid			= 0
		SELECT @trackingtokeniddigits	= 0
		SELECT @trackingtokenidbase		= 0
	END
	ELSE
	BEGIN	
		IF (@SystemUserId IS NULL) 
		BEGIN
			SELECT @trackingtokenid = 0			
			SELECT @nexttrackingnumber =  NEXT VALUE FOR [dbo].SO_NextEmailTrackingNumber		
		END
		ELSE 
		BEGIN
			-- Create a transaction to read and increment the tracking number
			-- Since we will update only when offline, the transaction may not be required
			-- However this unifies the logic, and offline locking has almost no cost (since there is only one user)
			-- TODO: make sure we restore locking in the stored procedure generating tracking tokens once security and platform caches have migrated to managed code
			BEGIN TRANSACTION
				-- Get the tracking number from the user
				-- CRM SE 14906
				-- Added UPDLOCK hints to query to prevent duplicate token numbers being returned for two different sessions
				SELECT @nexttrackingnumber = NextTrackingNumber, @trackingtokenid = TrackingTokenId FROM UserSettingsBase  WITH (UPDLOCK) WHERE SystemUserId = @SystemUserId AND BusinessUnitId = @BusinessUnitId
				
				-- In offline mode, we increment a registry value and must skip the update
				-- If we incremented the database value while offline, this would cause problems on client synchronization
				-- The latest update between the online and offline changes would win, which could be the lower number
				IF (@IsOffline = 0)
				BEGIN
					-- Increment and normalize the tracking number
					IF @nexttrackingnumber IS NULL SELECT @nexttrackingnumber = 0
					IF @nexttrackingnumber >= @maximumtrackingnumber SELECT @nexttrackingnumber = 0
					SELECT @nexttrackingnumber = (@nexttrackingnumber + 1)
				
					-- Update the tracking number on the for the user
					UPDATE UserSettingsBase SET NextTrackingNumber = @nexttrackingnumber FROM UserSettingsBase WHERE SystemUserId = @SystemUserId AND BusinessUnitId = @BusinessUnitId
				END
			COMMIT TRANSACTION
		END
	END

	
	-- Return results
	SELECT 
		@trackingprefix			AS 'trackingprefix', 
		@nexttrackingnumber		AS 'nexttrackingnumber', 
		@trackingtokenid		AS 'trackingtokenid', 
		@maximumtrackingnumber	AS 'maximumtrackingnumber', 
		@trackingtokeniddigits	AS 'trackingtokeniddigits', 
		@trackingtokenidbase	AS 'trackingtokenidbase'
END -- SProc