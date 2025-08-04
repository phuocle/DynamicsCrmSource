

--
-- report view for msdyn_salesinsightssettings
--
create view dbo.[Filteredmsdyn_salesinsightssettings] 
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
    [msdyn_islicensepurchased],
    [msdyn_islicensepurchasedname],
    [msdyn_isoctpreviewenabled],
    [msdyn_isoctpreviewenabledname],
    [msdyn_ispreviewenabled],
    [msdyn_ispreviewenabledname],
    [msdyn_name],
    [msdyn_salesinsightssettingsid],
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
    [msdyn_salesinsightssettings].[CreatedBy],
    [msdyn_salesinsightssettings].[CreatedByName],
    [msdyn_salesinsightssettings].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_salesinsightssettings].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_salesinsightssettings].[CreatedOn],
    [msdyn_salesinsightssettings].[CreatedOnBehalfBy],
    [msdyn_salesinsightssettings].[CreatedOnBehalfByName],
    [msdyn_salesinsightssettings].[CreatedOnBehalfByYomiName],
    [msdyn_salesinsightssettings].[ImportSequenceNumber],
    [msdyn_salesinsightssettings].[ModifiedBy],
    [msdyn_salesinsightssettings].[ModifiedByName],
    [msdyn_salesinsightssettings].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_salesinsightssettings].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_salesinsightssettings].[ModifiedOn],
    [msdyn_salesinsightssettings].[ModifiedOnBehalfBy],
    [msdyn_salesinsightssettings].[ModifiedOnBehalfByName],
    [msdyn_salesinsightssettings].[ModifiedOnBehalfByYomiName],
    [msdyn_salesinsightssettings].[msdyn_islicensepurchased],
    msdyn_islicensepurchasedPLTable.Value,
    [msdyn_salesinsightssettings].[msdyn_isoctpreviewenabled],
    msdyn_isoctpreviewenabledPLTable.Value,
    [msdyn_salesinsightssettings].[msdyn_ispreviewenabled],
    msdyn_ispreviewenabledPLTable.Value,
    [msdyn_salesinsightssettings].[msdyn_name],
    [msdyn_salesinsightssettings].[msdyn_salesinsightssettingsId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_salesinsightssettings].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_salesinsightssettings].[OverriddenCreatedOn],
    [msdyn_salesinsightssettings].[OwnerId],
    --[msdyn_salesinsightssettings].[OwnerIdDsc]
    0,
    [msdyn_salesinsightssettings].[OwnerIdName],
    [msdyn_salesinsightssettings].[OwnerIdType],
    [msdyn_salesinsightssettings].[OwnerIdYomiName],
    [msdyn_salesinsightssettings].[OwningBusinessUnit],
    [msdyn_salesinsightssettings].[OwningTeam],
    [msdyn_salesinsightssettings].[OwningUser],
    [msdyn_salesinsightssettings].[statecode],
    statecodePLTable.Value,
    [msdyn_salesinsightssettings].[statuscode],
    statuscodePLTable.Value,
    [msdyn_salesinsightssettings].[TimeZoneRuleVersionNumber],
    [msdyn_salesinsightssettings].[UTCConversionTimeZoneCode],
    [msdyn_salesinsightssettings].[VersionNumber]
from msdyn_salesinsightssettings
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_islicensepurchasedPLTable] on 
		([msdyn_islicensepurchasedPLTable].AttributeName = 'msdyn_islicensepurchased'
		and [msdyn_islicensepurchasedPLTable].ObjectTypeCode = 10098
		and [msdyn_islicensepurchasedPLTable].AttributeValue = [msdyn_salesinsightssettings].[msdyn_islicensepurchased]
		and [msdyn_islicensepurchasedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_isoctpreviewenabledPLTable] on 
		([msdyn_isoctpreviewenabledPLTable].AttributeName = 'msdyn_isoctpreviewenabled'
		and [msdyn_isoctpreviewenabledPLTable].ObjectTypeCode = 10098
		and [msdyn_isoctpreviewenabledPLTable].AttributeValue = [msdyn_salesinsightssettings].[msdyn_isoctpreviewenabled]
		and [msdyn_isoctpreviewenabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_ispreviewenabledPLTable] on 
		([msdyn_ispreviewenabledPLTable].AttributeName = 'msdyn_ispreviewenabled'
		and [msdyn_ispreviewenabledPLTable].ObjectTypeCode = 10098
		and [msdyn_ispreviewenabledPLTable].AttributeValue = [msdyn_salesinsightssettings].[msdyn_ispreviewenabled]
		and [msdyn_ispreviewenabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10098
		and [statecodePLTable].AttributeValue = [msdyn_salesinsightssettings].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10098
		and [statuscodePLTable].AttributeValue = [msdyn_salesinsightssettings].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10098) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_salesinsightssettings].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10098
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
		[msdyn_salesinsightssettings].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10098)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_salesinsightssettings].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_salesinsightssettings].[msdyn_salesinsightssettingsId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10098
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_salesinsightssettings] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_salesinsightssettings] TO [CRMReaderRole]
    AS [dbo];

