

--
-- report view for expiredprocess
--
create view dbo.[FilteredExpiredProcess] (
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
    [ExpiredProcess].[ActiveStageId],
    [ExpiredProcess].[ActiveStageIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExpiredProcess].[ActiveStageStartedOn],
			us.TimeZoneCode),
        [ExpiredProcess].[ActiveStageStartedOn],
    [ExpiredProcess].[BusinessProcessFlowInstanceId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExpiredProcess].[CompletedOn],
			us.TimeZoneCode),
        [ExpiredProcess].[CompletedOn],
    [ExpiredProcess].[CreatedBy],
    [ExpiredProcess].[CreatedByName],
    [ExpiredProcess].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExpiredProcess].[CreatedOn],
			us.TimeZoneCode),
        [ExpiredProcess].[CreatedOn],
    [ExpiredProcess].[CreatedOnBehalfBy],
    [ExpiredProcess].[CreatedOnBehalfByName],
    [ExpiredProcess].[CreatedOnBehalfByYomiName],
    [ExpiredProcess].[Duration],
    [ExpiredProcess].[ExchangeRate],
    [ExpiredProcess].[ImportSequenceNumber],
    [ExpiredProcess].[KnowledgeArticleId],
    [ExpiredProcess].[KnowledgeArticleIdName],
    [ExpiredProcess].[ModifiedBy],
    [ExpiredProcess].[ModifiedByName],
    [ExpiredProcess].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExpiredProcess].[ModifiedOn],
			us.TimeZoneCode),
        [ExpiredProcess].[ModifiedOn],
    [ExpiredProcess].[ModifiedOnBehalfBy],
    [ExpiredProcess].[ModifiedOnBehalfByName],
    [ExpiredProcess].[ModifiedOnBehalfByYomiName],
    [ExpiredProcess].[Name],
    [ExpiredProcess].[OrganizationId],
    [ExpiredProcess].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExpiredProcess].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ExpiredProcess].[OverriddenCreatedOn],
    [ExpiredProcess].[ProcessId],
    [ExpiredProcess].[ProcessIdName],
    [ExpiredProcess].[StateCode],
    StateCodePLTable.Value,
    [ExpiredProcess].[StatusCode],
    StatusCodePLTable.Value,
    [ExpiredProcess].[TransactionCurrencyId],
    [ExpiredProcess].[TransactionCurrencyIdName],
    [ExpiredProcess].[TraversedPath],
    [ExpiredProcess].[VersionNumber]
from ExpiredProcess
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 955
		and [StateCodePLTable].AttributeValue = [ExpiredProcess].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 955
		and [StatusCodePLTable].AttributeValue = [ExpiredProcess].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(955) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [ExpiredProcess].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredExpiredProcess] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredExpiredProcess] TO [CRMReaderRole]
    AS [dbo];

