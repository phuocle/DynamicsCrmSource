

CREATE PROCEDURE [dbo].[p_UpgradeMoneyToDecimalExecutive]
(
     @ProcessAlterTable                 BIT = 1
    ,@ProcessInitialUpdates             BIT = 1  
    ,@ProcessCatchupUpdates             BIT = 1  
    ,@ProcessFinalUpdates               BIT = 1
    ,@CompleteConversion                BIT = 1

    ,@StopOnFirstError                  BIT = 0
    ,@AllowTableUpdate                  BIT = 0
    
    ,@AlterRetryLimit                   INT = 5
    ,@AlterRetryDelayTime               TIME = '00:00:01'
    ,@AlterLockTimeoutSeconds           INT = NULL

    ,@InitialUpdateChunkSize            INT = 500
    ,@InitialUpdateIterationLimit       INT = 10000
    ,@InitialUpdateRowcountLimit        INT = 4500000
    ,@InitialUpdateRetryLimit           INT = 3
    ,@InitialUpdateRetryDelayTime       Time = '00:00:01'
    ,@InitialUpdateLockTimeoutSeconds   INT = 1

    ,@CatchupUpdateChunkSize            INT = 200
    ,@CatchupUpdateIterationLimit       INT = 10000
    ,@CatchupUpdateRowcountLimit        INT = 4500000
    ,@CatchupUpdateRetryLimit           INT = 3
    ,@CatchupUpdateRetryDelayTime       TIME = '00:00:01'
    ,@CatchupUpdateLockTimeoutSeconds   INT = 1

    ,@FinalUpdateRowcountLimit          INT = 100000  
    ,@FinalUpdateRetryLimit             INT = 5
    ,@FinalUpdateRetryDelayTime         TIME = '00:00:01'
    ,@FinalUpdateLockTimeoutSeconds     INT = 1

    ,@SessionIterationLimit             INT = 100000
    ,@SessionRowcountLimit              INT = 4500000
    ,@SessionTimeoutMinutes             INT = NULL -- no limit
    ,@SessionTimeoutTimeUTC             DATETIME2(7) = NULL -- no limit
    ,@UpdateTableName					NVARCHAR(128) = NULL
    ,@Debug                             BIT = 0
)
AS

BEGIN TRY

SET NOCOUNT ON;
SET DEADLOCK_PRIORITY -10; --lower than LOW

DECLARE @errorMessage  NVARCHAR(4000);

--==============================================================
-- Validate parameters & conditions
--==============================================================
IF @@TRANCOUNT > 0
  BEGIN
    SET @errorMessage = N'Cannot execute from open transaction in ' + OBJECT_NAME(@@PROCID);
    RAISERROR(@errorMessage, 16, 1);
  END;
  
IF (@SessionTimeoutMinutes IS NOT NULL)
  SET @SessionTimeoutTimeUTC = DATEADD(MINUTE, @SessionTimeoutMinutes, SYSUTCDATETIME());

SET @SessionTimeoutTimeUTC = ISNULL(@SessionTimeoutTimeUTC, '9999-12-31');
IF (@SessionTimeoutTimeUTC <> '9999-12-31' AND DATEDIFF(MINUTE, SYSUTCDATETIME(), @SessionTimeoutTimeUTC) < 1)
  SET @SessionTimeoutTimeUTC = DATEADD(MINUTE, 1, SYSUTCDATETIME()); -- must run at least 1 minute

