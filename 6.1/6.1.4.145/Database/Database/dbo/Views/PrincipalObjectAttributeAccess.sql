


--
-- base view for PrincipalObjectAttributeAccess
--
create view dbo.[PrincipalObjectAttributeAccess]
 (
    -- logical attributes
    [OrganizationIdName],
    [PrincipalIdName],

    -- physical attributes
    [PrincipalObjectAttributeAccessId],
    [PrincipalId],
    [AttributeId],
    [ObjectId],
    [ObjectTypeCode],
    [ReadAccess],
    [UpdateAccess],
    [VersionNumber],
    [OrganizationId],
    [PrincipalIdType]
) with view_metadata as
select
    -- logical attributes
    [lk_principalobjectattributeaccessbase_organizationid].[Name],
    [PrincipalIdName] = case 
     when [PrincipalObjectAttributeAccessBase].[PrincipalIdType] = 9 then [team_principalobjectattributeaccess_principalid].[Name]
     when [PrincipalObjectAttributeAccessBase].[PrincipalIdType] = 8 then [systemuser_principalobjectattributeaccess_principalid].[FullName]
    else null
    end,

    -- physical attribute
    [PrincipalObjectAttributeAccessBase].[PrincipalObjectAttributeAccessId],
    [PrincipalObjectAttributeAccessBase].[PrincipalId],
    [PrincipalObjectAttributeAccessBase].[AttributeId],
    [PrincipalObjectAttributeAccessBase].[ObjectId],
    [PrincipalObjectAttributeAccessBase].[ObjectTypeCode],
    [PrincipalObjectAttributeAccessBase].[ReadAccess],
    [PrincipalObjectAttributeAccessBase].[UpdateAccess],
    [PrincipalObjectAttributeAccessBase].[VersionNumber],
    [PrincipalObjectAttributeAccessBase].[OrganizationId],
    [PrincipalObjectAttributeAccessBase].[PrincipalIdType]
from [PrincipalObjectAttributeAccessBase] 
    left join [OrganizationBase] [lk_principalobjectattributeaccessbase_organizationid] with(nolock) on ([PrincipalObjectAttributeAccessBase].[OrganizationId] = [lk_principalobjectattributeaccessbase_organizationid].[OrganizationId])
    left join [SystemUserBase] [systemuser_principalobjectattributeaccess_principalid] with(nolock) on ([PrincipalObjectAttributeAccessBase].[PrincipalId] = [systemuser_principalobjectattributeaccess_principalid].[SystemUserId])
    left join [TeamBase] [team_principalobjectattributeaccess_principalid] on ([PrincipalObjectAttributeAccessBase].[PrincipalId] = [team_principalobjectattributeaccess_principalid].[TeamId])
