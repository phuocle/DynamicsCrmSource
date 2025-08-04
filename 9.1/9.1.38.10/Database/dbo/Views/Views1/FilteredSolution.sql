

--
-- report view for solution
--
create view dbo.[FilteredSolution] 
(
    [configurationpageid],
    [configurationpageidname],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [friendlyname],
    [installedon],
    [installedonutc],
    [isapimanaged],
    [ismanaged],
    [ismanagedname],
    [isvisible],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [organizationidname],
    [parentsolutionid],
    [parentsolutionidname],
    [pinpointassetid],
    [pinpointpublisherid],
    [pinpointsolutiondefaultlocale],
    [pinpointsolutionid],
    [publisherid],
    [publisheridname],
    [publisheridoptionvalueprefix],
    [publisheridprefix],
    [solutionid],
    [solutionpackageversion],
    [solutiontype],
    [templatesuffix],
    [uniquename],
    [updatedon],
    [updatedonutc],
    [upgradeinfo],
    [version],
    [versionnumber]
) with view_metadata as
select
    [Solution].[ConfigurationPageId],
    [Solution].[ConfigurationPageIdName],
    [Solution].[CreatedBy],
    [Solution].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Solution].[CreatedOn],
			us.TimeZoneCode),
        [Solution].[CreatedOn],
    [Solution].[CreatedOnBehalfBy],
    --[Solution].[CreatedOnBehalfByDsc]
    0,
    [Solution].[CreatedOnBehalfByName],
    [Solution].[CreatedOnBehalfByYomiName],
    coalesce(dbo.fn_GetLocalizedLabel([Solution].[SolutionId], 'description', 11, us.UILanguageId), [Solution].[Description]),
    coalesce(dbo.fn_GetLocalizedLabel([Solution].[SolutionId], 'friendlyname', 11, us.UILanguageId), [Solution].[FriendlyName]),
    dbo.fn_UTCToTzCodeSpecificLocalTime([Solution].[InstalledOn],
			us.TimeZoneCode),
        [Solution].[InstalledOn],
    [Solution].[IsApiManaged],
    [Solution].[IsManaged],
    IsManagedPLTable.Value,
    [Solution].[IsVisible],
    [Solution].[ModifiedBy],
    [Solution].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Solution].[ModifiedOn],
			us.TimeZoneCode),
        [Solution].[ModifiedOn],
    [Solution].[ModifiedOnBehalfBy],
    --[Solution].[ModifiedOnBehalfByDsc]
    0,
    [Solution].[ModifiedOnBehalfByName],
    [Solution].[ModifiedOnBehalfByYomiName],
    [Solution].[OrganizationId],
    [Solution].[OrganizationIdName],
    [Solution].[ParentSolutionId],
    [Solution].[ParentSolutionIdName],
    [Solution].[PinpointAssetId],
    [Solution].[PinpointPublisherId],
    [Solution].[PinpointSolutionDefaultLocale],
    [Solution].[PinpointSolutionId],
    [Solution].[PublisherId],
    [Solution].[PublisherIdName],
    [Solution].[PublisherIdOptionValuePrefix],
    [Solution].[PublisherIdPrefix],
    [Solution].[SolutionId],
    [Solution].[SolutionPackageVersion],
    [Solution].[SolutionType],
    [Solution].[TemplateSuffix],
    [Solution].[UniqueName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Solution].[UpdatedOn],
			us.TimeZoneCode),
        [Solution].[UpdatedOn],
    [Solution].[UpgradeInfo],
    [Solution].[Version],
    [Solution].[VersionNumber]
from Solution
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 7100
		and [IsManagedPLTable].AttributeValue = [Solution].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(7100) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Solution].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSolution] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSolution] TO [CRMReaderRole]
    AS [dbo];

