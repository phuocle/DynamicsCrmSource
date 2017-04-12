SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for ribbontabtocommandmap
--
create view [dbo].[FilteredRibbonTabToCommandMap] (
    [command],
    [componentstate],
    [controlid],
    [entity],
    [ismanaged],
    [ismanagedname],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [ribbondiffid],
    [ribbontabtocommandmapid],
    [ribbontabtocommandmapuniqueid],
    [solutionid],
    [tabid],
    [versionnumber]
) with view_metadata as
select
    [RibbonTabToCommandMap].[Command],
    [RibbonTabToCommandMap].[ComponentState],
    [RibbonTabToCommandMap].[ControlId],
    [RibbonTabToCommandMap].[Entity],
    [RibbonTabToCommandMap].[IsManaged],
    IsManagedPLTable.Value,
    [RibbonTabToCommandMap].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RibbonTabToCommandMap].[OverwriteTime],
			us.TimeZoneCode),
        [RibbonTabToCommandMap].[OverwriteTime],
    [RibbonTabToCommandMap].[RibbonDiffId],
    [RibbonTabToCommandMap].[RibbonTabToCommandMapId],
    [RibbonTabToCommandMap].[RibbonTabToCommandMapUniqueId],
    [RibbonTabToCommandMap].[SolutionId],
    [RibbonTabToCommandMap].[TabId],
    [RibbonTabToCommandMap].[VersionNumber]
from RibbonTabToCommandMap
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 1113
		and [IsManagedPLTable].AttributeValue = [RibbonTabToCommandMap].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1113) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [RibbonTabToCommandMap].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredRibbonTabToCommandMap] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredRibbonTabToCommandMap] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
