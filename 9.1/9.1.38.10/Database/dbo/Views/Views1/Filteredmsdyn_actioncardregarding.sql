

--
-- report view for msdyn_actioncardregarding
--
create view dbo.[Filteredmsdyn_actioncardregarding] 
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
    [msdyn_actioncardid],
    [msdyn_actioncardregardingid],
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
    [msdyn_actioncardregarding].[CreatedBy],
    [msdyn_actioncardregarding].[CreatedByName],
    [msdyn_actioncardregarding].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_actioncardregarding].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_actioncardregarding].[CreatedOn],
    [msdyn_actioncardregarding].[CreatedOnBehalfBy],
    [msdyn_actioncardregarding].[CreatedOnBehalfByName],
    [msdyn_actioncardregarding].[CreatedOnBehalfByYomiName],
    [msdyn_actioncardregarding].[ImportSequenceNumber],
    [msdyn_actioncardregarding].[ModifiedBy],
    [msdyn_actioncardregarding].[ModifiedByName],
    [msdyn_actioncardregarding].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_actioncardregarding].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_actioncardregarding].[ModifiedOn],
    [msdyn_actioncardregarding].[ModifiedOnBehalfBy],
    [msdyn_actioncardregarding].[ModifiedOnBehalfByName],
    [msdyn_actioncardregarding].[ModifiedOnBehalfByYomiName],
    [msdyn_actioncardregarding].[msdyn_actioncardid],
    [msdyn_actioncardregarding].[msdyn_actioncardregardingId],
    [msdyn_actioncardregarding].[msdyn_name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_actioncardregarding].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_actioncardregarding].[OverriddenCreatedOn],
    [msdyn_actioncardregarding].[OwnerId],
    --[msdyn_actioncardregarding].[OwnerIdDsc]
    0,
    [msdyn_actioncardregarding].[OwnerIdName],
    [msdyn_actioncardregarding].[OwnerIdType],
    [msdyn_actioncardregarding].[OwnerIdYomiName],
    [msdyn_actioncardregarding].[OwningBusinessUnit],
    [msdyn_actioncardregarding].[OwningTeam],
    [msdyn_actioncardregarding].[OwningUser],
    [msdyn_actioncardregarding].[statecode],
    statecodePLTable.Value,
    [msdyn_actioncardregarding].[statuscode],
    statuscodePLTable.Value,
    [msdyn_actioncardregarding].[TimeZoneRuleVersionNumber],
    [msdyn_actioncardregarding].[UTCConversionTimeZoneCode],
    [msdyn_actioncardregarding].[VersionNumber]
from msdyn_actioncardregarding
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10094
		and [statecodePLTable].AttributeValue = [msdyn_actioncardregarding].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10094
		and [statuscodePLTable].AttributeValue = [msdyn_actioncardregarding].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10094) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_actioncardregarding].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10094
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
		[msdyn_actioncardregarding].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10094)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_actioncardregarding].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_actioncardregarding].[msdyn_actioncardregardingId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10094
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_actioncardregarding] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_actioncardregarding] TO [CRMReaderRole]
    AS [dbo];

