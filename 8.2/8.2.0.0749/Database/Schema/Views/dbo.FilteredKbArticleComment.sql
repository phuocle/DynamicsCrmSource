SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for kbarticlecomment
--
create view [dbo].[FilteredKbArticleComment] (
    [commenttext],
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
    [kbarticlecommentid],
    [kbarticleid],
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
    [organizationid],
    [title],
    [versionnumber]
) with view_metadata as
select
    [KbArticleComment].[CommentText],
    [KbArticleComment].[CreatedBy],
    --[KbArticleComment].[CreatedByDsc]
    0,
    [KbArticleComment].[CreatedByName],
    [KbArticleComment].[CreatedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([KbArticleComment].[CreatedOn], 
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
        [KbArticleComment].[CreatedOn],
    [KbArticleComment].[CreatedOnBehalfBy],
    --[KbArticleComment].[CreatedOnBehalfByDsc]
    0,
    [KbArticleComment].[CreatedOnBehalfByName],
    [KbArticleComment].[CreatedOnBehalfByYomiName],
    [KbArticleComment].[KbArticleCommentId],
    [KbArticleComment].[KbArticleId],
    [KbArticleComment].[ModifiedBy],
    --[KbArticleComment].[ModifiedByDsc]
    0,
    [KbArticleComment].[ModifiedByName],
    [KbArticleComment].[ModifiedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([KbArticleComment].[ModifiedOn], 
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
        [KbArticleComment].[ModifiedOn],
    [KbArticleComment].[ModifiedOnBehalfBy],
    --[KbArticleComment].[ModifiedOnBehalfByDsc]
    0,
    [KbArticleComment].[ModifiedOnBehalfByName],
    [KbArticleComment].[ModifiedOnBehalfByYomiName],
    [KbArticleComment].[OrganizationId],
    [KbArticleComment].[Title],
    [KbArticleComment].[VersionNumber]
from KbArticleComment
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(127) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [KbArticleComment].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredKbArticleComment] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredKbArticleComment] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
