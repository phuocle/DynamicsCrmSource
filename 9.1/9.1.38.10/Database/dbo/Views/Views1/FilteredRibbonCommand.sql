

--
-- report view for ribboncommand
--
create view dbo.[FilteredRibbonCommand] 
(
    [command],
    [commanddefinition],
    [componentstate],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [entity],
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
    [RibbonCommand].[CreatedBy],
    [RibbonCommand].[CreatedByName],
    [RibbonCommand].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RibbonCommand].[CreatedOn],
			us.TimeZoneCode),
        [RibbonCommand].[CreatedOn],
    [RibbonCommand].[CreatedOnBehalfBy],
    [RibbonCommand].[CreatedOnBehalfByName],
    [RibbonCommand].[CreatedOnBehalfByYomiName],
    [RibbonCommand].[Entity],
    [RibbonCommand].[IsManaged],
    IsManagedPLTable.Value,
    [RibbonCommand].[ModifiedBy],
    [RibbonCommand].[ModifiedByName],
    [RibbonCommand].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RibbonCommand].[ModifiedOn],
			us.TimeZoneCode),
        [RibbonCommand].[ModifiedOn],
    [RibbonCommand].[ModifiedOnBehalfBy],
    [RibbonCommand].[ModifiedOnBehalfByName],
    [RibbonCommand].[ModifiedOnBehalfByYomiName],
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRibbonCommand] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRibbonCommand] TO [CRMReaderRole]
    AS [dbo];

