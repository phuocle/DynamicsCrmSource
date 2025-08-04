

--
-- report view for applicationfile
--
create view dbo.[FilteredApplicationFile] (
    [body],
    [createdby],
    [createdbydsc],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [fileid],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [versionnumber]
) with view_metadata as
select
    [ApplicationFile].[Body],
    [ApplicationFile].[CreatedBy],
    --[ApplicationFile].[CreatedByDsc]
    0,
    [ApplicationFile].[CreatedByName],
    [ApplicationFile].[CreatedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([ApplicationFile].[CreatedOn], 
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
        [ApplicationFile].[CreatedOn],
    [ApplicationFile].[CreatedOnBehalfBy],
    --[ApplicationFile].[CreatedOnBehalfByDsc]
    0,
    [ApplicationFile].[CreatedOnBehalfByName],
    [ApplicationFile].[CreatedOnBehalfByYomiName],
    [ApplicationFile].[FileId],
    [ApplicationFile].[ModifiedBy],
    --[ApplicationFile].[ModifiedByDsc]
    0,
    [ApplicationFile].[ModifiedByName],
    [ApplicationFile].[ModifiedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([ApplicationFile].[ModifiedOn], 
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
        [ApplicationFile].[ModifiedOn],
    [ApplicationFile].[ModifiedOnBehalfBy],
    --[ApplicationFile].[ModifiedOnBehalfByDsc]
    0,
    [ApplicationFile].[ModifiedOnBehalfByName],
    [ApplicationFile].[ModifiedOnBehalfByYomiName],
    [ApplicationFile].[Name],
    [ApplicationFile].[OrganizationId],
    --[ApplicationFile].[OrganizationIdDsc]
    0,
    [ApplicationFile].[OrganizationIdName],
    [ApplicationFile].[VersionNumber]
from ApplicationFile
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4707) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [ApplicationFile].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredApplicationFile] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredApplicationFile] TO [CRMReaderRole]
    AS [dbo];

