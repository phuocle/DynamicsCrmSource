

--
-- report view for resource
--
create view dbo.[FilteredResource] (
    [businessunitid],
    [businessunitiddsc],
    [businessunitidname],
    [calendarid],
    [displayinserviceviews],
    [displayinserviceviewsname],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [isdisabled],
    [isdisabledname],
    [name],
    [objecttypecode],
    [objecttypecodename],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [resourceid],
    [siteid],
    [siteiddsc],
    [siteidname],
    [versionnumber]
) with view_metadata as
select
    [Resource].[BusinessUnitId],
    --[Resource].[BusinessUnitIdDsc]
    0,
    [Resource].[BusinessUnitIdName],
    [Resource].[CalendarId],
    [Resource].[DisplayInServiceViews],
    DisplayInServiceViewsPLTable.Value,
    cast([Resource].[EntityImage] as varbinary(max)),
    [Resource].[EntityImageId],
    [Resource].[EntityImage_Timestamp],
    [Resource].[EntityImage_URL],
    [Resource].[IsDisabled],
    IsDisabledPLTable.Value,
    [Resource].[Name],
    [Resource].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    [Resource].[OrganizationId],
    --[Resource].[OrganizationIdDsc]
    0,
    [Resource].[OrganizationIdName],
    [Resource].[ResourceId],
    [Resource].[SiteId],
    --[Resource].[SiteIdDsc]
    0,
    [Resource].[SiteIdName],
    [Resource].[VersionNumber]
from Resource
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [DisplayInServiceViewsPLTable] on 
		([DisplayInServiceViewsPLTable].AttributeName = 'displayinserviceviews'
		and [DisplayInServiceViewsPLTable].ObjectTypeCode = 4002
		and [DisplayInServiceViewsPLTable].AttributeValue = [Resource].[DisplayInServiceViews]
		and [DisplayInServiceViewsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsDisabledPLTable] on 
		([IsDisabledPLTable].AttributeName = 'isdisabled'
		and [IsDisabledPLTable].ObjectTypeCode = 4002
		and [IsDisabledPLTable].AttributeValue = [Resource].[IsDisabled]
		and [IsDisabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ObjectTypeCodePLTable] on 
		([ObjectTypeCodePLTable].AttributeName = 'objecttypecode'
		and [ObjectTypeCodePLTable].ObjectTypeCode = 4002
		and [ObjectTypeCodePLTable].AttributeValue = [Resource].[ObjectTypeCode]
		and [ObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4002) pdm1
    cross join dbo.fn_GetMaxPrivilegeDepthMask(8) pdm2
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4000) pdm3
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4006) pdm4
where
(
	-- privilege check
	pdm1.PrivilegeDepthMask is not null and
	( pdm2.PrivilegeDepthMask is not null or pdm3.PrivilegeDepthMask is not null ) and
	pdm4.PrivilegeDepthMask is not null
	-- role based access
	and 
	
exists
(
	select 1 where
	((
		-- deep/local security
		(((pdm2.PrivilegeDepthMask & 0x4) != 0) or ((pdm2.PrivilegeDepthMask & 0x2) != 0)) and [Resource].[ObjectTypeCode] = 8 and
		[Resource].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 8)
	) 
	or
	(
		-- global security
		((pdm2.PrivilegeDepthMask & 0x8) != 0 ) and [Resource].[ObjectTypeCode] = 8 and 
		[Resource].[BusinessUnitId] is not null 
	)) 
or
	((
		-- deep/local security
		(((pdm3.PrivilegeDepthMask & 0x4) != 0) or ((pdm3.PrivilegeDepthMask & 0x2) != 0)) and [Resource].[ObjectTypeCode] = 4000 and
		[Resource].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4000)
	) 
	or
	(
		-- global security
		((pdm3.PrivilegeDepthMask & 0x8) != 0 ) and [Resource].[ObjectTypeCode] = 4000 and 
		[Resource].[BusinessUnitId] is not null 
	)) 
or
	((
		-- deep/local security
		(((pdm4.PrivilegeDepthMask & 0x4) != 0) or ((pdm4.PrivilegeDepthMask & 0x2) != 0)) and [Resource].[ObjectTypeCode] = 4006 and
		[Resource].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4006)
	) 
	or
	(
		-- global security
		((pdm4.PrivilegeDepthMask & 0x8) != 0 ) and [Resource].[ObjectTypeCode] = 4006 and 
		[Resource].[BusinessUnitId] is not null 
	)) 
)
	
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredResource] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredResource] TO [CRMReaderRole]
    AS [dbo];

