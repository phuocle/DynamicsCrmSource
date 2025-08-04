


--
-- base view for PrincipalSyncAttributeMap
--
create view dbo.[PrincipalSyncAttributeMap]
 (
    -- logical attributes
    [OrganizationIdName],

    -- physical attributes
    [PrincipalSyncAttributeMapId],
    [PrincipalId],
    [VersionNumber],
    [MappingName],
    [EntityTypeCode],
    [AttributeCRMName],
    [AttributeExchangeName],
    [SyncDirection],
    [DefaultSyncDirection],
    [AllowedSyncDirection],
    [IsComputed],
    [ParentPrincipalSyncAttributeMappingId],
    [ComputedProperties],
    [OrganizationId],
    [AttributeCRMDisplayName],
    [AttributeExchangeDisplayName]
) with view_metadata as
select
    -- logical attributes
    [lk_principalsyncattributemap_organizationid].[Name],

    -- physical attribute
    [PrincipalSyncAttributeMapBase].[PrincipalSyncAttributeMapId],
    [PrincipalSyncAttributeMapBase].[PrincipalId],
    [PrincipalSyncAttributeMapBase].[VersionNumber],
    [PrincipalSyncAttributeMapBase].[MappingName],
    [PrincipalSyncAttributeMapBase].[EntityTypeCode],
    [PrincipalSyncAttributeMapBase].[AttributeCRMName],
    [PrincipalSyncAttributeMapBase].[AttributeExchangeName],
    [PrincipalSyncAttributeMapBase].[SyncDirection],
    [PrincipalSyncAttributeMapBase].[DefaultSyncDirection],
    [PrincipalSyncAttributeMapBase].[AllowedSyncDirection],
    [PrincipalSyncAttributeMapBase].[IsComputed],
    [PrincipalSyncAttributeMapBase].[ParentPrincipalSyncAttributeMappingId],
    [PrincipalSyncAttributeMapBase].[ComputedProperties],
    [PrincipalSyncAttributeMapBase].[OrganizationId],
    [PrincipalSyncAttributeMapBase].[AttributeCRMDisplayName],
    [PrincipalSyncAttributeMapBase].[AttributeExchangeDisplayName]
from [PrincipalSyncAttributeMapBase] 
    left join [OrganizationBase] [lk_principalsyncattributemap_organizationid] with(nolock) on ([PrincipalSyncAttributeMapBase].[OrganizationId] = [lk_principalsyncattributemap_organizationid].[OrganizationId])
