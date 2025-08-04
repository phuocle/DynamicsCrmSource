

--
-- report view for quote
--
create view dbo.[FilteredQuote] (
    [accountid],
    [accountiddsc],
    [accountidname],
    [accountidyominame],
    [billto_addressid],
    [billto_city],
    [billto_composite],
    [billto_contactname],
    [billto_country],
    [billto_fax],
    [billto_line1],
    [billto_line2],
    [billto_line3],
    [billto_name],
    [billto_postalcode],
    [billto_stateorprovince],
    [billto_telephone],
    [campaignid],
    [campaigniddsc],
    [campaignidname],
    [closedon],
    [closedonutc],
    [contactid],
    [contactiddsc],
    [contactidname],
    [contactidyominame],
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
    [customerid],
    [customeriddsc],
    [customeridname],
    [customeridtype],
    [customeridyominame],
    [description],
    [discountamount],
    [discountamount_base],
    [discountpercentage],
    [effectivefrom],
    [effectivefromutc],
    [effectiveto],
    [effectivetoutc],
    [exchangerate],
    [expireson],
    [expiresonutc],
    [freightamount],
    [freightamount_base],
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
    [opportunityid],
    [opportunityiddsc],
    [opportunityidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [paymenttermscode],
    [paymenttermscodename],
    [pricelevelid],
    [priceleveliddsc],
    [pricelevelidname],
    [pricingerrorcode],
    [pricingerrorcodename],
    [processid],
    [quoteid],
    [quotenumber],
    [requestdeliveryby],
    [requestdeliverybyutc],
    [revisionnumber],
    [shippingmethodcode],
    [shippingmethodcodename],
    [shipto_addressid],
    [shipto_city],
    [shipto_composite],
    [shipto_contactname],
    [shipto_country],
    [shipto_fax],
    [shipto_freighttermscode],
    [shipto_freighttermscodename],
    [shipto_line1],
    [shipto_line2],
    [shipto_line3],
    [shipto_name],
    [shipto_postalcode],
    [shipto_stateorprovince],
    [shipto_telephone],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [totalamount],
    [totalamountlessfreight],
    [totalamountlessfreight_base],
    [totalamount_base],
    [totaldiscountamount],
    [totaldiscountamount_base],
    [totallineitemamount],
    [totallineitemamount_base],
    [totallineitemdiscountamount],
    [totallineitemdiscountamount_base],
    [totaltax],
    [totaltax_base],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber],
    [willcall],
    [willcallname],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [Quote].[AccountId],
    --[Quote].[AccountIdDsc]
    0,
    [Quote].[AccountIdName],
    [Quote].[AccountIdYomiName],
    [Quote].[BillTo_AddressId],
    [Quote].[BillTo_City],
    [Quote].[BillTo_Composite],
    [Quote].[BillTo_ContactName],
    [Quote].[BillTo_Country],
    [Quote].[BillTo_Fax],
    [Quote].[BillTo_Line1],
    [Quote].[BillTo_Line2],
    [Quote].[BillTo_Line3],
    [Quote].[BillTo_Name],
    [Quote].[BillTo_PostalCode],
    [Quote].[BillTo_StateOrProvince],
    [Quote].[BillTo_Telephone],
    [Quote].[CampaignId],
    --[Quote].[CampaignIdDsc]
    0,
    [Quote].[CampaignIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Quote].[ClosedOn],
			us.TimeZoneCode),
        [Quote].[ClosedOn],
    [Quote].[ContactId],
    --[Quote].[ContactIdDsc]
    0,
    [Quote].[ContactIdName],
    [Quote].[ContactIdYomiName],
    [Quote].[CreatedBy],
    --[Quote].[CreatedByDsc]
    0,
    [Quote].[CreatedByName],
    [Quote].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Quote].[CreatedOn],
			us.TimeZoneCode),
        [Quote].[CreatedOn],
    [Quote].[CreatedOnBehalfBy],
    --[Quote].[CreatedOnBehalfByDsc]
    0,
    [Quote].[CreatedOnBehalfByName],
    [Quote].[CreatedOnBehalfByYomiName],
    [Quote].[CustomerId],
    --[Quote].[CustomerIdDsc]
    0,
    [Quote].[CustomerIdName],
    [Quote].[CustomerIdType],
    [Quote].[CustomerIdYomiName],
    [Quote].[Description],
    [Quote].[DiscountAmount],
    [Quote].[DiscountAmount_Base],
    [Quote].[DiscountPercentage],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Quote].[EffectiveFrom],
			us.TimeZoneCode),
        [Quote].[EffectiveFrom],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Quote].[EffectiveTo],
			us.TimeZoneCode),
        [Quote].[EffectiveTo],
    [Quote].[ExchangeRate],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Quote].[ExpiresOn],
			us.TimeZoneCode),
        [Quote].[ExpiresOn],
    [Quote].[FreightAmount],
    [Quote].[FreightAmount_Base],
    [Quote].[FreightTermsCode],
    FreightTermsCodePLTable.Value,
    [Quote].[ImportSequenceNumber],
    [Quote].[ModifiedBy],
    --[Quote].[ModifiedByDsc]
    0,
    [Quote].[ModifiedByName],
    [Quote].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Quote].[ModifiedOn],
			us.TimeZoneCode),
        [Quote].[ModifiedOn],
    [Quote].[ModifiedOnBehalfBy],
    --[Quote].[ModifiedOnBehalfByDsc]
    0,
    [Quote].[ModifiedOnBehalfByName],
    [Quote].[ModifiedOnBehalfByYomiName],
    [Quote].[Name],
    [Quote].[OpportunityId],
    --[Quote].[OpportunityIdDsc]
    0,
    [Quote].[OpportunityIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Quote].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Quote].[OverriddenCreatedOn],
    [Quote].[OwnerId],
    --[Quote].[OwnerIdDsc]
    0,
    [Quote].[OwnerIdName],
    [Quote].[OwnerIdType],
    [Quote].[OwnerIdYomiName],
    [Quote].[OwningBusinessUnit],
    [Quote].[OwningTeam],
    [Quote].[OwningUser],
    [Quote].[PaymentTermsCode],
    PaymentTermsCodePLTable.Value,
    [Quote].[PriceLevelId],
    --[Quote].[PriceLevelIdDsc]
    0,
    [Quote].[PriceLevelIdName],
    [Quote].[PricingErrorCode],
    PricingErrorCodePLTable.Value,
    [Quote].[ProcessId],
    [Quote].[QuoteId],
    [Quote].[QuoteNumber],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Quote].[RequestDeliveryBy],
			us.TimeZoneCode),
        [Quote].[RequestDeliveryBy],
    [Quote].[RevisionNumber],
    [Quote].[ShippingMethodCode],
    ShippingMethodCodePLTable.Value,
    [Quote].[ShipTo_AddressId],
    [Quote].[ShipTo_City],
    [Quote].[ShipTo_Composite],
    [Quote].[ShipTo_ContactName],
    [Quote].[ShipTo_Country],
    [Quote].[ShipTo_Fax],
    [Quote].[ShipTo_FreightTermsCode],
    ShipTo_FreightTermsCodePLTable.Value,
    [Quote].[ShipTo_Line1],
    [Quote].[ShipTo_Line2],
    [Quote].[ShipTo_Line3],
    [Quote].[ShipTo_Name],
    [Quote].[ShipTo_PostalCode],
    [Quote].[ShipTo_StateOrProvince],
    [Quote].[ShipTo_Telephone],
    [Quote].[StageId],
    [Quote].[StateCode],
    StateCodePLTable.Value,
    [Quote].[StatusCode],
    StatusCodePLTable.Value,
    [Quote].[TimeZoneRuleVersionNumber],
    [Quote].[TotalAmount],
    [Quote].[TotalAmountLessFreight],
    [Quote].[TotalAmountLessFreight_Base],
    [Quote].[TotalAmount_Base],
    [Quote].[TotalDiscountAmount],
    [Quote].[TotalDiscountAmount_Base],
    [Quote].[TotalLineItemAmount],
    [Quote].[TotalLineItemAmount_Base],
    [Quote].[TotalLineItemDiscountAmount],
    [Quote].[TotalLineItemDiscountAmount_Base],
    [Quote].[TotalTax],
    [Quote].[TotalTax_Base],
    [Quote].[TransactionCurrencyId],
    --[Quote].[TransactionCurrencyIdDsc]
    0,
    [Quote].[TransactionCurrencyIdName],
    [Quote].[UTCConversionTimeZoneCode],
    [Quote].[VersionNumber],
    [Quote].[WillCall],
    WillCallPLTable.Value,
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from Quote
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [Quote].TransactionCurrencyId
    left outer join StringMap [FreightTermsCodePLTable] on 
		([FreightTermsCodePLTable].AttributeName = 'freighttermscode'
		and [FreightTermsCodePLTable].ObjectTypeCode = 1084
		and [FreightTermsCodePLTable].AttributeValue = [Quote].[FreightTermsCode]
		and [FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PaymentTermsCodePLTable] on 
		([PaymentTermsCodePLTable].AttributeName = 'paymenttermscode'
		and [PaymentTermsCodePLTable].ObjectTypeCode = 1084
		and [PaymentTermsCodePLTable].AttributeValue = [Quote].[PaymentTermsCode]
		and [PaymentTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PricingErrorCodePLTable] on 
		([PricingErrorCodePLTable].AttributeName = 'pricingerrorcode'
		and [PricingErrorCodePLTable].ObjectTypeCode = 1084
		and [PricingErrorCodePLTable].AttributeValue = [Quote].[PricingErrorCode]
		and [PricingErrorCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShippingMethodCodePLTable] on 
		([ShippingMethodCodePLTable].AttributeName = 'shippingmethodcode'
		and [ShippingMethodCodePLTable].ObjectTypeCode = 1084
		and [ShippingMethodCodePLTable].AttributeValue = [Quote].[ShippingMethodCode]
		and [ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShipTo_FreightTermsCodePLTable] on 
		([ShipTo_FreightTermsCodePLTable].AttributeName = 'shipto_freighttermscode'
		and [ShipTo_FreightTermsCodePLTable].ObjectTypeCode = 1084
		and [ShipTo_FreightTermsCodePLTable].AttributeValue = [Quote].[ShipTo_FreightTermsCode]
		and [ShipTo_FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1084
		and [StateCodePLTable].AttributeValue = [Quote].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1084
		and [StatusCodePLTable].AttributeValue = [Quote].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [WillCallPLTable] on 
		([WillCallPLTable].AttributeName = 'willcall'
		and [WillCallPLTable].ObjectTypeCode = 1084
		and [WillCallPLTable].AttributeValue = [Quote].[WillCall]
		and [WillCallPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1084) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[Quote].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1084
	)	

		
	-- role based access
	or 
	
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[Quote].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1084)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Quote].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Quote].[QuoteId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 1084 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQuote] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQuote] TO [CRMReaderRole]
    AS [dbo];

