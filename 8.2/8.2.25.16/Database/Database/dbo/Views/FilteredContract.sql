

--
-- report view for contract
--
create view dbo.[FilteredContract] (
    [accountid],
    [accountiddsc],
    [accountidname],
    [accountidyominame],
    [activeon],
    [activeonutc],
    [allotmenttypecode],
    [allotmenttypecodename],
    [billingaccountid],
    [billingaccountiddsc],
    [billingaccountidname],
    [billingaccountidyominame],
    [billingcontactid],
    [billingcontactiddsc],
    [billingcontactidname],
    [billingcontactidyominame],
    [billingcustomerid],
    [billingcustomeriddsc],
    [billingcustomeridname],
    [billingcustomeridtype],
    [billingcustomeridyominame],
    [billingendon],
    [billingendonutc],
    [billingfrequencycode],
    [billingfrequencycodename],
    [billingstarton],
    [billingstartonutc],
    [billtoaddress],
    [billtoaddressdsc],
    [billtoaddressname],
    [cancelon],
    [cancelonutc],
    [contactid],
    [contactiddsc],
    [contactidname],
    [contactidyominame],
    [contractid],
    [contractlanguage],
    [contractnumber],
    [contractservicelevelcode],
    [contractservicelevelcodename],
    [contracttemplateabbreviation],
    [contracttemplateid],
    [contracttemplateiddsc],
    [contracttemplateidname],
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
    [customerid],
    [customeriddsc],
    [customeridname],
    [customeridtype],
    [customeridyominame],
    [duration],
    [effectivitycalendar],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [expireson],
    [expiresonutc],
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
    [netprice],
    [netprice_base],
    [originatingcontract],
    [originatingcontractdsc],
    [originatingcontractname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [serviceaddress],
    [serviceaddressdsc],
    [serviceaddressname],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [title],
    [totaldiscount],
    [totaldiscount_base],
    [totalprice],
    [totalprice_base],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [usediscountaspercentage],
    [usediscountaspercentagename],
    [utcconversiontimezonecode],
    [versionnumber],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [Contract].[AccountId],
    --[Contract].[AccountIdDsc]
    0,
    [Contract].[AccountIdName],
    [Contract].[AccountIdYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[ActiveOn],
			us.TimeZoneCode),
        [Contract].[ActiveOn],
    [Contract].[AllotmentTypeCode],
    AllotmentTypeCodePLTable.Value,
    [Contract].[BillingAccountId],
    --[Contract].[BillingAccountIdDsc]
    0,
    [Contract].[BillingAccountIdName],
    [Contract].[BillingAccountIdYomiName],
    [Contract].[BillingContactId],
    --[Contract].[BillingContactIdDsc]
    0,
    [Contract].[BillingContactIdName],
    [Contract].[BillingContactIdYomiName],
    [Contract].[BillingCustomerId],
    --[Contract].[BillingCustomerIdDsc]
    0,
    [Contract].[BillingCustomerIdName],
    [Contract].[BillingCustomerIdType],
    [Contract].[BillingCustomerIdYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[BillingEndOn],
			us.TimeZoneCode),
        [Contract].[BillingEndOn],
    [Contract].[BillingFrequencyCode],
    BillingFrequencyCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[BillingStartOn],
			us.TimeZoneCode),
        [Contract].[BillingStartOn],
    [Contract].[BillToAddress],
    --[Contract].[BillToAddressDsc]
    0,
    [Contract].[BillToAddressName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[CancelOn],
			us.TimeZoneCode),
        [Contract].[CancelOn],
    [Contract].[ContactId],
    --[Contract].[ContactIdDsc]
    0,
    [Contract].[ContactIdName],
    [Contract].[ContactIdYomiName],
    [Contract].[ContractId],
    [Contract].[ContractLanguage],
    [Contract].[ContractNumber],
    [Contract].[ContractServiceLevelCode],
    ContractServiceLevelCodePLTable.Value,
    [Contract].[ContractTemplateAbbreviation],
    [Contract].[ContractTemplateId],
    --[Contract].[ContractTemplateIdDsc]
    0,
    [Contract].[ContractTemplateIdName],
    [Contract].[CreatedBy],
    --[Contract].[CreatedByDsc]
    0,
    [Contract].[CreatedByName],
    [Contract].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[CreatedOn],
			us.TimeZoneCode),
        [Contract].[CreatedOn],
    [Contract].[CreatedOnBehalfBy],
    --[Contract].[CreatedOnBehalfByDsc]
    0,
    [Contract].[CreatedOnBehalfByName],
    [Contract].[CreatedOnBehalfByYomiName],
    [Contract].[CustomerId],
    --[Contract].[CustomerIdDsc]
    0,
    [Contract].[CustomerIdName],
    [Contract].[CustomerIdType],
    [Contract].[CustomerIdYomiName],
    [Contract].[Duration],
    [Contract].[EffectivityCalendar],
    cast([Contract].[EntityImage] as varbinary(max)),
    [Contract].[EntityImageId],
    [Contract].[EntityImage_Timestamp],
    [Contract].[EntityImage_URL],
    [Contract].[ExchangeRate],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[ExpiresOn],
			us.TimeZoneCode),
        [Contract].[ExpiresOn],
    [Contract].[ImportSequenceNumber],
    [Contract].[ModifiedBy],
    --[Contract].[ModifiedByDsc]
    0,
    [Contract].[ModifiedByName],
    [Contract].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[ModifiedOn],
			us.TimeZoneCode),
        [Contract].[ModifiedOn],
    [Contract].[ModifiedOnBehalfBy],
    --[Contract].[ModifiedOnBehalfByDsc]
    0,
    [Contract].[ModifiedOnBehalfByName],
    [Contract].[ModifiedOnBehalfByYomiName],
    [Contract].[NetPrice],
    [Contract].[NetPrice_Base],
    [Contract].[OriginatingContract],
    --[Contract].[OriginatingContractDsc]
    0,
    [Contract].[OriginatingContractName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Contract].[OverriddenCreatedOn],
    [Contract].[OwnerId],
    --[Contract].[OwnerIdDsc]
    0,
    [Contract].[OwnerIdName],
    [Contract].[OwnerIdType],
    [Contract].[OwnerIdYomiName],
    [Contract].[OwningBusinessUnit],
    [Contract].[OwningTeam],
    [Contract].[OwningUser],
    [Contract].[ServiceAddress],
    --[Contract].[ServiceAddressDsc]
    0,
    [Contract].[ServiceAddressName],
    [Contract].[StateCode],
    StateCodePLTable.Value,
    [Contract].[StatusCode],
    StatusCodePLTable.Value,
    [Contract].[TimeZoneRuleVersionNumber],
    [Contract].[Title],
    [Contract].[TotalDiscount],
    [Contract].[TotalDiscount_Base],
    [Contract].[TotalPrice],
    [Contract].[TotalPrice_Base],
    [Contract].[TransactionCurrencyId],
    --[Contract].[TransactionCurrencyIdDsc]
    0,
    [Contract].[TransactionCurrencyIdName],
    [Contract].[UseDiscountAsPercentage],
    UseDiscountAsPercentagePLTable.Value,
    [Contract].[UTCConversionTimeZoneCode],
    [Contract].[VersionNumber],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from Contract
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [Contract].TransactionCurrencyId
    left outer join StringMap [AllotmentTypeCodePLTable] on 
		([AllotmentTypeCodePLTable].AttributeName = 'allotmenttypecode'
		and [AllotmentTypeCodePLTable].ObjectTypeCode = 1010
		and [AllotmentTypeCodePLTable].AttributeValue = [Contract].[AllotmentTypeCode]
		and [AllotmentTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [BillingFrequencyCodePLTable] on 
		([BillingFrequencyCodePLTable].AttributeName = 'billingfrequencycode'
		and [BillingFrequencyCodePLTable].ObjectTypeCode = 1010
		and [BillingFrequencyCodePLTable].AttributeValue = [Contract].[BillingFrequencyCode]
		and [BillingFrequencyCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ContractServiceLevelCodePLTable] on 
		([ContractServiceLevelCodePLTable].AttributeName = 'contractservicelevelcode'
		and [ContractServiceLevelCodePLTable].ObjectTypeCode = 1010
		and [ContractServiceLevelCodePLTable].AttributeValue = [Contract].[ContractServiceLevelCode]
		and [ContractServiceLevelCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1010
		and [StateCodePLTable].AttributeValue = [Contract].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1010
		and [StatusCodePLTable].AttributeValue = [Contract].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [UseDiscountAsPercentagePLTable] on 
		([UseDiscountAsPercentagePLTable].AttributeName = 'usediscountaspercentage'
		and [UseDiscountAsPercentagePLTable].ObjectTypeCode = 1010
		and [UseDiscountAsPercentagePLTable].AttributeValue = [Contract].[UseDiscountAsPercentage]
		and [UseDiscountAsPercentagePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1010) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Contract].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1010
		)
		
	-- role based access
	or 
	
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[Contract].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1010)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Contract].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Contract].[ContractId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1010
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContract] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContract] TO [CRMReaderRole]
    AS [dbo];

