

--
-- report view for botcomponent_botcomponent
--
create view dbo.[Filteredbotcomponent_botcomponent] 
(
    [botcomponentidone],
    [botcomponentidtwo],
    [botcomponent_botcomponentid],
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
    [botcomponent_botcomponent].[botcomponentidOne],
    [botcomponent_botcomponent].[botcomponentidTwo],
    [botcomponent_botcomponent].[botcomponent_botcomponentId],
    [botcomponent_botcomponent].[ComponentIdUnique],
    [botcomponent_botcomponent].[ComponentState],
    ComponentStatePLTable.Value,
    [botcomponent_botcomponent].[IsCustomizable],
    [botcomponent_botcomponent].[IsManaged],
    IsManagedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([botcomponent_botcomponent].[OverwriteTime],
			us.TimeZoneCode),
        [botcomponent_botcomponent].[OverwriteTime],
    [botcomponent_botcomponent].[SolutionId],
    [botcomponent_botcomponent].[VersionNumber]
from botcomponent_botcomponent
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10045
		and [ComponentStatePLTable].AttributeValue = [botcomponent_botcomponent].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10045
		and [IsManagedPLTable].AttributeValue = [botcomponent_botcomponent].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredbotcomponent_botcomponent] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredbotcomponent_botcomponent] TO [CRMReaderRole]
    AS [dbo];

