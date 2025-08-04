SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for ConvertRuleItemLogical
--
create view [dbo].[ConvertRuleItemLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [OwningUser],
    [ConvertRuleIdName],
    [OwningBusinessUnit],
    [OwnerIdType],
    [OwnerId],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [WorkflowIdName],
    [TransactionCurrencyIdName],
    [QueueIdName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Description],
    [Name],
    [ConditionId],
    [ConvertRuleItemId],
    [TransactionCurrencyId],
    [ConvertRuleId],
    [VersionNumber],
    [ExchangeRate],
    [WorkflowId],
    [QueueId],
    [ConditionXml],
    [SequenceNumber],
    [PropertiesXml],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [ConvertRuleItemIdUnique]
) with view_metadata as
select
    -- logical attributes
    [lk_convertruleitembase_createdonbehalfby].[YomiFullName],
    [lk_convertruleitembase_createdonbehalfby].[FullName],
    [lk_convertruleitembase_modifiedonbehalfby].[YomiFullName],
    [lk_convertruleitembase_modifiedonbehalfby].[FullName],
    case when [convertrule_convertruleitem].OwnerIdType = 8
    then [convertrule_convertruleitem].OwnerId
    else null
    end,
    [convertrule_convertruleitem].[Name],
    [convertrule_convertruleitem].[OwningBusinessUnit],
    [convertrule_convertruleitem].[OwnerIdType],
    [convertrule_convertruleitem].[OwnerId],
    [lk_convertruleitembase_createdby].[FullName],
    [lk_convertruleitembase_createdby].[YomiFullName],
    [lk_convertruleitembase_modifiedby].[FullName],
    [lk_convertruleitembase_modifiedby].[YomiFullName],
    [convertruleitembase_workflowid].[Name],
    [transactioncurrency_convertruleitem].[CurrencyName],
    [queue_convertruleitem].[Name],

    -- physical attribute
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[Description],
    [T1].[Name],
    [T1].[ConditionId],
    [T1].[ConvertRuleItemId],
    [T1].[TransactionCurrencyId],
    [T1].[ConvertRuleId],
    [T1].[VersionNumber],
    [T1].[ExchangeRate],
    [T1].[WorkflowId],
    [T1].[QueueId],
    [T1].[ConditionXml],
    [T1].[SequenceNumber],
    [T1].[PropertiesXml],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[ConvertRuleItemIdUnique]
from [ConvertRuleItemBase] [T1]
    left join [ConvertRuleBase] [convertrule_convertruleitem] on ([T1].[ConvertRuleId] = [convertrule_convertruleitem].[ConvertRuleId] and [convertrule_convertruleitem].OverwriteTime = 0 and [convertrule_convertruleitem].ComponentState = 0)
    left join [WorkflowBase] [convertruleitembase_workflowid] on ([T1].[WorkflowId] = [convertruleitembase_workflowid].[WorkflowId] and [convertruleitembase_workflowid].OverwriteTime = 0 and [convertruleitembase_workflowid].ComponentState = 0)
    left join [SystemUserBase] [lk_convertruleitembase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_convertruleitembase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_convertruleitembase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_convertruleitembase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_convertruleitembase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_convertruleitembase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_convertruleitembase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_convertruleitembase_modifiedonbehalfby].[SystemUserId])
    left join [QueueBase] [queue_convertruleitem] on ([T1].[QueueId] = [queue_convertruleitem].[QueueId])
    left join [TransactionCurrencyBase] [transactioncurrency_convertruleitem] on ([T1].[TransactionCurrencyId] = [transactioncurrency_convertruleitem].[TransactionCurrencyId])
where T1.OverwriteTime = 0
GO
