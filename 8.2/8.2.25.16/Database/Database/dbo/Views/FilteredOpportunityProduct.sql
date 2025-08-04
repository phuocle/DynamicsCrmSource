

--
-- report view for opportunityproduct
--
create view dbo.[FilteredOpportunityProduct] (
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
    [modifiedbydsc],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [opportunityid],
    [opportunityiddsc],
    [opportunityidname],
    [opportunityproductid],
    [opportunitystatecode],
    [opportunitystatecodename],
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
    [sequencenumber],
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
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [OpportunityProduct].[BaseAmount],
    [OpportunityProduct].[BaseAmount_Base],
    [OpportunityProduct].[CreatedBy],
    --[OpportunityProduct].[CreatedByDsc]
    0,
    [OpportunityProduct].[CreatedByName],
    [OpportunityProduct].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityProduct].[CreatedOn],
			us.TimeZoneCode),
        [OpportunityProduct].[CreatedOn],
    [OpportunityProduct].[CreatedOnBehalfBy],
    --[OpportunityProduct].[CreatedOnBehalfByDsc]
    0,
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
    --[OpportunityProduct].[ModifiedByDsc]
    0,
    [OpportunityProduct].[ModifiedByName],
    [OpportunityProduct].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityProduct].[ModifiedOn],
			us.TimeZoneCode),
        [OpportunityProduct].[ModifiedOn],
    [OpportunityProduct].[ModifiedOnBehalfBy],
    --[OpportunityProduct].[ModifiedOnBehalfByDsc]
    0,
    [OpportunityProduct].[ModifiedOnBehalfByName],
    [OpportunityProduct].[ModifiedOnBehalfByYomiName],
    [OpportunityProduct].[OpportunityId],
    --[OpportunityProduct].[OpportunityIdDsc]
    0,
    [OpportunityProduct].[OpportunityIdName],
    [OpportunityProduct].[OpportunityProductId],
    [OpportunityProduct].[OpportunityStateCode],
    OpportunityStateCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityProduct].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [OpportunityProduct].[OverriddenCreatedOn],
    [OpportunityProduct].[OwnerId],
    [OpportunityProduct].[OwnerIdType],
    [OpportunityProduct].[OwningBusinessUnit],
    [OpportunityProduct].[OwningUser],
    [OpportunityProduct].[ParentBundleId],
    [OpportunityProduct].[PricePerUnit],
    [OpportunityProduct].[PricePerUnit_Base],
    [OpportunityProduct].[PricingErrorCode],
    PricingErrorCodePLTable.Value,
    [OpportunityProduct].[ProductAssociationId],
    [OpportunityProduct].[ProductDescription],
    [OpportunityProduct].[ProductId],
    --[OpportunityProduct].[ProductIdDsc]
    0,
    [OpportunityProduct].[ProductIdName],
    [OpportunityProduct].[ProductTypeCode],
    ProductTypeCodePLTable.Value,
    [OpportunityProduct].[PropertyConfigurationStatus],
    PropertyConfigurationStatusPLTable.Value,
    [OpportunityProduct].[Quantity],
    [OpportunityProduct].[SequenceNumber],
    [OpportunityProduct].[Tax],
    [OpportunityProduct].[Tax_Base],
    [OpportunityProduct].[TimeZoneRuleVersionNumber],
    [OpportunityProduct].[TransactionCurrencyId],
    --[OpportunityProduct].[TransactionCurrencyIdDsc]
    0,
    [OpportunityProduct].[TransactionCurrencyIdName],
    [OpportunityProduct].[UoMId],
    --[OpportunityProduct].[UoMIdDsc]
    0,
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
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
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
		[OpportunityProduct].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 3)
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
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 3
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunityProduct] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunityProduct] TO [CRMReaderRole]
    AS [dbo];

