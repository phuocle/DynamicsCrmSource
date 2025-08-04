

--
-- report view for newprocess
--
create view dbo.[FilteredNewProcess] (
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
    [NewProcess].[ActiveStageId],
    [NewProcess].[ActiveStageIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([NewProcess].[ActiveStageStartedOn],
			us.TimeZoneCode),
        [NewProcess].[ActiveStageStartedOn],
    [NewProcess].[BusinessProcessFlowInstanceId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([NewProcess].[CompletedOn],
			us.TimeZoneCode),
        [NewProcess].[CompletedOn],
    [NewProcess].[CreatedBy],
    [NewProcess].[CreatedByName],
    [NewProcess].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([NewProcess].[CreatedOn],
			us.TimeZoneCode),
        [NewProcess].[CreatedOn],
    [NewProcess].[CreatedOnBehalfBy],
    [NewProcess].[CreatedOnBehalfByName],
    [NewProcess].[CreatedOnBehalfByYomiName],
    [NewProcess].[Duration],
    [NewProcess].[ExchangeRate],
    [NewProcess].[ImportSequenceNumber],
    [NewProcess].[KnowledgeArticleId],
    [NewProcess].[KnowledgeArticleIdName],
    [NewProcess].[ModifiedBy],
    [NewProcess].[ModifiedByName],
    [NewProcess].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([NewProcess].[ModifiedOn],
			us.TimeZoneCode),
        [NewProcess].[ModifiedOn],
    [NewProcess].[ModifiedOnBehalfBy],
    [NewProcess].[ModifiedOnBehalfByName],
    [NewProcess].[ModifiedOnBehalfByYomiName],
    [NewProcess].[Name],
    [NewProcess].[OrganizationId],
    [NewProcess].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([NewProcess].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [NewProcess].[OverriddenCreatedOn],
    [NewProcess].[ProcessId],
    [NewProcess].[ProcessIdName],
    [NewProcess].[StateCode],
    StateCodePLTable.Value,
    [NewProcess].[StatusCode],
    StatusCodePLTable.Value,
    [NewProcess].[TransactionCurrencyId],
    [NewProcess].[TransactionCurrencyIdName],
    [NewProcess].[TraversedPath],
    [NewProcess].[VersionNumber]
from NewProcess
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 950
		and [StateCodePLTable].AttributeValue = [NewProcess].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 950
		and [StatusCodePLTable].AttributeValue = [NewProcess].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(950) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [NewProcess].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredNewProcess] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredNewProcess] TO [CRMReaderRole]
    AS [dbo];

