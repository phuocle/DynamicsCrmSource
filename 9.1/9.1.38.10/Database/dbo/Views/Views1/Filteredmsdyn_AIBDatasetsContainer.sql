

--
-- report view for msdyn_aibdatasetscontainer
--
create view dbo.[Filteredmsdyn_AIBDatasetsContainer] 
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
    [msdyn_aimodelid],
    [msdyn_aimodelidname],
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
    [msdyn_AIBDatasetsContainer].[CreatedBy],
    [msdyn_AIBDatasetsContainer].[CreatedByName],
    [msdyn_AIBDatasetsContainer].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDatasetsContainer].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBDatasetsContainer].[CreatedOn],
    [msdyn_AIBDatasetsContainer].[CreatedOnBehalfBy],
    [msdyn_AIBDatasetsContainer].[CreatedOnBehalfByName],
    [msdyn_AIBDatasetsContainer].[CreatedOnBehalfByYomiName],
    [msdyn_AIBDatasetsContainer].[ImportSequenceNumber],
    [msdyn_AIBDatasetsContainer].[ModifiedBy],
    [msdyn_AIBDatasetsContainer].[ModifiedByName],
    [msdyn_AIBDatasetsContainer].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDatasetsContainer].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_AIBDatasetsContainer].[ModifiedOn],
    [msdyn_AIBDatasetsContainer].[ModifiedOnBehalfBy],
    [msdyn_AIBDatasetsContainer].[ModifiedOnBehalfByName],
    [msdyn_AIBDatasetsContainer].[ModifiedOnBehalfByYomiName],
    [msdyn_AIBDatasetsContainer].[msdyn_AIBDatasetsContainerId],
    [msdyn_AIBDatasetsContainer].[msdyn_AIModelId],
    [msdyn_AIBDatasetsContainer].[msdyn_AIModelIdName],
    [msdyn_AIBDatasetsContainer].[msdyn_Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDatasetsContainer].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBDatasetsContainer].[OverriddenCreatedOn],
    [msdyn_AIBDatasetsContainer].[OwnerId],
    --[msdyn_AIBDatasetsContainer].[OwnerIdDsc]
    0,
    [msdyn_AIBDatasetsContainer].[OwnerIdName],
    [msdyn_AIBDatasetsContainer].[OwnerIdType],
    [msdyn_AIBDatasetsContainer].[OwnerIdYomiName],
    [msdyn_AIBDatasetsContainer].[OwningBusinessUnit],
    [msdyn_AIBDatasetsContainer].[OwningTeam],
    [msdyn_AIBDatasetsContainer].[OwningUser],
    [msdyn_AIBDatasetsContainer].[statecode],
    statecodePLTable.Value,
    [msdyn_AIBDatasetsContainer].[statuscode],
    statuscodePLTable.Value,
    [msdyn_AIBDatasetsContainer].[TimeZoneRuleVersionNumber],
    [msdyn_AIBDatasetsContainer].[UTCConversionTimeZoneCode],
    [msdyn_AIBDatasetsContainer].[VersionNumber]
from msdyn_AIBDatasetsContainer
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10065
		and [statecodePLTable].AttributeValue = [msdyn_AIBDatasetsContainer].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10065
		and [statuscodePLTable].AttributeValue = [msdyn_AIBDatasetsContainer].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10065) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_AIBDatasetsContainer].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10065
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
		[msdyn_AIBDatasetsContainer].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10065)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_AIBDatasetsContainer].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_AIBDatasetsContainer].[msdyn_AIBDatasetsContainerId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10065
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBDatasetsContainer] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBDatasetsContainer] TO [CRMReaderRole]
    AS [dbo];

