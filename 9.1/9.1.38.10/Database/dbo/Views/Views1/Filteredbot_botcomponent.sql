

--
-- report view for bot_botcomponent
--
create view dbo.[Filteredbot_botcomponent] 
(
    [botcomponentid],
    [botid],
    [bot_botcomponentid],
    [componentidunique],
    [componentstate],
    [componentstatename],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [overwritetime],
    [overwritetimeutc],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [bot_botcomponent].[botcomponentid],
    [bot_botcomponent].[botid],
    [bot_botcomponent].[bot_botcomponentId],
    [bot_botcomponent].[ComponentIdUnique],
    [bot_botcomponent].[ComponentState],
    ComponentStatePLTable.Value,
    [bot_botcomponent].[IsCustomizable],
    [bot_botcomponent].[IsManaged],
    IsManagedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([bot_botcomponent].[OverwriteTime],
			us.TimeZoneCode),
        [bot_botcomponent].[OverwriteTime],
    [bot_botcomponent].[SolutionId],
    [bot_botcomponent].[VersionNumber]
from bot_botcomponent
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10044
		and [ComponentStatePLTable].AttributeValue = [bot_botcomponent].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10044
		and [IsManagedPLTable].AttributeValue = [bot_botcomponent].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredbot_botcomponent] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredbot_botcomponent] TO [CRMReaderRole]
    AS [dbo];

