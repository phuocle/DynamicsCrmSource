


--
-- base view for CustomControl
--
create view dbo.[CustomControl]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedByYomiName],

    -- physical attributes
    [CustomControlId],
    [Name],
    [Manifest],
    [Version],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [CustomControlIdUnique],
    [OrganizationId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [CompatibleDataTypes],
    [VersionNumber],
    [ClientJson],
    [AuthoringManifest]
) with view_metadata as
select
    -- logical attributes
    [lk_customcontrol_createdonbehalfby].[YomiFullName],
    [lk_customcontrol_modifiedonbehalfby].[YomiFullName],
    [customcontrol_organization].[Name],
    [lk_customcontrol_modifiedby].[FullName],
    [lk_customcontrol_createdonbehalfby].[FullName],
    [lk_customcontrol_modifiedonbehalfby].[FullName],
    [lk_customcontrol_createdby].[YomiFullName],
    [lk_customcontrol_createdby].[FullName],
    [lk_customcontrol_modifiedby].[YomiFullName],

    -- physical attribute
    [T1].[CustomControlId],
    [T1].[Name],
    [T1].[Manifest],
    [T1].[Version],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[CustomControlIdUnique],
    [T1].[OrganizationId],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[CompatibleDataTypes],
    [T1].[VersionNumber],
    [T1].[ClientJson],
    [T1].[AuthoringManifest]
from [CustomControlBase] [T1]
    left join [OrganizationBase] [customcontrol_organization] on ([T1].[OrganizationId] = [customcontrol_organization].[OrganizationId])
    left join [SystemUserBase] [lk_customcontrol_createdby] on ([T1].[CreatedBy] = [lk_customcontrol_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontrol_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_customcontrol_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontrol_modifiedby] on ([T1].[ModifiedBy] = [lk_customcontrol_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontrol_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_customcontrol_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0