CREATE TABLE [dbo].[DataPerformance] (
    [Weight]                     DECIMAL (23, 10) NULL,
    [Entity]                     NVARCHAR (MAX)   NULL,
    [Solution]                   NVARCHAR (MAX)   NULL,
    [Component]                  NVARCHAR (MAX)   NULL,
    [OrganizationId]             UNIQUEIDENTIFIER NOT NULL,
    [Operation]                  NVARCHAR (MAX)   NULL,
    [OptimizationAvailable]      BIT              NULL,
    [DataPerformanceId]          UNIQUEIDENTIFIER NOT NULL,
    [OptimizationStorage]        DECIMAL (23, 10) NULL,
    [Count]                      INT              NULL,
    [MedianTime]                 DECIMAL (23, 10) NULL,
    [LastOptimizationDate]       DATETIME         NULL,
    [OptimizationImpact]         DECIMAL (23, 10) NULL,
    [MaxTime]                    DECIMAL (23, 10) NULL,
    [MinTime]                    DECIMAL (23, 10) NULL,
    [OptimizationStatus]         NVARCHAR (50)    NULL,
    [AnyOptimizationApplied]     BIT              NULL,
    [LastActionResult]           NVARCHAR (50)    NULL,
    [ExecutionPeriod]            NVARCHAR (12)    NULL,
    [RealizedOptimizationImpact] NVARCHAR (50)    NULL,
    CONSTRAINT [cndx_PrimaryKey_DataPerformance] PRIMARY KEY CLUSTERED ([DataPerformanceId] ASC) WITH (FILLFACTOR = 80)
);

