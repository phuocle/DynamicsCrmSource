

CREATE PROCEDURE [dbo].[p_UpgradeMoneyToDecimalUpdate]
(
     @ProcessInitialUpdates             BIT = 0
    ,@ProcessCatchupUpdates             BIT = 0
    ,@ProcessFinalUpdates               BIT = 0
    
    ,@InitialUpdateChunkSize            INT = 5
    ,@InitialUpdateIterationLimit       INT = 1000 -- not honoured
    ,@InitialUpdateRowcountLimit        INT = 4500000 -- not honoured
    ,@InitialUpdateRetryLimit           INT = 3
    ,@InitialUpdateRetryDelayTime       TIME = '00:00:01'
    ,@InitialUpdateLockTimeoutSeconds   INT = 1

    ,@CatchupUpdateChunkSize            INT = 2
    ,@CatchupUpdateIterationLimit       INT = 1000 -- not honoured
    ,@CatchupUpdateRowcountLimit        INT = 4500000 -- not honoured
    ,@CatchupUpdateRetryLimit           INT = 3
    ,@CatchupUpdateRetryDelayTime       TIME = '00:00:01'
    ,@CatchupUpdateLockTimeoutSeconds   INT = 1

    ,@FinalUpdateRowcountLimit          INT = 100000 -- not honoured
    ,@FinalUpdateRetryLimit             INT = 5
    ,@FinalUpdateRetryDelayTime         TIME = '00:00:01'
    ,@FinalUpdateLockTimeoutSeconds     INT = 1

    ,@SessionIterationLimit             INT = 1000
    ,@SessionRowcountLimit              INT = 4500000
    ,@SessionTimeoutTimeUTC             DATETIME2(7)

    ,@TableName                         NVARCHAR(128)
    ,@MoneyReplaceString                NVARCHAR(20)
    ,@ExchangeRateReplaceString         NVARCHAR(20)
    ,@Debug                             BIT = 0
    ,@ProcessState                      SMALLINT OUTPUT
)
AS

BEGIN TRY

/*
--KNOWN ISSUES:
--query plan on update not validated (should seek on VersionNumber index, need volume data)
--doesn't tolerate add/drop of money columns after TableListMoneyUpgrade is initialized
*/

SET NOCOUNT ON;
SET DEADLOCK_PRIORITY -10; -- lower than LOW

DECLARE 
    @errorMessage    NVARCHAR(4000)
   ,@eventSequence   TINYINT = 0
;

--==============================================================
-- Validate parameters & conditions
--==============================================================
IF @@TRANCOUNT > 0
BEGIN
  SET @errorMessage = N'Cannot execute from open transaction in ' + OBJECT_NAME(@@PROCID);
  RAISERROR(@errorMessage, 16, 1);
END;

-- executive proc must send a non-null value.
IF (@SessionTimeoutTimeUTC IS NULL)
  RAISERROR(N'SessionTimeoutTime value cannot be null.', 16, 1);

DECLARE @objectId INT = OBJECT_ID('[dbo].'+ QUOTENAME(@TableName), N'U');

-- in case an entity with money fields is deleted during migration
IF @objectId IS NULL
  RAISERROR(N'Table not found.', 16, 0);
  
SELECT @ProcessInitialUpdates = ISNULL(@ProcessInitialUpdates, 0)
      ,@ProcessCatchupUpdates = ISNULL(@ProcessCatchupUpdates, 0)
      ,@ProcessFinalUpdates = ISNULL(@ProcessFinalUpdates, 0);
      
IF (@ProcessInitialUpdates = 0 AND @ProcessCatchupUpdates = 0 AND @ProcessFinalUpdates = 0)
  RAISERROR(N'All update flags are disabled. Please enable at least one to perform updates.', 16, 1);

IF @InitialUpdateChunkSize <= 0 SET @InitialUpdateChunkSize = 1;
IF @CatchupUpdateChunkSize <= 0 SET @CatchupUpdateChunkSize = 1;
IF @FinalUpdateRowcountLimit <= 0 SET @FinalUpdateRowcountLimit = 1;

