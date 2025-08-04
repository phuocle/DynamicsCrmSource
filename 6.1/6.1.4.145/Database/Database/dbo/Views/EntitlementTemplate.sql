


--
-- base view for EntitlementTemplate
--
create view dbo.[EntitlementTemplate]
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
    [SLAIdName],

    -- physical attributes
    [EntitlementTemplateId],
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
    [AllocationTypeCode],
    [RestrictCaseCreation],
    [TotalTerms],
    [StartDate],
    [EndDate],
    [SLAId],
    [OrganizationId],
    [KbAccessLevel],
    [DecreaseRemainingOn],
    [TransactionCurrencyId],
    [ExchangeRate],
    [Description]
) with view_metadata as
select
    -- logical attributes
    [lk_entitlementtemplate_createdby].[FullName],
    [lk_entitlementtemplate_createdby].[YomiFullName],
    [lk_entitlementtemplate_createdonbehalfby].[FullName],
    [lk_entitlementtemplate_createdonbehalfby].[YomiFullName],
    [lk_entitlementtemplate_modifiedby].[FullName],
    [lk_entitlementtemplate_modifiedby].[YomiFullName],
    [lk_entitlementtemplate_modifiedonbehalfby].[FullName],
    [lk_entitlementtemplate_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_entitlementtemplate].[CurrencyName],
    [entitlementtemplate_organization].[Name],
    [sla_entitlementtemplate].[Name],

    -- physical attribute
    [EntitlementTemplateBase].[EntitlementTemplateId],
    [EntitlementTemplateBase].[CreatedOn],
    [EntitlementTemplateBase].[CreatedBy],
    [EntitlementTemplateBase].[ModifiedOn],
    [EntitlementTemplateBase].[ModifiedBy],
    [EntitlementTemplateBase].[CreatedOnBehalfBy],
    [EntitlementTemplateBase].[ModifiedOnBehalfBy],
    [EntitlementTemplateBase].[VersionNumber],
    [EntitlementTemplateBase].[ImportSequenceNumber],
    [EntitlementTemplateBase].[OverriddenCreatedOn],
    [EntitlementTemplateBase].[TimeZoneRuleVersionNumber],
    [EntitlementTemplateBase].[UTCConversionTimeZoneCode],
    [EntitlementTemplateBase].[Name],
    [EntitlementTemplateBase].[AllocationTypeCode],
    [EntitlementTemplateBase].[RestrictCaseCreation],
    [EntitlementTemplateBase].[TotalTerms],
    [EntitlementTemplateBase].[StartDate],
    [EntitlementTemplateBase].[EndDate],
    [EntitlementTemplateBase].[SLAId],
    [EntitlementTemplateBase].[OrganizationId],
    [EntitlementTemplateBase].[KbAccessLevel],
    [EntitlementTemplateBase].[DecreaseRemainingOn],
    [EntitlementTemplateBase].[TransactionCurrencyId],
    [EntitlementTemplateBase].[ExchangeRate],
    [EntitlementTemplateBase].[Description]
from [EntitlementTemplateBase] 
    left join [OrganizationBase] [entitlementtemplate_organization] with(nolock) on ([EntitlementTemplateBase].[OrganizationId] = [entitlementtemplate_organization].[OrganizationId])
    left join [SystemUserBase] [lk_entitlementtemplate_createdby] with(nolock) on ([EntitlementTemplateBase].[CreatedBy] = [lk_entitlementtemplate_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplate_createdonbehalfby] with(nolock) on ([EntitlementTemplateBase].[CreatedOnBehalfBy] = [lk_entitlementtemplate_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplate_modifiedby] with(nolock) on ([EntitlementTemplateBase].[ModifiedBy] = [lk_entitlementtemplate_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplate_modifiedonbehalfby] with(nolock) on ([EntitlementTemplateBase].[ModifiedOnBehalfBy] = [lk_entitlementtemplate_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [sla_entitlementtemplate] on ([EntitlementTemplateBase].[SLAId] = [sla_entitlementtemplate].[SLAId] and [sla_entitlementtemplate].OverwriteTime = 0 and [sla_entitlementtemplate].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_entitlementtemplate] on ([EntitlementTemplateBase].[TransactionCurrencyId] = [TransactionCurrency_entitlementtemplate].[TransactionCurrencyId])
