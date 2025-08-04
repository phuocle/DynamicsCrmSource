

--
-- report view for publisheraddress
--
create view dbo.[FilteredPublisherAddress] (
    [addressnumber],
    [addresstypecode],
    [addresstypecodename],
    [city],
    [country],
    [county],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [fax],
    [freighttermscode],
    [freighttermscodename],
    [importsequencenumber],
    [latitude],
    [line1],
    [line2],
    [line3],
    [longitude],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [parentid],
    [parentidtypecode],
    [postalcode],
    [postofficebox],
    [primarycontactname],
    [publisheraddressid],
    [shippingmethodcode],
    [shippingmethodcodename],
    [stateorprovince],
    [telephone1],
    [telephone2],
    [telephone3],
    [timezoneruleversionnumber],
    [upszone],
    [utcconversiontimezonecode],
    [utcoffset],
    [versionnumber]
) with view_metadata as
select
    [PublisherAddress].[AddressNumber],
    [PublisherAddress].[AddressTypeCode],
    AddressTypeCodePLTable.Value,
    [PublisherAddress].[City],
    [PublisherAddress].[Country],
    [PublisherAddress].[County],
    [PublisherAddress].[CreatedBy],
    [PublisherAddress].[CreatedByName],
    [PublisherAddress].[CreatedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([PublisherAddress].[CreatedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
        [PublisherAddress].[CreatedOn],
    [PublisherAddress].[CreatedOnBehalfBy],
    --[PublisherAddress].[CreatedOnBehalfByDsc]
    0,
    [PublisherAddress].[CreatedOnBehalfByName],
    [PublisherAddress].[CreatedOnBehalfByYomiName],
    [PublisherAddress].[Fax],
    [PublisherAddress].[FreightTermsCode],
    FreightTermsCodePLTable.Value,
    [PublisherAddress].[ImportSequenceNumber],
    [PublisherAddress].[Latitude],
    [PublisherAddress].[Line1],
    [PublisherAddress].[Line2],
    [PublisherAddress].[Line3],
    [PublisherAddress].[Longitude],
    [PublisherAddress].[ModifiedBy],
    [PublisherAddress].[ModifiedByName],
    [PublisherAddress].[ModifiedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([PublisherAddress].[ModifiedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
        [PublisherAddress].[ModifiedOn],
    [PublisherAddress].[ModifiedOnBehalfBy],
    --[PublisherAddress].[ModifiedOnBehalfByDsc]
    0,
    [PublisherAddress].[ModifiedOnBehalfByName],
    [PublisherAddress].[ModifiedOnBehalfByYomiName],
    [PublisherAddress].[Name],
    [PublisherAddress].[ParentId],
    [PublisherAddress].[ParentIdTypeCode],
    [PublisherAddress].[PostalCode],
    [PublisherAddress].[PostOfficeBox],
    [PublisherAddress].[PrimaryContactName],
    [PublisherAddress].[PublisherAddressId],
    [PublisherAddress].[ShippingMethodCode],
    ShippingMethodCodePLTable.Value,
    [PublisherAddress].[StateOrProvince],
    [PublisherAddress].[Telephone1],
    [PublisherAddress].[Telephone2],
    [PublisherAddress].[Telephone3],
    [PublisherAddress].[TimeZoneRuleVersionNumber],
    [PublisherAddress].[UPSZone],
    [PublisherAddress].[UTCConversionTimeZoneCode],
    [PublisherAddress].[UTCOffset],
    [PublisherAddress].[VersionNumber]
from PublisherAddress
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AddressTypeCodePLTable] on 
		([AddressTypeCodePLTable].AttributeName = 'addresstypecode'
		and [AddressTypeCodePLTable].ObjectTypeCode = 7102
		and [AddressTypeCodePLTable].AttributeValue = [PublisherAddress].[AddressTypeCode]
		and [AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FreightTermsCodePLTable] on 
		([FreightTermsCodePLTable].AttributeName = 'freighttermscode'
		and [FreightTermsCodePLTable].ObjectTypeCode = 7102
		and [FreightTermsCodePLTable].AttributeValue = [PublisherAddress].[FreightTermsCode]
		and [FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShippingMethodCodePLTable] on 
		([ShippingMethodCodePLTable].AttributeName = 'shippingmethodcode'
		and [ShippingMethodCodePLTable].ObjectTypeCode = 7102
		and [ShippingMethodCodePLTable].AttributeValue = [PublisherAddress].[ShippingMethodCode]
		and [ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPublisherAddress] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPublisherAddress] TO [CRMReaderRole]
    AS [dbo];

