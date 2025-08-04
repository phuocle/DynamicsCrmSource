

--
-- report view for navigationsetting
--
create view dbo.[FilteredNavigationSetting] 
(
    [advancedsettingorder],
    [appconfigid],
    [appconfigidunique],
    [componentstate],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [groupname],
    [grouptypename],
    [iconresourceid],
    [importsequencenumber],
    [introducedversion],
    [ismanaged],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [navigationsettingid],
    [navigationsettingidunique],
    [objecttypecode],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [pageurl],
    [parentnavigationsettingid],
    [privileges],
    [progressstate],
    [progressstatename],
    [quicksettingorder],
    [resourceid],
    [settingtype],
    [solutionid]
) with view_metadata as
select
    [NavigationSetting].[AdvancedSettingOrder],
    [NavigationSetting].[AppConfigId],
    [NavigationSetting].[AppConfigIdUnique],
    [NavigationSetting].[ComponentState],
    [NavigationSetting].[CreatedBy],
    [NavigationSetting].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([NavigationSetting].[CreatedOn],
			us.TimeZoneCode),
        [NavigationSetting].[CreatedOn],
    [NavigationSetting].[CreatedOnBehalfBy],
    [NavigationSetting].[CreatedOnBehalfByName],
    [NavigationSetting].[CreatedOnBehalfByYomiName],
    coalesce(dbo.fn_GetBusinessDataLocalizedLabel([NavigationSetting].[AppConfigId], 'description', 9900, us.UILanguageId), [NavigationSetting].[Description]),
    coalesce(dbo.fn_GetBusinessDataLocalizedLabel([NavigationSetting].[AppConfigId], 'groupname', 9900, us.UILanguageId), [NavigationSetting].[GroupName]),
    SettingTypePLTable.Value,
    [NavigationSetting].[IconResourceId],
    [NavigationSetting].[ImportSequenceNumber],
    [NavigationSetting].[IntroducedVersion],
    [NavigationSetting].[IsManaged],
    [NavigationSetting].[ModifiedBy],
    [NavigationSetting].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([NavigationSetting].[ModifiedOn],
			us.TimeZoneCode),
        [NavigationSetting].[ModifiedOn],
    [NavigationSetting].[ModifiedOnBehalfBy],
    [NavigationSetting].[ModifiedOnBehalfByName],
    [NavigationSetting].[ModifiedOnBehalfByYomiName],
    coalesce(dbo.fn_GetBusinessDataLocalizedLabel([NavigationSetting].[AppConfigId], 'name', 9900, us.UILanguageId), [NavigationSetting].[Name]),
    [NavigationSetting].[NavigationSettingId],
    [NavigationSetting].[NavigationSettingIdUnique],
    [NavigationSetting].[ObjectTypeCode],
    [NavigationSetting].[OrganizationId],
    [NavigationSetting].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([NavigationSetting].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [NavigationSetting].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([NavigationSetting].[OverwriteTime],
			us.TimeZoneCode),
        [NavigationSetting].[OverwriteTime],
    [NavigationSetting].[PageUrl],
    [NavigationSetting].[ParentNavigationSettingId],
    [NavigationSetting].[Privileges],
    [NavigationSetting].[ProgressState],
    ProgressStatePLTable.Value,
    [NavigationSetting].[QuickSettingOrder],
    [NavigationSetting].[ResourceId],
    [NavigationSetting].[SettingType],
    [NavigationSetting].[SolutionId]
from NavigationSetting
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [SettingTypePLTable] on 
		([SettingTypePLTable].AttributeName = 'settingtype'
		and [SettingTypePLTable].ObjectTypeCode = 9900
		and [SettingTypePLTable].AttributeValue = [NavigationSetting].[SettingType]
		and [SettingTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ProgressStatePLTable] on 
		([ProgressStatePLTable].AttributeName = 'progressstate'
		and [ProgressStatePLTable].ObjectTypeCode = 9900
		and [ProgressStatePLTable].AttributeValue = [NavigationSetting].[ProgressState]
		and [ProgressStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9012) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [NavigationSetting].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredNavigationSetting] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredNavigationSetting] TO [CRMReaderRole]
    AS [dbo];

