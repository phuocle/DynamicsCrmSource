

--
-- report view for sdkmessagepair
--
create view dbo.[FilteredSdkMessagePair] 
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
    [deprecatedversion],
    [endpoint],
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
    [namespace],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [sdkmessagebindinginformation],
    [sdkmessageid],
    [sdkmessagepairid],
    [sdkmessagepairidunique],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [SdkMessagePair].[ComponentState],
    [SdkMessagePair].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessagePair].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessagePair].[CreatedOn],
    [SdkMessagePair].[CreatedOnBehalfBy],
    --[SdkMessagePair].[CreatedOnBehalfByDsc]
    0,
    [SdkMessagePair].[CreatedOnBehalfByName],
    [SdkMessagePair].[CreatedOnBehalfByYomiName],
    [SdkMessagePair].[CustomizationLevel],
    [SdkMessagePair].[DeprecatedVersion],
    [SdkMessagePair].[Endpoint],
    [SdkMessagePair].[IntroducedVersion],
    [SdkMessagePair].[IsManaged],
    IsManagedPLTable.Value,
    [SdkMessagePair].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessagePair].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessagePair].[ModifiedOn],
    [SdkMessagePair].[ModifiedOnBehalfBy],
    --[SdkMessagePair].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessagePair].[ModifiedOnBehalfByName],
    [SdkMessagePair].[ModifiedOnBehalfByYomiName],
    [SdkMessagePair].[Namespace],
    [SdkMessagePair].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessagePair].[OverwriteTime],
			us.TimeZoneCode),
        [SdkMessagePair].[OverwriteTime],
    [SdkMessagePair].[SdkMessageBindingInformation],
    [SdkMessagePair].[SdkMessageId],
    [SdkMessagePair].[SdkMessagePairId],
    [SdkMessagePair].[SdkMessagePairIdUnique],
    [SdkMessagePair].[SolutionId],
    [SdkMessagePair].[VersionNumber]
from SdkMessagePair
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4613
		and [IsManagedPLTable].AttributeValue = [SdkMessagePair].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4613) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessagePair].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessagePair] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessagePair] TO [CRMReaderRole]
    AS [dbo];

