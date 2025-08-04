


--
-- base view for ApplicationFile
--
create view dbo.[ApplicationFile]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [OrganizationIdName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [CreatedBy],
    [ModifiedBy],
    [Body],
    [ModifiedOn],
    [CreatedOn],
    [OrganizationId],
    [FileId],
    [Name],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber]
) with view_metadata as
select
    -- logical attributes
    [lk_applicationfile_createdonbehalfby].[YomiFullName],
    [lk_applicationfile_modifiedonbehalfby].[FullName],
    [lk_applicationfile_createdby].[YomiFullName],
    [lk_applicationfile_modifiedby].[FullName],
    [lk_applicationfile_createdby].[FullName],
    [organization_applicationfile].[Name],
    [lk_applicationfile_modifiedby].[YomiFullName],
    [lk_applicationfile_createdonbehalfby].[FullName],
    [lk_applicationfile_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [ApplicationFileBase].[CreatedBy],
    [ApplicationFileBase].[ModifiedBy],
    [ApplicationFileBase].[Body],
    [ApplicationFileBase].[ModifiedOn],
    [ApplicationFileBase].[CreatedOn],
    [ApplicationFileBase].[OrganizationId],
    [ApplicationFileBase].[FileId],
    [ApplicationFileBase].[Name],
    [ApplicationFileBase].[CreatedOnBehalfBy],
    [ApplicationFileBase].[ModifiedOnBehalfBy],
    [ApplicationFileBase].[VersionNumber]
from [ApplicationFileBase] 
    left join [SystemUserBase] [lk_applicationfile_createdby] with(nolock) on ([ApplicationFileBase].[CreatedBy] = [lk_applicationfile_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_applicationfile_createdonbehalfby] with(nolock) on ([ApplicationFileBase].[CreatedOnBehalfBy] = [lk_applicationfile_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_applicationfile_modifiedby] with(nolock) on ([ApplicationFileBase].[ModifiedBy] = [lk_applicationfile_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_applicationfile_modifiedonbehalfby] with(nolock) on ([ApplicationFileBase].[ModifiedOnBehalfBy] = [lk_applicationfile_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_applicationfile] with(nolock) on ([ApplicationFileBase].[OrganizationId] = [organization_applicationfile].[OrganizationId])
