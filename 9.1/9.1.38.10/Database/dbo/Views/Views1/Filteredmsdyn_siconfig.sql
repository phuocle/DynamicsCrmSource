

--
-- report view for msdyn_siconfig
--
create view dbo.[Filteredmsdyn_siconfig] 
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
    [msdyn_siconfigid],
    [msdyn_version],
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
    [msdyn_siconfig].[CreatedBy],
    [msdyn_siconfig].[CreatedByName],
    [msdyn_siconfig].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_siconfig].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_siconfig].[CreatedOn],
    [msdyn_siconfig].[CreatedOnBehalfBy],
    [msdyn_siconfig].[CreatedOnBehalfByName],
    [msdyn_siconfig].[CreatedOnBehalfByYomiName],
    [msdyn_siconfig].[ImportSequenceNumber],
    [msdyn_siconfig].[ModifiedBy],
    [msdyn_siconfig].[ModifiedByName],
    [msdyn_siconfig].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_siconfig].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_siconfig].[ModifiedOn],
    [msdyn_siconfig].[ModifiedOnBehalfBy],
    [msdyn_siconfig].[ModifiedOnBehalfByName],
    [msdyn_siconfig].[ModifiedOnBehalfByYomiName],
    [msdyn_siconfig].[msdyn_siconfigId],
    [msdyn_siconfig].[msdyn_version],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_siconfig].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_siconfig].[OverriddenCreatedOn],
    [msdyn_siconfig].[OwnerId],
    --[msdyn_siconfig].[OwnerIdDsc]
    0,
    [msdyn_siconfig].[OwnerIdName],
    [msdyn_siconfig].[OwnerIdType],
    [msdyn_siconfig].[OwnerIdYomiName],
    [msdyn_siconfig].[OwningBusinessUnit],
    [msdyn_siconfig].[OwningTeam],
    [msdyn_siconfig].[OwningUser],
    [msdyn_siconfig].[statecode],
    statecodePLTable.Value,
    [msdyn_siconfig].[statuscode],
    statuscodePLTable.Value,
    [msdyn_siconfig].[TimeZoneRuleVersionNumber],
    [msdyn_siconfig].[UTCConversionTimeZoneCode],
    [msdyn_siconfig].[VersionNumber]
from msdyn_siconfig
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10004
		and [statecodePLTable].AttributeValue = [msdyn_siconfig].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10004
		and [statuscodePLTable].AttributeValue = [msdyn_siconfig].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10004) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_siconfig].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10004
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
		[msdyn_siconfig].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10004)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_siconfig].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_siconfig].[msdyn_siconfigId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10004
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_siconfig] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_siconfig] TO [CRMReaderRole]
    AS [dbo];

