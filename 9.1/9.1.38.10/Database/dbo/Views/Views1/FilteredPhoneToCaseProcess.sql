

--
-- report view for phonetocaseprocess
--
create view dbo.[FilteredPhoneToCaseProcess] 
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
    [incidentid],
    [incidentidname],
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
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [PhoneToCaseProcess].[ActiveStageId],
    [PhoneToCaseProcess].[ActiveStageIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneToCaseProcess].[ActiveStageStartedOn],
			us.TimeZoneCode),
        [PhoneToCaseProcess].[ActiveStageStartedOn],
    [PhoneToCaseProcess].[BusinessProcessFlowInstanceId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneToCaseProcess].[CompletedOn],
			us.TimeZoneCode),
        [PhoneToCaseProcess].[CompletedOn],
    [PhoneToCaseProcess].[CreatedBy],
    [PhoneToCaseProcess].[CreatedByName],
    [PhoneToCaseProcess].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneToCaseProcess].[CreatedOn],
			us.TimeZoneCode),
        [PhoneToCaseProcess].[CreatedOn],
    [PhoneToCaseProcess].[CreatedOnBehalfBy],
    [PhoneToCaseProcess].[CreatedOnBehalfByName],
    [PhoneToCaseProcess].[CreatedOnBehalfByYomiName],
    [PhoneToCaseProcess].[Duration],
    [PhoneToCaseProcess].[ExchangeRate],
    [PhoneToCaseProcess].[ImportSequenceNumber],
    [PhoneToCaseProcess].[IncidentId],
    [PhoneToCaseProcess].[IncidentIdName],
    [PhoneToCaseProcess].[ModifiedBy],
    [PhoneToCaseProcess].[ModifiedByName],
    [PhoneToCaseProcess].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneToCaseProcess].[ModifiedOn],
			us.TimeZoneCode),
        [PhoneToCaseProcess].[ModifiedOn],
    [PhoneToCaseProcess].[ModifiedOnBehalfBy],
    [PhoneToCaseProcess].[ModifiedOnBehalfByName],
    [PhoneToCaseProcess].[ModifiedOnBehalfByYomiName],
    [PhoneToCaseProcess].[Name],
    [PhoneToCaseProcess].[OrganizationId],
    [PhoneToCaseProcess].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneToCaseProcess].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [PhoneToCaseProcess].[OverriddenCreatedOn],
    [PhoneToCaseProcess].[ProcessId],
    [PhoneToCaseProcess].[ProcessIdName],
    [PhoneToCaseProcess].[StateCode],
    StateCodePLTable.Value,
    [PhoneToCaseProcess].[StatusCode],
    StatusCodePLTable.Value,
    [PhoneToCaseProcess].[TimeZoneRuleVersionNumber],
    [PhoneToCaseProcess].[TransactionCurrencyId],
    [PhoneToCaseProcess].[TransactionCurrencyIdName],
    [PhoneToCaseProcess].[TraversedPath],
    [PhoneToCaseProcess].[UTCConversionTimeZoneCode],
    [PhoneToCaseProcess].[VersionNumber]
from PhoneToCaseProcess
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 952
		and [StateCodePLTable].AttributeValue = [PhoneToCaseProcess].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 952
		and [StatusCodePLTable].AttributeValue = [PhoneToCaseProcess].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(952) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [PhoneToCaseProcess].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPhoneToCaseProcess] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPhoneToCaseProcess] TO [CRMReaderRole]
    AS [dbo];

