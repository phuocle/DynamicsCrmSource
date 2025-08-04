

--
-- report view for botcomponent
--
create view dbo.[Filteredbotcomponent] 
(
    [botcomponentid],
    [category],
    [componentidunique],
    [componentstate],
    [componentstatename],
    [componenttype],
    [componenttypename],
    [content],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [data],
    [description],
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
    [parentbotcomponentid],
    [parentbotcomponentidname],
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
    [botcomponent].[botcomponentId],
    [botcomponent].[Category],
    [botcomponent].[ComponentIdUnique],
    [botcomponent].[ComponentState],
    ComponentStatePLTable.Value,
    [botcomponent].[ComponentType],
    ComponentTypePLTable.Value,
    [botcomponent].[Content],
    [botcomponent].[CreatedBy],
    [botcomponent].[CreatedByName],
    [botcomponent].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([botcomponent].[CreatedOn],
			us.TimeZoneCode),
        [botcomponent].[CreatedOn],
    [botcomponent].[CreatedOnBehalfBy],
    [botcomponent].[CreatedOnBehalfByName],
    [botcomponent].[CreatedOnBehalfByYomiName],
    [botcomponent].[Data],
    [botcomponent].[Description],
    [botcomponent].[ImportSequenceNumber],
    [botcomponent].[IsCustomizable],
    [botcomponent].[IsManaged],
    IsManagedPLTable.Value,
    [botcomponent].[Language],
    LanguagePLTable.Value,
    [botcomponent].[ModifiedBy],
    [botcomponent].[ModifiedByName],
    [botcomponent].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([botcomponent].[ModifiedOn],
			us.TimeZoneCode),
        [botcomponent].[ModifiedOn],
    [botcomponent].[ModifiedOnBehalfBy],
    [botcomponent].[ModifiedOnBehalfByName],
    [botcomponent].[ModifiedOnBehalfByYomiName],
    [botcomponent].[name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([botcomponent].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [botcomponent].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([botcomponent].[OverwriteTime],
			us.TimeZoneCode),
        [botcomponent].[OverwriteTime],
    [botcomponent].[OwnerId],
    --[botcomponent].[OwnerIdDsc]
    0,
    [botcomponent].[OwnerIdName],
    [botcomponent].[OwnerIdType],
    [botcomponent].[OwnerIdYomiName],
    [botcomponent].[OwningBusinessUnit],
    [botcomponent].[OwningTeam],
    [botcomponent].[OwningUser],
    [botcomponent].[ParentBotComponentId],
    [botcomponent].[ParentBotComponentIdName],
    [botcomponent].[SchemaName],
    [botcomponent].[SolutionId],
    [botcomponent].[statecode],
    statecodePLTable.Value,
    [botcomponent].[statuscode],
    statuscodePLTable.Value,
    [botcomponent].[TimeZoneRuleVersionNumber],
    [botcomponent].[UTCConversionTimeZoneCode],
    [botcomponent].[VersionNumber]
from botcomponent
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10043
		and [ComponentStatePLTable].AttributeValue = [botcomponent].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ComponentTypePLTable] on 
		([ComponentTypePLTable].AttributeName = 'componenttype'
		and [ComponentTypePLTable].ObjectTypeCode = 10043
		and [ComponentTypePLTable].AttributeValue = [botcomponent].[ComponentType]
		and [ComponentTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10043
		and [IsManagedPLTable].AttributeValue = [botcomponent].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LanguagePLTable] on 
		([LanguagePLTable].AttributeName = 'language'
		and [LanguagePLTable].ObjectTypeCode = 10043
		and [LanguagePLTable].AttributeValue = [botcomponent].[Language]
		and [LanguagePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10043
		and [statecodePLTable].AttributeValue = [botcomponent].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10043
		and [statuscodePLTable].AttributeValue = [botcomponent].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10043) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[botcomponent].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10043
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
		[botcomponent].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10043)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[botcomponent].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[botcomponent].[botcomponentId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10043
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredbotcomponent] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredbotcomponent] TO [CRMReaderRole]
    AS [dbo];

