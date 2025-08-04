


--
-- base view for RoutingRuleItem
--
create view dbo.[RoutingRuleItem]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OwnerId],
    [OwnerIdType],
    [RoutingRuleIdName],
    [OwningBusinessUnit],
    [OwningUser],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [TransactionCurrencyIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],
    [RoutedQueueIdName],

    -- physical attributes
    [RoutingRuleItemId],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Name],
    [RoutingRuleId],
    [CreatedBy],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [VersionNumber],
    [TransactionCurrencyId],
    [ExchangeRate],
    [OrganizationId],
    [RoutedQueueId],
    [ConditionXml],
    [SequenceNumber],
    [AssignObjectId],
    [AssignObjectIdType],
    [AssignObjectIdModifiedOn],
    [AssignObjectIdName],
    [AssignObjectIdYomiName],
    [Description],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [RoutingRuleItemIdUnique],
    [msdyn_routeto]
) with view_metadata as
select
    -- logical attributes
    [lk_routingruleitem_modifiedonbehalfby].[FullName],
    [lk_routingruleitem_modifiedonbehalfby].[YomiFullName],
    [routingrule_entries].[OwnerId],
    [routingrule_entries].[OwnerIdType],
    [routingrule_entries].[Name],
    [routingrule_entries].[OwningBusinessUnit],
    case when [routingrule_entries].OwnerIdType = 8
    then [routingrule_entries].OwnerId
    else null
    end,
    [lk_routingruleitem_createdby].[FullName],
    [lk_routingruleitem_createdby].[YomiFullName],
    [lk_routingruleitem_modifiedby].[FullName],
    [lk_routingruleitem_modifiedby].[YomiFullName],
    [TransactionCurrency_routingruleitem].[CurrencyName],
    [lk_routingruleitem_createdonbehalfby].[YomiFullName],
    [lk_routingruleitem_createdonbehalfby].[FullName],
    [organization_routingruleitems].[Name],
    [queue_routingruleitem].[Name],

    -- physical attribute
    [T1].[RoutingRuleItemId],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[Name],
    [T1].[RoutingRuleId],
    [T1].[CreatedBy],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[VersionNumber],
    [T1].[TransactionCurrencyId],
    [T1].[ExchangeRate],
    [T1].[OrganizationId],
    [T1].[RoutedQueueId],
    [T1].[ConditionXml],
    [T1].[SequenceNumber],
    [T1].[AssignObjectId],
    [T1].[AssignObjectIdType],
    [T1].[AssignObjectIdModifiedOn],
    [T1].[AssignObjectIdName],
    [T1].[AssignObjectIdYomiName],
    [T1].[Description],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[RoutingRuleItemIdUnique],
    [T1].[msdyn_routeto]
from [RoutingRuleItemBase] [T1]
    left join [SystemUserBase] [lk_routingruleitem_createdby] on ([T1].[CreatedBy] = [lk_routingruleitem_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_routingruleitem_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_routingruleitem_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_routingruleitem_modifiedby] on ([T1].[ModifiedBy] = [lk_routingruleitem_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_routingruleitem_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_routingruleitem_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_routingruleitems] on ([T1].[OrganizationId] = [organization_routingruleitems].[OrganizationId])
    left join [QueueBase] [queue_routingruleitem] on ([T1].[RoutedQueueId] = [queue_routingruleitem].[QueueId])
    left join [RoutingRuleBase] [routingrule_entries] on ([T1].[RoutingRuleId] = [routingrule_entries].[RoutingRuleId] and [routingrule_entries].OverwriteTime = 0 and [routingrule_entries].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_routingruleitem] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_routingruleitem].[TransactionCurrencyId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0