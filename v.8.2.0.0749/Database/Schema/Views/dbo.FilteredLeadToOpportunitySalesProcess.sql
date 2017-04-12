SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for leadtoopportunitysalesprocess
--
create view [dbo].[FilteredLeadToOpportunitySalesProcess] (
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
    [leadid],
    [leadidname],
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
    [LeadToOpportunitySalesProcess].[ActiveStageId],
    [LeadToOpportunitySalesProcess].[ActiveStageIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadToOpportunitySalesProcess].[ActiveStageStartedOn],
			us.TimeZoneCode),
        [LeadToOpportunitySalesProcess].[ActiveStageStartedOn],
    [LeadToOpportunitySalesProcess].[BusinessProcessFlowInstanceId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadToOpportunitySalesProcess].[CompletedOn],
			us.TimeZoneCode),
        [LeadToOpportunitySalesProcess].[CompletedOn],
    [LeadToOpportunitySalesProcess].[CreatedBy],
    [LeadToOpportunitySalesProcess].[CreatedByName],
    [LeadToOpportunitySalesProcess].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadToOpportunitySalesProcess].[CreatedOn],
			us.TimeZoneCode),
        [LeadToOpportunitySalesProcess].[CreatedOn],
    [LeadToOpportunitySalesProcess].[CreatedOnBehalfBy],
    [LeadToOpportunitySalesProcess].[CreatedOnBehalfByName],
    [LeadToOpportunitySalesProcess].[CreatedOnBehalfByYomiName],
    [LeadToOpportunitySalesProcess].[Duration],
    [LeadToOpportunitySalesProcess].[ExchangeRate],
    [LeadToOpportunitySalesProcess].[ImportSequenceNumber],
    [LeadToOpportunitySalesProcess].[LeadId],
    [LeadToOpportunitySalesProcess].[LeadIdName],
    [LeadToOpportunitySalesProcess].[ModifiedBy],
    [LeadToOpportunitySalesProcess].[ModifiedByName],
    [LeadToOpportunitySalesProcess].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadToOpportunitySalesProcess].[ModifiedOn],
			us.TimeZoneCode),
        [LeadToOpportunitySalesProcess].[ModifiedOn],
    [LeadToOpportunitySalesProcess].[ModifiedOnBehalfBy],
    [LeadToOpportunitySalesProcess].[ModifiedOnBehalfByName],
    [LeadToOpportunitySalesProcess].[ModifiedOnBehalfByYomiName],
    [LeadToOpportunitySalesProcess].[Name],
    [LeadToOpportunitySalesProcess].[OpportunityId],
    [LeadToOpportunitySalesProcess].[OpportunityIdName],
    [LeadToOpportunitySalesProcess].[OrganizationId],
    [LeadToOpportunitySalesProcess].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadToOpportunitySalesProcess].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [LeadToOpportunitySalesProcess].[OverriddenCreatedOn],
    [LeadToOpportunitySalesProcess].[ProcessId],
    [LeadToOpportunitySalesProcess].[ProcessIdName],
    [LeadToOpportunitySalesProcess].[StateCode],
    StateCodePLTable.Value,
    [LeadToOpportunitySalesProcess].[StatusCode],
    StatusCodePLTable.Value,
    [LeadToOpportunitySalesProcess].[TransactionCurrencyId],
    [LeadToOpportunitySalesProcess].[TransactionCurrencyIdName],
    [LeadToOpportunitySalesProcess].[TraversedPath],
    [LeadToOpportunitySalesProcess].[VersionNumber]
from LeadToOpportunitySalesProcess
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 954
		and [StateCodePLTable].AttributeValue = [LeadToOpportunitySalesProcess].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 954
		and [StatusCodePLTable].AttributeValue = [LeadToOpportunitySalesProcess].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(954) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [LeadToOpportunitySalesProcess].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredLeadToOpportunitySalesProcess] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredLeadToOpportunitySalesProcess] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
