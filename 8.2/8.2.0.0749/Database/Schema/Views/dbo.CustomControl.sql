SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for CustomControl
--
create view [dbo].[CustomControl]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedByName],

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
    [VersionNumber]
) with view_metadata as
select
    -- logical attributes
    [lk_customcontrol_modifiedby].[FullName],
    [lk_customcontrol_modifiedby].[YomiFullName],
    [lk_customcontrol_createdonbehalfby].[YomiFullName],
    [lk_customcontrol_createdonbehalfby].[FullName],
    [customcontrol_organization].[Name],
    [lk_customcontrol_modifiedonbehalfby].[YomiFullName],
    [lk_customcontrol_modifiedonbehalfby].[FullName],
    [lk_customcontrol_createdby].[YomiFullName],
    [lk_customcontrol_createdby].[FullName],

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
    [T1].[VersionNumber]
from [CustomControlBase] [T1]
    left join [OrganizationBase] [customcontrol_organization] with(nolock) on ([T1].[OrganizationId] = [customcontrol_organization].[OrganizationId])
    left join [SystemUserBase] [lk_customcontrol_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_customcontrol_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontrol_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_customcontrol_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontrol_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_customcontrol_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontrol_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_customcontrol_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
