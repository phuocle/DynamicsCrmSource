

--
-- report view for msdyn_aibdatasetrecord
--
create view dbo.[Filteredmsdyn_AIBDatasetRecord] 
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
    [msdyn_aibdatasetrecordid],
    [msdyn_aibdatasetsid],
    [msdyn_aibdatasetsidname],
    [msdyn_data],
    [msdyn_name],
    [msdyn_recordtype],
    [msdyn_recordtypename],
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
    [msdyn_AIBDatasetRecord].[CreatedBy],
    [msdyn_AIBDatasetRecord].[CreatedByName],
    [msdyn_AIBDatasetRecord].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDatasetRecord].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBDatasetRecord].[CreatedOn],
    [msdyn_AIBDatasetRecord].[CreatedOnBehalfBy],
    [msdyn_AIBDatasetRecord].[CreatedOnBehalfByName],
    [msdyn_AIBDatasetRecord].[CreatedOnBehalfByYomiName],
    [msdyn_AIBDatasetRecord].[ImportSequenceNumber],
    [msdyn_AIBDatasetRecord].[ModifiedBy],
    [msdyn_AIBDatasetRecord].[ModifiedByName],
    [msdyn_AIBDatasetRecord].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDatasetRecord].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_AIBDatasetRecord].[ModifiedOn],
    [msdyn_AIBDatasetRecord].[ModifiedOnBehalfBy],
    [msdyn_AIBDatasetRecord].[ModifiedOnBehalfByName],
    [msdyn_AIBDatasetRecord].[ModifiedOnBehalfByYomiName],
    [msdyn_AIBDatasetRecord].[msdyn_AIBDatasetRecordId],
    [msdyn_AIBDatasetRecord].[msdyn_AIBDatasetsId],
    [msdyn_AIBDatasetRecord].[msdyn_AIBDatasetsIdName],
    [msdyn_AIBDatasetRecord].[msdyn_Data],
    [msdyn_AIBDatasetRecord].[msdyn_Name],
    [msdyn_AIBDatasetRecord].[msdyn_RecordType],
    msdyn_RecordTypePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDatasetRecord].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBDatasetRecord].[OverriddenCreatedOn],
    [msdyn_AIBDatasetRecord].[OwnerId],
    --[msdyn_AIBDatasetRecord].[OwnerIdDsc]
    0,
    [msdyn_AIBDatasetRecord].[OwnerIdName],
    [msdyn_AIBDatasetRecord].[OwnerIdType],
    [msdyn_AIBDatasetRecord].[OwnerIdYomiName],
    [msdyn_AIBDatasetRecord].[OwningBusinessUnit],
    [msdyn_AIBDatasetRecord].[OwningTeam],
    [msdyn_AIBDatasetRecord].[OwningUser],
    [msdyn_AIBDatasetRecord].[statecode],
    statecodePLTable.Value,
    [msdyn_AIBDatasetRecord].[statuscode],
    statuscodePLTable.Value,
    [msdyn_AIBDatasetRecord].[TimeZoneRuleVersionNumber],
    [msdyn_AIBDatasetRecord].[UTCConversionTimeZoneCode],
    [msdyn_AIBDatasetRecord].[VersionNumber]
from msdyn_AIBDatasetRecord
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_RecordTypePLTable] on 
		([msdyn_RecordTypePLTable].AttributeName = 'msdyn_recordtype'
		and [msdyn_RecordTypePLTable].ObjectTypeCode = 10064
		and [msdyn_RecordTypePLTable].AttributeValue = [msdyn_AIBDatasetRecord].[msdyn_RecordType]
		and [msdyn_RecordTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10064
		and [statecodePLTable].AttributeValue = [msdyn_AIBDatasetRecord].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10064
		and [statuscodePLTable].AttributeValue = [msdyn_AIBDatasetRecord].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10064) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_AIBDatasetRecord].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10064
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
		[msdyn_AIBDatasetRecord].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10064)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_AIBDatasetRecord].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_AIBDatasetRecord].[msdyn_AIBDatasetRecordId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10064
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBDatasetRecord] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBDatasetRecord] TO [CRMReaderRole]
    AS [dbo];

