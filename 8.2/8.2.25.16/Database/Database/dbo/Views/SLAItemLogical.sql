


--
-- logical view for SLAItemLogical
--
create view dbo.[SLAItemLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [OwnerId],
    [SLAIdName],
    [OwningUser],
    [OwnerIdType],
    [OwningBusinessUnit],
    [WorkflowIdName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [SLAItemId],
    [Name],
    [Description],
    [RelatedField],
    [SLAId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [ExchangeRate],
    [VersionNumber],
    [TransactionCurrencyId],
    [ApplicableWhenXml],
    [SuccessConditionsXml],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [SLAItemIdUnique],
    [SequenceNumber],
    [FailureAfter],
    [WarnAfter],
    [WorkflowId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_slaitembase_modifiedonbehalfby].[FullName],
    [lk_slaitembase_modifiedonbehalfby].[YomiFullName],
    [lk_slaitembase_createdby].[YomiFullName],
    [lk_slaitembase_createdby].[FullName],
    [lk_slaitembase_modifiedby].[FullName],
    [lk_slaitembase_modifiedby].[YomiFullName],
    [lk_slaitembase_createdonbehalfby].[YomiFullName],
    [lk_slaitembase_createdonbehalfby].[FullName],
    [sla_slaitem_slaId].[OwnerId],
    [sla_slaitem_slaId].[Name],
    case when [sla_slaitem_slaId].OwnerIdType = 8
    then [sla_slaitem_slaId].OwnerId
    else null
    end,
    [sla_slaitem_slaId].[OwnerIdType],
    [sla_slaitem_slaId].[OwningBusinessUnit],
    [slaitembase_workflowid].[Name],
    [TransactionCurrency_SLAItem].[CurrencyName],

    -- physical attribute
    [T1].[SLAItemId],
    [T1].[Name],
    [T1].[Description],
    [T1].[RelatedField],
    [T1].[SLAId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[ExchangeRate],
    [T1].[VersionNumber],
    [T1].[TransactionCurrencyId],
    [T1].[ApplicableWhenXml],
    [T1].[SuccessConditionsXml],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[SLAItemIdUnique],
    [T1].[SequenceNumber],
    [T1].[FailureAfter],
    [T1].[WarnAfter],
    [T1].[WorkflowId],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy]
from [SLAItemBase] [T1]
    left join [SystemUserBase] [lk_slaitembase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_slaitembase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_slaitembase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_slaitembase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_slaitembase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_slaitembase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_slaitembase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_slaitembase_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [sla_slaitem_slaId] on ([T1].[SLAId] = [sla_slaitem_slaId].[SLAId] and [sla_slaitem_slaId].OverwriteTime = 0 and [sla_slaitem_slaId].ComponentState = 0)
    left join [WorkflowBase] [slaitembase_workflowid] on ([T1].[WorkflowId] = [slaitembase_workflowid].[WorkflowId] and [slaitembase_workflowid].OverwriteTime = 0 and [slaitembase_workflowid].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_SLAItem] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_SLAItem].[TransactionCurrencyId])
where T1.OverwriteTime = 0