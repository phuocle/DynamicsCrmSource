

--
-- report view for botcomponent_workflow
--
create view dbo.[Filteredbotcomponent_workflow] 
(
    [botcomponentid],
    [botcomponent_workflowid],
    [componentidunique],
    [componentstate],
    [componentstatename],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [overwritetime],
    [overwritetimeutc],
    [solutionid],
    [versionnumber],
    [workflowid]
) with view_metadata as
select
    [botcomponent_workflow].[botcomponentid],
    [botcomponent_workflow].[botcomponent_workflowId],
    [botcomponent_workflow].[ComponentIdUnique],
    [botcomponent_workflow].[ComponentState],
    ComponentStatePLTable.Value,
    [botcomponent_workflow].[IsCustomizable],
    [botcomponent_workflow].[IsManaged],
    IsManagedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([botcomponent_workflow].[OverwriteTime],
			us.TimeZoneCode),
        [botcomponent_workflow].[OverwriteTime],
    [botcomponent_workflow].[SolutionId],
    [botcomponent_workflow].[VersionNumber],
    [botcomponent_workflow].[workflowid]
from botcomponent_workflow
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10046
		and [ComponentStatePLTable].AttributeValue = [botcomponent_workflow].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10046
		and [IsManagedPLTable].AttributeValue = [botcomponent_workflow].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredbotcomponent_workflow] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredbotcomponent_workflow] TO [CRMReaderRole]
    AS [dbo];

