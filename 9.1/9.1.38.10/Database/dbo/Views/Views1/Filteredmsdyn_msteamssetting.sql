

--
-- report view for msdyn_msteamssetting
--
create view dbo.[Filteredmsdyn_msteamssetting] 
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
    [msdyn_msteamssettingid],
    [msdyn_msteamssettingsid],
    [msdyn_msteamssettingsname],
    [msdyn_tabserviceurl],
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
    [msdyn_msteamssetting].[CreatedBy],
    [msdyn_msteamssetting].[CreatedByName],
    [msdyn_msteamssetting].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_msteamssetting].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_msteamssetting].[CreatedOn],
    [msdyn_msteamssetting].[CreatedOnBehalfBy],
    [msdyn_msteamssetting].[CreatedOnBehalfByName],
    [msdyn_msteamssetting].[CreatedOnBehalfByYomiName],
    [msdyn_msteamssetting].[ImportSequenceNumber],
    [msdyn_msteamssetting].[ModifiedBy],
    [msdyn_msteamssetting].[ModifiedByName],
    [msdyn_msteamssetting].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_msteamssetting].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_msteamssetting].[ModifiedOn],
    [msdyn_msteamssetting].[ModifiedOnBehalfBy],
    [msdyn_msteamssetting].[ModifiedOnBehalfByName],
    [msdyn_msteamssetting].[ModifiedOnBehalfByYomiName],
    [msdyn_msteamssetting].[msdyn_msteamssettingId],
    [msdyn_msteamssetting].[msdyn_msteamssettingsId],
    [msdyn_msteamssetting].[msdyn_MSTeamsSettingsName],
    [msdyn_msteamssetting].[msdyn_TabServiceUrl],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_msteamssetting].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_msteamssetting].[OverriddenCreatedOn],
    [msdyn_msteamssetting].[OwnerId],
    --[msdyn_msteamssetting].[OwnerIdDsc]
    0,
    [msdyn_msteamssetting].[OwnerIdName],
    [msdyn_msteamssetting].[OwnerIdType],
    [msdyn_msteamssetting].[OwnerIdYomiName],
    [msdyn_msteamssetting].[OwningBusinessUnit],
    [msdyn_msteamssetting].[OwningTeam],
    [msdyn_msteamssetting].[OwningUser],
    [msdyn_msteamssetting].[statecode],
    statecodePLTable.Value,
    [msdyn_msteamssetting].[statuscode],
    statuscodePLTable.Value,
    [msdyn_msteamssetting].[TimeZoneRuleVersionNumber],
    [msdyn_msteamssetting].[UTCConversionTimeZoneCode],
    [msdyn_msteamssetting].[VersionNumber]
from msdyn_msteamssetting
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10109
		and [statecodePLTable].AttributeValue = [msdyn_msteamssetting].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10109
		and [statuscodePLTable].AttributeValue = [msdyn_msteamssetting].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10109) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_msteamssetting].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10109
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
		[msdyn_msteamssetting].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10109)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_msteamssetting].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_msteamssetting].[msdyn_msteamssettingId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10109
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_msteamssetting] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_msteamssetting] TO [CRMReaderRole]
    AS [dbo];

