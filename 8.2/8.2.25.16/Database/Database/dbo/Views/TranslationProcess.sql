


--
-- base view for TranslationProcess
--
create view dbo.[TranslationProcess]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [TransactionCurrencyIdName],
    [ProcessIdName],
    [ActiveStageIdName],
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [KnowledgeArticleIdName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

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
    [lk_translationprocess_createdby].[FullName],
    [lk_translationprocess_createdby].[YomiFullName],
    [transactioncurrency_translationprocess].[CurrencyName],
    [lk_translationprocess_processid].[Name],
    [lk_translationprocess_activestageid].[StageName],
    [organization_translationprocess].[Name],
    [lk_translationprocess_modifiedonbehalfby].[FullName],
    [lk_translationprocess_modifiedonbehalfby].[YomiFullName],
    [lk_translationprocess_knowledgearticleid].[Title],
    [lk_translationprocess_modifiedby].[YomiFullName],
    [lk_translationprocess_modifiedby].[FullName],
    [lk_translationprocess_createdonbehalfby].[FullName],
    [lk_translationprocess_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [TranslationProcessBase].[BusinessProcessFlowInstanceId],
    [TranslationProcessBase].[Name],
    [TranslationProcessBase].[ActiveStageId],
    [TranslationProcessBase].[ActiveStageStartedOn],
    [TranslationProcessBase].[CompletedOn],
    [TranslationProcessBase].[ProcessId],
    [TranslationProcessBase].[KnowledgeArticleId],
    [TranslationProcessBase].[Duration],
    [TranslationProcessBase].[VersionNumber],
    [TranslationProcessBase].[ImportSequenceNumber],
    [TranslationProcessBase].[OverriddenCreatedOn],
    [TranslationProcessBase].[OrganizationId],
    [TranslationProcessBase].[CreatedBy],
    [TranslationProcessBase].[CreatedOn],
    [TranslationProcessBase].[CreatedOnBehalfBy],
    [TranslationProcessBase].[ModifiedBy],
    [TranslationProcessBase].[ModifiedOn],
    [TranslationProcessBase].[ModifiedOnBehalfBy],
    [TranslationProcessBase].[StateCode],
    [TranslationProcessBase].[StatusCode],
    [TranslationProcessBase].[TraversedPath],
    [TranslationProcessBase].[TransactionCurrencyId],
    [TranslationProcessBase].[ExchangeRate]
from [TranslationProcessBase] 
    left join [ProcessStageBase] [lk_translationprocess_activestageid] on ([TranslationProcessBase].[ActiveStageId] = [lk_translationprocess_activestageid].[ProcessStageId])
    left join [SystemUserBase] [lk_translationprocess_createdby] with(nolock) on ([TranslationProcessBase].[CreatedBy] = [lk_translationprocess_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_translationprocess_createdonbehalfby] with(nolock) on ([TranslationProcessBase].[CreatedOnBehalfBy] = [lk_translationprocess_createdonbehalfby].[SystemUserId])
    left join [KnowledgeArticleBase] [lk_translationprocess_knowledgearticleid] on ([TranslationProcessBase].[KnowledgeArticleId] = [lk_translationprocess_knowledgearticleid].[knowledgearticleId])
    left join [SystemUserBase] [lk_translationprocess_modifiedby] with(nolock) on ([TranslationProcessBase].[ModifiedBy] = [lk_translationprocess_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_translationprocess_modifiedonbehalfby] with(nolock) on ([TranslationProcessBase].[ModifiedOnBehalfBy] = [lk_translationprocess_modifiedonbehalfby].[SystemUserId])
    left join [WorkflowBase] [lk_translationprocess_processid] on ([TranslationProcessBase].[ProcessId] = [lk_translationprocess_processid].[WorkflowId] and [lk_translationprocess_processid].OverwriteTime = 0 and [lk_translationprocess_processid].ComponentState = 0)
    left join [OrganizationBase] [organization_translationprocess] with(nolock) on ([TranslationProcessBase].[OrganizationId] = [organization_translationprocess].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_translationprocess] on ([TranslationProcessBase].[TransactionCurrencyId] = [transactioncurrency_translationprocess].[TransactionCurrencyId])
