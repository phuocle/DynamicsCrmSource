

--
-- report view for msdyn_relationshipinsightsunifiedconfig
--
create view dbo.[Filteredmsdyn_relationshipinsightsunifiedconfig] 
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
    [msdyn_relationshipinsightsunifiedconfigid],
    [msdyn_usenewconfigexperience],
    [msdyn_usenewconfigexperiencename],
    [new_name],
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
    [msdyn_relationshipinsightsunifiedconfig].[CreatedBy],
    [msdyn_relationshipinsightsunifiedconfig].[CreatedByName],
    [msdyn_relationshipinsightsunifiedconfig].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_relationshipinsightsunifiedconfig].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_relationshipinsightsunifiedconfig].[CreatedOn],
    [msdyn_relationshipinsightsunifiedconfig].[CreatedOnBehalfBy],
    [msdyn_relationshipinsightsunifiedconfig].[CreatedOnBehalfByName],
    [msdyn_relationshipinsightsunifiedconfig].[CreatedOnBehalfByYomiName],
    [msdyn_relationshipinsightsunifiedconfig].[ImportSequenceNumber],
    [msdyn_relationshipinsightsunifiedconfig].[ModifiedBy],
    [msdyn_relationshipinsightsunifiedconfig].[ModifiedByName],
    [msdyn_relationshipinsightsunifiedconfig].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_relationshipinsightsunifiedconfig].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_relationshipinsightsunifiedconfig].[ModifiedOn],
    [msdyn_relationshipinsightsunifiedconfig].[ModifiedOnBehalfBy],
    [msdyn_relationshipinsightsunifiedconfig].[ModifiedOnBehalfByName],
    [msdyn_relationshipinsightsunifiedconfig].[ModifiedOnBehalfByYomiName],
    [msdyn_relationshipinsightsunifiedconfig].[msdyn_relationshipinsightsunifiedconfigId],
    [msdyn_relationshipinsightsunifiedconfig].[msdyn_usenewconfigexperience],
    msdyn_usenewconfigexperiencePLTable.Value,
    [msdyn_relationshipinsightsunifiedconfig].[new_name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_relationshipinsightsunifiedconfig].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_relationshipinsightsunifiedconfig].[OverriddenCreatedOn],
    [msdyn_relationshipinsightsunifiedconfig].[OwnerId],
    --[msdyn_relationshipinsightsunifiedconfig].[OwnerIdDsc]
    0,
    [msdyn_relationshipinsightsunifiedconfig].[OwnerIdName],
    [msdyn_relationshipinsightsunifiedconfig].[OwnerIdType],
    [msdyn_relationshipinsightsunifiedconfig].[OwnerIdYomiName],
    [msdyn_relationshipinsightsunifiedconfig].[OwningBusinessUnit],
    [msdyn_relationshipinsightsunifiedconfig].[OwningTeam],
    [msdyn_relationshipinsightsunifiedconfig].[OwningUser],
    [msdyn_relationshipinsightsunifiedconfig].[statecode],
    statecodePLTable.Value,
    [msdyn_relationshipinsightsunifiedconfig].[statuscode],
    statuscodePLTable.Value,
    [msdyn_relationshipinsightsunifiedconfig].[TimeZoneRuleVersionNumber],
    [msdyn_relationshipinsightsunifiedconfig].[UTCConversionTimeZoneCode],
    [msdyn_relationshipinsightsunifiedconfig].[VersionNumber]
from msdyn_relationshipinsightsunifiedconfig
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_usenewconfigexperiencePLTable] on 
		([msdyn_usenewconfigexperiencePLTable].AttributeName = 'msdyn_usenewconfigexperience'
		and [msdyn_usenewconfigexperiencePLTable].ObjectTypeCode = 10003
		and [msdyn_usenewconfigexperiencePLTable].AttributeValue = [msdyn_relationshipinsightsunifiedconfig].[msdyn_usenewconfigexperience]
		and [msdyn_usenewconfigexperiencePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10003
		and [statecodePLTable].AttributeValue = [msdyn_relationshipinsightsunifiedconfig].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10003
		and [statuscodePLTable].AttributeValue = [msdyn_relationshipinsightsunifiedconfig].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10003) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_relationshipinsightsunifiedconfig].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10003
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
		[msdyn_relationshipinsightsunifiedconfig].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10003)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_relationshipinsightsunifiedconfig].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_relationshipinsightsunifiedconfig].[msdyn_relationshipinsightsunifiedconfigId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10003
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_relationshipinsightsunifiedconfig] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_relationshipinsightsunifiedconfig] TO [CRMReaderRole]
    AS [dbo];