SELECT
     @AlterRetryLimit = COALESCE(@AlterRetryLimit, 5)
    ,@AlterLockTimeoutSeconds = COALESCE(@AlterLockTimeoutSeconds, 1)
    ,@AlterRetryDelayTime = COALESCE(@AlterRetryDelayTime, '00:00:01')

    ,@InitialUpdateChunkSize = COALESCE(@InitialUpdateChunkSize, 1000)
    ,@InitialUpdateIterationLimit = COALESCE(@InitialUpdateIterationLimit, 10000)
    ,@InitialUpdateRowcountLimit = COALESCE(@InitialUpdateRowcountLimit, 4500000)
    ,@InitialUpdateRetryLimit = COALESCE(@InitialUpdateRetryLimit, 3)
    ,@InitialUpdateRetryDelayTime = COALESCE(@InitialUpdateRetryDelayTime, '00:00:01')
    ,@InitialUpdateLockTimeoutSeconds = COALESCE(@InitialUpdateLockTimeoutSeconds, 1)

    ,@CatchupUpdateChunkSize = COALESCE(@CatchupUpdateChunkSize, 1000)
    ,@CatchupUpdateIterationLimit = COALESCE(@CatchupUpdateIterationLimit, 10000)
    ,@CatchupUpdateRowcountLimit = COALESCE(@CatchupUpdateRowcountLimit, 4500000)
    ,@CatchupUpdateRetryLimit = COALESCE(@CatchupUpdateRetryLimit, 3)
    ,@CatchupUpdateRetryDelayTime = COALESCE(@CatchupUpdateRetryDelayTime, '00:00:01')
    ,@CatchupUpdateLockTimeoutSeconds = COALESCE(@CatchupUpdateLockTimeoutSeconds, 1)

    ,@FinalUpdateRowcountLimit = COALESCE(@FinalUpdateRowcountLimit, 500)
    ,@FinalUpdateRetryLimit = COALESCE(@FinalUpdateRetryLimit, 5)
    ,@FinalUpdateLockTimeoutSeconds = COALESCE(@FinalUpdateLockTimeoutSeconds, 1)

    ,@SessionIterationLimit = COALESCE(@SessionIterationLimit, 100000)
    ,@SessionRowcountLimit = COALESCE(@SessionRowcountLimit, 4500000)
;

DECLARE
     @cmd                                   NVARCHAR(MAX) = N''
    ,@loop                                  INT
    ,@loopmax                               INT
    ,@tableName                             NVARCHAR(128)
    ,@moneyReplaceString                    NVARCHAR(20) = N' decimal(38,10)'
    ,@exchangeRateReplaceString             NVARCHAR(20) = N' decimal(28,12)'
    ,@newline                               NCHAR(2) = CHAR(13) + CHAR(10)
    ,@alterProcessState                     SMALLINT = 0
    ,@updateProcessState                    SMALLINT = 0
    ,@isForcedTermination                   BIT = 0
;

IF (OBJECT_ID(N'[dbo].[TableListMoneyUpgrade]', N'U') IS NULL OR OBJECT_ID(N'[dbo].[TableListMoneyUpgradeEvent]', N'U') IS NULL)
BEGIN
    EXEC [dbo].[p_UpgradeMoneyToDecimalCreateLoggingTables];
    
    IF (OBJECT_ID(N'[dbo].[TableListMoneyUpgrade]', N'U') IS NULL)
      RAISERROR(N'Failed to create TableListMoneyUpgrade table.', 16, 1);
      
    IF (OBJECT_ID(N'[dbo].[TableListMoneyUpgradeEvent]', N'U') IS NULL)
      RAISERROR(N'Failed to create TableListMoneyUpgradeEvent table.', 16, 1);  
END;

CREATE TABLE #tlist
(   
    [Id]         INT IDENTITY (1,1) PRIMARY KEY CLUSTERED
   ,[TableName]  NVARCHAR(128) COLLATE database_default NOT NULL
);

--==============================================================
-- Process alter table
--==============================================================

IF @ProcessAlterTable = 1
  BEGIN -- process alter table

