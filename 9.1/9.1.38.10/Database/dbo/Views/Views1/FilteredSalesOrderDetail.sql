

--
-- report view for salesorderdetail
--
create view dbo.[FilteredSalesOrderDetail] 
(
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
    [quotedetailid],
    [quotedetailidname],
    [requestdeliveryby],
    [requestdeliverybyutc],
    [salesorderdetailid],
    [salesorderdetailname],
    [salesorderid],
    [salesorderidname],
    [salesorderispricelocked],
    [salesorderispricelockedname],
    [salesorderstatecode],
    [salesorderstatecodename],
    [salesrepid],
    [salesrepidname],
    [salesrepidyominame],
    [sequencenumber],
    [shipto_addressid],
    [shipto_city],
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
    [SalesOrderDetail].[BaseAmount],
    [SalesOrderDetail].[BaseAmount_Base],
    [SalesOrderDetail].[CreatedBy],
    [SalesOrderDetail].[CreatedByName],
    [SalesOrderDetail].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrderDetail].[CreatedOn],
			us.TimeZoneCode),
        [SalesOrderDetail].[CreatedOn],
    [SalesOrderDetail].[CreatedOnBehalfBy],
    [SalesOrderDetail].[CreatedOnBehalfByName],
    [SalesOrderDetail].[CreatedOnBehalfByYomiName],
    [SalesOrderDetail].[Description],
    [SalesOrderDetail].[ExchangeRate],
    [SalesOrderDetail].[ExtendedAmount],
    [SalesOrderDetail].[ExtendedAmount_Base],
    [SalesOrderDetail].[ImportSequenceNumber],
    [SalesOrderDetail].[IsCopied],
    IsCopiedPLTable.Value,
    [SalesOrderDetail].[IsPriceOverridden],
    IsPriceOverriddenPLTable.Value,
    [SalesOrderDetail].[IsProductOverridden],
    IsProductOverriddenPLTable.Value,
    [SalesOrderDetail].[LineItemNumber],
    [SalesOrderDetail].[ManualDiscountAmount],
    [SalesOrderDetail].[ManualDiscountAmount_Base],
    [SalesOrderDetail].[ModifiedBy],
    [SalesOrderDetail].[ModifiedByName],
    [SalesOrderDetail].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrderDetail].[ModifiedOn],
			us.TimeZoneCode),
        [SalesOrderDetail].[ModifiedOn],
    [SalesOrderDetail].[ModifiedOnBehalfBy],
    [SalesOrderDetail].[ModifiedOnBehalfByName],
    [SalesOrderDetail].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrderDetail].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SalesOrderDetail].[OverriddenCreatedOn],
    [SalesOrderDetail].[OwnerId],
    --[SalesOrderDetail].[OwnerIdDsc]
    0,
    [SalesOrderDetail].[OwnerIdName],
    [SalesOrderDetail].[OwnerIdType],
    [SalesOrderDetail].[OwnerIdYomiName],
    [SalesOrderDetail].[OwningBusinessUnit],
    [SalesOrderDetail].[OwningTeam],
    [SalesOrderDetail].[OwningUser],
    [SalesOrderDetail].[ParentBundleId],
    [SalesOrderDetail].[ParentBundleIdRef],
    [SalesOrderDetail].[PricePerUnit],
    [SalesOrderDetail].[PricePerUnit_Base],
    [SalesOrderDetail].[PricingErrorCode],
    PricingErrorCodePLTable.Value,
    [SalesOrderDetail].[ProductAssociationId],
    [SalesOrderDetail].[ProductDescription],
    [SalesOrderDetail].[ProductId],
    [SalesOrderDetail].[ProductIdName],
    [SalesOrderDetail].[ProductName],
    [SalesOrderDetail].[ProductNumber],
    [SalesOrderDetail].[ProductTypeCode],
    ProductTypeCodePLTable.Value,
    [SalesOrderDetail].[PropertyConfigurationStatus],
    PropertyConfigurationStatusPLTable.Value,
    [SalesOrderDetail].[Quantity],
    [SalesOrderDetail].[QuantityBackordered],
    [SalesOrderDetail].[QuantityCancelled],
    [SalesOrderDetail].[QuantityShipped],
    [SalesOrderDetail].[QuoteDetailId],
    [SalesOrderDetail].[QuoteDetailIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrderDetail].[RequestDeliveryBy],
			us.TimeZoneCode),
        [SalesOrderDetail].[RequestDeliveryBy],
    [SalesOrderDetail].[SalesOrderDetailId],
    [SalesOrderDetail].[SalesOrderDetailName],
    [SalesOrderDetail].[SalesOrderId],
    [SalesOrderDetail].[SalesOrderIdName],
    [SalesOrderDetail].[SalesOrderIsPriceLocked],
    SalesOrderIsPriceLockedPLTable.Value,
    [SalesOrderDetail].[SalesOrderStateCode],
    SalesOrderStateCodePLTable.Value,
    [SalesOrderDetail].[SalesRepId],
    [SalesOrderDetail].[SalesRepIdName],
    [SalesOrderDetail].[SalesRepIdYomiName],
    [SalesOrderDetail].[SequenceNumber],
    [SalesOrderDetail].[ShipTo_AddressId],
    [SalesOrderDetail].[ShipTo_City],
    [SalesOrderDetail].[ShipTo_ContactName],
    [SalesOrderDetail].[ShipTo_Country],
    [SalesOrderDetail].[ShipTo_Fax],
    [SalesOrderDetail].[ShipTo_FreightTermsCode],
    ShipTo_FreightTermsCodePLTable.Value,
    [SalesOrderDetail].[ShipTo_Line1],
    [SalesOrderDetail].[ShipTo_Line2],
    [SalesOrderDetail].[ShipTo_Line3],
    [SalesOrderDetail].[ShipTo_Name],
    [SalesOrderDetail].[ShipTo_PostalCode],
    [SalesOrderDetail].[ShipTo_StateOrProvince],
    [SalesOrderDetail].[ShipTo_Telephone],
    [SalesOrderDetail].[SkipPriceCalculation],
    SkipPriceCalculationPLTable.Value,
    [SalesOrderDetail].[Tax],
    [SalesOrderDetail].[Tax_Base],
    [SalesOrderDetail].[TimeZoneRuleVersionNumber],
    [SalesOrderDetail].[TransactionCurrencyId],
    [SalesOrderDetail].[TransactionCurrencyIdName],
    [SalesOrderDetail].[UoMId],
    [SalesOrderDetail].[UoMIdName],
    [SalesOrderDetail].[UTCConversionTimeZoneCode],
    [SalesOrderDetail].[VersionNumber],
    [SalesOrderDetail].[VolumeDiscountAmount],
    [SalesOrderDetail].[VolumeDiscountAmount_Base],
    [SalesOrderDetail].[WillCall],
    WillCallPLTable.Value,
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from SalesOrderDetail
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [SalesOrderDetail].TransactionCurrencyId
    left outer join StringMap [IsCopiedPLTable] on 
		([IsCopiedPLTable].AttributeName = 'iscopied'
		and [IsCopiedPLTable].ObjectTypeCode = 1089
		and [IsCopiedPLTable].AttributeValue = [SalesOrderDetail].[IsCopied]
		and [IsCopiedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPriceOverriddenPLTable] on 
		([IsPriceOverriddenPLTable].AttributeName = 'ispriceoverridden'
		and [IsPriceOverriddenPLTable].ObjectTypeCode = 1089
		and [IsPriceOverriddenPLTable].AttributeValue = [SalesOrderDetail].[IsPriceOverridden]
		and [IsPriceOverriddenPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsProductOverriddenPLTable] on 
		([IsProductOverriddenPLTable].AttributeName = 'isproductoverridden'
		and [IsProductOverriddenPLTable].ObjectTypeCode = 1089
		and [IsProductOverriddenPLTable].AttributeValue = [SalesOrderDetail].[IsProductOverridden]
		and [IsProductOverriddenPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PricingErrorCodePLTable] on 
		([PricingErrorCodePLTable].AttributeName = 'pricingerrorcode'
		and [PricingErrorCodePLTable].ObjectTypeCode = 1089
		and [PricingErrorCodePLTable].AttributeValue = [SalesOrderDetail].[PricingErrorCode]
		and [PricingErrorCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ProductTypeCodePLTable] on 
		([ProductTypeCodePLTable].AttributeName = 'producttypecode'
		and [ProductTypeCodePLTable].ObjectTypeCode = 1089
		and [ProductTypeCodePLTable].AttributeValue = [SalesOrderDetail].[ProductTypeCode]
		and [ProductTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PropertyConfigurationStatusPLTable] on 
		([PropertyConfigurationStatusPLTable].AttributeName = 'propertyconfigurationstatus'
		and [PropertyConfigurationStatusPLTable].ObjectTypeCode = 1089
		and [PropertyConfigurationStatusPLTable].AttributeValue = [SalesOrderDetail].[PropertyConfigurationStatus]
		and [PropertyConfigurationStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SalesOrderIsPriceLockedPLTable] on 
		([SalesOrderIsPriceLockedPLTable].AttributeName = 'salesorderispricelocked'
		and [SalesOrderIsPriceLockedPLTable].ObjectTypeCode = 1089
		and [SalesOrderIsPriceLockedPLTable].AttributeValue = [SalesOrderDetail].[SalesOrderIsPriceLocked]
		and [SalesOrderIsPriceLockedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SalesOrderStateCodePLTable] on 
		([SalesOrderStateCodePLTable].AttributeName = 'salesorderstatecode'
		and [SalesOrderStateCodePLTable].ObjectTypeCode = 1089
		and [SalesOrderStateCodePLTable].AttributeValue = [SalesOrderDetail].[SalesOrderStateCode]
		and [SalesOrderStateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShipTo_FreightTermsCodePLTable] on 
		([ShipTo_FreightTermsCodePLTable].AttributeName = 'shipto_freighttermscode'
		and [ShipTo_FreightTermsCodePLTable].ObjectTypeCode = 1089
		and [ShipTo_FreightTermsCodePLTable].AttributeValue = [SalesOrderDetail].[ShipTo_FreightTermsCode]
		and [ShipTo_FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SkipPriceCalculationPLTable] on 
		([SkipPriceCalculationPLTable].AttributeName = 'skippricecalculation'
		and [SkipPriceCalculationPLTable].ObjectTypeCode = 1089
		and [SkipPriceCalculationPLTable].AttributeValue = [SalesOrderDetail].[SkipPriceCalculation]
		and [SkipPriceCalculationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [WillCallPLTable] on 
		([WillCallPLTable].AttributeName = 'willcall'
		and [WillCallPLTable].ObjectTypeCode = 1089
		and [WillCallPLTable].AttributeValue = [SalesOrderDetail].[WillCall]
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
	[SalesOrderDetail].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1088
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
		[SalesOrderDetail].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 1088)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[SalesOrderDetail].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[SalesOrderDetail].[SalesOrderId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1088
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSalesOrderDetail] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSalesOrderDetail] TO [CRMReaderRole]
    AS [dbo];

