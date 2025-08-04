

--
-- report view for msdyn_autocapturerule
--
create view dbo.[Filteredmsdyn_autocapturerule] 
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
    [msdyn_autocaptureruleid],
    [msdyn_name],
    [msdyn_ruledatasource],
    [msdyn_rulename],
    [msdyn_rulevalue],
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
    [msdyn_autocapturerule].[CreatedBy],
    [msdyn_autocapturerule].[CreatedByName],
    [msdyn_autocapturerule].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_autocapturerule].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_autocapturerule].[CreatedOn],
    [msdyn_autocapturerule].[CreatedOnBehalfBy],
    [msdyn_autocapturerule].[CreatedOnBehalfByName],
    [msdyn_autocapturerule].[CreatedOnBehalfByYomiName],
    [msdyn_autocapturerule].[ImportSequenceNumber],
    [msdyn_autocapturerule].[ModifiedBy],
    [msdyn_autocapturerule].[ModifiedByName],
    [msdyn_autocapturerule].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_autocapturerule].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_autocapturerule].[ModifiedOn],
    [msdyn_autocapturerule].[ModifiedOnBehalfBy],
    [msdyn_autocapturerule].[ModifiedOnBehalfByName],
    [msdyn_autocapturerule].[ModifiedOnBehalfByYomiName],
    [msdyn_autocapturerule].[msdyn_autocaptureruleId],
    [msdyn_autocapturerule].[msdyn_name],
    [msdyn_autocapturerule].[msdyn_ruledatasource],
    [msdyn_autocapturerule].[msdyn_rulename],
    [msdyn_autocapturerule].[msdyn_rulevalue],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_autocapturerule].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_autocapturerule].[OverriddenCreatedOn],
    [msdyn_autocapturerule].[OwnerId],
    --[msdyn_autocapturerule].[OwnerIdDsc]
    0,
    [msdyn_autocapturerule].[OwnerIdName],
    [msdyn_autocapturerule].[OwnerIdType],
    [msdyn_autocapturerule].[OwnerIdYomiName],
    [msdyn_autocapturerule].[OwningBusinessUnit],
    [msdyn_autocapturerule].[OwningTeam],
    [msdyn_autocapturerule].[OwningUser],
    [msdyn_autocapturerule].[statecode],
    statecodePLTable.Value,
    [msdyn_autocapturerule].[statuscode],
    statuscodePLTable.Value,
    [msdyn_autocapturerule].[TimeZoneRuleVersionNumber],
    [msdyn_autocapturerule].[UTCConversionTimeZoneCode],
    [msdyn_autocapturerule].[VersionNumber]
from msdyn_autocapturerule
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10099
		and [statecodePLTable].AttributeValue = [msdyn_autocapturerule].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10099
		and [statuscodePLTable].AttributeValue = [msdyn_autocapturerule].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10099) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_autocapturerule].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10099
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
		[msdyn_autocapturerule].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10099)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_autocapturerule].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_autocapturerule].[msdyn_autocaptureruleId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10099
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_autocapturerule] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_autocapturerule] TO [CRMReaderRole]
    AS [dbo];

