


--
-- base view for WizardPage
--
create view dbo.[WizardPage]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],

    -- physical attributes
    [PageSequenceNumber],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [CreatedBy],
    [OrganizationId],
    [PageUrl],
    [WebWizardId],
    [WizardPageId],
    [PageDataToPost],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_wizardpage_createdby].[FullName],
    [lk_wizardpage_modifiedonbehalfby].[YomiFullName],
    [lk_wizardpage_createdonbehalfby].[FullName],
    [lk_wizardpage_createdonbehalfby].[YomiFullName],
    [lk_wizardpage_createdby].[YomiFullName],
    [lk_wizardpage_modifiedonbehalfby].[FullName],
    [lk_wizardpage_modifiedby].[FullName],
    [lk_wizardpage_modifiedby].[YomiFullName],
    [organization_wizardpage].[Name],

    -- physical attribute
    [WizardPageBase].[PageSequenceNumber],
    [WizardPageBase].[ModifiedBy],
    [WizardPageBase].[ModifiedOn],
    [WizardPageBase].[VersionNumber],
    [WizardPageBase].[CreatedBy],
    [WizardPageBase].[OrganizationId],
    [WizardPageBase].[PageUrl],
    [WizardPageBase].[WebWizardId],
    [WizardPageBase].[WizardPageId],
    [WizardPageBase].[PageDataToPost],
    [WizardPageBase].[CreatedOn],
    [WizardPageBase].[CreatedOnBehalfBy],
    [WizardPageBase].[ModifiedOnBehalfBy]
from [WizardPageBase] 
    left join [SystemUserBase] [lk_wizardpage_createdby] with(nolock) on ([WizardPageBase].[CreatedBy] = [lk_wizardpage_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_wizardpage_createdonbehalfby] with(nolock) on ([WizardPageBase].[CreatedOnBehalfBy] = [lk_wizardpage_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_wizardpage_modifiedby] with(nolock) on ([WizardPageBase].[ModifiedBy] = [lk_wizardpage_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_wizardpage_modifiedonbehalfby] with(nolock) on ([WizardPageBase].[ModifiedOnBehalfBy] = [lk_wizardpage_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_wizardpage] with(nolock) on ([WizardPageBase].[OrganizationId] = [organization_wizardpage].[OrganizationId])
