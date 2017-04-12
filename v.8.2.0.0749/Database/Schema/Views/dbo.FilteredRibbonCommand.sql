SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for ribboncommand
--
create view [dbo].[FilteredRibbonCommand] (
    [command],
    [commanddefinition],
    [componentstate],
    [entity],
    [ismanaged],
    [ismanagedname],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [ribboncommandid],
    [ribboncommanduniqueid],
    [ribboncustomizationid],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [RibbonCommand].[Command],
    [RibbonCommand].[CommandDefinition],
    [RibbonCommand].[ComponentState],
    [RibbonCommand].[Entity],
    [RibbonCommand].[IsManaged],
    IsManagedPLTable.Value,
    [RibbonCommand].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RibbonCommand].[OverwriteTime],
			us.TimeZoneCode),
        [RibbonCommand].[OverwriteTime],
    [RibbonCommand].[RibbonCommandId],
    [RibbonCommand].[RibbonCommandUniqueId],
    [RibbonCommand].[RibbonCustomizationId],
    [RibbonCommand].[SolutionId],
    [RibbonCommand].[VersionNumber]
from RibbonCommand
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 1116
		and [IsManagedPLTable].AttributeValue = [RibbonCommand].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1116) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [RibbonCommand].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredRibbonCommand] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredRibbonCommand] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
