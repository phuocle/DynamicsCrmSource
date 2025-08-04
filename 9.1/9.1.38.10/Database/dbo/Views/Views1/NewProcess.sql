


--
-- base view for NewProcess
--
create view dbo.[NewProcess]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [KnowledgeArticleIdName],
    [ActiveStageIdName],
    [TransactionCurrencyIdName],
    [ProcessIdName],
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],

    -- physical attributes
    [BusinessProcessFlowInstanceId],
    [Name],
    [ActiveStageId],
    [ActiveStageStartedOn],
    [CompletedOn],
    [ProcessId],
    [KnowledgeArticleId],
    [Duration],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [OrganizationId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [StateCode],
    [StatusCode],
    [TraversedPath],
    [TransactionCurrencyId],
    [ExchangeRate]
) with view_metadata as
select
    -- logical attributes
    [lk_newprocess_modifiedonbehalfby].[YomiFullName],
    [lk_newprocess_modifiedonbehalfby].[FullName],
    [lk_newprocess_modifiedby].[FullName],
    [lk_newprocess_modifiedby].[YomiFullName],
    [lk_newprocess_knowledgearticleid].[Title],
    [lk_newprocess_activestageid].[StageName],
    [transactioncurrency_newprocess].[CurrencyName],
    [lk_newprocess_processid].[Name],
    [organization_newprocess].[Name],
    [lk_newprocess_createdby].[FullName],
    [lk_newprocess_createdby].[YomiFullName],
    [lk_newprocess_createdonbehalfby].[YomiFullName],
    [lk_newprocess_createdonbehalfby].[FullName],

    -- physical attribute
    [NewProcessBase].[BusinessProcessFlowInstanceId],
    [NewProcessBase].[Name],
    [NewProcessBase].[ActiveStageId],
    [NewProcessBase].[ActiveStageStartedOn],
    [NewProcessBase].[CompletedOn],
    [NewProcessBase].[ProcessId],
    [NewProcessBase].[KnowledgeArticleId],
    [NewProcessBase].[Duration],
    [NewProcessBase].[VersionNumber],
    [NewProcessBase].[ImportSequenceNumber],
    [NewProcessBase].[OverriddenCreatedOn],
    [NewProcessBase].[OrganizationId],
    [NewProcessBase].[CreatedBy],
    [NewProcessBase].[CreatedOn],
    [NewProcessBase].[CreatedOnBehalfBy],
    [NewProcessBase].[ModifiedBy],
    [NewProcessBase].[ModifiedOn],
    [NewProcessBase].[ModifiedOnBehalfBy],
    [NewProcessBase].[StateCode],
    [NewProcessBase].[StatusCode],
    [NewProcessBase].[TraversedPath],
    [NewProcessBase].[TransactionCurrencyId],
    [NewProcessBase].[ExchangeRate]
from [NewProcessBase] 
    left join [ProcessStageBase] [lk_newprocess_activestageid] on ([NewProcessBase].[ActiveStageId] = [lk_newprocess_activestageid].[ProcessStageId])
    left join [SystemUserBase] [lk_newprocess_createdby]  on ([NewProcessBase].[CreatedBy] = [lk_newprocess_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_newprocess_createdonbehalfby]  on ([NewProcessBase].[CreatedOnBehalfBy] = [lk_newprocess_createdonbehalfby].[SystemUserId])
    left join [KnowledgeArticleBase] [lk_newprocess_knowledgearticleid] on ([NewProcessBase].[KnowledgeArticleId] = [lk_newprocess_knowledgearticleid].[knowledgearticleId])
    left join [SystemUserBase] [lk_newprocess_modifiedby]  on ([NewProcessBase].[ModifiedBy] = [lk_newprocess_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_newprocess_modifiedonbehalfby]  on ([NewProcessBase].[ModifiedOnBehalfBy] = [lk_newprocess_modifiedonbehalfby].[SystemUserId])
    left join [WorkflowBase] [lk_newprocess_processid] on ([NewProcessBase].[ProcessId] = [lk_newprocess_processid].[WorkflowId] and [lk_newprocess_processid].OverwriteTime = 0 and [lk_newprocess_processid].ComponentState = 0)
    left join [OrganizationBase] [organization_newprocess]  on ([NewProcessBase].[OrganizationId] = [organization_newprocess].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_newprocess] on ([NewProcessBase].[TransactionCurrencyId] = [transactioncurrency_newprocess].[TransactionCurrencyId])
