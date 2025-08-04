


--
-- base view for EntitlementChannel
--
create view dbo.[EntitlementChannel]
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
    [TransactionCurrencyIdName],
    [OrganizationIdName],
    [OwningBusinessUnit],
    [OwningUser],
    [OwnerIdType],
    [EntitlementIdName],
    [OwnerId],

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
    [RemainingTerms],
    [TotalTerms],
    [EntitlementId],
    [OrganizationId],
    [TransactionCurrencyId],
    [ExchangeRate]
) with view_metadata as
select
    -- logical attributes
    [lk_entitlementchannel_createdby].[FullName],
    [lk_entitlementchannel_createdby].[YomiFullName],
    [lk_entitlementchannel_createdonbehalfby].[FullName],
    [lk_entitlementchannel_createdonbehalfby].[YomiFullName],
    [lk_entitlementchannel_modifiedby].[FullName],
    [lk_entitlementchannel_modifiedby].[YomiFullName],
    [lk_entitlementchannel_modifiedonbehalfby].[FullName],
    [lk_entitlementchannel_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_entitlementchannel].[CurrencyName],
    [entitlementchannel_organization].[Name],
    [entitlement_entitlementchannel_EntitlementId].[OwningBusinessUnit],
    case when [entitlement_entitlementchannel_EntitlementId].OwnerIdType = 8
    then [entitlement_entitlementchannel_EntitlementId].OwnerId
    else null
    end,
    [entitlement_entitlementchannel_EntitlementId].[OwnerIdType],
    [entitlement_entitlementchannel_EntitlementId].[Name],
    [entitlement_entitlementchannel_EntitlementId].[OwnerId],

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
    [EntitlementChannelBase].[RemainingTerms],
    [EntitlementChannelBase].[TotalTerms],
    [EntitlementChannelBase].[EntitlementId],
    [EntitlementChannelBase].[OrganizationId],
    [EntitlementChannelBase].[TransactionCurrencyId],
    [EntitlementChannelBase].[ExchangeRate]
from [EntitlementChannelBase] 
    left join [EntitlementBase] [entitlement_entitlementchannel_EntitlementId] on ([EntitlementChannelBase].[EntitlementId] = [entitlement_entitlementchannel_EntitlementId].[EntitlementId])
    left join [OrganizationBase] [entitlementchannel_organization] with(nolock) on ([EntitlementChannelBase].[OrganizationId] = [entitlementchannel_organization].[OrganizationId])
    left join [SystemUserBase] [lk_entitlementchannel_createdby] with(nolock) on ([EntitlementChannelBase].[CreatedBy] = [lk_entitlementchannel_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementchannel_createdonbehalfby] with(nolock) on ([EntitlementChannelBase].[CreatedOnBehalfBy] = [lk_entitlementchannel_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementchannel_modifiedby] with(nolock) on ([EntitlementChannelBase].[ModifiedBy] = [lk_entitlementchannel_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementchannel_modifiedonbehalfby] with(nolock) on ([EntitlementChannelBase].[ModifiedOnBehalfBy] = [lk_entitlementchannel_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_entitlementchannel] on ([EntitlementChannelBase].[TransactionCurrencyId] = [TransactionCurrency_entitlementchannel].[TransactionCurrencyId])
