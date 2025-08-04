

--
-- report view for invoice
--
create view dbo.[FilteredInvoice] 
(
    [accountid],
    [accountidname],
    [accountidyominame],
    [billto_city],
    [billto_composite],
    [billto_country],
    [billto_fax],
    [billto_line1],
    [billto_line2],
    [billto_line3],
    [billto_name],
    [billto_postalcode],
    [billto_stateorprovince],
    [billto_telephone],
    [contactid],
    [contactidname],
    [contactidyominame],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customerid],
    [customeridname],
    [customeridtype],
    [customeridyominame],
    [datedelivered],
    [datedeliveredutc],
    [description],
    [discountamount],
    [discountamount_base],
    [discountpercentage],
    [duedate],
    [duedateutc],
    [emailaddress],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [freightamount],
    [freightamount_base],
    [importsequencenumber],
    [invoiceid],
    [invoicenumber],
    [ispricelocked],
    [ispricelockedname],
    [lastbackofficesubmit],
    [lastbackofficesubmitutc],
    [lastonholdtime],
    [lastonholdtimeutc],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [onholdtime],
    [opportunityid],
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
    [pricelevelidname],
    [pricingerrorcode],
    [pricingerrorcodename],
    [prioritycode],
    [prioritycodename],
    [processid],
    [salesorderid],
    [salesorderidname],
    [shippingmethodcode],
    [shippingmethodcodename],
    [shipto_city],
    [shipto_composite],
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
    [skippricecalculation],
    [skippricecalculationname],
    [slaid],
    [slainvokedid],
    [slainvokedidname],
    [slaname],
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
    [Invoice].[AccountId],
    [Invoice].[AccountIdName],
    [Invoice].[AccountIdYomiName],
    [Invoice].[BillTo_City],
    [Invoice].[BillTo_Composite],
    [Invoice].[BillTo_Country],
    [Invoice].[BillTo_Fax],
    [Invoice].[BillTo_Line1],
    [Invoice].[BillTo_Line2],
    [Invoice].[BillTo_Line3],
    [Invoice].[BillTo_Name],
    [Invoice].[BillTo_PostalCode],
    [Invoice].[BillTo_StateOrProvince],
    [Invoice].[BillTo_Telephone],
    [Invoice].[ContactId],
    [Invoice].[ContactIdName],
    [Invoice].[ContactIdYomiName],
    [Invoice].[CreatedBy],
    [Invoice].[CreatedByName],
    [Invoice].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Invoice].[CreatedOn],
			us.TimeZoneCode),
        [Invoice].[CreatedOn],
    [Invoice].[CreatedOnBehalfBy],
    [Invoice].[CreatedOnBehalfByName],
    [Invoice].[CreatedOnBehalfByYomiName],
    [Invoice].[CustomerId],
    [Invoice].[CustomerIdName],
    [Invoice].[CustomerIdType],
    [Invoice].[CustomerIdYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Invoice].[DateDelivered],
			us.TimeZoneCode),
        [Invoice].[DateDelivered],
    [Invoice].[Description],
    [Invoice].[DiscountAmount],
    [Invoice].[DiscountAmount_Base],
    [Invoice].[DiscountPercentage],
    [Invoice].[DueDate],
        [Invoice].[DueDate],
    [Invoice].[EmailAddress],
    cast([Invoice].[EntityImage] as varbinary(max)),
    [Invoice].[EntityImageId],
    [Invoice].[EntityImage_Timestamp],
    [Invoice].[EntityImage_URL],
    [Invoice].[ExchangeRate],
    [Invoice].[FreightAmount],
    [Invoice].[FreightAmount_Base],
    [Invoice].[ImportSequenceNumber],
    [Invoice].[InvoiceId],
    [Invoice].[InvoiceNumber],
    [Invoice].[IsPriceLocked],
    IsPriceLockedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Invoice].[LastBackofficeSubmit],
			us.TimeZoneCode),
        [Invoice].[LastBackofficeSubmit],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Invoice].[LastOnHoldTime],
			us.TimeZoneCode),
        [Invoice].[LastOnHoldTime],
    [Invoice].[ModifiedBy],
    [Invoice].[ModifiedByName],
    [Invoice].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Invoice].[ModifiedOn],
			us.TimeZoneCode),
        [Invoice].[ModifiedOn],
    [Invoice].[ModifiedOnBehalfBy],
    [Invoice].[ModifiedOnBehalfByName],
    [Invoice].[ModifiedOnBehalfByYomiName],
    [Invoice].[Name],
    [Invoice].[OnHoldTime],
    [Invoice].[OpportunityId],
    [Invoice].[OpportunityIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Invoice].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Invoice].[OverriddenCreatedOn],
    [Invoice].[OwnerId],
    --[Invoice].[OwnerIdDsc]
    0,
    [Invoice].[OwnerIdName],
    [Invoice].[OwnerIdType],
    [Invoice].[OwnerIdYomiName],
    [Invoice].[OwningBusinessUnit],
    [Invoice].[OwningTeam],
    [Invoice].[OwningUser],
    [Invoice].[PaymentTermsCode],
    PaymentTermsCodePLTable.Value,
    [Invoice].[PriceLevelId],
    [Invoice].[PriceLevelIdName],
    [Invoice].[PricingErrorCode],
    PricingErrorCodePLTable.Value,
    [Invoice].[PriorityCode],
    PriorityCodePLTable.Value,
    [Invoice].[ProcessId],
    [Invoice].[SalesOrderId],
    [Invoice].[SalesOrderIdName],
    [Invoice].[ShippingMethodCode],
    ShippingMethodCodePLTable.Value,
    [Invoice].[ShipTo_City],
    [Invoice].[ShipTo_Composite],
    [Invoice].[ShipTo_Country],
    [Invoice].[ShipTo_Fax],
    [Invoice].[ShipTo_FreightTermsCode],
    ShipTo_FreightTermsCodePLTable.Value,
    [Invoice].[ShipTo_Line1],
    [Invoice].[ShipTo_Line2],
    [Invoice].[ShipTo_Line3],
    [Invoice].[ShipTo_Name],
    [Invoice].[ShipTo_PostalCode],
    [Invoice].[ShipTo_StateOrProvince],
    [Invoice].[ShipTo_Telephone],
    [Invoice].[SkipPriceCalculation],
    SkipPriceCalculationPLTable.Value,
    [Invoice].[SLAId],
    [Invoice].[SLAInvokedId],
    [Invoice].[SLAInvokedIdName],
    [Invoice].[SLAName],
    [Invoice].[StageId],
    [Invoice].[StateCode],
    StateCodePLTable.Value,
    [Invoice].[StatusCode],
    StatusCodePLTable.Value,
    [Invoice].[TimeZoneRuleVersionNumber],
    [Invoice].[TotalAmount],
    [Invoice].[TotalAmountLessFreight],
    [Invoice].[TotalAmountLessFreight_Base],
    [Invoice].[TotalAmount_Base],
    [Invoice].[TotalDiscountAmount],
    [Invoice].[TotalDiscountAmount_Base],
    [Invoice].[TotalLineItemAmount],
    [Invoice].[TotalLineItemAmount_Base],
    [Invoice].[TotalLineItemDiscountAmount],
    [Invoice].[TotalLineItemDiscountAmount_Base],
    [Invoice].[TotalTax],
    [Invoice].[TotalTax_Base],
    [Invoice].[TransactionCurrencyId],
    [Invoice].[TransactionCurrencyIdName],
    [Invoice].[TraversedPath],
    [Invoice].[UTCConversionTimeZoneCode],
    [Invoice].[VersionNumber],
    [Invoice].[WillCall],
    WillCallPLTable.Value,
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from Invoice
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [Invoice].TransactionCurrencyId
    left outer join StringMap [IsPriceLockedPLTable] on 
		([IsPriceLockedPLTable].AttributeName = 'ispricelocked'
		and [IsPriceLockedPLTable].ObjectTypeCode = 1090
		and [IsPriceLockedPLTable].AttributeValue = [Invoice].[IsPriceLocked]
		and [IsPriceLockedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PaymentTermsCodePLTable] on 
		([PaymentTermsCodePLTable].AttributeName = 'paymenttermscode'
		and [PaymentTermsCodePLTable].ObjectTypeCode = 1090
		and [PaymentTermsCodePLTable].AttributeValue = [Invoice].[PaymentTermsCode]
		and [PaymentTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PricingErrorCodePLTable] on 
		([PricingErrorCodePLTable].AttributeName = 'pricingerrorcode'
		and [PricingErrorCodePLTable].ObjectTypeCode = 1090
		and [PricingErrorCodePLTable].AttributeValue = [Invoice].[PricingErrorCode]
		and [PricingErrorCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 1090
		and [PriorityCodePLTable].AttributeValue = [Invoice].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShippingMethodCodePLTable] on 
		([ShippingMethodCodePLTable].AttributeName = 'shippingmethodcode'
		and [ShippingMethodCodePLTable].ObjectTypeCode = 1090
		and [ShippingMethodCodePLTable].AttributeValue = [Invoice].[ShippingMethodCode]
		and [ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShipTo_FreightTermsCodePLTable] on 
		([ShipTo_FreightTermsCodePLTable].AttributeName = 'shipto_freighttermscode'
		and [ShipTo_FreightTermsCodePLTable].ObjectTypeCode = 1090
		and [ShipTo_FreightTermsCodePLTable].AttributeValue = [Invoice].[ShipTo_FreightTermsCode]
		and [ShipTo_FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SkipPriceCalculationPLTable] on 
		([SkipPriceCalculationPLTable].AttributeName = 'skippricecalculation'
		and [SkipPriceCalculationPLTable].ObjectTypeCode = 1090
		and [SkipPriceCalculationPLTable].AttributeValue = [Invoice].[SkipPriceCalculation]
		and [SkipPriceCalculationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1090
		and [StateCodePLTable].AttributeValue = [Invoice].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1090
		and [StatusCodePLTable].AttributeValue = [Invoice].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [WillCallPLTable] on 
		([WillCallPLTable].AttributeName = 'willcall'
		and [WillCallPLTable].ObjectTypeCode = 1090
		and [WillCallPLTable].AttributeValue = [Invoice].[WillCall]
		and [WillCallPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1090) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Invoice].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1090
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
		[Invoice].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 1090)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Invoice].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Invoice].[InvoiceId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1090
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredInvoice] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredInvoice] TO [CRMReaderRole]
    AS [dbo];

