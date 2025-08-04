SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for ConvertRule
--
create view [dbo].[ConvertRule]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ChannelPropertyGroupIdName],
    [QueueIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ResponseTemplateIdName],
    [TransactionCurrencyIdName],
    [WorkflowIdName],

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
    [ChannelPropertyGroupId],
    [CheckActiveEntitlement],
    [CheckIfResolved],
    [SendAutomaticResponse],
    [QueueId],
    [ResolvedSince],
    [SourceTypeCode],
    [ResponseTemplateId],
    [SourceChannelTypeCode],
    [WorkflowId],
    [TransactionCurrencyId],
    [ExchangeRate],
    [RecordVersion],
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
    [lk_ConvertRule_modifiedonbehalfby].[FullName],
    [lk_ConvertRule_modifiedonbehalfby].[YomiFullName],
    [lk_convertrule_createdby].[FullName],
    [lk_convertrule_createdby].[YomiFullName],
    [channelpropertygroup_convertrule].[Name],
    [convertrule_queue].[Name],
    [lk_ConvertRule_createdonbehalfby].[FullName],
    [lk_ConvertRule_createdonbehalfby].[YomiFullName],
    [lk_ConvertRule_modifiedby].[FullName],
    [lk_ConvertRule_modifiedby].[YomiFullName],
    [emailtemplate_convertrule].[Title],
    [TransactionCurrency_ConvertRule].[CurrencyName],
    [workflowid_convertrule].[Name],

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
    [T1].[ChannelPropertyGroupId],
    [T1].[CheckActiveEntitlement],
    [T1].[CheckIfResolved],
    [T1].[SendAutomaticResponse],
    [T1].[QueueId],
    [T1].[ResolvedSince],
    [T1].[SourceTypeCode],
    [T1].[ResponseTemplateId],
    [T1].[SourceChannelTypeCode],
    [T1].[WorkflowId],
    [T1].[TransactionCurrencyId],
    [T1].[ExchangeRate],
    [T1].[RecordVersion],
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
    left join [ChannelPropertyGroupBase] [channelpropertygroup_convertrule] on ([T1].[ChannelPropertyGroupId] = [channelpropertygroup_convertrule].[ChannelPropertyGroupId] and [channelpropertygroup_convertrule].OverwriteTime = 0 and [channelpropertygroup_convertrule].ComponentState = 0)
    left join [QueueBase] [convertrule_queue] on ([T1].[QueueId] = [convertrule_queue].[QueueId])
    left join [TemplateBase] [emailtemplate_convertrule] on ([T1].[ResponseTemplateId] = [emailtemplate_convertrule].[TemplateId] and [emailtemplate_convertrule].OverwriteTime = 0 and [emailtemplate_convertrule].ComponentState = 0)
    left join [SystemUserBase] [lk_convertrule_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_convertrule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ConvertRule_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_ConvertRule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ConvertRule_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_ConvertRule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ConvertRule_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_ConvertRule_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_ConvertRule] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_ConvertRule].[TransactionCurrencyId])
    left join [WorkflowBase] [workflowid_convertrule] on ([T1].[WorkflowId] = [workflowid_convertrule].[WorkflowId] and [workflowid_convertrule].OverwriteTime = 0 and [workflowid_convertrule].ComponentState = 0)
    left join OwnerBase XXowner with(nolock) on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
