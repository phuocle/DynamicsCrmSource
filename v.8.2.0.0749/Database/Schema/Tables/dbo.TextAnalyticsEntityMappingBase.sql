CREATE TABLE [dbo].[TextAnalyticsEntityMappingBase]
(
[ComponentState] [int] NOT NULL CONSTRAINT [DF_TextAnalyticsEntityMappingBase_ComponentState] DEFAULT ((0)),
[ModelType] [int] NULL,
[TopicModelConfigurationId] [uniqueidentifier] NULL,
[Entity] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[RelationshipName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[TextAnalyticsEntityMappingId] [uniqueidentifier] NOT NULL,
[TextAnalyticsEntityMappingIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_TextAnalyticsEntityMappingBase_TextAnalyticsEntityMappingIdUnique] DEFAULT (newid()),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TextAnalyticsEntityMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[EntityPickList] [int] NULL,
[OrganizationId] [uniqueidentifier] NULL,
[KnowledgeSearchModelId] [uniqueidentifier] NULL,
[Field] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_TextAnalyticsEntityMappingBase_OverwriteTime] DEFAULT ((0)),
[FieldPickList] [int] NULL,
[SimilarityRuleId] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_TextAnalyticsEntityMappingBase_IsManaged] DEFAULT ((0)),
[EntityDisplayName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[IsTextMatchMapping] [bit] NULL,
[FieldDisplayName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[AdvancedSimilarityRuleId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TextAnalyticsEntityMappingBase] ADD CONSTRAINT [PK_textanalyticsentitymappingBase] PRIMARY KEY CLUSTERED  ([TextAnalyticsEntityMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_TextAnalyticsEntityMapping] ON [dbo].[TextAnalyticsEntityMappingBase] ([TopicModelConfigurationId], [KnowledgeSearchModelId], [AdvancedSimilarityRuleId], [Entity], [Field], [RelationshipName], [IsTextMatchMapping]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
