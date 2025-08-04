

--
-- report view for opportunityproduct
--
create view dbo.[FilteredOpportunityProduct] 
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
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
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
    [opportunityid],
    [opportunityidname],
    [opportunityproductid],
    [opportunityproductname],
    [opportunitystatecode],
    [opportunitystatecodename],
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
    [producttypecode],
    [producttypecodename],
    [propertyconfigurationstatus],
    [propertyconfigurationstatusname],
    [quantity],
    [sequencenumber],
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
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [OpportunityProduct].[BaseAmount],
    [OpportunityProduct].[BaseAmount_Base],
    [OpportunityProduct].[CreatedBy],
    [OpportunityProduct].[CreatedByName],
    [OpportunityProduct].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityProduct].[CreatedOn],
			us.TimeZoneCode),
        [OpportunityProduct].[CreatedOn],
    [OpportunityProduct].[CreatedOnBehalfBy],
    [OpportunityProduct].[CreatedOnBehalfByName],
    [OpportunityProduct].[CreatedOnBehalfByYomiName],
    [OpportunityProduct].[Description],
    cast([OpportunityProduct].[EntityImage] as varbinary(max)),
    [OpportunityProduct].[EntityImageId],
    [OpportunityProduct].[EntityImage_Timestamp],
    [OpportunityProduct].[EntityImage_URL],
    [OpportunityProduct].[ExchangeRate],
    [OpportunityProduct].[ExtendedAmount],
    [OpportunityProduct].[ExtendedAmount_Base],
    [OpportunityProduct].[ImportSequenceNumber],
    [OpportunityProduct].[IsPriceOverridden],
    IsPriceOverriddenPLTable.Value,
    [OpportunityProduct].[IsProductOverridden],
    IsProductOverriddenPLTable.Value,
    [OpportunityProduct].[LineItemNumber],
    [OpportunityProduct].[ManualDiscountAmount],
    [OpportunityProduct].[ManualDiscountAmount_Base],
    [OpportunityProduct].[ModifiedBy],
    [OpportunityProduct].[ModifiedByName],
    [OpportunityProduct].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityProduct].[ModifiedOn],
			us.TimeZoneCode),
        [OpportunityProduct].[ModifiedOn],
    [OpportunityProduct].[ModifiedOnBehalfBy],
    [OpportunityProduct].[ModifiedOnBehalfByName],
    [OpportunityProduct].[ModifiedOnBehalfByYomiName],
    [OpportunityProduct].[OpportunityId],
    [OpportunityProduct].[OpportunityIdName],
    [OpportunityProduct].[OpportunityProductId],
    [OpportunityProduct].[OpportunityProductName],
    [OpportunityProduct].[OpportunityStateCode],
    OpportunityStateCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityProduct].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [OpportunityProduct].[OverriddenCreatedOn],
    [OpportunityProduct].[OwnerId],
    --[OpportunityProduct].[OwnerIdDsc]
    0,
    [OpportunityProduct].[OwnerIdName],
    [OpportunityProduct].[OwnerIdType],
    [OpportunityProduct].[OwnerIdYomiName],
    [OpportunityProduct].[OwningBusinessUnit],
    [OpportunityProduct].[OwningTeam],
    [OpportunityProduct].[OwningUser],
    [OpportunityProduct].[ParentBundleId],
    [OpportunityProduct].[ParentBundleIdRef],
    [OpportunityProduct].[PricePerUnit],
    [OpportunityProduct].[PricePerUnit_Base],
    [OpportunityProduct].[PricingErrorCode],
    PricingErrorCodePLTable.Value,
    [OpportunityProduct].[ProductAssociationId],
    [OpportunityProduct].[ProductDescription],
    [OpportunityProduct].[ProductId],
    [OpportunityProduct].[ProductIdName],
    [OpportunityProduct].[ProductName],
    [OpportunityProduct].[ProductTypeCode],
    ProductTypeCodePLTable.Value,
    [OpportunityProduct].[PropertyConfigurationStatus],
    PropertyConfigurationStatusPLTable.Value,
    [OpportunityProduct].[Quantity],
    [OpportunityProduct].[SequenceNumber],
    [OpportunityProduct].[SkipPriceCalculation],
    SkipPriceCalculationPLTable.Value,
    [OpportunityProduct].[Tax],
    [OpportunityProduct].[Tax_Base],
    [OpportunityProduct].[TimeZoneRuleVersionNumber],
    [OpportunityProduct].[TransactionCurrencyId],
    [OpportunityProduct].[TransactionCurrencyIdName],
    [OpportunityProduct].[UoMId],
    [OpportunityProduct].[UoMIdName],
    [OpportunityProduct].[UTCConversionTimeZoneCode],
    [OpportunityProduct].[VersionNumber],
    [OpportunityProduct].[VolumeDiscountAmount],
    [OpportunityProduct].[VolumeDiscountAmount_Base],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from OpportunityProduct
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [OpportunityProduct].TransactionCurrencyId
    left outer join StringMap [IsPriceOverriddenPLTable] on 
		([IsPriceOverriddenPLTable].AttributeName = 'ispriceoverridden'
		and [IsPriceOverriddenPLTable].ObjectTypeCode = 1083
		and [IsPriceOverriddenPLTable].AttributeValue = [OpportunityProduct].[IsPriceOverridden]
		and [IsPriceOverriddenPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsProductOverriddenPLTable] on 
		([IsProductOverriddenPLTable].AttributeName = 'isproductoverridden'
		and [IsProductOverriddenPLTable].ObjectTypeCode = 1083
		and [IsProductOverriddenPLTable].AttributeValue = [OpportunityProduct].[IsProductOverridden]
		and [IsProductOverriddenPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OpportunityStateCodePLTable] on 
		([OpportunityStateCodePLTable].AttributeName = 'opportunitystatecode'
		and [OpportunityStateCodePLTable].ObjectTypeCode = 1083
		and [OpportunityStateCodePLTable].AttributeValue = [OpportunityProduct].[OpportunityStateCode]
		and [OpportunityStateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PricingErrorCodePLTable] on 
		([PricingErrorCodePLTable].AttributeName = 'pricingerrorcode'
		and [PricingErrorCodePLTable].ObjectTypeCode = 1083
		and [PricingErrorCodePLTable].AttributeValue = [OpportunityProduct].[PricingErrorCode]
		and [PricingErrorCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ProductTypeCodePLTable] on 
		([ProductTypeCodePLTable].AttributeName = 'producttypecode'
		and [ProductTypeCodePLTable].ObjectTypeCode = 1083
		and [ProductTypeCodePLTable].AttributeValue = [OpportunityProduct].[ProductTypeCode]
		and [ProductTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PropertyConfigurationStatusPLTable] on 
		([PropertyConfigurationStatusPLTable].AttributeName = 'propertyconfigurationstatus'
		and [PropertyConfigurationStatusPLTable].ObjectTypeCode = 1083
		and [PropertyConfigurationStatusPLTable].AttributeValue = [OpportunityProduct].[PropertyConfigurationStatus]
		and [PropertyConfigurationStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SkipPriceCalculationPLTable] on 
		([SkipPriceCalculationPLTable].AttributeName = 'skippricecalculation'
		and [SkipPriceCalculationPLTable].ObjectTypeCode = 1083
		and [SkipPriceCalculationPLTable].AttributeValue = [OpportunityProduct].[SkipPriceCalculation]
		and [SkipPriceCalculationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(3) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[OpportunityProduct].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 3
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
		[OpportunityProduct].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 3)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[OpportunityProduct].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[OpportunityProduct].[OpportunityId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 3
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunityProduct] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunityProduct] TO [CRMReaderRole]
    AS [dbo];

