

--
-- report view for kbarticlecomment
--
create view dbo.[FilteredKbArticleComment] (
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
    dbo.fn_UTCToTzCodeSpecificLocalTime([KbArticleComment].[CreatedOn],
			us.TimeZoneCode),
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
    dbo.fn_UTCToTzCodeSpecificLocalTime([KbArticleComment].[ModifiedOn],
			us.TimeZoneCode),
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKbArticleComment] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKbArticleComment] TO [CRMReaderRole]
    AS [dbo];

