


--
-- base view for Entitlement
--
create view dbo.[Entitlement]
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
    [EntitlementTemplateIdName],
    [TransactionCurrencyIdName],
    [SLAIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [EntitlementId],
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
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [AllocationTypeCode],
    [Description],
    [RemainingTerms],
    [RestrictCaseCreation],
    [TotalTerms],
    [StartDate],
    [EndDate],
    [CustomerId],
    [CustomerIdName],
    [CustomerIdYomiName],
    [SLAId],
    [KbAccessLevel],
    [EntitlementTemplateId],
    [CustomerIdType],
    [DecreaseRemainingOn],
    [AccountId],
    [AccountIdName],
    [AccountIdYomiName],
    [ContactId],
    [ContactIdName],
    [ContactIdYomiName],
    [TransactionCurrencyId],
    [ExchangeRate],
    [StageId],
    [ProcessId]
) with view_metadata as
select
    -- logical attributes
    [lk_entitlement_createdby].[FullName],
    [lk_entitlement_createdby].[YomiFullName],
    [lk_entitlement_createdonbehalfby].[FullName],
    [lk_entitlement_createdonbehalfby].[YomiFullName],
    [lk_entitlement_modifiedby].[FullName],
    [lk_entitlement_modifiedby].[YomiFullName],
    [lk_entitlement_modifiedonbehalfby].[FullName],
    [lk_entitlement_modifiedonbehalfby].[YomiFullName],
    [entitlementtemplateid_RelationShip].[Name],
    [TransactionCurrency_Entitlement].[CurrencyName],
    [sla_entitlement].[Name],

    -- ownership entries
    OwnerId = [EntitlementBase].OwnerId,
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
    [EntitlementBase].[EntitlementId],
    [EntitlementBase].[CreatedOn],
    [EntitlementBase].[CreatedBy],
    [EntitlementBase].[ModifiedOn],
    [EntitlementBase].[ModifiedBy],
    [EntitlementBase].[CreatedOnBehalfBy],
    [EntitlementBase].[ModifiedOnBehalfBy],
    [EntitlementBase].[OwningBusinessUnit],
    [EntitlementBase].[StateCode],
    [EntitlementBase].[StatusCode],
    [EntitlementBase].[VersionNumber],
    [EntitlementBase].[ImportSequenceNumber],
    [EntitlementBase].[OverriddenCreatedOn],
    [EntitlementBase].[TimeZoneRuleVersionNumber],
    [EntitlementBase].[UTCConversionTimeZoneCode],
    [EntitlementBase].[Name],
    [EntitlementBase].[AllocationTypeCode],
    [EntitlementBase].[Description],
    [EntitlementBase].[RemainingTerms],
    [EntitlementBase].[RestrictCaseCreation],
    [EntitlementBase].[TotalTerms],
    [EntitlementBase].[StartDate],
    [EntitlementBase].[EndDate],
    [EntitlementBase].[CustomerId],
    [EntitlementBase].[CustomerIdName],
    [EntitlementBase].[CustomerIdYomiName],
    [EntitlementBase].[SLAId],
    [EntitlementBase].[KbAccessLevel],
    [EntitlementBase].[EntitlementTemplateId],
    [EntitlementBase].[CustomerIdType],
    [EntitlementBase].[DecreaseRemainingOn],
    [EntitlementBase].[AccountId],
    [EntitlementBase].[AccountIdName],
    [EntitlementBase].[AccountIdYomiName],
    [EntitlementBase].[ContactId],
    [EntitlementBase].[ContactIdName],
    [EntitlementBase].[ContactIdYomiName],
    [EntitlementBase].[TransactionCurrencyId],
    [EntitlementBase].[ExchangeRate],
    [EntitlementBase].[StageId],
    [EntitlementBase].[ProcessId]
from [EntitlementBase] 
    left join [EntitlementTemplateBase] [entitlementtemplateid_RelationShip] on ([EntitlementBase].[EntitlementTemplateId] = [entitlementtemplateid_RelationShip].[EntitlementTemplateId])
    left join [SystemUserBase] [lk_entitlement_createdby] with(nolock) on ([EntitlementBase].[CreatedBy] = [lk_entitlement_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlement_createdonbehalfby] with(nolock) on ([EntitlementBase].[CreatedOnBehalfBy] = [lk_entitlement_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlement_modifiedby] with(nolock) on ([EntitlementBase].[ModifiedBy] = [lk_entitlement_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlement_modifiedonbehalfby] with(nolock) on ([EntitlementBase].[ModifiedOnBehalfBy] = [lk_entitlement_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [sla_entitlement] on ([EntitlementBase].[SLAId] = [sla_entitlement].[SLAId] and [sla_entitlement].OverwriteTime = 0 and [sla_entitlement].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_Entitlement] on ([EntitlementBase].[TransactionCurrencyId] = [TransactionCurrency_Entitlement].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([EntitlementBase].OwnerId = XXowner.OwnerId)
