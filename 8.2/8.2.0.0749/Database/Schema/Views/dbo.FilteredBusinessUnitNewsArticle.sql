SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for businessunitnewsarticle
--
create view [dbo].[FilteredBusinessUnitNewsArticle] (
    [activeon],
    [activeonutc],
    [activeuntil],
    [activeuntilutc],
    [articletitle],
    [articletypecode],
    [articletypecodename],
    [articleurl],
    [businessunitnewsarticleid],
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
    [importsequencenumber],
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
    [newsarticle],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [showonhomepage],
    [showonhomepagename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    dbo.fn_UTCToTzSpecificLocalTime([BusinessUnitNewsArticle].[ActiveOn], 
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
        [BusinessUnitNewsArticle].[ActiveOn],
    dbo.fn_UTCToTzSpecificLocalTime([BusinessUnitNewsArticle].[ActiveUntil], 
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
        [BusinessUnitNewsArticle].[ActiveUntil],
    [BusinessUnitNewsArticle].[ArticleTitle],
    [BusinessUnitNewsArticle].[ArticleTypeCode],
    ArticleTypeCodePLTable.Value,
    [BusinessUnitNewsArticle].[ArticleUrl],
    [BusinessUnitNewsArticle].[BusinessUnitNewsArticleId],
    [BusinessUnitNewsArticle].[CreatedBy],
    --[BusinessUnitNewsArticle].[CreatedByDsc]
    0,
    [BusinessUnitNewsArticle].[CreatedByName],
    [BusinessUnitNewsArticle].[CreatedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([BusinessUnitNewsArticle].[CreatedOn], 
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
        [BusinessUnitNewsArticle].[CreatedOn],
    [BusinessUnitNewsArticle].[CreatedOnBehalfBy],
    --[BusinessUnitNewsArticle].[CreatedOnBehalfByDsc]
    0,
    [BusinessUnitNewsArticle].[CreatedOnBehalfByName],
    [BusinessUnitNewsArticle].[CreatedOnBehalfByYomiName],
    [BusinessUnitNewsArticle].[ImportSequenceNumber],
    [BusinessUnitNewsArticle].[ModifiedBy],
    --[BusinessUnitNewsArticle].[ModifiedByDsc]
    0,
    [BusinessUnitNewsArticle].[ModifiedByName],
    [BusinessUnitNewsArticle].[ModifiedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([BusinessUnitNewsArticle].[ModifiedOn], 
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
        [BusinessUnitNewsArticle].[ModifiedOn],
    [BusinessUnitNewsArticle].[ModifiedOnBehalfBy],
    --[BusinessUnitNewsArticle].[ModifiedOnBehalfByDsc]
    0,
    [BusinessUnitNewsArticle].[ModifiedOnBehalfByName],
    [BusinessUnitNewsArticle].[ModifiedOnBehalfByYomiName],
    [BusinessUnitNewsArticle].[NewsArticle],
    [BusinessUnitNewsArticle].[OrganizationId],
    --[BusinessUnitNewsArticle].[OrganizationIdDsc]
    0,
    [BusinessUnitNewsArticle].[OrganizationIdName],
    dbo.fn_UTCToTzSpecificLocalTime([BusinessUnitNewsArticle].[OverriddenCreatedOn], 
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
        [BusinessUnitNewsArticle].[OverriddenCreatedOn],
    [BusinessUnitNewsArticle].[ShowOnHomepage],
    ShowOnHomepagePLTable.Value,
    [BusinessUnitNewsArticle].[TimeZoneRuleVersionNumber],
    [BusinessUnitNewsArticle].[UTCConversionTimeZoneCode],
    [BusinessUnitNewsArticle].[VersionNumber]
from BusinessUnitNewsArticle
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ArticleTypeCodePLTable] on 
		([ArticleTypeCodePLTable].AttributeName = 'articletypecode'
		and [ArticleTypeCodePLTable].ObjectTypeCode = 132
		and [ArticleTypeCodePLTable].AttributeValue = [BusinessUnitNewsArticle].[ArticleTypeCode]
		and [ArticleTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShowOnHomepagePLTable] on 
		([ShowOnHomepagePLTable].AttributeName = 'showonhomepage'
		and [ShowOnHomepagePLTable].ObjectTypeCode = 132
		and [ShowOnHomepagePLTable].AttributeValue = [BusinessUnitNewsArticle].[ShowOnHomepage]
		and [ShowOnHomepagePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(132) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [BusinessUnitNewsArticle].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredBusinessUnitNewsArticle] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredBusinessUnitNewsArticle] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