DECLARE @newline NCHAR(2) = CHAR(13) + CHAR(10);

DECLARE
     @cmd                                   NVARCHAR(MAX) = N''
    ,@exchangeRateColName                   NVARCHAR(128)
    ,@rowcount                              INT
    ,@sessionRowcount                       INT
    ,@loopUpdateRowcount                    INT = 0
    ,@iterationCount                        INT = 0
    ,@sessionIterationCount                 INT = 0

    ,@versionNumberLo                       BINARY(8)
    ,@versionNumberHi                       BINARY(8)
 
    ,@finalUpdateChunkSize                  INT = -1
    ,@initialVersionNumberLo                BINARY(8)
    ,@initialVersionNumberHi                BINARY(8)
    ,@lastVersionNumberLo                   BINARY(8)
    ,@lastVersionNumberHi                   BINARY(8)

    ,@isDecimalColumnsCreated               BIT
    ,@isUpdateInitialPass                   BIT
    ,@isUpdateCatchupPass                   BIT
    ,@isUpdateFinalPass                     BIT
    ,@isCompleted                           BIT
    ,@changeTrackingEnabled                 BIT
;

--==============================================================
-- Validate run conditions
--==============================================================

SELECT
     @isDecimalColumnsCreated = tlmu.[IsDecimalColumnsCreated]
    ,@isUpdateInitialPass = tlmu.[IsUpdateInitialPass]
    ,@isUpdateCatchupPass = tlmu.[IsUpdateCatchupPass]
    ,@isUpdateFinalPass = tlmu.[IsUpdateFinalPass]
    ,@isCompleted = tlmu.[IsCompleted]
    ,@InitialUpdateChunkSize = COALESCE(@InitialUpdateChunkSize, tlmu.[InitialUpdateChunkSize], 1000)
    ,@InitialUpdateIterationLimit = COALESCE(@InitialUpdateIterationLimit, tlmu.[InitialUpdateIterationLimit], 1000)
    ,@InitialUpdateRowcountLimit = COALESCE(@InitialUpdateRowcountLimit, tlmu.[InitialUpdateRowcountLimit], 4500000)
    ,@InitialUpdateRetryLimit = COALESCE( @InitialUpdateRetryLimit, tlmu.[InitialUpdateRetryLimit],3)
    ,@CatchupUpdateChunkSize = COALESCE(@CatchupUpdateChunkSize, tlmu.[CatchupUpdateChunkSize], 1000)
    ,@CatchupUpdateIterationLimit = COALESCE(@CatchupUpdateIterationLimit, tlmu.[CatchupUpdateIterationLimit], 1000)
    ,@CatchupUpdateRowcountLimit = COALESCE(@CatchupUpdateRowcountLimit, tlmu.[CatchupUpdateRowcountLimit], 4500000)
    ,@CatchupUpdateRetryLimit = COALESCE(@CatchupUpdateRetryLimit, tlmu.[CatchupUpdateRetryLimit], 3)
    ,@FinalUpdateRowcountLimit = COALESCE(@FinalUpdateRowcountLimit, tlmu.[FinalUpdateRowcountLimit], 100000)
    ,@FinalUpdateRetryLimit = COALESCE(@FInalUpdateRetryLimit, tlmu.[FinalUpdateRetryLimit], 5)
    ,@initialVersionNumberLo = tlmu.[InitialVersionNumberLo]
    ,@initialVersionNumberHi = tlmu.[InitialVersionNumberHi]
    ,@lastVersionNumberLo = tlmu.[LastVersionNumberLo]
    ,@lastVersionNumberHi = tlmu.[LastVersionNumberHi]
    ,@sessionRowcount = ISNULL(tlmu.[RowsUpdatedOnLastDay], 0)
FROM [dbo].[TableListMoneyUpgrade] tlmu
WHERE tlmu.[TableName] = @TableName;

IF @@ROWCOUNT = 0
BEGIN
  SET @errorMessage = N'Table {0} is not listed for upgrade.';
  RAISERROR(@errorMessage, 16, 1);
END;

