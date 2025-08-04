


--
-- base view for LeadToOpportunitySalesProcess
--
create view dbo.[LeadToOpportunitySalesProcess]
 (
    -- logical attributes
    [OpportunityIdName],
    [LeadIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ActiveStageIdName],
    [ProcessIdName],
    [OrganizationIdName],
    [LeadIdYomiName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [BusinessProcessFlowInstanceId],
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
    [ActiveStageId],
    [ProcessId],
    [TraversedPath],
    [CompletedOn],
    [ActiveStageStartedOn],
    [StateCode],
    [StatusCode],
    [LeadId],
    [OpportunityId],
    [Duration],
    [TransactionCurrencyId],
    [ExchangeRate]
) with view_metadata as
select
    -- logical attributes
    [lk_leadtoopportunitysalesprocess_opportunityid].[Name],
    [lk_leadtoopportunitysalesprocess_leadid].[FullName],
    [lk_leadtoopportunitysalesprocess_createdby].[FullName],
    [lk_leadtoopportunitysalesprocess_createdby].[YomiFullName],
    [lk_leadtoopportunitysalesprocess_createdonbehalfby].[FullName],
    [lk_leadtoopportunitysalesprocess_createdonbehalfby].[YomiFullName],
    [lk_leadtoopportunitysalesprocess_modifiedby].[FullName],
    [lk_leadtoopportunitysalesprocess_modifiedby].[YomiFullName],
    [lk_leadtoopportunitysalesprocess_modifiedonbehalfby].[FullName],
    [lk_leadtoopportunitysalesprocess_modifiedonbehalfby].[YomiFullName],
    [lk_leadtoopportunitysalesprocess_activestageid].[StageName],
    [lk_leadtoopportunitysalesprocess_processid].[Name],
    [organization_leadtoopportunitysalesprocess].[Name],
    [lk_leadtoopportunitysalesprocess_leadid].[YomiFullName],
    [transactioncurrency_leadtoopportunitysalesprocess].[CurrencyName],

    -- physical attribute
    [LeadToOpportunitySalesProcessBase].[BusinessProcessFlowInstanceId],
    [LeadToOpportunitySalesProcessBase].[CreatedOn],
    [LeadToOpportunitySalesProcessBase].[CreatedBy],
    [LeadToOpportunitySalesProcessBase].[ModifiedOn],
    [LeadToOpportunitySalesProcessBase].[ModifiedBy],
    [LeadToOpportunitySalesProcessBase].[CreatedOnBehalfBy],
    [LeadToOpportunitySalesProcessBase].[ModifiedOnBehalfBy],
    [LeadToOpportunitySalesProcessBase].[OrganizationId],
    [LeadToOpportunitySalesProcessBase].[VersionNumber],
    [LeadToOpportunitySalesProcessBase].[ImportSequenceNumber],
    [LeadToOpportunitySalesProcessBase].[OverriddenCreatedOn],
    [LeadToOpportunitySalesProcessBase].[TimeZoneRuleVersionNumber],
    [LeadToOpportunitySalesProcessBase].[UTCConversionTimeZoneCode],
    [LeadToOpportunitySalesProcessBase].[Name],
    [LeadToOpportunitySalesProcessBase].[ActiveStageId],
    [LeadToOpportunitySalesProcessBase].[ProcessId],
    [LeadToOpportunitySalesProcessBase].[TraversedPath],
    [LeadToOpportunitySalesProcessBase].[CompletedOn],
    [LeadToOpportunitySalesProcessBase].[ActiveStageStartedOn],
    [LeadToOpportunitySalesProcessBase].[StateCode],
    [LeadToOpportunitySalesProcessBase].[StatusCode],
    [LeadToOpportunitySalesProcessBase].[LeadId],
    [LeadToOpportunitySalesProcessBase].[OpportunityId],
    [LeadToOpportunitySalesProcessBase].[Duration],
    [LeadToOpportunitySalesProcessBase].[TransactionCurrencyId],
    [LeadToOpportunitySalesProcessBase].[ExchangeRate]
from [LeadToOpportunitySalesProcessBase] 
    left join [ProcessStageBase] [lk_leadtoopportunitysalesprocess_activestageid] on ([LeadToOpportunitySalesProcessBase].[ActiveStageId] = [lk_leadtoopportunitysalesprocess_activestageid].[ProcessStageId])
    left join [SystemUserBase] [lk_leadtoopportunitysalesprocess_createdby] on ([LeadToOpportunitySalesProcessBase].[CreatedBy] = [lk_leadtoopportunitysalesprocess_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_leadtoopportunitysalesprocess_createdonbehalfby] on ([LeadToOpportunitySalesProcessBase].[CreatedOnBehalfBy] = [lk_leadtoopportunitysalesprocess_createdonbehalfby].[SystemUserId])
    left join [LeadBase] [lk_leadtoopportunitysalesprocess_leadid] on ([LeadToOpportunitySalesProcessBase].[LeadId] = [lk_leadtoopportunitysalesprocess_leadid].[LeadId])
    left join [SystemUserBase] [lk_leadtoopportunitysalesprocess_modifiedby] on ([LeadToOpportunitySalesProcessBase].[ModifiedBy] = [lk_leadtoopportunitysalesprocess_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_leadtoopportunitysalesprocess_modifiedonbehalfby] on ([LeadToOpportunitySalesProcessBase].[ModifiedOnBehalfBy] = [lk_leadtoopportunitysalesprocess_modifiedonbehalfby].[SystemUserId])
    left join [OpportunityBase] [lk_leadtoopportunitysalesprocess_opportunityid] on ([LeadToOpportunitySalesProcessBase].[OpportunityId] = [lk_leadtoopportunitysalesprocess_opportunityid].[OpportunityId])
    left join [WorkflowBase] [lk_leadtoopportunitysalesprocess_processid] on ([LeadToOpportunitySalesProcessBase].[ProcessId] = [lk_leadtoopportunitysalesprocess_processid].[WorkflowId] and [lk_leadtoopportunitysalesprocess_processid].OverwriteTime = 0 and [lk_leadtoopportunitysalesprocess_processid].ComponentState = 0)
    left join [OrganizationBase] [organization_leadtoopportunitysalesprocess] on ([LeadToOpportunitySalesProcessBase].[OrganizationId] = [organization_leadtoopportunitysalesprocess].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_leadtoopportunitysalesprocess] on ([LeadToOpportunitySalesProcessBase].[TransactionCurrencyId] = [transactioncurrency_leadtoopportunitysalesprocess].[TransactionCurrencyId])
