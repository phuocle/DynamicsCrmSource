CREATE TABLE [dbo].[RecommendationModelMappingBase]
(
[ProductLineItemRelationship] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ProductField] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[DataFilter] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RecommendationModelMappingBase_IsManaged] DEFAULT ((0)),
[SynchronizedCount] [int] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RecommendationModelMappingBase_OverwriteTime] DEFAULT ((0)),
[Entity] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[RecommendationModelMappingIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RecommendationModelMappingBase_RecommendationModelMappingIdUnique] DEFAULT (newid()),
[SupportedMapId] [uniqueidentifier] NULL,
[RecommendationModelVersionId] [uniqueidentifier] NULL,
[MappingType] [int] NULL,
[ErrorCount] [int] NULL,
[TransactionField] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[FilterXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RecommendationModelMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RecommendationModelMappingBase_ComponentState] DEFAULT ((0)),
[RecommendationModelId] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[AccountField] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[TimeRangeFilter] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[RecommendationModelMappingId] [uniqueidentifier] NOT NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[AccountFieldPickList] [int] NULL,
[AccountFieldDisplayName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ProductLineItemRelationshipDisplayName] [nvarchar] (120) COLLATE Latin1_General_CI_AI NULL,
[EntityDisplayName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ProductFieldDisplayName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ProductLineItemRelationshipPickList] [int] NULL,
[ProductFieldPickList] [int] NULL,
[EntityPickList] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationModelMappingBase] ADD CONSTRAINT [cndx_PrimaryKey_RecommendationModelMapping] PRIMARY KEY CLUSTERED  ([RecommendationModelMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_RecommendationModelMapping] ON [dbo].[RecommendationModelMappingBase] ([Entity], [MappingType], [RecommendationModelVersionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
