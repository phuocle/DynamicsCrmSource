


--
-- base view for WizardAccessPrivilege
--
create view dbo.[WizardAccessPrivilege]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],

    -- physical attributes
    [ModifiedBy],
    [PrivilegeName],
    [OrganizationId],
    [WebWizardId],
    [ModifiedOn],
    [EntityName],
    [CreatedOn],
    [CreatedBy],
    [WizardAccessPrivilegeId],
    [VersionNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_wizardaccessprivilege_createdonbehalfby].[YomiFullName],
    [lk_wizardaccessprivilege_modifiedonbehalfby].[FullName],
    [lk_wizardaccessprivilege_modifiedonbehalfby].[YomiFullName],
    [lk_wizardaccessprivilege_createdonbehalfby].[FullName],
    [organization_wizardaccessprivilege].[Name],

    -- physical attribute
    [WizardAccessPrivilegeBase].[ModifiedBy],
    [WizardAccessPrivilegeBase].[PrivilegeName],
    [WizardAccessPrivilegeBase].[OrganizationId],
    [WizardAccessPrivilegeBase].[WebWizardId],
    [WizardAccessPrivilegeBase].[ModifiedOn],
    [WizardAccessPrivilegeBase].[EntityName],
    [WizardAccessPrivilegeBase].[CreatedOn],
    [WizardAccessPrivilegeBase].[CreatedBy],
    [WizardAccessPrivilegeBase].[WizardAccessPrivilegeId],
    [WizardAccessPrivilegeBase].[VersionNumber],
    [WizardAccessPrivilegeBase].[CreatedOnBehalfBy],
    [WizardAccessPrivilegeBase].[ModifiedOnBehalfBy]
from [WizardAccessPrivilegeBase] 
    left join [SystemUserBase] [lk_wizardaccessprivilege_createdonbehalfby] with(nolock) on ([WizardAccessPrivilegeBase].[CreatedOnBehalfBy] = [lk_wizardaccessprivilege_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_wizardaccessprivilege_modifiedonbehalfby] with(nolock) on ([WizardAccessPrivilegeBase].[ModifiedOnBehalfBy] = [lk_wizardaccessprivilege_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_wizardaccessprivilege] with(nolock) on ([WizardAccessPrivilegeBase].[OrganizationId] = [organization_wizardaccessprivilege].[OrganizationId])
