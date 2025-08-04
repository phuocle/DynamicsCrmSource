

--
-- report view for msdyn_aiodimage
--
create view dbo.[Filteredmsdyn_AIOdImage] 
(
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [msdyn_aiodimageid],
    [msdyn_checksum],
    [msdyn_description],
    [msdyn_metadata],
    [msdyn_name],
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
    [msdyn_AIOdImage].[CreatedBy],
    [msdyn_AIOdImage].[CreatedByName],
    [msdyn_AIOdImage].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdImage].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_AIOdImage].[CreatedOn],
    [msdyn_AIOdImage].[CreatedOnBehalfBy],
    [msdyn_AIOdImage].[CreatedOnBehalfByName],
    [msdyn_AIOdImage].[CreatedOnBehalfByYomiName],
    cast([msdyn_AIOdImage].[EntityImage] as varbinary(max)),
    [msdyn_AIOdImage].[EntityImageId],
    [msdyn_AIOdImage].[EntityImage_Timestamp],
    [msdyn_AIOdImage].[EntityImage_URL],
    [msdyn_AIOdImage].[ImportSequenceNumber],
    [msdyn_AIOdImage].[ModifiedBy],
    [msdyn_AIOdImage].[ModifiedByName],
    [msdyn_AIOdImage].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdImage].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_AIOdImage].[ModifiedOn],
    [msdyn_AIOdImage].[ModifiedOnBehalfBy],
    [msdyn_AIOdImage].[ModifiedOnBehalfByName],
    [msdyn_AIOdImage].[ModifiedOnBehalfByYomiName],
    [msdyn_AIOdImage].[msdyn_AIOdImageId],
    [msdyn_AIOdImage].[msdyn_Checksum],
    [msdyn_AIOdImage].[msdyn_Description],
    [msdyn_AIOdImage].[msdyn_Metadata],
    [msdyn_AIOdImage].[msdyn_name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdImage].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_AIOdImage].[OverriddenCreatedOn],
    [msdyn_AIOdImage].[OwnerId],
    --[msdyn_AIOdImage].[OwnerIdDsc]
    0,
    [msdyn_AIOdImage].[OwnerIdName],
    [msdyn_AIOdImage].[OwnerIdType],
    [msdyn_AIOdImage].[OwnerIdYomiName],
    [msdyn_AIOdImage].[OwningBusinessUnit],
    [msdyn_AIOdImage].[OwningTeam],
    [msdyn_AIOdImage].[OwningUser],
    [msdyn_AIOdImage].[statecode],
    statecodePLTable.Value,
    [msdyn_AIOdImage].[statuscode],
    statuscodePLTable.Value,
    [msdyn_AIOdImage].[TimeZoneRuleVersionNumber],
    [msdyn_AIOdImage].[UTCConversionTimeZoneCode],
    [msdyn_AIOdImage].[VersionNumber]
from msdyn_AIOdImage
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10069
		and [statecodePLTable].AttributeValue = [msdyn_AIOdImage].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10069
		and [statuscodePLTable].AttributeValue = [msdyn_AIOdImage].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10069) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_AIOdImage].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10069
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
		[msdyn_AIOdImage].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10069)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_AIOdImage].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_AIOdImage].[msdyn_AIOdImageId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10069
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIOdImage] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIOdImage] TO [CRMReaderRole]
    AS [dbo];

