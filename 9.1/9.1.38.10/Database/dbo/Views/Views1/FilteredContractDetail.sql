

--
-- report view for contractdetail
--
create view dbo.[FilteredContractDetail] 
(
    [accountid],
    [activeon],
    [activeonutc],
    [allotmentsoverage],
    [allotmentsremaining],
    [allotmentsused],
    [contactid],
    [contractdetailid],
    [contractid],
    [contractidname],
    [contractstatecode],
    [contractstatecodename],
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
    [discount],
    [discountpercentage],
    [discount_base],
    [effectivitycalendar],
    [exchangerate],
    [expireson],
    [expiresonutc],
    [importsequencenumber],
    [initialquantity],
    [lineitemorder],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [net],
    [net_base],
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
    [price],
    [price_base],
    [productid],
    [productidname],
    [productserialnumber],
    [rate],
    [rate_base],
    [serviceaddress],
    [serviceaddressname],
    [servicecontractunitscode],
    [servicecontractunitscodename],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [title],
    [totalallotments],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [uomid],
    [uomidname],
    [uomscheduleid],
    [uomscheduleidname],
    [utcconversiontimezonecode],
    [versionnumber],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [ContractDetail].[AccountId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractDetail].[ActiveOn],
			us.TimeZoneCode),
        [ContractDetail].[ActiveOn],
    [ContractDetail].[AllotmentsOverage],
    [ContractDetail].[AllotmentsRemaining],
    [ContractDetail].[AllotmentsUsed],
    [ContractDetail].[ContactId],
    [ContractDetail].[ContractDetailId],
    [ContractDetail].[ContractId],
    [ContractDetail].[ContractIdName],
    [ContractDetail].[ContractStateCode],
    ContractStateCodePLTable.Value,
    [ContractDetail].[CreatedBy],
    [ContractDetail].[CreatedByName],
    [ContractDetail].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractDetail].[CreatedOn],
			us.TimeZoneCode),
        [ContractDetail].[CreatedOn],
    [ContractDetail].[CreatedOnBehalfBy],
    [ContractDetail].[CreatedOnBehalfByName],
    [ContractDetail].[CreatedOnBehalfByYomiName],
    [ContractDetail].[CustomerId],
    [ContractDetail].[CustomerIdName],
    [ContractDetail].[CustomerIdType],
    [ContractDetail].[CustomerIdYomiName],
    [ContractDetail].[Discount],
    [ContractDetail].[DiscountPercentage],
    [ContractDetail].[Discount_Base],
    [ContractDetail].[EffectivityCalendar],
    [ContractDetail].[ExchangeRate],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractDetail].[ExpiresOn],
			us.TimeZoneCode),
        [ContractDetail].[ExpiresOn],
    [ContractDetail].[ImportSequenceNumber],
    [ContractDetail].[InitialQuantity],
    [ContractDetail].[LineItemOrder],
    [ContractDetail].[ModifiedBy],
    [ContractDetail].[ModifiedByName],
    [ContractDetail].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractDetail].[ModifiedOn],
			us.TimeZoneCode),
        [ContractDetail].[ModifiedOn],
    [ContractDetail].[ModifiedOnBehalfBy],
    [ContractDetail].[ModifiedOnBehalfByName],
    [ContractDetail].[ModifiedOnBehalfByYomiName],
    [ContractDetail].[Net],
    [ContractDetail].[Net_Base],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractDetail].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ContractDetail].[OverriddenCreatedOn],
    [ContractDetail].[OwnerId],
    --[ContractDetail].[OwnerIdDsc]
    0,
    [ContractDetail].[OwnerIdName],
    [ContractDetail].[OwnerIdType],
    [ContractDetail].[OwnerIdYomiName],
    [ContractDetail].[OwningBusinessUnit],
    [ContractDetail].[OwningTeam],
    [ContractDetail].[OwningUser],
    [ContractDetail].[Price],
    [ContractDetail].[Price_Base],
    [ContractDetail].[ProductId],
    [ContractDetail].[ProductIdName],
    [ContractDetail].[ProductSerialNumber],
    [ContractDetail].[Rate],
    [ContractDetail].[Rate_Base],
    [ContractDetail].[ServiceAddress],
    [ContractDetail].[ServiceAddressName],
    [ContractDetail].[ServiceContractUnitsCode],
    ServiceContractUnitsCodePLTable.Value,
    [ContractDetail].[StateCode],
    StateCodePLTable.Value,
    [ContractDetail].[StatusCode],
    StatusCodePLTable.Value,
    [ContractDetail].[TimeZoneRuleVersionNumber],
    [ContractDetail].[Title],
    [ContractDetail].[TotalAllotments],
    [ContractDetail].[TransactionCurrencyId],
    [ContractDetail].[TransactionCurrencyIdName],
    [ContractDetail].[UoMId],
    [ContractDetail].[UoMIdName],
    [ContractDetail].[UoMScheduleId],
    [ContractDetail].[UoMScheduleIdName],
    [ContractDetail].[UTCConversionTimeZoneCode],
    [ContractDetail].[VersionNumber],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from ContractDetail
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [ContractDetail].TransactionCurrencyId
    left outer join StringMap [ContractStateCodePLTable] on 
		([ContractStateCodePLTable].AttributeName = 'contractstatecode'
		and [ContractStateCodePLTable].ObjectTypeCode = 1011
		and [ContractStateCodePLTable].AttributeValue = [ContractDetail].[ContractStateCode]
		and [ContractStateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ServiceContractUnitsCodePLTable] on 
		([ServiceContractUnitsCodePLTable].AttributeName = 'servicecontractunitscode'
		and [ServiceContractUnitsCodePLTable].ObjectTypeCode = 1011
		and [ServiceContractUnitsCodePLTable].AttributeValue = [ContractDetail].[ServiceContractUnitsCode]
		and [ServiceContractUnitsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1011
		and [StateCodePLTable].AttributeValue = [ContractDetail].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1011
		and [StatusCodePLTable].AttributeValue = [ContractDetail].[StatusCode]
		and [StatusCodePLTable].LangId = 
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
	[ContractDetail].OwnerId in 
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
		[ContractDetail].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 1010)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ContractDetail].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ContractDetail].[ContractId] in 
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
    ON OBJECT::[dbo].[FilteredContractDetail] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContractDetail] TO [CRMReaderRole]
    AS [dbo];

