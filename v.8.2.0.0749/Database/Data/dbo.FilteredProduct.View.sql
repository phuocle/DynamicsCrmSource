USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredProduct]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for product
--
create view [dbo].[FilteredProduct] (
    [createdby],
    [createdbydsc],
    [createdbyexternalparty],
    [createdbyexternalpartyname],
    [createdbyexternalpartyyominame],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [currentcost],
    [currentcost_base],
    [defaultuomid],
    [defaultuomiddsc],
    [defaultuomidname],
    [defaultuomscheduleid],
    [defaultuomscheduleiddsc],
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
    [isstockitem],
    [isstockitemname],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyexternalparty],
    [modifiedbyexternalpartyname],
    [modifiedbyexternalpartyyominame],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [parentproductid],
    [parentproductidname],
    [price],
    [pricelevelid],
    [priceleveliddsc],
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
    [subjectiddsc],
    [subjectidname],
    [suppliername],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
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
    --[Product].[CreatedByDsc]
    0,
    [Product].[CreatedByExternalParty],
    [Product].[CreatedByExternalPartyName],
    [Product].[CreatedByExternalPartyYomiName],
    [Product].[CreatedByName],
    [Product].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Product].[CreatedOn],
			us.TimeZoneCode),
        [Product].[CreatedOn],
    [Product].[CreatedOnBehalfBy],
    --[Product].[CreatedOnBehalfByDsc]
    0,
    [Product].[CreatedOnBehalfByName],
    [Product].[CreatedOnBehalfByYomiName],
    [Product].[CurrentCost],
    [Product].[CurrentCost_Base],
    [Product].[DefaultUoMId],
    --[Product].[DefaultUoMIdDsc]
    0,
    [Product].[DefaultUoMIdName],
    [Product].[DefaultUoMScheduleId],
    --[Product].[DefaultUoMScheduleIdDsc]
    0,
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
    [Product].[IsStockItem],
    IsStockItemPLTable.Value,
    [Product].[ModifiedBy],
    --[Product].[ModifiedByDsc]
    0,
    [Product].[ModifiedByExternalParty],
    [Product].[ModifiedByExternalPartyName],
    [Product].[ModifiedByExternalPartyYomiName],
    [Product].[ModifiedByName],
    [Product].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Product].[ModifiedOn],
			us.TimeZoneCode),
        [Product].[ModifiedOn],
    [Product].[ModifiedOnBehalfBy],
    --[Product].[ModifiedOnBehalfByDsc]
    0,
    [Product].[ModifiedOnBehalfByName],
    [Product].[ModifiedOnBehalfByYomiName],
    coalesce(dbo.fn_GetBusinessDataLocalizedLabel([Product].[ProductId], 'name', 1024, us.UILanguageId), [Product].[Name]),
    [Product].[OrganizationId],
    --[Product].[OrganizationIdDsc]
    0,
    [Product].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Product].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Product].[OverriddenCreatedOn],
    [Product].[ParentProductId],
    [Product].[ParentProductIdName],
    [Product].[Price],
    [Product].[PriceLevelId],
    --[Product].[PriceLevelIdDsc]
    0,
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
    --[Product].[SubjectIdDsc]
    0,
    [Product].[SubjectIdName],
    [Product].[SupplierName],
    [Product].[TimeZoneRuleVersionNumber],
    [Product].[TransactionCurrencyId],
    --[Product].[TransactionCurrencyIdDsc]
    0,
    [Product].[TransactionCurrencyIdName],
    [Product].[TraversedPath],
    [Product].[UTCConversionTimeZoneCode],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Product].[ValidFromDate],
			us.TimeZoneCode),
        [Product].[ValidFromDate],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Product].[ValidToDate],
			us.TimeZoneCode),
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
