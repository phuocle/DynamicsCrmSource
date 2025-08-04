

--
-- report view for appsetting
--
create view dbo.[FilteredAppSetting] 
(
    [appsettingid],
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
    [description],
    [displayname],
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
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [parentappmoduleid],
    [parentappmoduleidname],
    [settingdefinitionid],
    [settingdefinitionidname],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [uniquename],
    [utcconversiontimezonecode],
    [value],
    [versionnumber]
) with view_metadata as
select
    [AppSetting].[AppSettingId],
    [AppSetting].[ComponentIdUnique],
    [AppSetting].[ComponentState],
    ComponentStatePLTable.Value,
    [AppSetting].[CreatedBy],
    [AppSetting].[CreatedByName],
    [AppSetting].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppSetting].[CreatedOn],
			us.TimeZoneCode),
        [AppSetting].[CreatedOn],
    [AppSetting].[CreatedOnBehalfBy],
    [AppSetting].[CreatedOnBehalfByName],
    [AppSetting].[CreatedOnBehalfByYomiName],
    coalesce(dbo.fn_GetLocalizedLabel([AppSetting].[ParentAppModuleId], 'description', 10032, us.UILanguageId), [AppSetting].[Description]),
    coalesce(dbo.fn_GetLocalizedLabel([AppSetting].[ParentAppModuleId], 'displayname', 10032, us.UILanguageId), [AppSetting].[DisplayName]),
    [AppSetting].[ImportSequenceNumber],
    [AppSetting].[IsCustomizable],
    [AppSetting].[IsManaged],
    IsManagedPLTable.Value,
    [AppSetting].[ModifiedBy],
    [AppSetting].[ModifiedByName],
    [AppSetting].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppSetting].[ModifiedOn],
			us.TimeZoneCode),
        [AppSetting].[ModifiedOn],
    [AppSetting].[ModifiedOnBehalfBy],
    [AppSetting].[ModifiedOnBehalfByName],
    [AppSetting].[ModifiedOnBehalfByYomiName],
    [AppSetting].[OrganizationId],
    [AppSetting].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppSetting].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [AppSetting].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppSetting].[OverwriteTime],
			us.TimeZoneCode),
        [AppSetting].[OverwriteTime],
    [AppSetting].[ParentAppModuleId],
    [AppSetting].[ParentAppModuleIdName],
    [AppSetting].[SettingDefinitionId],
    [AppSetting].[SettingDefinitionIdName],
    [AppSetting].[SolutionId],
    [AppSetting].[statecode],
    statecodePLTable.Value,
    [AppSetting].[statuscode],
    statuscodePLTable.Value,
    [AppSetting].[TimeZoneRuleVersionNumber],
    [AppSetting].[UniqueName],
    [AppSetting].[UTCConversionTimeZoneCode],
    [AppSetting].[Value],
    [AppSetting].[VersionNumber]
from AppSetting
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10032
		and [ComponentStatePLTable].AttributeValue = [AppSetting].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10032
		and [IsManagedPLTable].AttributeValue = [AppSetting].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10032
		and [statecodePLTable].AttributeValue = [AppSetting].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10032
		and [statuscodePLTable].AttributeValue = [AppSetting].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9006) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [AppSetting].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppSetting] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppSetting] TO [CRMReaderRole]
    AS [dbo];

