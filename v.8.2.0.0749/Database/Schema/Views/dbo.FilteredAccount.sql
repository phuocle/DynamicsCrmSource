SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for account
--
create view [dbo].[FilteredAccount] (
    [accountcategorycode],
    [accountcategorycodename],
    [accountclassificationcode],
    [accountclassificationcodename],
    [accountid],
    [accountnumber],
    [accountratingcode],
    [accountratingcodename],
    [address1_addressid],
    [address1_addresstypecode],
    [address1_addresstypecodename],
    [address1_city],
    [address1_composite],
    [address1_country],
    [address1_county],
    [address1_fax],
    [address1_freighttermscode],
    [address1_freighttermscodename],
    [address1_latitude],
    [address1_line1],
    [address1_line2],
    [address1_line3],
    [address1_longitude],
    [address1_name],
    [address1_postalcode],
    [address1_postofficebox],
    [address1_primarycontactname],
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
    [address2_composite],
    [address2_country],
    [address2_county],
    [address2_fax],
    [address2_freighttermscode],
    [address2_freighttermscodename],
    [address2_latitude],
    [address2_line1],
    [address2_line2],
    [address2_line3],
    [address2_longitude],
    [address2_name],
    [address2_postalcode],
    [address2_postofficebox],
    [address2_primarycontactname],
    [address2_shippingmethodcode],
    [address2_shippingmethodcodename],
    [address2_stateorprovince],
    [address2_telephone1],
    [address2_telephone2],
    [address2_telephone3],
    [address2_upszone],
    [address2_utcoffset],
    [aging30],
    [aging30_base],
    [aging60],
    [aging60_base],
    [aging90],
    [aging90_base],
    [businesstypecode],
    [businesstypecodename],
    [createdby],
    [createdbydsc],
    [createdbyexternalparty],
    [createdbyexternalpartyname],
    [createdbyexternalpartyyominame],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [creditlimit],
    [creditlimit_base],
    [creditonhold],
    [creditonholdname],
    [customersizecode],
    [customersizecodename],
    [customertypecode],
    [customertypecodename],
    [defaultpricelevelid],
    [defaultpriceleveliddsc],
    [defaultpricelevelidname],
    [description],
    [donotbulkemail],
    [donotbulkemailname],
    [donotbulkpostalmail],
    [donotbulkpostalmailname],
    [donotemail],
    [donotemailname],
    [donotfax],
    [donotfaxname],
    [donotphone],
    [donotphonename],
    [donotpostalmail],
    [donotpostalmailname],
    [donotsendmarketingmaterialname],
    [donotsendmm],
    [emailaddress1],
    [emailaddress2],
    [emailaddress3],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [fax],
    [followemail],
    [followemailname],
    [ftpsiteurl],
    [importsequencenumber],
    [industrycode],
    [industrycodename],
    [isprivatename],
    [lastonholdtime],
    [lastonholdtimeutc],
    [lastusedincampaign],
    [lastusedincampaignutc],
    [marketcap],
    [marketcap_base],
    [marketingonly],
    [marketingonlyname],
    [masteraccountiddsc],
    [masteraccountidname],
    [masteraccountidyominame],
    [masterid],
    [merged],
    [mergedname],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyexternalparty],
    [modifiedbyexternalpartyname],
    [modifiedbyexternalpartyyominame],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [numberofemployees],
    [onholdtime],
    [opendeals],
    [opendeals_date],
    [opendeals_dateutc],
    [opendeals_state],
    [openrevenue],
    [openrevenue_base],
    [openrevenue_date],
    [openrevenue_dateutc],
    [openrevenue_state],
    [originatingleadid],
    [originatingleadiddsc],
    [originatingleadidname],
    [originatingleadidyominame],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [ownershipcode],
    [ownershipcodename],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [parentaccountid],
    [parentaccountiddsc],
    [parentaccountidname],
    [parentaccountidyominame],
    [participatesinworkflow],
    [participatesinworkflowname],
    [paymenttermscode],
    [paymenttermscodename],
    [preferredappointmentdaycode],
    [preferredappointmentdaycodename],
    [preferredappointmenttimecode],
    [preferredappointmenttimecodename],
    [preferredcontactmethodcode],
    [preferredcontactmethodcodename],
    [preferredequipmentid],
    [preferredequipmentiddsc],
    [preferredequipmentidname],
    [preferredserviceid],
    [preferredserviceiddsc],
    [preferredserviceidname],
    [preferredsystemuserid],
    [preferredsystemuseriddsc],
    [preferredsystemuseridname],
    [preferredsystemuseridyominame],
    [primarycontactid],
    [primarycontactiddsc],
    [primarycontactidname],
    [primarycontactidyominame],
    [primarysatoriid],
    [primarytwitterid],
    [processid],
    [revenue],
    [revenue_base],
    [sharesoutstanding],
    [shippingmethodcode],
    [shippingmethodcodename],
    [sic],
    [slaid],
    [slainvokedid],
    [slainvokedidname],
    [slaname],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [stockexchange],
    [telephone1],
    [telephone2],
    [telephone3],
    [territorycode],
    [territorycodename],
    [territoryid],
    [territoryiddsc],
    [territoryidname],
    [tickersymbol],
    [timespentbymeonemailandmeetings],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber],
    [websiteurl],
    [yominame],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [Account].[AccountCategoryCode],
    AccountCategoryCodePLTable.Value,
    [Account].[AccountClassificationCode],
    AccountClassificationCodePLTable.Value,
    [Account].[AccountId],
    [Account].[AccountNumber],
    [Account].[AccountRatingCode],
    AccountRatingCodePLTable.Value,
    [Account].[Address1_AddressId],
    [Account].[Address1_AddressTypeCode],
    Address1_AddressTypeCodePLTable.Value,
    [Account].[Address1_City],
    [Account].[Address1_Composite],
    [Account].[Address1_Country],
    [Account].[Address1_County],
    [Account].[Address1_Fax],
    [Account].[Address1_FreightTermsCode],
    Address1_FreightTermsCodePLTable.Value,
    [Account].[Address1_Latitude],
    [Account].[Address1_Line1],
    [Account].[Address1_Line2],
    [Account].[Address1_Line3],
    [Account].[Address1_Longitude],
    [Account].[Address1_Name],
    [Account].[Address1_PostalCode],
    [Account].[Address1_PostOfficeBox],
    [Account].[Address1_PrimaryContactName],
    [Account].[Address1_ShippingMethodCode],
    Address1_ShippingMethodCodePLTable.Value,
    [Account].[Address1_StateOrProvince],
    [Account].[Address1_Telephone1],
    [Account].[Address1_Telephone2],
    [Account].[Address1_Telephone3],
    [Account].[Address1_UPSZone],
    [Account].[Address1_UTCOffset],
    [Account].[Address2_AddressId],
    [Account].[Address2_AddressTypeCode],
    Address2_AddressTypeCodePLTable.Value,
    [Account].[Address2_City],
    [Account].[Address2_Composite],
    [Account].[Address2_Country],
    [Account].[Address2_County],
    [Account].[Address2_Fax],
    [Account].[Address2_FreightTermsCode],
    Address2_FreightTermsCodePLTable.Value,
    [Account].[Address2_Latitude],
    [Account].[Address2_Line1],
    [Account].[Address2_Line2],
    [Account].[Address2_Line3],
    [Account].[Address2_Longitude],
    [Account].[Address2_Name],
    [Account].[Address2_PostalCode],
    [Account].[Address2_PostOfficeBox],
    [Account].[Address2_PrimaryContactName],
    [Account].[Address2_ShippingMethodCode],
    Address2_ShippingMethodCodePLTable.Value,
    [Account].[Address2_StateOrProvince],
    [Account].[Address2_Telephone1],
    [Account].[Address2_Telephone2],
    [Account].[Address2_Telephone3],
    [Account].[Address2_UPSZone],
    [Account].[Address2_UTCOffset],
    [Account].[Aging30],
    [Account].[Aging30_Base],
    [Account].[Aging60],
    [Account].[Aging60_Base],
    [Account].[Aging90],
    [Account].[Aging90_Base],
    [Account].[BusinessTypeCode],
    BusinessTypeCodePLTable.Value,
    [Account].[CreatedBy],
    --[Account].[CreatedByDsc]
    0,
    [Account].[CreatedByExternalParty],
    [Account].[CreatedByExternalPartyName],
    [Account].[CreatedByExternalPartyYomiName],
    [Account].[CreatedByName],
    [Account].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Account].[CreatedOn],
			us.TimeZoneCode),
        [Account].[CreatedOn],
    [Account].[CreatedOnBehalfBy],
    --[Account].[CreatedOnBehalfByDsc]
    0,
    [Account].[CreatedOnBehalfByName],
    [Account].[CreatedOnBehalfByYomiName],
    [Account].[CreditLimit],
    [Account].[CreditLimit_Base],
    [Account].[CreditOnHold],
    CreditOnHoldPLTable.Value,
    [Account].[CustomerSizeCode],
    CustomerSizeCodePLTable.Value,
    [Account].[CustomerTypeCode],
    CustomerTypeCodePLTable.Value,
    [Account].[DefaultPriceLevelId],
    --[Account].[DefaultPriceLevelIdDsc]
    0,
    [Account].[DefaultPriceLevelIdName],
    [Account].[Description],
    [Account].[DoNotBulkEMail],
    DoNotBulkEMailPLTable.Value,
    [Account].[DoNotBulkPostalMail],
    DoNotBulkPostalMailPLTable.Value,
    [Account].[DoNotEMail],
    DoNotEMailPLTable.Value,
    [Account].[DoNotFax],
    DoNotFaxPLTable.Value,
    [Account].[DoNotPhone],
    DoNotPhonePLTable.Value,
    [Account].[DoNotPostalMail],
    DoNotPostalMailPLTable.Value,
    DoNotSendMMPLTable.Value,
    [Account].[DoNotSendMM],
    [Account].[EMailAddress1],
    [Account].[EMailAddress2],
    [Account].[EMailAddress3],
    cast([Account].[EntityImage] as varbinary(max)),
    [Account].[EntityImageId],
    [Account].[EntityImage_Timestamp],
    [Account].[EntityImage_URL],
    [Account].[ExchangeRate],
    [Account].[Fax],
    [Account].[FollowEmail],
    FollowEmailPLTable.Value,
    [Account].[FtpSiteURL],
    [Account].[ImportSequenceNumber],
    [Account].[IndustryCode],
    IndustryCodePLTable.Value,
    IsPrivatePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Account].[LastOnHoldTime],
			us.TimeZoneCode),
        [Account].[LastOnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Account].[LastUsedInCampaign],
			us.TimeZoneCode),
        [Account].[LastUsedInCampaign],
    [Account].[MarketCap],
    [Account].[MarketCap_Base],
    [Account].[MarketingOnly],
    MarketingOnlyPLTable.Value,
    --[Account].[MasterAccountIdDsc]
    0,
    [Account].[MasterAccountIdName],
    [Account].[MasterAccountIdYomiName],
    [Account].[MasterId],
    [Account].[Merged],
    MergedPLTable.Value,
    [Account].[ModifiedBy],
    --[Account].[ModifiedByDsc]
    0,
    [Account].[ModifiedByExternalParty],
    [Account].[ModifiedByExternalPartyName],
    [Account].[ModifiedByExternalPartyYomiName],
    [Account].[ModifiedByName],
    [Account].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Account].[ModifiedOn],
			us.TimeZoneCode),
        [Account].[ModifiedOn],
    [Account].[ModifiedOnBehalfBy],
    --[Account].[ModifiedOnBehalfByDsc]
    0,
    [Account].[ModifiedOnBehalfByName],
    [Account].[ModifiedOnBehalfByYomiName],
    [Account].[Name],
    [Account].[NumberOfEmployees],
    [Account].[OnHoldTime],
    case when ([paam0opendeals].ReadAccess = 4 or [poaa0opendeals].ReadAccess = 1) then [Account].[OpenDeals] else null end,
    case when ([paam0opendeals].ReadAccess = 4 or [poaa0opendeals].ReadAccess = 1) then dbo.fn_UTCToTzCodeSpecificLocalTime([Account].[OpenDeals_Date],
			us.TimeZoneCode) else null end,
    case when ([paam0opendeals].ReadAccess = 4 or [poaa0opendeals].ReadAccess = 1) then     [Account].[OpenDeals_Date] else null end,
    case when ([paam0opendeals].ReadAccess = 4 or [poaa0opendeals].ReadAccess = 1) then [Account].[OpenDeals_State] else null end,
    case when ([paam1openrevenue].ReadAccess = 4 or [poaa1openrevenue].ReadAccess = 1) then [Account].[OpenRevenue] else null end,
    case when ([paam1openrevenue].ReadAccess = 4 or [poaa1openrevenue].ReadAccess = 1) then [Account].[OpenRevenue_Base] else null end,
    case when ([paam1openrevenue].ReadAccess = 4 or [poaa1openrevenue].ReadAccess = 1) then dbo.fn_UTCToTzCodeSpecificLocalTime([Account].[OpenRevenue_Date],
			us.TimeZoneCode) else null end,
    case when ([paam1openrevenue].ReadAccess = 4 or [poaa1openrevenue].ReadAccess = 1) then     [Account].[OpenRevenue_Date] else null end,
    case when ([paam1openrevenue].ReadAccess = 4 or [poaa1openrevenue].ReadAccess = 1) then [Account].[OpenRevenue_State] else null end,
    [Account].[OriginatingLeadId],
    --[Account].[OriginatingLeadIdDsc]
    0,
    [Account].[OriginatingLeadIdName],
    [Account].[OriginatingLeadIdYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Account].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Account].[OverriddenCreatedOn],
    [Account].[OwnerId],
    --[Account].[OwnerIdDsc]
    0,
    [Account].[OwnerIdName],
    [Account].[OwnerIdType],
    [Account].[OwnerIdYomiName],
    [Account].[OwnershipCode],
    OwnershipCodePLTable.Value,
    [Account].[OwningBusinessUnit],
    [Account].[OwningTeam],
    [Account].[OwningUser],
    [Account].[ParentAccountId],
    --[Account].[ParentAccountIdDsc]
    0,
    [Account].[ParentAccountIdName],
    [Account].[ParentAccountIdYomiName],
    [Account].[ParticipatesInWorkflow],
    ParticipatesInWorkflowPLTable.Value,
    [Account].[PaymentTermsCode],
    PaymentTermsCodePLTable.Value,
    [Account].[PreferredAppointmentDayCode],
    PreferredAppointmentDayCodePLTable.Value,
    [Account].[PreferredAppointmentTimeCode],
    PreferredAppointmentTimeCodePLTable.Value,
    [Account].[PreferredContactMethodCode],
    PreferredContactMethodCodePLTable.Value,
    [Account].[PreferredEquipmentId],
    --[Account].[PreferredEquipmentIdDsc]
    0,
    [Account].[PreferredEquipmentIdName],
    [Account].[PreferredServiceId],
    --[Account].[PreferredServiceIdDsc]
    0,
    [Account].[PreferredServiceIdName],
    [Account].[PreferredSystemUserId],
    --[Account].[PreferredSystemUserIdDsc]
    0,
    [Account].[PreferredSystemUserIdName],
    [Account].[PreferredSystemUserIdYomiName],
    [Account].[PrimaryContactId],
    --[Account].[PrimaryContactIdDsc]
    0,
    [Account].[PrimaryContactIdName],
    [Account].[PrimaryContactIdYomiName],
    [Account].[PrimarySatoriId],
    [Account].[PrimaryTwitterId],
    [Account].[ProcessId],
    [Account].[Revenue],
    [Account].[Revenue_Base],
    [Account].[SharesOutstanding],
    [Account].[ShippingMethodCode],
    ShippingMethodCodePLTable.Value,
    [Account].[SIC],
    [Account].[SLAId],
    [Account].[SLAInvokedId],
    [Account].[SLAInvokedIdName],
    [Account].[SLAName],
    [Account].[StageId],
    [Account].[StateCode],
    StateCodePLTable.Value,
    [Account].[StatusCode],
    StatusCodePLTable.Value,
    [Account].[StockExchange],
    [Account].[Telephone1],
    [Account].[Telephone2],
    [Account].[Telephone3],
    [Account].[TerritoryCode],
    TerritoryCodePLTable.Value,
    [Account].[TerritoryId],
    --[Account].[TerritoryIdDsc]
    0,
    [Account].[TerritoryIdName],
    [Account].[TickerSymbol],
    [Account].[TimeSpentByMeOnEmailAndMeetings],
    [Account].[TimeZoneRuleVersionNumber],
    [Account].[TransactionCurrencyId],
    --[Account].[TransactionCurrencyIdDsc]
    0,
    [Account].[TransactionCurrencyIdName],
    [Account].[TraversedPath],
    [Account].[UTCConversionTimeZoneCode],
    [Account].[VersionNumber],
    [Account].[WebSiteURL],
    [Account].[YomiName],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from Account
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [Account].TransactionCurrencyId
    left outer join StringMap [AccountCategoryCodePLTable] on 
		([AccountCategoryCodePLTable].AttributeName = 'accountcategorycode'
		and [AccountCategoryCodePLTable].ObjectTypeCode = 1
		and [AccountCategoryCodePLTable].AttributeValue = [Account].[AccountCategoryCode]
		and [AccountCategoryCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [AccountClassificationCodePLTable] on 
		([AccountClassificationCodePLTable].AttributeName = 'accountclassificationcode'
		and [AccountClassificationCodePLTable].ObjectTypeCode = 1
		and [AccountClassificationCodePLTable].AttributeValue = [Account].[AccountClassificationCode]
		and [AccountClassificationCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [AccountRatingCodePLTable] on 
		([AccountRatingCodePLTable].AttributeName = 'accountratingcode'
		and [AccountRatingCodePLTable].ObjectTypeCode = 1
		and [AccountRatingCodePLTable].AttributeValue = [Account].[AccountRatingCode]
		and [AccountRatingCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address1_AddressTypeCodePLTable] on 
		([Address1_AddressTypeCodePLTable].AttributeName = 'address1_addresstypecode'
		and [Address1_AddressTypeCodePLTable].ObjectTypeCode = 1
		and [Address1_AddressTypeCodePLTable].AttributeValue = [Account].[Address1_AddressTypeCode]
		and [Address1_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address1_FreightTermsCodePLTable] on 
		([Address1_FreightTermsCodePLTable].AttributeName = 'address1_freighttermscode'
		and [Address1_FreightTermsCodePLTable].ObjectTypeCode = 1
		and [Address1_FreightTermsCodePLTable].AttributeValue = [Account].[Address1_FreightTermsCode]
		and [Address1_FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address1_ShippingMethodCodePLTable] on 
		([Address1_ShippingMethodCodePLTable].AttributeName = 'address1_shippingmethodcode'
		and [Address1_ShippingMethodCodePLTable].ObjectTypeCode = 1
		and [Address1_ShippingMethodCodePLTable].AttributeValue = [Account].[Address1_ShippingMethodCode]
		and [Address1_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_AddressTypeCodePLTable] on 
		([Address2_AddressTypeCodePLTable].AttributeName = 'address2_addresstypecode'
		and [Address2_AddressTypeCodePLTable].ObjectTypeCode = 1
		and [Address2_AddressTypeCodePLTable].AttributeValue = [Account].[Address2_AddressTypeCode]
		and [Address2_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_FreightTermsCodePLTable] on 
		([Address2_FreightTermsCodePLTable].AttributeName = 'address2_freighttermscode'
		and [Address2_FreightTermsCodePLTable].ObjectTypeCode = 1
		and [Address2_FreightTermsCodePLTable].AttributeValue = [Account].[Address2_FreightTermsCode]
		and [Address2_FreightTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_ShippingMethodCodePLTable] on 
		([Address2_ShippingMethodCodePLTable].AttributeName = 'address2_shippingmethodcode'
		and [Address2_ShippingMethodCodePLTable].ObjectTypeCode = 1
		and [Address2_ShippingMethodCodePLTable].AttributeValue = [Account].[Address2_ShippingMethodCode]
		and [Address2_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [BusinessTypeCodePLTable] on 
		([BusinessTypeCodePLTable].AttributeName = 'businesstypecode'
		and [BusinessTypeCodePLTable].ObjectTypeCode = 1
		and [BusinessTypeCodePLTable].AttributeValue = [Account].[BusinessTypeCode]
		and [BusinessTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CreditOnHoldPLTable] on 
		([CreditOnHoldPLTable].AttributeName = 'creditonhold'
		and [CreditOnHoldPLTable].ObjectTypeCode = 1
		and [CreditOnHoldPLTable].AttributeValue = [Account].[CreditOnHold]
		and [CreditOnHoldPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CustomerSizeCodePLTable] on 
		([CustomerSizeCodePLTable].AttributeName = 'customersizecode'
		and [CustomerSizeCodePLTable].ObjectTypeCode = 1
		and [CustomerSizeCodePLTable].AttributeValue = [Account].[CustomerSizeCode]
		and [CustomerSizeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CustomerTypeCodePLTable] on 
		([CustomerTypeCodePLTable].AttributeName = 'customertypecode'
		and [CustomerTypeCodePLTable].ObjectTypeCode = 1
		and [CustomerTypeCodePLTable].AttributeValue = [Account].[CustomerTypeCode]
		and [CustomerTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotBulkEMailPLTable] on 
		([DoNotBulkEMailPLTable].AttributeName = 'donotbulkemail'
		and [DoNotBulkEMailPLTable].ObjectTypeCode = 1
		and [DoNotBulkEMailPLTable].AttributeValue = [Account].[DoNotBulkEMail]
		and [DoNotBulkEMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotBulkPostalMailPLTable] on 
		([DoNotBulkPostalMailPLTable].AttributeName = 'donotbulkpostalmail'
		and [DoNotBulkPostalMailPLTable].ObjectTypeCode = 1
		and [DoNotBulkPostalMailPLTable].AttributeValue = [Account].[DoNotBulkPostalMail]
		and [DoNotBulkPostalMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotEMailPLTable] on 
		([DoNotEMailPLTable].AttributeName = 'donotemail'
		and [DoNotEMailPLTable].ObjectTypeCode = 1
		and [DoNotEMailPLTable].AttributeValue = [Account].[DoNotEMail]
		and [DoNotEMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotFaxPLTable] on 
		([DoNotFaxPLTable].AttributeName = 'donotfax'
		and [DoNotFaxPLTable].ObjectTypeCode = 1
		and [DoNotFaxPLTable].AttributeValue = [Account].[DoNotFax]
		and [DoNotFaxPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotPhonePLTable] on 
		([DoNotPhonePLTable].AttributeName = 'donotphone'
		and [DoNotPhonePLTable].ObjectTypeCode = 1
		and [DoNotPhonePLTable].AttributeValue = [Account].[DoNotPhone]
		and [DoNotPhonePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotPostalMailPLTable] on 
		([DoNotPostalMailPLTable].AttributeName = 'donotpostalmail'
		and [DoNotPostalMailPLTable].ObjectTypeCode = 1
		and [DoNotPostalMailPLTable].AttributeValue = [Account].[DoNotPostalMail]
		and [DoNotPostalMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotSendMMPLTable] on 
		([DoNotSendMMPLTable].AttributeName = 'donotsendmm'
		and [DoNotSendMMPLTable].ObjectTypeCode = 1
		and [DoNotSendMMPLTable].AttributeValue = [Account].[DoNotSendMM]
		and [DoNotSendMMPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FollowEmailPLTable] on 
		([FollowEmailPLTable].AttributeName = 'followemail'
		and [FollowEmailPLTable].ObjectTypeCode = 1
		and [FollowEmailPLTable].AttributeValue = [Account].[FollowEmail]
		and [FollowEmailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IndustryCodePLTable] on 
		([IndustryCodePLTable].AttributeName = 'industrycode'
		and [IndustryCodePLTable].ObjectTypeCode = 1
		and [IndustryCodePLTable].AttributeValue = [Account].[IndustryCode]
		and [IndustryCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPrivatePLTable] on 
		([IsPrivatePLTable].AttributeName = 'isprivate'
		and [IsPrivatePLTable].ObjectTypeCode = 1
		and [IsPrivatePLTable].AttributeValue = [Account].[IsPrivate]
		and [IsPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [MarketingOnlyPLTable] on 
		([MarketingOnlyPLTable].AttributeName = 'marketingonly'
		and [MarketingOnlyPLTable].ObjectTypeCode = 1
		and [MarketingOnlyPLTable].AttributeValue = [Account].[MarketingOnly]
		and [MarketingOnlyPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [MergedPLTable] on 
		([MergedPLTable].AttributeName = 'merged'
		and [MergedPLTable].ObjectTypeCode = 1
		and [MergedPLTable].AttributeValue = [Account].[Merged]
		and [MergedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OwnershipCodePLTable] on 
		([OwnershipCodePLTable].AttributeName = 'ownershipcode'
		and [OwnershipCodePLTable].ObjectTypeCode = 1
		and [OwnershipCodePLTable].AttributeValue = [Account].[OwnershipCode]
		and [OwnershipCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ParticipatesInWorkflowPLTable] on 
		([ParticipatesInWorkflowPLTable].AttributeName = 'participatesinworkflow'
		and [ParticipatesInWorkflowPLTable].ObjectTypeCode = 1
		and [ParticipatesInWorkflowPLTable].AttributeValue = [Account].[ParticipatesInWorkflow]
		and [ParticipatesInWorkflowPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PaymentTermsCodePLTable] on 
		([PaymentTermsCodePLTable].AttributeName = 'paymenttermscode'
		and [PaymentTermsCodePLTable].ObjectTypeCode = 1
		and [PaymentTermsCodePLTable].AttributeValue = [Account].[PaymentTermsCode]
		and [PaymentTermsCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PreferredAppointmentDayCodePLTable] on 
		([PreferredAppointmentDayCodePLTable].AttributeName = 'preferredappointmentdaycode'
		and [PreferredAppointmentDayCodePLTable].ObjectTypeCode = 1
		and [PreferredAppointmentDayCodePLTable].AttributeValue = [Account].[PreferredAppointmentDayCode]
		and [PreferredAppointmentDayCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PreferredAppointmentTimeCodePLTable] on 
		([PreferredAppointmentTimeCodePLTable].AttributeName = 'preferredappointmenttimecode'
		and [PreferredAppointmentTimeCodePLTable].ObjectTypeCode = 1
		and [PreferredAppointmentTimeCodePLTable].AttributeValue = [Account].[PreferredAppointmentTimeCode]
		and [PreferredAppointmentTimeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PreferredContactMethodCodePLTable] on 
		([PreferredContactMethodCodePLTable].AttributeName = 'preferredcontactmethodcode'
		and [PreferredContactMethodCodePLTable].ObjectTypeCode = 1
		and [PreferredContactMethodCodePLTable].AttributeValue = [Account].[PreferredContactMethodCode]
		and [PreferredContactMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShippingMethodCodePLTable] on 
		([ShippingMethodCodePLTable].AttributeName = 'shippingmethodcode'
		and [ShippingMethodCodePLTable].ObjectTypeCode = 1
		and [ShippingMethodCodePLTable].AttributeValue = [Account].[ShippingMethodCode]
		and [ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1
		and [StateCodePLTable].AttributeValue = [Account].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1
		and [StatusCodePLTable].AttributeValue = [Account].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TerritoryCodePLTable] on 
		([TerritoryCodePLTable].AttributeName = 'territorycode'
		and [TerritoryCodePLTable].ObjectTypeCode = 1
		and [TerritoryCodePLTable].AttributeValue = [Account].[TerritoryCode]
		and [TerritoryCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join PrincipalAttributeAccessMap [paam0opendeals] on 
		([paam0opendeals].AttributeId = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd' -- opendeals
		and [paam0opendeals].PrincipalId = u.SystemUserId )
	left outer join dbo.fn_UserSharedAttributeAccess(dbo.fn_FindUserGuid(),
		'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd', -- opendeals
		1) [poaa0opendeals] on
		([poaa0opendeals].ObjectId = [Account].[AccountId])

    left outer join PrincipalAttributeAccessMap [paam1openrevenue] on 
		([paam1openrevenue].AttributeId = '306845ef-446a-42e5-8df8-11c31bafaded' -- openrevenue
		and [paam1openrevenue].PrincipalId = u.SystemUserId )
	left outer join dbo.fn_UserSharedAttributeAccess(dbo.fn_FindUserGuid(),
		'306845ef-446a-42e5-8df8-11c31bafaded', -- openrevenue
		1) [poaa1openrevenue] on
		([poaa1openrevenue].ObjectId = [Account].[AccountId])

    cross join dbo.fn_GetMaxPrivilegeDepthMask(1) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Account].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 1))
		
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
		[Account].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Account].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Account].[AccountId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 1))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredAccount] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredAccount] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
