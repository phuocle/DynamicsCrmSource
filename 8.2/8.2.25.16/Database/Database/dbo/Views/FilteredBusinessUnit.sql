

--
-- report view for businessunit
--
create view dbo.[FilteredBusinessUnit] (
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
    [businessunitid],
    [calendarid],
    [costcenter],
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
    [creditlimit],
    [description],
    [disabledreason],
    [divisionname],
    [emailaddress],
    [exchangerate],
    [fileasname],
    [ftpsiteurl],
    [importsequencenumber],
    [inheritancemask],
    [isdisabled],
    [isdisabledname],
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
    [organizationiddsc],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [parentbusinessunitid],
    [parentbusinessunitiddsc],
    [parentbusinessunitidname],
    [picture],
    [stockexchange],
    [tickersymbol],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcoffset],
    [versionnumber],
    [websiteurl],
    [workflowsuspended],
    [workflowsuspendedname]
) with view_metadata as
select
    [BusinessUnit].[Address1_AddressId],
    [BusinessUnit].[Address1_AddressTypeCode],
    Address1_AddressTypeCodePLTable.Value,
    [BusinessUnit].[Address1_City],
    [BusinessUnit].[Address1_Country],
    [BusinessUnit].[Address1_County],
    [BusinessUnit].[Address1_Fax],
    [BusinessUnit].[Address1_Latitude],
    [BusinessUnit].[Address1_Line1],
    [BusinessUnit].[Address1_Line2],
    [BusinessUnit].[Address1_Line3],
    [BusinessUnit].[Address1_Longitude],
    [BusinessUnit].[Address1_Name],
    [BusinessUnit].[Address1_PostalCode],
    [BusinessUnit].[Address1_PostOfficeBox],
    [BusinessUnit].[Address1_ShippingMethodCode],
    Address1_ShippingMethodCodePLTable.Value,
    [BusinessUnit].[Address1_StateOrProvince],
    [BusinessUnit].[Address1_Telephone1],
    [BusinessUnit].[Address1_Telephone2],
    [BusinessUnit].[Address1_Telephone3],
    [BusinessUnit].[Address1_UPSZone],
    [BusinessUnit].[Address1_UTCOffset],
    [BusinessUnit].[Address2_AddressId],
    [BusinessUnit].[Address2_AddressTypeCode],
    Address2_AddressTypeCodePLTable.Value,
    [BusinessUnit].[Address2_City],
    [BusinessUnit].[Address2_Country],
    [BusinessUnit].[Address2_County],
    [BusinessUnit].[Address2_Fax],
    [BusinessUnit].[Address2_Latitude],
    [BusinessUnit].[Address2_Line1],
    [BusinessUnit].[Address2_Line2],
    [BusinessUnit].[Address2_Line3],
    [BusinessUnit].[Address2_Longitude],
    [BusinessUnit].[Address2_Name],
    [BusinessUnit].[Address2_PostalCode],
    [BusinessUnit].[Address2_PostOfficeBox],
    [BusinessUnit].[Address2_ShippingMethodCode],
    Address2_ShippingMethodCodePLTable.Value,
    [BusinessUnit].[Address2_StateOrProvince],
    [BusinessUnit].[Address2_Telephone1],
    [BusinessUnit].[Address2_Telephone2],
    [BusinessUnit].[Address2_Telephone3],
    [BusinessUnit].[Address2_UPSZone],
    [BusinessUnit].[Address2_UTCOffset],
    [BusinessUnit].[BusinessUnitId],
    [BusinessUnit].[CalendarId],
    [BusinessUnit].[CostCenter],
    [BusinessUnit].[CreatedBy],
    --[BusinessUnit].[CreatedByDsc]
    0,
    [BusinessUnit].[CreatedByName],
    [BusinessUnit].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BusinessUnit].[CreatedOn],
			us.TimeZoneCode),
        [BusinessUnit].[CreatedOn],
    [BusinessUnit].[CreatedOnBehalfBy],
    --[BusinessUnit].[CreatedOnBehalfByDsc]
    0,
    [BusinessUnit].[CreatedOnBehalfByName],
    [BusinessUnit].[CreatedOnBehalfByYomiName],
    [BusinessUnit].[CreditLimit],
    [BusinessUnit].[Description],
    [BusinessUnit].[DisabledReason],
    [BusinessUnit].[DivisionName],
    [BusinessUnit].[EMailAddress],
    [BusinessUnit].[ExchangeRate],
    [BusinessUnit].[FileAsName],
    [BusinessUnit].[FtpSiteUrl],
    [BusinessUnit].[ImportSequenceNumber],
    [BusinessUnit].[InheritanceMask],
    [BusinessUnit].[IsDisabled],
    IsDisabledPLTable.Value,
    [BusinessUnit].[ModifiedBy],
    --[BusinessUnit].[ModifiedByDsc]
    0,
    [BusinessUnit].[ModifiedByName],
    [BusinessUnit].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BusinessUnit].[ModifiedOn],
			us.TimeZoneCode),
        [BusinessUnit].[ModifiedOn],
    [BusinessUnit].[ModifiedOnBehalfBy],
    --[BusinessUnit].[ModifiedOnBehalfByDsc]
    0,
    [BusinessUnit].[ModifiedOnBehalfByName],
    [BusinessUnit].[ModifiedOnBehalfByYomiName],
    [BusinessUnit].[Name],
    [BusinessUnit].[OrganizationId],
    --[BusinessUnit].[OrganizationIdDsc]
    0,
    [BusinessUnit].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BusinessUnit].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [BusinessUnit].[OverriddenCreatedOn],
    [BusinessUnit].[ParentBusinessUnitId],
    --[BusinessUnit].[ParentBusinessUnitIdDsc]
    0,
    [BusinessUnit].[ParentBusinessUnitIdName],
    [BusinessUnit].[Picture],
    [BusinessUnit].[StockExchange],
    [BusinessUnit].[TickerSymbol],
    [BusinessUnit].[TransactionCurrencyId],
    [BusinessUnit].[TransactionCurrencyIdName],
    [BusinessUnit].[UTCOffset],
    [BusinessUnit].[VersionNumber],
    [BusinessUnit].[WebSiteUrl],
    [BusinessUnit].[WorkflowSuspended],
    WorkflowSuspendedPLTable.Value
