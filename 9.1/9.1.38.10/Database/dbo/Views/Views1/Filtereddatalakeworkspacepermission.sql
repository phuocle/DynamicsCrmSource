

--
-- report view for datalakeworkspacepermission
--
create view dbo.[Filtereddatalakeworkspacepermission] 
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
    [datalakeworkspacepermissionid],
    [datalakeworkspacepermission_uniquename],
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
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [tenantid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber],
    [whitelistedappid],
    [workspaceid],
    [workspaceidname]
) with view_metadata as
select
    [datalakeworkspacepermission].[appid],
    [datalakeworkspacepermission].[canexecute],
    canexecutePLTable.Value,
    [datalakeworkspacepermission].[canread],
    canreadPLTable.Value,
    [datalakeworkspacepermission].[canwrite],
    canwritePLTable.Value,
    [datalakeworkspacepermission].[ComponentIdUnique],
    [datalakeworkspacepermission].[ComponentState],
    ComponentStatePLTable.Value,
    [datalakeworkspacepermission].[CreatedBy],
    [datalakeworkspacepermission].[CreatedByName],
    [datalakeworkspacepermission].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakeworkspacepermission].[CreatedOn],
			us.TimeZoneCode),
        [datalakeworkspacepermission].[CreatedOn],
    [datalakeworkspacepermission].[CreatedOnBehalfBy],
    [datalakeworkspacepermission].[CreatedOnBehalfByName],
    [datalakeworkspacepermission].[CreatedOnBehalfByYomiName],
    [datalakeworkspacepermission].[datalakeworkspacepermissionId],
    [datalakeworkspacepermission].[datalakeworkspacepermission_UniqueName],
    [datalakeworkspacepermission].[ImportSequenceNumber],
    [datalakeworkspacepermission].[IsCustomizable],
    [datalakeworkspacepermission].[IsManaged],
    IsManagedPLTable.Value,
    [datalakeworkspacepermission].[ModifiedBy],
    [datalakeworkspacepermission].[ModifiedByName],
    [datalakeworkspacepermission].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakeworkspacepermission].[ModifiedOn],
			us.TimeZoneCode),
        [datalakeworkspacepermission].[ModifiedOn],
    [datalakeworkspacepermission].[ModifiedOnBehalfBy],
    [datalakeworkspacepermission].[ModifiedOnBehalfByName],
    [datalakeworkspacepermission].[ModifiedOnBehalfByYomiName],
    [datalakeworkspacepermission].[name],
    [datalakeworkspacepermission].[OrganizationId],
    [datalakeworkspacepermission].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakeworkspacepermission].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [datalakeworkspacepermission].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakeworkspacepermission].[OverwriteTime],
			us.TimeZoneCode),
        [datalakeworkspacepermission].[OverwriteTime],
    [datalakeworkspacepermission].[SolutionId],
    [datalakeworkspacepermission].[statecode],
    statecodePLTable.Value,
    [datalakeworkspacepermission].[statuscode],
    statuscodePLTable.Value,
    [datalakeworkspacepermission].[tenantid],
    [datalakeworkspacepermission].[TimeZoneRuleVersionNumber],
    [datalakeworkspacepermission].[UTCConversionTimeZoneCode],
    [datalakeworkspacepermission].[VersionNumber],
    [datalakeworkspacepermission].[whitelistedappid],
    [datalakeworkspacepermission].[workspaceid],
    [datalakeworkspacepermission].[workspaceidName]
from datalakeworkspacepermission
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [canexecutePLTable] on 
		([canexecutePLTable].AttributeName = 'canexecute'
		and [canexecutePLTable].ObjectTypeCode = 10024
		and [canexecutePLTable].AttributeValue = [datalakeworkspacepermission].[canexecute]
		and [canexecutePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [canreadPLTable] on 
		([canreadPLTable].AttributeName = 'canread'
		and [canreadPLTable].ObjectTypeCode = 10024
		and [canreadPLTable].AttributeValue = [datalakeworkspacepermission].[canread]
		and [canreadPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [canwritePLTable] on 
		([canwritePLTable].AttributeName = 'canwrite'
		and [canwritePLTable].ObjectTypeCode = 10024
		and [canwritePLTable].AttributeValue = [datalakeworkspacepermission].[canwrite]
		and [canwritePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10024
		and [ComponentStatePLTable].AttributeValue = [datalakeworkspacepermission].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10024
		and [IsManagedPLTable].AttributeValue = [datalakeworkspacepermission].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10024
		and [statecodePLTable].AttributeValue = [datalakeworkspacepermission].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10024
		and [statuscodePLTable].AttributeValue = [datalakeworkspacepermission].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10023) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [datalakeworkspacepermission].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filtereddatalakeworkspacepermission] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filtereddatalakeworkspacepermission] TO [CRMReaderRole]
    AS [dbo];

