

--
-- report view for lead
--
create view dbo.[FilteredLead] 
(
    [accountid],
    [accountidname],
    [accountidyominame],
    [address1_addressid],
    [address1_addresstypecode],
    [address1_addresstypecodename],
    [address1_city],
    [address1_composite],
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
    [address2_composite],
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
    [budgetamount],
    [budgetamount_base],
    [budgetstatus],
    [budgetstatusname],
    [businesscard],
    [businesscardattributes],
    [campaignid],
    [campaignidname],
    [companyname],
    [confirminterest],
    [confirminterestname],
    [contactid],
    [contactidname],
    [contactidyominame],
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
    [decisionmaker],
    [decisionmakername],
    [description],
    [donotbulkemail],
    [donotbulkemailname],
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
    [estimatedamount],
    [estimatedamount_base],
    [estimatedclosedate],
    [estimatedclosedateutc],
    [estimatedvalue],
    [evaluatefit],
    [evaluatefitname],
    [exchangerate],
    [fax],
    [firstname],
    [followemail],
    [followemailname],
    [fullname],
    [importsequencenumber],
    [industrycode],
    [industrycodename],
    [initialcommunication],
    [initialcommunicationname],
    [isautocreatename],
    [isprivatename],
    [jobtitle],
    [lastname],
    [lastonholdtime],
    [lastonholdtimeutc],
    [lastusedincampaign],
    [lastusedincampaignutc],
    [leadid],
    [leadqualitycode],
    [leadqualitycodename],
    [leadsourcecode],
    [leadsourcecodename],
    [masterid],
    [masterleadidname],
    [masterleadidyominame],
    [merged],
    [mergedname],
    [middlename],
    [mobilephone],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [msdyn_gdproptout],
    [msdyn_gdproptoutname],
    [need],
    [needname],
    [numberofemployees],
    [onholdtime],
    [originatingcaseid],
    [originatingcaseidname],
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
    [pager],
    [parentaccountid],
    [parentaccountidname],
    [parentaccountidyominame],
    [parentcontactid],
    [parentcontactidname],
    [parentcontactidyominame],
    [participatesinworkflow],
    [participatesinworkflowname],
    [preferredcontactmethodcode],
    [preferredcontactmethodcodename],
    [prioritycode],
    [prioritycodename],
    [processid],
    [purchaseprocess],
    [purchaseprocessname],
    [purchasetimeframe],
    [purchasetimeframename],
    [qualificationcomments],
    [qualifyingopportunityid],
    [qualifyingopportunityidname],
    [relatedobjectid],
    [relatedobjectidname],
    [revenue],
    [revenue_base],
    [salesstage],
    [salesstagecode],
    [salesstagecodename],
    [salesstagename],
    [salutation],
    [schedulefollowup_prospect],
    [schedulefollowup_prospectutc],
    [schedulefollowup_qualify],
    [schedulefollowup_qualifyutc],
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
    [subject],
    [teamsfollowed],
    [telephone1],
    [telephone2],
    [telephone3],
    [timespentbymeonemailandmeetings],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber],
    [websiteurl],
    [yomicompanyname],
    [yomifirstname],
    [yomifullname],
    [yomilastname],
    [yomimiddlename],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [Lead].[AccountId],
    [Lead].[AccountIdName],
    [Lead].[AccountIdYomiName],
    [Lead].[Address1_AddressId],
    [Lead].[Address1_AddressTypeCode],
    Address1_AddressTypeCodePLTable.Value,
    [Lead].[Address1_City],
    [Lead].[Address1_Composite],
    [Lead].[Address1_Country],
    [Lead].[Address1_County],
    [Lead].[Address1_Fax],
    [Lead].[Address1_Latitude],
    [Lead].[Address1_Line1],
    [Lead].[Address1_Line2],
    [Lead].[Address1_Line3],
    [Lead].[Address1_Longitude],
    [Lead].[Address1_Name],
    [Lead].[Address1_PostalCode],
    [Lead].[Address1_PostOfficeBox],
    [Lead].[Address1_ShippingMethodCode],
    Address1_ShippingMethodCodePLTable.Value,
    [Lead].[Address1_StateOrProvince],
    [Lead].[Address1_Telephone1],
    [Lead].[Address1_Telephone2],
    [Lead].[Address1_Telephone3],
    [Lead].[Address1_UPSZone],
    [Lead].[Address1_UTCOffset],
    [Lead].[Address2_AddressId],
    [Lead].[Address2_AddressTypeCode],
    Address2_AddressTypeCodePLTable.Value,
    [Lead].[Address2_City],
    [Lead].[Address2_Composite],
    [Lead].[Address2_Country],
    [Lead].[Address2_County],
    [Lead].[Address2_Fax],
    [Lead].[Address2_Latitude],
    [Lead].[Address2_Line1],
    [Lead].[Address2_Line2],
    [Lead].[Address2_Line3],
    [Lead].[Address2_Longitude],
    [Lead].[Address2_Name],
    [Lead].[Address2_PostalCode],
    [Lead].[Address2_PostOfficeBox],
    [Lead].[Address2_ShippingMethodCode],
    Address2_ShippingMethodCodePLTable.Value,
    [Lead].[Address2_StateOrProvince],
    [Lead].[Address2_Telephone1],
    [Lead].[Address2_Telephone2],
    [Lead].[Address2_Telephone3],
    [Lead].[Address2_UPSZone],
    [Lead].[Address2_UTCOffset],
    [Lead].[BudgetAmount],
    [Lead].[BudgetAmount_Base],
    [Lead].[BudgetStatus],
    BudgetStatusPLTable.Value,
    [Lead].[BusinessCard],
    [Lead].[BusinessCardAttributes],
    [Lead].[CampaignId],
    [Lead].[CampaignIdName],
    [Lead].[CompanyName],
    [Lead].[ConfirmInterest],
    ConfirmInterestPLTable.Value,
    [Lead].[ContactId],
    [Lead].[ContactIdName],
    [Lead].[ContactIdYomiName],
    [Lead].[CreatedBy],
    [Lead].[CreatedByName],
    [Lead].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Lead].[CreatedOn],
			us.TimeZoneCode),
        [Lead].[CreatedOn],
    [Lead].[CreatedOnBehalfBy],
    [Lead].[CreatedOnBehalfByName],
    [Lead].[CreatedOnBehalfByYomiName],
    [Lead].[CustomerId],
    [Lead].[CustomerIdName],
    [Lead].[CustomerIdType],
    [Lead].[CustomerIdYomiName],
    [Lead].[DecisionMaker],
    DecisionMakerPLTable.Value,
    [Lead].[Description],
    [Lead].[DoNotBulkEMail],
    DoNotBulkEMailPLTable.Value,
    [Lead].[DoNotEMail],
    DoNotEMailPLTable.Value,
    [Lead].[DoNotFax],
    DoNotFaxPLTable.Value,
    [Lead].[DoNotPhone],
    DoNotPhonePLTable.Value,
    [Lead].[DoNotPostalMail],
    DoNotPostalMailPLTable.Value,
    DoNotSendMMPLTable.Value,
    [Lead].[DoNotSendMM],
    [Lead].[EMailAddress1],
    [Lead].[EMailAddress2],
    [Lead].[EMailAddress3],
    cast([Lead].[EntityImage] as varbinary(max)),
    [Lead].[EntityImageId],
    [Lead].[EntityImage_Timestamp],
    [Lead].[EntityImage_URL],
    [Lead].[EstimatedAmount],
    [Lead].[EstimatedAmount_Base],
    [Lead].[EstimatedCloseDate],
        [Lead].[EstimatedCloseDate],
    [Lead].[EstimatedValue],
    [Lead].[EvaluateFit],
    EvaluateFitPLTable.Value,
    [Lead].[ExchangeRate],
    [Lead].[Fax],
    [Lead].[FirstName],
    [Lead].[FollowEmail],
    FollowEmailPLTable.Value,
    [Lead].[FullName],
    [Lead].[ImportSequenceNumber],
    [Lead].[IndustryCode],
    IndustryCodePLTable.Value,
    [Lead].[InitialCommunication],
    InitialCommunicationPLTable.Value,
    IsAutoCreatePLTable.Value,
    IsPrivatePLTable.Value,
    [Lead].[JobTitle],
    [Lead].[LastName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Lead].[LastOnHoldTime],
			us.TimeZoneCode),
        [Lead].[LastOnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Lead].[LastUsedInCampaign],
			us.TimeZoneCode),
        [Lead].[LastUsedInCampaign],
    [Lead].[LeadId],
    [Lead].[LeadQualityCode],
    LeadQualityCodePLTable.Value,
    [Lead].[LeadSourceCode],
    LeadSourceCodePLTable.Value,
    [Lead].[MasterId],
    [Lead].[MasterLeadIdName],
    [Lead].[MasterLeadIdYomiName],
    [Lead].[Merged],
    MergedPLTable.Value,
    [Lead].[MiddleName],
    [Lead].[MobilePhone],
    [Lead].[ModifiedBy],
    [Lead].[ModifiedByName],
    [Lead].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Lead].[ModifiedOn],
			us.TimeZoneCode),
        [Lead].[ModifiedOn],
    [Lead].[ModifiedOnBehalfBy],
    [Lead].[ModifiedOnBehalfByName],
    [Lead].[ModifiedOnBehalfByYomiName],
    [Lead].[msdyn_gdproptout],
    msdyn_gdproptoutPLTable.Value,
    [Lead].[Need],
    NeedPLTable.Value,
    [Lead].[NumberOfEmployees],
    [Lead].[OnHoldTime],
    [Lead].[OriginatingCaseId],
    [Lead].[OriginatingCaseIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Lead].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Lead].[OverriddenCreatedOn],
    [Lead].[OwnerId],
    --[Lead].[OwnerIdDsc]
    0,
    [Lead].[OwnerIdName],
    [Lead].[OwnerIdType],
    [Lead].[OwnerIdYomiName],
    [Lead].[OwningBusinessUnit],
    [Lead].[OwningTeam],
    [Lead].[OwningUser],
    [Lead].[Pager],
    [Lead].[ParentAccountId],
    [Lead].[ParentAccountIdName],
    [Lead].[ParentAccountIdYomiName],
    [Lead].[ParentContactId],
    [Lead].[ParentContactIdName],
    [Lead].[ParentContactIdYomiName],
    [Lead].[ParticipatesInWorkflow],
    ParticipatesInWorkflowPLTable.Value,
    [Lead].[PreferredContactMethodCode],
    PreferredContactMethodCodePLTable.Value,
    [Lead].[PriorityCode],
    PriorityCodePLTable.Value,
    [Lead].[ProcessId],
    [Lead].[PurchaseProcess],
    PurchaseProcessPLTable.Value,
    [Lead].[PurchaseTimeFrame],
    PurchaseTimeFramePLTable.Value,
    [Lead].[QualificationComments],
    [Lead].[QualifyingOpportunityId],
    [Lead].[QualifyingOpportunityIdName],
    [Lead].[RelatedObjectId],
    [Lead].[RelatedObjectIdName],
    [Lead].[Revenue],
    [Lead].[Revenue_Base],
    [Lead].[SalesStage],
    [Lead].[SalesStageCode],
    SalesStageCodePLTable.Value,
    SalesStagePLTable.Value,
    [Lead].[Salutation],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Lead].[ScheduleFollowUp_Prospect],
			us.TimeZoneCode),
        [Lead].[ScheduleFollowUp_Prospect],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Lead].[ScheduleFollowUp_Qualify],
			us.TimeZoneCode),
        [Lead].[ScheduleFollowUp_Qualify],
    [Lead].[SIC],
    [Lead].[SLAId],
    [Lead].[SLAInvokedId],
    [Lead].[SLAInvokedIdName],
    [Lead].[SLAName],
    [Lead].[StageId],
    [Lead].[StateCode],
    StateCodePLTable.Value,
    [Lead].[StatusCode],
    StatusCodePLTable.Value,
    [Lead].[Subject],
    [Lead].[TeamsFollowed],
    [Lead].[Telephone1],
    [Lead].[Telephone2],
    [Lead].[Telephone3],
    [Lead].[TimeSpentByMeOnEmailAndMeetings],
    [Lead].[TimeZoneRuleVersionNumber],
    [Lead].[TransactionCurrencyId],
    [Lead].[TransactionCurrencyIdName],
    [Lead].[TraversedPath],
    [Lead].[UTCConversionTimeZoneCode],
    [Lead].[VersionNumber],
    [Lead].[WebSiteUrl],
    [Lead].[YomiCompanyName],
    [Lead].[YomiFirstName],
    [Lead].[YomiFullName],
    [Lead].[YomiLastName],
    [Lead].[YomiMiddleName],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from Lead
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [Lead].TransactionCurrencyId
    left outer join StringMap [Address1_AddressTypeCodePLTable] on 
		([Address1_AddressTypeCodePLTable].AttributeName = 'address1_addresstypecode'
		and [Address1_AddressTypeCodePLTable].ObjectTypeCode = 4
		and [Address1_AddressTypeCodePLTable].AttributeValue = [Lead].[Address1_AddressTypeCode]
		and [Address1_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address1_ShippingMethodCodePLTable] on 
		([Address1_ShippingMethodCodePLTable].AttributeName = 'address1_shippingmethodcode'
		and [Address1_ShippingMethodCodePLTable].ObjectTypeCode = 4
		and [Address1_ShippingMethodCodePLTable].AttributeValue = [Lead].[Address1_ShippingMethodCode]
		and [Address1_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_AddressTypeCodePLTable] on 
		([Address2_AddressTypeCodePLTable].AttributeName = 'address2_addresstypecode'
		and [Address2_AddressTypeCodePLTable].ObjectTypeCode = 4
		and [Address2_AddressTypeCodePLTable].AttributeValue = [Lead].[Address2_AddressTypeCode]
		and [Address2_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_ShippingMethodCodePLTable] on 
		([Address2_ShippingMethodCodePLTable].AttributeName = 'address2_shippingmethodcode'
		and [Address2_ShippingMethodCodePLTable].ObjectTypeCode = 4
		and [Address2_ShippingMethodCodePLTable].AttributeValue = [Lead].[Address2_ShippingMethodCode]
		and [Address2_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [BudgetStatusPLTable] on 
		([BudgetStatusPLTable].AttributeName = 'budgetstatus'
		and [BudgetStatusPLTable].ObjectTypeCode = 4
		and [BudgetStatusPLTable].AttributeValue = [Lead].[BudgetStatus]
		and [BudgetStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ConfirmInterestPLTable] on 
		([ConfirmInterestPLTable].AttributeName = 'confirminterest'
		and [ConfirmInterestPLTable].ObjectTypeCode = 4
		and [ConfirmInterestPLTable].AttributeValue = [Lead].[ConfirmInterest]
		and [ConfirmInterestPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DecisionMakerPLTable] on 
		([DecisionMakerPLTable].AttributeName = 'decisionmaker'
		and [DecisionMakerPLTable].ObjectTypeCode = 4
		and [DecisionMakerPLTable].AttributeValue = [Lead].[DecisionMaker]
		and [DecisionMakerPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotBulkEMailPLTable] on 
		([DoNotBulkEMailPLTable].AttributeName = 'donotbulkemail'
		and [DoNotBulkEMailPLTable].ObjectTypeCode = 4
		and [DoNotBulkEMailPLTable].AttributeValue = [Lead].[DoNotBulkEMail]
		and [DoNotBulkEMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotEMailPLTable] on 
		([DoNotEMailPLTable].AttributeName = 'donotemail'
		and [DoNotEMailPLTable].ObjectTypeCode = 4
		and [DoNotEMailPLTable].AttributeValue = [Lead].[DoNotEMail]
		and [DoNotEMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotFaxPLTable] on 
		([DoNotFaxPLTable].AttributeName = 'donotfax'
		and [DoNotFaxPLTable].ObjectTypeCode = 4
		and [DoNotFaxPLTable].AttributeValue = [Lead].[DoNotFax]
		and [DoNotFaxPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotPhonePLTable] on 
		([DoNotPhonePLTable].AttributeName = 'donotphone'
		and [DoNotPhonePLTable].ObjectTypeCode = 4
		and [DoNotPhonePLTable].AttributeValue = [Lead].[DoNotPhone]
		and [DoNotPhonePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotPostalMailPLTable] on 
		([DoNotPostalMailPLTable].AttributeName = 'donotpostalmail'
		and [DoNotPostalMailPLTable].ObjectTypeCode = 4
		and [DoNotPostalMailPLTable].AttributeValue = [Lead].[DoNotPostalMail]
		and [DoNotPostalMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotSendMMPLTable] on 
		([DoNotSendMMPLTable].AttributeName = 'donotsendmm'
		and [DoNotSendMMPLTable].ObjectTypeCode = 4
		and [DoNotSendMMPLTable].AttributeValue = [Lead].[DoNotSendMM]
		and [DoNotSendMMPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EvaluateFitPLTable] on 
		([EvaluateFitPLTable].AttributeName = 'evaluatefit'
		and [EvaluateFitPLTable].ObjectTypeCode = 4
		and [EvaluateFitPLTable].AttributeValue = [Lead].[EvaluateFit]
		and [EvaluateFitPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FollowEmailPLTable] on 
		([FollowEmailPLTable].AttributeName = 'followemail'
		and [FollowEmailPLTable].ObjectTypeCode = 4
		and [FollowEmailPLTable].AttributeValue = [Lead].[FollowEmail]
		and [FollowEmailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IndustryCodePLTable] on 
		([IndustryCodePLTable].AttributeName = 'industrycode'
		and [IndustryCodePLTable].ObjectTypeCode = 4
		and [IndustryCodePLTable].AttributeValue = [Lead].[IndustryCode]
		and [IndustryCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InitialCommunicationPLTable] on 
		([InitialCommunicationPLTable].AttributeName = 'initialcommunication'
		and [InitialCommunicationPLTable].ObjectTypeCode = 4
		and [InitialCommunicationPLTable].AttributeValue = [Lead].[InitialCommunication]
		and [InitialCommunicationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsAutoCreatePLTable] on 
		([IsAutoCreatePLTable].AttributeName = 'isautocreate'
		and [IsAutoCreatePLTable].ObjectTypeCode = 4
		and [IsAutoCreatePLTable].AttributeValue = [Lead].[IsAutoCreate]
		and [IsAutoCreatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPrivatePLTable] on 
		([IsPrivatePLTable].AttributeName = 'isprivate'
		and [IsPrivatePLTable].ObjectTypeCode = 4
		and [IsPrivatePLTable].AttributeValue = [Lead].[IsPrivate]
		and [IsPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LeadQualityCodePLTable] on 
		([LeadQualityCodePLTable].AttributeName = 'leadqualitycode'
		and [LeadQualityCodePLTable].ObjectTypeCode = 4
		and [LeadQualityCodePLTable].AttributeValue = [Lead].[LeadQualityCode]
		and [LeadQualityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LeadSourceCodePLTable] on 
		([LeadSourceCodePLTable].AttributeName = 'leadsourcecode'
		and [LeadSourceCodePLTable].ObjectTypeCode = 4
		and [LeadSourceCodePLTable].AttributeValue = [Lead].[LeadSourceCode]
		and [LeadSourceCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [MergedPLTable] on 
		([MergedPLTable].AttributeName = 'merged'
		and [MergedPLTable].ObjectTypeCode = 4
		and [MergedPLTable].AttributeValue = [Lead].[Merged]
		and [MergedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_gdproptoutPLTable] on 
		([msdyn_gdproptoutPLTable].AttributeName = 'msdyn_gdproptout'
		and [msdyn_gdproptoutPLTable].ObjectTypeCode = 4
		and [msdyn_gdproptoutPLTable].AttributeValue = [Lead].[msdyn_gdproptout]
		and [msdyn_gdproptoutPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [NeedPLTable] on 
		([NeedPLTable].AttributeName = 'need'
		and [NeedPLTable].ObjectTypeCode = 4
		and [NeedPLTable].AttributeValue = [Lead].[Need]
		and [NeedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ParticipatesInWorkflowPLTable] on 
		([ParticipatesInWorkflowPLTable].AttributeName = 'participatesinworkflow'
		and [ParticipatesInWorkflowPLTable].ObjectTypeCode = 4
		and [ParticipatesInWorkflowPLTable].AttributeValue = [Lead].[ParticipatesInWorkflow]
		and [ParticipatesInWorkflowPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PreferredContactMethodCodePLTable] on 
		([PreferredContactMethodCodePLTable].AttributeName = 'preferredcontactmethodcode'
		and [PreferredContactMethodCodePLTable].ObjectTypeCode = 4
		and [PreferredContactMethodCodePLTable].AttributeValue = [Lead].[PreferredContactMethodCode]
		and [PreferredContactMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4
		and [PriorityCodePLTable].AttributeValue = [Lead].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PurchaseProcessPLTable] on 
		([PurchaseProcessPLTable].AttributeName = 'purchaseprocess'
		and [PurchaseProcessPLTable].ObjectTypeCode = 4
		and [PurchaseProcessPLTable].AttributeValue = [Lead].[PurchaseProcess]
		and [PurchaseProcessPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PurchaseTimeFramePLTable] on 
		([PurchaseTimeFramePLTable].AttributeName = 'purchasetimeframe'
		and [PurchaseTimeFramePLTable].ObjectTypeCode = 4
		and [PurchaseTimeFramePLTable].AttributeValue = [Lead].[PurchaseTimeFrame]
		and [PurchaseTimeFramePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SalesStageCodePLTable] on 
		([SalesStageCodePLTable].AttributeName = 'salesstagecode'
		and [SalesStageCodePLTable].ObjectTypeCode = 4
		and [SalesStageCodePLTable].AttributeValue = [Lead].[SalesStageCode]
		and [SalesStageCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SalesStagePLTable] on 
		([SalesStagePLTable].AttributeName = 'salesstage'
		and [SalesStagePLTable].ObjectTypeCode = 4
		and [SalesStagePLTable].AttributeValue = [Lead].[SalesStage]
		and [SalesStagePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4
		and [StateCodePLTable].AttributeValue = [Lead].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4
		and [StatusCodePLTable].AttributeValue = [Lead].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Lead].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4
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
		[Lead].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Lead].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Lead].[LeadId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 4
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLead] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLead] TO [CRMReaderRole]
    AS [dbo];

