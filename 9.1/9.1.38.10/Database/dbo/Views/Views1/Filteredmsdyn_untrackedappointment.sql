

--
-- report view for msdyn_untrackedappointment
--
create view dbo.[Filteredmsdyn_untrackedappointment] 
(
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [msdyn_name],
    [msdyn_untrackedappointmentid],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [msdyn_untrackedappointment].[CreatedBy],
    [msdyn_untrackedappointment].[CreatedByName],
    [msdyn_untrackedappointment].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_untrackedappointment].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_untrackedappointment].[CreatedOn],
    [msdyn_untrackedappointment].[CreatedOnBehalfBy],
    [msdyn_untrackedappointment].[CreatedOnBehalfByName],
    [msdyn_untrackedappointment].[CreatedOnBehalfByYomiName],
    [msdyn_untrackedappointment].[ImportSequenceNumber],
    [msdyn_untrackedappointment].[ModifiedBy],
    [msdyn_untrackedappointment].[ModifiedByName],
    [msdyn_untrackedappointment].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_untrackedappointment].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_untrackedappointment].[ModifiedOn],
    [msdyn_untrackedappointment].[ModifiedOnBehalfBy],
    [msdyn_untrackedappointment].[ModifiedOnBehalfByName],
    [msdyn_untrackedappointment].[ModifiedOnBehalfByYomiName],
    [msdyn_untrackedappointment].[msdyn_name],
    [msdyn_untrackedappointment].[msdyn_untrackedappointmentId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_untrackedappointment].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_untrackedappointment].[OverriddenCreatedOn],
    [msdyn_untrackedappointment].[OwnerId],
    --[msdyn_untrackedappointment].[OwnerIdDsc]
    0,
    [msdyn_untrackedappointment].[OwnerIdName],
    [msdyn_untrackedappointment].[OwnerIdType],
    [msdyn_untrackedappointment].[OwnerIdYomiName],
    [msdyn_untrackedappointment].[OwningBusinessUnit],
    [msdyn_untrackedappointment].[OwningTeam],
    [msdyn_untrackedappointment].[OwningUser],
    [msdyn_untrackedappointment].[statecode],
    statecodePLTable.Value,
    [msdyn_untrackedappointment].[statuscode],
    statuscodePLTable.Value,
    [msdyn_untrackedappointment].[TimeZoneRuleVersionNumber],
    [msdyn_untrackedappointment].[UTCConversionTimeZoneCode],
    [msdyn_untrackedappointment].[VersionNumber]
from msdyn_untrackedappointment
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10101
		and [statecodePLTable].AttributeValue = [msdyn_untrackedappointment].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10101
		and [statuscodePLTable].AttributeValue = [msdyn_untrackedappointment].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10101) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_untrackedappointment].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10101
		)
		
	-- role based access
	or 
	
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[msdyn_untrackedappointment].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10101)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_untrackedappointment].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_untrackedappointment].[msdyn_untrackedappointmentId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10101
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_untrackedappointment] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_untrackedappointment] TO [CRMReaderRole]
    AS [dbo];

