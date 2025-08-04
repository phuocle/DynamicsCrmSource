


--
-- logical view for WebWizardLogical
--
create view dbo.[WebWizardLogical]
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
    [ModifiedOnBehalfBy],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [WebWizardIdUnique]
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
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[VersionNumber],
    [T1].[OrganizationId],
    [T1].[WebWizardId],
    [T1].[Name],
    [T1].[WizardPageHeight],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[WizardPageWidth],
    [T1].[StartPageSequenceNumber],
    [T1].[AccessPrivileges],
    [T1].[TitleResourceString],
    [T1].[IsStaticPageSequence],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[WebWizardIdUnique]
from [WebWizardBase] [T1]
    left join [SystemUserBase] [lk_webwizard_createdby] on ([T1].[CreatedBy] = [lk_webwizard_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_webwizard_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_webwizard_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_webwizard_modifiedby] on ([T1].[ModifiedBy] = [lk_webwizard_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_webwizard_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_webwizard_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_webwizard] on ([T1].[OrganizationId] = [organization_webwizard].[OrganizationId])
where T1.OverwriteTime = 0