

--
-- report view for msdyn_aibdataset
--
create view dbo.[Filteredmsdyn_AIBDataset] 
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
    [msdyn_aibdatasetid],
    [msdyn_aibdatasetscontainerid],
    [msdyn_aibdatasetscontaineridname],
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
    [msdyn_AIBDataset].[CreatedBy],
    [msdyn_AIBDataset].[CreatedByName],
    [msdyn_AIBDataset].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDataset].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBDataset].[CreatedOn],
    [msdyn_AIBDataset].[CreatedOnBehalfBy],
    [msdyn_AIBDataset].[CreatedOnBehalfByName],
    [msdyn_AIBDataset].[CreatedOnBehalfByYomiName],
    [msdyn_AIBDataset].[ImportSequenceNumber],
    [msdyn_AIBDataset].[ModifiedBy],
    [msdyn_AIBDataset].[ModifiedByName],
    [msdyn_AIBDataset].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDataset].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_AIBDataset].[ModifiedOn],
    [msdyn_AIBDataset].[ModifiedOnBehalfBy],
    [msdyn_AIBDataset].[ModifiedOnBehalfByName],
    [msdyn_AIBDataset].[ModifiedOnBehalfByYomiName],
    [msdyn_AIBDataset].[msdyn_AIBDatasetId],
    [msdyn_AIBDataset].[msdyn_AIBDatasetsContainerId],
    [msdyn_AIBDataset].[msdyn_AIBDatasetsContainerIdName],
    [msdyn_AIBDataset].[msdyn_Metadata],
    [msdyn_AIBDataset].[msdyn_Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIBDataset].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_AIBDataset].[OverriddenCreatedOn],
    [msdyn_AIBDataset].[OwnerId],
    --[msdyn_AIBDataset].[OwnerIdDsc]
    0,
    [msdyn_AIBDataset].[OwnerIdName],
    [msdyn_AIBDataset].[OwnerIdType],
    [msdyn_AIBDataset].[OwnerIdYomiName],
    [msdyn_AIBDataset].[OwningBusinessUnit],
    [msdyn_AIBDataset].[OwningTeam],
    [msdyn_AIBDataset].[OwningUser],
    [msdyn_AIBDataset].[statecode],
    statecodePLTable.Value,
    [msdyn_AIBDataset].[statuscode],
    statuscodePLTable.Value,
    [msdyn_AIBDataset].[TimeZoneRuleVersionNumber],
    [msdyn_AIBDataset].[UTCConversionTimeZoneCode],
    [msdyn_AIBDataset].[VersionNumber]
from msdyn_AIBDataset
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10062
		and [statecodePLTable].AttributeValue = [msdyn_AIBDataset].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10062
		and [statuscodePLTable].AttributeValue = [msdyn_AIBDataset].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10062) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_AIBDataset].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10062
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
		[msdyn_AIBDataset].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10062)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_AIBDataset].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_AIBDataset].[msdyn_AIBDatasetId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10062
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBDataset] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIBDataset] TO [CRMReaderRole]
    AS [dbo];

