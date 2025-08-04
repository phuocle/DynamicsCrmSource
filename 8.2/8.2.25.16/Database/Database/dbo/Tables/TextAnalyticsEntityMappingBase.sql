CREATE TABLE [dbo].[TextAnalyticsEntityMappingBase] (
    [ComponentState]                     INT              CONSTRAINT [DF_TextAnalyticsEntityMappingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModelType]                          INT              NULL,
    [TopicModelConfigurationId]          UNIQUEIDENTIFIER NULL,
    [Entity]                             NVARCHAR (50)    NULL,
    [RelationshipName]                   NVARCHAR (100)   NULL,
    [TextAnalyticsEntityMappingId]       UNIQUEIDENTIFIER NOT NULL,
    [TextAnalyticsEntityMappingIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_TextAnalyticsEntityMappingBase_TextAnalyticsEntityMappingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SolutionId]                         UNIQUEIDENTIFIER CONSTRAINT [DF_TextAnalyticsEntityMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [EntityPickList]                     INT              NULL,
    [OrganizationId]                     UNIQUEIDENTIFIER NULL,
    [KnowledgeSearchModelId]             UNIQUEIDENTIFIER NULL,
    [Field]                              NVARCHAR (50)    NULL,
    [OverwriteTime]                      DATETIME         CONSTRAINT [DF_TextAnalyticsEntityMappingBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [FieldPickList]                      INT              NULL,
    [SimilarityRuleId]                   UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]               UNIQUEIDENTIFIER NULL,
    [IsManaged]                          BIT              CONSTRAINT [DF_TextAnalyticsEntityMappingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [EntityDisplayName]                  NVARCHAR (50)    NULL,
    [IsTextMatchMapping]                 BIT              NULL,
    [FieldDisplayName]                   NVARCHAR (50)    NULL,
    [AdvancedSimilarityRuleId]           UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_textanalyticsentitymappingBase] PRIMARY KEY CLUSTERED ([TextAnalyticsEntityMappingId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_TextAnalyticsEntityMapping]
    ON [dbo].[TextAnalyticsEntityMappingBase]([TopicModelConfigurationId] ASC, [KnowledgeSearchModelId] ASC, [AdvancedSimilarityRuleId] ASC, [Entity] ASC, [Field] ASC, [RelationshipName] ASC, [IsTextMatchMapping] ASC) WITH (FILLFACTOR = 80);

