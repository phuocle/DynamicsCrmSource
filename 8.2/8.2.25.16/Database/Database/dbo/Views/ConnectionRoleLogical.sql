


--
-- logical view for ConnectionRoleLogical
--
create view dbo.[ConnectionRoleLogical]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- physical attributes
    [ConnectionRoleId],
    [ModifiedBy],
    [ModifiedOn],
    [Name],
    [ImportSequenceNumber],
    [StateCode],
    [StatusCode],
    [CreatedBy],
    [Category],
    [OrganizationId],
    [Description],
    [CreatedOn],
    [VersionNumber],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [ConnectionRoleIdUnique],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [IsManaged],
    [IsCustomizable],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [createdby_connection_role].[YomiFullName],
    [createdby_connection_role].[FullName],
    [lk_connectionrolebase_modifiedonbehalfby].[YomiFullName],
    [lk_connectionrolebase_modifiedonbehalfby].[FullName],
    [lk_connectionrolebase_createdonbehalfby].[YomiFullName],
    [lk_connectionrolebase_createdonbehalfby].[FullName],
    [organization_connection_roles].[Name],
    [modifiedby_connection_role].[FullName],
    [modifiedby_connection_role].[YomiFullName],

    -- physical attribute
    [T1].[ConnectionRoleId],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[Name],
    [T1].[ImportSequenceNumber],
    [T1].[StateCode],
    [T1].[StatusCode],
    [T1].[CreatedBy],
    [T1].[Category],
    [T1].[OrganizationId],
    [T1].[Description],
    [T1].[CreatedOn],
    [T1].[VersionNumber],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[ConnectionRoleIdUnique],
    [T1].[ModifiedOnBehalfBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[IntroducedVersion]
from [ConnectionRoleBase] [T1]
    left join [SystemUserBase] [createdby_connection_role] with(nolock) on ([T1].[CreatedBy] = [createdby_connection_role].[SystemUserId])
    left join [SystemUserBase] [lk_connectionrolebase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_connectionrolebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_connectionrolebase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_connectionrolebase_modifiedonbehalfby].[SystemUserId])
    left join [SystemUserBase] [modifiedby_connection_role] with(nolock) on ([T1].[ModifiedBy] = [modifiedby_connection_role].[SystemUserId])
    left join [OrganizationBase] [organization_connection_roles] with(nolock) on ([T1].[OrganizationId] = [organization_connection_roles].[OrganizationId])
where T1.OverwriteTime = 0