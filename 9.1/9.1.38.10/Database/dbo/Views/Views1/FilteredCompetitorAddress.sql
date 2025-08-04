

--
-- report view for competitoraddress
--
create view dbo.[FilteredCompetitorAddress] 
(
    [addressnumber],
    [addresstypecode],
    [addresstypecodename],
    [city],
    [competitoraddressid],
    [composite],
    [country],
    [county],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [fax],
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
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [parentid],
    [parentidname],
    [parentidyominame],
    [postalcode],
    [postofficebox],
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
    [CompetitorAddress].[AddressNumber],
    [CompetitorAddress].[AddressTypeCode],
    AddressTypeCodePLTable.Value,
    [CompetitorAddress].[City],
    [CompetitorAddress].[CompetitorAddressId],
    [CompetitorAddress].[Composite],
    [CompetitorAddress].[Country],
    [CompetitorAddress].[County],
    [CompetitorAddress].[CreatedBy],
    [CompetitorAddress].[CreatedByName],
    [CompetitorAddress].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CompetitorAddress].[CreatedOn],
			us.TimeZoneCode),
        [CompetitorAddress].[CreatedOn],
    [CompetitorAddress].[CreatedOnBehalfBy],
    [CompetitorAddress].[CreatedOnBehalfByName],
    [CompetitorAddress].[CreatedOnBehalfByYomiName],
    [CompetitorAddress].[Fax],
    [CompetitorAddress].[ImportSequenceNumber],
    [CompetitorAddress].[Latitude],
    [CompetitorAddress].[Line1],
    [CompetitorAddress].[Line2],
    [CompetitorAddress].[Line3],
    [CompetitorAddress].[Longitude],
    [CompetitorAddress].[ModifiedBy],
    [CompetitorAddress].[ModifiedByName],
    [CompetitorAddress].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CompetitorAddress].[ModifiedOn],
			us.TimeZoneCode),
        [CompetitorAddress].[ModifiedOn],
    [CompetitorAddress].[ModifiedOnBehalfBy],
    [CompetitorAddress].[ModifiedOnBehalfByName],
    [CompetitorAddress].[ModifiedOnBehalfByYomiName],
    [CompetitorAddress].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CompetitorAddress].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CompetitorAddress].[OverriddenCreatedOn],
    [CompetitorAddress].[ParentId],
    [CompetitorAddress].[ParentIdName],
    [CompetitorAddress].[ParentIdYomiName],
    [CompetitorAddress].[PostalCode],
    [CompetitorAddress].[PostOfficeBox],
    [CompetitorAddress].[ShippingMethodCode],
    ShippingMethodCodePLTable.Value,
    [CompetitorAddress].[StateOrProvince],
    [CompetitorAddress].[Telephone1],
    [CompetitorAddress].[Telephone2],
    [CompetitorAddress].[Telephone3],
    [CompetitorAddress].[TimeZoneRuleVersionNumber],
    [CompetitorAddress].[UPSZone],
    [CompetitorAddress].[UTCConversionTimeZoneCode],
    [CompetitorAddress].[UTCOffset],
    [CompetitorAddress].[VersionNumber]
from CompetitorAddress
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AddressTypeCodePLTable] on 
		([AddressTypeCodePLTable].AttributeName = 'addresstypecode'
		and [AddressTypeCodePLTable].ObjectTypeCode = 1004
		and [AddressTypeCodePLTable].AttributeValue = [CompetitorAddress].[AddressTypeCode]
		and [AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShippingMethodCodePLTable] on 
		([ShippingMethodCodePLTable].AttributeName = 'shippingmethodcode'
		and [ShippingMethodCodePLTable].ObjectTypeCode = 1004
		and [ShippingMethodCodePLTable].AttributeValue = [CompetitorAddress].[ShippingMethodCode]
		and [ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(123) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [CompetitorAddress].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorAddress] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorAddress] TO [CRMReaderRole]
    AS [dbo];

