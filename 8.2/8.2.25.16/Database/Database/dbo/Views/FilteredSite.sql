

--
-- report view for site
--
create view dbo.[FilteredSite] (
    [address1_addressid],
    [address1_addresstypecode],
    [address1_addresstypecodename],
    [address1_city],
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
    [emailaddress],
    [importsequencenumber],
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
    [organizationid],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [siteid],
    [timezonecode],
    [versionnumber]
) with view_metadata as
select
    [Site].[Address1_AddressId],
    [Site].[Address1_AddressTypeCode],
    Address1_AddressTypeCodePLTable.Value,
    [Site].[Address1_City],
    [Site].[Address1_Country],
    [Site].[Address1_County],
    [Site].[Address1_Fax],
    [Site].[Address1_Latitude],
    [Site].[Address1_Line1],
    [Site].[Address1_Line2],
    [Site].[Address1_Line3],
    [Site].[Address1_Longitude],
    [Site].[Address1_Name],
    [Site].[Address1_PostalCode],
    [Site].[Address1_PostOfficeBox],
    [Site].[Address1_ShippingMethodCode],
    Address1_ShippingMethodCodePLTable.Value,
    [Site].[Address1_StateOrProvince],
    [Site].[Address1_Telephone1],
    [Site].[Address1_Telephone2],
    [Site].[Address1_Telephone3],
    [Site].[Address1_UPSZone],
    [Site].[Address1_UTCOffset],
    [Site].[Address2_AddressId],
    [Site].[Address2_AddressTypeCode],
    Address2_AddressTypeCodePLTable.Value,
    [Site].[Address2_City],
    [Site].[Address2_Country],
    [Site].[Address2_County],
    [Site].[Address2_Fax],
    [Site].[Address2_Latitude],
    [Site].[Address2_Line1],
    [Site].[Address2_Line2],
    [Site].[Address2_Line3],
    [Site].[Address2_Longitude],
    [Site].[Address2_Name],
    [Site].[Address2_PostalCode],
    [Site].[Address2_PostOfficeBox],
    [Site].[Address2_ShippingMethodCode],
    Address2_ShippingMethodCodePLTable.Value,
    [Site].[Address2_StateOrProvince],
    [Site].[Address2_Telephone1],
    [Site].[Address2_Telephone2],
    [Site].[Address2_Telephone3],
    [Site].[Address2_UPSZone],
    [Site].[Address2_UTCOffset],
    [Site].[CreatedBy],
    --[Site].[CreatedByDsc]
    0,
    [Site].[CreatedByName],
    [Site].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Site].[CreatedOn],
			us.TimeZoneCode),
        [Site].[CreatedOn],
    [Site].[CreatedOnBehalfBy],
    --[Site].[CreatedOnBehalfByDsc]
    0,
    [Site].[CreatedOnBehalfByName],
    [Site].[CreatedOnBehalfByYomiName],
    [Site].[EMailAddress],
    [Site].[ImportSequenceNumber],
    [Site].[ModifiedBy],
    --[Site].[ModifiedByDsc]
    0,
    [Site].[ModifiedByName],
    [Site].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Site].[ModifiedOn],
			us.TimeZoneCode),
        [Site].[ModifiedOn],
    [Site].[ModifiedOnBehalfBy],
    --[Site].[ModifiedOnBehalfByDsc]
    0,
    [Site].[ModifiedOnBehalfByName],
    [Site].[ModifiedOnBehalfByYomiName],
    [Site].[Name],
    [Site].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Site].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Site].[OverriddenCreatedOn],
    [Site].[SiteId],
    [Site].[TimeZoneCode],
    [Site].[VersionNumber]
from Site
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [Address1_AddressTypeCodePLTable] on 
		([Address1_AddressTypeCodePLTable].AttributeName = 'address1_addresstypecode'
		and [Address1_AddressTypeCodePLTable].ObjectTypeCode = 4009
		and [Address1_AddressTypeCodePLTable].AttributeValue = [Site].[Address1_AddressTypeCode]
		and [Address1_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address1_ShippingMethodCodePLTable] on 
		([Address1_ShippingMethodCodePLTable].AttributeName = 'address1_shippingmethodcode'
		and [Address1_ShippingMethodCodePLTable].ObjectTypeCode = 4009
		and [Address1_ShippingMethodCodePLTable].AttributeValue = [Site].[Address1_ShippingMethodCode]
		and [Address1_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_AddressTypeCodePLTable] on 
		([Address2_AddressTypeCodePLTable].AttributeName = 'address2_addresstypecode'
		and [Address2_AddressTypeCodePLTable].ObjectTypeCode = 4009
		and [Address2_AddressTypeCodePLTable].AttributeValue = [Site].[Address2_AddressTypeCode]
		and [Address2_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_ShippingMethodCodePLTable] on 
		([Address2_ShippingMethodCodePLTable].AttributeName = 'address2_shippingmethodcode'
		and [Address2_ShippingMethodCodePLTable].ObjectTypeCode = 4009
		and [Address2_ShippingMethodCodePLTable].AttributeValue = [Site].[Address2_ShippingMethodCode]
		and [Address2_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4009) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Site].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSite] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSite] TO [CRMReaderRole]
    AS [dbo];

