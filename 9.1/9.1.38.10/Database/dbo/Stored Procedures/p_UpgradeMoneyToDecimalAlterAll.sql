

CREATE PROCEDURE [dbo].[p_UpgradeMoneyToDecimalAlterAll]
(
     @TableName                     NVARCHAR(128)
    ,@RetryLimit                    TINYINT = 3
    ,@RetryDelayTime                TIME = NULL
    ,@LockTimeoutSeconds            TINYINT
    ,@Debug                         BIT = 0
    ,@MoneyReplaceString            NVARCHAR(20)
    ,@ExchangeRateReplaceString     NVARCHAR(20)
    ,@SessionTimeoutTimeUTC         DATETIME2(7)
    ,@ProcessState                  SMALLINT OUTPUT
)
AS

BEGIN TRY

SET NOCOUNT ON;
SET DEADLOCK_PRIORITY -10; --lower than LOW

DECLARE 
     @errorNumber      INT
    ,@errorMessage     NVARCHAR(4000)
    ,@isErrorRetryable BIT
    ,@eventSequence    TINYINT = 0
    ,@forceStop        BIT
;

--==============================================================
-- Validate parameters & conditions
--==============================================================

IF @@TRANCOUNT > 0
  BEGIN
    SET @errorMessage = N'Cannot execute from open transaction in ' + OBJECT_NAME(@@PROCID);
    RAISERROR(@errorMessage, 16, 1);
  END;

SELECT @forceStop = [ForceStop] FROM [dbo].[TableListMoneyUpgrade] WHERE [TableName] = @TableName;
IF (@forceStop = 1)
BEGIN
    RAISERROR(N'Execution has force stopped.', 16, 3);
END;

IF (SYSUTCDATETIME() > @SessionTimeoutTimeUTC)
BEGIN
    RAISERROR(N'Execution has timed out.', 16, 3);
END;

DECLARE @objectId INT = OBJECT_ID('[dbo].'+ QUOTENAME(@TableName), N'U');

-- in case an entity with money fields is deleted during migration
IF @objectId IS NULL
  RAISERROR(N'Table not found.', 16, 0);

DECLARE
     @cmd                                   NVARCHAR(MAX) = N''
    ,@alterLockTimeoutMilliseconds          INT 
    ,@retryCount                            TINYINT = 0
    ,@retryDelaySeconds                     TINYINT = DATEDIFF(SECOND, 0, CAST(ISNULL(@RetryDelayTime, N'00:00:01') AS DATETIME))
    ,@currentRetryDelayTime                 NVARCHAR(8)
    ,@tableState                            SMALLINT = 0
    ,@isVersionNumberCreationRequired       BIT = 0
    ,@entryTrancount                        INT = @@TRANCOUNT
    ,@eventId                               INT
    ,@exchangeRateColName                   NVARCHAR(128) = N'exchangerate'
    ,@exchangeRatePrecision                 TINYINT
    ,@exchangeRateScale                     TINYINT
    ,@newline                               NCHAR(2) = CHAR(13) + CHAR(10)
    ,@eventBeginDateTimeUTC                 DATETIME2(7)
;

SELECT @isVersionNumberCreationRequired = [IsVersionNumberCreationRequired]
FROM [dbo].[TableListMoneyUpgrade]
WHERE [TableName] = @TableName
AND [IsCompleted] = 0;

IF @@ROWCOUNT = 0
BEGIN
    SET @errorMessage = N'Table '+ QUOTENAME(@TableName) +' is not valid for processing.';
    RAISERROR(@errorMessage, 16, 1);
END;

-- generate alter add command
SELECT @cmd = IIF(@LockTimeoutSeconds IS NOT NULL, N'SET LOCK_TIMEOUT ' + CAST((@LockTimeoutSeconds * 1000) AS NVARCHAR(20)) + @newline, N'');

SELECT @cmd = @cmd + N'ALTER TABLE [dbo].' + QUOTENAME(@TableName) + N' ADD' + @newline;

SELECT @exchangeRateColName = c.[name], @exchangeRatePrecision = c.[precision], @exchangeRateScale = c.[scale]
FROM sys.columns c WITH (NOLOCK) 
WHERE c.[object_id] = @objectId
AND LOWER(c.[name]) = @exchangeRateColName
AND c.[is_computed] = 0;

IF (@exchangeRatePrecision IS NOT NULL) 
BEGIN
    IF (@exchangeRatePrecision <> 23 OR @exchangeRateScale <> 10)
    BEGIN
        SET @errorMessage = N'ExchangeRate column found with precision other than decimal(23,10).';
        RAISERROR(@errorMessage, 16, 5);
    END;

    -- add shadow '__%' column for exchange rate column.
    SELECT @cmd = @cmd + QUOTENAME(N'__' + @exchangeRateColName) + @ExchangeRateReplaceString + @newline + N','