from BusinessUnit
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [Address1_AddressTypeCodePLTable] on 
		([Address1_AddressTypeCodePLTable].AttributeName = 'address1_addresstypecode'
		and [Address1_AddressTypeCodePLTable].ObjectTypeCode = 10
		and [Address1_AddressTypeCodePLTable].AttributeValue = [BusinessUnit].[Address1_AddressTypeCode]
		and [Address1_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address1_ShippingMethodCodePLTable] on 
		([Address1_ShippingMethodCodePLTable].AttributeName = 'address1_shippingmethodcode'
		and [Address1_ShippingMethodCodePLTable].ObjectTypeCode = 10
		and [Address1_ShippingMethodCodePLTable].AttributeValue = [BusinessUnit].[Address1_ShippingMethodCode]
		and [Address1_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_AddressTypeCodePLTable] on 
		([Address2_AddressTypeCodePLTable].AttributeName = 'address2_addresstypecode'
		and [Address2_AddressTypeCodePLTable].ObjectTypeCode = 10
		and [Address2_AddressTypeCodePLTable].AttributeValue = [BusinessUnit].[Address2_AddressTypeCode]
		and [Address2_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_ShippingMethodCodePLTable] on 
		([Address2_ShippingMethodCodePLTable].AttributeName = 'address2_shippingmethodcode'
		and [Address2_ShippingMethodCodePLTable].ObjectTypeCode = 10
		and [Address2_ShippingMethodCodePLTable].AttributeValue = [BusinessUnit].[Address2_ShippingMethodCode]
		and [Address2_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsDisabledPLTable] on 
		([IsDisabledPLTable].AttributeName = 'isdisabled'
		and [IsDisabledPLTable].ObjectTypeCode = 10
		and [IsDisabledPLTable].AttributeValue = [BusinessUnit].[IsDisabled]
		and [IsDisabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [WorkflowSuspendedPLTable] on 
		([WorkflowSuspendedPLTable].AttributeName = 'workflowsuspended'
		and [WorkflowSuspendedPLTable].ObjectTypeCode = 10
		and [WorkflowSuspendedPLTable].AttributeValue = [BusinessUnit].[WorkflowSuspended]
		and [WorkflowSuspendedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10) pdm
where
(
    
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[BusinessUnit].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 10)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[BusinessUnit].[BusinessUnitId] is not null 
	) 
)

)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBusinessUnit] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBusinessUnit] TO [CRMReaderRole]
    AS [dbo];

