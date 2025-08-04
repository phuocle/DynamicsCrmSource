CREATE TABLE [dbo].[RecommendationModelVersionBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[AzureModelBuildStatus] [int] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[PercentileRank] [int] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[AzureBuildId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[LogicAppRunId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[BasketDataSynchronizationStatus] [int] NULL,
[RecommendationModelId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[BuildStartedOn] [datetime] NULL,
[RecommendationModelVersionId] [uniqueidentifier] NOT NULL,
[CatalogSynchronizationStatus] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[BuildEndedOn] [datetime] NULL,
[Name] [nvarchar] (125) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CatalogCoverage] [int] NULL,
[CreatedOn] [datetime] NULL,
[Duration] AS ([dbo].[fn_UDF_29130f3d16ac4244ab844a54a2b5243e]([BuildStartedOn],[BuildEndedOn]))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationModelVersionBase] ADD CONSTRAINT [PK_recommendationmodelversionBase] PRIMARY KEY CLUSTERED  ([RecommendationModelVersionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_RecommendationModelVersion_Name] ON [dbo].[RecommendationModelVersionBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_RecommendationModelVersion] ON [dbo].[RecommendationModelVersionBase] ([RecommendationModelId], [Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationModelVersionBase] ADD CONSTRAINT [recommendationmodel_recommendationmodelversion] FOREIGN KEY ([RecommendationModelId]) REFERENCES [dbo].[RecommendationModelBaseIds] ([RecommendationModelId])
GO
