CREATE TABLE [dbo].[DataPerformance]
(
[Weight] [decimal] (23, 10) NULL,
[Entity] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Solution] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Component] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Operation] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OptimizationAvailable] [bit] NULL,
[DataPerformanceId] [uniqueidentifier] NOT NULL,
[OptimizationStorage] [decimal] (23, 10) NULL,
[Count] [int] NULL,
[MedianTime] [decimal] (23, 10) NULL,
[LastOptimizationDate] [datetime] NULL,
[OptimizationImpact] [decimal] (23, 10) NULL,
[MaxTime] [decimal] (23, 10) NULL,
[MinTime] [decimal] (23, 10) NULL,
[OptimizationStatus] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[AnyOptimizationApplied] [bit] NULL,
[LastActionResult] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ExecutionPeriod] [nvarchar] (12) COLLATE Latin1_General_CI_AI NULL,
[RealizedOptimizationImpact] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[DataPerformance] ADD CONSTRAINT [cndx_PrimaryKey_DataPerformance] PRIMARY KEY CLUSTERED  ([DataPerformanceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
