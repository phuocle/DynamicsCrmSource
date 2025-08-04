

--
-- report view for msdynce_botcontent
--
create view dbo.[Filteredmsdynce_botcontent] 
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
    [msdynce_autonumber],
    [msdynce_botcontentid],
    [msdynce_botid],
    [msdynce_state],
    [msdynce_statename],
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
    [msdynce_botcontent].[CreatedBy],
    [msdynce_botcontent].[CreatedByName],
    [msdynce_botcontent].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdynce_botcontent].[CreatedOn],
			us.TimeZoneCode),
        [msdynce_botcontent].[CreatedOn],
    [msdynce_botcontent].[CreatedOnBehalfBy],
    [msdynce_botcontent].[CreatedOnBehalfByName],
    [msdynce_botcontent].[CreatedOnBehalfByYomiName],
    [msdynce_botcontent].[ImportSequenceNumber],
    [msdynce_botcontent].[ModifiedBy],
    [msdynce_botcontent].[ModifiedByName],
    [msdynce_botcontent].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdynce_botcontent].[ModifiedOn],
			us.TimeZoneCode),
        [msdynce_botcontent].[ModifiedOn],
    [msdynce_botcontent].[ModifiedOnBehalfBy],
    [msdynce_botcontent].[ModifiedOnBehalfByName],
    [msdynce_botcontent].[ModifiedOnBehalfByYomiName],
    [msdynce_botcontent].[msdynce_autonumber],
    [msdynce_botcontent].[msdynce_botcontentId],
    [msdynce_botcontent].[msdynce_botid],
    [msdynce_botcontent].[msdynce_state],
    msdynce_statePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdynce_botcontent].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdynce_botcontent].[OverriddenCreatedOn],
    [msdynce_botcontent].[OwnerId],
    --[msdynce_botcontent].[OwnerIdDsc]
    0,
    [msdynce_botcontent].[OwnerIdName],
    [msdynce_botcontent].[OwnerIdType],
    [msdynce_botcontent].[OwnerIdYomiName],
    [msdynce_botcontent].[OwningBusinessUnit],
    [msdynce_botcontent].[OwningTeam],
    [msdynce_botcontent].[OwningUser],
    [msdynce_botcontent].[statecode],
    statecodePLTable.Value,
    [msdynce_botcontent].[statuscode],
    statuscodePLTable.Value,
    [msdynce_botcontent].[TimeZoneRuleVersionNumber],
    [msdynce_botcontent].[UTCConversionTimeZoneCode],
    [msdynce_botcontent].[VersionNumber]
from msdynce_botcontent
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdynce_statePLTable] on 
		([msdynce_statePLTable].AttributeName = 'msdynce_state'
		and [msdynce_statePLTable].ObjectTypeCode = 10040
		and [msdynce_statePLTable].AttributeValue = [msdynce_botcontent].[msdynce_state]
		and [msdynce_statePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10040
		and [statecodePLTable].AttributeValue = [msdynce_botcontent].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10040
		and [statuscodePLTable].AttributeValue = [msdynce_botcontent].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10040) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdynce_botcontent].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10040
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
		[msdynce_botcontent].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10040)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdynce_botcontent].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdynce_botcontent].[msdynce_botcontentId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10040
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdynce_botcontent] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdynce_botcontent] TO [CRMReaderRole]
    AS [dbo];

