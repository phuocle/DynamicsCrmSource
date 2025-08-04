


--
-- base view for EntitlementTemplateChannel
--
create view dbo.[EntitlementTemplateChannel]
 (
    -- logical attributes
    [OrganizationIdName],
    [TransactionCurrencyIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [EntitlementTemplateIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],

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
    [EntitlementTemplateId],
    [OrganizationId],
    [TotalTerms],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [entitlementtemplatechannel_organization].[Name],
    [TransactionCurrency_entitlementtemplatechannel].[CurrencyName],
    [lk_entitlementtemplatechannel_modifiedby].[FullName],
    [lk_entitlementtemplatechannel_modifiedby].[YomiFullName],
    [entitlementtemplate_entitlementchannel_entitlementtemplateid].[Name],
    [lk_entitlementtemplatechannel_createdonbehalfby].[FullName],
    [lk_entitlementtemplatechannel_createdonbehalfby].[YomiFullName],
    [lk_entitlementtemplatechannel_modifiedonbehalfby].[FullName],
    [lk_entitlementtemplatechannel_modifiedonbehalfby].[YomiFullName],
    [lk_entitlementtemplatechannel_createdby].[FullName],
    [lk_entitlementtemplatechannel_createdby].[YomiFullName],

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
    [EntitlementTemplateChannelBase].[EntitlementTemplateId],
    [EntitlementTemplateChannelBase].[OrganizationId],
    [EntitlementTemplateChannelBase].[TotalTerms],
    [EntitlementTemplateChannelBase].[ExchangeRate],
    [EntitlementTemplateChannelBase].[TransactionCurrencyId]
from [EntitlementTemplateChannelBase] 
    left join [EntitlementTemplateBase] [entitlementtemplate_entitlementchannel_entitlementtemplateid] on ([EntitlementTemplateChannelBase].[EntitlementTemplateId] = [entitlementtemplate_entitlementchannel_entitlementtemplateid].[EntitlementTemplateId])
    left join [OrganizationBase] [entitlementtemplatechannel_organization] on ([EntitlementTemplateChannelBase].[OrganizationId] = [entitlementtemplatechannel_organization].[OrganizationId])
    left join [SystemUserBase] [lk_entitlementtemplatechannel_createdby] on ([EntitlementTemplateChannelBase].[CreatedBy] = [lk_entitlementtemplatechannel_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplatechannel_createdonbehalfby] on ([EntitlementTemplateChannelBase].[CreatedOnBehalfBy] = [lk_entitlementtemplatechannel_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplatechannel_modifiedby] on ([EntitlementTemplateChannelBase].[ModifiedBy] = [lk_entitlementtemplatechannel_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplatechannel_modifiedonbehalfby] on ([EntitlementTemplateChannelBase].[ModifiedOnBehalfBy] = [lk_entitlementtemplatechannel_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_entitlementtemplatechannel] on ([EntitlementTemplateChannelBase].[TransactionCurrencyId] = [TransactionCurrency_entitlementtemplatechannel].[TransactionCurrencyId])
