USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RecommendationModelBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RecommendationModelBase](
	[CreatedOn] [datetime] NULL,
	[ValidUntil] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[RecommendationModelVersionId] [uniqueidentifier] NULL,
	[BasketDataLastSynchronizationStatus] [int] NULL,
	[ProductCatalogCrosssellLinkRating] [decimal](23, 10) NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CatalogLastSynchronizedOn] [datetime] NULL,
	[AzureModelId] [nvarchar](100) NULL,
	[IsManaged] [bit] NOT NULL,
	[ComponentState] [int] NOT NULL,
	[BasketDataLastSynchronizedOn] [datetime] NULL,
	[ProductCatalogAccessoryLinkRating] [decimal](23, 10) NOT NULL,
	[Name] [nvarchar](100) NULL,
	[AzureServiceConnectionId] [uniqueidentifier] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[RecommendationModelVersionCount] [int] NOT NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[RecommendationModelIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[StatusCode] [int] NULL,
	[ProductCatalogName] [nvarchar](100) NULL,
	[MaxRecommendations] [int] NOT NULL,
	[MinRecommendationRating] [decimal](23, 10) NOT NULL,
	[RecommendationModelId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[CatalogLastSynchronizationStatus] [int] NULL,
	[MaximumVersions] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_RecommendationModel] PRIMARY KEY CLUSTERED 
(
	[RecommendationModelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD  CONSTRAINT [DF_RecommendationModelBase_ProductCatalogCrosssellLinkRating]  DEFAULT ((0.5)) FOR [ProductCatalogCrosssellLinkRating]
GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD  CONSTRAINT [DF_RecommendationModelBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD  CONSTRAINT [DF_RecommendationModelBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD  CONSTRAINT [DF_RecommendationModelBase_ProductCatalogAccessoryLinkRating]  DEFAULT ((0.5)) FOR [ProductCatalogAccessoryLinkRating]
GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD  CONSTRAINT [DF_RecommendationModelBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD  CONSTRAINT [DF_RecommendationModelBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD  CONSTRAINT [DF_RecommendationModelBase_RecommendationModelVersionCount]  DEFAULT ((0)) FOR [RecommendationModelVersionCount]
GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD  CONSTRAINT [DF_RecommendationModelBase_RecommendationModelIdUnique]  DEFAULT (newid()) FOR [RecommendationModelIdUnique]
GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD  CONSTRAINT [DF_RecommendationModelBase_MaxRecommendations]  DEFAULT ((10)) FOR [MaxRecommendations]
GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD  CONSTRAINT [DF_RecommendationModelBase_MinRecommendationRating]  DEFAULT ((0.25)) FOR [MinRecommendationRating]
GO
ALTER TABLE [dbo].[RecommendationModelBase] ADD  CONSTRAINT [DF_RecommendationModelBase_MaximumVersions]  DEFAULT ((10)) FOR [MaximumVersions]
GO
