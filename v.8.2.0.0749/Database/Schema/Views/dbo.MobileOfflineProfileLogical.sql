SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for MobileOfflineProfileLogical
--
create view [dbo].[MobileOfflineProfileLogical]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [OrganizationIdName],

    -- physical attributes
    [MobileOfflineProfileId],
    [Name],
    [Description],
    [VersionNumber],
    [SolutionId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [ProcessId],
    [StageId],
    [PublishedOn],
    [TraversedPath],
    [SupportingSolutionId],
    [MobileOfflineProfileIdUnique],
    [IsManaged],
    [IntroducedVersion],
    [ComponentState],
    [OverwriteTime],
    [IsValidated],
    [SelectedEntityMetadata]
) with view_metadata as
select
    -- logical attributes
    [lk_MobileOfflineProfile_modifiedby].[FullName],
    [lk_MobileOfflineProfile_modifiedby].[YomiFullName],
    [lk_MobileOfflineProfile_createdonbehalfby].[YomiFullName],
    [lk_MobileOfflineProfile_createdonbehalfby].[FullName],
    [lk_MobileOfflineProfile_createdby].[FullName],
    [lk_MobileOfflineProfile_createdby].[YomiFullName],
    [lk_MobileOfflineProfile_modifiedonbehalfby].[YomiFullName],
    [lk_MobileOfflineProfile_modifiedonbehalfby].[FullName],
    [MobileOfflineProfile_organization].[Name],

    -- physical attribute
    [T1].[MobileOfflineProfileId],
    [T1].[Name],
    [T1].[Description],
    [T1].[VersionNumber],
    [T1].[SolutionId],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OrganizationId],
    [T1].[ProcessId],
    [T1].[StageId],
    [T1].[PublishedOn],
    [T1].[TraversedPath],
    [T1].[SupportingSolutionId],
    [T1].[MobileOfflineProfileIdUnique],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsValidated],
    [T1].[SelectedEntityMetadata]
from [MobileOfflineProfileBase] [T1]
    left join [SystemUserBase] [lk_MobileOfflineProfile_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_MobileOfflineProfile_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_MobileOfflineProfile_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_MobileOfflineProfile_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_MobileOfflineProfile_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_MobileOfflineProfile_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_MobileOfflineProfile_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_MobileOfflineProfile_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [MobileOfflineProfile_organization] with(nolock) on ([T1].[OrganizationId] = [MobileOfflineProfile_organization].[OrganizationId])
where T1.OverwriteTime = 0
GO
