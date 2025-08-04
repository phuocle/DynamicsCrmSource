

--
-- report view for similarityrule
--
create view dbo.[FilteredSimilarityRule] (
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
    dbo.fn_UTCToTzCodeSpecificLocalTime([SimilarityRule].[CreatedOn],
			us.TimeZoneCode),
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
    dbo.fn_UTCToTzCodeSpecificLocalTime([SimilarityRule].[ModifiedOn],
			us.TimeZoneCode),
        [SimilarityRule].[ModifiedOn],
    [SimilarityRule].[ModifiedOnBehalfBy],
    [SimilarityRule].[ModifiedOnBehalfByName],
    [SimilarityRule].[ModifiedOnBehalfByYomiName],
    [SimilarityRule].[name],
    [SimilarityRule].[NgramSize],
    [SimilarityRule].[OrganizationId],
    [SimilarityRule].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SimilarityRule].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SimilarityRule].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SimilarityRule].[OverwriteTime],
			us.TimeZoneCode),
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSimilarityRule] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSimilarityRule] TO [CRMReaderRole]
    AS [dbo];

