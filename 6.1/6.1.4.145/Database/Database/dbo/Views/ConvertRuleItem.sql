


--
-- base view for ConvertRuleItem
--
create view dbo.[ConvertRuleItem]
 (
    -- logical attributes
    [QueueIdName],
    [TransactionCurrencyIdName],
    [ModifiedByName],
    [OwningUser],
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [ConvertRuleIdName],
    [OwningBusinessUnit],
    [ModifiedOnBehalfByName],
    [OwnerIdType],
    [CreatedOnBehalfByYomiName],
    [OwnerId],
    [CreatedOnBehalfByName],

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
    [queue_convertruleitem].[Name],
    [transactioncurrency_convertruleitem].[CurrencyName],
    [lk_convertruleitembase_modifiedby].[FullName],
    case when [convertrule_convertruleitem].OwnerIdType = 8
    then [convertrule_convertruleitem].OwnerId
    else null
    end,
    [lk_convertruleitembase_createdby].[FullName],
    [lk_convertruleitembase_modifiedonbehalfby].[YomiFullName],
    [lk_convertruleitembase_modifiedby].[YomiFullName],
    [lk_convertruleitembase_createdby].[YomiFullName],
    [convertrule_convertruleitem].[Name],
    [convertrule_convertruleitem].[OwningBusinessUnit],
    [lk_convertruleitembase_modifiedonbehalfby].[FullName],
    [convertrule_convertruleitem].[OwnerIdType],
    [lk_convertruleitembase_createdonbehalfby].[YomiFullName],
    [convertrule_convertruleitem].[OwnerId],
    [lk_convertruleitembase_createdonbehalfby].[FullName],

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
    left join [SystemUserBase] [lk_convertruleitembase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_convertruleitembase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_convertruleitembase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_convertruleitembase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_convertruleitembase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_convertruleitembase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_convertruleitembase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_convertruleitembase_modifiedonbehalfby].[SystemUserId])
    left join [QueueBase] [queue_convertruleitem] on ([T1].[QueueId] = [queue_convertruleitem].[QueueId])
    left join [TransactionCurrencyBase] [transactioncurrency_convertruleitem] on ([T1].[TransactionCurrencyId] = [transactioncurrency_convertruleitem].[TransactionCurrencyId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0