IF @IsDecimalColumnsCreated = 0
BEGIN
  SET @errorMessage = N'Decimal columns are not created for table ' + QUOTENAME(@TableName);
  RAISERROR(@errorMessage, 16, 1);
END;

IF @IsCompleted = 1
BEGIN
  SET @errorMessage = N'Table {0} is already processed.';
  RAISERROR(@errorMessage, 16, 1);
END;

DECLARE
  @entityName   NVARCHAR(128) = IIF(@TableName LIKE N'%Base', LEFT(@TableName, LEN(@TableName)-4), @TableName)
 ,@entityId     UNIQUEIDENTIFIER = NULL
;

IF OBJECT_ID('[dbo].'+ QUOTENAME(@entityName), N'V') IS NOT NULL
BEGIN
  SET @entityId = (SELECT e.[EntityId] FROM dbo.[EntityView] e WITH (NOLOCK) WHERE e.[LogicalName] = LOWER(@entityName));
END;

IF @entityId IS NULL -- this can happen for rollup tables
  SET @changeTrackingEnabled = 0;
ELSE
  SET @changeTrackingEnabled = (
    SELECT ISNULL(e.[ChangeTrackingEnabled], 0)
    FROM [dbo].[EntityView] e
    WHERE e.[EntityId] = @entityId
);

SELECT
     @SessionIterationLimit = ISNULL(@SessionIterationLimit, 1000)
    ,@SessionRowcountLimit = IIF(@changeTrackingEnabled = 1, ISNULL(@SessionRowcountLimit, 4500000), 0); 

IF (@SessionRowcountLimit > 0 AND @sessionRowcount >= @SessionRowcountLimit)
  RAISERROR(N'Daily row update limit reached.', 16, 4);

DROP TABLE IF EXISTS #clist;
CREATE TABLE #clist ([ColumnName] NVARCHAR(128) PRIMARY KEY CLUSTERED, [BaseColumnName] NVARCHAR(128) NOT NULL);
DECLARE @clist TABLE ([name] NVARCHAR(128) PRIMARY KEY CLUSTERED);
DECLARE @columnCount INT, @columnAndBaseColumnCount INT;
 
INSERT INTO @clist([name])
SELECT c.[name]
FROM sys.columns c WITH (NOLOCK) 
WHERE c.[object_id] = @objectId
AND c.[user_type_id] = 60
AND c.[is_computed] = 0
AND EXISTS (
    SELECT 1
    FROM sys.columns c1 WITH (NOLOCK) 
    WHERE c1.[object_id] = @objectId
    AND c1.[name] = CONCAT('__', c.[name]) -- shadow column pattern '__ColumnName'
);

SELECT @columnCount = @@ROWCOUNT;

IF @TableName = N'ActivityPointerBase'
BEGIN

    INSERT INTO #clist ([ColumnName], [BaseColumnName])
    SELECT c1.[name], c2.[name]
    FROM @clist c1
    JOIN sys.columns c2 WITH (NOLOCK)
      ON  c2.[object_id] = @objectId 
      AND c2.[name] = CONCAT(c1.[name], N'_Base')
    WHERE c1.[name] NOT LIKE '%[_]Base';

END
ELSE IF @entityId IS NOT NULL
BEGIN

    -- we use [AttributeView] to find exact base money column names.
    -- we cannot rely on '%[_]Base' pattern to find base money columns as users are allowed to create money fields with '_Base' suffix.
    INSERT INTO #clist ([ColumnName], [BaseColumnName])
    SELECT a1.[TableColumnName], a2.[TableColumnName]
    FROM @clist c 
    JOIN [dbo].[AttributeView] a1 WITH (NOLOCK)
      ON  a1.[EntityId] = @entityId 
      AND a1.[TableColumnName] COLLATE DATABASE_DEFAULT = c.[name] COLLATE DATABASE_DEFAULT
    JOIN [dbo].[AttributeView] a2 WITH (NOLOCK)
      ON  a2.[EntityId] = a1.[EntityId] 
      AND a2.[CalculationOf] = a1.[AttributeId]
      AND a2.IsBaseCurrency = 1;

END;