--==============================================================
-- Initialize permanent table list
--==============================================================

    INSERT INTO [dbo].[TableListMoneyUpgrade]
    (
         [TableName]
        ,[EstimatedRowCount]
        ,[IsDecimalColumnsCreated]
        ,[IsUpdateInitialPass]        
        ,[IsCompleted]
        ,[AlterRetryLimit]
        ,[AlterLockTimeoutSeconds]
        ,[AlterRetryDelayTime]
        ,[InitialUpdateChunkSize]        
        ,[InitialUpdateIterationLimit]   
        ,[InitialUpdateRowcountLimit]    
        ,[InitialUpdateRetryLimit]
        ,[InitialUpdateRetryDelayTime]
        ,[InitialUpdateLockTimeoutSeconds] 
        ,[CatchupUpdateChunkSize]        
        ,[CatchupUpdateIterationLimit]   
        ,[CatchupUpdateRowcountLimit]    
        ,[CatchupUpdateRetryLimit]       
        ,[CatchupUpdateLockTimeoutSeconds] 
        ,[CatchupUpdateRetryDelayTime]
        ,[FinalUpdateRowcountLimit]      
        ,[FinalUpdateRetryLimit]         
        ,[FinalUpdateLockTimeoutSeconds]   
    )
    SELECT 
         t.[name]
        ,p.rows
        ,0  
        ,0
        ,0
        ,@AlterRetryLimit
        ,@AlterLockTimeoutSeconds
        ,@AlterRetryDelayTime
        ,@InitialUpdateChunkSize        
        ,@InitialUpdateIterationLimit   
        ,@InitialUpdateRowcountLimit    
        ,@InitialUpdateRetryLimit
        ,@InitialUpdateRetryDelayTime
        ,@InitialUpdateLockTimeoutSeconds 
        ,@CatchupUpdateChunkSize        
        ,@CatchupUpdateIterationLimit   
        ,@CatchupUpdateRowcountLimit    
        ,@CatchupUpdateRetryLimit       
        ,@CatchupUpdateLockTimeoutSeconds 
        ,@CatchupUpdateRetryDelayTime
        ,@FinalUpdateRowcountLimit      
        ,@FinalUpdateRetryLimit         
        ,@FinalUpdateLockTimeoutSeconds   
    FROM sys.tables t WITH (NOLOCK)
    JOIN sys.partitions p WITH (NOLOCK) 
        ON t.[object_id] = p.[object_id]
    JOIN sys.schemas s WITH (NOLOCK)
        ON t.[schema_id] = s.[schema_id]
    WHERE p.[index_id] in (0,1)
    AND P.[partition_number] = 1
    AND s.[name] = N'dbo'
    AND NOT EXISTS (
        SELECT 1
        FROM [dbo].[TableListMoneyUpgrade] tlmu
        WHERE tlmu.[TableName] = t.[name]
    )
    AND EXISTS (
        SELECT 1
        FROM sys.columns c WITH (NOLOCK)
        WHERE (c.[object_id] = t.[object_id])
        AND   (c.[user_type_id] = 60 OR (LOWER(c.[name]) = N'exchangerate' AND (c.[precision] <> 28 OR c.[scale] <> 12)))
    );

    IF NOT EXISTS (SELECT 1 FROM [dbo].[TableListMoneyUpgrade])
      RAISERROR(N'No tables found to perform currency conversion.', 16, 1);

    UPDATE [dbo].[TableListMoneyUpgrade] -- find tables that don't have a Timestamp or VersionNumber column
    SET    [IsVersionNumberCreationRequired] = 1
    FROM   [dbo].[TableListMoneyUpgrade] tlmu
    WHERE NOT EXISTS (   
        SELECT 1
        FROM sys.columns c WITH (NOLOCK)
        JOIN sys.tables t WITH (NOLOCK)
            ON t.[object_id] = c.[object_id]
        JOIN sys.schemas s WITH (NOLOCK)
            ON t.[schema_id] = s.[schema_id]
        WHERE t.[name] = tlmu.[TableName]
        AND   s.[name] = N'dbo'
        AND   c.[user_type_id] = 189 -- timestamp
    )
    AND tlmu.[IsVersionNumberCreationRequired] = 0;

