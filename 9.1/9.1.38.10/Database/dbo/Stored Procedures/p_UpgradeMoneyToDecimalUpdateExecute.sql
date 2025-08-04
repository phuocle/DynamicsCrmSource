

CREATE PROCEDURE [dbo].[p_UpgradeMoneyToDecimalUpdateExecute]
(
     @UpdatePhase                       SMALLINT -- 2=initial, 3=catchup, 4=final
    ,@TableName                         NVARCHAR(128) 
    ,@VersionNumberLo                   BINARY(8)
    ,@VersionNumberHi                   BINARY(8)
    ,@ChunkSize                         INT
    ,@RetryLimit                        TINYINT
    ,@RetryDelayTime                    TIME = NULL
    ,@LockTimeoutSeconds                TINYINT
    ,@IterationCount                    INT
    ,@RowcountLimit                     INT
    ,@SessionTimeoutTimeUTC             DATETIME2(7)
    ,@ExchangeRateColName               NVARCHAR(128)
    ,@MoneyReplaceString                NVARCHAR(20) = NULL
    ,@ExchangeRateReplaceString         NVARCHAR(20) = NULL
    ,@Debug                             BIT 
    ,@RowcountProcessed                 INT OUTPUT
    ,@ProcessState                      SMALLINT OUTPUT
)
AS

BEGIN TRY

SET NOCOUNT ON;
SET DEADLOCK_PRIORITY -10; -- lower than LOW

DECLARE 
     @errorNumber      INT
    ,@errorMessage     NVARCHAR(4000)
    ,@isErrorRetryable BIT
    ,@forceStop        BIT
;

SELECT @forceStop = [ForceStop] FROM [dbo].[TableListMoneyUpgrade] WHERE [TableName] = @TableName;
IF (@forceStop = 1)
BEGIN
    RAISERROR(N'Execution has force stopped.', 16, 3);
END;

IF (SYSUTCDATETIME() > @SessionTimeoutTimeUTC)
BEGIN
    RAISERROR(N'Execution has timed out.', 16, 3);
END;

DECLARE @newline NCHAR(2) = CHAR(13) + CHAR(10);

DECLARE
     @cmd                                   NVARCHAR(MAX) = N''
    ,@rowcount                              INT
    ,@eventId                               INT
    
    ,@retryCount                            TINYINT = 0
    ,@retryDelaySeconds                     TINYINT = DATEDIFF(SECOND, 0, CAST(ISNULL(@RetryDelayTime, N'00:00:01') AS DATETIME))
    ,@currentRetryDelayTime                 NVARCHAR(8)
    ,@tableState                            SMALLINT

    ,@whereTemplate                         NVARCHAR(MAX) = N'
  OR (ISNULL(<oldcol>, 0) <> ISNULL(<newcol>, 0))
  OR (<oldcol> IS NULL AND <newcol> IS NOT NULL)
  OR (<oldcol> IS NOT NULL AND <newcol> IS NULL)
'
    ,@setTemplate                           NVARCHAR(MAX) = N'<newcol> = <oldcol>' + @newline + N','
    ,@cmdSetLockTimeout                     NVARCHAR(60) = N'SET LOCK_TIMEOUT <ms>;' + @newline
    ,@lastVersionNumberHi                   BINARY(8)
    ,@eventBeginDateTimeUTC                 DATETIME2(7)
    ,@eventExists                           BIT
;

IF @LockTimeoutSeconds IS NOT NULL
  BEGIN
    SET @cmdSetLockTimeout = REPLACE(@cmdSetLockTimeout, N'<ms>', CAST((@LockTimeoutSeconds * 1000) AS NVARCHAR(20)));
  END
ELSE
  BEGIN
    SET @cmdSetLockTimeout = N'';
  END;

IF @UpdatePhase = 4
  BEGIN
    -- get the lock without materializing a recordset
    SET @cmd = @cmdSetLockTimeout + N'DECLARE @i INT' + @newline 
               + N'SELECT TOP 1 @i=1 FROM ' + QUOTENAME(@TableName) + N' WITH (TABLOCKX) WHERE 1=2;' + @newline;
  END;
ELSE
  BEGIN
    SET @cmd = @cmdSetLockTimeout;
  END;

