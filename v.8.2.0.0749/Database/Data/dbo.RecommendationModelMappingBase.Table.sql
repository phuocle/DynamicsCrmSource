USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RecommendationModelMappingBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RecommendationModelMappingBase](
	[ProductLineItemRelationship] [nvarchar](100) NULL,
	[ProductField] [nvarchar](100) NULL,
	[DataFilter] [nvarchar](max) NULL,
	[IsManaged] [bit] NOT NULL,
	[SynchronizedCount] [int] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[Entity] [nvarchar](100) NULL,
	[RecommendationModelMappingIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[SupportedMapId] [uniqueidentifier] NULL,
	[RecommendationModelVersionId] [uniqueidentifier] NULL,
	[MappingType] [int] NULL,
	[ErrorCount] [int] NULL,
	[TransactionField] [nvarchar](100) NULL,
	[FilterXml] [nvarchar](max) NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[ComponentState] [int] NOT NULL,
	[RecommendationModelId] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[AccountField] [nvarchar](100) NULL,
	[TimeRangeFilter] [nvarchar](max) NULL,
	[RecommendationModelMappingId] [uniqueidentifier] NOT NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[AccountFieldPickList] [int] NULL,
	[AccountFieldDisplayName] [nvarchar](50) NULL,
	[ProductLineItemRelationshipDisplayName] [nvarchar](120) NULL,
	[EntityDisplayName] [nvarchar](50) NULL,
	[ProductFieldDisplayName] [nvarchar](50) NULL,
	[ProductLineItemRelationshipPickList] [int] NULL,
	[ProductFieldPickList] [int] NULL,
	[EntityPickList] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_RecommendationModelMapping] PRIMARY KEY CLUSTERED 
(
	[RecommendationModelMappingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_UniqueConstraint_RecommendationModelMapping]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_RecommendationModelMapping] ON [dbo].[RecommendationModelMappingBase]
(
	[Entity] ASC,
	[MappingType] ASC,
	[RecommendationModelVersionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationModelMappingBase] ADD  CONSTRAINT [DF_RecommendationModelMappingBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[RecommendationModelMappingBase] ADD  CONSTRAINT [DF_RecommendationModelMappingBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[RecommendationModelMappingBase] ADD  CONSTRAINT [DF_RecommendationModelMappingBase_RecommendationModelMappingIdUnique]  DEFAULT (newid()) FOR [RecommendationModelMappingIdUnique]
GO
ALTER TABLE [dbo].[RecommendationModelMappingBase] ADD  CONSTRAINT [DF_RecommendationModelMappingBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[RecommendationModelMappingBase] ADD  CONSTRAINT [DF_RecommendationModelMappingBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
