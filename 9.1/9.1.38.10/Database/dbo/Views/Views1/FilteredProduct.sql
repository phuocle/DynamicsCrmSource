

--
-- report view for product
--
create view dbo.[FilteredProduct] 
(
    [createdby],
    [createdbyexternalparty],
    [createdbyexternalpartyname],
    [createdbyexternalpartyyominame],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [currentcost],
    [currentcost_base],
    [defaultuomid],
    [defaultuomidname],
    [defaultuomscheduleid],
    [defaultuomscheduleidname],
    [description],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [hierarchypath],
    [importsequencenumber],
    [iskit],
    [iskitname],
    [isreparented],
    [isreparentedname],
    [isstockitem],
    [isstockitemname],
    [modifiedby],
    [modifiedbyexternalparty],
    [modifiedbyexternalpartyname],
    [modifiedbyexternalpartyyominame],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [parentproductid],
    [parentproductidname],
    [price],
    [pricelevelid],
    [pricelevelidname],
    [price_base],
    [processid],
    [productid],
    [productnumber],
    [productstructure],
    [productstructurename],
    [producttypecode],
    [producttypecodename],
    [producturl],
    [quantitydecimal],
    [quantityonhand],
    [size],
    [stageid],
    [standardcost],
    [standardcost_base],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [stockvolume],
    [stockweight],
    [subjectid],
    [subjectidname],
    [suppliername],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [validfromdate],
    [validfromdateutc],
    [validtodate],
    [validtodateutc],
    [vendorid],
    [vendorname],
    [vendorpartnumber],
    [versionnumber],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [Product].[CreatedBy],
    [Product].[CreatedByExternalParty],
    [Product].[CreatedByExternalPartyName],
    [Product].[CreatedByExternalPartyYomiName],
    [Product].[CreatedByName],
    [Product].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Product].[CreatedOn],
			us.TimeZoneCode),
        [Product].[CreatedOn],
    [Product].[CreatedOnBehalfBy],
    [Product].[CreatedOnBehalfByName],
    [Product].[CreatedOnBehalfByYomiName],
    [Product].[CurrentCost],
    [Product].[CurrentCost_Base],
    [Product].[DefaultUoMId],
    [Product].[DefaultUoMIdName],
    [Product].[DefaultUoMScheduleId],
    [Product].[DefaultUoMScheduleIdName],
    [Product].[Description],
    cast([Product].[EntityImage] as varbinary(max)),
    [Product].[EntityImageId],
    [Product].[EntityImage_Timestamp],
    [Product].[EntityImage_URL],
    [Product].[ExchangeRate],
    [Product].[HierarchyPath],
    [Product].[ImportSequenceNumber],
    [Product].[IsKit],
    IsKitPLTable.Value,
    [Product].[IsReparented],
    IsReparentedPLTable.Value,
    [Product].[IsStockItem],
    IsStockItemPLTable.Value,
    [Product].[ModifiedBy],
    [Product].[ModifiedByExternalParty],
    [Product].[ModifiedByExternalPartyName],
    [Product].[ModifiedByExternalPartyYomiName],
    [Product].[ModifiedByName],
    [Product].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Product].[ModifiedOn],
			us.TimeZoneCode),
        [Product].[ModifiedOn],
    [Product].[ModifiedOnBehalfBy],
    [Product].[ModifiedOnBehalfByName],
    [Product].[ModifiedOnBehalfByYomiName],
    coalesce(dbo.fn_GetBusinessDataLocalizedLabel([Product].[ProductId], 'name', 1024, us.UILanguageId), [Product].[Name]),
    [Product].[OrganizationId],
    [Product].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Product].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Product].[OverriddenCreatedOn],
    [Product].[ParentProductId],
    [Product].[ParentProductIdName],
    [Product].[Price],
    [Product].[PriceLevelId],
    [Product].[PriceLevelIdName],
    [Product].[Price_Base],
    [Product].[ProcessId],
    [Product].[ProductId],
    [Product].[ProductNumber],
    [Product].[ProductStructure],
    ProductStructurePLTable.Value,
    [Product].[ProductTypeCode],
    ProductTypeCodePLTable.Value,
    [Product].[ProductUrl],
    [Product].[QuantityDecimal],
    [Product].[QuantityOnHand],
    [Product].[Size],
    [Product].[StageId],
    [Product].[StandardCost],
    [Product].[StandardCost_Base],
    [Product].[StateCode],
    StateCodePLTable.Value,
    [Product].[StatusCode],
    StatusCodePLTable.Value,
    [Product].[StockVolume],
    [Product].[StockWeight],
    [Product].[SubjectId],
    [Product].[SubjectIdName],
    [Product].[SupplierName],
    [Product].[TimeZoneRuleVersionNumber],
    [Product].[TransactionCurrencyId],
    [Product].[TransactionCurrencyIdName],
    [Product].[TraversedPath],
    [Product].[UTCConversionTimeZoneCode],
    [Product].[ValidFromDate],
        [Product].[ValidFromDate],
    [Product].[ValidToDate],
        [Product].[ValidToDate],
    [Product].[VendorID],
    [Product].[VendorName],
    [Product].[VendorPartNumber],
    [Product].[VersionNumber],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from Product
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [Product].TransactionCurrencyId
    left outer join StringMap [IsKitPLTable] on 
		([IsKitPLTable].AttributeName = 'iskit'
		and [IsKitPLTable].ObjectTypeCode = 1024
		and [IsKitPLTable].AttributeValue = [Product].[IsKit]
		and [IsKitPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsReparentedPLTable] on 
		([IsReparentedPLTable].AttributeName = 'isreparented'
		and [IsReparentedPLTable].ObjectTypeCode = 1024
		and [IsReparentedPLTable].AttributeValue = [Product].[IsReparented]
		and [IsReparentedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsStockItemPLTable] on 
		([IsStockItemPLTable].AttributeName = 'isstockitem'
		and [IsStockItemPLTable].ObjectTypeCode = 1024
		and [IsStockItemPLTable].AttributeValue = [Product].[IsStockItem]
		and [IsStockItemPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ProductStructurePLTable] on 
		([ProductStructurePLTable].AttributeName = 'productstructure'
		and [ProductStructurePLTable].ObjectTypeCode = 1024
		and [ProductStructurePLTable].AttributeValue = [Product].[ProductStructure]
		and [ProductStructurePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ProductTypeCodePLTable] on 
		([ProductTypeCodePLTable].AttributeName = 'producttypecode'
		and [ProductTypeCodePLTable].ObjectTypeCode = 1024
		and [ProductTypeCodePLTable].AttributeValue = [Product].[ProductTypeCode]
		and [ProductTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1024
		and [StateCodePLTable].AttributeValue = [Product].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1024
		and [StatusCodePLTable].AttributeValue = [Product].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1024) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Product].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProduct] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProduct] TO [CRMReaderRole]
    AS [dbo];

