


--
-- logical view for ConvertRuleLogical
--
create view dbo.[ConvertRuleLogical]
 (
    -- logical attributes
    [ResponseTemplateIdName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [ModifiedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [WorkflowIdName],
    [QueueIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ConvertRuleId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Description],
    [Name],
    [VersionNumber],
    [AllowUnknownSender],
    [CheckActiveEntitlement],
    [CheckIfResolved],
    [SendAutomaticResponse],
    [QueueId],
    [ResolvedSince],
    [SourceTypeCode],
    [ResponseTemplateId],
    [WorkflowId],
    [TransactionCurrencyId],
    [ExchangeRate],
    [CheckBlockedSocialProfile],
    [CheckDirectMessages],
    [ModifiedBy],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [OwningBusinessUnit],
    [ConvertRuleIdUnique],
    [StateCode],
    [StatusCode]
) with view_metadata as
select
    -- logical attributes
    [emailtemplate_convertrule].[Title],
    [lk_convertrule_createdby].[FullName],
    [lk_ConvertRule_modifiedonbehalfby].[FullName],
    [lk_ConvertRule_createdonbehalfby].[FullName],
    [lk_ConvertRule_createdonbehalfby].[YomiFullName],
    [TransactionCurrency_ConvertRule].[CurrencyName],
    [lk_ConvertRule_modifiedby].[FullName],
    [lk_convertrule_createdby].[YomiFullName],
    [lk_ConvertRule_modifiedonbehalfby].[YomiFullName],
    [lk_ConvertRule_modifiedby].[YomiFullName],
    [workflowid_convertrule].[Name],
    [convertrule_queue].[Name],

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
    [T1].[ConvertRuleId],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[Description],
    [T1].[Name],
    [T1].[VersionNumber],
    [T1].[AllowUnknownSender],
    [T1].[CheckActiveEntitlement],
    [T1].[CheckIfResolved],
    [T1].[SendAutomaticResponse],
    [T1].[QueueId],
    [T1].[ResolvedSince],
    [T1].[SourceTypeCode],
    [T1].[ResponseTemplateId],
    [T1].[WorkflowId],
    [T1].[TransactionCurrencyId],
    [T1].[ExchangeRate],
    [T1].[CheckBlockedSocialProfile],
    [T1].[CheckDirectMessages],
    [T1].[ModifiedBy],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[OwningBusinessUnit],
    [T1].[ConvertRuleIdUnique],
    [T1].[StateCode],
    [T1].[StatusCode]
from [ConvertRuleBase] [T1]
    left join [QueueBase] [convertrule_queue] on ([T1].[QueueId] = [convertrule_queue].[QueueId])
    left join [TemplateBase] [emailtemplate_convertrule] on ([T1].[ResponseTemplateId] = [emailtemplate_convertrule].[TemplateId] and [emailtemplate_convertrule].OverwriteTime = 0 and [emailtemplate_convertrule].ComponentState = 0)
    left join [SystemUserBase] [lk_convertrule_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_convertrule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ConvertRule_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_ConvertRule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ConvertRule_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_ConvertRule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ConvertRule_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_ConvertRule_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_ConvertRule] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_ConvertRule].[TransactionCurrencyId])
    left join [WorkflowBase] [workflowid_convertrule] on ([T1].[WorkflowId] = [workflowid_convertrule].[WorkflowId] and [workflowid_convertrule].OverwriteTime = 0 and [workflowid_convertrule].ComponentState = 0)
    left join OwnerBase XXowner with(nolock) on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0