USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DataPerformance]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DataPerformance](
	[Weight] [decimal](23, 10) NULL,
	[Entity] [nvarchar](max) NULL,
	[Solution] [nvarchar](max) NULL,
	[Component] [nvarchar](max) NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[Operation] [nvarchar](max) NULL,
	[OptimizationAvailable] [bit] NULL,
	[DataPerformanceId] [uniqueidentifier] NOT NULL,
	[OptimizationStorage] [decimal](23, 10) NULL,
	[Count] [int] NULL,
	[MedianTime] [decimal](23, 10) NULL,
	[LastOptimizationDate] [datetime] NULL,
	[OptimizationImpact] [decimal](23, 10) NULL,
	[MaxTime] [decimal](23, 10) NULL,
	[MinTime] [decimal](23, 10) NULL,
	[OptimizationStatus] [nvarchar](50) NULL,
	[AnyOptimizationApplied] [bit] NULL,
	[LastActionResult] [nvarchar](50) NULL,
	[ExecutionPeriod] [nvarchar](12) NULL,
	[RealizedOptimizationImpact] [nvarchar](50) NULL,
 CONSTRAINT [cndx_PrimaryKey_DataPerformance] PRIMARY KEY CLUSTERED 
(
	[DataPerformanceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
