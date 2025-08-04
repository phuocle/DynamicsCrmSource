


--
-- base view for ApplicationFile
--
create view dbo.[ApplicationFile]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [OrganizationIdName],

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
    [lk_applicationfile_modifiedonbehalfby].[FullName],
    [lk_applicationfile_modifiedonbehalfby].[YomiFullName],
    [lk_applicationfile_createdonbehalfby].[YomiFullName],
    [lk_applicationfile_createdonbehalfby].[FullName],
    [lk_applicationfile_modifiedby].[FullName],
    [lk_applicationfile_modifiedby].[YomiFullName],
    [lk_applicationfile_createdby].[YomiFullName],
    [lk_applicationfile_createdby].[FullName],
    [organization_applicationfile].[Name],

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
    left join [SystemUserBase] [lk_applicationfile_createdby]  on ([ApplicationFileBase].[CreatedBy] = [lk_applicationfile_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_applicationfile_createdonbehalfby]  on ([ApplicationFileBase].[CreatedOnBehalfBy] = [lk_applicationfile_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_applicationfile_modifiedby]  on ([ApplicationFileBase].[ModifiedBy] = [lk_applicationfile_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_applicationfile_modifiedonbehalfby]  on ([ApplicationFileBase].[ModifiedOnBehalfBy] = [lk_applicationfile_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_applicationfile]  on ([ApplicationFileBase].[OrganizationId] = [organization_applicationfile].[OrganizationId])
