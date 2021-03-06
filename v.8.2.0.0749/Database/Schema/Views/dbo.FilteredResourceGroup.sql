SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for resourcegroup
--
create view [dbo].[FilteredResourceGroup] (
    [businessunitid],
    [businessunitiddsc],
    [businessunitidname],
    [grouptypecode],
    [grouptypecodename],
    [name],
    [objecttypecode],
    [objecttypecodename],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [resourcegroupid],
    [versionnumber]
) with view_metadata as
select
    [ResourceGroup].[BusinessUnitId],
    --[ResourceGroup].[BusinessUnitIdDsc]
    0,
    [ResourceGroup].[BusinessUnitIdName],
    [ResourceGroup].[GroupTypeCode],
    GroupTypeCodePLTable.Value,
    [ResourceGroup].[Name],
    [ResourceGroup].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    [ResourceGroup].[OrganizationId],
    --[ResourceGroup].[OrganizationIdDsc]
    0,
    [ResourceGroup].[OrganizationIdName],
    [ResourceGroup].[ResourceGroupId],
    [ResourceGroup].[VersionNumber]
from ResourceGroup
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [GroupTypeCodePLTable] on 
		([GroupTypeCodePLTable].AttributeName = 'grouptypecode'
		and [GroupTypeCodePLTable].ObjectTypeCode = 4005
		and [GroupTypeCodePLTable].AttributeValue = [ResourceGroup].[GroupTypeCode]
		and [GroupTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ObjectTypeCodePLTable] on 
		([ObjectTypeCodePLTable].AttributeName = 'objecttypecode'
		and [ObjectTypeCodePLTable].ObjectTypeCode = 4005
		and [ObjectTypeCodePLTable].AttributeValue = [ResourceGroup].[ObjectTypeCode]
		and [ObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4005) pdm
where
(
    
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[ResourceGroup].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4005)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ResourceGroup].[BusinessUnitId] is not null 
	) 
)

)
GO
GRANT SELECT ON  [dbo].[FilteredResourceGroup] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredResourceGroup] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
