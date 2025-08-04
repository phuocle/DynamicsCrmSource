


--
-- base view for PhoneToCaseProcess
--
create view dbo.[PhoneToCaseProcess]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ProcessIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ActiveStageIdName],
    [OrganizationIdName],
    [TransactionCurrencyIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [IncidentIdName],
    [CreatedByName],
    [CreatedByYomiName],

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
    [IncidentId],
    [Duration],
    [TransactionCurrencyId],
    [ExchangeRate]
) with view_metadata as
select
    -- logical attributes
    [lk_phonetocaseprocess_modifiedonbehalfby].[FullName],
    [lk_phonetocaseprocess_modifiedonbehalfby].[YomiFullName],
    [lk_phonetocaseprocess_processid].[Name],
    [lk_phonetocaseprocess_createdonbehalfby].[FullName],
    [lk_phonetocaseprocess_createdonbehalfby].[YomiFullName],
    [lk_phonetocaseprocess_activestageid].[StageName],
    [organization_phonetocaseprocess].[Name],
    [transactioncurrency_phonetocaseprocess].[CurrencyName],
    [lk_phonetocaseprocess_modifiedby].[FullName],
    [lk_phonetocaseprocess_modifiedby].[YomiFullName],
    [lk_phonetocaseprocess_incidentid].[Title],
    [lk_phonetocaseprocess_createdby].[FullName],
    [lk_phonetocaseprocess_createdby].[YomiFullName],

    -- physical attribute
    [PhoneToCaseProcessBase].[BusinessProcessFlowInstanceId],
    [PhoneToCaseProcessBase].[CreatedOn],
    [PhoneToCaseProcessBase].[CreatedBy],
    [PhoneToCaseProcessBase].[ModifiedOn],
    [PhoneToCaseProcessBase].[ModifiedBy],
    [PhoneToCaseProcessBase].[CreatedOnBehalfBy],
    [PhoneToCaseProcessBase].[ModifiedOnBehalfBy],
    [PhoneToCaseProcessBase].[OrganizationId],
    [PhoneToCaseProcessBase].[VersionNumber],
    [PhoneToCaseProcessBase].[ImportSequenceNumber],
    [PhoneToCaseProcessBase].[OverriddenCreatedOn],
    [PhoneToCaseProcessBase].[TimeZoneRuleVersionNumber],
    [PhoneToCaseProcessBase].[UTCConversionTimeZoneCode],
    [PhoneToCaseProcessBase].[Name],
    [PhoneToCaseProcessBase].[ActiveStageId],
    [PhoneToCaseProcessBase].[ProcessId],
    [PhoneToCaseProcessBase].[TraversedPath],
    [PhoneToCaseProcessBase].[CompletedOn],
    [PhoneToCaseProcessBase].[ActiveStageStartedOn],
    [PhoneToCaseProcessBase].[StateCode],
    [PhoneToCaseProcessBase].[StatusCode],
    [PhoneToCaseProcessBase].[IncidentId],
    [PhoneToCaseProcessBase].[Duration],
    [PhoneToCaseProcessBase].[TransactionCurrencyId],
    [PhoneToCaseProcessBase].[ExchangeRate]
from [PhoneToCaseProcessBase] 
    left join [ProcessStageBase] [lk_phonetocaseprocess_activestageid] on ([PhoneToCaseProcessBase].[ActiveStageId] = [lk_phonetocaseprocess_activestageid].[ProcessStageId])
    left join [SystemUserBase] [lk_phonetocaseprocess_createdby] on ([PhoneToCaseProcessBase].[CreatedBy] = [lk_phonetocaseprocess_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_phonetocaseprocess_createdonbehalfby] on ([PhoneToCaseProcessBase].[CreatedOnBehalfBy] = [lk_phonetocaseprocess_createdonbehalfby].[SystemUserId])
    left join [IncidentBase] [lk_phonetocaseprocess_incidentid] on ([PhoneToCaseProcessBase].[IncidentId] = [lk_phonetocaseprocess_incidentid].[IncidentId])
    left join [SystemUserBase] [lk_phonetocaseprocess_modifiedby] on ([PhoneToCaseProcessBase].[ModifiedBy] = [lk_phonetocaseprocess_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_phonetocaseprocess_modifiedonbehalfby] on ([PhoneToCaseProcessBase].[ModifiedOnBehalfBy] = [lk_phonetocaseprocess_modifiedonbehalfby].[SystemUserId])
    left join [WorkflowBase] [lk_phonetocaseprocess_processid] on ([PhoneToCaseProcessBase].[ProcessId] = [lk_phonetocaseprocess_processid].[WorkflowId] and [lk_phonetocaseprocess_processid].OverwriteTime = 0 and [lk_phonetocaseprocess_processid].ComponentState = 0)
    left join [OrganizationBase] [organization_phonetocaseprocess] on ([PhoneToCaseProcessBase].[OrganizationId] = [organization_phonetocaseprocess].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_phonetocaseprocess] on ([PhoneToCaseProcessBase].[TransactionCurrencyId] = [transactioncurrency_phonetocaseprocess].[TransactionCurrencyId])
