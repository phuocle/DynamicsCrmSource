CREATE TABLE [dbo].[DataPerformance] (
    [Component]                   NVARCHAR (MAX)   NULL,
    [MaxTime]                     DECIMAL (23, 10) NULL,
    [RealizedOptimizationImpact]  NVARCHAR (50)    NULL,
    [Operation]                   NVARCHAR (MAX)   NULL,
    [AnyOptimizationAvailable]    BIT              NULL,
    [MedianTime]                  DECIMAL (23, 10) NULL,
    [LastOptimizationDate]        DATETIME         NULL,
    [Count]                       INT              NULL,
    [Weight]                      DECIMAL (23, 10) NULL,
    [OptimizationStatus]          NVARCHAR (50)    NULL,
    [MinTime]                     DECIMAL (23, 10) NULL,
    [LastActionResult]            NVARCHAR (50)    NULL,
    [AnyOptimizationApplied]      BIT              NULL,
    [ExecutionPeriod]             NVARCHAR (12)    NULL,
    [OrganizationId]              UNIQUEIDENTIFIER NOT NULL,
    [EstimatedOptimizationImpact] DECIMAL (23, 10) NULL,
    [OptimizationStorage]         DECIMAL (23, 10) NULL,
    [Entity]                      NVARCHAR (MAX)   NULL,
    [DataPerformanceId]           UNIQUEIDENTIFIER NOT NULL,
    [Solution]                    NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_DataPerformance] PRIMARY KEY CLUSTERED ([DataPerformanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[DataPerformance]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[DataPerformance] SET (LOCK_ESCALATION = DISABLE);

