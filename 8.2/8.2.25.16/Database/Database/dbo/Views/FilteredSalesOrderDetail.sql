

--
-- report view for salesorderdetail
--
create view dbo.[FilteredSalesOrderDetail] (
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
    [requestdeliveryby],
    [requestdeliverybyutc],
    [salesorderdetailid],
    [salesorderid],
    [salesorderidname],
    [salesorderispricelocked],
    [salesorderispricelockedname],
    [salesorderstatecode],
    [salesorderstatecodename],
    [salesrepid],
    [salesrepiddsc],
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
    [SalesOrderDetail].[BaseAmount],
    [SalesOrderDetail].[BaseAmount_Base],
    [SalesOrderDetail].[CreatedBy],
    --[SalesOrderDetail].[CreatedByDsc]
    0,
    [SalesOrderDetail].[CreatedByName],
    [SalesOrderDetail].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrderDetail].[CreatedOn],
			us.TimeZoneCode),
        [SalesOrderDetail].[CreatedOn],
    [SalesOrderDetail].[CreatedOnBehalfBy],
    --[SalesOrderDetail].[CreatedOnBehalfByDsc]
    0,
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
    --[SalesOrderDetail].[ModifiedByDsc]
    0,
    [SalesOrderDetail].[ModifiedByName],
    [SalesOrderDetail].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrderDetail].[ModifiedOn],
			us.TimeZoneCode),
        [SalesOrderDetail].[ModifiedOn],
    [SalesOrderDetail].[ModifiedOnBehalfBy],
    --[SalesOrderDetail].[ModifiedOnBehalfByDsc]
    0,
    [SalesOrderDetail].[ModifiedOnBehalfByName],
    [SalesOrderDetail].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrderDetail].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SalesOrderDetail].[OverriddenCreatedOn],
    [SalesOrderDetail].[OwnerId],
    [SalesOrderDetail].[OwnerIdType],
    [SalesOrderDetail].[OwningBusinessUnit],
    [SalesOrderDetail].[OwningUser],
    [SalesOrderDetail].[ParentBundleId],
    [SalesOrderDetail].[PricePerUnit],
    [SalesOrderDetail].[PricePerUnit_Base],
    [SalesOrderDetail].[PricingErrorCode],
    PricingErrorCodePLTable.Value,
    [SalesOrderDetail].[ProductAssociationId],
    [SalesOrderDetail].[ProductDescription],
    [SalesOrderDetail].[ProductId],
    --[SalesOrderDetail].[ProductIdDsc]
    0,
    [SalesOrderDetail].[ProductIdName],
    [SalesOrderDetail].[ProductTypeCode],
    ProductTypeCodePLTable.Value,
    [SalesOrderDetail].[PropertyConfigurationStatus],
    PropertyConfigurationStatusPLTable.Value,
    [SalesOrderDetail].[Quantity],
    [SalesOrderDetail].[QuantityBackordered],
    [SalesOrderDetail].[QuantityCancelled],
    [SalesOrderDetail].[QuantityShipped],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesOrderDetail].[RequestDeliveryBy],
			us.TimeZoneCode),
        [SalesOrderDetail].[RequestDeliveryBy],
    [SalesOrderDetail].[SalesOrderDetailId],
    [SalesOrderDetail].[SalesOrderId],
    [SalesOrderDetail].[SalesOrderIdName],
    [SalesOrderDetail].[SalesOrderIsPriceLocked],
    SalesOrderIsPriceLockedPLTable.Value,
    [SalesOrderDetail].[SalesOrderStateCode],
    SalesOrderStateCodePLTable.Value,
    [SalesOrderDetail].[SalesRepId],
    --[SalesOrderDetail].[SalesRepIdDsc]
    0,
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
    [SalesOrderDetail].[Tax],
    [SalesOrderDetail].[Tax_Base],
    [SalesOrderDetail].[TimeZoneRuleVersionNumber],
    [SalesOrderDetail].[TransactionCurrencyId],
    --[SalesOrderDetail].[TransactionCurrencyIdDsc]
    0,
    [SalesOrderDetail].[TransactionCurrencyIdName],
    [SalesOrderDetail].[UoMId],
    --[SalesOrderDetail].[UoMIdDsc]
    0,
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
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
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
		[SalesOrderDetail].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1088)
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
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1088
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSalesOrderDetail] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSalesOrderDetail] TO [CRMReaderRole]
    AS [dbo];

