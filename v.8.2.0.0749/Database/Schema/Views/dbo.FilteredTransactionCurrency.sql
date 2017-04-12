SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for transactioncurrency
--
create view [dbo].[FilteredTransactionCurrency] (
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
    [currencyname],
    [currencyprecision],
    [currencysymbol],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [importsequencenumber],
    [isocurrencycode],
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
    [organizationid],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [transactioncurrencyid],
    [versionnumber]
) with view_metadata as
select
    [TransactionCurrency].[CreatedBy],
    --[TransactionCurrency].[CreatedByDsc]
    0,
    [TransactionCurrency].[CreatedByName],
    [TransactionCurrency].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([TransactionCurrency].[CreatedOn],
			us.TimeZoneCode),
        [TransactionCurrency].[CreatedOn],
    [TransactionCurrency].[CreatedOnBehalfBy],
    --[TransactionCurrency].[CreatedOnBehalfByDsc]
    0,
    [TransactionCurrency].[CreatedOnBehalfByName],
    [TransactionCurrency].[CreatedOnBehalfByYomiName],
    [TransactionCurrency].[CurrencyName],
    [TransactionCurrency].[CurrencyPrecision],
    [TransactionCurrency].[CurrencySymbol],
    cast([TransactionCurrency].[EntityImage] as varbinary(max)),
    [TransactionCurrency].[EntityImageId],
    [TransactionCurrency].[EntityImage_Timestamp],
    [TransactionCurrency].[EntityImage_URL],
    [TransactionCurrency].[ExchangeRate],
    [TransactionCurrency].[ImportSequenceNumber],
    [TransactionCurrency].[ISOCurrencyCode],
    [TransactionCurrency].[ModifiedBy],
    --[TransactionCurrency].[ModifiedByDsc]
    0,
    [TransactionCurrency].[ModifiedByName],
    [TransactionCurrency].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([TransactionCurrency].[ModifiedOn],
			us.TimeZoneCode),
        [TransactionCurrency].[ModifiedOn],
    [TransactionCurrency].[ModifiedOnBehalfBy],
    --[TransactionCurrency].[ModifiedOnBehalfByDsc]
    0,
    [TransactionCurrency].[ModifiedOnBehalfByName],
    [TransactionCurrency].[ModifiedOnBehalfByYomiName],
    [TransactionCurrency].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([TransactionCurrency].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [TransactionCurrency].[OverriddenCreatedOn],
    [TransactionCurrency].[StateCode],
    StateCodePLTable.Value,
    [TransactionCurrency].[StatusCode],
    StatusCodePLTable.Value,
    [TransactionCurrency].[TransactionCurrencyId],
    [TransactionCurrency].[VersionNumber]
from TransactionCurrency
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9105
		and [StateCodePLTable].AttributeValue = [TransactionCurrency].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9105
		and [StatusCodePLTable].AttributeValue = [TransactionCurrency].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9105) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [TransactionCurrency].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredTransactionCurrency] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredTransactionCurrency] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO