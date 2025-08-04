

--
-- report view for msdyn_aibdatasetfile
--
create view dbo.[Filteredmsdyn_AIBDatasetFile] 
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
    [msdyn_aibdatasetfileid],
    [msdyn_aibdatasetid],
    [msdyn_aibdatasetidname],
    [msdyn_aibfileid],
    [msdyn_aibfileidname],
    [msdyn_lastmodifieddate],
    [msdyn_lastmodifieddateutc],
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
    [msdyn_AIBDatasetFile].[CreatedBy],
    [msdyn_AIBDatasetFile].[CreatedByName],
    [msdyn_AIBDatasetFile].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDatasetFile].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBDatasetFile].[CreatedOn],
    [msdyn_AIBDatasetFile].[CreatedOnBehalfBy],
    [msdyn_AIBDatasetFile].[CreatedOnBehalfByName],
    [msdyn_AIBDatasetFile].[CreatedOnBehalfByYomiName],
    [msdyn_AIBDatasetFile].[ImportSequenceNumber],
    [msdyn_AIBDatasetFile].[ModifiedBy],
    [msdyn_AIBDatasetFile].[ModifiedByName],
    [msdyn_AIBDatasetFile].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDatasetFile].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_AIBDatasetFile].[ModifiedOn],
    [msdyn_AIBDatasetFile].[ModifiedOnBehalfBy],
    [msdyn_AIBDatasetFile].[ModifiedOnBehalfByName],
    [msdyn_AIBDatasetFile].[ModifiedOnBehalfByYomiName],
    [msdyn_AIBDatasetFile].[msdyn_AIBDatasetFileId],
    [msdyn_AIBDatasetFile].[msdyn_AIBDatasetId],
    [msdyn_AIBDatasetFile].[msdyn_AIBDatasetIdName],
    [msdyn_AIBDatasetFile].[msdyn_AIBFileId],
    [msdyn_AIBDatasetFile].[msdyn_AIBFileIdName],
    [msdyn_AIBDatasetFile].[msdyn_LastModifiedDate],
        [msdyn_AIBDatasetFile].[msdyn_LastModifiedDate],
    [msdyn_AIBDatasetFile].[msdyn_Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDatasetFile].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBDatasetFile].[OverriddenCreatedOn],
    [msdyn_AIBDatasetFile].[OwnerId],
    --[msdyn_AIBDatasetFile].[OwnerIdDsc]
    0,
    [msdyn_AIBDatasetFile].[OwnerIdName],
    [msdyn_AIBDatasetFile].[OwnerIdType],
    [msdyn_AIBDatasetFile].[OwnerIdYomiName],
    [msdyn_AIBDatasetFile].[OwningBusinessUnit],
    [msdyn_AIBDatasetFile].[OwningTeam],
    [msdyn_AIBDatasetFile].[OwningUser],
    [msdyn_AIBDatasetFile].[statecode],
    statecodePLTable.Value,
    [msdyn_AIBDatasetFile].[statuscode],
    statuscodePLTable.Value,
    [msdyn_AIBDatasetFile].[TimeZoneRuleVersionNumber],
    [msdyn_AIBDatasetFile].[UTCConversionTimeZoneCode],
    [msdyn_AIBDatasetFile].[VersionNumber]
from msdyn_AIBDatasetFile
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10063
		and [statecodePLTable].AttributeValue = [msdyn_AIBDatasetFile].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10063
		and [statuscodePLTable].AttributeValue = [msdyn_AIBDatasetFile].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10063) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_AIBDatasetFile].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10063
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
		[msdyn_AIBDatasetFile].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10063)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_AIBDatasetFile].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_AIBDatasetFile].[msdyn_AIBDatasetFileId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10063
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBDatasetFile] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBDatasetFile] TO [CRMReaderRole]
    AS [dbo];

