


--
-- base view for WebWizard
--
create view dbo.[WebWizard]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [CreatedByName],

    -- physical attributes
    [CreatedOn],
    [CreatedBy],
    [VersionNumber],
    [OrganizationId],
    [WebWizardId],
    [Name],
    [WizardPageHeight],
    [ModifiedBy],
    [ModifiedOn],
    [WizardPageWidth],
    [StartPageSequenceNumber],
    [AccessPrivileges],
    [TitleResourceString],
    [IsStaticPageSequence],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_webwizard_modifiedby].[YomiFullName],
    [lk_webwizard_modifiedonbehalfby].[YomiFullName],
    [lk_webwizard_createdby].[YomiFullName],
    [lk_webwizard_createdonbehalfby].[YomiFullName],
    [lk_webwizard_modifiedonbehalfby].[FullName],
    [organization_webwizard].[Name],
    [lk_webwizard_createdonbehalfby].[FullName],
    [lk_webwizard_modifiedby].[FullName],
    [lk_webwizard_createdby].[FullName],

    -- physical attribute
    [WebWizardBase].[CreatedOn],
    [WebWizardBase].[CreatedBy],
    [WebWizardBase].[VersionNumber],
    [WebWizardBase].[OrganizationId],
    [WebWizardBase].[WebWizardId],
    [WebWizardBase].[Name],
    [WebWizardBase].[WizardPageHeight],
    [WebWizardBase].[ModifiedBy],
    [WebWizardBase].[ModifiedOn],
    [WebWizardBase].[WizardPageWidth],
    [WebWizardBase].[StartPageSequenceNumber],
    [WebWizardBase].[AccessPrivileges],
    [WebWizardBase].[TitleResourceString],
    [WebWizardBase].[IsStaticPageSequence],
    [WebWizardBase].[CreatedOnBehalfBy],
    [WebWizardBase].[ModifiedOnBehalfBy]
from [WebWizardBase] 
    left join [SystemUserBase] [lk_webwizard_createdby] with(nolock) on ([WebWizardBase].[CreatedBy] = [lk_webwizard_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_webwizard_createdonbehalfby] with(nolock) on ([WebWizardBase].[CreatedOnBehalfBy] = [lk_webwizard_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_webwizard_modifiedby] with(nolock) on ([WebWizardBase].[ModifiedBy] = [lk_webwizard_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_webwizard_modifiedonbehalfby] with(nolock) on ([WebWizardBase].[ModifiedOnBehalfBy] = [lk_webwizard_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_webwizard] with(nolock) on ([WebWizardBase].[OrganizationId] = [organization_webwizard].[OrganizationId])
