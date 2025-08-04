

--
-- report view for sdkmessagepair
--
create view dbo.[FilteredSdkMessagePair] (
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [endpoint],
    [modifiedby],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [namespace],
    [organizationid],
    [sdkmessageid],
    [sdkmessagepairid],
    [sdkmessagepairidunique],
    [versionnumber]
) with view_metadata as
select
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
    [SdkMessagePair].[Endpoint],
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
    [SdkMessagePair].[SdkMessageId],
    [SdkMessagePair].[SdkMessagePairId],
    [SdkMessagePair].[SdkMessagePairIdUnique],
    [SdkMessagePair].[VersionNumber]
from SdkMessagePair
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4613) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessagePair].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessagePair] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessagePair] TO [CRMReaderRole]
    AS [dbo];

