

CREATE PROCEDURE [dbo].[p_UpgradeMoneyToDecimalErrorHandler]
(
     @TableName               NVARCHAR(128)
    ,@EventSequence           TINYINT
    ,@SessionTimeoutTimeUTC   DATETIME2(7)
    ,@Debug                   BIT
    ,@ProcessState            SMALLINT OUTPUT
)
AS

DECLARE 
     @errorNumber        INT = ERROR_NUMBER()
    ,@errorMessage       NVARCHAR(4000) = ERROR_MESSAGE()
    ,@errorProcName      NVARCHAR(128) = ERROR_PROCEDURE()
    ,@errorState         INT = ERROR_STATE()
    ,@errorSeverity      INT = ERROR_SEVERITY()
    ,@isErrorRetryable   BIT
;

IF @@TRANCOUNT > 0 ROLLBACK;

IF @Debug = 1 
BEGIN
    PRINT CONCAT('ERROR_NUMBER: ', @errorNumber);
    PRINT CONCAT('ERROR_MESSAGE: ', @errorMessage);
    PRINT CONCAT('ERROR_STATE: ', @errorState);
    PRINT CONCAT('ERROR_PROCEDURE: ', @errorProcName);
    PRINT CONCAT('ERROR_SEVERITY: ', @errorSeverity);
END;

-- 50000 is custom error number thrown by RAISERROR, table specific errors are raised with state 2.
-- we raise custom errors with 6 different error states.
-- errorState 0 is for an error which completes table processing with an error. sample error: Table not found.
-- errorState 1 is for an error which must be thrown to caller.
-- errorState 2 is for an error which can be supressed & retried after a second (immediately). sample error: Iteration limit reached.
-- errorState 3 is for an error which can be supressed & retried after current session/run. sample error: Execution has timed out.
-- errorState 4 is for an error which can be supressed & retried after current day. sample error: Daily row update limit reached.
-- errorState 5 is for an error which can be supressed but cannot be retried. sample error: No attribute found in AttributeView.

IF (@errorNumber = 50000 AND @errorState = 1)
    THROW @errorNumber, @errorMessage, @errorState;

SELECT @isErrorRetryable = IIF(@errorNumber IN (1204, 1205, 1222, 2021), 1, 0);

-- Despite retryable error, immediate retry may not be susccessful if any expensive operation going on the table.
-- RetryAfterTime value helps to retry the operation failed with retryable error after specified amount of time.

UPDATE [dbo].[TableListMoneyUpgrade]
SET  [IsCompleted] = IIF(@errorNumber = 50000 AND @errorState = 0, 1, 0)
    ,[ErrorMessage] = @errorMessage
    ,[ErrorNumber] = @errorNumber
    ,[ErrorProcedure] = @errorProcName
    ,[RetryAfterTime] = 
        CASE
            -- can be retried after a second (immediately).
            WHEN (@isErrorRetryable = 1 AND @EventSequence = 10) THEN DATEADD(SECOND, 1, SYSUTCDATETIME())
            WHEN (@errorNumber = 50000 AND @errorState = 2) THEN DATEADD(SECOND, 1, SYSUTCDATETIME())
            -- can be retried after current session/run.
            WHEN (@isErrorRetryable = 1) THEN DATEADD(MINUTE, 1, @SessionTimeoutTimeUTC)
            WHEN (@errorNumber = 50000 AND @errorState = 3) THEN DATEADD(MINUTE, 1, @SessionTimeoutTimeUTC)
            -- can be retried after current day.
            WHEN (@errorNumber = 50000 AND @errorState = 4) THEN CAST(DATEADD(DAY, 1, SYSUTCDATETIME()) AS DATE)
            -- non-retryable errors and custom errors with state 0 and 5 cannot be retried.
            ELSE NULL
            END
    ,[ErrorEvent] = ISNULL([ErrorEvent], @EventSequence)
    ,[IsSentToTelemetry] = 0
    ,[ModifiedOn] = SYSUTCDATETIME()
WHERE [TableName] = @tableName;

-- Raise error if too many tables failed in a 2 minute window.
DECLARE @tableCount INT = 0, @errorCount INT = 0;

SELECT @tableCount = COUNT(1), @errorCount = SUM(IIF([ErrorNumber] IS NOT NULL, 1, 0))
FROM [dbo].[TableListMoneyUpgrade]
WHERE DATEDIFF(SECOND, [ModifiedOn], SYSUTCDATETIME()) <= 120;

IF @Debug = 1 
BEGIN
    PRINT CONCAT('@tableCount: ', @tableCount);
    PRINT CONCAT('@errorCount: ', @errorCount);
END

IF @tableCount >= 10 AND @errorCount >= 7
    RAISERROR(N'Cannot continue execution due to several failures in last 2 minute window. Please analyse the root cause.', 16, 1);

SET @ProcessState = -1;

RETURN;