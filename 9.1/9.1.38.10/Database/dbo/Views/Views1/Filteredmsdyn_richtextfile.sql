

--
-- report view for msdyn_richtextfile
--
create view dbo.[Filteredmsdyn_richtextfile] 
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
    [msdyn_fileblob],
    [msdyn_fileblob_name],
    [msdyn_imageblob],
    [msdyn_imageblobid],
    [msdyn_imageblob_timestamp],
    [msdyn_imageblob_url],
    [msdyn_name],
    [msdyn_parententityname],
    [msdyn_parententity_fieldname],
    [msdyn_parentid],
    [msdyn_richtextfileid],
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
    [msdyn_richtextfile].[CreatedBy],
    [msdyn_richtextfile].[CreatedByName],
    [msdyn_richtextfile].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_richtextfile].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_richtextfile].[CreatedOn],
    [msdyn_richtextfile].[CreatedOnBehalfBy],
    [msdyn_richtextfile].[CreatedOnBehalfByName],
    [msdyn_richtextfile].[CreatedOnBehalfByYomiName],
    [msdyn_richtextfile].[ImportSequenceNumber],
    [msdyn_richtextfile].[ModifiedBy],
    [msdyn_richtextfile].[ModifiedByName],
    [msdyn_richtextfile].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_richtextfile].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_richtextfile].[ModifiedOn],
    [msdyn_richtextfile].[ModifiedOnBehalfBy],
    [msdyn_richtextfile].[ModifiedOnBehalfByName],
    [msdyn_richtextfile].[ModifiedOnBehalfByYomiName],
    [msdyn_richtextfile].[msdyn_fileblob],
    [msdyn_richtextfile].[msdyn_fileblob_Name],
    cast([msdyn_richtextfile].[msdyn_imageblob] as varbinary(max)),
    [msdyn_richtextfile].[msdyn_imageblobId],
    [msdyn_richtextfile].[msdyn_imageblob_Timestamp],
    [msdyn_richtextfile].[msdyn_imageblob_URL],
    [msdyn_richtextfile].[msdyn_name],
    [msdyn_richtextfile].[msdyn_parententityname],
    [msdyn_richtextfile].[msdyn_parententity_fieldname],
    [msdyn_richtextfile].[msdyn_parentid],
    [msdyn_richtextfile].[msdyn_richtextfileId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_richtextfile].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_richtextfile].[OverriddenCreatedOn],
    [msdyn_richtextfile].[OwnerId],
    --[msdyn_richtextfile].[OwnerIdDsc]
    0,
    [msdyn_richtextfile].[OwnerIdName],
    [msdyn_richtextfile].[OwnerIdType],
    [msdyn_richtextfile].[OwnerIdYomiName],
    [msdyn_richtextfile].[OwningBusinessUnit],
    [msdyn_richtextfile].[OwningTeam],
    [msdyn_richtextfile].[OwningUser],
    [msdyn_richtextfile].[statecode],
    statecodePLTable.Value,
    [msdyn_richtextfile].[statuscode],
    statuscodePLTable.Value,
    [msdyn_richtextfile].[TimeZoneRuleVersionNumber],
    [msdyn_richtextfile].[UTCConversionTimeZoneCode],
    [msdyn_richtextfile].[VersionNumber]
from msdyn_richtextfile
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10048
		and [statecodePLTable].AttributeValue = [msdyn_richtextfile].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10048
		and [statuscodePLTable].AttributeValue = [msdyn_richtextfile].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10048) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_richtextfile].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10048
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
		[msdyn_richtextfile].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10048)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_richtextfile].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_richtextfile].[msdyn_richtextfileId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10048
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_richtextfile] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_richtextfile] TO [CRMReaderRole]
    AS [dbo];