-- @versionNumberLo can be null when there are no records to update or when all records are updated.
-- when @versionNumberLo is null, no update is reqquired. hence lock command is also not required.
-- but in final update (@UpdatePhase = 4), lock command is required to for replace columns operation.
IF (@versionNumberLo IS NULL AND @UpdatePhase <> 4)
BEGIN
  SET @cmd = N'';
END

IF @versionNumberLo IS NOT NULL
BEGIN -- generate update script

    -- generate command to add version number of rows to be updated to a table variable.
    SET @cmd = @cmd + @newline + N'DECLARE @VersionNumberList TABLE ([VersionNumber] VARBINARY(8));
INSERT INTO @VersionNumberList ([VersionNumber])
SELECT ' + IIF(@ChunkSize > 0, N'TOP(' + CAST(@ChunkSize AS NVARCHAR(6)) + N')',  N'') + N' [VersionNumber]  
FROM [dbo].' + QUOTENAME(@TableName) + IIF(@UpdatePhase <> 4, N' WITH (ROWLOCK)', N'') + N'
WHERE ([VersionNumber] >= @INVersionNumberLo' + IIF(@UpdatePhase <> 4, N' AND [VersionNumber] <= @InVersionNumberHi', N'') + N')
AND   (1 = 2 ' + @newline;

    IF @UpdatePhase = 2
    BEGIN
        IF @exchangeRateColName IS NOT NULL
        BEGIN
            SELECT @cmd = @cmd + '  OR '+ QUOTENAME(@exchangeRateColName) +' IS NOT NULL' + @newline;
        END
        ELSE
        BEGIN
            SELECT @cmd = @cmd + '  OR '+ QUOTENAME([ColumnName]) +' IS NOT NULL' + @newline
            FROM #clist;
        END;
    END
    ELSE
    BEGIN
        IF @exchangeRateColName IS NOT NULL
        BEGIN
            SELECT @cmd = @cmd + REPLACE(REPLACE(@WhereTemplate, N'<newcol>', QUOTENAME(N'__' + @exchangeRateColName)), N'<oldcol>', QUOTENAME(@exchangeRateColName));
            
            -- when exchangerate column exists, checking non-base columns in where clause is sufficient to find if any money value is changed.
            SELECT @cmd = @cmd + REPLACE(REPLACE(@WhereTemplate, N'<newcol>', QUOTENAME(N'__'+ [ColumnName])), N'<oldcol>', QUOTENAME([ColumnName]))
            FROM #clist;
        END
        ELSE
        BEGIN
            SELECT @cmd = @cmd + REPLACE(REPLACE(@WhereTemplate, N'<newcol>', QUOTENAME(N'__'+ [ColumnName])), N'<oldcol>', QUOTENAME([ColumnName]))
                               + REPLACE(REPLACE(@WhereTemplate, N'<newcol>', QUOTENAME(N'__'+ [BaseColumnName])), N'<oldcol>', QUOTENAME([BaseColumnName]))
            FROM #clist;
        END;
    END;

    SELECT @cmd = LEFT(@cmd, (LEN(@cmd) - 1)) + N')';
    SELECT @cmd = @cmd + IIF(@ChunkSize > 0,  @newline + N'ORDER BY [VersionNumber];', N';') + @newline + @newline;

    -- generate update command.
    SELECT @cmd = @cmd + N'UPDATE [dbo].' + QUOTENAME(@TableName) + N' SET' + @newline;

    -- generate set block.
    IF @exchangeRateColName IS NOT NULL
    BEGIN
      SELECT @cmd = @cmd + REPLACE(REPLACE(@SetTemplate, N'<newcol>', QUOTENAME(N'__' + @exchangeRateColName)), N'<oldcol>', QUOTENAME(@exchangeRateColName));
    END;

    SELECT @cmd = @cmd + REPLACE(REPLACE(@SetTemplate, N'<newcol>', QUOTENAME(N'__' + [ColumnName])), N'<oldcol>', QUOTENAME([ColumnName]))
                       + REPLACE(REPLACE(@SetTemplate, N'<newcol>', QUOTENAME(N'__' + [BaseColumnName])), N'<oldcol>', QUOTENAME([BaseColumnName]))
    FROM #clist;

    -- generate where cluase.
    SELECT @cmd = LEFT(@cmd, (LEN(@cmd)-1)) + N'WHERE [VersionNumber] IN (SELECT [VersionNumber] FROM  @VersionNumberList);' + @newline + @newline;
    SELECT @cmd = @cmd + N'SELECT @OUTRowcount = @@ROWCOUNT;' + @newline;
    SELECT @cmd = @cmd + N'SELECT @OUTLastVersionNumberHi = (SELECT MAX([VersionNumber]) FROM  @VersionNumberList);';

END; -- generate update script

WHILE 1 = 1 
  BEGIN -- update loop

    BEGIN TRY -- update

      SELECT @rowcount = 0
            ,@eventBeginDateTimeUTC = SYSUTCDATETIME();

     -- since command is same for all iterations of an event, this flag helps to decide whether to log the command.
      SELECT @eventExists = IIF(EXISTS(
        SELECT 1 FROM [dbo].[TableListMoneyUpgradeEvent] 
        WHERE [TableName] = @TableName
        AND [EventSequence] = @UpdatePhase
      ), 1, 0);

      BEGIN TRANSACTION;

        INSERT INTO [dbo].[TableListMoneyUpgradeEvent]
        (    [TableName]
            ,[EventSequence]
            ,[Iteration]
            ,[VersionNumberLo]
            ,[VersionNumberHi]
            ,[State]
            ,[Command]
            ,[RetryLimit]
            ,[RowcountLimit]
        )
        SELECT  
             @TableName
            ,@UpdatePhase 
            ,@IterationCount
            ,@VersionNumberLo
            ,@VersionNumberHi
            ,0 -- running
            ,IIF(@eventExists = 1, N'', @cmd)
            ,@RetryLimit
            ,@RowcountLimit
        ;

        SELECT @eventId = SCOPE_IDENTITY();

        IF @Debug = 1 
        BEGIN
          PRINT '@UpdatePhase: ' + ISNULL(CONVERT(CHAR(2), @UpdatePhase), 'NULL');
          PRINT '@INVersionNumberLo: ' + ISNULL(CONVERT(NVARCHAR(MAX), CONVERT(BINARY(8), @VersionNumberLo), 1), 'NULL');
          PRINT '@INVersionNumberHi: ' + ISNULL(CONVERT(NVARCHAR(MAX), CONVERT(BINARY(8), @VersionNumberHi), 1), 'NULL');
        END;

        -- execute update script
        IF @cmd <> N'' -- @cmd can be empty when @versionNumberLo is null and @UpdatePhase <> 4
        BEGIN

          IF @Debug = 1 PRINT @cmd;
          
          IF (@versionNumberLo IS NULL AND @UpdatePhase = 4)
          BEGIN
            -- when (@versionNumberLo IS NULL AND @UpdatePhase = 4), @cmd contains only lock statement
            -- hence no need to pass input and output parameters required for update operation.
            EXEC sp_executesql @cmd;
          END;
          ELSE
          BEGIN     
            EXEC sp_executesql
                @cmd
                ,N'@INVersionNumberLo VARBINARY(8), @INVersionNumberHi VARBINARY(8), @OUTRowcount INT OUTPUT, @OUTLastVersionNumberHi VARBINARY(8) OUTPUT'
                ,@INVersionNumberLo = @VersionNumberLo, @INVersionNumberHi = @VersionNumberHi
                ,@OUTRowcount = @rowcount OUTPUT
                ,@OUTLastVersionNumberHi = @lastVersionNumberHi OUTPUT;
          END;

          IF @Debug = 1 
          BEGIN
            PRINT '@OUTRowcount: ' + CONVERT(NVARCHAR(MAX), @rowcount);
            PRINT '@OUTLastVersionNumberHi: ' + ISNULL(CONVERT(NVARCHAR(MAX), CONVERT(BINARY(8), @lastVersionNumberHi), 1), 'NULL');
          END;

        END;

        SET @tableState = 1;

        UPDATE [dbo].[TableListMoneyUpgradeEvent]
        SET [EndDateTimeUTC] = SYSUTCDATETIME()
           ,[State] = @tableState -- successful completion
           ,[Rowcount] = @rowcount
        WHERE [EventId] = @eventId;

        UPDATE [dbo].[TableListMoneyUpgrade]
        SET  [TotalRowsUpdated] = ISNULL([TotalRowsUpdated], 0) + @rowcount
            ,[RowsUpdatedOnLastDay] = ISNULL([RowsUpdatedOnLastDay], 0) + @rowcount
            ,[LastVersionNumberHi] = ISNULL(@lastVersionNumberHi, [LastVersionNumberHi])
            ,[ErrorMessage] = NULL 
            ,[ErrorNumber] = NULL
            ,[ErrorProcedure] = NULL
            ,[RetryAfterTime] = NULL
            ,[ErrorEvent] = NULL
            ,[IsSentToTelemetry] = 0
            ,[ModifiedOn] = SYSUTCDATETIME()
        WHERE [TableName] = @TableName;

        -- replace columns after final update.
        IF @UpdatePhase = 4
        BEGIN 
            IF (@MoneyReplaceString IS NULL OR @ExchangeRateReplaceString IS NULL)
              RAISERROR(N'@MoneyReplaceString or @ExchangeRateReplaceString value cannot be null.', 16, 1);

            EXEC [dbo].[p_UpgradeMoneyToDecimalReplaceColumns]
                 @TableName                 = @TableName
                ,@MoneyReplaceString        = @MoneyReplaceString
                ,@ExchangeRateReplaceString = @ExchangeRateReplaceString
                ,@Debug                     = @Debug;
        END;

      COMMIT TRANSACTION;

      BREAK;

    END TRY -- update
    BEGIN CATCH
    
        SET @rowcount = -1;

        SELECT @errorNumber = ERROR_NUMBER()
              ,@errorMessage = ERROR_MESSAGE()
        ;

        IF @@TRANCOUNT > 0 ROLLBACK;

        -- deadlock, timeout or referenced entity modified errors are retryable.
        SET @isErrorRetryable = IIF(@errorNumber IN (1204, 1205, 1222, 2021), 1, 0);

        IF (@isErrorRetryable = 1 AND @RetryLimit > @retryCount)
          SET @tableState = 2; -- retry
        ELSE
          SET @tableState = -1; -- terminate in error

        INSERT INTO [dbo].[TableListMoneyUpgradeEvent]
        (    [TableName]
            ,[BeginDateTimeUTC]
            ,[EndDateTimeUTC] 
            ,[EventSequence]
            ,[Iteration]
            ,[State]
            ,[VersionNumberLo] 
            ,[VersionNumberHi] 
            ,[Command]
            ,[RetryCount]
            ,[RetryLimit]
            ,[RowcountLimit]
            ,[ErrorNumber]
            ,[ErrorMessage]
        )
        SELECT  
             @TableName
            ,@eventBeginDateTimeUTC
            ,SYSUTCDATETIME()
            ,@UpdatePhase
            ,@IterationCount
            ,@tableState
            ,@VersionNumberLo
            ,@VersionNumberHi
            ,IIF(@isErrorRetryable = 1, IIF(@eventExists = 1, N'', @cmd), @cmd)
            ,IIF(@isErrorRetryable = 1, @retryCount, 0)
            ,@RetryLimit
            ,@RowcountLimit
            ,@errorNumber
            ,@errorMessage
        ;

        IF @tableState = -1
          THROW;

        -- retry
        SET @retryCount = @retryCount + 1;
        SET @currentRetryDelayTime = CONVERT(NVARCHAR(8), DATEADD(SECOND, @retryDelaySeconds * @retryCount, 0), 8);
        WAITFOR DELAY @currentRetryDelayTime;

    END CATCH;
  
  END; --update loop

SELECT @ProcessState = 
    CASE
      WHEN (@rowcount <> -1 AND (@UpdatePhase = 4 OR @rowcount < @ChunkSize)) THEN 1 -- done 
      -- it's ok for the final update to have any rowcount except -1 as all rows are updated in a single chunk.
      ELSE 0 -- keep going/iterate, final phase (4) does not iterate
    END 
   ,@RowcountProcessed = IIF(@rowcount = -1, 0, @rowcount)
;

END TRY
BEGIN CATCH
    
    IF @@TRANCOUNT > 0 ROLLBACK;
    THROW;
    
END CATCH

RETURN;