SELECT @columnAndBaseColumnCount = @@ROWCOUNT;

-- since both currency and base currency columns are in a single record, need to multiply by 2 for total count.
IF (@columnCount <> (2 * @columnAndBaseColumnCount))
    RAISERROR(N'Mismatching no.of columns and base columns found.', 16, 5);

SELECT @exchangeRateColName = c.[name] FROM sys.columns c
WHERE c.[object_id] = @objectId 
AND (LOWER(c.[name]) = N'exchangerate' AND c.[precision] = 23 AND c.[scale] = 10);
  
-- if @isUpdateFinalPass is 1 (completed), that means columns exist but got replaced in final update.
-- hence we should not log no columns found error and let it run to regenerate rollup procs and
-- refresh view event in order to complete the table processing.
IF (@isUpdateFinalPass = 0 AND @columnCount = 0 AND @exchangeRateColName IS NULL)
  RAISERROR(N'No convertible columns found.', 16, 0);

IF (@ProcessInitialUpdates = 1 AND @isUpdateInitialPass = 0)
BEGIN --process initial updates

    SELECT 
         @ProcessState = 0
        ,@versionNumberLo = @initialVersionNumberLo
        ,@versionNumberHi = @initialVersionNumberHi
        ,@eventSequence = 2; -- initial update

    -- this happens when initial updates are processed for the first time.
    IF @versionNumberLo IS NULL AND @versionNumberHi IS NULL
    BEGIN
      SELECT @cmd = N'
UPDATE [dbo].[TableListMoneyUpgrade]
SET [InitialVersionNumberLo] = (SELECT MIN([VersionNumber]) FROM [dbo].' + QUOTENAME(@TableName) + N')
   ,[InitialVersionNumberHi] = (SELECT MAX([VersionNumber]) FROM [dbo].' + QUOTENAME(@TableName) + N')
   ,[IsSentToTelemetry] = 0
   ,[ModifiedOn] = SYSUTCDATETIME()
WHERE [TableName] = ''' + @TableName+ ''';

SELECT @OUTVersionNumberLo = [InitialVersionNumberLo], @OUTVersionNumberHi = [InitialVersionNumberHi] FROM [dbo].[TableListMoneyUpgrade]
WHERE [TableName] = ''' + @TableName+ ''';';

      IF @Debug = 1 PRINT @cmd;

      EXEC sp_executesql
              @cmd
              ,N'@OUTVersionNumberLo VARBINARY(8) OUTPUT, @OUTVersionNumberHi VARBINARY(8) OUTPUT'
              ,@OUTVersionNumberLo = @versionNumberLo OUTPUT
              ,@OUTVersionNumberHi = @versionNumberHi OUTPUT;
    END;

    WHILE 1 = 1
      BEGIN -- initial update iteration loop

        SELECT @iterationCount = @iterationCount + 1
              ,@sessionIterationCount = @sessionIterationCount + 1
        ; 

        EXEC [dbo].[p_UpgradeMoneyToDecimalUpdateExecute]
             @UpdatePhase               = @eventSequence         
            ,@TableName                 = @TableName    
            ,@VersionNumberLo           = @versionNumberLo          
            ,@VersionNumberHi           = @versionNumberHi      
            ,@ChunkSize                 = @InitialUpdateChunkSize           
            ,@RetryLimit                = @InitialUpdateRetryLimit          
            ,@RetryDelayTime            = @InitialUpdateRetryDelayTime   
            ,@LockTimeoutSeconds        = @InitialUpdateLockTimeoutSeconds      
            ,@IterationCount            = @iterationCount   
            ,@RowcountLimit             = @InitialUpdateRowcountLimit
            ,@SessionTimeoutTimeUTC     = @SessionTimeoutTimeUTC
            ,@ExchangeRateColName       = @exchangeRateColName
            ,@Debug                     = @Debug
            ,@RowcountProcessed         = @rowcount OUTPUT
            ,@ProcessState              = @ProcessState OUTPUT;

        IF (@ProcessState = 1) -- process complete
          BREAK;

        SELECT @sessionRowcount = [RowsUpdatedOnLastDay] 
        FROM [dbo].[TableListMoneyUpgrade] WHERE [TableName] = @TableName;

        IF (@sessionIterationCount >= @SessionIterationLimit)
          RAISERROR(N'Iteration limit reached.', 16, 2);

        IF (@SessionRowcountLimit > 0 AND @sessionRowcount >= @SessionRowcountLimit)
          RAISERROR(N'Daily row update limit reached.', 16, 4);

        -- prepare next iteration chunk
        SELECT @cmd = N'SELECT @OUTVersionNumberLo = (SELECT TOP 1 [VersionNumber] FROM ' + QUOTENAME(@TableName) + N'
