


--
-- base view for RelationshipRole
--
create view dbo.[RelationshipRole]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],

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
    [createdby_relationship_role].[FullName],
    [createdonbehalfby_relationship_role].[YomiFullName],
    [createdonbehalfby_relationship_role].[FullName],
    [modifiedonbehalfby_relationship_role].[YomiFullName],
    [modifiedonbehalfby_relationship_role].[FullName],
    [modifiedby_relationship_role].[FullName],
    [modifiedby_relationship_role].[YomiFullName],
    [organization_relationship_roles].[Name],

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
    left join [SystemUserBase] [createdby_relationship_role]  on ([RelationshipRoleBase].[CreatedBy] = [createdby_relationship_role].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfby_relationship_role]  on ([RelationshipRoleBase].[CreatedOnBehalfBy] = [createdonbehalfby_relationship_role].[SystemUserId])
    left join [SystemUserBase] [modifiedby_relationship_role]  on ([RelationshipRoleBase].[ModifiedBy] = [modifiedby_relationship_role].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_relationship_role]  on ([RelationshipRoleBase].[ModifiedOnBehalfBy] = [modifiedonbehalfby_relationship_role].[SystemUserId])
    left join [OrganizationBase] [organization_relationship_roles]  on ([RelationshipRoleBase].[OrganizationId] = [organization_relationship_roles].[OrganizationId])
