

--
-- report view for quotedetail
--
create view dbo.[FilteredQuoteDetail] 
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
    [quotedetailid],
    [quotedetailname],
    [quoteid],
    [quoteidname],
    [quotestatecode],
    [quotestatecodename],
    [requestdeliveryby],
    [requestdeliverybyutc],
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
    [QuoteDetail].[BaseAmount],
    [QuoteDetail].[BaseAmount_Base],
    [QuoteDetail].[CreatedBy],
    [QuoteDetail].[CreatedByName],
    [QuoteDetail].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteDetail].[CreatedOn],
			us.TimeZoneCode),
        [QuoteDetail].[CreatedOn],
    [QuoteDetail].[CreatedOnBehalfBy],
    [QuoteDetail].[CreatedOnBehalfByName],
    [QuoteDetail].[CreatedOnBehalfByYomiName],
    [QuoteDetail].[Description],
    [QuoteDetail].[ExchangeRate],
    [QuoteDetail].[ExtendedAmount],
    [QuoteDetail].[ExtendedAmount_Base],
    [QuoteDetail].[ImportSequenceNumber],
    [QuoteDetail].[IsPriceOverridden],
    IsPriceOverriddenPLTable.Value,
    [QuoteDetail].[IsProductOverridden],
    IsProductOverriddenPLTable.Value,
    [QuoteDetail].[LineItemNumber],
    [QuoteDetail].[ManualDiscountAmount],
    [QuoteDetail].[ManualDiscountAmount_Base],
    [QuoteDetail].[ModifiedBy],
    [QuoteDetail].[ModifiedByName],
    [QuoteDetail].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteDetail].[ModifiedOn],
			us.TimeZoneCode),
        [QuoteDetail].[ModifiedOn],
    [QuoteDetail].[ModifiedOnBehalfBy],
    [QuoteDetail].[ModifiedOnBehalfByName],
    [QuoteDetail].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteDetail].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [QuoteDetail].[OverriddenCreatedOn],
    [QuoteDetail].[OwnerId],
    --[QuoteDetail].[OwnerIdDsc]
    0,
    [QuoteDetail].[OwnerIdName],
    [QuoteDetail].[OwnerIdType],
    [QuoteDetail].[OwnerIdYomiName],
    [QuoteDetail].[OwningBusinessUnit],
    [QuoteDetail].[OwningTeam],
    [QuoteDetail].[OwningUser],
    [QuoteDetail].[ParentBundleId],
    [QuoteDetail].[ParentBundleIdRef],
    [QuoteDetail].[PricePerUnit],
    [QuoteDetail].[PricePerUnit_Base],
    [QuoteDetail].[PricingErrorCode],
    PricingErrorCodePLTable.Value,
    [QuoteDetail].[ProductAssociationId],
    [QuoteDetail].[ProductDescription],
    [QuoteDetail].[ProductId],
    [QuoteDetail].[ProductIdName],
    [QuoteDetail].[ProductName],
    [QuoteDetail].[ProductNumber],
    [QuoteDetail].[ProductTypeCode],
    ProductTypeCodePLTable.Value,
    [QuoteDetail].[PropertyConfigurationStatus],
    PropertyConfigurationStatusPLTable.Value,
    [QuoteDetail].[Quantity],
    [QuoteDetail].[QuoteDetailId],
    [QuoteDetail].[QuoteDetailName],
    [QuoteDetail].[QuoteId],
    [QuoteDetail].[QuoteIdName],
    [QuoteDetail].[QuoteStateCode],
    QuoteStateCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteDetail].[RequestDeliveryBy],
			us.TimeZoneCode),
        [QuoteDetail].[RequestDeliveryBy],
    [QuoteDetail].[SalesRepId],
    [QuoteDetail].[SalesRepIdName],
    [QuoteDetail].[SalesRepIdYomiName],
    [QuoteDetail].[SequenceNumber],
    [QuoteDetail].[ShipTo_AddressId],
    [QuoteDetail].[ShipTo_City],
    [QuoteDetail].[ShipTo_ContactName],
    [QuoteDetail].[ShipTo_Country],
    [QuoteDetail].[ShipTo_Fax],
    [QuoteDetail].[ShipTo_FreightTermsCode],
    ShipTo_FreightTermsCodePLTable.Value,
    [QuoteDetail].[ShipTo_Line1],
    [QuoteDetail].[ShipTo_Line2],
    [QuoteDetail].[ShipTo_Line3],
    [QuoteDetail].[ShipTo_Name],
    [QuoteDetail].[ShipTo_PostalCode],
    [QuoteDetail].[ShipTo_StateOrProvince],
    [QuoteDetail].[ShipTo_Telephone],
    [QuoteDetail].[SkipPriceCalculation],
    SkipPriceCalculationPLTable.Value,
    [QuoteDetail].[Tax],
    [QuoteDetail].[Tax_Base],
    [QuoteDetail].[TimeZoneRuleVersionNumber],
    [QuoteDetail].[TransactionCurrencyId],
    [QuoteDetail].[TransactionCurrencyIdName],
    [QuoteDetail].[UoMId],
    [QuoteDetail].[UoMIdName],
    [QuoteDetail].[UTCConversionTimeZoneCode],
    [QuoteDetail].[VersionNumber],
    [QuoteDetail].[VolumeDiscountAmount],
    [QuoteDetail].[VolumeDiscountAmount_Base],
    [QuoteDetail].[WillCall],
    WillCallPLTable.Value,
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from QuoteDetail
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [QuoteDetail].TransactionCurrencyId
    left outer join StringMap [IsPriceOverriddenPLTable] on 
		([IsPriceOverriddenPLTable].AttributeName = 'ispriceoverridden'
		and [IsPriceOverriddenPLTable].ObjectTypeCode = 1085
		and [IsPriceOverriddenPLTable].AttributeValue = [QuoteDetail].[IsPriceOverridden]
		and [IsPriceOverriddenPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsProductOverriddenPLTable] on 
		([IsProductOverriddenPLTable].AttributeName = 'isproductoverridden'
		and [IsProductOverriddenPLTable].ObjectTypeCode = 1085
		and [IsProductOverriddenPLTable].AttributeValue = [QuoteDetail].[IsProductOverridden]
		and [IsProductOverriddenPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PricingErrorCodePLTable] on 
		([PricingErrorCodePLTable].AttributeName = 'pricingerrorcode'
		and [PricingErrorCodePLTable].ObjectTypeCode = 1085
		and [PricingErrorCodePLTable].AttributeValue = [QuoteDetail].[PricingErrorCode]
		and [PricingErrorCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ProductTypeCodePLTable] on 
		([ProductTypeCodePLTable].AttributeName = 'producttypecode'
		and [ProductTypeCodePLTable].ObjectTypeCode = 1085
		and [ProductTypeCodePLTable].AttributeValue = [QuoteDetail].[ProductTypeCode]
		and [ProductTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PropertyConfigurationStatusPLTable] on 
		([PropertyConfigurationStatusPLTable].AttributeName = 'propertyconfigurationstatus'
		and [PropertyConfigurationStatusPLTable].ObjectTypeCode = 1085
		and [PropertyConfigurationStatusPLTable].AttributeValue = [QuoteDetail].[PropertyConfigurationStatus]
		and [PropertyConfigurationStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [QuoteStateCodePLTable] on 
		([QuoteStateCodePLTable].AttributeName = 'quotestatecode'
		and [QuoteStateCodePLTable].ObjectTypeCode = 1085
		and [QuoteStateCodePLTable].AttributeValue = [QuoteDetail].[QuoteStateCode]
		and [QuoteStateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShipTo_FreightTermsCodePLTable] on 
		([ShipTo_FreightTermsCodePLTable].AttributeName = 'shipto_freighttermscode'
		and [ShipTo_FreightTermsCodePLTable].ObjectTypeCode = 1085
		and [ShipTo_FreightTermsCodePLTable].AttributeValue = [QuoteDetail].[ShipTo_FreightTermsCode]
		and [ShipTo_FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SkipPriceCalculationPLTable] on 
		([SkipPriceCalculationPLTable].AttributeName = 'skippricecalculation'
		and [SkipPriceCalculationPLTable].ObjectTypeCode = 1085
		and [SkipPriceCalculationPLTable].AttributeValue = [QuoteDetail].[SkipPriceCalculation]
		and [SkipPriceCalculationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [WillCallPLTable] on 
		([WillCallPLTable].AttributeName = 'willcall'
		and [WillCallPLTable].ObjectTypeCode = 1085
		and [WillCallPLTable].AttributeValue = [QuoteDetail].[WillCall]
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
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[QuoteDetail].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
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
		[QuoteDetail].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 1084)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[QuoteDetail].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[QuoteDetail].[QuoteId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1084
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQuoteDetail] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQuoteDetail] TO [CRMReaderRole]
    AS [dbo];

