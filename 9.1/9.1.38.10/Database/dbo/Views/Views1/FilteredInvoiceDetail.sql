

--
-- report view for invoicedetail
--
create view dbo.[FilteredInvoiceDetail] 
(
    [actualdeliveryon],
    [actualdeliveryonutc],
    [baseamount],
    [baseamount_base],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [exchangerate],
    [extendedamount],
    [extendedamount_base],
    [importsequencenumber],
    [invoicedetailid],
    [invoicedetailname],
    [invoiceid],
    [invoiceidname],
    [invoiceispricelocked],
    [invoiceispricelockedname],
    [invoicestatecode],
    [invoicestatecodename],
    [iscopied],
    [iscopiedname],
    [ispriceoverridden],
    [ispriceoverriddenname],
    [isproductoverridden],
    [isproductoverriddenname],
    [lineitemnumber],
    [manualdiscountamount],
    [manualdiscountamount_base],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
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
    [parentbundleid],
    [parentbundleidref],
    [priceperunit],
    [priceperunit_base],
    [pricingerrorcode],
    [pricingerrorcodename],
    [productassociationid],
    [productdescription],
    [productid],
    [productidname],
    [productname],
    [productnumber],
    [producttypecode],
    [producttypecodename],
    [propertyconfigurationstatus],
    [propertyconfigurationstatusname],
    [quantity],
    [quantitybackordered],
    [quantitycancelled],
    [quantityshipped],
    [salesorderdetailid],
    [salesorderdetailidname],
    [salesrepid],
    [salesrepidname],
    [salesrepidyominame],
    [sequencenumber],
    [shippingtrackingnumber],
    [shipto_city],
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
    [tax],
    [tax_base],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [uomid],
    [uomidname],
    [utcconversiontimezonecode],
    [versionnumber],
    [volumediscountamount],
    [volumediscountamount_base],
    [willcall],
    [willcallname],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    dbo.fn_UTCToTzCodeSpecificLocalTime([InvoiceDetail].[ActualDeliveryOn],
			us.TimeZoneCode),
        [InvoiceDetail].[ActualDeliveryOn],
    [InvoiceDetail].[BaseAmount],
    [InvoiceDetail].[BaseAmount_Base],
    [InvoiceDetail].[CreatedBy],
    [InvoiceDetail].[CreatedByName],
    [InvoiceDetail].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InvoiceDetail].[CreatedOn],
			us.TimeZoneCode),
        [InvoiceDetail].[CreatedOn],
    [InvoiceDetail].[CreatedOnBehalfBy],
    [InvoiceDetail].[CreatedOnBehalfByName],
    [InvoiceDetail].[CreatedOnBehalfByYomiName],
    [InvoiceDetail].[Description],
    [InvoiceDetail].[ExchangeRate],
    [InvoiceDetail].[ExtendedAmount],
    [InvoiceDetail].[ExtendedAmount_Base],
    [InvoiceDetail].[ImportSequenceNumber],
    [InvoiceDetail].[InvoiceDetailId],
    [InvoiceDetail].[InvoiceDetailName],
    [InvoiceDetail].[InvoiceId],
    [InvoiceDetail].[InvoiceIdName],
    [InvoiceDetail].[InvoiceIsPriceLocked],
    InvoiceIsPriceLockedPLTable.Value,
    [InvoiceDetail].[InvoiceStateCode],
    InvoiceStateCodePLTable.Value,
    [InvoiceDetail].[IsCopied],
    IsCopiedPLTable.Value,
    [InvoiceDetail].[IsPriceOverridden],
    IsPriceOverriddenPLTable.Value,
    [InvoiceDetail].[IsProductOverridden],
    IsProductOverriddenPLTable.Value,
    [InvoiceDetail].[LineItemNumber],
    [InvoiceDetail].[ManualDiscountAmount],
    [InvoiceDetail].[ManualDiscountAmount_Base],
    [InvoiceDetail].[ModifiedBy],
    [InvoiceDetail].[ModifiedByName],
    [InvoiceDetail].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InvoiceDetail].[ModifiedOn],
			us.TimeZoneCode),
        [InvoiceDetail].[ModifiedOn],
    [InvoiceDetail].[ModifiedOnBehalfBy],
    [InvoiceDetail].[ModifiedOnBehalfByName],
    [InvoiceDetail].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InvoiceDetail].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [InvoiceDetail].[OverriddenCreatedOn],
    [InvoiceDetail].[OwnerId],
    --[InvoiceDetail].[OwnerIdDsc]
    0,
    [InvoiceDetail].[OwnerIdName],
    [InvoiceDetail].[OwnerIdType],
    [InvoiceDetail].[OwnerIdYomiName],
    [InvoiceDetail].[OwningBusinessUnit],
    [InvoiceDetail].[OwningTeam],
    [InvoiceDetail].[OwningUser],
    [InvoiceDetail].[ParentBundleId],
    [InvoiceDetail].[ParentBundleIdRef],
    [InvoiceDetail].[PricePerUnit],
    [InvoiceDetail].[PricePerUnit_Base],
    [InvoiceDetail].[PricingErrorCode],
    PricingErrorCodePLTable.Value,
    [InvoiceDetail].[ProductAssociationId],
    [InvoiceDetail].[ProductDescription],
    [InvoiceDetail].[ProductId],
    [InvoiceDetail].[ProductIdName],
    [InvoiceDetail].[ProductName],
    [InvoiceDetail].[ProductNumber],
    [InvoiceDetail].[ProductTypeCode],
    ProductTypeCodePLTable.Value,
    [InvoiceDetail].[PropertyConfigurationStatus],
    PropertyConfigurationStatusPLTable.Value,
    [InvoiceDetail].[Quantity],
    [InvoiceDetail].[QuantityBackordered],
    [InvoiceDetail].[QuantityCancelled],
    [InvoiceDetail].[QuantityShipped],
    [InvoiceDetail].[SalesOrderDetailId],
    [InvoiceDetail].[SalesOrderDetailIdName],
    [InvoiceDetail].[SalesRepId],
    [InvoiceDetail].[SalesRepIdName],
    [InvoiceDetail].[SalesRepIdYomiName],
    [InvoiceDetail].[SequenceNumber],
    [InvoiceDetail].[ShippingTrackingNumber],
    [InvoiceDetail].[ShipTo_City],
    [InvoiceDetail].[ShipTo_Country],
    [InvoiceDetail].[ShipTo_Fax],
    [InvoiceDetail].[ShipTo_FreightTermsCode],
    ShipTo_FreightTermsCodePLTable.Value,
    [InvoiceDetail].[ShipTo_Line1],
    [InvoiceDetail].[ShipTo_Line2],
    [InvoiceDetail].[ShipTo_Line3],
    [InvoiceDetail].[ShipTo_Name],
    [InvoiceDetail].[ShipTo_PostalCode],
    [InvoiceDetail].[ShipTo_StateOrProvince],
    [InvoiceDetail].[ShipTo_Telephone],
    [InvoiceDetail].[SkipPriceCalculation],
    SkipPriceCalculationPLTable.Value,
    [InvoiceDetail].[Tax],
    [InvoiceDetail].[Tax_Base],
    [InvoiceDetail].[TimeZoneRuleVersionNumber],
    [InvoiceDetail].[TransactionCurrencyId],
    [InvoiceDetail].[TransactionCurrencyIdName],
    [InvoiceDetail].[UoMId],
    [InvoiceDetail].[UoMIdName],
    [InvoiceDetail].[UTCConversionTimeZoneCode],
    [InvoiceDetail].[VersionNumber],
    [InvoiceDetail].[VolumeDiscountAmount],
    [InvoiceDetail].[VolumeDiscountAmount_Base],
    [InvoiceDetail].[WillCall],
    WillCallPLTable.Value,
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from InvoiceDetail
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [InvoiceDetail].TransactionCurrencyId
    left outer join StringMap [InvoiceIsPriceLockedPLTable] on 
		([InvoiceIsPriceLockedPLTable].AttributeName = 'invoiceispricelocked'
		and [InvoiceIsPriceLockedPLTable].ObjectTypeCode = 1091
		and [InvoiceIsPriceLockedPLTable].AttributeValue = [InvoiceDetail].[InvoiceIsPriceLocked]
		and [InvoiceIsPriceLockedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InvoiceStateCodePLTable] on 
		([InvoiceStateCodePLTable].AttributeName = 'invoicestatecode'
		and [InvoiceStateCodePLTable].ObjectTypeCode = 1091
		and [InvoiceStateCodePLTable].AttributeValue = [InvoiceDetail].[InvoiceStateCode]
		and [InvoiceStateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsCopiedPLTable] on 
		([IsCopiedPLTable].AttributeName = 'iscopied'
		and [IsCopiedPLTable].ObjectTypeCode = 1091
		and [IsCopiedPLTable].AttributeValue = [InvoiceDetail].[IsCopied]
		and [IsCopiedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPriceOverriddenPLTable] on 
		([IsPriceOverriddenPLTable].AttributeName = 'ispriceoverridden'
		and [IsPriceOverriddenPLTable].ObjectTypeCode = 1091
		and [IsPriceOverriddenPLTable].AttributeValue = [InvoiceDetail].[IsPriceOverridden]
		and [IsPriceOverriddenPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsProductOverriddenPLTable] on 
		([IsProductOverriddenPLTable].AttributeName = 'isproductoverridden'
		and [IsProductOverriddenPLTable].ObjectTypeCode = 1091
		and [IsProductOverriddenPLTable].AttributeValue = [InvoiceDetail].[IsProductOverridden]
		and [IsProductOverriddenPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PricingErrorCodePLTable] on 
		([PricingErrorCodePLTable].AttributeName = 'pricingerrorcode'
		and [PricingErrorCodePLTable].ObjectTypeCode = 1091
		and [PricingErrorCodePLTable].AttributeValue = [InvoiceDetail].[PricingErrorCode]
		and [PricingErrorCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ProductTypeCodePLTable] on 
		([ProductTypeCodePLTable].AttributeName = 'producttypecode'
		and [ProductTypeCodePLTable].ObjectTypeCode = 1091
		and [ProductTypeCodePLTable].AttributeValue = [InvoiceDetail].[ProductTypeCode]
		and [ProductTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PropertyConfigurationStatusPLTable] on 
		([PropertyConfigurationStatusPLTable].AttributeName = 'propertyconfigurationstatus'
		and [PropertyConfigurationStatusPLTable].ObjectTypeCode = 1091
		and [PropertyConfigurationStatusPLTable].AttributeValue = [InvoiceDetail].[PropertyConfigurationStatus]
		and [PropertyConfigurationStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShipTo_FreightTermsCodePLTable] on 
		([ShipTo_FreightTermsCodePLTable].AttributeName = 'shipto_freighttermscode'
		and [ShipTo_FreightTermsCodePLTable].ObjectTypeCode = 1091
		and [ShipTo_FreightTermsCodePLTable].AttributeValue = [InvoiceDetail].[ShipTo_FreightTermsCode]
		and [ShipTo_FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SkipPriceCalculationPLTable] on 
		([SkipPriceCalculationPLTable].AttributeName = 'skippricecalculation'
		and [SkipPriceCalculationPLTable].ObjectTypeCode = 1091
		and [SkipPriceCalculationPLTable].AttributeValue = [InvoiceDetail].[SkipPriceCalculation]
		and [SkipPriceCalculationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [WillCallPLTable] on 
		([WillCallPLTable].AttributeName = 'willcall'
		and [WillCallPLTable].ObjectTypeCode = 1091
		and [WillCallPLTable].AttributeValue = [InvoiceDetail].[WillCall]
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
	[InvoiceDetail].OwnerId in 
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
		[InvoiceDetail].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 1090)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[InvoiceDetail].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[InvoiceDetail].[InvoiceId] in 
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
    ON OBJECT::[dbo].[FilteredInvoiceDetail] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredInvoiceDetail] TO [CRMReaderRole]
    AS [dbo];

