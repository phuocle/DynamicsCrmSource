


--
-- base view for OpportunitySalesProcess
--
create view dbo.[OpportunitySalesProcess]
 (
    -- logical attributes
    [QuoteIdName],
    [OrganizationIdName],
    [OpportunityIdName],
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
    [SalesOrderIdName],
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
    [OpportunityId],
    [QuoteId],
    [SalesOrderId],
    [Duration],
    [TransactionCurrencyId],
    [ExchangeRate]
) with view_metadata as
select
    -- logical attributes
    [lk_opportunitysalesprocess_quoteid].[Name],
    [organization_opportunitysalesprocess].[Name],
    [lk_opportunitysalesprocess_opportunityid].[Name],
    [lk_opportunitysalesprocess_createdby].[FullName],
    [lk_opportunitysalesprocess_createdby].[YomiFullName],
    [lk_opportunitysalesprocess_createdonbehalfby].[FullName],
    [lk_opportunitysalesprocess_createdonbehalfby].[YomiFullName],
    [lk_opportunitysalesprocess_modifiedby].[FullName],
    [lk_opportunitysalesprocess_modifiedby].[YomiFullName],
    [lk_opportunitysalesprocess_modifiedonbehalfby].[FullName],
    [lk_opportunitysalesprocess_modifiedonbehalfby].[YomiFullName],
    [lk_opportunitysalesprocess_activestageid].[StageName],
    [lk_opportunitysalesprocess_processid].[Name],
    [lk_opportunitysalesprocess_salesorderid].[Name],
    [transactioncurrency_opportunitysalesprocess].[CurrencyName],

    -- physical attribute
    [OpportunitySalesProcessBase].[BusinessProcessFlowInstanceId],
    [OpportunitySalesProcessBase].[CreatedOn],
    [OpportunitySalesProcessBase].[CreatedBy],
    [OpportunitySalesProcessBase].[ModifiedOn],
    [OpportunitySalesProcessBase].[ModifiedBy],
    [OpportunitySalesProcessBase].[CreatedOnBehalfBy],
    [OpportunitySalesProcessBase].[ModifiedOnBehalfBy],
    [OpportunitySalesProcessBase].[OrganizationId],
    [OpportunitySalesProcessBase].[VersionNumber],
    [OpportunitySalesProcessBase].[ImportSequenceNumber],
    [OpportunitySalesProcessBase].[OverriddenCreatedOn],
    [OpportunitySalesProcessBase].[TimeZoneRuleVersionNumber],
    [OpportunitySalesProcessBase].[UTCConversionTimeZoneCode],
    [OpportunitySalesProcessBase].[Name],
    [OpportunitySalesProcessBase].[ActiveStageId],
    [OpportunitySalesProcessBase].[ProcessId],
    [OpportunitySalesProcessBase].[TraversedPath],
    [OpportunitySalesProcessBase].[CompletedOn],
    [OpportunitySalesProcessBase].[ActiveStageStartedOn],
    [OpportunitySalesProcessBase].[StateCode],
    [OpportunitySalesProcessBase].[StatusCode],
    [OpportunitySalesProcessBase].[OpportunityId],
    [OpportunitySalesProcessBase].[QuoteId],
    [OpportunitySalesProcessBase].[SalesOrderId],
    [OpportunitySalesProcessBase].[Duration],
    [OpportunitySalesProcessBase].[TransactionCurrencyId],
    [OpportunitySalesProcessBase].[ExchangeRate]
from [OpportunitySalesProcessBase] 
    left join [ProcessStageBase] [lk_opportunitysalesprocess_activestageid] on ([OpportunitySalesProcessBase].[ActiveStageId] = [lk_opportunitysalesprocess_activestageid].[ProcessStageId])
    left join [SystemUserBase] [lk_opportunitysalesprocess_createdby] on ([OpportunitySalesProcessBase].[CreatedBy] = [lk_opportunitysalesprocess_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunitysalesprocess_createdonbehalfby] on ([OpportunitySalesProcessBase].[CreatedOnBehalfBy] = [lk_opportunitysalesprocess_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunitysalesprocess_modifiedby] on ([OpportunitySalesProcessBase].[ModifiedBy] = [lk_opportunitysalesprocess_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunitysalesprocess_modifiedonbehalfby] on ([OpportunitySalesProcessBase].[ModifiedOnBehalfBy] = [lk_opportunitysalesprocess_modifiedonbehalfby].[SystemUserId])
    left join [OpportunityBase] [lk_opportunitysalesprocess_opportunityid] on ([OpportunitySalesProcessBase].[OpportunityId] = [lk_opportunitysalesprocess_opportunityid].[OpportunityId])
    left join [WorkflowBase] [lk_opportunitysalesprocess_processid] on ([OpportunitySalesProcessBase].[ProcessId] = [lk_opportunitysalesprocess_processid].[WorkflowId] and [lk_opportunitysalesprocess_processid].OverwriteTime = 0 and [lk_opportunitysalesprocess_processid].ComponentState = 0)
    left join [QuoteBase] [lk_opportunitysalesprocess_quoteid] on ([OpportunitySalesProcessBase].[QuoteId] = [lk_opportunitysalesprocess_quoteid].[QuoteId])
    left join [SalesOrderBase] [lk_opportunitysalesprocess_salesorderid] on ([OpportunitySalesProcessBase].[SalesOrderId] = [lk_opportunitysalesprocess_salesorderid].[SalesOrderId])
    left join [OrganizationBase] [organization_opportunitysalesprocess] on ([OpportunitySalesProcessBase].[OrganizationId] = [organization_opportunitysalesprocess].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_opportunitysalesprocess] on ([OpportunitySalesProcessBase].[TransactionCurrencyId] = [transactioncurrency_opportunitysalesprocess].[TransactionCurrencyId])
