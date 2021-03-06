USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TextAnalyticsEntityMappingBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TextAnalyticsEntityMappingBase](
	[ComponentState] [int] NOT NULL,
	[ModelType] [int] NULL,
	[TopicModelConfigurationId] [uniqueidentifier] NULL,
	[Entity] [nvarchar](50) NULL,
	[RelationshipName] [nvarchar](100) NULL,
	[TextAnalyticsEntityMappingId] [uniqueidentifier] NOT NULL,
	[TextAnalyticsEntityMappingIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[EntityPickList] [int] NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[KnowledgeSearchModelId] [uniqueidentifier] NULL,
	[Field] [nvarchar](50) NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[FieldPickList] [int] NULL,
	[SimilarityRuleId] [uniqueidentifier] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[IsManaged] [bit] NOT NULL,
	[EntityDisplayName] [nvarchar](50) NULL,
	[IsTextMatchMapping] [bit] NULL,
	[FieldDisplayName] [nvarchar](50) NULL,
	[AdvancedSimilarityRuleId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_textanalyticsentitymappingBase] PRIMARY KEY CLUSTERED 
(
	[TextAnalyticsEntityMappingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_UniqueConstraint_TextAnalyticsEntityMapping]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_TextAnalyticsEntityMapping] ON [dbo].[TextAnalyticsEntityMappingBase]
(
	[TopicModelConfigurationId] ASC,
	[KnowledgeSearchModelId] ASC,
	[AdvancedSimilarityRuleId] ASC,
	[Entity] ASC,
	[Field] ASC,
	[RelationshipName] ASC,
	[IsTextMatchMapping] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TextAnalyticsEntityMappingBase] ADD  CONSTRAINT [DF_TextAnalyticsEntityMappingBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[TextAnalyticsEntityMappingBase] ADD  CONSTRAINT [DF_TextAnalyticsEntityMappingBase_TextAnalyticsEntityMappingIdUnique]  DEFAULT (newid()) FOR [TextAnalyticsEntityMappingIdUnique]
GO
ALTER TABLE [dbo].[TextAnalyticsEntityMappingBase] ADD  CONSTRAINT [DF_TextAnalyticsEntityMappingBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[TextAnalyticsEntityMappingBase] ADD  CONSTRAINT [DF_TextAnalyticsEntityMappingBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[TextAnalyticsEntityMappingBase] ADD  CONSTRAINT [DF_TextAnalyticsEntityMappingBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
