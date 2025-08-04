


--
-- base view for OpportunitySalesProcess
--
create view dbo.[OpportunitySalesProcess]
 (
    -- logical attributes
    [QuoteIdName],
    [SalesOrderIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ProcessIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ActiveStageIdName],
    [OrganizationIdName],
    [TransactionCurrencyIdName],
    [OpportunityIdName],

    -- physical attributes
    [BusinessProcessFlowInstanceId],
    [Name],
    [ActiveStageId],
    [ActiveStageStartedOn],
    [CompletedOn],
    [ProcessId],
    [OpportunityId],
    [QuoteId],
    [SalesOrderId],
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
    [lk_opportunitysalesprocess_quoteid].[Name],
    [lk_opportunitysalesprocess_salesorderid].[Name],
    [lk_opportunitysalesprocess_modifiedby].[FullName],
    [lk_opportunitysalesprocess_modifiedby].[YomiFullName],
    [lk_opportunitysalesprocess_createdonbehalfby].[YomiFullName],
    [lk_opportunitysalesprocess_createdonbehalfby].[FullName],
    [lk_opportunitysalesprocess_modifiedonbehalfby].[FullName],
    [lk_opportunitysalesprocess_modifiedonbehalfby].[YomiFullName],
    [lk_opportunitysalesprocess_processid].[Name],
    [lk_opportunitysalesprocess_createdby].[FullName],
    [lk_opportunitysalesprocess_createdby].[YomiFullName],
    [lk_opportunitysalesprocess_activestageid].[StageName],
    [organization_opportunitysalesprocess].[Name],
    [transactioncurrency_opportunitysalesprocess].[CurrencyName],
    [lk_opportunitysalesprocess_opportunityid].[Name],

    -- physical attribute
    [OpportunitySalesProcessBase].[BusinessProcessFlowInstanceId],
    [OpportunitySalesProcessBase].[Name],
    [OpportunitySalesProcessBase].[ActiveStageId],
    [OpportunitySalesProcessBase].[ActiveStageStartedOn],
    [OpportunitySalesProcessBase].[CompletedOn],
    [OpportunitySalesProcessBase].[ProcessId],
    [OpportunitySalesProcessBase].[OpportunityId],
    [OpportunitySalesProcessBase].[QuoteId],
    [OpportunitySalesProcessBase].[SalesOrderId],
    [OpportunitySalesProcessBase].[Duration],
    [OpportunitySalesProcessBase].[VersionNumber],
    [OpportunitySalesProcessBase].[ImportSequenceNumber],
    [OpportunitySalesProcessBase].[OverriddenCreatedOn],
    [OpportunitySalesProcessBase].[OrganizationId],
    [OpportunitySalesProcessBase].[CreatedBy],
    [OpportunitySalesProcessBase].[CreatedOn],
    [OpportunitySalesProcessBase].[CreatedOnBehalfBy],
    [OpportunitySalesProcessBase].[ModifiedBy],
    [OpportunitySalesProcessBase].[ModifiedOn],
    [OpportunitySalesProcessBase].[ModifiedOnBehalfBy],
    [OpportunitySalesProcessBase].[StateCode],
    [OpportunitySalesProcessBase].[StatusCode],
    [OpportunitySalesProcessBase].[TraversedPath],
    [OpportunitySalesProcessBase].[TransactionCurrencyId],
    [OpportunitySalesProcessBase].[ExchangeRate]
from [OpportunitySalesProcessBase] 
    left join [ProcessStageBase] [lk_opportunitysalesprocess_activestageid] on ([OpportunitySalesProcessBase].[ActiveStageId] = [lk_opportunitysalesprocess_activestageid].[ProcessStageId])
    left join [SystemUserBase] [lk_opportunitysalesprocess_createdby] with(nolock) on ([OpportunitySalesProcessBase].[CreatedBy] = [lk_opportunitysalesprocess_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunitysalesprocess_createdonbehalfby] with(nolock) on ([OpportunitySalesProcessBase].[CreatedOnBehalfBy] = [lk_opportunitysalesprocess_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunitysalesprocess_modifiedby] with(nolock) on ([OpportunitySalesProcessBase].[ModifiedBy] = [lk_opportunitysalesprocess_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunitysalesprocess_modifiedonbehalfby] with(nolock) on ([OpportunitySalesProcessBase].[ModifiedOnBehalfBy] = [lk_opportunitysalesprocess_modifiedonbehalfby].[SystemUserId])
    left join [OpportunityBase] [lk_opportunitysalesprocess_opportunityid] on ([OpportunitySalesProcessBase].[OpportunityId] = [lk_opportunitysalesprocess_opportunityid].[OpportunityId])
    left join [WorkflowBase] [lk_opportunitysalesprocess_processid] on ([OpportunitySalesProcessBase].[ProcessId] = [lk_opportunitysalesprocess_processid].[WorkflowId] and [lk_opportunitysalesprocess_processid].OverwriteTime = 0 and [lk_opportunitysalesprocess_processid].ComponentState = 0)
    left join [QuoteBase] [lk_opportunitysalesprocess_quoteid] on ([OpportunitySalesProcessBase].[QuoteId] = [lk_opportunitysalesprocess_quoteid].[QuoteId])
    left join [SalesOrderBase] [lk_opportunitysalesprocess_salesorderid] on ([OpportunitySalesProcessBase].[SalesOrderId] = [lk_opportunitysalesprocess_salesorderid].[SalesOrderId])
    left join [OrganizationBase] [organization_opportunitysalesprocess] with(nolock) on ([OpportunitySalesProcessBase].[OrganizationId] = [organization_opportunitysalesprocess].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_opportunitysalesprocess] on ([OpportunitySalesProcessBase].[TransactionCurrencyId] = [transactioncurrency_opportunitysalesprocess].[TransactionCurrencyId])
