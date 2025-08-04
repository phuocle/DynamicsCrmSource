

--
-- report view for datalakefolderpermission
--
create view dbo.[Filtereddatalakefolderpermission] 
(
    [appid],
    [canexecute],
    [canexecutename],
    [canread],
    [canreadname],
    [canwrite],
    [canwritename],
    [componentidunique],
    [componentstate],
    [componentstatename],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [datalakefolderpermissionid],
    [datalakefolderpermission_uniquename],
    [folderid],
    [folderidname],
    [importsequencenumber],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
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
    [datalakefolderpermission].[appid],
    [datalakefolderpermission].[canexecute],
    canexecutePLTable.Value,
    [datalakefolderpermission].[canread],
    canreadPLTable.Value,
    [datalakefolderpermission].[canwrite],
    canwritePLTable.Value,
    [datalakefolderpermission].[ComponentIdUnique],
    [datalakefolderpermission].[ComponentState],
    ComponentStatePLTable.Value,
    [datalakefolderpermission].[CreatedBy],
    [datalakefolderpermission].[CreatedByName],
    [datalakefolderpermission].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakefolderpermission].[CreatedOn],
			us.TimeZoneCode),
        [datalakefolderpermission].[CreatedOn],
    [datalakefolderpermission].[CreatedOnBehalfBy],
    [datalakefolderpermission].[CreatedOnBehalfByName],
    [datalakefolderpermission].[CreatedOnBehalfByYomiName],
    [datalakefolderpermission].[datalakefolderpermissionId],
    [datalakefolderpermission].[datalakefolderpermission_UniqueName],
    [datalakefolderpermission].[folderid],
    [datalakefolderpermission].[folderidName],
    [datalakefolderpermission].[ImportSequenceNumber],
    [datalakefolderpermission].[IsCustomizable],
    [datalakefolderpermission].[IsManaged],
    IsManagedPLTable.Value,
    [datalakefolderpermission].[ModifiedBy],
    [datalakefolderpermission].[ModifiedByName],
    [datalakefolderpermission].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakefolderpermission].[ModifiedOn],
			us.TimeZoneCode),
        [datalakefolderpermission].[ModifiedOn],
    [datalakefolderpermission].[ModifiedOnBehalfBy],
    [datalakefolderpermission].[ModifiedOnBehalfByName],
    [datalakefolderpermission].[ModifiedOnBehalfByYomiName],
    [datalakefolderpermission].[name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakefolderpermission].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [datalakefolderpermission].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakefolderpermission].[OverwriteTime],
			us.TimeZoneCode),
        [datalakefolderpermission].[OverwriteTime],
    [datalakefolderpermission].[OwnerId],
    --[datalakefolderpermission].[OwnerIdDsc]
    0,
    [datalakefolderpermission].[OwnerIdName],
    [datalakefolderpermission].[OwnerIdType],
    [datalakefolderpermission].[OwnerIdYomiName],
    [datalakefolderpermission].[OwningBusinessUnit],
    [datalakefolderpermission].[OwningTeam],
    [datalakefolderpermission].[OwningUser],
    [datalakefolderpermission].[SolutionId],
    [datalakefolderpermission].[statecode],
    statecodePLTable.Value,
    [datalakefolderpermission].[statuscode],
    statuscodePLTable.Value,
    [datalakefolderpermission].[TimeZoneRuleVersionNumber],
    [datalakefolderpermission].[UTCConversionTimeZoneCode],
    [datalakefolderpermission].[VersionNumber]
from datalakefolderpermission
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [canexecutePLTable] on 
		([canexecutePLTable].AttributeName = 'canexecute'
		and [canexecutePLTable].ObjectTypeCode = 10022
		and [canexecutePLTable].AttributeValue = [datalakefolderpermission].[canexecute]
		and [canexecutePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [canreadPLTable] on 
		([canreadPLTable].AttributeName = 'canread'
		and [canreadPLTable].ObjectTypeCode = 10022
		and [canreadPLTable].AttributeValue = [datalakefolderpermission].[canread]
		and [canreadPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [canwritePLTable] on 
		([canwritePLTable].AttributeName = 'canwrite'
		and [canwritePLTable].ObjectTypeCode = 10022
		and [canwritePLTable].AttributeValue = [datalakefolderpermission].[canwrite]
		and [canwritePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10022
		and [ComponentStatePLTable].AttributeValue = [datalakefolderpermission].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10022
		and [IsManagedPLTable].AttributeValue = [datalakefolderpermission].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10022
		and [statecodePLTable].AttributeValue = [datalakefolderpermission].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10022
		and [statuscodePLTable].AttributeValue = [datalakefolderpermission].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10021) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[datalakefolderpermission].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10021
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
		[datalakefolderpermission].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10021)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[datalakefolderpermission].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[datalakefolderpermission].[folderid] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10021
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filtereddatalakefolderpermission] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filtereddatalakefolderpermission] TO [CRMReaderRole]
    AS [dbo];

