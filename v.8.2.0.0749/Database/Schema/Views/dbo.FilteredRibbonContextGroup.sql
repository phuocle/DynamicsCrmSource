SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for ribboncontextgroup
--
create view [dbo].[FilteredRibbonContextGroup] (
    [componentstate],
    [contextgroupid],
    [contextgroupxml],
    [entity],
    [ismanaged],
    [ismanagedname],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [ribboncontextgroupid],
    [ribboncontextgroupuniqueid],
    [ribboncustomizationid],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [RibbonContextGroup].[ComponentState],
    [RibbonContextGroup].[ContextGroupId],
    [RibbonContextGroup].[ContextGroupXml],
    [RibbonContextGroup].[Entity],
    [RibbonContextGroup].[IsManaged],
    IsManagedPLTable.Value,
    [RibbonContextGroup].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RibbonContextGroup].[OverwriteTime],
			us.TimeZoneCode),
        [RibbonContextGroup].[OverwriteTime],
    [RibbonContextGroup].[RibbonContextGroupId],
    [RibbonContextGroup].[RibbonContextGroupUniqueId],
    [RibbonContextGroup].[RibbonCustomizationId],
    [RibbonContextGroup].[SolutionId],
    [RibbonContextGroup].[VersionNumber]
from RibbonContextGroup
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 1115
		and [IsManagedPLTable].AttributeValue = [RibbonContextGroup].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1115) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [RibbonContextGroup].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredRibbonContextGroup] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredRibbonContextGroup] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO