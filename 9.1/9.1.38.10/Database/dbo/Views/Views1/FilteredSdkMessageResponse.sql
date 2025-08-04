

--
-- report view for sdkmessageresponse
--
create view dbo.[FilteredSdkMessageResponse] 
(
    [componentstate],
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [introducedversion],
    [ismanaged],
    [ismanagedname],
    [modifiedby],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [sdkmessagerequestid],
    [sdkmessageresponseid],
    [sdkmessageresponseidunique],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [SdkMessageResponse].[ComponentState],
    [SdkMessageResponse].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageResponse].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageResponse].[CreatedOn],
    [SdkMessageResponse].[CreatedOnBehalfBy],
    --[SdkMessageResponse].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageResponse].[CreatedOnBehalfByName],
    [SdkMessageResponse].[CreatedOnBehalfByYomiName],
    [SdkMessageResponse].[CustomizationLevel],
    [SdkMessageResponse].[IntroducedVersion],
    [SdkMessageResponse].[IsManaged],
    IsManagedPLTable.Value,
    [SdkMessageResponse].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageResponse].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageResponse].[ModifiedOn],
    [SdkMessageResponse].[ModifiedOnBehalfBy],
    --[SdkMessageResponse].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageResponse].[ModifiedOnBehalfByName],
    [SdkMessageResponse].[ModifiedOnBehalfByYomiName],
    [SdkMessageResponse].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageResponse].[OverwriteTime],
			us.TimeZoneCode),
        [SdkMessageResponse].[OverwriteTime],
    [SdkMessageResponse].[SdkMessageRequestId],
    [SdkMessageResponse].[SdkMessageResponseId],
    [SdkMessageResponse].[SdkMessageResponseIdUnique],
    [SdkMessageResponse].[SolutionId],
    [SdkMessageResponse].[VersionNumber]
from SdkMessageResponse
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4610
		and [IsManagedPLTable].AttributeValue = [SdkMessageResponse].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4610) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageResponse].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageResponse] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageResponse] TO [CRMReaderRole]
    AS [dbo];

