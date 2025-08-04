


--
-- base view for ChannelAccessProfileRule
--
create view dbo.[ChannelAccessProfileRule]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [WorkflowIdName],
    [TransactionCurrencyIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [ChannelAccessProfileRuleIdUnique],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [Description],
    [ExchangeRate],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Name],
    [OwningBusinessUnit],
    [ChannelAccessProfileRuleId],
    [StateCode],
    [StatusCode],
    [TimeZoneRuleVersionNumber],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode],
    [VersionNumber],
    [WorkflowId]
) with view_metadata as
select
    -- logical attributes
    [lk_profilerule_createdonbehalfby].[FullName],
    [lk_profilerule_createdonbehalfby].[YomiFullName],
    [lk_profilerule_modifiedonbehalfby].[FullName],
    [lk_profilerule_modifiedonbehalfby].[YomiFullName],
    [lk_profilerule_modifiedby].[FullName],
    [lk_profilerule_modifiedby].[YomiFullName],
    [lk_profilerule_createdby].[FullName],
    [lk_profilerule_createdby].[YomiFullName],
    [workflowid_profilerule].[Name],
    [TransactionCurrency_profilerule].[CurrencyName],

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
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[ChannelAccessProfileRuleIdUnique],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[Description],
    [T1].[ExchangeRate],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[Name],
    [T1].[OwningBusinessUnit],
    [T1].[ChannelAccessProfileRuleId],
    [T1].[StateCode],
    [T1].[StatusCode],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[TransactionCurrencyId],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[VersionNumber],
    [T1].[WorkflowId]
from [ChannelAccessProfileRuleBase] [T1]
    left join [SystemUserBase] [lk_profilerule_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_profilerule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_profilerule_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_profilerule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_profilerule_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_profilerule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_profilerule_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_profilerule_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_profilerule] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_profilerule].[TransactionCurrencyId])
    left join [WorkflowBase] [workflowid_profilerule] on ([T1].[WorkflowId] = [workflowid_profilerule].[WorkflowId] and [workflowid_profilerule].OverwriteTime = 0 and [workflowid_profilerule].ComponentState = 0)
    left join OwnerBase XXowner with(nolock) on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0