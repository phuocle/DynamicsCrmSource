


--
-- base view for TopicModel
--
create view dbo.[TopicModel]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [ModifiedByName],
    [AzureServiceConnectionIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ConfigurationUsedName],
    [OrganizationIdName],

    -- physical attributes
    [TopicModelId],
    [Name],
    [MaxTopics],
    [OrganizationId],
    [StatusCode],
    [StateCode],
    [BuildRecurrence],
    [StartTime],
    [EndTime],
    [SourceEntity],
    [ConfigurationUsed],
    [Description],
    [AzureServiceConnectionId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
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
    [lk_topicmodel_modifiedonbehalfby].[FullName],
    [lk_topicmodel_modifiedonbehalfby].[YomiFullName],
    [lk_topicmodel_createdby].[FullName],
    [lk_topicmodel_modifiedby].[FullName],
    [azureserviceconnection_topicmodel].[Name],
    [lk_topicmodel_createdonbehalfby].[YomiFullName],
    [lk_topicmodel_createdonbehalfby].[FullName],
    [topicmodelconfiguration_topicmodel].[Name],
    [organization_topicmodel].[Name],

    -- physical attribute
    [TopicModelBase].[TopicModelId],
    [TopicModelBase].[Name],
    [TopicModelBase].[MaxTopics],
    [TopicModelBase].[OrganizationId],
    [TopicModelBase].[StatusCode],
    [TopicModelBase].[StateCode],
    [TopicModelBase].[BuildRecurrence],
    [TopicModelBase].[StartTime],
    [TopicModelBase].[EndTime],
    [TopicModelBase].[SourceEntity],
    [TopicModelBase].[ConfigurationUsed],
    [TopicModelBase].[Description],
    [TopicModelBase].[AzureServiceConnectionId],
    [TopicModelBase].[CreatedBy],
    [TopicModelBase].[CreatedOn],
    [TopicModelBase].[CreatedOnBehalfBy],
    [TopicModelBase].[ModifiedBy],
    [TopicModelBase].[ModifiedOn],
    [TopicModelBase].[ModifiedOnBehalfBy],
    [TopicModelBase].[TopicsLastCreatedOn],
    [TopicModelBase].[TotalTopicsFound],
    [TopicModelBase].[AvgNumberofTopics],
    [TopicModelBase].[MaxNumberofTopics],
    [TopicModelBase].[AzureSchedulerJobName],
    [TopicModelBase].[AzureSchedulerTestJobName],
    [TopicModelBase].[AzureSchedulerOnDemandJobName]
from [TopicModelBase] 
    left join [AzureServiceConnectionBase] [azureserviceconnection_topicmodel] on ([TopicModelBase].[AzureServiceConnectionId] = [azureserviceconnection_topicmodel].[AzureServiceConnectionId])
    left join [SystemUserBase] [lk_topicmodel_createdby] with(nolock) on ([TopicModelBase].[CreatedBy] = [lk_topicmodel_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodel_createdonbehalfby] with(nolock) on ([TopicModelBase].[CreatedOnBehalfBy] = [lk_topicmodel_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodel_modifiedby] with(nolock) on ([TopicModelBase].[ModifiedBy] = [lk_topicmodel_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodel_modifiedonbehalfby] with(nolock) on ([TopicModelBase].[ModifiedOnBehalfBy] = [lk_topicmodel_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_topicmodel] with(nolock) on ([TopicModelBase].[OrganizationId] = [organization_topicmodel].[OrganizationId])
    left join [TopicModelConfigurationBase] [topicmodelconfiguration_topicmodel] on ([TopicModelBase].[ConfigurationUsed] = [topicmodelconfiguration_topicmodel].[TopicModelConfigurationId] and [topicmodelconfiguration_topicmodel].OverwriteTime = 0 and [topicmodelconfiguration_topicmodel].ComponentState = 0)
