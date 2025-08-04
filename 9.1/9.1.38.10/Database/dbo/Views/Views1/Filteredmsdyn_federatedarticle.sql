

--
-- report view for msdyn_federatedarticle
--
create view dbo.[Filteredmsdyn_federatedarticle] 
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
    [msdyn_federatedarticleid],
    [msdyn_searchproviderarticleid],
    [msdyn_searchproviderid],
    [msdyn_searchprovideridname],
    [msdyn_title],
    [msdyn_url],
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
    [msdyn_federatedarticle].[CreatedBy],
    [msdyn_federatedarticle].[CreatedByName],
    [msdyn_federatedarticle].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_federatedarticle].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_federatedarticle].[CreatedOn],
    [msdyn_federatedarticle].[CreatedOnBehalfBy],
    [msdyn_federatedarticle].[CreatedOnBehalfByName],
    [msdyn_federatedarticle].[CreatedOnBehalfByYomiName],
    [msdyn_federatedarticle].[ImportSequenceNumber],
    [msdyn_federatedarticle].[ModifiedBy],
    [msdyn_federatedarticle].[ModifiedByName],
    [msdyn_federatedarticle].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_federatedarticle].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_federatedarticle].[ModifiedOn],
    [msdyn_federatedarticle].[ModifiedOnBehalfBy],
    [msdyn_federatedarticle].[ModifiedOnBehalfByName],
    [msdyn_federatedarticle].[ModifiedOnBehalfByYomiName],
    [msdyn_federatedarticle].[msdyn_federatedarticleId],
    [msdyn_federatedarticle].[msdyn_searchproviderarticleid],
    [msdyn_federatedarticle].[msdyn_searchproviderid],
    [msdyn_federatedarticle].[msdyn_searchprovideridName],
    [msdyn_federatedarticle].[msdyn_title],
    [msdyn_federatedarticle].[msdyn_url],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_federatedarticle].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_federatedarticle].[OverriddenCreatedOn],
    [msdyn_federatedarticle].[OwnerId],
    --[msdyn_federatedarticle].[OwnerIdDsc]
    0,
    [msdyn_federatedarticle].[OwnerIdName],
    [msdyn_federatedarticle].[OwnerIdType],
    [msdyn_federatedarticle].[OwnerIdYomiName],
    [msdyn_federatedarticle].[OwningBusinessUnit],
    [msdyn_federatedarticle].[OwningTeam],
    [msdyn_federatedarticle].[OwningUser],
    [msdyn_federatedarticle].[statecode],
    statecodePLTable.Value,
    [msdyn_federatedarticle].[statuscode],
    statuscodePLTable.Value,
    [msdyn_federatedarticle].[TimeZoneRuleVersionNumber],
    [msdyn_federatedarticle].[UTCConversionTimeZoneCode],
    [msdyn_federatedarticle].[VersionNumber]
from msdyn_federatedarticle
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10049
		and [statecodePLTable].AttributeValue = [msdyn_federatedarticle].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10049
		and [statuscodePLTable].AttributeValue = [msdyn_federatedarticle].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10049) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_federatedarticle].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10049
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
		[msdyn_federatedarticle].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10049)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_federatedarticle].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_federatedarticle].[msdyn_federatedarticleId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10049
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_federatedarticle] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_federatedarticle] TO [CRMReaderRole]
    AS [dbo];

