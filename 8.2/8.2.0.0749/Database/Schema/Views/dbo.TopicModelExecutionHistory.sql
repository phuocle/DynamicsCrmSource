SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for TopicModelExecutionHistory
--
create view [dbo].[TopicModelExecutionHistory]
 (
    -- logical attributes
    [ModifiedByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [TopicModelConfigurationIdName],
    [TopicModelIdName],

    -- physical attributes
    [TopicModelExecutionHistoryId],
    [TopicModelId],
    [TopicModelConfigurationId],
    [RecordsProcessed],
    [TotalTime],
    [NumberOfTopicsFound],
    [StartTime],
    [IsTestExecution],
    [OrganizationId],
    [Status],
    [StatusReason],
    [FetchXmlList],
    [MaxTopics],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [ErrorDetails],
    [RecordCorrelationId]
) with view_metadata as
select
    -- logical attributes
    [lk_topicmodelexecutionhistory_modifiedby].[FullName],
    [lk_topicmodelexecutionhistory_createdby].[FullName],
    [lk_topicmodelexecutionhistory_createdonbehalfby].[YomiFullName],
    [lk_topicmodelexecutionhistory_createdonbehalfby].[FullName],
    [lk_topicmodelexecutionhistory_modifiedonbehalfby].[FullName],
    [lk_topicmodelexecutionhistory_modifiedonbehalfby].[YomiFullName],
    [organization_topicmodelexecutionhistory].[Name],
    [topicmodelconfiguration_topicmodelexecutionhistory].[Name],
    [topicmodel_topicmodelexecutionhistory].[Name],

    -- physical attribute
    [TopicModelExecutionHistoryBase].[TopicModelExecutionHistoryId],
    [TopicModelExecutionHistoryBase].[TopicModelId],
    [TopicModelExecutionHistoryBase].[TopicModelConfigurationId],
    [TopicModelExecutionHistoryBase].[RecordsProcessed],
    [TopicModelExecutionHistoryBase].[TotalTime],
    [TopicModelExecutionHistoryBase].[NumberOfTopicsFound],
    [TopicModelExecutionHistoryBase].[StartTime],
    [TopicModelExecutionHistoryBase].[IsTestExecution],
    [TopicModelExecutionHistoryBase].[OrganizationId],
    [TopicModelExecutionHistoryBase].[Status],
    [TopicModelExecutionHistoryBase].[StatusReason],
    [TopicModelExecutionHistoryBase].[FetchXmlList],
    [TopicModelExecutionHistoryBase].[MaxTopics],
    [TopicModelExecutionHistoryBase].[CreatedBy],
    [TopicModelExecutionHistoryBase].[CreatedOn],
    [TopicModelExecutionHistoryBase].[CreatedOnBehalfBy],
    [TopicModelExecutionHistoryBase].[ModifiedBy],
    [TopicModelExecutionHistoryBase].[ModifiedOn],
    [TopicModelExecutionHistoryBase].[ModifiedOnBehalfBy],
    [TopicModelExecutionHistoryBase].[ErrorDetails],
    [TopicModelExecutionHistoryBase].[RecordCorrelationId]
from [TopicModelExecutionHistoryBase] 
    left join [SystemUserBase] [lk_topicmodelexecutionhistory_createdby] with(nolock) on ([TopicModelExecutionHistoryBase].[CreatedBy] = [lk_topicmodelexecutionhistory_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodelexecutionhistory_createdonbehalfby] with(nolock) on ([TopicModelExecutionHistoryBase].[CreatedOnBehalfBy] = [lk_topicmodelexecutionhistory_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodelexecutionhistory_modifiedby] with(nolock) on ([TopicModelExecutionHistoryBase].[ModifiedBy] = [lk_topicmodelexecutionhistory_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodelexecutionhistory_modifiedonbehalfby] with(nolock) on ([TopicModelExecutionHistoryBase].[ModifiedOnBehalfBy] = [lk_topicmodelexecutionhistory_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_topicmodelexecutionhistory] with(nolock) on ([TopicModelExecutionHistoryBase].[OrganizationId] = [organization_topicmodelexecutionhistory].[OrganizationId])
    left join [TopicModelBase] [topicmodel_topicmodelexecutionhistory] on ([TopicModelExecutionHistoryBase].[TopicModelId] = [topicmodel_topicmodelexecutionhistory].[TopicModelId])
    left join [TopicModelConfigurationBase] [topicmodelconfiguration_topicmodelexecutionhistory] on ([TopicModelExecutionHistoryBase].[TopicModelConfigurationId] = [topicmodelconfiguration_topicmodelexecutionhistory].[TopicModelConfigurationId] and [topicmodelconfiguration_topicmodelexecutionhistory].OverwriteTime = 0 and [topicmodelconfiguration_topicmodelexecutionhistory].ComponentState = 0)
GO
