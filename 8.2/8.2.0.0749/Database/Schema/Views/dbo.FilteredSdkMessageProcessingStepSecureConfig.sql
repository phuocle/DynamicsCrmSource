SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for sdkmessageprocessingstepsecureconfig
--
create view [dbo].[FilteredSdkMessageProcessingStepSecureConfig] (
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
    dbo.fn_UTCToTzSpecificLocalTime([SdkMessageProcessingStepSecureConfig].[CreatedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
        [SdkMessageProcessingStepSecureConfig].[CreatedOn],
    [SdkMessageProcessingStepSecureConfig].[CreatedOnBehalfBy],
    --[SdkMessageProcessingStepSecureConfig].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageProcessingStepSecureConfig].[CreatedOnBehalfByName],
    [SdkMessageProcessingStepSecureConfig].[CreatedOnBehalfByYomiName],
    [SdkMessageProcessingStepSecureConfig].[CustomizationLevel],
    [SdkMessageProcessingStepSecureConfig].[ModifiedBy],
    [SdkMessageProcessingStepSecureConfig].[ModifiedByName],
    dbo.fn_UTCToTzSpecificLocalTime([SdkMessageProcessingStepSecureConfig].[ModifiedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
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
GRANT SELECT ON  [dbo].[FilteredSdkMessageProcessingStepSecureConfig] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSdkMessageProcessingStepSecureConfig] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
