


--
-- base view for ContractTemplate
--
create view dbo.[ContractTemplate]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

    -- physical attributes
    [ContractTemplateId],
    [Name],
    [OrganizationId],
    [Description],
    [Abbreviation],
    [ContractServiceLevelCode],
    [BillingFrequencyCode],
    [AllotmentTypeCode],
    [UseDiscountAsPercentage],
    [EffectivityCalendar],
    [CreatedOn],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [ComponentState],
    [SolutionId],
    [SupportingSolutionId],
    [ContractTemplateIdUnique],
    [OverwriteTime],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsManaged],
    [IsCustomizable],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [lk_contracttemplatebase_createdonbehalfby].[YomiFullName],
    [lk_contracttemplatebase_modifiedby].[FullName],
    [lk_contracttemplatebase_createdby].[YomiFullName],
    [organization_contract_templates].[Name],
    [lk_contracttemplatebase_createdby].[FullName],
    [lk_contracttemplatebase_createdonbehalfby].[FullName],
    [lk_contracttemplatebase_modifiedby].[YomiFullName],
    [lk_contracttemplatebase_modifiedonbehalfby].[YomiFullName],
    [lk_contracttemplatebase_modifiedonbehalfby].[FullName],

    -- physical attribute
    [T1].[ContractTemplateId],
    [T1].[Name],
    [T1].[OrganizationId],
    [T1].[Description],
    [T1].[Abbreviation],
    [T1].[ContractServiceLevelCode],
    [T1].[BillingFrequencyCode],
    [T1].[AllotmentTypeCode],
    [T1].[UseDiscountAsPercentage],
    [T1].[EffectivityCalendar],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[VersionNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[ImportSequenceNumber],
    [T1].[ComponentState],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ContractTemplateIdUnique],
    [T1].[OverwriteTime],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[IntroducedVersion]
from [ContractTemplateBase] [T1]
    left join [SystemUserBase] [lk_contracttemplatebase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_contracttemplatebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_contracttemplatebase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_contracttemplatebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_contracttemplatebase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_contracttemplatebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_contracttemplatebase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_contracttemplatebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_contract_templates] with(nolock) on ([T1].[OrganizationId] = [organization_contract_templates].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0