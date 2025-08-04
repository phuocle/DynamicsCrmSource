

--
-- report view for kbarticle
--
create view dbo.[FilteredKbArticle] (
    [articlexml],
    [comments],
    [content],
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
    [description],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [importsequencenumber],
    [kbarticleid],
    [kbarticletemplateid],
    [kbarticletemplateiddsc],
    [kbarticletemplateidtitle],
    [keywords],
    [languagecode],
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
    [number],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [subjectid],
    [subjectiddsc],
    [subjectidname],
    [title],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [versionnumber]
) with view_metadata as
select
    [KbArticle].[ArticleXml],
    [KbArticle].[Comments],
    [KbArticle].[Content],
    [KbArticle].[CreatedBy],
    --[KbArticle].[CreatedByDsc]
    0,
    [KbArticle].[CreatedByName],
    [KbArticle].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KbArticle].[CreatedOn],
			us.TimeZoneCode),
        [KbArticle].[CreatedOn],
    [KbArticle].[CreatedOnBehalfBy],
    --[KbArticle].[CreatedOnBehalfByDsc]
    0,
    [KbArticle].[CreatedOnBehalfByName],
    [KbArticle].[CreatedOnBehalfByYomiName],
    [KbArticle].[Description],
    cast([KbArticle].[EntityImage] as varbinary(max)),
    [KbArticle].[EntityImageId],
    [KbArticle].[EntityImage_Timestamp],
    [KbArticle].[EntityImage_URL],
    [KbArticle].[ExchangeRate],
    [KbArticle].[ImportSequenceNumber],
    [KbArticle].[KbArticleId],
    [KbArticle].[KbArticleTemplateId],
    --[KbArticle].[KbArticleTemplateIdDsc]
    0,
    [KbArticle].[KbArticleTemplateIdTitle],
    [KbArticle].[KeyWords],
    [KbArticle].[LanguageCode],
    [KbArticle].[ModifiedBy],
    --[KbArticle].[ModifiedByDsc]
    0,
    [KbArticle].[ModifiedByName],
    [KbArticle].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KbArticle].[ModifiedOn],
			us.TimeZoneCode),
        [KbArticle].[ModifiedOn],
    [KbArticle].[ModifiedOnBehalfBy],
    --[KbArticle].[ModifiedOnBehalfByDsc]
    0,
    [KbArticle].[ModifiedOnBehalfByName],
    [KbArticle].[ModifiedOnBehalfByYomiName],
    [KbArticle].[Number],
    [KbArticle].[OrganizationId],
    --[KbArticle].[OrganizationIdDsc]
    0,
    [KbArticle].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KbArticle].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [KbArticle].[OverriddenCreatedOn],
    [KbArticle].[StateCode],
    StateCodePLTable.Value,
    [KbArticle].[StatusCode],
    StatusCodePLTable.Value,
    [KbArticle].[SubjectId],
    --[KbArticle].[SubjectIdDsc]
    0,
    [KbArticle].[SubjectIdName],
    [KbArticle].[Title],
    [KbArticle].[TransactionCurrencyId],
    [KbArticle].[TransactionCurrencyIdName],
    [KbArticle].[VersionNumber]
from KbArticle
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 127
		and [StateCodePLTable].AttributeValue = [KbArticle].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 127
		and [StatusCodePLTable].AttributeValue = [KbArticle].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(127) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [KbArticle].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKbArticle] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKbArticle] TO [CRMReaderRole]
    AS [dbo];

