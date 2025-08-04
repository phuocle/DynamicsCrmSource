

CREATE PROCEDURE [dbo].[p_UpgradeMoneyToDecimalCreateLoggingTables]
AS

BEGIN TRY

SET NOCOUNT ON;
SET DEADLOCK_PRIORITY -10; --lower than LOW

DECLARE @errorMessage NVARCHAR(4000);

--==============================================================
-- Validate parameters & conditions
--==============================================================
IF @@TRANCOUNT > 0
  BEGIN
    SET @errorMessage = N'Cannot execute from open transaction in ' + OBJECT_NAME(@@PROCID);
    RAISERROR(@errorMessage, 16, 1);
  END;

IF OBJECT_ID(N'[dbo].[TableListMoneyUpgrade]', N'U') IS NULL
  BEGIN 
    CREATE TABLE [dbo].[TableListMoneyUpgrade]
    (   [TableName]                         NVARCHAR(128) PRIMARY KEY CLUSTERED
    ,   [EstimatedRowCount]                 INT NOT NULL
    ,   [IsDecimalColumnsCreated]           BIT NOT NULL DEFAULT 0
    ,   [IsUpdateInitialPass]               BIT NOT NULL DEFAULT 0
    ,   [IsUpdateCatchupPass]               BIT NOT NULL DEFAULT 0
    ,   [IsUpdateFinalPass]                 BIT NOT NULL DEFAULT 0
    ,   [IsCompleted]                       BIT NOT NULL DEFAULT 0
    ,   [IsVersionNumberCreationRequired]   BIT NOT NULL DEFAULT 0
    ,   [InitialVersionNumberLo]            BINARY(8) NULL
    ,   [InitialVersionNumberHi]            BINARY(8) NULL
    ,   [LastVersionNumberLo]               BINARY(8) NULL
    ,   [LastVersionNumberHi]               BINARY(8) NULL
    ,   [IsExchangeRateOnlyNull]            BIT NULL
    ,   [AlterRetryLimit]                   INT NULL
    ,   [AlterLockTimeoutSeconds]           INT NULL
    ,   [AlterRetryDelayTime]               TIME NULL
    ,   [InitialUpdateChunkSize]            INT NULL
    ,   [InitialUpdateIterationLimit]       INT NULL
    ,   [InitialUpdateRowcountLimit]        INT NULL
    ,   [InitialUpdateRetryLimit]           INT NULL
    ,   [InitialUpdateLockTimeoutSeconds]   INT NULL
    ,   [InitialUpdateRetryDelayTime]       TIME NULL
    ,   [CatchupUpdateChunkSize]            INT NULL
    ,   [CatchupUpdateIterationLimit]       INT NULL
    ,   [CatchupUpdateRowcountLimit]        INT NULL
    ,   [CatchupUpdateRetryLimit]           INT NULL
    ,   [CatchupUpdateLockTimeoutSeconds]   INT NULL
    ,   [CatchupUpdateRetryDelayTime]       TIME NULL
    ,   [FinalUpdateRowcountLimit]          INT NULL
    ,   [FinalUpdateRetryLimit]             INT NULL
    ,   [FInalUpdateLockTimeoutSeconds]     INT NULL
    ,   [TotalSessionDurationMinutes]       INT NULL
    ,   [TotalRowsUpdated]                  INT NULL
    ,   [RowsUpdatedOnLastDay]              INT NULL
    ,   [TotalAlterRetries]                 INT NULL
    ,   [TotalUpdateRetries]                INT NULL
    ,   [TotalFinalRetries]                 INT NULL
    ,   [CreatedOn]                         DATETIME2(7) DEFAULT SYSUTCDATETIME()
    ,   [ModifiedOn]                        DATETIME2(7) DEFAULT SYSUTCDATETIME()
    ,   [ErrorMessage]                      NVARCHAR(4000) NULL
    ,   [ErrorNumber]                       INT NULL
    ,   [ErrorProcedure]                    NVARCHAR(128)
    ,   [RetryAfterTime]                    DATETIME2(7) NULL
    ,   [ErrorEvent]                        TINYINT NULL
    ,   [ForceStop]                         BIT NOT NULL DEFAULT 0
    ,   [IsSentToTelemetry]                 BIT NOT NULL DEFAULT 0
    )
  END;
  
IF OBJECT_ID(N'[dbo].[TableListMoneyUpgradeEvent]', N'U') IS NULL
BEGIN 
    CREATE TABLE [dbo].[TableListMoneyUpgradeEvent]
    (   
         [EventId]                   INT IDENTITY (1,1) PRIMARY KEY CLUSTERED
        ,[TableName]                 NVARCHAR(128) NOT NULL
        ,[BeginDateTimeUTC]          DATETIME2(7) NOT NULL DEFAULT SYSUTCDATETIME()
        ,[EndDateTimeUTC]            DATETIME2(7) NULL
        ,[EventSequence]             TINYINT NOT NULL CHECK ([EventSequence] IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))
        ,[EventDescription]          AS (CASE [EventSequence] 
                                                WHEN 1 THEN  N'alter add columns'
                                                WHEN 2 THEN  N'initial update'
                                                WHEN 3 THEN  N'catchup update'
                                                WHEN 4 THEN  N'final update'
                                                WHEN 5 THEN  N'drop dependent objects'
                                                WHEN 6 THEN  N'drop old columns'
                                                WHEN 7 THEN  N'rename new columns'
                                                WHEN 8 THEN  N'create dependent objects'
                                                WHEN 9 THEN  N'regenerate scalar functions'
                                                WHEN 10 THEN N'regenerate rollup procs and refresh view'
                                                WHEN 11 THEN N'drop orphaned columns'
                                                WHEN 12 THEN N'refresh dependent views'
                                                ELSE N'UNKNOWN'
                                                END
                                            )
        ,[Iteration]                 INT NULL
        ,[State]                     SMALLINT NOT NULL DEFAULT 0 CHECK ([State] IN (0, 1, 2, -1))
        ,[StateDescription]          AS (CASE [State] 
                                                WHEN 0 THEN N'running'
                                                WHEN 1 THEN N'success'
                                                WHEN 2 THEN N'retry'
                                                WHEN -1 THEN N'fail'
                                                ELSE N'UNKNOWN'
                                                END
                                            ) 
        ,[VersionNumberLo]           VARBINARY(8) NULL
        ,[VersionNumberHi]           VARBINARY(8) NULL
        ,[RetryLimit]                TINYINT NULL
        ,[RetryCount]                TINYINT NULL
        ,[RowcountLimit]             INT NULL
        ,[Rowcount]                  INT NULL
        ,[Command]                   NVARCHAR(MAX) NULL
        ,[ErrorNumber]               INT NULL
        ,[ErrorMessage]              NVARCHAR(4000) NULL
        ,[ProcedureName]             NVARCHAR(128) DEFAULT OBJECT_NAME(@@PROCID)
    );
END;

END TRY
BEGIN CATCH
    
  IF @@TRANCOUNT > 0 ROLLBACK;
  THROW;
    
END CATCH

RETURN;