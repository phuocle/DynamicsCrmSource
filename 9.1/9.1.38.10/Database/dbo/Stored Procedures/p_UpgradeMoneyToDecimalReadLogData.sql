

CREATE PROCEDURE [dbo].[p_UpgradeMoneyToDecimalReadLogData]
AS

--============================================================================
-- Query out the table and event details for telemetry
--============================================================================

SELECT 
     [TableName]
    ,[EstimatedRowCount]
    ,[IsDecimalColumnsCreated]
    ,[IsUpdateInitialPass]
    ,[IsUpdateCatchupPass]
    ,[IsUpdateFinalPass]
    ,[IsCompleted]
    ,[IsVersionNumberCreationRequired]
    ,CONVERT(NVARCHAR(MAX), CONVERT(BINARY(8), [InitialVersionNumberLo]), 1) AS [InitialVersionNumberLo]
    ,CONVERT(NVARCHAR(MAX), CONVERT(BINARY(8), [InitialVersionNumberHi]), 1) AS [InitialVersionNumberHi]
    ,CONVERT(NVARCHAR(MAX), CONVERT(BINARY(8), [LastVersionNumberLo]), 1) AS [LastVersionNumberLo]
    ,CONVERT(NVARCHAR(MAX), CONVERT(BINARY(8), [LastVersionNumberHi]), 1) AS [LastVersionNumberHi]
    ,[IsExchangeRateOnlyNull]
    ,[AlterRetryLimit]
    ,[AlterLockTimeoutSeconds]
    ,[AlterRetryDelayTime]
    ,[InitialUpdateChunkSize]
    ,[InitialUpdateIterationLimit]
    ,[InitialUpdateRowcountLimit]
    ,[InitialUpdateRetryLimit]
    ,[InitialUpdateLockTimeoutSeconds]
    ,[InitialUpdateRetryDelayTime]
    ,[CatchupUpdateChunkSize]
    ,[CatchupUpdateIterationLimit]
    ,[CatchupUpdateRowcountLimit]
    ,[CatchupUpdateRetryLimit]
    ,[CatchupUpdateLockTimeoutSeconds]
    ,[CatchupUpdateRetryDelayTime]
    ,[FinalUpdateRowcountLimit]
    ,[FinalUpdateRetryLimit]
    ,[FInalUpdateLockTimeoutSeconds]
    ,[TotalSessionDurationMinutes]
    ,[TotalRowsUpdated]
    ,[RowsUpdatedOnLastDay]
    ,[TotalAlterRetries]
    ,[TotalUpdateRetries]
    ,[TotalFinalRetries]
    ,[CreatedOn]
    ,[ModifiedOn]
    ,[ErrorMessage]
    ,[ErrorNumber]
    ,[ErrorProcedure]
    ,[RetryAfterTime]
    ,[ErrorEvent]
    ,[ForceStop]
FROM [dbo].[TableListMoneyUpgrade] t WITH (TABLOCKX)
WHERE t.[IsSentToTelemetry] = 0;

SELECT
     [EventId]
    ,[TableName]
    ,[BeginDateTimeUTC]
    ,[EndDateTimeUTC]
    ,[EventSequence]
    ,[EventDescription]
    ,[Iteration]
    ,[State]
    ,[StateDescription]
    ,CONVERT(NVARCHAR(MAX), CONVERT(BINARY(8), [VersionNumberLo]), 1) AS [VersionNumberLo]
    ,CONVERT(NVARCHAR(MAX), CONVERT(BINARY(8), [VersionNumberHi]), 1) AS [VersionNumberHi]
    ,[RetryLimit]
    ,[RetryCount]
    ,[RowcountLimit]
    ,[Rowcount]
    ,[Command]
    ,[ErrorNumber]
    ,[ErrorMessage]
    ,[ProcedureName]
FROM [dbo].[TableListMoneyUpgradeEvent] WITH (TABLOCKX);

RETURN;