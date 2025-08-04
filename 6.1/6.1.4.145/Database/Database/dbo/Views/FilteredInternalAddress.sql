

--
-- report view for internaladdress
--
create view dbo.[FilteredInternalAddress] (
    [addressnumber],
    [addresstypecode],
    [addresstypecodename],
    [city],
    [composite],
    [country],
    [county],
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
    [fax],
    [internaladdressid],
    [latitude],
    [line1],
    [line2],
    [line3],
    [longitude],
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
    [objecttypecode],
    [objecttypecodename],
    [parentid],
    [postalcode],
    [postofficebox],
    [shippingmethodcode],
    [shippingmethodcodename],
    [stateorprovince],
    [telephone1],
    [telephone2],
    [telephone3],
    [upszone],
    [utcoffset],
    [versionnumber]
) with view_metadata as
select
    [InternalAddress].[AddressNumber],
    [InternalAddress].[AddressTypeCode],
    AddressTypeCodePLTable.Value,
    [InternalAddress].[City],
    [InternalAddress].[Composite],
    [InternalAddress].[Country],
    [InternalAddress].[County],
    [InternalAddress].[CreatedBy],
    --[InternalAddress].[CreatedByDsc]
    0,
    [InternalAddress].[CreatedByName],
    [InternalAddress].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InternalAddress].[CreatedOn],
			us.TimeZoneCode),
        [InternalAddress].[CreatedOn],
    [InternalAddress].[CreatedOnBehalfBy],
    --[InternalAddress].[CreatedOnBehalfByDsc]
    0,
    [InternalAddress].[CreatedOnBehalfByName],
    [InternalAddress].[CreatedOnBehalfByYomiName],
    [InternalAddress].[Fax],
    [InternalAddress].[InternalAddressId],
    [InternalAddress].[Latitude],
    [InternalAddress].[Line1],
    [InternalAddress].[Line2],
    [InternalAddress].[Line3],
    [InternalAddress].[Longitude],
    [InternalAddress].[ModifiedBy],
    --[InternalAddress].[ModifiedByDsc]
    0,
    [InternalAddress].[ModifiedByName],
    [InternalAddress].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InternalAddress].[ModifiedOn],
			us.TimeZoneCode),
        [InternalAddress].[ModifiedOn],
    [InternalAddress].[ModifiedOnBehalfBy],
    --[InternalAddress].[ModifiedOnBehalfByDsc]
    0,
    [InternalAddress].[ModifiedOnBehalfByName],
    [InternalAddress].[ModifiedOnBehalfByYomiName],
    [InternalAddress].[Name],
    [InternalAddress].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    [InternalAddress].[ParentId],
    [InternalAddress].[PostalCode],
    [InternalAddress].[PostOfficeBox],
    [InternalAddress].[ShippingMethodCode],
    ShippingMethodCodePLTable.Value,
    [InternalAddress].[StateOrProvince],
    [InternalAddress].[Telephone1],
    [InternalAddress].[Telephone2],
    [InternalAddress].[Telephone3],
    [InternalAddress].[UPSZone],
    [InternalAddress].[UTCOffset],
    [InternalAddress].[VersionNumber]
from InternalAddress
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AddressTypeCodePLTable] on 
		([AddressTypeCodePLTable].AttributeName = 'addresstypecode'
		and [AddressTypeCodePLTable].ObjectTypeCode = 1003
		and [AddressTypeCodePLTable].AttributeValue = [InternalAddress].[AddressTypeCode]
		and [AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ObjectTypeCodePLTable] on 
		([ObjectTypeCodePLTable].AttributeName = 'objecttypecode'
		and [ObjectTypeCodePLTable].ObjectTypeCode = 1003
		and [ObjectTypeCodePLTable].AttributeValue = [InternalAddress].[ObjectTypeCode]
		and [ObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShippingMethodCodePLTable] on 
		([ShippingMethodCodePLTable].AttributeName = 'shippingmethodcode'
		and [ShippingMethodCodePLTable].ObjectTypeCode = 1003
		and [ShippingMethodCodePLTable].AttributeValue = [InternalAddress].[ShippingMethodCode]
		and [ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(8) pdm1
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4009) pdm2
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10) pdm3
where
(
	-- privilege check
	(pdm1.PrivilegeDepthMask is not null or pdm2.PrivilegeDepthMask is not null or pdm3.PrivilegeDepthMask is not null) and
	(
	
	-- role based access
	
	
exists
(
	select 1 where
	(
		-- deep/local security
		(((pdm1.PrivilegeDepthMask & 0x4) != 0) or ((pdm1.PrivilegeDepthMask & 0x2) != 0)) and [InternalAddress].[ObjectTypeCode] = 8 and
		[InternalAddress].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 8)
	) 
	or
	(
		-- global security
		((pdm1.PrivilegeDepthMask & 0x8) != 0 and [InternalAddress].[ObjectTypeCode] = 8) and 
		[InternalAddress].[BusinessUnitId] is not null 
	) 
or
	(
		-- global security
		((pdm2.PrivilegeDepthMask & 0x8) != 0 and [InternalAddress].[ObjectTypeCode] = 4009) and 
		[InternalAddress].[OrganizationId] = u.[OrganizationId]
	) 
or
	(
		-- deep/local security
		(((pdm3.PrivilegeDepthMask & 0x4) != 0) or ((pdm3.PrivilegeDepthMask & 0x2) != 0)) and [InternalAddress].[ObjectTypeCode] = 10 and
		[InternalAddress].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10)
	) 
	or
	(
		-- global security
		((pdm3.PrivilegeDepthMask & 0x8) != 0 and [InternalAddress].[ObjectTypeCode] = 10) and 
		[InternalAddress].[BusinessUnitId] is not null 
	) 
)
	
	
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredInternalAddress] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredInternalAddress] TO [CRMReaderRole]
    AS [dbo];

