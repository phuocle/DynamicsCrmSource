


--
-- logical view for SLALogical
--
create view dbo.[SLALogical]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [BusinessHoursIdName],
    [WorkflowIdName],
    [TransactionCurrencyIdName],
    [CreatedByYomiName],
    [CreatedByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [SLAId],
    [Name],
    [BusinessHoursId],
    [ObjectTypeCode],
    [OwningBusinessUnit],
    [Description],
    [ChangedAttributeList],
    [ApplicableFrom],
    [IsDefault],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [ExchangeRate],
    [VersionNumber],
    [TransactionCurrencyId],
    [StateCode],
    [StatusCode],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [SLAIdUnique],
    [ApplicableFromPickList],
    [WorkflowId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_slabase_modifiedby].[YomiFullName],
    [lk_slabase_createdonbehalfby].[YomiFullName],
    [lk_slabase_modifiedonbehalfby].[YomiFullName],
    [lk_slabase_createdonbehalfby].[FullName],
    [lk_slabase_modifiedonbehalfby].[FullName],
    [lk_slabase_modifiedby].[FullName],
    [slabase_businesshoursid].[Name],
    [slabase_workflowid].[Name],
    [TransactionCurrency_SLA].[CurrencyName],
    [lk_slabase_createdby].[YomiFullName],
    [lk_slabase_createdby].[FullName],

    -- ownership entries
    OwnerId = [T1].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [T1].[SLAId],
    [T1].[Name],
    [T1].[BusinessHoursId],
    [T1].[ObjectTypeCode],
    [T1].[OwningBusinessUnit],
    [T1].[Description],
    [T1].[ChangedAttributeList],
    [T1].[ApplicableFrom],
    [T1].[IsDefault],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[ExchangeRate],
    [T1].[VersionNumber],
    [T1].[TransactionCurrencyId],
    [T1].[StateCode],
    [T1].[StatusCode],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[SLAIdUnique],
    [T1].[ApplicableFromPickList],
    [T1].[WorkflowId],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy]
from [SLABase] [T1]
    left join [SystemUserBase] [lk_slabase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_slabase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_slabase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_slabase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_slabase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_slabase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_slabase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_slabase_modifiedonbehalfby].[SystemUserId])
    left join [CalendarBase] [slabase_businesshoursid] on ([T1].[BusinessHoursId] = [slabase_businesshoursid].[CalendarId])
    left join [WorkflowBase] [slabase_workflowid] on ([T1].[WorkflowId] = [slabase_workflowid].[WorkflowId] and [slabase_workflowid].OverwriteTime = 0 and [slabase_workflowid].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_SLA] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_SLA].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0