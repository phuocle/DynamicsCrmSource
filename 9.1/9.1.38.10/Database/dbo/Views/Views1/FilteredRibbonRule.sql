

--
-- report view for ribbonrule
--
create view dbo.[FilteredRibbonRule] 
(
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
    [RibbonRule].[CreatedBy],
    [RibbonRule].[CreatedByName],
    [RibbonRule].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RibbonRule].[CreatedOn],
			us.TimeZoneCode),
        [RibbonRule].[CreatedOn],
    [RibbonRule].[CreatedOnBehalfBy],
    [RibbonRule].[CreatedOnBehalfByName],
    [RibbonRule].[CreatedOnBehalfByYomiName],
    [RibbonRule].[Entity],
    [RibbonRule].[IsManaged],
    IsManagedPLTable.Value,
    [RibbonRule].[ModifiedBy],
    [RibbonRule].[ModifiedByName],
    [RibbonRule].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RibbonRule].[ModifiedOn],
			us.TimeZoneCode),
        [RibbonRule].[ModifiedOn],
    [RibbonRule].[ModifiedOnBehalfBy],
    [RibbonRule].[ModifiedOnBehalfByName],
    [RibbonRule].[ModifiedOnBehalfByYomiName],
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRibbonRule] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRibbonRule] TO [CRMReaderRole]
    AS [dbo];

