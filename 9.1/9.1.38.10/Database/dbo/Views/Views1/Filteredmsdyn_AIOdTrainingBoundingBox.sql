

--
-- report view for msdyn_aiodtrainingboundingbox
--
create view dbo.[Filteredmsdyn_AIOdTrainingBoundingBox] 
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
    [msdyn_aiodlabelid],
    [msdyn_aiodlabelidname],
    [msdyn_aiodtrainingboundingboxid],
    [msdyn_aiodtrainingimageid],
    [msdyn_aiodtrainingimageidname],
    [msdyn_height],
    [msdyn_left],
    [msdyn_name],
    [msdyn_top],
    [msdyn_width],
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
    [msdyn_AIOdTrainingBoundingBox].[CreatedBy],
    [msdyn_AIOdTrainingBoundingBox].[CreatedByName],
    [msdyn_AIOdTrainingBoundingBox].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdTrainingBoundingBox].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_AIOdTrainingBoundingBox].[CreatedOn],
    [msdyn_AIOdTrainingBoundingBox].[CreatedOnBehalfBy],
    [msdyn_AIOdTrainingBoundingBox].[CreatedOnBehalfByName],
    [msdyn_AIOdTrainingBoundingBox].[CreatedOnBehalfByYomiName],
    [msdyn_AIOdTrainingBoundingBox].[ImportSequenceNumber],
    [msdyn_AIOdTrainingBoundingBox].[ModifiedBy],
    [msdyn_AIOdTrainingBoundingBox].[ModifiedByName],
    [msdyn_AIOdTrainingBoundingBox].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdTrainingBoundingBox].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_AIOdTrainingBoundingBox].[ModifiedOn],
    [msdyn_AIOdTrainingBoundingBox].[ModifiedOnBehalfBy],
    [msdyn_AIOdTrainingBoundingBox].[ModifiedOnBehalfByName],
    [msdyn_AIOdTrainingBoundingBox].[ModifiedOnBehalfByYomiName],
    [msdyn_AIOdTrainingBoundingBox].[msdyn_AIOdLabelId],
    [msdyn_AIOdTrainingBoundingBox].[msdyn_AIOdLabelIdName],
    [msdyn_AIOdTrainingBoundingBox].[msdyn_AIOdTrainingBoundingBoxId],
    [msdyn_AIOdTrainingBoundingBox].[msdyn_AIOdTrainingImageId],
    [msdyn_AIOdTrainingBoundingBox].[msdyn_AIOdTrainingImageIdName],
    [msdyn_AIOdTrainingBoundingBox].[msdyn_Height],
    [msdyn_AIOdTrainingBoundingBox].[msdyn_Left],
    [msdyn_AIOdTrainingBoundingBox].[msdyn_name],
    [msdyn_AIOdTrainingBoundingBox].[msdyn_Top],
    [msdyn_AIOdTrainingBoundingBox].[msdyn_Width],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdTrainingBoundingBox].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_AIOdTrainingBoundingBox].[OverriddenCreatedOn],
    [msdyn_AIOdTrainingBoundingBox].[OwnerId],
    --[msdyn_AIOdTrainingBoundingBox].[OwnerIdDsc]
    0,
    [msdyn_AIOdTrainingBoundingBox].[OwnerIdName],
    [msdyn_AIOdTrainingBoundingBox].[OwnerIdType],
    [msdyn_AIOdTrainingBoundingBox].[OwnerIdYomiName],
    [msdyn_AIOdTrainingBoundingBox].[OwningBusinessUnit],
    [msdyn_AIOdTrainingBoundingBox].[OwningTeam],
    [msdyn_AIOdTrainingBoundingBox].[OwningUser],
    [msdyn_AIOdTrainingBoundingBox].[statecode],
    statecodePLTable.Value,
    [msdyn_AIOdTrainingBoundingBox].[statuscode],
    statuscodePLTable.Value,
    [msdyn_AIOdTrainingBoundingBox].[TimeZoneRuleVersionNumber],
    [msdyn_AIOdTrainingBoundingBox].[UTCConversionTimeZoneCode],
    [msdyn_AIOdTrainingBoundingBox].[VersionNumber]
from msdyn_AIOdTrainingBoundingBox
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10071
		and [statecodePLTable].AttributeValue = [msdyn_AIOdTrainingBoundingBox].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10071
		and [statuscodePLTable].AttributeValue = [msdyn_AIOdTrainingBoundingBox].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10071) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_AIOdTrainingBoundingBox].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10071
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
		[msdyn_AIOdTrainingBoundingBox].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10071)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_AIOdTrainingBoundingBox].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_AIOdTrainingBoundingBox].[msdyn_AIOdTrainingBoundingBoxId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10071
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIOdTrainingBoundingBox] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIOdTrainingBoundingBox] TO [CRMReaderRole]
    AS [dbo];