WHERE [VersionNumber] > (SELECT [LastVersionNumberHi] FROM [dbo].[TableListMoneyUpgrade] WHERE [TableName] = N''' + @TableName + ''')
AND [VersionNumber] <= @INVersionNumberHi
ORDER BY [VersionNumber]);';

        IF @Debug = 1 PRINT @cmd;

        EXEC sp_executesql
            @cmd
            ,N'@INVersionNumberHi VARBINARY(8), @OUTVersionNumberLo VARBINARY(8) OUTPUT'
            ,@INVersionNumberHi = @versionNumberHi
            ,@OUTVersionNumberLo = @versionNumberLo OUTPUT;

        -- @versionNumberLo helps to indicate starting position for the next iteration/run
        UPDATE [dbo].[TableListMoneyUpgrade]
        SET [InitialVersionNumberLo] = @versionNumberLo
           ,[ModifiedOn] = SYSUTCDATETIME()
        WHERE [TableName] = @TableName;

      END; --initial update iteration loop

    -- initial update process is complete
    UPDATE [dbo].[TableListMoneyUpgrade]
    SET [IsUpdateInitialPass] = 1
       ,[LastVersionNumberLo] = @versionNumberLo
       ,[LastVersionNumberHi] = @versionNumberHi
       ,[ModifiedOn] = SYSUTCDATETIME()
    WHERE [TableName] = @TableName;   

    SET @isUpdateInitialPass = 1;

END; --process initial updates


IF (@ProcessCatchupUpdates = 1 AND @isUpdateInitialPass = 1 AND @isUpdateFinalPass = 0)
BEGIN --process catchup updates

    SELECT 
         @iterationCount = 0
        ,@ProcessState = 0
        ,@eventSequence = 3; -- catchup update

    WHILE 1 = 1
    BEGIN --catchup update loop   
      
        SELECT @cmd = N'SELECT @OUTVersionNumberLo = MIN([VersionNumber]), @OUTVersionNumberHi = MAX([VersionNumber]) FROM ' + QUOTENAME(@TableName) + N'
