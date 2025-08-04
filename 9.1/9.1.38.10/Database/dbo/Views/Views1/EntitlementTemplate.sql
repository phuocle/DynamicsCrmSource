


--
-- base view for EntitlementTemplate
--
create view dbo.[EntitlementTemplate]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [SLAIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [EntitlementTemplateId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [AllocationTypeCode],
    [DecreaseRemainingOn],
    [EndDate],
    [KbAccessLevel],
    [RestrictCaseCreation],
    [SLAId],
    [StartDate],
    [TotalTerms],
    [Description],
    [ExchangeRate],
    [TransactionCurrencyId],
    [entitytype]
) with view_metadata as
select
    -- logical attributes
    [TransactionCurrency_entitlementtemplate].[CurrencyName],
    [lk_entitlementtemplate_createdonbehalfby].[FullName],
    [lk_entitlementtemplate_createdonbehalfby].[YomiFullName],
    [entitlementtemplate_organization].[Name],
    [lk_entitlementtemplate_createdby].[FullName],
    [lk_entitlementtemplate_createdby].[YomiFullName],
    [sla_entitlementtemplate].[Name],
    [lk_entitlementtemplate_modifiedby].[FullName],
    [lk_entitlementtemplate_modifiedby].[YomiFullName],
    [lk_entitlementtemplate_modifiedonbehalfby].[FullName],
    [lk_entitlementtemplate_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [EntitlementTemplateBase].[EntitlementTemplateId],
    [EntitlementTemplateBase].[CreatedOn],
    [EntitlementTemplateBase].[CreatedBy],
    [EntitlementTemplateBase].[ModifiedOn],
    [EntitlementTemplateBase].[ModifiedBy],
    [EntitlementTemplateBase].[CreatedOnBehalfBy],
    [EntitlementTemplateBase].[ModifiedOnBehalfBy],
    [EntitlementTemplateBase].[OrganizationId],
    [EntitlementTemplateBase].[VersionNumber],
    [EntitlementTemplateBase].[ImportSequenceNumber],
    [EntitlementTemplateBase].[OverriddenCreatedOn],
    [EntitlementTemplateBase].[TimeZoneRuleVersionNumber],
    [EntitlementTemplateBase].[UTCConversionTimeZoneCode],
    [EntitlementTemplateBase].[Name],
    [EntitlementTemplateBase].[AllocationTypeCode],
    [EntitlementTemplateBase].[DecreaseRemainingOn],
    [EntitlementTemplateBase].[EndDate],
    [EntitlementTemplateBase].[KbAccessLevel],
    [EntitlementTemplateBase].[RestrictCaseCreation],
    [EntitlementTemplateBase].[SLAId],
    [EntitlementTemplateBase].[StartDate],
    [EntitlementTemplateBase].[TotalTerms],
    [EntitlementTemplateBase].[Description],
    [EntitlementTemplateBase].[ExchangeRate],
    [EntitlementTemplateBase].[TransactionCurrencyId],
    [EntitlementTemplateBase].[entitytype]
from [EntitlementTemplateBase] 
    left join [OrganizationBase] [entitlementtemplate_organization] on ([EntitlementTemplateBase].[OrganizationId] = [entitlementtemplate_organization].[OrganizationId])
    left join [SystemUserBase] [lk_entitlementtemplate_createdby] on ([EntitlementTemplateBase].[CreatedBy] = [lk_entitlementtemplate_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplate_createdonbehalfby] on ([EntitlementTemplateBase].[CreatedOnBehalfBy] = [lk_entitlementtemplate_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplate_modifiedby] on ([EntitlementTemplateBase].[ModifiedBy] = [lk_entitlementtemplate_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlementtemplate_modifiedonbehalfby] on ([EntitlementTemplateBase].[ModifiedOnBehalfBy] = [lk_entitlementtemplate_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [sla_entitlementtemplate] on ([EntitlementTemplateBase].[SLAId] = [sla_entitlementtemplate].[SLAId] and [sla_entitlementtemplate].OverwriteTime = 0 and [sla_entitlementtemplate].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_entitlementtemplate] on ([EntitlementTemplateBase].[TransactionCurrencyId] = [TransactionCurrency_entitlementtemplate].[TransactionCurrencyId])
