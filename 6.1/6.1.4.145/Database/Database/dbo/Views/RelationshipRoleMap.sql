


--
-- base view for RelationshipRoleMap
--
create view dbo.[RelationshipRoleMap]
 (
    -- logical attributes
    [OrganizationId],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [RelationshipRoleIdName],

    -- physical attributes
    [ModifiedOn],
    [CreatedOn],
    [RelationshipRoleMapId],
    [CreatedBy],
    [VersionNumber],
    [ModifiedBy],
    [AssociateObjectTypeCode],
    [RelationshipRoleId],
    [PrimaryObjectTypeCode],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [relationship_role_relationship_role_map].[OrganizationId],
    [modifiedonbehalfby_relationship_role_map].[FullName],
    [createdonbehalfby_relationship_role_map].[FullName],
    [createdby_relationship_role_map].[FullName],
    [modifiedby_relationship_role_map].[FullName],
    [createdonbehalfby_relationship_role_map].[YomiFullName],
    [createdby_relationship_role_map].[YomiFullName],
    [modifiedby_relationship_role_map].[YomiFullName],
    [modifiedonbehalfby_relationship_role_map].[YomiFullName],
    [relationship_role_relationship_role_map].[Name],

    -- physical attribute
    [RelationshipRoleMapBase].[ModifiedOn],
    [RelationshipRoleMapBase].[CreatedOn],
    [RelationshipRoleMapBase].[RelationshipRoleMapId],
    [RelationshipRoleMapBase].[CreatedBy],
    [RelationshipRoleMapBase].[VersionNumber],
    [RelationshipRoleMapBase].[ModifiedBy],
    [RelationshipRoleMapBase].[AssociateObjectTypeCode],
    [RelationshipRoleMapBase].[RelationshipRoleId],
    [RelationshipRoleMapBase].[PrimaryObjectTypeCode],
    [RelationshipRoleMapBase].[CreatedOnBehalfBy],
    [RelationshipRoleMapBase].[ModifiedOnBehalfBy]
from [RelationshipRoleMapBase] 
    left join [SystemUserBase] [createdby_relationship_role_map] with(nolock) on ([RelationshipRoleMapBase].[CreatedBy] = [createdby_relationship_role_map].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfby_relationship_role_map] with(nolock) on ([RelationshipRoleMapBase].[CreatedOnBehalfBy] = [createdonbehalfby_relationship_role_map].[SystemUserId])
    left join [SystemUserBase] [modifiedby_relationship_role_map] with(nolock) on ([RelationshipRoleMapBase].[ModifiedBy] = [modifiedby_relationship_role_map].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_relationship_role_map] with(nolock) on ([RelationshipRoleMapBase].[ModifiedOnBehalfBy] = [modifiedonbehalfby_relationship_role_map].[SystemUserId])
    left join [RelationshipRoleBase] [relationship_role_relationship_role_map] on ([RelationshipRoleMapBase].[RelationshipRoleId] = [relationship_role_relationship_role_map].[RelationshipRoleId])
