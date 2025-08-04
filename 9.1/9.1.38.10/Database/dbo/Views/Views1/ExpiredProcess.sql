


--
-- base view for ExpiredProcess
--
create view dbo.[ExpiredProcess]
 (
    -- logical attributes
    [KnowledgeArticleIdName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ProcessIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ActiveStageIdName],
    [TransactionCurrencyIdName],
    [OrganizationIdName],

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
    [lk_expiredprocess_knowledgearticleid].[Title],
    [lk_expiredprocess_modifiedby].[YomiFullName],
    [lk_expiredprocess_modifiedby].[FullName],
    [lk_expiredprocess_createdonbehalfby].[FullName],
    [lk_expiredprocess_createdonbehalfby].[YomiFullName],
    [lk_expiredprocess_modifiedonbehalfby].[YomiFullName],
    [lk_expiredprocess_modifiedonbehalfby].[FullName],
    [lk_expiredprocess_processid].[Name],
    [lk_expiredprocess_createdby].[FullName],
    [lk_expiredprocess_createdby].[YomiFullName],
    [lk_expiredprocess_activestageid].[StageName],
    [transactioncurrency_expiredprocess].[CurrencyName],
    [organization_expiredprocess].[Name],

    -- physical attribute
    [ExpiredProcessBase].[BusinessProcessFlowInstanceId],
    [ExpiredProcessBase].[Name],
    [ExpiredProcessBase].[ActiveStageId],
    [ExpiredProcessBase].[ActiveStageStartedOn],
    [ExpiredProcessBase].[CompletedOn],
    [ExpiredProcessBase].[ProcessId],
    [ExpiredProcessBase].[KnowledgeArticleId],
    [ExpiredProcessBase].[Duration],
    [ExpiredProcessBase].[VersionNumber],
    [ExpiredProcessBase].[ImportSequenceNumber],
    [ExpiredProcessBase].[OverriddenCreatedOn],
    [ExpiredProcessBase].[OrganizationId],
    [ExpiredProcessBase].[CreatedBy],
    [ExpiredProcessBase].[CreatedOn],
    [ExpiredProcessBase].[CreatedOnBehalfBy],
    [ExpiredProcessBase].[ModifiedBy],
    [ExpiredProcessBase].[ModifiedOn],
    [ExpiredProcessBase].[ModifiedOnBehalfBy],
    [ExpiredProcessBase].[StateCode],
    [ExpiredProcessBase].[StatusCode],
    [ExpiredProcessBase].[TraversedPath],
    [ExpiredProcessBase].[TransactionCurrencyId],
    [ExpiredProcessBase].[ExchangeRate]
from [ExpiredProcessBase] 
    left join [ProcessStageBase] [lk_expiredprocess_activestageid] on ([ExpiredProcessBase].[ActiveStageId] = [lk_expiredprocess_activestageid].[ProcessStageId])
    left join [SystemUserBase] [lk_expiredprocess_createdby]  on ([ExpiredProcessBase].[CreatedBy] = [lk_expiredprocess_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_expiredprocess_createdonbehalfby]  on ([ExpiredProcessBase].[CreatedOnBehalfBy] = [lk_expiredprocess_createdonbehalfby].[SystemUserId])
    left join [KnowledgeArticleBase] [lk_expiredprocess_knowledgearticleid] on ([ExpiredProcessBase].[KnowledgeArticleId] = [lk_expiredprocess_knowledgearticleid].[knowledgearticleId])
    left join [SystemUserBase] [lk_expiredprocess_modifiedby]  on ([ExpiredProcessBase].[ModifiedBy] = [lk_expiredprocess_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_expiredprocess_modifiedonbehalfby]  on ([ExpiredProcessBase].[ModifiedOnBehalfBy] = [lk_expiredprocess_modifiedonbehalfby].[SystemUserId])
    left join [WorkflowBase] [lk_expiredprocess_processid] on ([ExpiredProcessBase].[ProcessId] = [lk_expiredprocess_processid].[WorkflowId] and [lk_expiredprocess_processid].OverwriteTime = 0 and [lk_expiredprocess_processid].ComponentState = 0)
    left join [OrganizationBase] [organization_expiredprocess]  on ([ExpiredProcessBase].[OrganizationId] = [organization_expiredprocess].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_expiredprocess] on ([ExpiredProcessBase].[TransactionCurrencyId] = [transactioncurrency_expiredprocess].[TransactionCurrencyId])
