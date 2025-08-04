CREATE TABLE [dbo].[TextAnalyticsEntityMappingBase] (
    [EntityDisplayName]                  NVARCHAR (50)    NULL,
    [Field]                              NVARCHAR (50)    NULL,
    [IsTextMatchMapping]                 BIT              NULL,
    [SupportingSolutionId]               UNIQUEIDENTIFIER NULL,
    [FieldPickList]                      INT              NULL,
    [TextAnalyticsEntityMappingIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_TextAnalyticsEntityMappingBase_TextAnalyticsEntityMappingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OverwriteTime]                      DATETIME         CONSTRAINT [DF_TextAnalyticsEntityMappingBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [RelationshipName]                   NVARCHAR (100)   NULL,
    [OrganizationId]                     UNIQUEIDENTIFIER NULL,
    [TextAnalyticsEntityMappingId]       UNIQUEIDENTIFIER NOT NULL,
    [EntityPickList]                     INT              NULL,
    [AdvancedSimilarityRuleId]           UNIQUEIDENTIFIER NULL,
    [ComponentState]                     INT              CONSTRAINT [DF_TextAnalyticsEntityMappingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [FieldDisplayName]                   NVARCHAR (50)    NULL,
    [Entity]                             NVARCHAR (50)    NULL,
    [KnowledgeSearchModelId]             UNIQUEIDENTIFIER NULL,
    [SimilarityRuleId]                   UNIQUEIDENTIFIER NULL,
    [SolutionId]                         UNIQUEIDENTIFIER CONSTRAINT [DF_TextAnalyticsEntityMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModelType]                          INT              NULL,
    [IsManaged]                          BIT              CONSTRAINT [DF_TextAnalyticsEntityMappingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [TopicModelConfigurationId]          UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_textanalyticsentitymappingBase] PRIMARY KEY CLUSTERED ([TextAnalyticsEntityMappingId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[TextAnalyticsEntityMappingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_TextAnalyticsEntityMapping]
    ON [dbo].[TextAnalyticsEntityMappingBase]([KnowledgeSearchModelId] ASC, [AdvancedSimilarityRuleId] ASC, [Entity] ASC, [Field] ASC, [RelationshipName] ASC, [IsTextMatchMapping] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[TextAnalyticsEntityMappingBase]([TextAnalyticsEntityMappingId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

