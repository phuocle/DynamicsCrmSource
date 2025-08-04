

--
-- report view for msdyn_kmfederatedsearchconfig
--
create view dbo.[Filteredmsdyn_kmfederatedsearchconfig] 
(
    [connectionid],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [isdefault],
    [isdefaultname],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [msdyn_description],
    [msdyn_kmfederatedsearchconfigid],
    [msdyn_name],
    [organization],
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
    [searchtype],
    [searchtypename],
    [sharepointurl],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [msdyn_kmfederatedsearchconfig].[ConnectionId],
    [msdyn_kmfederatedsearchconfig].[CreatedBy],
    [msdyn_kmfederatedsearchconfig].[CreatedByName],
    [msdyn_kmfederatedsearchconfig].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_kmfederatedsearchconfig].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_kmfederatedsearchconfig].[CreatedOn],
    [msdyn_kmfederatedsearchconfig].[CreatedOnBehalfBy],
    [msdyn_kmfederatedsearchconfig].[CreatedOnBehalfByName],
    [msdyn_kmfederatedsearchconfig].[CreatedOnBehalfByYomiName],
    [msdyn_kmfederatedsearchconfig].[ImportSequenceNumber],
    [msdyn_kmfederatedsearchconfig].[IsDefault],
    IsDefaultPLTable.Value,
    [msdyn_kmfederatedsearchconfig].[ModifiedBy],
    [msdyn_kmfederatedsearchconfig].[ModifiedByName],
    [msdyn_kmfederatedsearchconfig].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_kmfederatedsearchconfig].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_kmfederatedsearchconfig].[ModifiedOn],
    [msdyn_kmfederatedsearchconfig].[ModifiedOnBehalfBy],
    [msdyn_kmfederatedsearchconfig].[ModifiedOnBehalfByName],
    [msdyn_kmfederatedsearchconfig].[ModifiedOnBehalfByYomiName],
    [msdyn_kmfederatedsearchconfig].[msdyn_Description],
    [msdyn_kmfederatedsearchconfig].[msdyn_kmfederatedsearchconfigId],
    [msdyn_kmfederatedsearchconfig].[msdyn_Name],
    [msdyn_kmfederatedsearchconfig].[Organization],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_kmfederatedsearchconfig].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_kmfederatedsearchconfig].[OverriddenCreatedOn],
    [msdyn_kmfederatedsearchconfig].[OwnerId],
    --[msdyn_kmfederatedsearchconfig].[OwnerIdDsc]
    0,
    [msdyn_kmfederatedsearchconfig].[OwnerIdName],
    [msdyn_kmfederatedsearchconfig].[OwnerIdType],
    [msdyn_kmfederatedsearchconfig].[OwnerIdYomiName],
    [msdyn_kmfederatedsearchconfig].[OwningBusinessUnit],
    [msdyn_kmfederatedsearchconfig].[OwningTeam],
    [msdyn_kmfederatedsearchconfig].[OwningUser],
    [msdyn_kmfederatedsearchconfig].[SearchType],
    SearchTypePLTable.Value,
    [msdyn_kmfederatedsearchconfig].[SharepointURL],
    [msdyn_kmfederatedsearchconfig].[statecode],
    statecodePLTable.Value,
    [msdyn_kmfederatedsearchconfig].[statuscode],
    statuscodePLTable.Value,
    [msdyn_kmfederatedsearchconfig].[TimeZoneRuleVersionNumber],
    [msdyn_kmfederatedsearchconfig].[UTCConversionTimeZoneCode],
    [msdyn_kmfederatedsearchconfig].[VersionNumber]
from msdyn_kmfederatedsearchconfig
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsDefaultPLTable] on 
		([IsDefaultPLTable].AttributeName = 'isdefault'
		and [IsDefaultPLTable].ObjectTypeCode = 10051
		and [IsDefaultPLTable].AttributeValue = [msdyn_kmfederatedsearchconfig].[IsDefault]
		and [IsDefaultPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SearchTypePLTable] on 
		([SearchTypePLTable].AttributeName = 'searchtype'
		and [SearchTypePLTable].ObjectTypeCode = 10051
		and [SearchTypePLTable].AttributeValue = [msdyn_kmfederatedsearchconfig].[SearchType]
		and [SearchTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10051
		and [statecodePLTable].AttributeValue = [msdyn_kmfederatedsearchconfig].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10051
		and [statuscodePLTable].AttributeValue = [msdyn_kmfederatedsearchconfig].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10051) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_kmfederatedsearchconfig].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10051
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
		[msdyn_kmfederatedsearchconfig].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10051)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_kmfederatedsearchconfig].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_kmfederatedsearchconfig].[msdyn_kmfederatedsearchconfigId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10051
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_kmfederatedsearchconfig] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_kmfederatedsearchconfig] TO [CRMReaderRole]
    AS [dbo];

