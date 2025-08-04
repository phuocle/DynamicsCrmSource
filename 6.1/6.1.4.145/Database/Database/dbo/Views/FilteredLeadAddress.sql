

--
-- report view for leadaddress
--
create view dbo.[FilteredLeadAddress] (
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
    [exchangerate],
    [fax],
    [latitude],
    [leadaddressid],
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
    [parentid],
    [parentiddsc],
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
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [upszone],
    [utcoffset],
    [versionnumber]
) with view_metadata as
select
    [LeadAddress].[AddressNumber],
    [LeadAddress].[AddressTypeCode],
    AddressTypeCodePLTable.Value,
    [LeadAddress].[City],
    [LeadAddress].[Composite],
    [LeadAddress].[Country],
    [LeadAddress].[County],
    [LeadAddress].[CreatedBy],
    --[LeadAddress].[CreatedByDsc]
    0,
    [LeadAddress].[CreatedByName],
    [LeadAddress].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadAddress].[CreatedOn],
			us.TimeZoneCode),
        [LeadAddress].[CreatedOn],
    [LeadAddress].[CreatedOnBehalfBy],
    --[LeadAddress].[CreatedOnBehalfByDsc]
    0,
    [LeadAddress].[CreatedOnBehalfByName],
    [LeadAddress].[CreatedOnBehalfByYomiName],
    [LeadAddress].[ExchangeRate],
    [LeadAddress].[Fax],
    [LeadAddress].[Latitude],
    [LeadAddress].[LeadAddressId],
    [LeadAddress].[Line1],
    [LeadAddress].[Line2],
    [LeadAddress].[Line3],
    [LeadAddress].[Longitude],
    [LeadAddress].[ModifiedBy],
    --[LeadAddress].[ModifiedByDsc]
    0,
    [LeadAddress].[ModifiedByName],
    [LeadAddress].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadAddress].[ModifiedOn],
			us.TimeZoneCode),
        [LeadAddress].[ModifiedOn],
    [LeadAddress].[ModifiedOnBehalfBy],
    --[LeadAddress].[ModifiedOnBehalfByDsc]
    0,
    [LeadAddress].[ModifiedOnBehalfByName],
    [LeadAddress].[ModifiedOnBehalfByYomiName],
    [LeadAddress].[Name],
    [LeadAddress].[ParentId],
    --[LeadAddress].[ParentIdDsc]
    0,
    [LeadAddress].[ParentIdName],
    [LeadAddress].[ParentIdYomiName],
    [LeadAddress].[PostalCode],
    [LeadAddress].[PostOfficeBox],
    [LeadAddress].[ShippingMethodCode],
    ShippingMethodCodePLTable.Value,
    [LeadAddress].[StateOrProvince],
    [LeadAddress].[Telephone1],
    [LeadAddress].[Telephone2],
    [LeadAddress].[Telephone3],
    [LeadAddress].[TransactionCurrencyId],
    [LeadAddress].[TransactionCurrencyIdName],
    [LeadAddress].[UPSZone],
    [LeadAddress].[UTCOffset],
    [LeadAddress].[VersionNumber]
from LeadAddress
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AddressTypeCodePLTable] on 
		([AddressTypeCodePLTable].AttributeName = 'addresstypecode'
		and [AddressTypeCodePLTable].ObjectTypeCode = 1017
		and [AddressTypeCodePLTable].AttributeValue = [LeadAddress].[AddressTypeCode]
		and [AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShippingMethodCodePLTable] on 
		([ShippingMethodCodePLTable].AttributeName = 'shippingmethodcode'
		and [ShippingMethodCodePLTable].ObjectTypeCode = 1017
		and [ShippingMethodCodePLTable].AttributeValue = [LeadAddress].[ShippingMethodCode]
		and [ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4) pdm1
where
(
	-- privilege check
	(pdm1.PrivilegeDepthMask is not null) and
	(
	
	-- Owner check
	--
	[LeadAddress].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode in (4)
	)	

		
	-- role based access
	or 
	
exists
(
	select 1 where
	(
		-- deep/local security
		(((pdm1.PrivilegeDepthMask & 0x4) != 0) or ((pdm1.PrivilegeDepthMask & 0x2) != 0))  and
		[LeadAddress].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4)
	) 
	or
	(
		-- global security
		((pdm1.PrivilegeDepthMask & 0x8) != 0 ) and 
		[LeadAddress].[OwningBusinessUnit] is not null 
	) 
)
	
	-- object shared to the user 
	or 
	[LeadAddress].[ParentId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and POA.ObjectTypeCode =
				( case
    when pdm1.PrivilegeDepthMask is not null then 4
 end) and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadAddress] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadAddress] TO [CRMReaderRole]
    AS [dbo];

