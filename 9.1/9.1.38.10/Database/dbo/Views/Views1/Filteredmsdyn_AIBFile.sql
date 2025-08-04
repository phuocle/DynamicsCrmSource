

--
-- report view for msdyn_aibfile
--
create view dbo.[Filteredmsdyn_AIBFile] 
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
    [msdyn_aibdatasetscontainerid],
    [msdyn_aibdatasetscontaineridname],
    [msdyn_aibfileid],
    [msdyn_checksum],
    [msdyn_file],
    [msdyn_file_name],
    [msdyn_image],
    [msdyn_imageid],
    [msdyn_image_timestamp],
    [msdyn_image_url],
    [msdyn_importmetadata],
    [msdyn_mimetype],
    [msdyn_name],
    [msdyn_size],
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
    [msdyn_AIBFile].[CreatedBy],
    [msdyn_AIBFile].[CreatedByName],
    [msdyn_AIBFile].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBFile].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBFile].[CreatedOn],
    [msdyn_AIBFile].[CreatedOnBehalfBy],
    [msdyn_AIBFile].[CreatedOnBehalfByName],
    [msdyn_AIBFile].[CreatedOnBehalfByYomiName],
    [msdyn_AIBFile].[ImportSequenceNumber],
    [msdyn_AIBFile].[ModifiedBy],
    [msdyn_AIBFile].[ModifiedByName],
    [msdyn_AIBFile].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBFile].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_AIBFile].[ModifiedOn],
    [msdyn_AIBFile].[ModifiedOnBehalfBy],
    [msdyn_AIBFile].[ModifiedOnBehalfByName],
    [msdyn_AIBFile].[ModifiedOnBehalfByYomiName],
    [msdyn_AIBFile].[msdyn_AIBDatasetsContainerId],
    [msdyn_AIBFile].[msdyn_AIBDatasetsContainerIdName],
    [msdyn_AIBFile].[msdyn_AIBFileId],
    [msdyn_AIBFile].[msdyn_Checksum],
    [msdyn_AIBFile].[msdyn_File],
    [msdyn_AIBFile].[msdyn_File_Name],
    cast([msdyn_AIBFile].[msdyn_Image] as varbinary(max)),
    [msdyn_AIBFile].[msdyn_ImageId],
    [msdyn_AIBFile].[msdyn_Image_Timestamp],
    [msdyn_AIBFile].[msdyn_Image_URL],
    [msdyn_AIBFile].[msdyn_ImportMetadata],
    [msdyn_AIBFile].[msdyn_MimeType],
    [msdyn_AIBFile].[msdyn_Name],
    [msdyn_AIBFile].[msdyn_Size],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBFile].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBFile].[OverriddenCreatedOn],
    [msdyn_AIBFile].[OwnerId],
    --[msdyn_AIBFile].[OwnerIdDsc]
    0,
    [msdyn_AIBFile].[OwnerIdName],
    [msdyn_AIBFile].[OwnerIdType],
    [msdyn_AIBFile].[OwnerIdYomiName],
    [msdyn_AIBFile].[OwningBusinessUnit],
    [msdyn_AIBFile].[OwningTeam],
    [msdyn_AIBFile].[OwningUser],
    [msdyn_AIBFile].[statecode],
    statecodePLTable.Value,
    [msdyn_AIBFile].[statuscode],
    statuscodePLTable.Value,
    [msdyn_AIBFile].[TimeZoneRuleVersionNumber],
    [msdyn_AIBFile].[UTCConversionTimeZoneCode],
    [msdyn_AIBFile].[VersionNumber]
from msdyn_AIBFile
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10066
		and [statecodePLTable].AttributeValue = [msdyn_AIBFile].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10066
		and [statuscodePLTable].AttributeValue = [msdyn_AIBFile].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10066) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_AIBFile].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10066
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
		[msdyn_AIBFile].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10066)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_AIBFile].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_AIBFile].[msdyn_AIBFileId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10066
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBFile] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBFile] TO [CRMReaderRole]
    AS [dbo];

