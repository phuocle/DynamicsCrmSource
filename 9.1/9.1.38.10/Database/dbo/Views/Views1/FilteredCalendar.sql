

--
-- report view for calendar
--
create view dbo.[FilteredCalendar] 
(
    [businessunitid],
    [businessunitiddsc],
    [businessunitidname],
    [calendarid],
    [createdby],
    [createdbydsc],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [holidayschedulecalendarid],
    [holidayschedulecalendaridname],
    [isshared],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [primaryuserid],
    [type],
    [typename],
    [versionnumber]
) with view_metadata as
select
    [Calendar].[BusinessUnitId],
    --[Calendar].[BusinessUnitIdDsc]
    0,
    [Calendar].[BusinessUnitIdName],
    [Calendar].[CalendarId],
    [Calendar].[CreatedBy],
    --[Calendar].[CreatedByDsc]
    0,
    [Calendar].[CreatedByName],
    [Calendar].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Calendar].[CreatedOn],
			us.TimeZoneCode),
        [Calendar].[CreatedOn],
    [Calendar].[CreatedOnBehalfBy],
    --[Calendar].[CreatedOnBehalfByDsc]
    0,
    [Calendar].[CreatedOnBehalfByName],
    [Calendar].[CreatedOnBehalfByYomiName],
    [Calendar].[Description],
    [Calendar].[HolidayScheduleCalendarId],
    [Calendar].[HolidayScheduleCalendarIdName],
    [Calendar].[IsShared],
    [Calendar].[ModifiedBy],
    --[Calendar].[ModifiedByDsc]
    0,
    [Calendar].[ModifiedByName],
    [Calendar].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Calendar].[ModifiedOn],
			us.TimeZoneCode),
        [Calendar].[ModifiedOn],
    [Calendar].[ModifiedOnBehalfBy],
    --[Calendar].[ModifiedOnBehalfByDsc]
    0,
    [Calendar].[ModifiedOnBehalfByName],
    [Calendar].[ModifiedOnBehalfByYomiName],
    [Calendar].[Name],
    [Calendar].[OrganizationId],
    --[Calendar].[OrganizationIdDsc]
    0,
    [Calendar].[OrganizationIdName],
    [Calendar].[PrimaryUserId],
    [Calendar].[Type],
    TypePLTable.Value,
    [Calendar].[VersionNumber]
from Calendar
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [TypePLTable] on 
		([TypePLTable].AttributeName = 'type'
		and [TypePLTable].ObjectTypeCode = 4003
		and [TypePLTable].AttributeValue = [Calendar].[Type]
		and [TypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4003) pdm
where
(
	-- privilege check
	(pdm.PrivilegeDepthMask is not null or ((select 
		   Max( PrivilegeDepthMask )
	from 
		   RolePrivileges 
	where
		   PrivilegeId = '499485bc-a445-423b-b5f6-1519042ebf33'
		   and
		   RoleId in
				  (select ParentRootRoleId
					from RoleBase rb
					join SystemUserRoles sur on (sur.RoleId = rb.RoleId and sur.SystemUserId=u.SystemUserId)
				  union
				  select ParentRootRoleId
					from RoleBase rb
					join TeamRoles tr on (tr.RoleId = rb.RoleId)
					join SystemUserPrincipals sup on (sup.PrincipalId = tr.TeamId and sup.SystemUserId = u.SystemUserId)
				  )) is not null))
	-- role based access
	and 
	(

exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[Calendar].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4003)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Calendar].[BusinessUnitId] is not null 
	) 
)

or
(((select 
		   Max( PrivilegeDepthMask )
	from 
		   RolePrivileges 
	where
		   PrivilegeId = '499485bc-a445-423b-b5f6-1519042ebf33'
		   and
		   RoleId in
				  (select ParentRootRoleId
					from RoleBase rb
					join SystemUserRoles sur on (sur.RoleId = rb.RoleId and sur.SystemUserId=u.SystemUserId)
				  union
				  select ParentRootRoleId
					from RoleBase rb
					join TeamRoles tr on (tr.RoleId = rb.RoleId)
					join SystemUserPrincipals sup on (sup.PrincipalId = tr.TeamId and sup.SystemUserId = u.SystemUserId)
				  )) is not null) and [Calendar].PrimaryUserId = u.SystemUserId)
or
(o.BusinessClosureCalendarId is not null and [Calendar].CalendarId = o.BusinessClosureCalendarId)
)
	
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCalendar] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCalendar] TO [CRMReaderRole]
    AS [dbo];

