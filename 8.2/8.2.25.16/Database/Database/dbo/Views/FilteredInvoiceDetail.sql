

--
-- report view for invoicedetail
--
create view dbo.[FilteredInvoiceDetail] (
    [actualdeliveryon],
    [actualdeliveryonutc],
    [baseamount],
    [baseamount_base],
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
    [exchangerate],
    [extendedamount],
    [extendedamount_base],
    [importsequencenumber],
    [invoicedetailid],
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
    [modifiedbydsc],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [parentbundleid],
    [priceperunit],
    [priceperunit_base],
    [pricingerrorcode],
    [pricingerrorcodename],
    [productassociationid],
    [productdescription],
    [productid],
    [productiddsc],
    [productidname],
    [producttypecode],
    [producttypecodename],
    [propertyconfigurationstatus],
    [propertyconfigurationstatusname],
    [quantity],
    [quantitybackordered],
    [quantitycancelled],
    [quantityshipped],
    [salesrepid],
    [salesrepiddsc],
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
    [tax],
    [tax_base],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [uomid],
    [uomiddsc],
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
    --[InvoiceDetail].[CreatedByDsc]
    0,
    [InvoiceDetail].[CreatedByName],
    [InvoiceDetail].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InvoiceDetail].[CreatedOn],
			us.TimeZoneCode),
        [InvoiceDetail].[CreatedOn],
    [InvoiceDetail].[CreatedOnBehalfBy],
    --[InvoiceDetail].[CreatedOnBehalfByDsc]
    0,
    [InvoiceDetail].[CreatedOnBehalfByName],
    [InvoiceDetail].[CreatedOnBehalfByYomiName],
    [InvoiceDetail].[Description],
    [InvoiceDetail].[ExchangeRate],
    [InvoiceDetail].[ExtendedAmount],
    [InvoiceDetail].[ExtendedAmount_Base],
    [InvoiceDetail].[ImportSequenceNumber],
    [InvoiceDetail].[InvoiceDetailId],
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
    --[InvoiceDetail].[ModifiedByDsc]
    0,
    [InvoiceDetail].[ModifiedByName],
    [InvoiceDetail].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InvoiceDetail].[ModifiedOn],
			us.TimeZoneCode),
        [InvoiceDetail].[ModifiedOn],
    [InvoiceDetail].[ModifiedOnBehalfBy],
    --[InvoiceDetail].[ModifiedOnBehalfByDsc]
    0,
    [InvoiceDetail].[ModifiedOnBehalfByName],
    [InvoiceDetail].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InvoiceDetail].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [InvoiceDetail].[OverriddenCreatedOn],
    [InvoiceDetail].[OwnerId],
    [InvoiceDetail].[OwnerIdType],
    [InvoiceDetail].[OwningBusinessUnit],
    [InvoiceDetail].[OwningUser],
    [InvoiceDetail].[ParentBundleId],
    [InvoiceDetail].[PricePerUnit],
    [InvoiceDetail].[PricePerUnit_Base],
    [InvoiceDetail].[PricingErrorCode],
    PricingErrorCodePLTable.Value,
    [InvoiceDetail].[ProductAssociationId],
    [InvoiceDetail].[ProductDescription],
    [InvoiceDetail].[ProductId],
    --[InvoiceDetail].[ProductIdDsc]
    0,
    [InvoiceDetail].[ProductIdName],
    [InvoiceDetail].[ProductTypeCode],
    ProductTypeCodePLTable.Value,
    [InvoiceDetail].[PropertyConfigurationStatus],
    PropertyConfigurationStatusPLTable.Value,
    [InvoiceDetail].[Quantity],
    [InvoiceDetail].[QuantityBackordered],
    [InvoiceDetail].[QuantityCancelled],
    [InvoiceDetail].[QuantityShipped],
    [InvoiceDetail].[SalesRepId],
    --[InvoiceDetail].[SalesRepIdDsc]
    0,
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
    [InvoiceDetail].[Tax],
    [InvoiceDetail].[Tax_Base],
    [InvoiceDetail].[TimeZoneRuleVersionNumber],
    [InvoiceDetail].[TransactionCurrencyId],
    --[InvoiceDetail].[TransactionCurrencyIdDsc]
    0,
    [InvoiceDetail].[TransactionCurrencyIdName],
    [InvoiceDetail].[UoMId],
    --[InvoiceDetail].[UoMIdDsc]
    0,
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
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
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
		[InvoiceDetail].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1090)
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
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1090
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredInvoiceDetail] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredInvoiceDetail] TO [CRMReaderRole]
    AS [dbo];