WHERE [VersionNumber] > (SELECT [LastVersionNumberHi] FROM [dbo].[TableListMoneyUpgrade] WHERE [TableName] = N''' + @TableName + ''')';

        IF @Debug = 1 PRINT @cmd;

        EXEC sp_executesql
            @cmd
            ,N'@OUTVersionNumberLo VARBINARY(8) OUTPUT, @OUTVersionNumberHi VARBINARY(8) OUTPUT'
            ,@OUTVersionNumberLo = @versionNumberLo OUTPUT
            ,@OUTVersionNumberHi = @versionNumberHi OUTPUT;

        SELECT @iterationCount = @iterationCount + 1
              ,@sessionIterationCount = @sessionIterationCount + 1; 

        EXEC [dbo].[p_UpgradeMoneyToDecimalUpdateExecute]
             @UpdatePhase               = @eventSequence         
            ,@TableName                 = @TableName    
            ,@VersionNumberLo           = @versionNumberLo          
            ,@VersionNumberHi           = @versionNumberHi      
            ,@ChunkSize                 = @CatchupUpdateChunkSize           
            ,@RetryLimit                = @CatchupUpdateRetryLimit          
            ,@RetryDelayTime            = @CatchupUpdateRetryDelayTime   
            ,@LockTimeoutSeconds        = @CatchupUpdateLockTimeoutSeconds      
            ,@IterationCount            = @iterationCount   
            ,@RowcountLimit             = @CatchupUpdateRowcountLimit
            ,@SessionTimeoutTimeUTC     = @SessionTimeoutTimeUTC
            ,@ExchangeRateColName       = @exchangeRateColName
            ,@Debug                     = @Debug
            ,@RowcountProcessed         = @rowcount OUTPUT
            ,@ProcessState              = @ProcessState OUTPUT;

        IF (@ProcessState = 1) -- process complete
          BREAK;

        SELECT @sessionRowcount = [RowsUpdatedOnLastDay]
        FROM [dbo].[TableListMoneyUpgrade] WHERE [TableName] = @TableName;

        IF (@sessionIterationCount >= @SessionIterationLimit)
          RAISERROR(N'Iteration limit reached.', 16, 2);

        IF (@SessionRowcountLimit > 0 AND @sessionRowcount >= @SessionRowcountLimit)
          RAISERROR(N'Daily row update limit reached.', 16, 4);

    END; --catchup update loop

    -- catchup update process is complete
    UPDATE [dbo].[TableListMoneyUpgrade]
    SET [IsUpdateCatchupPass] = 1
       ,[LastVersionNumberLo] = @versionNumberLo
       ,[LastVersionNumberHi] = @versionNumberHi
       ,[ModifiedOn] = SYSUTCDATETIME()
    WHERE [TableName] = @TableName;

    SET @isUpdateCatchupPass = 1;
      
END;  --process catchup updates
  

IF (@ProcessFinalUpdates = 1 AND @isUpdateCatchupPass = 1 AND @isUpdateFinalPass = 0)
BEGIN --process final updates

    SELECT 
         @iterationCount = 0 -- not used, final updates are not iterated but performed in one chunk
        ,@ProcessState = 0
        ,@eventSequence = 4; -- final update

    WHILE 1 = 1
    BEGIN --process final loop
      
        SELECT @cmd = N'SELECT @OUTVersionNumberLo = MIN([VersionNumber]), @OUTVersionNumberHi = MAX([VersionNumber]) FROM ' + QUOTENAME(@TableName) + N'
WHERE [VersionNumber] > (SELECT [LastVersionNumberHi] FROM [dbo].[TableListMoneyUpgrade] WHERE [TableName] = N''' + @TableName + ''')';

        IF @Debug = 1 PRINT @cmd;

        EXEC sp_executesql
            @cmd
            ,N'@OUTVersionNumberLo VARBINARY(8) OUTPUT, @OUTVersionNumberHi VARBINARY(8) OUTPUT'
            ,@OUTVersionNumberLo = @versionNumberLo OUTPUT
            ,@OUTVersionNumberHi = @versionNumberHi OUTPUT;

        EXEC [dbo].[p_UpgradeMoneyToDecimalUpdateExecute]
             @UpdatePhase               = @eventSequence         
            ,@TableName                 = @TableName    
            ,@VersionNumberLo           = @versionNumberLo          
            ,@VersionNumberHi           = @versionNumberHi      
            ,@ChunkSize                 = @finalUpdateChunkSize -- forced to -1          
            ,@RetryLimit                = @FinalUpdateRetryLimit          
            ,@RetryDelayTime            = @FinalUpdateRetryDelayTime   
            ,@LockTimeoutSeconds        = @FinalUpdateLockTimeoutSeconds      
            ,@IterationCount            = @iterationCount   
            ,@RowcountLimit             = @FinalUpdateRowcountLimit
            ,@SessionTimeoutTimeUTC     = @SessionTimeoutTimeUTC
            ,@ExchangeRateColName       = @exchangeRateColName
            ,@MoneyReplaceString        = @MoneyReplaceString
            ,@ExchangeRateReplaceString = @ExchangeRateReplaceString
            ,@Debug                     = @Debug
            ,@RowcountProcessed         = @rowcount OUTPUT
            ,@ProcessState              = @ProcessState OUTPUT;

        IF (@ProcessState = 1) -- process complete
        BEGIN
          UPDATE [dbo].[TableListMoneyUpgrade]
          SET [IsUpdateFinalPass] = 1
             ,[ModifiedOn] = SYSUTCDATETIME()
          WHERE [TableName] = @TableName;

          SET @isUpdateFinalPass = 1;
        END;

        BREAK; -- only one (last) chunk is attempted

    END; --process final loop       
  
