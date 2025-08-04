

--
-- report view for opportunitysalesprocess
--
create view dbo.[FilteredOpportunitySalesProcess] 
(
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
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [opportunityid],
    [opportunityidname],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [processid],
    [processidname],
    [quoteid],
    [quoteidname],
    [salesorderid],
    [salesorderidname],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [OpportunitySalesProcess].[ActiveStageId],
    [OpportunitySalesProcess].[ActiveStageIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunitySalesProcess].[ActiveStageStartedOn],
			us.TimeZoneCode),
        [OpportunitySalesProcess].[ActiveStageStartedOn],
    [OpportunitySalesProcess].[BusinessProcessFlowInstanceId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunitySalesProcess].[CompletedOn],
			us.TimeZoneCode),
        [OpportunitySalesProcess].[CompletedOn],
    [OpportunitySalesProcess].[CreatedBy],
    [OpportunitySalesProcess].[CreatedByName],
    [OpportunitySalesProcess].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunitySalesProcess].[CreatedOn],
			us.TimeZoneCode),
        [OpportunitySalesProcess].[CreatedOn],
    [OpportunitySalesProcess].[CreatedOnBehalfBy],
    [OpportunitySalesProcess].[CreatedOnBehalfByName],
    [OpportunitySalesProcess].[CreatedOnBehalfByYomiName],
    [OpportunitySalesProcess].[Duration],
    [OpportunitySalesProcess].[ExchangeRate],
    [OpportunitySalesProcess].[ImportSequenceNumber],
    [OpportunitySalesProcess].[ModifiedBy],
    [OpportunitySalesProcess].[ModifiedByName],
    [OpportunitySalesProcess].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunitySalesProcess].[ModifiedOn],
			us.TimeZoneCode),
        [OpportunitySalesProcess].[ModifiedOn],
    [OpportunitySalesProcess].[ModifiedOnBehalfBy],
    [OpportunitySalesProcess].[ModifiedOnBehalfByName],
    [OpportunitySalesProcess].[ModifiedOnBehalfByYomiName],
    [OpportunitySalesProcess].[Name],
    [OpportunitySalesProcess].[OpportunityId],
    [OpportunitySalesProcess].[OpportunityIdName],
    [OpportunitySalesProcess].[OrganizationId],
    [OpportunitySalesProcess].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunitySalesProcess].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [OpportunitySalesProcess].[OverriddenCreatedOn],
    [OpportunitySalesProcess].[ProcessId],
    [OpportunitySalesProcess].[ProcessIdName],
    [OpportunitySalesProcess].[QuoteId],
    [OpportunitySalesProcess].[QuoteIdName],
    [OpportunitySalesProcess].[SalesOrderId],
    [OpportunitySalesProcess].[SalesOrderIdName],
    [OpportunitySalesProcess].[StateCode],
    StateCodePLTable.Value,
    [OpportunitySalesProcess].[StatusCode],
    StatusCodePLTable.Value,
    [OpportunitySalesProcess].[TimeZoneRuleVersionNumber],
    [OpportunitySalesProcess].[TransactionCurrencyId],
    [OpportunitySalesProcess].[TransactionCurrencyIdName],
    [OpportunitySalesProcess].[TraversedPath],
    [OpportunitySalesProcess].[UTCConversionTimeZoneCode],
    [OpportunitySalesProcess].[VersionNumber]
from OpportunitySalesProcess
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 953
		and [StateCodePLTable].AttributeValue = [OpportunitySalesProcess].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 953
		and [StatusCodePLTable].AttributeValue = [OpportunitySalesProcess].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(953) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [OpportunitySalesProcess].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunitySalesProcess] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunitySalesProcess] TO [CRMReaderRole]
    AS [dbo];

