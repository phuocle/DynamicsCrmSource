

--
-- report view for msdyn_callablecontext
--
create view dbo.[Filteredmsdyn_callablecontext] 
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
    [msdyn_callablecontextid],
    [msdyn_EntityLogicalName],
    [msdyn_EntityOTC],
    [msdyn_entityotcname],
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
    [msdyn_callablecontext].[CreatedBy],
    [msdyn_callablecontext].[CreatedByName],
    [msdyn_callablecontext].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_callablecontext].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_callablecontext].[CreatedOn],
    [msdyn_callablecontext].[CreatedOnBehalfBy],
    [msdyn_callablecontext].[CreatedOnBehalfByName],
    [msdyn_callablecontext].[CreatedOnBehalfByYomiName],
    [msdyn_callablecontext].[ImportSequenceNumber],
    [msdyn_callablecontext].[ModifiedBy],
    [msdyn_callablecontext].[ModifiedByName],
    [msdyn_callablecontext].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_callablecontext].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_callablecontext].[ModifiedOn],
    [msdyn_callablecontext].[ModifiedOnBehalfBy],
    [msdyn_callablecontext].[ModifiedOnBehalfByName],
    [msdyn_callablecontext].[ModifiedOnBehalfByYomiName],
    [msdyn_callablecontext].[msdyn_callablecontextId],
    [msdyn_callablecontext].[msdyn_EntityLogicalName],
    [msdyn_callablecontext].[msdyn_EntityOTC],
    msdyn_EntityOTCPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_callablecontext].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_callablecontext].[OverriddenCreatedOn],
    [msdyn_callablecontext].[OwnerId],
    --[msdyn_callablecontext].[OwnerIdDsc]
    0,
    [msdyn_callablecontext].[OwnerIdName],
    [msdyn_callablecontext].[OwnerIdType],
    [msdyn_callablecontext].[OwnerIdYomiName],
    [msdyn_callablecontext].[OwningBusinessUnit],
    [msdyn_callablecontext].[OwningTeam],
    [msdyn_callablecontext].[OwningUser],
    [msdyn_callablecontext].[statecode],
    statecodePLTable.Value,
    [msdyn_callablecontext].[statuscode],
    statuscodePLTable.Value,
    [msdyn_callablecontext].[TimeZoneRuleVersionNumber],
    [msdyn_callablecontext].[UTCConversionTimeZoneCode],
    [msdyn_callablecontext].[VersionNumber]
from msdyn_callablecontext
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_EntityOTCPLTable] on 
		([msdyn_EntityOTCPLTable].AttributeName = 'msdyn_EntityOTC'
		and [msdyn_EntityOTCPLTable].ObjectTypeCode = 10085
		and [msdyn_EntityOTCPLTable].AttributeValue = [msdyn_callablecontext].[msdyn_EntityOTC]
		and [msdyn_EntityOTCPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10085
		and [statecodePLTable].AttributeValue = [msdyn_callablecontext].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10085
		and [statuscodePLTable].AttributeValue = [msdyn_callablecontext].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10085) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_callablecontext].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10085
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
		[msdyn_callablecontext].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10085)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_callablecontext].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_callablecontext].[msdyn_callablecontextId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10085
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_callablecontext] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_callablecontext] TO [CRMReaderRole]
    AS [dbo];

