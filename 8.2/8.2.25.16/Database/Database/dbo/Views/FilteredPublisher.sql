

--
-- report view for publisher
--
create view dbo.[FilteredPublisher] (
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
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationoptionvalueprefix],
    [customizationprefix],
    [description],
    [emailaddress],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [friendlyname],
    [isreadonly],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [organizationidname],
    [pinpointpublisherdefaultlocale],
    [pinpointpublisherid],
    [publisherid],
    [supportingwebsiteurl],
    [uniquename],
    [versionnumber]
) with view_metadata as
select
    [Publisher].[Address1_AddressId],
    [Publisher].[Address1_AddressTypeCode],
    Address1_AddressTypeCodePLTable.Value,
    [Publisher].[Address1_City],
    [Publisher].[Address1_Country],
    [Publisher].[Address1_County],
    [Publisher].[Address1_Fax],
    [Publisher].[Address1_Latitude],
    [Publisher].[Address1_Line1],
    [Publisher].[Address1_Line2],
    [Publisher].[Address1_Line3],
    [Publisher].[Address1_Longitude],
    [Publisher].[Address1_Name],
    [Publisher].[Address1_PostalCode],
    [Publisher].[Address1_PostOfficeBox],
    [Publisher].[Address1_ShippingMethodCode],
    Address1_ShippingMethodCodePLTable.Value,
    [Publisher].[Address1_StateOrProvince],
    [Publisher].[Address1_Telephone1],
    [Publisher].[Address1_Telephone2],
    [Publisher].[Address1_Telephone3],
    [Publisher].[Address1_UPSZone],
    [Publisher].[Address1_UTCOffset],
    [Publisher].[Address2_AddressId],
    [Publisher].[Address2_AddressTypeCode],
    Address2_AddressTypeCodePLTable.Value,
    [Publisher].[Address2_City],
    [Publisher].[Address2_Country],
    [Publisher].[Address2_County],
    [Publisher].[Address2_Fax],
    [Publisher].[Address2_Latitude],
    [Publisher].[Address2_Line1],
    [Publisher].[Address2_Line2],
    [Publisher].[Address2_Line3],
    [Publisher].[Address2_Longitude],
    [Publisher].[Address2_Name],
    [Publisher].[Address2_PostalCode],
    [Publisher].[Address2_PostOfficeBox],
    [Publisher].[Address2_ShippingMethodCode],
    Address2_ShippingMethodCodePLTable.Value,
    [Publisher].[Address2_StateOrProvince],
    [Publisher].[Address2_Telephone1],
    [Publisher].[Address2_Telephone2],
    [Publisher].[Address2_Telephone3],
    [Publisher].[Address2_UPSZone],
    [Publisher].[Address2_UTCOffset],
    [Publisher].[CreatedBy],
    [Publisher].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Publisher].[CreatedOn],
			us.TimeZoneCode),
        [Publisher].[CreatedOn],
    [Publisher].[CreatedOnBehalfBy],
    --[Publisher].[CreatedOnBehalfByDsc]
    0,
    [Publisher].[CreatedOnBehalfByName],
    [Publisher].[CreatedOnBehalfByYomiName],
    [Publisher].[CustomizationOptionValuePrefix],
    [Publisher].[CustomizationPrefix],
    coalesce(dbo.fn_GetLocalizedLabel([Publisher].[PublisherId], 'description', 12, us.UILanguageId), [Publisher].[Description]),
    [Publisher].[EMailAddress],
    cast([Publisher].[EntityImage] as varbinary(max)),
    [Publisher].[EntityImageId],
    [Publisher].[EntityImage_Timestamp],
    [Publisher].[EntityImage_URL],
    coalesce(dbo.fn_GetLocalizedLabel([Publisher].[PublisherId], 'friendlyname', 12, us.UILanguageId), [Publisher].[FriendlyName]),
    [Publisher].[IsReadonly],
    [Publisher].[ModifiedBy],
    [Publisher].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Publisher].[ModifiedOn],
			us.TimeZoneCode),
        [Publisher].[ModifiedOn],
    [Publisher].[ModifiedOnBehalfBy],
    --[Publisher].[ModifiedOnBehalfByDsc]
    0,
    [Publisher].[ModifiedOnBehalfByName],
    [Publisher].[ModifiedOnBehalfByYomiName],
    [Publisher].[OrganizationId],
    [Publisher].[OrganizationIdName],
    [Publisher].[PinpointPublisherDefaultLocale],
    [Publisher].[PinpointPublisherId],
    [Publisher].[PublisherId],
    [Publisher].[SupportingWebsiteUrl],
    [Publisher].[UniqueName],
    [Publisher].[VersionNumber]
from Publisher
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [Address1_AddressTypeCodePLTable] on 
		([Address1_AddressTypeCodePLTable].AttributeName = 'address1_addresstypecode'
		and [Address1_AddressTypeCodePLTable].ObjectTypeCode = 7101
		and [Address1_AddressTypeCodePLTable].AttributeValue = [Publisher].[Address1_AddressTypeCode]
		and [Address1_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address1_ShippingMethodCodePLTable] on 
		([Address1_ShippingMethodCodePLTable].AttributeName = 'address1_shippingmethodcode'
		and [Address1_ShippingMethodCodePLTable].ObjectTypeCode = 7101
		and [Address1_ShippingMethodCodePLTable].AttributeValue = [Publisher].[Address1_ShippingMethodCode]
		and [Address1_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_AddressTypeCodePLTable] on 
		([Address2_AddressTypeCodePLTable].AttributeName = 'address2_addresstypecode'
		and [Address2_AddressTypeCodePLTable].ObjectTypeCode = 7101
		and [Address2_AddressTypeCodePLTable].AttributeValue = [Publisher].[Address2_AddressTypeCode]
		and [Address2_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_ShippingMethodCodePLTable] on 
		([Address2_ShippingMethodCodePLTable].AttributeName = 'address2_shippingmethodcode'
		and [Address2_ShippingMethodCodePLTable].ObjectTypeCode = 7101
		and [Address2_ShippingMethodCodePLTable].AttributeValue = [Publisher].[Address2_ShippingMethodCode]
		and [Address2_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(7101) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Publisher].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPublisher] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPublisher] TO [CRMReaderRole]
    AS [dbo];