END;

-- add shadow'__%' column(s) for money column(s)
SELECT @cmd = @cmd + QUOTENAME(N'__' + c.[name]) + @MoneyReplaceString + @newline + N','
FROM sys.columns c WITH (NOLOCK) 
WHERE c.[object_id] = @objectId
AND c.[user_type_id] = 60
AND c.[is_computed] = 0
ORDER BY c.[name];

SELECT @cmd = IIF(@isVersionNumberCreationRequired = 1, @cmd + N'[VersionNumber] timestamp', LEFT(@cmd, LEN(@cmd) - 1));

SELECT @eventSequence = 1; -- alter add columns

WHILE 1 = 1
 BEGIN -- alter add loop

    BEGIN TRY

      SELECT @eventBeginDateTimeUTC = SYSUTCDATETIME();

      BEGIN TRANSACTION;

        INSERT INTO [dbo].[TableListMoneyUpgradeEvent]
        (
             [TableName]
            ,[EventSequence]
            ,[State]
            ,[Command]
            ,[RetryCount]
            ,[RetryLimit]
        )
        SELECT 
             @TableName
            ,@eventSequence
            ,@tableState 
            ,@cmd
            ,0
            ,@RetryLimit
        ;

        SET @eventId = SCOPE_IDENTITY();

        IF @Debug = 1 PRINT @cmd;

        EXEC sp_executesql @cmd; 

        UPDATE [dbo].[TableListMoneyUpgrade]
        SET  [IsDecimalColumnsCreated] = 1
            ,[ErrorMessage] = NULL 
            ,[ErrorNumber] = NULL
            ,[ErrorProcedure] = NULL
            ,[RetryAfterTime] = NULL
            ,[ErrorEvent] = NULL
            ,[IsSentToTelemetry] = 0
            ,[ModifiedOn] = SYSUTCDATETIME()
        WHERE [TableName] = @TableName;

        SET @tableState = 1;

        UPDATE [dbo].[TableListMoneyUpgradeEvent]
        SET [EndDateTimeUTC] = SYSUTCDATETIME()
           ,[State] = @tableState
        WHERE [EventId] = @eventId;

      COMMIT TRANSACTION;

      BREAK;

    END TRY
    BEGIN CATCH

        SELECT @errorNumber = ERROR_NUMBER()
              ,@errorMessage = ERROR_MESSAGE();

        IF @@TRANCOUNT > 0 ROLLBACK;

        -- deadlock, timeout or referenced entity modified errors are retryable.
        SET @isErrorRetryable = IIF(@errorNumber IN (1204, 1205, 1222, 2021), 1, 0);

        IF (@isErrorRetryable = 1 AND @RetryLimit > @retryCount)
          SET @tableState = 2; -- retry
        ELSE
          SET @tableState = -1; -- terminate in error

        INSERT INTO [dbo].[TableListMoneyUpgradeEvent]
        (    
             [TableName]
            ,[BeginDateTimeUTC]
            ,[EndDateTimeUTC] 
            ,[EventSequence]
            ,[State]
            ,[Command]
            ,[RetryCount]
            ,[RetryLimit]
            ,[ErrorNumber]
            ,[ErrorMessage]
        )
        SELECT  
             @TableName
            ,@eventBeginDateTimeUTC
            ,SYSUTCDATETIME()
            ,@eventSequence
            ,@tableState
            ,@cmd
            ,IIF(@isErrorRetryable = 1, @retryCount, 0)
            ,@RetryLimit
            ,@errorNumber
            ,@errorMessage
        ;

        IF @tableState = -1
          THROW;

        -- retry
        SET @retryCount = @retryCount + 1;
        SET @currentRetryDelayTime = CONVERT(NVARCHAR(8), DATEADD(SECOND, @retryDelaySeconds * @retryCount, 0), 8);
        WAITFOR DELAY @currentRetryDelayTime;

    END CATCH

 END; -- alter add loop

SELECT @ProcessState = @tableState;

END TRY
BEGIN CATCH
    
    EXEC [dbo].[p_UpgradeMoneyToDecimalErrorHandler]
         @TableName             = @TableName
        ,@EventSequence         = @eventSequence
        ,@SessionTimeoutTimeUTC = @SessionTimeoutTimeUTC
        ,@Debug                 = @Debug
        ,@ProcessState          = @ProcessState OUTPUT;

END CATCH

RETURN;