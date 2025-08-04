

--
-- report view for connectionreference
--
create view dbo.[Filteredconnectionreference] 
(
    [componentidunique],
    [componentstate],
    [componentstatename],
    [connectionid],
    [connectionreferencedisplayname],
    [connectionreferenceid],
    [connectionreferencelogicalname],
    [connectorid],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customconnectorid],
    [customconnectoridname],
    [description],
    [importsequencenumber],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [connectionreference].[ComponentIdUnique],
    [connectionreference].[ComponentState],
    ComponentStatePLTable.Value,
    [connectionreference].[ConnectionId],
    [connectionreference].[connectionreferencedisplayname],
    [connectionreference].[connectionreferenceId],
    [connectionreference].[ConnectionReferenceLogicalName],
    [connectionreference].[ConnectorId],
    [connectionreference].[CreatedBy],
    [connectionreference].[CreatedByName],
    [connectionreference].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([connectionreference].[CreatedOn],
			us.TimeZoneCode),
        [connectionreference].[CreatedOn],
    [connectionreference].[CreatedOnBehalfBy],
    [connectionreference].[CreatedOnBehalfByName],
    [connectionreference].[CreatedOnBehalfByYomiName],
    [connectionreference].[CustomConnectorId],
    [connectionreference].[CustomConnectorIdName],
    [connectionreference].[Description],
    [connectionreference].[ImportSequenceNumber],
    [connectionreference].[IsCustomizable],
    [connectionreference].[IsManaged],
    IsManagedPLTable.Value,
    [connectionreference].[ModifiedBy],
    [connectionreference].[ModifiedByName],
    [connectionreference].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([connectionreference].[ModifiedOn],
			us.TimeZoneCode),
        [connectionreference].[ModifiedOn],
    [connectionreference].[ModifiedOnBehalfBy],
    [connectionreference].[ModifiedOnBehalfByName],
    [connectionreference].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([connectionreference].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [connectionreference].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([connectionreference].[OverwriteTime],
			us.TimeZoneCode),
        [connectionreference].[OverwriteTime],
    [connectionreference].[OwnerId],
    --[connectionreference].[OwnerIdDsc]
    0,
    [connectionreference].[OwnerIdName],
    [connectionreference].[OwnerIdType],
    [connectionreference].[OwnerIdYomiName],
    [connectionreference].[OwningBusinessUnit],
    [connectionreference].[OwningTeam],
    [connectionreference].[OwningUser],
    [connectionreference].[SolutionId],
    [connectionreference].[statecode],
    statecodePLTable.Value,
    [connectionreference].[statuscode],
    statuscodePLTable.Value,
    [connectionreference].[TimeZoneRuleVersionNumber],
    [connectionreference].[UTCConversionTimeZoneCode],
    [connectionreference].[VersionNumber]
from connectionreference
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10037
		and [ComponentStatePLTable].AttributeValue = [connectionreference].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10037
		and [IsManagedPLTable].AttributeValue = [connectionreference].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10037
		and [statecodePLTable].AttributeValue = [connectionreference].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10037
		and [statuscodePLTable].AttributeValue = [connectionreference].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10037) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[connectionreference].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10037
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
		[connectionreference].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10037)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[connectionreference].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[connectionreference].[connectionreferenceId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10037
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredconnectionreference] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredconnectionreference] TO [CRMReaderRole]
    AS [dbo];

