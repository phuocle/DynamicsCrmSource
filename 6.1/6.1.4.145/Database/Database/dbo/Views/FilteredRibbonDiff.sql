

--
-- report view for ribbondiff
--
create view dbo.[FilteredRibbonDiff] (
    [componentstate],
    [contextgroupid],
    [diffid],
    [difftype],
    [entity],
    [ismanaged],
    [ismanagedname],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [rdx],
    [ribboncustomizationid],
    [ribbondiffid],
    [ribbondiffuniqueid],
    [sequence],
    [solutionid],
    [tabid],
    [versionnumber]
) with view_metadata as
select
    [RibbonDiff].[ComponentState],
    [RibbonDiff].[ContextGroupId],
    [RibbonDiff].[DiffId],
    [RibbonDiff].[DiffType],
    [RibbonDiff].[Entity],
    [RibbonDiff].[IsManaged],
    IsManagedPLTable.Value,
    [RibbonDiff].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RibbonDiff].[OverwriteTime],
			us.TimeZoneCode),
        [RibbonDiff].[OverwriteTime],
    [RibbonDiff].[RDX],
    [RibbonDiff].[RibbonCustomizationId],
    [RibbonDiff].[RibbonDiffId],
    [RibbonDiff].[RibbonDiffUniqueId],
    [RibbonDiff].[Sequence],
    [RibbonDiff].[SolutionId],
    [RibbonDiff].[TabId],
    [RibbonDiff].[VersionNumber]
from RibbonDiff
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 1130
		and [IsManagedPLTable].AttributeValue = [RibbonDiff].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1130) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [RibbonDiff].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRibbonDiff] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRibbonDiff] TO [CRMReaderRole]
    AS [dbo];

