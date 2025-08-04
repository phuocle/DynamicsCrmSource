

--
-- report view for solution
--
create view dbo.[FilteredSolution] (
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
    [pinpointassetid],
    [pinpointpublisherid],
    [pinpointsolutiondefaultlocale],
    [pinpointsolutionid],
    [publisherid],
    [publisheridname],
    [publisheridoptionvalueprefix],
    [publisheridprefix],
    [solutionid],
    [uniquename],
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
    [Solution].[PinpointAssetId],
    [Solution].[PinpointPublisherId],
    [Solution].[PinpointSolutionDefaultLocale],
    [Solution].[PinpointSolutionId],
    [Solution].[PublisherId],
    [Solution].[PublisherIdName],
    [Solution].[PublisherIdOptionValuePrefix],
    [Solution].[PublisherIdPrefix],
    [Solution].[SolutionId],
    [Solution].[UniqueName],
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
    ON OBJECT::[dbo].[FilteredSolution] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSolution] TO [CRMReaderRole]
    AS [dbo];

