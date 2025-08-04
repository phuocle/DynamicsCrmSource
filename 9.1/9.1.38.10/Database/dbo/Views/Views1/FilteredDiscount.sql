

--
-- report view for discount
--
create view dbo.[FilteredDiscount] 
(
    [amount],
    [amount_base],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [discountid],
    [discounttypeid],
    [discounttypeidname],
    [exchangerate],
    [highquantity],
    [importsequencenumber],
    [isamounttype],
    [isamounttypename],
    [lowquantity],
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
    [overriddencreatedon],
    [overriddencreatedonutc],
    [percentage],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [Discount].[Amount],
    [Discount].[Amount_Base],
    [Discount].[CreatedBy],
    [Discount].[CreatedByName],
    [Discount].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Discount].[CreatedOn],
			us.TimeZoneCode),
        [Discount].[CreatedOn],
    [Discount].[CreatedOnBehalfBy],
    [Discount].[CreatedOnBehalfByName],
    [Discount].[CreatedOnBehalfByYomiName],
    [Discount].[DiscountId],
    [Discount].[DiscountTypeId],
    [Discount].[DiscountTypeIdName],
    [Discount].[ExchangeRate],
    [Discount].[HighQuantity],
    [Discount].[ImportSequenceNumber],
    [Discount].[IsAmountType],
    IsAmountTypePLTable.Value,
    [Discount].[LowQuantity],
    [Discount].[ModifiedBy],
    [Discount].[ModifiedByName],
    [Discount].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Discount].[ModifiedOn],
			us.TimeZoneCode),
        [Discount].[ModifiedOn],
    [Discount].[ModifiedOnBehalfBy],
    [Discount].[ModifiedOnBehalfByName],
    [Discount].[ModifiedOnBehalfByYomiName],
    [Discount].[Name],
    [Discount].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Discount].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Discount].[OverriddenCreatedOn],
    [Discount].[Percentage],
    [Discount].[StatusCode],
    StatusCodePLTable.Value,
    [Discount].[TimeZoneRuleVersionNumber],
    [Discount].[TransactionCurrencyId],
    [Discount].[TransactionCurrencyIdName],
    [Discount].[UTCConversionTimeZoneCode],
    [Discount].[VersionNumber],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from Discount
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [Discount].TransactionCurrencyId
    left outer join StringMap [IsAmountTypePLTable] on 
		([IsAmountTypePLTable].AttributeName = 'isamounttype'
		and [IsAmountTypePLTable].ObjectTypeCode = 1013
		and [IsAmountTypePLTable].AttributeValue = [Discount].[IsAmountType]
		and [IsAmountTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1013
		and [StatusCodePLTable].AttributeValue = [Discount].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1080) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Discount].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredDiscount] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredDiscount] TO [CRMReaderRole]
    AS [dbo];

