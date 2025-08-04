


--
-- base view for LeadToOpportunitySalesProcess
--
create view dbo.[LeadToOpportunitySalesProcess]
 (
    -- logical attributes
    [OpportunityIdName],
    [OrganizationIdName],
    [ActiveStageIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [LeadIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ProcessIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [BusinessProcessFlowInstanceId],
    [Name],
    [ActiveStageId],
    [ActiveStageStartedOn],
    [CompletedOn],
    [ProcessId],
    [LeadId],
    [OpportunityId],
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
    [lk_leadtoopportunitysalesprocess_opportunityid].[Name],
    [organization_leadtoopportunitysalesprocess].[Name],
    [lk_leadtoopportunitysalesprocess_activestageid].[StageName],
    [lk_leadtoopportunitysalesprocess_createdonbehalfby].[YomiFullName],
    [lk_leadtoopportunitysalesprocess_createdonbehalfby].[FullName],
    [lk_leadtoopportunitysalesprocess_leadid].[FullName],
    [lk_leadtoopportunitysalesprocess_modifiedonbehalfby].[FullName],
    [lk_leadtoopportunitysalesprocess_modifiedonbehalfby].[YomiFullName],
    [lk_leadtoopportunitysalesprocess_modifiedby].[FullName],
    [lk_leadtoopportunitysalesprocess_modifiedby].[YomiFullName],
    [lk_leadtoopportunitysalesprocess_processid].[Name],
    [lk_leadtoopportunitysalesprocess_createdby].[FullName],
    [lk_leadtoopportunitysalesprocess_createdby].[YomiFullName],
    [transactioncurrency_leadtoopportunitysalesprocess].[CurrencyName],

    -- physical attribute
    [LeadToOpportunitySalesProcessBase].[BusinessProcessFlowInstanceId],
    [LeadToOpportunitySalesProcessBase].[Name],
    [LeadToOpportunitySalesProcessBase].[ActiveStageId],
    [LeadToOpportunitySalesProcessBase].[ActiveStageStartedOn],
    [LeadToOpportunitySalesProcessBase].[CompletedOn],
    [LeadToOpportunitySalesProcessBase].[ProcessId],
    [LeadToOpportunitySalesProcessBase].[LeadId],
    [LeadToOpportunitySalesProcessBase].[OpportunityId],
    [LeadToOpportunitySalesProcessBase].[Duration],
    [LeadToOpportunitySalesProcessBase].[VersionNumber],
    [LeadToOpportunitySalesProcessBase].[ImportSequenceNumber],
    [LeadToOpportunitySalesProcessBase].[OverriddenCreatedOn],
    [LeadToOpportunitySalesProcessBase].[OrganizationId],
    [LeadToOpportunitySalesProcessBase].[CreatedBy],
    [LeadToOpportunitySalesProcessBase].[CreatedOn],
    [LeadToOpportunitySalesProcessBase].[CreatedOnBehalfBy],
    [LeadToOpportunitySalesProcessBase].[ModifiedBy],
    [LeadToOpportunitySalesProcessBase].[ModifiedOn],
    [LeadToOpportunitySalesProcessBase].[ModifiedOnBehalfBy],
    [LeadToOpportunitySalesProcessBase].[StateCode],
    [LeadToOpportunitySalesProcessBase].[StatusCode],
    [LeadToOpportunitySalesProcessBase].[TraversedPath],
    [LeadToOpportunitySalesProcessBase].[TransactionCurrencyId],
    [LeadToOpportunitySalesProcessBase].[ExchangeRate]
from [LeadToOpportunitySalesProcessBase] 
    left join [ProcessStageBase] [lk_leadtoopportunitysalesprocess_activestageid] on ([LeadToOpportunitySalesProcessBase].[ActiveStageId] = [lk_leadtoopportunitysalesprocess_activestageid].[ProcessStageId])
    left join [SystemUserBase] [lk_leadtoopportunitysalesprocess_createdby] with(nolock) on ([LeadToOpportunitySalesProcessBase].[CreatedBy] = [lk_leadtoopportunitysalesprocess_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_leadtoopportunitysalesprocess_createdonbehalfby] with(nolock) on ([LeadToOpportunitySalesProcessBase].[CreatedOnBehalfBy] = [lk_leadtoopportunitysalesprocess_createdonbehalfby].[SystemUserId])
    left join [LeadBase] [lk_leadtoopportunitysalesprocess_leadid] on ([LeadToOpportunitySalesProcessBase].[LeadId] = [lk_leadtoopportunitysalesprocess_leadid].[LeadId])
    left join [SystemUserBase] [lk_leadtoopportunitysalesprocess_modifiedby] with(nolock) on ([LeadToOpportunitySalesProcessBase].[ModifiedBy] = [lk_leadtoopportunitysalesprocess_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_leadtoopportunitysalesprocess_modifiedonbehalfby] with(nolock) on ([LeadToOpportunitySalesProcessBase].[ModifiedOnBehalfBy] = [lk_leadtoopportunitysalesprocess_modifiedonbehalfby].[SystemUserId])
    left join [OpportunityBase] [lk_leadtoopportunitysalesprocess_opportunityid] on ([LeadToOpportunitySalesProcessBase].[OpportunityId] = [lk_leadtoopportunitysalesprocess_opportunityid].[OpportunityId])
    left join [WorkflowBase] [lk_leadtoopportunitysalesprocess_processid] on ([LeadToOpportunitySalesProcessBase].[ProcessId] = [lk_leadtoopportunitysalesprocess_processid].[WorkflowId] and [lk_leadtoopportunitysalesprocess_processid].OverwriteTime = 0 and [lk_leadtoopportunitysalesprocess_processid].ComponentState = 0)
    left join [OrganizationBase] [organization_leadtoopportunitysalesprocess] with(nolock) on ([LeadToOpportunitySalesProcessBase].[OrganizationId] = [organization_leadtoopportunitysalesprocess].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_leadtoopportunitysalesprocess] on ([LeadToOpportunitySalesProcessBase].[TransactionCurrencyId] = [transactioncurrency_leadtoopportunitysalesprocess].[TransactionCurrencyId])
