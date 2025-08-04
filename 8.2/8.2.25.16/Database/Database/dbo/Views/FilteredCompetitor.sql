

--
-- report view for competitor
--
create view dbo.[FilteredCompetitor] (
    [address1_addressid],
    [address1_addresstypecode],
    [address1_addresstypecodename],
    [address1_city],
    [address1_composite],
    [address1_country],
    [address1_county],
    [address1_fax],
    [address1_latitude],
    [address1_line1],
    [address1_line2],
    [address1_line3],
    [address1_longitude],
    [address1_name],
    [address1_postalcode],
    [address1_postofficebox],
    [address1_shippingmethodcode],
    [address1_shippingmethodcodename],
    [address1_stateorprovince],
    [address1_telephone1],
    [address1_telephone2],
    [address1_telephone3],
    [address1_upszone],
    [address1_utcoffset],
    [address2_addressid],
    [address2_addresstypecode],
    [address2_addresstypecodename],
    [address2_city],
    [address2_composite],
    [address2_country],
    [address2_county],
    [address2_fax],
    [address2_latitude],
    [address2_line1],
    [address2_line2],
    [address2_line3],
    [address2_longitude],
    [address2_name],
    [address2_postalcode],
    [address2_postofficebox],
    [address2_shippingmethodcode],
    [address2_shippingmethodcodename],
    [address2_stateorprovince],
    [address2_telephone1],
    [address2_telephone2],
    [address2_telephone3],
    [address2_upszone],
    [address2_utcoffset],
    [competitorid],
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
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [importsequencenumber],
    [keyproduct],
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
    [name],
    [opportunities],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overview],
    [processid],
    [referenceinfourl],
    [reportedrevenue],
    [reportedrevenue_base],
    [reportingquarter],
    [reportingyear],
    [stageid],
    [stockexchange],
    [strengths],
    [threats],
    [tickersymbol],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber],
    [weaknesses],
    [websiteurl],
    [winpercentage],
    [yominame],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [Competitor].[Address1_AddressId],
    [Competitor].[Address1_AddressTypeCode],
    Address1_AddressTypeCodePLTable.Value,
    [Competitor].[Address1_City],
    [Competitor].[Address1_Composite],
    [Competitor].[Address1_Country],
    [Competitor].[Address1_County],
    [Competitor].[Address1_Fax],
    [Competitor].[Address1_Latitude],
    [Competitor].[Address1_Line1],
    [Competitor].[Address1_Line2],
    [Competitor].[Address1_Line3],
    [Competitor].[Address1_Longitude],
    [Competitor].[Address1_Name],
    [Competitor].[Address1_PostalCode],
    [Competitor].[Address1_PostOfficeBox],
    [Competitor].[Address1_ShippingMethodCode],
    Address1_ShippingMethodCodePLTable.Value,
    [Competitor].[Address1_StateOrProvince],
    [Competitor].[Address1_Telephone1],
    [Competitor].[Address1_Telephone2],
    [Competitor].[Address1_Telephone3],
    [Competitor].[Address1_UPSZone],
    [Competitor].[Address1_UTCOffset],
    [Competitor].[Address2_AddressId],
    [Competitor].[Address2_AddressTypeCode],
    Address2_AddressTypeCodePLTable.Value,
    [Competitor].[Address2_City],
    [Competitor].[Address2_Composite],
    [Competitor].[Address2_Country],
    [Competitor].[Address2_County],
    [Competitor].[Address2_Fax],
    [Competitor].[Address2_Latitude],
    [Competitor].[Address2_Line1],
    [Competitor].[Address2_Line2],
    [Competitor].[Address2_Line3],
    [Competitor].[Address2_Longitude],
    [Competitor].[Address2_Name],
    [Competitor].[Address2_PostalCode],
    [Competitor].[Address2_PostOfficeBox],
    [Competitor].[Address2_ShippingMethodCode],
    Address2_ShippingMethodCodePLTable.Value,
    [Competitor].[Address2_StateOrProvince],
    [Competitor].[Address2_Telephone1],
    [Competitor].[Address2_Telephone2],
    [Competitor].[Address2_Telephone3],
    [Competitor].[Address2_UPSZone],
    [Competitor].[Address2_UTCOffset],
    [Competitor].[CompetitorId],
    [Competitor].[CreatedBy],
    --[Competitor].[CreatedByDsc]
    0,
    [Competitor].[CreatedByName],
    [Competitor].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Competitor].[CreatedOn],
			us.TimeZoneCode),
        [Competitor].[CreatedOn],
    [Competitor].[CreatedOnBehalfBy],
    --[Competitor].[CreatedOnBehalfByDsc]
    0,
    [Competitor].[CreatedOnBehalfByName],
    [Competitor].[CreatedOnBehalfByYomiName],
    cast([Competitor].[EntityImage] as varbinary(max)),
    [Competitor].[EntityImageId],
    [Competitor].[EntityImage_Timestamp],
    [Competitor].[EntityImage_URL],
    [Competitor].[ExchangeRate],
    [Competitor].[ImportSequenceNumber],
    [Competitor].[KeyProduct],
    [Competitor].[ModifiedBy],
    --[Competitor].[ModifiedByDsc]
    0,
    [Competitor].[ModifiedByName],
    [Competitor].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Competitor].[ModifiedOn],
			us.TimeZoneCode),
        [Competitor].[ModifiedOn],
    [Competitor].[ModifiedOnBehalfBy],
    --[Competitor].[ModifiedOnBehalfByDsc]
    0,
    [Competitor].[ModifiedOnBehalfByName],
    [Competitor].[ModifiedOnBehalfByYomiName],
    [Competitor].[Name],
    [Competitor].[Opportunities],
    [Competitor].[OrganizationId],
    --[Competitor].[OrganizationIdDsc]
    0,
    [Competitor].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Competitor].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Competitor].[OverriddenCreatedOn],
    [Competitor].[Overview],
    [Competitor].[ProcessId],
    [Competitor].[ReferenceInfoUrl],
    [Competitor].[ReportedRevenue],
    [Competitor].[ReportedRevenue_Base],
    [Competitor].[ReportingQuarter],
    [Competitor].[ReportingYear],
    [Competitor].[StageId],
    [Competitor].[StockExchange],
    [Competitor].[Strengths],
    [Competitor].[Threats],
    [Competitor].[TickerSymbol],
    [Competitor].[TimeZoneRuleVersionNumber],
    [Competitor].[TransactionCurrencyId],
    --[Competitor].[TransactionCurrencyIdDsc]
    0,
    [Competitor].[TransactionCurrencyIdName],
    [Competitor].[TraversedPath],
    [Competitor].[UTCConversionTimeZoneCode],
    [Competitor].[VersionNumber],
    [Competitor].[Weaknesses],
    [Competitor].[WebSiteUrl],
    [Competitor].[WinPercentage],
    [Competitor].[YomiName],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from Competitor
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [Competitor].TransactionCurrencyId
    left outer join StringMap [Address1_AddressTypeCodePLTable] on 
		([Address1_AddressTypeCodePLTable].AttributeName = 'address1_addresstypecode'
		and [Address1_AddressTypeCodePLTable].ObjectTypeCode = 123
		and [Address1_AddressTypeCodePLTable].AttributeValue = [Competitor].[Address1_AddressTypeCode]
		and [Address1_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address1_ShippingMethodCodePLTable] on 
		([Address1_ShippingMethodCodePLTable].AttributeName = 'address1_shippingmethodcode'
		and [Address1_ShippingMethodCodePLTable].ObjectTypeCode = 123
		and [Address1_ShippingMethodCodePLTable].AttributeValue = [Competitor].[Address1_ShippingMethodCode]
		and [Address1_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_AddressTypeCodePLTable] on 
		([Address2_AddressTypeCodePLTable].AttributeName = 'address2_addresstypecode'
		and [Address2_AddressTypeCodePLTable].ObjectTypeCode = 123
		and [Address2_AddressTypeCodePLTable].AttributeValue = [Competitor].[Address2_AddressTypeCode]
		and [Address2_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_ShippingMethodCodePLTable] on 
		([Address2_ShippingMethodCodePLTable].AttributeName = 'address2_shippingmethodcode'
		and [Address2_ShippingMethodCodePLTable].ObjectTypeCode = 123
		and [Address2_ShippingMethodCodePLTable].AttributeValue = [Competitor].[Address2_ShippingMethodCode]
		and [Address2_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(123) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Competitor].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitor] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitor] TO [CRMReaderRole]
    AS [dbo];

