

--
-- report view for msdyn_postalbum
--
create view dbo.[Filteredmsdyn_PostAlbum] (
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
    [msdyn_postalbumid],
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
    [msdyn_PostAlbum].[CreatedBy],
    [msdyn_PostAlbum].[CreatedByName],
    [msdyn_PostAlbum].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_PostAlbum].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_PostAlbum].[CreatedOn],
    [msdyn_PostAlbum].[CreatedOnBehalfBy],
    [msdyn_PostAlbum].[CreatedOnBehalfByName],
    [msdyn_PostAlbum].[CreatedOnBehalfByYomiName],
    [msdyn_PostAlbum].[ImportSequenceNumber],
    [msdyn_PostAlbum].[ModifiedBy],
    [msdyn_PostAlbum].[ModifiedByName],
    [msdyn_PostAlbum].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_PostAlbum].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_PostAlbum].[ModifiedOn],
    [msdyn_PostAlbum].[ModifiedOnBehalfBy],
    [msdyn_PostAlbum].[ModifiedOnBehalfByName],
    [msdyn_PostAlbum].[ModifiedOnBehalfByYomiName],
    [msdyn_PostAlbum].[msdyn_name],
    [msdyn_PostAlbum].[msdyn_PostAlbumId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_PostAlbum].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_PostAlbum].[OverriddenCreatedOn],
    [msdyn_PostAlbum].[OwnerId],
    --[msdyn_PostAlbum].[OwnerIdDsc]
    0,
    [msdyn_PostAlbum].[OwnerIdName],
    [msdyn_PostAlbum].[OwnerIdType],
    [msdyn_PostAlbum].[OwnerIdYomiName],
    [msdyn_PostAlbum].[OwningBusinessUnit],
    [msdyn_PostAlbum].[OwningTeam],
    [msdyn_PostAlbum].[OwningUser],
    [msdyn_PostAlbum].[statecode],
    statecodePLTable.Value,
    [msdyn_PostAlbum].[statuscode],
    statuscodePLTable.Value,
    [msdyn_PostAlbum].[TimeZoneRuleVersionNumber],
    [msdyn_PostAlbum].[UTCConversionTimeZoneCode],
    [msdyn_PostAlbum].[VersionNumber]
from msdyn_PostAlbum
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10000
		and [statecodePLTable].AttributeValue = [msdyn_PostAlbum].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10000
		and [statuscodePLTable].AttributeValue = [msdyn_PostAlbum].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10000) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[msdyn_PostAlbum].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10000
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
		[msdyn_PostAlbum].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 10000)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_PostAlbum].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_PostAlbum].[msdyn_PostAlbumId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 10000 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_PostAlbum] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_PostAlbum] TO [CRMReaderRole]
    AS [dbo];

