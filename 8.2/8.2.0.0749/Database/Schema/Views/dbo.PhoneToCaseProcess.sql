SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for PhoneToCaseProcess
--
create view [dbo].[PhoneToCaseProcess]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [ProcessIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [IncidentIdName],
    [ActiveStageIdName],
    [OrganizationIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],

    -- physical attributes
    [BusinessProcessFlowInstanceId],
    [Name],
    [ActiveStageId],
    [ActiveStageStartedOn],
    [CompletedOn],
    [ProcessId],
    [IncidentId],
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
    [transactioncurrency_phonetocaseprocess].[CurrencyName],
    [lk_phonetocaseprocess_processid].[Name],
    [lk_phonetocaseprocess_createdby].[FullName],
    [lk_phonetocaseprocess_createdby].[YomiFullName],
    [lk_phonetocaseprocess_modifiedonbehalfby].[YomiFullName],
    [lk_phonetocaseprocess_modifiedonbehalfby].[FullName],
    [lk_phonetocaseprocess_incidentid].[Title],
    [lk_phonetocaseprocess_activestageid].[StageName],
    [organization_phonetocaseprocess].[Name],
    [lk_phonetocaseprocess_createdonbehalfby].[YomiFullName],
    [lk_phonetocaseprocess_createdonbehalfby].[FullName],
    [lk_phonetocaseprocess_modifiedby].[YomiFullName],
    [lk_phonetocaseprocess_modifiedby].[FullName],

    -- physical attribute
    [PhoneToCaseProcessBase].[BusinessProcessFlowInstanceId],
    [PhoneToCaseProcessBase].[Name],
    [PhoneToCaseProcessBase].[ActiveStageId],
    [PhoneToCaseProcessBase].[ActiveStageStartedOn],
    [PhoneToCaseProcessBase].[CompletedOn],
    [PhoneToCaseProcessBase].[ProcessId],
    [PhoneToCaseProcessBase].[IncidentId],
    [PhoneToCaseProcessBase].[Duration],
    [PhoneToCaseProcessBase].[VersionNumber],
    [PhoneToCaseProcessBase].[ImportSequenceNumber],
    [PhoneToCaseProcessBase].[OverriddenCreatedOn],
    [PhoneToCaseProcessBase].[OrganizationId],
    [PhoneToCaseProcessBase].[CreatedBy],
    [PhoneToCaseProcessBase].[CreatedOn],
    [PhoneToCaseProcessBase].[CreatedOnBehalfBy],
    [PhoneToCaseProcessBase].[ModifiedBy],
    [PhoneToCaseProcessBase].[ModifiedOn],
    [PhoneToCaseProcessBase].[ModifiedOnBehalfBy],
    [PhoneToCaseProcessBase].[StateCode],
    [PhoneToCaseProcessBase].[StatusCode],
    [PhoneToCaseProcessBase].[TraversedPath],
    [PhoneToCaseProcessBase].[TransactionCurrencyId],
    [PhoneToCaseProcessBase].[ExchangeRate]
from [PhoneToCaseProcessBase] 
    left join [ProcessStageBase] [lk_phonetocaseprocess_activestageid] on ([PhoneToCaseProcessBase].[ActiveStageId] = [lk_phonetocaseprocess_activestageid].[ProcessStageId])
    left join [SystemUserBase] [lk_phonetocaseprocess_createdby] with(nolock) on ([PhoneToCaseProcessBase].[CreatedBy] = [lk_phonetocaseprocess_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_phonetocaseprocess_createdonbehalfby] with(nolock) on ([PhoneToCaseProcessBase].[CreatedOnBehalfBy] = [lk_phonetocaseprocess_createdonbehalfby].[SystemUserId])
    left join [IncidentBase] [lk_phonetocaseprocess_incidentid] on ([PhoneToCaseProcessBase].[IncidentId] = [lk_phonetocaseprocess_incidentid].[IncidentId])
    left join [SystemUserBase] [lk_phonetocaseprocess_modifiedby] with(nolock) on ([PhoneToCaseProcessBase].[ModifiedBy] = [lk_phonetocaseprocess_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_phonetocaseprocess_modifiedonbehalfby] with(nolock) on ([PhoneToCaseProcessBase].[ModifiedOnBehalfBy] = [lk_phonetocaseprocess_modifiedonbehalfby].[SystemUserId])
    left join [WorkflowBase] [lk_phonetocaseprocess_processid] on ([PhoneToCaseProcessBase].[ProcessId] = [lk_phonetocaseprocess_processid].[WorkflowId] and [lk_phonetocaseprocess_processid].OverwriteTime = 0 and [lk_phonetocaseprocess_processid].ComponentState = 0)
    left join [OrganizationBase] [organization_phonetocaseprocess] with(nolock) on ([PhoneToCaseProcessBase].[OrganizationId] = [organization_phonetocaseprocess].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_phonetocaseprocess] on ([PhoneToCaseProcessBase].[TransactionCurrencyId] = [transactioncurrency_phonetocaseprocess].[TransactionCurrencyId])
GO
