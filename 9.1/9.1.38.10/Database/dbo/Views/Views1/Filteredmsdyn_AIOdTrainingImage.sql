

--
-- report view for msdyn_aiodtrainingimage
--
create view dbo.[Filteredmsdyn_AIOdTrainingImage] 
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
    [msdyn_aiconfigurationid],
    [msdyn_aiconfigurationidname],
    [msdyn_aiodimageid],
    [msdyn_aiodimageidname],
    [msdyn_aiodtrainingimageid],
    [msdyn_lastmodifieddate],
    [msdyn_lastmodifieddateutc],
    [msdyn_name],
    [msdyn_sourcetype],
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
    [msdyn_AIOdTrainingImage].[CreatedBy],
    [msdyn_AIOdTrainingImage].[CreatedByName],
    [msdyn_AIOdTrainingImage].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdTrainingImage].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_AIOdTrainingImage].[CreatedOn],
    [msdyn_AIOdTrainingImage].[CreatedOnBehalfBy],
    [msdyn_AIOdTrainingImage].[CreatedOnBehalfByName],
    [msdyn_AIOdTrainingImage].[CreatedOnBehalfByYomiName],
    [msdyn_AIOdTrainingImage].[ImportSequenceNumber],
    [msdyn_AIOdTrainingImage].[ModifiedBy],
    [msdyn_AIOdTrainingImage].[ModifiedByName],
    [msdyn_AIOdTrainingImage].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdTrainingImage].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_AIOdTrainingImage].[ModifiedOn],
    [msdyn_AIOdTrainingImage].[ModifiedOnBehalfBy],
    [msdyn_AIOdTrainingImage].[ModifiedOnBehalfByName],
    [msdyn_AIOdTrainingImage].[ModifiedOnBehalfByYomiName],
    [msdyn_AIOdTrainingImage].[msdyn_AIConfigurationId],
    [msdyn_AIOdTrainingImage].[msdyn_AIConfigurationIdName],
    [msdyn_AIOdTrainingImage].[msdyn_AIOdImageId],
    [msdyn_AIOdTrainingImage].[msdyn_AIOdImageIdName],
    [msdyn_AIOdTrainingImage].[msdyn_AIOdTrainingImageId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdTrainingImage].[msdyn_LastModifiedDate],
			us.TimeZoneCode),
        [msdyn_AIOdTrainingImage].[msdyn_LastModifiedDate],
    [msdyn_AIOdTrainingImage].[msdyn_name],
    [msdyn_AIOdTrainingImage].[msdyn_SourceType],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdTrainingImage].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_AIOdTrainingImage].[OverriddenCreatedOn],
    [msdyn_AIOdTrainingImage].[OwnerId],
    --[msdyn_AIOdTrainingImage].[OwnerIdDsc]
    0,
    [msdyn_AIOdTrainingImage].[OwnerIdName],
    [msdyn_AIOdTrainingImage].[OwnerIdType],
    [msdyn_AIOdTrainingImage].[OwnerIdYomiName],
    [msdyn_AIOdTrainingImage].[OwningBusinessUnit],
    [msdyn_AIOdTrainingImage].[OwningTeam],
    [msdyn_AIOdTrainingImage].[OwningUser],
    [msdyn_AIOdTrainingImage].[statecode],
    statecodePLTable.Value,
    [msdyn_AIOdTrainingImage].[statuscode],
    statuscodePLTable.Value,
    [msdyn_AIOdTrainingImage].[TimeZoneRuleVersionNumber],
    [msdyn_AIOdTrainingImage].[UTCConversionTimeZoneCode],
    [msdyn_AIOdTrainingImage].[VersionNumber]
from msdyn_AIOdTrainingImage
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10072
		and [statecodePLTable].AttributeValue = [msdyn_AIOdTrainingImage].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10072
		and [statuscodePLTable].AttributeValue = [msdyn_AIOdTrainingImage].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10072) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_AIOdTrainingImage].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10072
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
		[msdyn_AIOdTrainingImage].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10072)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_AIOdTrainingImage].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_AIOdTrainingImage].[msdyn_AIOdTrainingImageId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10072
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIOdTrainingImage] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIOdTrainingImage] TO [CRMReaderRole]
    AS [dbo];

