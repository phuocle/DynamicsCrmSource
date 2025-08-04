


--
-- base view for TopicModel
--
create view dbo.[TopicModel]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [ConfigurationUsedName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [AzureServiceConnectionIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [TopicModelId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [MaxTopics],
    [StatusCode],
    [StateCode],
    [BuildRecurrence],
    [StartTime],
    [EndTime],
    [SourceEntity],
    [ConfigurationUsed],
    [Description],
    [AzureServiceConnectionId],
    [TopicsLastCreatedOn],
    [TotalTopicsFound],
    [AvgNumberofTopics],
    [MaxNumberofTopics],
    [AzureSchedulerJobName],
    [AzureSchedulerTestJobName],
    [AzureSchedulerOnDemandJobName]
) with view_metadata as
select
    -- logical attributes
    [lk_topicmodel_modifiedby].[FullName],
    [lk_topicmodel_modifiedby].[YomiFullName],
    [lk_topicmodel_createdby].[FullName],
    [lk_topicmodel_createdby].[YomiFullName],
    [organization_topicmodel].[Name],
    [topicmodelconfiguration_topicmodel].[Name],
    [lk_topicmodel_createdonbehalfby].[FullName],
    [lk_topicmodel_createdonbehalfby].[YomiFullName],
    [azureserviceconnection_topicmodel].[Name],
    [lk_topicmodel_modifiedonbehalfby].[FullName],
    [lk_topicmodel_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [TopicModelBase].[TopicModelId],
    [TopicModelBase].[CreatedOn],
    [TopicModelBase].[CreatedBy],
    [TopicModelBase].[ModifiedOn],
    [TopicModelBase].[ModifiedBy],
    [TopicModelBase].[CreatedOnBehalfBy],
    [TopicModelBase].[ModifiedOnBehalfBy],
    [TopicModelBase].[OrganizationId],
    [TopicModelBase].[VersionNumber],
    [TopicModelBase].[ImportSequenceNumber],
    [TopicModelBase].[OverriddenCreatedOn],
    [TopicModelBase].[TimeZoneRuleVersionNumber],
    [TopicModelBase].[UTCConversionTimeZoneCode],
    [TopicModelBase].[Name],
    [TopicModelBase].[MaxTopics],
    [TopicModelBase].[StatusCode],
    [TopicModelBase].[StateCode],
    [TopicModelBase].[BuildRecurrence],
    [TopicModelBase].[StartTime],
    [TopicModelBase].[EndTime],
    [TopicModelBase].[SourceEntity],
    [TopicModelBase].[ConfigurationUsed],
    [TopicModelBase].[Description],
    [TopicModelBase].[AzureServiceConnectionId],
    [TopicModelBase].[TopicsLastCreatedOn],
    [TopicModelBase].[TotalTopicsFound],
    [TopicModelBase].[AvgNumberofTopics],
    [TopicModelBase].[MaxNumberofTopics],
    [TopicModelBase].[AzureSchedulerJobName],
    [TopicModelBase].[AzureSchedulerTestJobName],
    [TopicModelBase].[AzureSchedulerOnDemandJobName]
from [TopicModelBase] 
    left join [AzureServiceConnectionBase] [azureserviceconnection_topicmodel] on ([TopicModelBase].[AzureServiceConnectionId] = [azureserviceconnection_topicmodel].[AzureServiceConnectionId])
    left join [SystemUserBase] [lk_topicmodel_createdby] on ([TopicModelBase].[CreatedBy] = [lk_topicmodel_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodel_createdonbehalfby] on ([TopicModelBase].[CreatedOnBehalfBy] = [lk_topicmodel_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodel_modifiedby] on ([TopicModelBase].[ModifiedBy] = [lk_topicmodel_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodel_modifiedonbehalfby] on ([TopicModelBase].[ModifiedOnBehalfBy] = [lk_topicmodel_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_topicmodel] on ([TopicModelBase].[OrganizationId] = [organization_topicmodel].[OrganizationId])
    left join [TopicModelConfigurationBase] [topicmodelconfiguration_topicmodel] on ([TopicModelBase].[ConfigurationUsed] = [topicmodelconfiguration_topicmodel].[TopicModelConfigurationId] and [topicmodelconfiguration_topicmodel].OverwriteTime = 0 and [topicmodelconfiguration_topicmodel].ComponentState = 0)
