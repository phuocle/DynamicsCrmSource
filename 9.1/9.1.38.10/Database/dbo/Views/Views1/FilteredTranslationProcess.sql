

--
-- report view for translationprocess
--
create view dbo.[FilteredTranslationProcess] (
    [activestageid],
    [activestageidname],
    [activestagestartedon],
    [activestagestartedonutc],
    [businessprocessflowinstanceid],
    [completedon],
    [completedonutc],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [duration],
    [exchangerate],
    [importsequencenumber],
    [knowledgearticleid],
    [knowledgearticleidname],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [processid],
    [processidname],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [versionnumber]
) with view_metadata as
select
    [TranslationProcess].[ActiveStageId],
    [TranslationProcess].[ActiveStageIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([TranslationProcess].[ActiveStageStartedOn],
			us.TimeZoneCode),
        [TranslationProcess].[ActiveStageStartedOn],
    [TranslationProcess].[BusinessProcessFlowInstanceId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([TranslationProcess].[CompletedOn],
			us.TimeZoneCode),
        [TranslationProcess].[CompletedOn],
    [TranslationProcess].[CreatedBy],
    [TranslationProcess].[CreatedByName],
    [TranslationProcess].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([TranslationProcess].[CreatedOn],
			us.TimeZoneCode),
        [TranslationProcess].[CreatedOn],
    [TranslationProcess].[CreatedOnBehalfBy],
    [TranslationProcess].[CreatedOnBehalfByName],
    [TranslationProcess].[CreatedOnBehalfByYomiName],
    [TranslationProcess].[Duration],
    [TranslationProcess].[ExchangeRate],
    [TranslationProcess].[ImportSequenceNumber],
    [TranslationProcess].[KnowledgeArticleId],
    [TranslationProcess].[KnowledgeArticleIdName],
    [TranslationProcess].[ModifiedBy],
    [TranslationProcess].[ModifiedByName],
    [TranslationProcess].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([TranslationProcess].[ModifiedOn],
			us.TimeZoneCode),
        [TranslationProcess].[ModifiedOn],
    [TranslationProcess].[ModifiedOnBehalfBy],
    [TranslationProcess].[ModifiedOnBehalfByName],
    [TranslationProcess].[ModifiedOnBehalfByYomiName],
    [TranslationProcess].[Name],
    [TranslationProcess].[OrganizationId],
    [TranslationProcess].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([TranslationProcess].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [TranslationProcess].[OverriddenCreatedOn],
    [TranslationProcess].[ProcessId],
    [TranslationProcess].[ProcessIdName],
    [TranslationProcess].[StateCode],
    StateCodePLTable.Value,
    [TranslationProcess].[StatusCode],
    StatusCodePLTable.Value,
    [TranslationProcess].[TransactionCurrencyId],
    [TranslationProcess].[TransactionCurrencyIdName],
    [TranslationProcess].[TraversedPath],
    [TranslationProcess].[VersionNumber]
from TranslationProcess
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 951
		and [StateCodePLTable].AttributeValue = [TranslationProcess].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 951
		and [StatusCodePLTable].AttributeValue = [TranslationProcess].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(951) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [TranslationProcess].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTranslationProcess] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTranslationProcess] TO [CRMReaderRole]
    AS [dbo];

