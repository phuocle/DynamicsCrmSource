

CREATE PROCEDURE [dbo].[p_UpgradeMoneyToDecimalGetTablesToProcess]
(
     @MaxThreadCount            TINYINT
    ,@DailyRowUpdateLimit       INT
    ,@ProcessInitialUpdates     BIT = 1
)
AS

IF @ProcessInitialUpdates = 1
 BEGIN -- get tables eligible for all updates

    SELECT TOP(@MaxThreadCount) t.[TableName]
    FROM [dbo].[TableListMoneyUpgrade] t
    LEFT JOIN [dbo].[EntityView] e 
      ON e.[LogicalName] = LOWER(IIF(t.[TableName] LIKE N'%Base', LEFT(t.[TableName], LEN(t.[TableName])-4), t.[TableName]))
    WHERE t.[IsCompleted] = 0 AND t.[ForceStop] = 0 AND t.[IsDecimalColumnsCreated] = 1
    AND (t.[ErrorNumber] IS NULL OR SYSUTCDATETIME() > t.[RetryAfterTime])
    AND (ISNULL(e.[ChangeTrackingEnabled], 0) = 0 OR ISNULL(t.[RowsUpdatedOnLastDay], 0) < @DailyRowUpdateLimit)
    ORDER BY t.[EstimatedRowCount] DESC;

 END
ELSE
 BEGIN -- get tables eligible for final updates

    SELECT TOP(@MaxThreadCount) t.[TableName]
    FROM [dbo].[TableListMoneyUpgrade] t
    LEFT JOIN [dbo].[EntityView] e 
      ON e.[LogicalName] = LOWER(IIF(t.[TableName] LIKE N'%Base', LEFT(t.[TableName], LEN(t.[TableName])-4), t.[TableName]))
    WHERE t.[IsCompleted] = 0 AND t.[ForceStop] = 0 AND t.[IsUpdateCatchupPass] = 1
    AND (t.[ErrorNumber] IS NULL OR SYSUTCDATETIME() > t.[RetryAfterTime])
    AND (ISNULL(e.[ChangeTrackingEnabled], 0) = 0 OR ISNULL(t.[RowsUpdatedOnLastDay], 0) < @DailyRowUpdateLimit)
    ORDER BY t.[EstimatedRowCount] DESC;

 END;

RETURN;