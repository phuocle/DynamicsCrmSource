

--
-- report view for contract
--
create view dbo.[FilteredContract] 
(
    [accountid],
    [accountidname],
    [accountidyominame],
    [activeon],
    [activeonutc],
    [allotmenttypecode],
    [allotmenttypecodename],
    [billingaccountid],
    [billingaccountidname],
    [billingaccountidyominame],
    [billingcontactid],
    [billingcontactidname],
    [billingcontactidyominame],
    [billingcustomerid],
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
    [billtoaddressname],
    [cancelon],
    [cancelonutc],
    [contactid],
    [contactidname],
    [contactidyominame],
    [contractid],
    [contractlanguage],
    [contractnumber],
    [contractservicelevelcode],
    [contractservicelevelcodename],
    [contracttemplateabbreviation],
    [contracttemplateid],
    [contracttemplateidname],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customerid],
    [customeridname],
    [customeridtype],
    [customeridyominame],
    [duration],
    [effectivitycalendar],
    [emailaddress],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [expireson],
    [expiresonutc],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [netprice],
    [netprice_base],
    [originatingcontract],
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
    [Contract].[AccountIdName],
    [Contract].[AccountIdYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[ActiveOn],
			us.TimeZoneCode),
        [Contract].[ActiveOn],
    [Contract].[AllotmentTypeCode],
    AllotmentTypeCodePLTable.Value,
    [Contract].[BillingAccountId],
    [Contract].[BillingAccountIdName],
    [Contract].[BillingAccountIdYomiName],
    [Contract].[BillingContactId],
    [Contract].[BillingContactIdName],
    [Contract].[BillingContactIdYomiName],
    [Contract].[BillingCustomerId],
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
    [Contract].[BillToAddressName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[CancelOn],
			us.TimeZoneCode),
        [Contract].[CancelOn],
    [Contract].[ContactId],
    [Contract].[ContactIdName],
    [Contract].[ContactIdYomiName],
    [Contract].[ContractId],
    [Contract].[ContractLanguage],
    [Contract].[ContractNumber],
    [Contract].[ContractServiceLevelCode],
    ContractServiceLevelCodePLTable.Value,
    [Contract].[ContractTemplateAbbreviation],
    [Contract].[ContractTemplateId],
    [Contract].[ContractTemplateIdName],
    [Contract].[CreatedBy],
    [Contract].[CreatedByName],
    [Contract].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[CreatedOn],
			us.TimeZoneCode),
        [Contract].[CreatedOn],
    [Contract].[CreatedOnBehalfBy],
    [Contract].[CreatedOnBehalfByName],
    [Contract].[CreatedOnBehalfByYomiName],
    [Contract].[CustomerId],
    [Contract].[CustomerIdName],
    [Contract].[CustomerIdType],
    [Contract].[CustomerIdYomiName],
    [Contract].[Duration],
    [Contract].[EffectivityCalendar],
    [Contract].[EmailAddress],
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
    [Contract].[ModifiedByName],
    [Contract].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Contract].[ModifiedOn],
			us.TimeZoneCode),
        [Contract].[ModifiedOn],
    [Contract].[ModifiedOnBehalfBy],
    [Contract].[ModifiedOnBehalfByName],
    [Contract].[ModifiedOnBehalfByYomiName],
    [Contract].[NetPrice],
    [Contract].[NetPrice_Base],
    [Contract].[OriginatingContract],
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
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
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
		[Contract].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 1010)
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
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1010
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContract] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContract] TO [CRMReaderRole]
    AS [dbo];

