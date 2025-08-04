

--
-- report view for bot
--
create view dbo.[Filteredbot] 
(
    [accesscontrolpolicy],
    [accesscontrolpolicyname],
    [applicationmanifestinformation],
    [authenticationmode],
    [authenticationmodename],
    [authenticationtrigger],
    [authenticationtriggername],
    [authorizedsecuritygroupids],
    [botid],
    [componentidunique],
    [componentstate],
    [componentstatename],
    [configuration],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [iconbase64],
    [importsequencenumber],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [language],
    [languagename],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
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
    [publishedby],
    [publishedbyname],
    [publishedbyyominame],
    [publishedon],
    [publishedonutc],
    [schemaname],
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
    [bot].[accesscontrolpolicy],
    accesscontrolpolicyPLTable.Value,
    [bot].[applicationmanifestinformation],
    [bot].[authenticationmode],
    authenticationmodePLTable.Value,
    [bot].[authenticationtrigger],
    authenticationtriggerPLTable.Value,
    [bot].[authorizedsecuritygroupids],
    [bot].[botId],
    [bot].[ComponentIdUnique],
    [bot].[ComponentState],
    ComponentStatePLTable.Value,
    [bot].[Configuration],
    [bot].[CreatedBy],
    [bot].[CreatedByName],
    [bot].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([bot].[CreatedOn],
			us.TimeZoneCode),
        [bot].[CreatedOn],
    [bot].[CreatedOnBehalfBy],
    [bot].[CreatedOnBehalfByName],
    [bot].[CreatedOnBehalfByYomiName],
    [bot].[iconbase64],
    [bot].[ImportSequenceNumber],
    [bot].[IsCustomizable],
    [bot].[IsManaged],
    IsManagedPLTable.Value,
    [bot].[Language],
    LanguagePLTable.Value,
    [bot].[ModifiedBy],
    [bot].[ModifiedByName],
    [bot].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([bot].[ModifiedOn],
			us.TimeZoneCode),
        [bot].[ModifiedOn],
    [bot].[ModifiedOnBehalfBy],
    [bot].[ModifiedOnBehalfByName],
    [bot].[ModifiedOnBehalfByYomiName],
    [bot].[name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([bot].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [bot].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([bot].[OverwriteTime],
			us.TimeZoneCode),
        [bot].[OverwriteTime],
    [bot].[OwnerId],
    --[bot].[OwnerIdDsc]
    0,
    [bot].[OwnerIdName],
    [bot].[OwnerIdType],
    [bot].[OwnerIdYomiName],
    [bot].[OwningBusinessUnit],
    [bot].[OwningTeam],
    [bot].[OwningUser],
    [bot].[publishedby],
    [bot].[publishedbyName],
    [bot].[publishedbyYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([bot].[publishedon],
			us.TimeZoneCode),
        [bot].[publishedon],
    [bot].[SchemaName],
    [bot].[SolutionId],
    [bot].[statecode],
    statecodePLTable.Value,
    [bot].[statuscode],
    statuscodePLTable.Value,
    [bot].[TimeZoneRuleVersionNumber],
    [bot].[UTCConversionTimeZoneCode],
    [bot].[VersionNumber]
from bot
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [accesscontrolpolicyPLTable] on 
		([accesscontrolpolicyPLTable].AttributeName = 'accesscontrolpolicy'
		and [accesscontrolpolicyPLTable].ObjectTypeCode = 10042
		and [accesscontrolpolicyPLTable].AttributeValue = [bot].[accesscontrolpolicy]
		and [accesscontrolpolicyPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [authenticationmodePLTable] on 
		([authenticationmodePLTable].AttributeName = 'authenticationmode'
		and [authenticationmodePLTable].ObjectTypeCode = 10042
		and [authenticationmodePLTable].AttributeValue = [bot].[authenticationmode]
		and [authenticationmodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [authenticationtriggerPLTable] on 
		([authenticationtriggerPLTable].AttributeName = 'authenticationtrigger'
		and [authenticationtriggerPLTable].ObjectTypeCode = 10042
		and [authenticationtriggerPLTable].AttributeValue = [bot].[authenticationtrigger]
		and [authenticationtriggerPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10042
		and [ComponentStatePLTable].AttributeValue = [bot].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10042
		and [IsManagedPLTable].AttributeValue = [bot].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LanguagePLTable] on 
		([LanguagePLTable].AttributeName = 'language'
		and [LanguagePLTable].ObjectTypeCode = 10042
		and [LanguagePLTable].AttributeValue = [bot].[Language]
		and [LanguagePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10042
		and [statecodePLTable].AttributeValue = [bot].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10042
		and [statuscodePLTable].AttributeValue = [bot].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10042) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[bot].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10042
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
		[bot].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10042)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[bot].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[bot].[botId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10042
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredbot] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredbot] TO [CRMReaderRole]
    AS [dbo];