--==============================================================
-- Alter table and add decimal columns
--==============================================================

    INSERT INTO #tlist ([TableName])
    SELECT tlmu.[TableName]
    FROM [dbo].[TableListMoneyUpgrade] tlmu
    WHERE tlmu.[IsDecimalColumnsCreated] = 0
    AND   tlmu.[IsCompleted] = 0
    AND	  (tlmu.[TableName] = @UpdateTableName OR @UpdateTableName IS NULL)
    ;

    SELECT @loopmax = @@ROWCOUNT, @loop = 0;

    WHILE @loop < @loopmax
      BEGIN -- alter loop

        SELECT @loop = @loop + 1;

        SELECT @tableName = tl.[TableName]
        FROM #tlist tl
        WHERE tl.Id = @loop;

        IF (@AllowTableUpdate = 0 AND CAST(SERVERPROPERTY('Edition') AS NVARCHAR(128)) LIKE N'@SQL Azure%')
          BEGIN
            EXEC (N'ALTER DATABASE SCOPED CONFIGURATION SET ELEVATE_ONLINE=FAIL_UNSUPPORTED') 
          END;

        EXEC [dbo].[p_UpgradeMoneyToDecimalAlterAll] 
             @TableName = @tableName
            ,@RetryLimit = @AlterRetryLimit
            ,@RetryDelayTime = @AlterRetryDelayTime
            ,@LockTimeoutSeconds = @AlterLockTimeoutSeconds 
            ,@Debug = @Debug
            ,@MoneyReplaceString = @moneyReplaceString
            ,@ExchangeRateReplaceString = @exchangeRateReplaceString
            ,@SessionTimeoutTimeUTC = @SessionTimeoutTimeUTC
            ,@ProcessState = @alterProcessState OUTPUT;
        ;

        IF (@AllowTableUpdate = 0 AND CAST(SERVERPROPERTY('Edition') AS NVARCHAR(128)) LIKE N'@SQL Azure%')
          BEGIN
            EXEC (N'ALTER DATABASE SCOPED CONFIGURATION SET ELEVATE_ONLINE=OFF') -- return setting to default
          END;

        IF (@alterProcessState < 0 AND @StopOnFirstError = 1)
        BEGIN
            SELECT @isForcedTermination = 1;
            BREAK;
        END;

      END; -- alter loop
  END -- process alter table

IF (@isForcedTermination = 0 AND @ProcessInitialUpdates = 0 AND @ProcessCatchupUpdates = 0 AND @ProcessFinalUpdates = 0 AND @CompleteConversion = 0) 
OR (SYSUTCDATETIME() > @SessionTimeoutTimeUTC)
  BEGIN
    SELECT @isForcedTermination = 1;
  END;
    
--==============================================================
-- Process initial updates
--==============================================================

IF (@ProcessInitialUpdates = 1 AND @isForcedTermination = 0)
  BEGIN -- Process initial updates loop
    
    TRUNCATE TABLE #tlist; 

    INSERT INTO #tlist ([TableName])
    SELECT [TableName]
    FROM  [dbo].[TableListMoneyUpgrade]
    WHERE [IsCompleted] = 0
    AND   [IsDecimalColumnsCreated] = 1
    AND	  ([TableName] = @UpdateTableName OR @UpdateTableName IS NULL)
    --AND [IsExchangeRateOnly] = 0
    ;

    SELECT @loopmax = @@ROWCOUNT, @loop = 0;

    WHILE @loop < @loopmax
      BEGIN -- initial update loop

        SET @loop = @loop + 1;

        SELECT @tableName = tl.[TableName] 
        FROM #tlist tl
        WHERE tl.Id = @loop;

        EXEC [dbo].[p_UpgradeMoneyToDecimalUpdate]
             @ProcessInitialUpdates = 1
            ,@ProcessCatchupUpdates = 0
            ,@ProcessFinalUpdates   = 0
            
            ,@InitialUpdateChunkSize = @InitialUpdateChunkSize     
            ,@InitialUpdateIterationLimit = @InitialUpdateIterationLimit
            ,@InitialUpdateRowcountLimit = @InitialUpdateRowcountLimit    
            ,@InitialUpdateRetryLimit = @InitialUpdateRetryLimit
            ,@InitialUpdateRetryDelayTime = @InitialUpdateRetryDelayTime
            ,@InitialUpdateLockTimeoutSeconds = @InitialUpdateLockTimeoutSeconds

            ,@SessionIterationLimit = @SessionIterationLimit          
            ,@SessionRowcountLimit = @SessionRowcountLimit
            ,@SessionTimeoutTimeUTC = @SessionTimeoutTimeUTC

            ,@TableName = @tableName
            ,@MoneyReplaceString = @moneyReplaceString
            ,@ExchangeRateReplaceString = @exchangeRateReplaceString
            ,@Debug = @Debug
            ,@ProcessState = @updateProcessState OUTPUT;
        
        IF (@updateProcessState < 0 AND @StopOnFirstError = 1)
        BEGIN
            SELECT @isForcedTermination = 1;
            BREAK;
        END;

      END; -- initial update loop
  END; -- Process initial updates loop

