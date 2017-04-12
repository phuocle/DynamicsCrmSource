SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for similarityrule
--
create view [dbo].[FilteredSimilarityRule] (
    [activerulefetchxml],
    [baseentityname],
    [baseentitytypecode],
    [baseentitytypecodename],
    [componentstate],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [exchangerate],
    [excludeinactiverecords],
    [excludeinactiverecordsname],
    [fetchxmllist],
    [importsequencenumber],
    [introducedversion],
    [ismanaged],
    [matchingentityname],
    [matchingentitytypecode],
    [matchingentitytypecodename],
    [maxkeywords],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [ngramsize],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [ruleconditionxml],
    [similarityruleid],
    [similarityruleidunique],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [SimilarityRule].[ActiveRuleFetchXML],
    [SimilarityRule].[BaseEntityName],
    [SimilarityRule].[BaseEntityTypeCode],
    BaseEntityTypeCodePLTable.Value,
    [SimilarityRule].[ComponentState],
    dbo.fn_UTCToTzSpecificLocalTime([SimilarityRule].[CreatedOn], 
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
        [SimilarityRule].[CreatedOn],
    [SimilarityRule].[CreatedOnBehalfBy],
    [SimilarityRule].[CreatedOnBehalfByName],
    [SimilarityRule].[CreatedOnBehalfByYomiName],
    [SimilarityRule].[Description],
    [SimilarityRule].[ExchangeRate],
    [SimilarityRule].[ExcludeInactiveRecords],
    ExcludeInactiveRecordsPLTable.Value,
    [SimilarityRule].[FetchXmlList],
    [SimilarityRule].[ImportSequenceNumber],
    [SimilarityRule].[IntroducedVersion],
    [SimilarityRule].[IsManaged],
    [SimilarityRule].[MatchingEntityName],
    [SimilarityRule].[MatchingEntityTypeCode],
    MatchingEntityTypeCodePLTable.Value,
    [SimilarityRule].[MaxKeyWords],
    dbo.fn_UTCToTzSpecificLocalTime([SimilarityRule].[ModifiedOn], 
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
        [SimilarityRule].[ModifiedOn],
    [SimilarityRule].[ModifiedOnBehalfBy],
    [SimilarityRule].[ModifiedOnBehalfByName],
    [SimilarityRule].[ModifiedOnBehalfByYomiName],
    [SimilarityRule].[name],
    [SimilarityRule].[NgramSize],
    [SimilarityRule].[OrganizationId],
    [SimilarityRule].[OrganizationIdName],
    dbo.fn_UTCToTzSpecificLocalTime([SimilarityRule].[OverriddenCreatedOn], 
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
        [SimilarityRule].[OverriddenCreatedOn],
    dbo.fn_UTCToTzSpecificLocalTime([SimilarityRule].[OverwriteTime], 
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
        [SimilarityRule].[OverwriteTime],
    [SimilarityRule].[RuleConditionXml],
    [SimilarityRule].[SimilarityRuleId],
    [SimilarityRule].[SimilarityRuleIdUnique],
    [SimilarityRule].[SolutionId],
    [SimilarityRule].[statecode],
    statecodePLTable.Value,
    [SimilarityRule].[statuscode],
    statuscodePLTable.Value,
    [SimilarityRule].[TimeZoneRuleVersionNumber],
    [SimilarityRule].[TransactionCurrencyId],
    [SimilarityRule].[TransactionCurrencyIdName],
    [SimilarityRule].[UTCConversionTimeZoneCode],
    [SimilarityRule].[VersionNumber]
from SimilarityRule
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [BaseEntityTypeCodePLTable] on 
		([BaseEntityTypeCodePLTable].AttributeName = 'baseentitytypecode'
		and [BaseEntityTypeCodePLTable].ObjectTypeCode = 9951
		and [BaseEntityTypeCodePLTable].AttributeValue = [SimilarityRule].[BaseEntityTypeCode]
		and [BaseEntityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ExcludeInactiveRecordsPLTable] on 
		([ExcludeInactiveRecordsPLTable].AttributeName = 'excludeinactiverecords'
		and [ExcludeInactiveRecordsPLTable].ObjectTypeCode = 9951
		and [ExcludeInactiveRecordsPLTable].AttributeValue = [SimilarityRule].[ExcludeInactiveRecords]
		and [ExcludeInactiveRecordsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [MatchingEntityTypeCodePLTable] on 
		([MatchingEntityTypeCodePLTable].AttributeName = 'matchingentitytypecode'
		and [MatchingEntityTypeCodePLTable].ObjectTypeCode = 9951
		and [MatchingEntityTypeCodePLTable].AttributeValue = [SimilarityRule].[MatchingEntityTypeCode]
		and [MatchingEntityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 9951
		and [statecodePLTable].AttributeValue = [SimilarityRule].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 9951
		and [statuscodePLTable].AttributeValue = [SimilarityRule].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9951) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SimilarityRule].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredSimilarityRule] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSimilarityRule] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
