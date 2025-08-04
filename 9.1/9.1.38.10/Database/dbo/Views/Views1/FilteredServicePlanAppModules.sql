

--
-- report view for serviceplanappmodules
--
create view dbo.[FilteredServicePlanAppModules] 
(
    [appmoduleid],
    [componentidunique],
    [componentstate],
    [componentstatename],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [overwritetime],
    [overwritetimeutc],
    [serviceplanappmodulesid],
    [serviceplanid],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [ServicePlanAppModules].[AppModuleId],
    [ServicePlanAppModules].[ComponentIdUnique],
    [ServicePlanAppModules].[ComponentState],
    ComponentStatePLTable.Value,
    [ServicePlanAppModules].[IsCustomizable],
    [ServicePlanAppModules].[IsManaged],
    IsManagedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServicePlanAppModules].[OverwriteTime],
			us.TimeZoneCode),
        [ServicePlanAppModules].[OverwriteTime],
    [ServicePlanAppModules].[ServicePlanAppModulesId],
    [ServicePlanAppModules].[ServicePlanId],
    [ServicePlanAppModules].[SolutionId],
    [ServicePlanAppModules].[VersionNumber]
from ServicePlanAppModules
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10028
		and [ComponentStatePLTable].AttributeValue = [ServicePlanAppModules].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10028
		and [IsManagedPLTable].AttributeValue = [ServicePlanAppModules].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredServicePlanAppModules] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredServicePlanAppModules] TO [CRMReaderRole]
    AS [dbo];

