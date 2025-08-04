


--
-- base view for RelationshipRole
--
create view dbo.[RelationshipRole]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- physical attributes
    [Description],
    [Name],
    [StatusCode],
    [RelationshipRoleId],
    [CreatedOn],
    [OrganizationId],
    [ModifiedBy],
    [VersionNumber],
    [CreatedBy],
    [ModifiedOn],
    [StateCode],
    [ImportSequenceNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [createdby_relationship_role].[YomiFullName],
    [createdonbehalfby_relationship_role].[YomiFullName],
    [organization_relationship_roles].[Name],
    [createdby_relationship_role].[FullName],
    [modifiedonbehalfby_relationship_role].[YomiFullName],
    [modifiedonbehalfby_relationship_role].[FullName],
    [createdonbehalfby_relationship_role].[FullName],
    [modifiedby_relationship_role].[FullName],
    [modifiedby_relationship_role].[YomiFullName],

    -- physical attribute
    [RelationshipRoleBase].[Description],
    [RelationshipRoleBase].[Name],
    [RelationshipRoleBase].[StatusCode],
    [RelationshipRoleBase].[RelationshipRoleId],
    [RelationshipRoleBase].[CreatedOn],
    [RelationshipRoleBase].[OrganizationId],
    [RelationshipRoleBase].[ModifiedBy],
    [RelationshipRoleBase].[VersionNumber],
    [RelationshipRoleBase].[CreatedBy],
    [RelationshipRoleBase].[ModifiedOn],
    [RelationshipRoleBase].[StateCode],
    [RelationshipRoleBase].[ImportSequenceNumber],
    [RelationshipRoleBase].[CreatedOnBehalfBy],
    [RelationshipRoleBase].[ModifiedOnBehalfBy]
from [RelationshipRoleBase] 
    left join [SystemUserBase] [createdby_relationship_role] with(nolock) on ([RelationshipRoleBase].[CreatedBy] = [createdby_relationship_role].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfby_relationship_role] with(nolock) on ([RelationshipRoleBase].[CreatedOnBehalfBy] = [createdonbehalfby_relationship_role].[SystemUserId])
    left join [SystemUserBase] [modifiedby_relationship_role] with(nolock) on ([RelationshipRoleBase].[ModifiedBy] = [modifiedby_relationship_role].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_relationship_role] with(nolock) on ([RelationshipRoleBase].[ModifiedOnBehalfBy] = [modifiedonbehalfby_relationship_role].[SystemUserId])
    left join [OrganizationBase] [organization_relationship_roles] with(nolock) on ([RelationshipRoleBase].[OrganizationId] = [organization_relationship_roles].[OrganizationId])
