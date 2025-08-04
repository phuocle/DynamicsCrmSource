


--
-- base view for EntitlementChannel
--
create view dbo.[EntitlementChannel]
 (
    -- logical attributes
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OwningBusinessUnit],
    [OwningUser],
    [EntitlementIdName],
    [OwnerIdType],
    [OwnerId],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [TransactionCurrencyIdName],

    -- ownership entries
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwningTeam,

    -- physical attributes
    [EntitlementChannelId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [Channel],
    [EntitlementId],
    [OrganizationId],
    [RemainingTerms],
    [TotalTerms],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [entitlementchannel_organization].[Name],
    [lk_entitlementchannel_createdby].[FullName],
    [lk_entitlementchannel_createdby].[YomiFullName],
    [lk_entitlementchannel_modifiedby].[FullName],
    [lk_entitlementchannel_modifiedby].[YomiFullName],
    [entitlement_entitlementchannel_EntitlementId].[OwningBusinessUnit],
    case when [entitlement_entitlementchannel_EntitlementId].OwnerIdType = 8
    then [entitlement_entitlementchannel_EntitlementId].OwnerId
    else null
    end,
    [entitlement_entitlementchannel_EntitlementId].[Name],
    [entitlement_entitlementchannel_EntitlementId].[OwnerIdType],
    [entitlement_entitlementchannel_EntitlementId].[OwnerId],
    [lk_entitlementchannel_modifiedonbehalfby].[FullName],
    [lk_entitlementchannel_modifiedonbehalfby].[YomiFullName],
    [lk_entitlementchannel_createdonbehalfby].[FullName],
    [lk_entitlementchannel_createdonbehalfby].[YomiFullName],
    [TransactionCurrency_entitlementchannel].[CurrencyName],

    -- ownership entries
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [EntitlementChannelBase].[EntitlementChannelId],
    [EntitlementChannelBase].[CreatedOn],
    [EntitlementChannelBase].[CreatedBy],
    [EntitlementChannelBase].[ModifiedOn],
    [EntitlementChannelBase].[ModifiedBy],
    [EntitlementChannelBase].[CreatedOnBehalfBy],
    [EntitlementChannelBase].[ModifiedOnBehalfBy],
    [EntitlementChannelBase].[VersionNumber],
    [EntitlementChannelBase].[ImportSequenceNumber],
    [EntitlementChannelBase].[OverriddenCreatedOn],
    [EntitlementChannelBase].[TimeZoneRuleVersionNumber],
    [EntitlementChannelBase].[UTCConversionTimeZoneCode],
    [EntitlementChannelBase].[Name],
    [EntitlementChannelBase].[Channel],
    [EntitlementChannelBase].[EntitlementId],
    [EntitlementChannelBase].[OrganizationId],
    [EntitlementChannelBase].[RemainingTerms],
    [EntitlementChannelBase].[TotalTerms],
    [EntitlementChannelBase].[ExchangeRate],
    [EntitlementChannelBase].[TransactionCurrencyId]
from [EntitlementChannelBase] 
    left join [EntitlementBase] [entitlement_entitlementchannel_EntitlementId] on ([EntitlementChannelBase].[EntitlementId] = [entitlement_entitlementchannel_EntitlementId].[EntitlementId])
    left join [OrganizationBase] [entitlementchannel_organization] on ([EntitlementChannelBase].[OrganizationId] = [entitlementchannel_organization].[OrganizationId])
    left join [SystemUserBase] [lk_entitlementchannel_createdby] on ([EntitlementChannelBase].[CreatedBy] = [lk_entitlementchannel_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementchannel_createdonbehalfby] on ([EntitlementChannelBase].[CreatedOnBehalfBy] = [lk_entitlementchannel_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementchannel_modifiedby] on ([EntitlementChannelBase].[ModifiedBy] = [lk_entitlementchannel_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementchannel_modifiedonbehalfby] on ([EntitlementChannelBase].[ModifiedOnBehalfBy] = [lk_entitlementchannel_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_entitlementchannel] on ([EntitlementChannelBase].[TransactionCurrencyId] = [TransactionCurrency_entitlementchannel].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([entitlement_entitlementchannel_EntitlementId].OwnerId = XXowner.OwnerId)
