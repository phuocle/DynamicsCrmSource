

--
-- report view for productpricelevel
--
create view dbo.[FilteredProductPriceLevel] (
    [amount],
    [amount_base],
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
    [discounttypeid],
    [discounttypeiddsc],
    [discounttypeidname],
    [exchangerate],
    [importsequencenumber],
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
    [percentage],
    [pricelevelid],
    [priceleveliddsc],
    [pricelevelidname],
    [pricingmethodcode],
    [pricingmethodcodename],
    [processid],
    [productid],
    [productiddsc],
    [productidname],
    [productnumber],
    [productpricelevelid],
    [quantitysellingcode],
    [quantitysellingcodename],
    [roundingoptionamount],
    [roundingoptionamount_base],
    [roundingoptioncode],
    [roundingoptioncodename],
    [roundingpolicycode],
    [roundingpolicycodename],
    [stageid],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [uomid],
    [uomiddsc],
    [uomidname],
    [uomscheduleid],
    [uomscheduleiddsc],
    [uomscheduleidname],
    [versionnumber],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [ProductPriceLevel].[Amount],
    [ProductPriceLevel].[Amount_Base],
    [ProductPriceLevel].[CreatedBy],
    --[ProductPriceLevel].[CreatedByDsc]
    0,
    [ProductPriceLevel].[CreatedByName],
    [ProductPriceLevel].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProductPriceLevel].[CreatedOn],
			us.TimeZoneCode),
        [ProductPriceLevel].[CreatedOn],
    [ProductPriceLevel].[CreatedOnBehalfBy],
    --[ProductPriceLevel].[CreatedOnBehalfByDsc]
    0,
    [ProductPriceLevel].[CreatedOnBehalfByName],
    [ProductPriceLevel].[CreatedOnBehalfByYomiName],
    [ProductPriceLevel].[DiscountTypeId],
    --[ProductPriceLevel].[DiscountTypeIdDsc]
    0,
    [ProductPriceLevel].[DiscountTypeIdName],
    [ProductPriceLevel].[ExchangeRate],
    [ProductPriceLevel].[ImportSequenceNumber],
    [ProductPriceLevel].[ModifiedBy],
    --[ProductPriceLevel].[ModifiedByDsc]
    0,
    [ProductPriceLevel].[ModifiedByName],
    [ProductPriceLevel].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProductPriceLevel].[ModifiedOn],
			us.TimeZoneCode),
        [ProductPriceLevel].[ModifiedOn],
    [ProductPriceLevel].[ModifiedOnBehalfBy],
    --[ProductPriceLevel].[ModifiedOnBehalfByDsc]
    0,
    [ProductPriceLevel].[ModifiedOnBehalfByName],
    [ProductPriceLevel].[ModifiedOnBehalfByYomiName],
    [ProductPriceLevel].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProductPriceLevel].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ProductPriceLevel].[OverriddenCreatedOn],
    [ProductPriceLevel].[Percentage],
    [ProductPriceLevel].[PriceLevelId],
    --[ProductPriceLevel].[PriceLevelIdDsc]
    0,
    [ProductPriceLevel].[PriceLevelIdName],
    [ProductPriceLevel].[PricingMethodCode],
    PricingMethodCodePLTable.Value,
    [ProductPriceLevel].[ProcessId],
    [ProductPriceLevel].[ProductId],
    --[ProductPriceLevel].[ProductIdDsc]
    0,
    [ProductPriceLevel].[ProductIdName],
    [ProductPriceLevel].[ProductNumber],
    [ProductPriceLevel].[ProductPriceLevelId],
    [ProductPriceLevel].[QuantitySellingCode],
    QuantitySellingCodePLTable.Value,
    [ProductPriceLevel].[RoundingOptionAmount],
    [ProductPriceLevel].[RoundingOptionAmount_Base],
    [ProductPriceLevel].[RoundingOptionCode],
    RoundingOptionCodePLTable.Value,
    [ProductPriceLevel].[RoundingPolicyCode],
    RoundingPolicyCodePLTable.Value,
    [ProductPriceLevel].[StageId],
    [ProductPriceLevel].[TransactionCurrencyId],
    --[ProductPriceLevel].[TransactionCurrencyIdDsc]
    0,
    [ProductPriceLevel].[TransactionCurrencyIdName],
    [ProductPriceLevel].[UoMId],
    --[ProductPriceLevel].[UoMIdDsc]
    0,
    [ProductPriceLevel].[UoMIdName],
    [ProductPriceLevel].[UoMScheduleId],
    --[ProductPriceLevel].[UoMScheduleIdDsc]
    0,
    [ProductPriceLevel].[UoMScheduleIdName],
    [ProductPriceLevel].[VersionNumber],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from ProductPriceLevel
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [ProductPriceLevel].TransactionCurrencyId
    left outer join StringMap [PricingMethodCodePLTable] on 
		([PricingMethodCodePLTable].AttributeName = 'pricingmethodcode'
		and [PricingMethodCodePLTable].ObjectTypeCode = 1026
		and [PricingMethodCodePLTable].AttributeValue = [ProductPriceLevel].[PricingMethodCode]
		and [PricingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [QuantitySellingCodePLTable] on 
		([QuantitySellingCodePLTable].AttributeName = 'quantitysellingcode'
		and [QuantitySellingCodePLTable].ObjectTypeCode = 1026
		and [QuantitySellingCodePLTable].AttributeValue = [ProductPriceLevel].[QuantitySellingCode]
		and [QuantitySellingCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [RoundingOptionCodePLTable] on 
		([RoundingOptionCodePLTable].AttributeName = 'roundingoptioncode'
		and [RoundingOptionCodePLTable].ObjectTypeCode = 1026
		and [RoundingOptionCodePLTable].AttributeValue = [ProductPriceLevel].[RoundingOptionCode]
		and [RoundingOptionCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [RoundingPolicyCodePLTable] on 
		([RoundingPolicyCodePLTable].AttributeName = 'roundingpolicycode'
		and [RoundingPolicyCodePLTable].ObjectTypeCode = 1026
		and [RoundingPolicyCodePLTable].AttributeValue = [ProductPriceLevel].[RoundingPolicyCode]
		and [RoundingPolicyCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1022) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [ProductPriceLevel].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductPriceLevel] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductPriceLevel] TO [CRMReaderRole]
    AS [dbo];

