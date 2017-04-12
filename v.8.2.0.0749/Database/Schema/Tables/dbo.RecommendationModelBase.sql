CREATE TABLE [dbo].[RecommendationModelBase]
(
[CreatedOn] [datetime] NULL,
[ValidUntil] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[RecommendationModelVersionId] [uniqueidentifier] NULL,
[BasketDataLastSynchronizationStatus] [int] NULL,
[ProductCatalogCrosssellLinkRating] [decimal] (23, 10) NOT NULL CONSTRAINT [DF_RecommendationModelBase_ProductCatalogCrosssellLinkRating] DEFAULT ((0.5)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[CatalogLastSynchronizedOn] [datetime] NULL,
[AzureModelId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RecommendationModelBase_IsManaged] DEFAULT ((0)),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RecommendationModelBase_ComponentState] DEFAULT ((0)),
[BasketDataLastSynchronizedOn] [datetime] NULL,
[ProductCatalogAccessoryLinkRating] [decimal] (23, 10) NOT NULL CONSTRAINT [DF_RecommendationModelBase_ProductCatalogAccessoryLinkRating] DEFAULT ((0.5)),
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[AzureServiceConnectionId] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RecommendationModelBase_OverwriteTime] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RecommendationModelBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[RecommendationModelVersionCount] [int] NOT NULL CONSTRAINT [DF_RecommendationModelBase_RecommendationModelVersionCount] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[RecommendationModelIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RecommendationModelBase_RecommendationModelIdUnique] DEFAULT (newid()),
[ModifiedBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[StatusCode] [int] NULL,
[ProductCatalogName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[MaxRecommendations] [int] NOT NULL CONSTRAINT [DF_RecommendationModelBase_MaxRecommendations] DEFAULT ((10)),
[MinRecommendationRating] [decimal] (23, 10) NOT NULL CONSTRAINT [DF_RecommendationModelBase_MinRecommendationRating] DEFAULT ((0.25)),
[RecommendationModelId] [uniqueidentifier] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[CatalogLastSynchronizationStatus] [int] NULL,
[MaximumVersions] [int] NOT NULL CONSTRAINT [DF_RecommendationModelBase_MaximumVersions] DEFAULT ((10))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD CONSTRAINT [cndx_PrimaryKey_RecommendationModel] PRIMARY KEY CLUSTERED  ([RecommendationModelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
