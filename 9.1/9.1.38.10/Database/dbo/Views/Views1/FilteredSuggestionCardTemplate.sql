

--
-- report view for suggestioncardtemplate
--
create view dbo.[FilteredSuggestionCardTemplate] (
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [exchangerate],
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
    [structuredlayout],
    [suggestioncardtemplateid],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode]
) with view_metadata as
select
    [SuggestionCardTemplate].[CreatedBy],
    [SuggestionCardTemplate].[CreatedByName],
    [SuggestionCardTemplate].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SuggestionCardTemplate].[CreatedOn],
			us.TimeZoneCode),
        [SuggestionCardTemplate].[CreatedOn],
    [SuggestionCardTemplate].[CreatedOnBehalfBy],
    [SuggestionCardTemplate].[CreatedOnBehalfByName],
    [SuggestionCardTemplate].[CreatedOnBehalfByYomiName],
    [SuggestionCardTemplate].[ExchangeRate],
    [SuggestionCardTemplate].[ModifiedBy],
    [SuggestionCardTemplate].[ModifiedByName],
    [SuggestionCardTemplate].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SuggestionCardTemplate].[ModifiedOn],
			us.TimeZoneCode),
        [SuggestionCardTemplate].[ModifiedOn],
    [SuggestionCardTemplate].[ModifiedOnBehalfBy],
    [SuggestionCardTemplate].[ModifiedOnBehalfByName],
    [SuggestionCardTemplate].[ModifiedOnBehalfByYomiName],
    [SuggestionCardTemplate].[name],
    [SuggestionCardTemplate].[OrganizationId],
    [SuggestionCardTemplate].[OrganizationIdName],
    [SuggestionCardTemplate].[StructuredLayout],
    [SuggestionCardTemplate].[SuggestionCardTemplateId],
    [SuggestionCardTemplate].[TimeZoneRuleVersionNumber],
    [SuggestionCardTemplate].[TransactionCurrencyId],
    [SuggestionCardTemplate].[TransactionCurrencyIdName],
    [SuggestionCardTemplate].[UTCConversionTimeZoneCode]
from SuggestionCardTemplate
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1190) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SuggestionCardTemplate].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSuggestionCardTemplate] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSuggestionCardTemplate] TO [CRMReaderRole]
    AS [dbo];

