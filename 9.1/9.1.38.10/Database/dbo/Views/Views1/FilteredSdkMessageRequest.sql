

--
-- report view for sdkmessagerequest
--
create view dbo.[FilteredSdkMessageRequest] 
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
    [name],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [primaryobjecttypecode],
    [sdkmessagepairid],
    [sdkmessagerequestid],
    [sdkmessagerequestidunique],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [SdkMessageRequest].[ComponentState],
    [SdkMessageRequest].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageRequest].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageRequest].[CreatedOn],
    [SdkMessageRequest].[CreatedOnBehalfBy],
    --[SdkMessageRequest].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageRequest].[CreatedOnBehalfByName],
    [SdkMessageRequest].[CreatedOnBehalfByYomiName],
    [SdkMessageRequest].[CustomizationLevel],
    [SdkMessageRequest].[IntroducedVersion],
    [SdkMessageRequest].[IsManaged],
    IsManagedPLTable.Value,
    [SdkMessageRequest].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageRequest].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageRequest].[ModifiedOn],
    [SdkMessageRequest].[ModifiedOnBehalfBy],
    --[SdkMessageRequest].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageRequest].[ModifiedOnBehalfByName],
    [SdkMessageRequest].[ModifiedOnBehalfByYomiName],
    [SdkMessageRequest].[Name],
    [SdkMessageRequest].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageRequest].[OverwriteTime],
			us.TimeZoneCode),
        [SdkMessageRequest].[OverwriteTime],
    [SdkMessageRequest].[PrimaryObjectTypeCode],
    [SdkMessageRequest].[SdkMessagePairId],
    [SdkMessageRequest].[SdkMessageRequestId],
    [SdkMessageRequest].[SdkMessageRequestIdUnique],
    [SdkMessageRequest].[SolutionId],
    [SdkMessageRequest].[VersionNumber]
from SdkMessageRequest
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4609
		and [IsManagedPLTable].AttributeValue = [SdkMessageRequest].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4609) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageRequest].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageRequest] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageRequest] TO [CRMReaderRole]
    AS [dbo];

