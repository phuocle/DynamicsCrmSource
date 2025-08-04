

--
-- report view for pricelevel
--
create view dbo.[FilteredPriceLevel] (
    [begindate],
    [begindateutc],
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
    [description],
    [enddate],
    [enddateutc],
    [exchangerate],
    [freighttermscode],
    [freighttermscodename],
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
    [name],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [paymentmethodcode],
    [paymentmethodcodename],
    [pricelevelid],
    [shippingmethodcode],
    [shippingmethodcodename],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    dbo.fn_UTCToTzCodeSpecificLocalTime([PriceLevel].[BeginDate],
			us.TimeZoneCode),
        [PriceLevel].[BeginDate],
    [PriceLevel].[CreatedBy],
    --[PriceLevel].[CreatedByDsc]
    0,
    [PriceLevel].[CreatedByName],
    [PriceLevel].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PriceLevel].[CreatedOn],
			us.TimeZoneCode),
        [PriceLevel].[CreatedOn],
    [PriceLevel].[CreatedOnBehalfBy],
    --[PriceLevel].[CreatedOnBehalfByDsc]
    0,
    [PriceLevel].[CreatedOnBehalfByName],
    [PriceLevel].[CreatedOnBehalfByYomiName],
    [PriceLevel].[Description],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PriceLevel].[EndDate],
			us.TimeZoneCode),
        [PriceLevel].[EndDate],
    [PriceLevel].[ExchangeRate],
    [PriceLevel].[FreightTermsCode],
    FreightTermsCodePLTable.Value,
    [PriceLevel].[ImportSequenceNumber],
    [PriceLevel].[ModifiedBy],
    --[PriceLevel].[ModifiedByDsc]
    0,
    [PriceLevel].[ModifiedByName],
    [PriceLevel].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PriceLevel].[ModifiedOn],
			us.TimeZoneCode),
        [PriceLevel].[ModifiedOn],
    [PriceLevel].[ModifiedOnBehalfBy],
    --[PriceLevel].[ModifiedOnBehalfByDsc]
    0,
    [PriceLevel].[ModifiedOnBehalfByName],
    [PriceLevel].[ModifiedOnBehalfByYomiName],
    [PriceLevel].[Name],
    [PriceLevel].[OrganizationId],
    --[PriceLevel].[OrganizationIdDsc]
    0,
    [PriceLevel].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PriceLevel].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [PriceLevel].[OverriddenCreatedOn],
    [PriceLevel].[PaymentMethodCode],
    PaymentMethodCodePLTable.Value,
    [PriceLevel].[PriceLevelId],
    [PriceLevel].[ShippingMethodCode],
    ShippingMethodCodePLTable.Value,
    [PriceLevel].[StateCode],
    StateCodePLTable.Value,
    [PriceLevel].[StatusCode],
    StatusCodePLTable.Value,
    [PriceLevel].[TimeZoneRuleVersionNumber],
    [PriceLevel].[TransactionCurrencyId],
    --[PriceLevel].[TransactionCurrencyIdDsc]
    0,
    [PriceLevel].[TransactionCurrencyIdName],
    [PriceLevel].[UTCConversionTimeZoneCode],
    [PriceLevel].[VersionNumber]
from PriceLevel
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [FreightTermsCodePLTable] on 
		([FreightTermsCodePLTable].AttributeName = 'freighttermscode'
		and [FreightTermsCodePLTable].ObjectTypeCode = 1022
		and [FreightTermsCodePLTable].AttributeValue = [PriceLevel].[FreightTermsCode]
		and [FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PaymentMethodCodePLTable] on 
		([PaymentMethodCodePLTable].AttributeName = 'paymentmethodcode'
		and [PaymentMethodCodePLTable].ObjectTypeCode = 1022
		and [PaymentMethodCodePLTable].AttributeValue = [PriceLevel].[PaymentMethodCode]
		and [PaymentMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShippingMethodCodePLTable] on 
		([ShippingMethodCodePLTable].AttributeName = 'shippingmethodcode'
		and [ShippingMethodCodePLTable].ObjectTypeCode = 1022
		and [ShippingMethodCodePLTable].AttributeValue = [PriceLevel].[ShippingMethodCode]
		and [ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1022
		and [StateCodePLTable].AttributeValue = [PriceLevel].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1022
		and [StatusCodePLTable].AttributeValue = [PriceLevel].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1022) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [PriceLevel].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPriceLevel] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPriceLevel] TO [CRMReaderRole]
    AS [dbo];

