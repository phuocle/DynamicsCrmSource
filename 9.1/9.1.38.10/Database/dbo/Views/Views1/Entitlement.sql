


--
-- base view for Entitlement
--
create view dbo.[Entitlement]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [SLAIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [EntitlementTemplateIdName],
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
    [EntitlementId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [VersionNumber],
    [EmailAddress],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [AllocationTypeCode],
    [Description],
    [CustomerId],
    [DecreaseRemainingOn],
    [EndDate],
    [EntitlementTemplateId],
    [KbAccessLevel],
    [RemainingTerms],
    [RestrictCaseCreation],
    [SLAId],
    [StartDate],
    [StateCode],
    [StatusCode],
    [TotalTerms],
    [IsDefault],
    [AccountId],
    [ContactId],
    [CustomerIdName],
    [CustomerIdType],
    [CustomerIdYomiName],
    [ExchangeRate],
    [TransactionCurrencyId],
    [AccountIdName],
    [AccountIdYomiName],
    [ContactIdName],
    [ContactIdYomiName],
    [entitytype]
) with view_metadata as
select
    -- logical attributes
    [lk_entitlement_modifiedby].[FullName],
    [lk_entitlement_modifiedby].[YomiFullName],
    [sla_entitlement].[Name],
    [lk_entitlement_createdby].[FullName],
    [lk_entitlement_createdby].[YomiFullName],
    [lk_entitlement_modifiedonbehalfby].[FullName],
    [lk_entitlement_modifiedonbehalfby].[YomiFullName],
    [lk_entitlement_createdonbehalfby].[FullName],
    [lk_entitlement_createdonbehalfby].[YomiFullName],
    [entitlementtemplateid_RelationShip].[Name],
    [TransactionCurrency_Entitlement].[CurrencyName],

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
    [EntitlementBase].[VersionNumber],
    [EntitlementBase].[EmailAddress],
    [EntitlementBase].[ImportSequenceNumber],
    [EntitlementBase].[OverriddenCreatedOn],
    [EntitlementBase].[TimeZoneRuleVersionNumber],
    [EntitlementBase].[UTCConversionTimeZoneCode],
    [EntitlementBase].[Name],
    [EntitlementBase].[ProcessId],
    [EntitlementBase].[StageId],
    [EntitlementBase].[TraversedPath],
    [EntitlementBase].[AllocationTypeCode],
    [EntitlementBase].[Description],
    [EntitlementBase].[CustomerId],
    [EntitlementBase].[DecreaseRemainingOn],
    [EntitlementBase].[EndDate],
    [EntitlementBase].[EntitlementTemplateId],
    [EntitlementBase].[KbAccessLevel],
    [EntitlementBase].[RemainingTerms],
    [EntitlementBase].[RestrictCaseCreation],
    [EntitlementBase].[SLAId],
    [EntitlementBase].[StartDate],
    [EntitlementBase].[StateCode],
    [EntitlementBase].[StatusCode],
    [EntitlementBase].[TotalTerms],
    [EntitlementBase].[IsDefault],
    [EntitlementBase].[AccountId],
    [EntitlementBase].[ContactId],
    [EntitlementBase].[CustomerIdName],
    [EntitlementBase].[CustomerIdType],
    [EntitlementBase].[CustomerIdYomiName],
    [EntitlementBase].[ExchangeRate],
    [EntitlementBase].[TransactionCurrencyId],
    [EntitlementBase].[AccountIdName],
    [EntitlementBase].[AccountIdYomiName],
    [EntitlementBase].[ContactIdName],
    [EntitlementBase].[ContactIdYomiName],
    [EntitlementBase].[entitytype]
from [EntitlementBase] 
    left join [EntitlementTemplateBase] [entitlementtemplateid_RelationShip] on ([EntitlementBase].[EntitlementTemplateId] = [entitlementtemplateid_RelationShip].[EntitlementTemplateId])
    left join [SystemUserBase] [lk_entitlement_createdby] on ([EntitlementBase].[CreatedBy] = [lk_entitlement_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlement_createdonbehalfby] on ([EntitlementBase].[CreatedOnBehalfBy] = [lk_entitlement_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlement_modifiedby] on ([EntitlementBase].[ModifiedBy] = [lk_entitlement_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlement_modifiedonbehalfby] on ([EntitlementBase].[ModifiedOnBehalfBy] = [lk_entitlement_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [sla_entitlement] on ([EntitlementBase].[SLAId] = [sla_entitlement].[SLAId] and [sla_entitlement].OverwriteTime = 0 and [sla_entitlement].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_Entitlement] on ([EntitlementBase].[TransactionCurrencyId] = [TransactionCurrency_Entitlement].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([EntitlementBase].OwnerId = XXowner.OwnerId)
