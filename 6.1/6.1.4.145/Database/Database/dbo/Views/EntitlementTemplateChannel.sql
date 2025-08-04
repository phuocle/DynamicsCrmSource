


--
-- base view for EntitlementTemplateChannel
--
create view dbo.[EntitlementTemplateChannel]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],
    [EntitlementTemplateIdName],
    [ModifiedByName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],
    [ModifiedByYomiName],

    -- physical attributes
    [EntitlementTemplateChannelId],
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
    [TotalTerms],
    [OrganizationId],
    [EntitlementTemplateId],
    [TransactionCurrencyId],
    [ExchangeRate]
) with view_metadata as
select
    -- logical attributes
    [lk_entitlementtemplatechannel_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_entitlementtemplatechannel].[CurrencyName],
    [lk_entitlementtemplatechannel_createdonbehalfby].[YomiFullName],
    [lk_entitlementtemplatechannel_createdby].[YomiFullName],
    [entitlementtemplate_entitlementchannel_entitlementtemplateid].[Name],
    [lk_entitlementtemplatechannel_modifiedby].[FullName],
    [lk_entitlementtemplatechannel_createdby].[FullName],
    [lk_entitlementtemplatechannel_modifiedonbehalfby].[FullName],
    [lk_entitlementtemplatechannel_createdonbehalfby].[FullName],
    [entitlementtemplatechannel_organization].[Name],
    [lk_entitlementtemplatechannel_modifiedby].[YomiFullName],

    -- physical attribute
    [EntitlementTemplateChannelBase].[EntitlementTemplateChannelId],
    [EntitlementTemplateChannelBase].[CreatedOn],
    [EntitlementTemplateChannelBase].[CreatedBy],
    [EntitlementTemplateChannelBase].[ModifiedOn],
    [EntitlementTemplateChannelBase].[ModifiedBy],
    [EntitlementTemplateChannelBase].[CreatedOnBehalfBy],
    [EntitlementTemplateChannelBase].[ModifiedOnBehalfBy],
    [EntitlementTemplateChannelBase].[VersionNumber],
    [EntitlementTemplateChannelBase].[ImportSequenceNumber],
    [EntitlementTemplateChannelBase].[OverriddenCreatedOn],
    [EntitlementTemplateChannelBase].[TimeZoneRuleVersionNumber],
    [EntitlementTemplateChannelBase].[UTCConversionTimeZoneCode],
    [EntitlementTemplateChannelBase].[Name],
    [EntitlementTemplateChannelBase].[Channel],
    [EntitlementTemplateChannelBase].[TotalTerms],
    [EntitlementTemplateChannelBase].[OrganizationId],
    [EntitlementTemplateChannelBase].[EntitlementTemplateId],
    [EntitlementTemplateChannelBase].[TransactionCurrencyId],
    [EntitlementTemplateChannelBase].[ExchangeRate]
from [EntitlementTemplateChannelBase] 
    left join [EntitlementTemplateBase] [entitlementtemplate_entitlementchannel_entitlementtemplateid] on ([EntitlementTemplateChannelBase].[EntitlementTemplateId] = [entitlementtemplate_entitlementchannel_entitlementtemplateid].[EntitlementTemplateId])
    left join [OrganizationBase] [entitlementtemplatechannel_organization] with(nolock) on ([EntitlementTemplateChannelBase].[OrganizationId] = [entitlementtemplatechannel_organization].[OrganizationId])
    left join [SystemUserBase] [lk_entitlementtemplatechannel_createdby] with(nolock) on ([EntitlementTemplateChannelBase].[CreatedBy] = [lk_entitlementtemplatechannel_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplatechannel_createdonbehalfby] with(nolock) on ([EntitlementTemplateChannelBase].[CreatedOnBehalfBy] = [lk_entitlementtemplatechannel_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplatechannel_modifiedby] with(nolock) on ([EntitlementTemplateChannelBase].[ModifiedBy] = [lk_entitlementtemplatechannel_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplatechannel_modifiedonbehalfby] with(nolock) on ([EntitlementTemplateChannelBase].[ModifiedOnBehalfBy] = [lk_entitlementtemplatechannel_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_entitlementtemplatechannel] on ([EntitlementTemplateChannelBase].[TransactionCurrencyId] = [TransactionCurrency_entitlementtemplatechannel].[TransactionCurrencyId])
