USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredRibbonRule]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for ribbonrule
--
create view [dbo].[FilteredRibbonRule] (
    [componentstate],
    [entity],
    [ismanaged],
    [ismanagedname],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [ribboncustomizationid],
    [ribbonruleid],
    [ribbonruleuniqueid],
    [ruledefinition],
    [ruleid],
    [ruletype],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [RibbonRule].[ComponentState],
    [RibbonRule].[Entity],
    [RibbonRule].[IsManaged],
    IsManagedPLTable.Value,
    [RibbonRule].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RibbonRule].[OverwriteTime],
			us.TimeZoneCode),
        [RibbonRule].[OverwriteTime],
    [RibbonRule].[RibbonCustomizationId],
    [RibbonRule].[RibbonRuleId],
    [RibbonRule].[RibbonRuleUniqueId],
    [RibbonRule].[RuleDefinition],
    [RibbonRule].[RuleId],
    [RibbonRule].[RuleType],
    [RibbonRule].[SolutionId],
    [RibbonRule].[VersionNumber]
from RibbonRule
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 1117
		and [IsManagedPLTable].AttributeValue = [RibbonRule].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1117) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [RibbonRule].OrganizationId = u.OrganizationId
)

GO
