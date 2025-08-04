


--
-- base view for ContractTemplate
--
create view dbo.[ContractTemplate]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [ContractTemplateId],
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
    [Abbreviation],
    [AllotmentTypeCode],
    [BillingFrequencyCode],
    [ComponentState],
    [ContractServiceLevelCode],
    [ContractTemplateIdUnique],
    [Description],
    [EffectivityCalendar],
    [IsCustomizable],
    [IsManaged],
    [Name],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [UseDiscountAsPercentage],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [lk_contracttemplatebase_createdby].[FullName],
    [lk_contracttemplatebase_createdby].[YomiFullName],
    [organization_contract_templates].[Name],
    [lk_contracttemplatebase_modifiedonbehalfby].[FullName],
    [lk_contracttemplatebase_modifiedonbehalfby].[YomiFullName],
    [lk_contracttemplatebase_modifiedby].[FullName],
    [lk_contracttemplatebase_modifiedby].[YomiFullName],
    [lk_contracttemplatebase_createdonbehalfby].[FullName],
    [lk_contracttemplatebase_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [T1].[ContractTemplateId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OrganizationId],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[Abbreviation],
    [T1].[AllotmentTypeCode],
    [T1].[BillingFrequencyCode],
    [T1].[ComponentState],
    [T1].[ContractServiceLevelCode],
    [T1].[ContractTemplateIdUnique],
    [T1].[Description],
    [T1].[EffectivityCalendar],
    [T1].[IsCustomizable],
    [T1].[IsManaged],
    [T1].[Name],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[UseDiscountAsPercentage],
    [T1].[IntroducedVersion]
from [ContractTemplateBase] [T1]
    left join [SystemUserBase] [lk_contracttemplatebase_createdby] on ([T1].[CreatedBy] = [lk_contracttemplatebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_contracttemplatebase_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_contracttemplatebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_contracttemplatebase_modifiedby] on ([T1].[ModifiedBy] = [lk_contracttemplatebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_contracttemplatebase_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_contracttemplatebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_contract_templates] on ([T1].[OrganizationId] = [organization_contract_templates].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0