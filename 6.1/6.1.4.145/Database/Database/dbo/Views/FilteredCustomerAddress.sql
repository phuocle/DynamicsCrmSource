

--
-- report view for customeraddress
--
create view dbo.[FilteredCustomerAddress] (
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
    [customeraddressid],
    [exchangerate],
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
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [parentid],
    [parentidtypecode],
    [postalcode],
    [postofficebox],
    [primarycontactname],
    [shippingmethodcode],
    [shippingmethodcodename],
    [stateorprovince],
    [telephone1],
    [telephone2],
    [telephone3],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [upszone],
    [utcconversiontimezonecode],
    [utcoffset],
    [versionnumber]
) with view_metadata as
select
    [CustomerAddress].[AddressNumber],
    [CustomerAddress].[AddressTypeCode],
    AddressTypeCodePLTable.Value,
    [CustomerAddress].[City],
    [CustomerAddress].[Composite],
    [CustomerAddress].[Country],
    [CustomerAddress].[County],
    [CustomerAddress].[CreatedBy],
    --[CustomerAddress].[CreatedByDsc]
    0,
    [CustomerAddress].[CreatedByName],
    [CustomerAddress].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomerAddress].[CreatedOn],
			us.TimeZoneCode),
        [CustomerAddress].[CreatedOn],
    [CustomerAddress].[CreatedOnBehalfBy],
    --[CustomerAddress].[CreatedOnBehalfByDsc]
    0,
    [CustomerAddress].[CreatedOnBehalfByName],
    [CustomerAddress].[CreatedOnBehalfByYomiName],
    [CustomerAddress].[CustomerAddressId],
    [CustomerAddress].[ExchangeRate],
    [CustomerAddress].[Fax],
    [CustomerAddress].[FreightTermsCode],
    FreightTermsCodePLTable.Value,
    [CustomerAddress].[ImportSequenceNumber],
    [CustomerAddress].[Latitude],
    [CustomerAddress].[Line1],
    [CustomerAddress].[Line2],
    [CustomerAddress].[Line3],
    [CustomerAddress].[Longitude],
    [CustomerAddress].[ModifiedBy],
    --[CustomerAddress].[ModifiedByDsc]
    0,
    [CustomerAddress].[ModifiedByName],
    [CustomerAddress].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomerAddress].[ModifiedOn],
			us.TimeZoneCode),
        [CustomerAddress].[ModifiedOn],
    [CustomerAddress].[ModifiedOnBehalfBy],
    --[CustomerAddress].[ModifiedOnBehalfByDsc]
    0,
    [CustomerAddress].[ModifiedOnBehalfByName],
    [CustomerAddress].[ModifiedOnBehalfByYomiName],
    [CustomerAddress].[Name],
    [CustomerAddress].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomerAddress].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CustomerAddress].[OverriddenCreatedOn],
    [CustomerAddress].[OwnerId],
    [CustomerAddress].[OwnerIdType],
    [CustomerAddress].[OwningBusinessUnit],
    [CustomerAddress].[OwningUser],
    [CustomerAddress].[ParentId],
    [CustomerAddress].[ParentIdTypeCode],
    [CustomerAddress].[PostalCode],
    [CustomerAddress].[PostOfficeBox],
    [CustomerAddress].[PrimaryContactName],
    [CustomerAddress].[ShippingMethodCode],
    ShippingMethodCodePLTable.Value,
    [CustomerAddress].[StateOrProvince],
    [CustomerAddress].[Telephone1],
    [CustomerAddress].[Telephone2],
    [CustomerAddress].[Telephone3],
    [CustomerAddress].[TimeZoneRuleVersionNumber],
    [CustomerAddress].[TransactionCurrencyId],
    [CustomerAddress].[TransactionCurrencyIdName],
    [CustomerAddress].[UPSZone],
    [CustomerAddress].[UTCConversionTimeZoneCode],
    [CustomerAddress].[UTCOffset],
    [CustomerAddress].[VersionNumber]
from CustomerAddress
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AddressTypeCodePLTable] on 
		([AddressTypeCodePLTable].AttributeName = 'addresstypecode'
		and [AddressTypeCodePLTable].ObjectTypeCode = 1071
		and [AddressTypeCodePLTable].AttributeValue = [CustomerAddress].[AddressTypeCode]
		and [AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FreightTermsCodePLTable] on 
		([FreightTermsCodePLTable].AttributeName = 'freighttermscode'
		and [FreightTermsCodePLTable].ObjectTypeCode = 1071
		and [FreightTermsCodePLTable].AttributeValue = [CustomerAddress].[FreightTermsCode]
		and [FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ObjectTypeCodePLTable] on 
		([ObjectTypeCodePLTable].AttributeName = 'objecttypecode'
		and [ObjectTypeCodePLTable].ObjectTypeCode = 1071
		and [ObjectTypeCodePLTable].AttributeValue = [CustomerAddress].[ObjectTypeCode]
		and [ObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShippingMethodCodePLTable] on 
		([ShippingMethodCodePLTable].AttributeName = 'shippingmethodcode'
		and [ShippingMethodCodePLTable].ObjectTypeCode = 1071
		and [ShippingMethodCodePLTable].AttributeValue = [CustomerAddress].[ShippingMethodCode]
		and [ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1) pdm1
    cross join dbo.fn_GetMaxPrivilegeDepthMask(2) pdm2
where
(
	-- privilege check
	(pdm1.PrivilegeDepthMask is not null or pdm2.PrivilegeDepthMask is not null) and
	(
	
	-- Owner check
	--
	[CustomerAddress].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode in ( case
    when CustomerAddress.ObjectTypeCode = 1 then 1
    when CustomerAddress.ObjectTypeCode = 2 then 2 end)
	)	

		
	-- role based access
	or 
	
exists
(
	select 1 where
	(
		-- deep/local security
		(((pdm1.PrivilegeDepthMask & 0x4) != 0) or ((pdm1.PrivilegeDepthMask & 0x2) != 0)) and [CustomerAddress].[ObjectTypeCode] = 1 and
		[CustomerAddress].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 1)
	) 
	or
	(
		-- global security
		((pdm1.PrivilegeDepthMask & 0x8) != 0 and [CustomerAddress].[ObjectTypeCode] = 1) and 
		[CustomerAddress].[OwningBusinessUnit] is not null 
	) 
or
	(
		-- deep/local security
		(((pdm2.PrivilegeDepthMask & 0x4) != 0) or ((pdm2.PrivilegeDepthMask & 0x2) != 0)) and [CustomerAddress].[ObjectTypeCode] = 2 and
		[CustomerAddress].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 2)
	) 
	or
	(
		-- global security
		((pdm2.PrivilegeDepthMask & 0x8) != 0 and [CustomerAddress].[ObjectTypeCode] = 2) and 
		[CustomerAddress].[OwningBusinessUnit] is not null 
	) 
)
	
	-- object shared to the user 
	or 
	[CustomerAddress].[ParentId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and POA.ObjectTypeCode =
				( case
    when pdm1.PrivilegeDepthMask is not null and CustomerAddress.ObjectTypeCode = 1 then 1
    when pdm2.PrivilegeDepthMask is not null and CustomerAddress.ObjectTypeCode = 2 then 2
 end) and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCustomerAddress] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCustomerAddress] TO [CRMReaderRole]
    AS [dbo];

