SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for salesorder
--
create view [dbo].[FilteredSalesOrder] (
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
    [datefulfilled],
    [datefulfilledutc],
    [description],
    [discountamount],
    [discountamount_base],
    [discountpercentage],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [freightamount],
    [freightamount_base],
    [freighttermscode],
    [freighttermscodename],
    [importsequencenumber],
    [ispricelocked],
    [ispricelockedname],
    [lastbackofficesubmit],
    [lastbackofficesubmitutc],
    [lastonholdtime],
    [lastonholdtimeutc],
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
    [onholdtime],
    [opportunityid],
    [opportunityiddsc],
    [opportunityidname],
    [ordernumber],
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
    [prioritycode],
    [prioritycodename],
    [processid],
    [quoteid],
    [quoteiddsc],
    [quoteidname],
    [requestdeliveryby],
    [requestdeliverybyutc],
    [salesorderid],
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
    [slaid],
    [slainvokedid],
    [slainvokedidname],
    [slaname],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [submitdate],
    [submitdateutc],
    [submitstatus],
    [submitstatusdescription],
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
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber],
    [willcall],
    [willcallname],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [SalesOrder].[AccountId],
    --[SalesOrder].[AccountIdDsc]
    0,
    [SalesOrder].[AccountIdName],
    [SalesOrder].[AccountIdYomiName],
    [SalesOrder].[BillTo_AddressId],
    [SalesOrder].[BillTo_City],
    [SalesOrder].[BillTo_Composite],
    [SalesOrder].[BillTo_ContactName],
    [SalesOrder].[BillTo_Country],
    [SalesOrder].[BillTo_Fax],
    [SalesOrder].[BillTo_Line1],
    [SalesOrder].[BillTo_Line2],
    [SalesOrder].[BillTo_Line3],
    [SalesOrder].[BillTo_Name],
    [SalesOrder].[BillTo_PostalCode],
    [SalesOrder].[BillTo_StateOrProvince],
    [SalesOrder].[BillTo_Telephone],
    [SalesOrder].[CampaignId],
    --[SalesOrder].[CampaignIdDsc]
    0,
    [SalesOrder].[CampaignIdName],
    [SalesOrder].[ContactId],
    --[SalesOrder].[ContactIdDsc]
    0,
    [SalesOrder].[ContactIdName],
    [SalesOrder].[ContactIdYomiName],
    [SalesOrder].[CreatedBy],
    --[SalesOrder].[CreatedByDsc]
    0,
    [SalesOrder].[CreatedByName],
    [SalesOrder].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrder].[CreatedOn],
			us.TimeZoneCode),
        [SalesOrder].[CreatedOn],
    [SalesOrder].[CreatedOnBehalfBy],
    --[SalesOrder].[CreatedOnBehalfByDsc]
    0,
    [SalesOrder].[CreatedOnBehalfByName],
    [SalesOrder].[CreatedOnBehalfByYomiName],
    [SalesOrder].[CustomerId],
    --[SalesOrder].[CustomerIdDsc]
    0,
    [SalesOrder].[CustomerIdName],
    [SalesOrder].[CustomerIdType],
    [SalesOrder].[CustomerIdYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrder].[DateFulfilled],
			us.TimeZoneCode),
        [SalesOrder].[DateFulfilled],
    [SalesOrder].[Description],
    [SalesOrder].[DiscountAmount],
    [SalesOrder].[DiscountAmount_Base],
    [SalesOrder].[DiscountPercentage],
    cast([SalesOrder].[EntityImage] as varbinary(max)),
    [SalesOrder].[EntityImageId],
    [SalesOrder].[EntityImage_Timestamp],
    [SalesOrder].[EntityImage_URL],
    [SalesOrder].[ExchangeRate],
    [SalesOrder].[FreightAmount],
    [SalesOrder].[FreightAmount_Base],
    [SalesOrder].[FreightTermsCode],
    FreightTermsCodePLTable.Value,
    [SalesOrder].[ImportSequenceNumber],
    [SalesOrder].[IsPriceLocked],
    IsPriceLockedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrder].[LastBackofficeSubmit],
			us.TimeZoneCode),
        [SalesOrder].[LastBackofficeSubmit],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrder].[LastOnHoldTime],
			us.TimeZoneCode),
        [SalesOrder].[LastOnHoldTime],
    [SalesOrder].[ModifiedBy],
    --[SalesOrder].[ModifiedByDsc]
    0,
    [SalesOrder].[ModifiedByName],
    [SalesOrder].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrder].[ModifiedOn],
			us.TimeZoneCode),
        [SalesOrder].[ModifiedOn],
    [SalesOrder].[ModifiedOnBehalfBy],
    --[SalesOrder].[ModifiedOnBehalfByDsc]
    0,
    [SalesOrder].[ModifiedOnBehalfByName],
    [SalesOrder].[ModifiedOnBehalfByYomiName],
    [SalesOrder].[Name],
    [SalesOrder].[OnHoldTime],
    [SalesOrder].[OpportunityId],
    --[SalesOrder].[OpportunityIdDsc]
    0,
    [SalesOrder].[OpportunityIdName],
    [SalesOrder].[OrderNumber],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrder].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SalesOrder].[OverriddenCreatedOn],
    [SalesOrder].[OwnerId],
    --[SalesOrder].[OwnerIdDsc]
    0,
    [SalesOrder].[OwnerIdName],
    [SalesOrder].[OwnerIdType],
    [SalesOrder].[OwnerIdYomiName],
    [SalesOrder].[OwningBusinessUnit],
    [SalesOrder].[OwningTeam],
    [SalesOrder].[OwningUser],
    [SalesOrder].[PaymentTermsCode],
    PaymentTermsCodePLTable.Value,
    [SalesOrder].[PriceLevelId],
    --[SalesOrder].[PriceLevelIdDsc]
    0,
    [SalesOrder].[PriceLevelIdName],
    [SalesOrder].[PricingErrorCode],
    PricingErrorCodePLTable.Value,
    [SalesOrder].[PriorityCode],
    PriorityCodePLTable.Value,
    [SalesOrder].[ProcessId],
    [SalesOrder].[QuoteId],
    --[SalesOrder].[QuoteIdDsc]
    0,
    [SalesOrder].[QuoteIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrder].[RequestDeliveryBy],
			us.TimeZoneCode),
        [SalesOrder].[RequestDeliveryBy],
    [SalesOrder].[SalesOrderId],
    [SalesOrder].[ShippingMethodCode],
    ShippingMethodCodePLTable.Value,
    [SalesOrder].[ShipTo_AddressId],
    [SalesOrder].[ShipTo_City],
    [SalesOrder].[ShipTo_Composite],
    [SalesOrder].[ShipTo_ContactName],
    [SalesOrder].[ShipTo_Country],
    [SalesOrder].[ShipTo_Fax],
    [SalesOrder].[ShipTo_FreightTermsCode],
    ShipTo_FreightTermsCodePLTable.Value,
    [SalesOrder].[ShipTo_Line1],
    [SalesOrder].[ShipTo_Line2],
    [SalesOrder].[ShipTo_Line3],
    [SalesOrder].[ShipTo_Name],
    [SalesOrder].[ShipTo_PostalCode],
    [SalesOrder].[ShipTo_StateOrProvince],
    [SalesOrder].[ShipTo_Telephone],
    [SalesOrder].[SLAId],
    [SalesOrder].[SLAInvokedId],
    [SalesOrder].[SLAInvokedIdName],
    [SalesOrder].[SLAName],
    [SalesOrder].[StageId],
    [SalesOrder].[StateCode],
    StateCodePLTable.Value,
    [SalesOrder].[StatusCode],
    StatusCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrder].[SubmitDate],
			us.TimeZoneCode),
        [SalesOrder].[SubmitDate],
    [SalesOrder].[SubmitStatus],
    [SalesOrder].[SubmitStatusDescription],
    [SalesOrder].[TimeZoneRuleVersionNumber],
    [SalesOrder].[TotalAmount],
    [SalesOrder].[TotalAmountLessFreight],
    [SalesOrder].[TotalAmountLessFreight_Base],
    [SalesOrder].[TotalAmount_Base],
    [SalesOrder].[TotalDiscountAmount],
    [SalesOrder].[TotalDiscountAmount_Base],
    [SalesOrder].[TotalLineItemAmount],
    [SalesOrder].[TotalLineItemAmount_Base],
    [SalesOrder].[TotalLineItemDiscountAmount],
    [SalesOrder].[TotalLineItemDiscountAmount_Base],
    [SalesOrder].[TotalTax],
    [SalesOrder].[TotalTax_Base],
    [SalesOrder].[TransactionCurrencyId],
    --[SalesOrder].[TransactionCurrencyIdDsc]
    0,
    [SalesOrder].[TransactionCurrencyIdName],
    [SalesOrder].[TraversedPath],
    [SalesOrder].[UTCConversionTimeZoneCode],
    [SalesOrder].[VersionNumber],
    [SalesOrder].[WillCall],
    WillCallPLTable.Value,
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from SalesOrder
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [SalesOrder].TransactionCurrencyId
    left outer join StringMap [FreightTermsCodePLTable] on 
		([FreightTermsCodePLTable].AttributeName = 'freighttermscode'
		and [FreightTermsCodePLTable].ObjectTypeCode = 1088
		and [FreightTermsCodePLTable].AttributeValue = [SalesOrder].[FreightTermsCode]
		and [FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPriceLockedPLTable] on 
		([IsPriceLockedPLTable].AttributeName = 'ispricelocked'
		and [IsPriceLockedPLTable].ObjectTypeCode = 1088
		and [IsPriceLockedPLTable].AttributeValue = [SalesOrder].[IsPriceLocked]
		and [IsPriceLockedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PaymentTermsCodePLTable] on 
		([PaymentTermsCodePLTable].AttributeName = 'paymenttermscode'
		and [PaymentTermsCodePLTable].ObjectTypeCode = 1088
		and [PaymentTermsCodePLTable].AttributeValue = [SalesOrder].[PaymentTermsCode]
		and [PaymentTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PricingErrorCodePLTable] on 
		([PricingErrorCodePLTable].AttributeName = 'pricingerrorcode'
		and [PricingErrorCodePLTable].ObjectTypeCode = 1088
		and [PricingErrorCodePLTable].AttributeValue = [SalesOrder].[PricingErrorCode]
		and [PricingErrorCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 1088
		and [PriorityCodePLTable].AttributeValue = [SalesOrder].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShippingMethodCodePLTable] on 
		([ShippingMethodCodePLTable].AttributeName = 'shippingmethodcode'
		and [ShippingMethodCodePLTable].ObjectTypeCode = 1088
		and [ShippingMethodCodePLTable].AttributeValue = [SalesOrder].[ShippingMethodCode]
		and [ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShipTo_FreightTermsCodePLTable] on 
		([ShipTo_FreightTermsCodePLTable].AttributeName = 'shipto_freighttermscode'
		and [ShipTo_FreightTermsCodePLTable].ObjectTypeCode = 1088
		and [ShipTo_FreightTermsCodePLTable].AttributeValue = [SalesOrder].[ShipTo_FreightTermsCode]
		and [ShipTo_FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1088
		and [StateCodePLTable].AttributeValue = [SalesOrder].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1088
		and [StatusCodePLTable].AttributeValue = [SalesOrder].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [WillCallPLTable] on 
		([WillCallPLTable].AttributeName = 'willcall'
		and [WillCallPLTable].ObjectTypeCode = 1088
		and [WillCallPLTable].AttributeValue = [SalesOrder].[WillCall]
		and [WillCallPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1088) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[SalesOrder].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 1088))
		
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
		[SalesOrder].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1088)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[SalesOrder].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[SalesOrder].[SalesOrderId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 1088))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredSalesOrder] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSalesOrder] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