IF (@isForcedTermination = 0 AND SYSUTCDATETIME() > @SessionTimeoutTimeUTC)
  BEGIN
    SELECT @isForcedTermination = 1;
  END;

--==============================================================
-- Process catchup updates
--==============================================================

IF (@ProcessCatchupUpdates = 1 AND @isForcedTermination = 0)
  BEGIN -- Process catchup updates loop

    TRUNCATE TABLE #tlist; 

    INSERT INTO #tlist ([TableName])
    SELECT [TableName]
    FROM  [dbo].[TableListMoneyUpgrade]
    WHERE [IsCompleted] = 0
    AND   [IsUpdateInitialPass] = 1
    AND	  ([TableName] = @UpdateTableName OR @UpdateTableName IS NULL);

    SELECT @loopmax = @@ROWCOUNT, @loop = 0;

    WHILE @loop < @loopmax
      BEGIN -- catchup update loop

        SET @loop = @loop + 1;

        SELECT @tableName = tl.[TableName] 
        FROM #tlist tl
        WHERE tl.id = @loop;

        EXEC [dbo].[p_UpgradeMoneyToDecimalUpdate]
             @ProcessInitialUpdates = 0
            ,@ProcessCatchupUpdates = 1
            ,@ProcessFinalUpdates = @ProcessFinalUpdates

            ,@CatchupUpdateChunkSize = @CatchupUpdateChunkSize        
            ,@CatchupUpdateIterationLimit = @CatchupUpdateIterationLimit    
            ,@CatchupUpdateRowcountLimit = @CatchupUpdateRowcountLimit    
            ,@CatchupUpdateRetryLimit = @CatchupUpdateRetryLimit
            ,@CatchupUpdateRetryDelayTime = @CatchupUpdateRetryDelayTime
            ,@CatchupUpdateLockTimeoutSeconds = @CatchupUpdateLockTimeoutSeconds

            ,@FinalUpdateRowcountLimit = @FinalUpdateRowcountLimit      
            ,@FinalUpdateRetryLimit = @FinalUpdateRetryLimit
            ,@FinalUpdateRetryDelayTime = @FinalUpdateRetryDelayTime
            ,@FinalUpdateLockTimeoutSeconds = @FinalUpdateLockTimeoutSeconds

            ,@SessionIterationLimit = @SessionIterationLimit          
            ,@SessionRowcountLimit = @SessionRowcountLimit
            ,@SessionTimeoutTimeUTC = @SessionTimeoutTimeUTC

            ,@TableName = @tableName
            ,@MoneyReplaceString = @moneyReplaceString
            ,@ExchangeRateReplaceString = @exchangeRateReplaceString
            ,@Debug = @Debug
            ,@ProcessState = @updateProcessState OUTPUT;
        
        IF (@updateProcessState < 0 AND @StopOnFirstError = 1)
        BEGIN
            SELECT @isForcedTermination = 1;
            BREAK;
        END;

      END; -- catchup update loop
  END; -- Process catchup updates loop

IF (@isForcedTermination = 0 AND SYSUTCDATETIME() > @SessionTimeoutTimeUTC)
  BEGIN
    SELECT @isForcedTermination = 1;
  END;

--============================================================================
-- Post data migration action
--============================================================================

SET @tableName = N'';

