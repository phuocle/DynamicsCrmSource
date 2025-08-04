SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for SyncAttributeMappingProfile
--
create view [dbo].[SyncAttributeMappingProfile]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedByName],
    [OrganizationIdName],
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

    -- physical attributes
    [ComponentState],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [Description],
    [SyncAttributeMappingProfileId],
    [SyncAttributeMappingProfileIdUnique],
    [IsManaged],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Name],
    [OrganizationId],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [VersionNumber]
) with view_metadata as
select
    -- logical attributes
    [lk_syncattributemappingprofile_modifiedby].[YomiFullName],
    [lk_syncattributemappingprofile_modifiedby].[FullName],
    [lk_syncattributemappingprofile_organizationid].[Name],
    [lk_syncattributemappingprofile_createdby].[YomiFullName],
    [lk_syncattributemappingprofile_createdby].[FullName],
    [lk_syncattributemappingprofile_createdonbehalfby].[FullName],
    [lk_syncattributemappingprofile_createdonbehalfby].[YomiFullName],
    [lk_syncattributemappingprofile_modifiedonbehalfby].[YomiFullName],
    [lk_syncattributemappingprofile_modifiedonbehalfby].[FullName],

    -- physical attribute
    [SyncAttributeMappingProfileBase].[ComponentState],
    [SyncAttributeMappingProfileBase].[CreatedBy],
    [SyncAttributeMappingProfileBase].[CreatedOn],
    [SyncAttributeMappingProfileBase].[CreatedOnBehalfBy],
    [SyncAttributeMappingProfileBase].[Description],
    [SyncAttributeMappingProfileBase].[SyncAttributeMappingProfileId],
    [SyncAttributeMappingProfileBase].[SyncAttributeMappingProfileIdUnique],
    [SyncAttributeMappingProfileBase].[IsManaged],
    [SyncAttributeMappingProfileBase].[ModifiedBy],
    [SyncAttributeMappingProfileBase].[ModifiedOn],
    [SyncAttributeMappingProfileBase].[ModifiedOnBehalfBy],
    [SyncAttributeMappingProfileBase].[Name],
    [SyncAttributeMappingProfileBase].[OrganizationId],
    [SyncAttributeMappingProfileBase].[OverwriteTime],
    [SyncAttributeMappingProfileBase].[SolutionId],
    [SyncAttributeMappingProfileBase].[SupportingSolutionId],
    [SyncAttributeMappingProfileBase].[VersionNumber]
from [SyncAttributeMappingProfileBase] 
    left join [SystemUserBase] [lk_syncattributemappingprofile_createdby] with(nolock) on ([SyncAttributeMappingProfileBase].[CreatedBy] = [lk_syncattributemappingprofile_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_syncattributemappingprofile_createdonbehalfby] with(nolock) on ([SyncAttributeMappingProfileBase].[CreatedOnBehalfBy] = [lk_syncattributemappingprofile_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_syncattributemappingprofile_modifiedby] with(nolock) on ([SyncAttributeMappingProfileBase].[ModifiedBy] = [lk_syncattributemappingprofile_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_syncattributemappingprofile_modifiedonbehalfby] with(nolock) on ([SyncAttributeMappingProfileBase].[ModifiedOnBehalfBy] = [lk_syncattributemappingprofile_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [lk_syncattributemappingprofile_organizationid] with(nolock) on ([SyncAttributeMappingProfileBase].[OrganizationId] = [lk_syncattributemappingprofile_organizationid].[OrganizationId])
GO