END;  --process final updates

IF (SYSUTCDATETIME() > @SessionTimeoutTimeUTC)
BEGIN
    RAISERROR(N'Execution has timed out.', 16, 3);
END;

-- table state can be completed with error in final update's replace columns process.
-- hence need to get latest value here.
SELECT @isCompleted = [IsCompleted] FROM [dbo].[TableListMoneyUpgrade] WHERE [TableName] = @TableName;

IF (@isUpdateFinalPass = 1 AND @isCompleted = 0)
BEGIN -- regenerate rollup procs and refresh view
    
    DECLARE @eventBeginTimeUTC DATETIME2(7) = SYSUTCDATETIME();
    SELECT
         @cmd = N''
        ,@eventSequence = 10; -- regenerate rollup procs and refresh view

    IF @entityId IS NOT NULL
    BEGIN
        WITH Cte
        AS
        (
            SELECT OBJECT_NAME(d.referencing_id) [Name], OBJECT_DEFINITION (d.referencing_id) [Definition]
            FROM sys.sql_expression_dependencies d WITH (NOLOCK)
            WHERE d.referenced_id = @objectId
            AND OBJECTPROPERTYEX(d.referencing_id, N'BaseType') = N'P'
            AND EXISTS(
                SELECT 1 
                FROM AttributeView a WITH (NOLOCK)
                WHERE a.EntityId = @entityId
                AND a.SourceType = 2 -- rollup
                AND a.AttributeTypeId = '00000000-0000-0000-00AA-11000000001A' -- money
                AND OBJECT_NAME(d.referencing_id) LIKE '%'+ LOWER(REPLACE(a.AttributeId, '-', ''))
            )
            AND (OBJECT_DEFINITION (d.referencing_id) LIKE '% money%' 
              OR OBJECT_DEFINITION (d.referencing_id) LIKE '%@exchRate decimal(23,10)%'
              OR OBJECT_DEFINITION (d.referencing_id) LIKE '%@exchRate decimal(23, 10)%'
            )
        )
        SELECT @cmd = @cmd + N'DROP PROCEDURE [dbo].' + QUOTENAME([Name]) + @newline +
                                N'EXEC ('''+ REPLACE(REPLACE(REPLACE(REPLACE([Definition], 
                                            N'''', N''''''),
                                            N' money', @MoneyReplaceString), 
                                            N'@exchRate decimal(23,10)', CONCAT(N'@exchRate', @ExchangeRateReplaceString)),
                                            N'@exchRate decimal(23, 10)', CONCAT(N'@exchRate', @ExchangeRateReplaceString))
                                 + N''')' + @newline + @newline
        FROM Cte;
        
        -- to refresh view
        SELECT @cmd = @cmd + N'EXEC sp_refreshview ''[dbo].' + QUOTENAME(@entityName) + N'''';
    END;
      
    BEGIN TRANSACTION;

        EXEC [dbo].[p_UpgradeMoneyToDecimalExecuteCommand]
             @TableName = @TableName
            ,@Command = @cmd
            ,@EventSequence = @eventSequence 
            ,@Debug = @Debug
            ,@BeginDateTimeUTC = @eventBeginTimeUTC;
            
        -- table processing has completed
        UPDATE [dbo].[TableListMoneyUpgrade]
        SET  [IsCompleted] = 1
            ,[ErrorMessage] = NULL 
            ,[ErrorNumber] = NULL
            ,[ErrorProcedure] = NULL
            ,[RetryAfterTime] = NULL
            ,[ErrorEvent] = NULL
            ,[IsSentToTelemetry] = 0
            ,[ModifiedOn] = SYSUTCDATETIME()
        WHERE [TableName] = @TableName;

    COMMIT TRANSACTION;

END; -- regenerate rollup procs and refresh view

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