


--
-- base view for TopicModelExecutionHistory
--
create view dbo.[TopicModelExecutionHistory]
 (
    -- logical attributes
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [TopicModelIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [TopicModelConfigurationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- physical attributes
    [TopicModelExecutionHistoryId],
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
    [TopicModelId],
    [TopicModelConfigurationId],
    [RecordsProcessed],
    [TotalTime],
    [NumberOfTopicsFound],
    [StartTime],
    [IsTestExecution],
    [Status],
    [StatusReason],
    [FetchXmlList],
    [MaxTopics],
    [ErrorDetails],
    [RecordCorrelationId]
) with view_metadata as
select
    -- logical attributes
    [organization_topicmodelexecutionhistory].[Name],
    [lk_topicmodelexecutionhistory_createdby].[FullName],
    [lk_topicmodelexecutionhistory_createdby].[YomiFullName],
    [topicmodel_topicmodelexecutionhistory].[Name],
    [lk_topicmodelexecutionhistory_modifiedonbehalfby].[FullName],
    [lk_topicmodelexecutionhistory_modifiedonbehalfby].[YomiFullName],
    [topicmodelconfiguration_topicmodelexecutionhistory].[Name],
    [lk_topicmodelexecutionhistory_createdonbehalfby].[FullName],
    [lk_topicmodelexecutionhistory_createdonbehalfby].[YomiFullName],
    [lk_topicmodelexecutionhistory_modifiedby].[FullName],
    [lk_topicmodelexecutionhistory_modifiedby].[YomiFullName],

    -- physical attribute
    [TopicModelExecutionHistoryBase].[TopicModelExecutionHistoryId],
    [TopicModelExecutionHistoryBase].[CreatedOn],
    [TopicModelExecutionHistoryBase].[CreatedBy],
    [TopicModelExecutionHistoryBase].[ModifiedOn],
    [TopicModelExecutionHistoryBase].[ModifiedBy],
    [TopicModelExecutionHistoryBase].[CreatedOnBehalfBy],
    [TopicModelExecutionHistoryBase].[ModifiedOnBehalfBy],
    [TopicModelExecutionHistoryBase].[OrganizationId],
    [TopicModelExecutionHistoryBase].[VersionNumber],
    [TopicModelExecutionHistoryBase].[ImportSequenceNumber],
    [TopicModelExecutionHistoryBase].[OverriddenCreatedOn],
    [TopicModelExecutionHistoryBase].[TimeZoneRuleVersionNumber],
    [TopicModelExecutionHistoryBase].[UTCConversionTimeZoneCode],
    [TopicModelExecutionHistoryBase].[Name],
    [TopicModelExecutionHistoryBase].[TopicModelId],
    [TopicModelExecutionHistoryBase].[TopicModelConfigurationId],
    [TopicModelExecutionHistoryBase].[RecordsProcessed],
    [TopicModelExecutionHistoryBase].[TotalTime],
    [TopicModelExecutionHistoryBase].[NumberOfTopicsFound],
    [TopicModelExecutionHistoryBase].[StartTime],
    [TopicModelExecutionHistoryBase].[IsTestExecution],
    [TopicModelExecutionHistoryBase].[Status],
    [TopicModelExecutionHistoryBase].[StatusReason],
    [TopicModelExecutionHistoryBase].[FetchXmlList],
    [TopicModelExecutionHistoryBase].[MaxTopics],
    [TopicModelExecutionHistoryBase].[ErrorDetails],
    [TopicModelExecutionHistoryBase].[RecordCorrelationId]
from [TopicModelExecutionHistoryBase] 
    left join [SystemUserBase] [lk_topicmodelexecutionhistory_createdby] on ([TopicModelExecutionHistoryBase].[CreatedBy] = [lk_topicmodelexecutionhistory_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodelexecutionhistory_createdonbehalfby] on ([TopicModelExecutionHistoryBase].[CreatedOnBehalfBy] = [lk_topicmodelexecutionhistory_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodelexecutionhistory_modifiedby] on ([TopicModelExecutionHistoryBase].[ModifiedBy] = [lk_topicmodelexecutionhistory_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_topicmodelexecutionhistory_modifiedonbehalfby] on ([TopicModelExecutionHistoryBase].[ModifiedOnBehalfBy] = [lk_topicmodelexecutionhistory_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_topicmodelexecutionhistory] on ([TopicModelExecutionHistoryBase].[OrganizationId] = [organization_topicmodelexecutionhistory].[OrganizationId])
    left join [TopicModelBase] [topicmodel_topicmodelexecutionhistory] on ([TopicModelExecutionHistoryBase].[TopicModelId] = [topicmodel_topicmodelexecutionhistory].[TopicModelId])
    left join [TopicModelConfigurationBase] [topicmodelconfiguration_topicmodelexecutionhistory] on ([TopicModelExecutionHistoryBase].[TopicModelConfigurationId] = [topicmodelconfiguration_topicmodelexecutionhistory].[TopicModelConfigurationId] and [topicmodelconfiguration_topicmodelexecutionhistory].OverwriteTime = 0 and [topicmodelconfiguration_topicmodelexecutionhistory].ComponentState = 0)
