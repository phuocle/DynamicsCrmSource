USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RecommendationModelVersionBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RecommendationModelVersionBase](
	[CreatedBy] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[AzureModelBuildStatus] [int] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[PercentileRank] [int] NULL,
	[Description] [nvarchar](max) NULL,
	[AzureBuildId] [nvarchar](100) NULL,
	[ModifiedOn] [datetime] NULL,
	[LogicAppRunId] [nvarchar](100) NULL,
	[BasketDataSynchronizationStatus] [int] NULL,
	[RecommendationModelId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[BuildStartedOn] [datetime] NULL,
	[RecommendationModelVersionId] [uniqueidentifier] NOT NULL,
	[CatalogSynchronizationStatus] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[BuildEndedOn] [datetime] NULL,
	[Name] [nvarchar](125) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CatalogCoverage] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[Duration]  AS ([dbo].[fn_UDF_29130f3d16ac4244ab844a54a2b5243e]([BuildStartedOn],[BuildEndedOn])),
 CONSTRAINT [PK_recommendationmodelversionBase] PRIMARY KEY CLUSTERED 
(
	[RecommendationModelVersionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_UniqueConstraint_RecommendationModelVersion]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_RecommendationModelVersion] ON [dbo].[RecommendationModelVersionBase]
(
	[RecommendationModelId] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationModelVersionBase]  WITH CHECK ADD  CONSTRAINT [recommendationmodel_recommendationmodelversion] FOREIGN KEY([RecommendationModelId])
REFERENCES [dbo].[RecommendationModelBaseIds] ([RecommendationModelId])
GO
ALTER TABLE [dbo].[RecommendationModelVersionBase] CHECK CONSTRAINT [recommendationmodel_recommendationmodelversion]
GO
