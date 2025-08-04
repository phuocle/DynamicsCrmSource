


--
-- logical view for TopicModelConfigurationLogical
--
create view dbo.[TopicModelConfigurationLogical]
 (
    -- logical attributes
    [OrganizationIdName],
    [TopicModelIdName],

    -- physical attributes
    [TopicModelConfigurationId],
    [OrganizationId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [Description],
    [NgramSize],
    [MinRelevanceScore],
    [StopWords],
    [TopicModelId],
    [TimeFilter],
    [TimeFilterDuration],
    [DataFilter],
    [SourceEntity],
    [FetchXmlList],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [TopicModelConfigurationIdUnique]
) with view_metadata as
select
    -- logical attributes
    [organization_topicmodelconfiguration].[Name],
    [topicmodel_topicmodelconfiguration].[Name],

    -- physical attribute
    [T1].[TopicModelConfigurationId],
    [T1].[OrganizationId],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[Name],
    [T1].[Description],
    [T1].[NgramSize],
    [T1].[MinRelevanceScore],
    [T1].[StopWords],
    [T1].[TopicModelId],
    [T1].[TimeFilter],
    [T1].[TimeFilterDuration],
    [T1].[DataFilter],
    [T1].[SourceEntity],
    [T1].[FetchXmlList],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[TopicModelConfigurationIdUnique]
from [TopicModelConfigurationBase] [T1]
    left join [OrganizationBase] [organization_topicmodelconfiguration] on ([T1].[OrganizationId] = [organization_topicmodelconfiguration].[OrganizationId])
    left join [TopicModelBase] [topicmodel_topicmodelconfiguration] on ([T1].[TopicModelId] = [topicmodel_topicmodelconfiguration].[TopicModelId])
where T1.OverwriteTime = 0