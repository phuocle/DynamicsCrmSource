


--
-- logical view for TextAnalyticsEntityMappingLogical
--
create view dbo.[TextAnalyticsEntityMappingLogical]
 (
    -- logical attributes
    [SimilarityRuleIdName],
    [KnowledgeSearchModelIdName],
    [TopicModelConfigurationIdName],
    [OrganizationIdName],
    [AdvancedSimilarityRuleIdName],

    -- physical attributes
    [TextAnalyticsEntityMappingId],
    [Entity],
    [Field],
    [RelationshipName],
    [OrganizationId],
    [KnowledgeSearchModelId],
    [ModelType],
    [SimilarityRuleId],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [TextAnalyticsEntityMappingIdUnique],
    [EntityPickList],
    [FieldPickList],
    [EntityDisplayName],
    [FieldDisplayName],
    [AdvancedSimilarityRuleId],
    [IsTextMatchMapping],
    [TopicModelConfigurationId]
) with view_metadata as
select
    -- logical attributes
    [similarityrule_textanalyticsentitymapping].[name],
    [knowledgesearchmodel_textanalyticsentitymapping].[Name],
    [topicmodelconfiguration_textanalyticsentitymapping].[Name],
    [organization_textanalyticsentitymapping].[Name],
    [advancedsimilarityrule_textanalyticsentitymapping].[name],

    -- physical attribute
    [T1].[TextAnalyticsEntityMappingId],
    [T1].[Entity],
    [T1].[Field],
    [T1].[RelationshipName],
    [T1].[OrganizationId],
    [T1].[KnowledgeSearchModelId],
    [T1].[ModelType],
    [T1].[SimilarityRuleId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[TextAnalyticsEntityMappingIdUnique],
    [T1].[EntityPickList],
    [T1].[FieldPickList],
    [T1].[EntityDisplayName],
    [T1].[FieldDisplayName],
    [T1].[AdvancedSimilarityRuleId],
    [T1].[IsTextMatchMapping],
    [T1].[TopicModelConfigurationId]
from [TextAnalyticsEntityMappingBase] [T1]
    left join [AdvancedSimilarityRuleBase] [advancedsimilarityrule_textanalyticsentitymapping] on ([T1].[AdvancedSimilarityRuleId] = [advancedsimilarityrule_textanalyticsentitymapping].[AdvancedSimilarityRuleId] and [advancedsimilarityrule_textanalyticsentitymapping].OverwriteTime = 0 and [advancedsimilarityrule_textanalyticsentitymapping].ComponentState = 0)
    left join [KnowledgeSearchModelBase] [knowledgesearchmodel_textanalyticsentitymapping] on ([T1].[KnowledgeSearchModelId] = [knowledgesearchmodel_textanalyticsentitymapping].[KnowledgeSearchModelId] and [knowledgesearchmodel_textanalyticsentitymapping].OverwriteTime = 0 and [knowledgesearchmodel_textanalyticsentitymapping].ComponentState = 0)
    left join [OrganizationBase] [organization_textanalyticsentitymapping] on ([T1].[OrganizationId] = [organization_textanalyticsentitymapping].[OrganizationId])
    left join [SimilarityRuleBase] [similarityrule_textanalyticsentitymapping] on ([T1].[SimilarityRuleId] = [similarityrule_textanalyticsentitymapping].[SimilarityRuleId] and [similarityrule_textanalyticsentitymapping].OverwriteTime = 0 and [similarityrule_textanalyticsentitymapping].ComponentState = 0)
    left join [TopicModelConfigurationBase] [topicmodelconfiguration_textanalyticsentitymapping] on ([T1].[TopicModelConfigurationId] = [topicmodelconfiguration_textanalyticsentitymapping].[TopicModelConfigurationId] and [topicmodelconfiguration_textanalyticsentitymapping].OverwriteTime = 0 and [topicmodelconfiguration_textanalyticsentitymapping].ComponentState = 0)
where T1.OverwriteTime = 0