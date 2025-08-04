

--
-- report view for sdkmessageprocessingstepsecureconfig
--
create view dbo.[FilteredSdkMessageProcessingStepSecureConfig] (
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [sdkmessageprocessingstepsecureconfigid],
    [sdkmessageprocessingstepsecureconfigidunique],
    [secureconfig]
) with view_metadata as
select
    [SdkMessageProcessingStepSecureConfig].[CreatedBy],
    [SdkMessageProcessingStepSecureConfig].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageProcessingStepSecureConfig].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageProcessingStepSecureConfig].[CreatedOn],
    [SdkMessageProcessingStepSecureConfig].[CreatedOnBehalfBy],
    --[SdkMessageProcessingStepSecureConfig].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageProcessingStepSecureConfig].[CreatedOnBehalfByName],
    [SdkMessageProcessingStepSecureConfig].[CreatedOnBehalfByYomiName],
    [SdkMessageProcessingStepSecureConfig].[CustomizationLevel],
    [SdkMessageProcessingStepSecureConfig].[ModifiedBy],
    [SdkMessageProcessingStepSecureConfig].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageProcessingStepSecureConfig].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageProcessingStepSecureConfig].[ModifiedOn],
    [SdkMessageProcessingStepSecureConfig].[ModifiedOnBehalfBy],
    --[SdkMessageProcessingStepSecureConfig].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageProcessingStepSecureConfig].[ModifiedOnBehalfByName],
    [SdkMessageProcessingStepSecureConfig].[ModifiedOnBehalfByYomiName],
    [SdkMessageProcessingStepSecureConfig].[OrganizationId],
    [SdkMessageProcessingStepSecureConfig].[SdkMessageProcessingStepSecureConfigId],
    [SdkMessageProcessingStepSecureConfig].[SdkMessageProcessingStepSecureConfigIdUnique],
    [SdkMessageProcessingStepSecureConfig].[SecureConfig]
from SdkMessageProcessingStepSecureConfig
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4616) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageProcessingStepSecureConfig].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageProcessingStepSecureConfig] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageProcessingStepSecureConfig] TO [CRMReaderRole]
    AS [dbo];