IF (@CompleteConversion = 1 AND NOT EXISTS(SELECT 1 FROM [dbo].[TableListMoneyUpgrade] WHERE [IsCompleted] = 0) AND @isForcedTermination = 0)
  BEGIN -- post data migration action
    
    BEGIN TRANSACTION;

    -- drop orphaned '__%' columns from all tables if exists
    SELECT @cmd = N'';
    SELECT @cmd = @cmd + N'ALTER TABLE [dbo].' + QUOTENAME(OBJECT_NAME(c.[object_id])) + N' DROP COLUMN ' + QUOTENAME(c.[name]) + @newline
    FROM sys.columns c
    WHERE OBJECT_NAME(c.[object_id]) IN (SELECT TableName FROM [dbo].[TableListMoneyUpgrade]) 
    AND c.[name] LIKE N'[__]%'
    AND c.[user_type_id] = 106 -- decimal
    AND ((c.[precision] = 38 AND c.[scale] = 10) OR (c.[precision] = 28 AND c.[scale] = 12));
    
    EXEC [dbo].[p_UpgradeMoneyToDecimalExecuteCommand]
         @TableName = @tableName
        ,@Command = @cmd
        ,@EventSequence = 11 -- drop orphaned columns
        ,@Debug = @Debug;
   
    -- refresh all views that have money/exchange rate columns 
    SELECT @cmd = N'';
    SELECT @cmd = @cmd + N'EXEC sp_refreshview ''[dbo].' + QUOTENAME(v.[name]) + N''';' + @newline
    FROM sys.views v
    WHERE EXISTS 
    (
      SELECT 1 FROM sys.columns c
      WHERE OBJECT_NAME(c.[object_id]) = v.[name] 
      AND (c.[user_type_id] = 60 OR (LOWER(c.[name]) = N'exchangerate' AND (c.[precision] <> 28 OR c.[scale] <> 12)))
    );

    EXEC [dbo].[p_UpgradeMoneyToDecimalExecuteCommand]
         @TableName = @tableName
        ,@Command = @cmd
        ,@EventSequence = 12 -- refresh dependent views
        ,@Debug = @Debug;

    COMMIT TRANSACTION;

    -- wait for a second before performing validations
    WAITFOR DELAY '00:00:01';

    -- check if any migration completed tables have columns with prefix '__'
    IF EXISTS (
      SELECT 1 FROM [dbo].[TableListMoneyUpgrade] t 
      WHERE EXISTS
      (
        SELECT 1 FROM sys.columns c
        WHERE OBJECT_NAME(c.[object_id]) = t.TableName
        AND c.[name] LIKE N'[__]%'
        AND c.[user_type_id] = 106 -- decimal
        AND ((c.[precision] = 38 AND c.[scale] = 10) OR (c.[precision] = 28 AND c.[scale] = 12))
      ))
    BEGIN
      RAISERROR(N'Currency migration has completed but some fields still exist with prefix ''__''.', 16, 1);
    END;

    -- check if any tables or views have money columns 
    IF EXISTS (SELECT 1 FROM sys.columns c WHERE c.[user_type_id] = 60)
    BEGIN
      RAISERROR(N'Currency migration has completed but money fields still exist.', 16, 1);
    END;

    -- check if any tables or views have exchange rate columns with precision other than (28,12)
    IF EXISTS (
        SELECT 1 FROM sys.columns c 
        WHERE LOWER(c.[name]) = N'exchangerate' AND (c.[precision] <> 28 OR c.[scale] <> 12)
    )
    BEGIN
      RAISERROR(N'Currency migration has completed but exchange rate fields still exist with precision other than (28,12).', 16, 1);
    END;

    BEGIN TRANSACTION;

    UPDATE [MetadataSchema].[Attribute]
    SET [MinValue] = 0, [MaxValue] = 10
    WHERE [EntityId] = (SELECT [EntityId] FROM [dbo].[EntityView] WHERE [LogicalName] = N'organization')
    AND [LogicalName] IN (N'basecurrencyprecision', N'pricingdecimalprecision', N'currencydecimalprecision');

    UPDATE [MetadataSchema].[Attribute]
    SET [MinValue] = 0, [MaxValue] = 10
    WHERE [EntityId] = (SELECT [EntityId] FROM [dbo].[EntityView] WHERE [LogicalName] = N'transactioncurrency')
    AND [LogicalName] = N'currencyprecision';

    UPDATE [MetadataSchema].[Attribute]
    SET [MinValue] = 1E-12, [Accuracy] = 12
    WHERE [LogicalName] = N'exchangerate';

    UPDATE [dbo].[OrganizationBase] SET [IsAllMoneyDecimal] = 1;

    COMMIT TRANSACTION;

  END; -- post data migration action

END TRY
BEGIN CATCH

    IF @@TRANCOUNT > 0 ROLLBACK;
    THROW;
    
END CATCH

RETURN;