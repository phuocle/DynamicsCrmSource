


--
-- logical view for RoutingRuleLogical
--
create view dbo.[RoutingRuleLogical]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [WorkflowIdName],
    [TransactionCurrencyIdName],
    [OrganizationIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [RoutingRuleId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [Description],
    [OrganizationId],
    [WorkflowId],
    [TransactionCurrencyId],
    [ExchangeRate],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [RoutingRuleIdUnique]
) with view_metadata as
select
    -- logical attributes
    [lk_routingrule_createdby].[FullName],
    [lk_routingrule_createdby].[YomiFullName],
    [lk_routingrule_createdonbehalfby].[FullName],
    [lk_routingrule_createdonbehalfby].[YomiFullName],
    [lk_routingrule_modifiedby].[FullName],
    [lk_routingrule_modifiedby].[YomiFullName],
    [lk_routingrule_modifiedonbehalfby].[FullName],
    [lk_routingrule_modifiedonbehalfby].[YomiFullName],
    [Workflow_routingrule].[Name],
    [TransactionCurrency_routingrule].[CurrencyName],
    [organization_RoutingRules].[Name],

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
    [T1].[RoutingRuleId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OwningBusinessUnit],
    [T1].[StateCode],
    [T1].[StatusCode],
    [T1].[VersionNumber],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[Name],
    [T1].[Description],
    [T1].[OrganizationId],
    [T1].[WorkflowId],
    [T1].[TransactionCurrencyId],
    [T1].[ExchangeRate],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[RoutingRuleIdUnique]
from [RoutingRuleBase] [T1]
    left join [SystemUserBase] [lk_routingrule_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_routingrule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_routingrule_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_routingrule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_routingrule_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_routingrule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_routingrule_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_routingrule_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_RoutingRules] with(nolock) on ([T1].[OrganizationId] = [organization_RoutingRules].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_routingrule] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_routingrule].[TransactionCurrencyId])
    left join [WorkflowBase] [Workflow_routingrule] on ([T1].[WorkflowId] = [Workflow_routingrule].[WorkflowId] and [Workflow_routingrule].OverwriteTime = 0 and [Workflow_routingrule].ComponentState = 0)
    left join OwnerBase XXowner with(nolock) on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0