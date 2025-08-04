

--
-- report view for msdyn_aibfileattacheddata
--
create view dbo.[Filteredmsdyn_AIBFileAttachedData] 
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
    [msdyn_aibdatasetfileidname],
    [msdyn_aibfileattacheddataid],
    [msdyn_data],
    [msdyn_key],
    [msdyn_type],
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
    [msdyn_AIBFileAttachedData].[CreatedBy],
    [msdyn_AIBFileAttachedData].[CreatedByName],
    [msdyn_AIBFileAttachedData].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBFileAttachedData].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBFileAttachedData].[CreatedOn],
    [msdyn_AIBFileAttachedData].[CreatedOnBehalfBy],
    [msdyn_AIBFileAttachedData].[CreatedOnBehalfByName],
    [msdyn_AIBFileAttachedData].[CreatedOnBehalfByYomiName],
    [msdyn_AIBFileAttachedData].[ImportSequenceNumber],
    [msdyn_AIBFileAttachedData].[ModifiedBy],
    [msdyn_AIBFileAttachedData].[ModifiedByName],
    [msdyn_AIBFileAttachedData].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBFileAttachedData].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_AIBFileAttachedData].[ModifiedOn],
    [msdyn_AIBFileAttachedData].[ModifiedOnBehalfBy],
    [msdyn_AIBFileAttachedData].[ModifiedOnBehalfByName],
    [msdyn_AIBFileAttachedData].[ModifiedOnBehalfByYomiName],
    [msdyn_AIBFileAttachedData].[msdyn_AIBDatasetFileId],
    [msdyn_AIBFileAttachedData].[msdyn_AIBDatasetFileIdName],
    [msdyn_AIBFileAttachedData].[msdyn_AIBFileAttachedDataId],
    [msdyn_AIBFileAttachedData].[msdyn_Data],
    [msdyn_AIBFileAttachedData].[msdyn_Key],
    [msdyn_AIBFileAttachedData].[msdyn_Type],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBFileAttachedData].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBFileAttachedData].[OverriddenCreatedOn],
    [msdyn_AIBFileAttachedData].[OwnerId],
    --[msdyn_AIBFileAttachedData].[OwnerIdDsc]
    0,
    [msdyn_AIBFileAttachedData].[OwnerIdName],
    [msdyn_AIBFileAttachedData].[OwnerIdType],
    [msdyn_AIBFileAttachedData].[OwnerIdYomiName],
    [msdyn_AIBFileAttachedData].[OwningBusinessUnit],
    [msdyn_AIBFileAttachedData].[OwningTeam],
    [msdyn_AIBFileAttachedData].[OwningUser],
    [msdyn_AIBFileAttachedData].[statecode],
    statecodePLTable.Value,
    [msdyn_AIBFileAttachedData].[statuscode],
    statuscodePLTable.Value,
    [msdyn_AIBFileAttachedData].[TimeZoneRuleVersionNumber],
    [msdyn_AIBFileAttachedData].[UTCConversionTimeZoneCode],
    [msdyn_AIBFileAttachedData].[VersionNumber]
from msdyn_AIBFileAttachedData
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10067
		and [statecodePLTable].AttributeValue = [msdyn_AIBFileAttachedData].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10067
		and [statuscodePLTable].AttributeValue = [msdyn_AIBFileAttachedData].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10067) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_AIBFileAttachedData].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10067
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
		[msdyn_AIBFileAttachedData].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10067)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_AIBFileAttachedData].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_AIBFileAttachedData].[msdyn_AIBFileAttachedDataId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10067
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBFileAttachedData] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBFileAttachedData] TO [CRMReaderRole]
    AS [dbo];

