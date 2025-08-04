SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for systemuser
--
create view [dbo].[FilteredSystemUser] (
    [accessmode],
    [accessmodename],
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
    [applicationid],
    [applicationiduri],
    [azureactivedirectoryobjectid],
    [businessunitid],
    [businessunitiddsc],
    [businessunitidname],
    [calendarid],
    [caltype],
    [caltypename],
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
    [defaultfilterspopulated],
    [defaultmailbox],
    [defaultmailboxname],
    [defaultodbfoldername],
    [disabledreason],
    [displayinserviceviews],
    [displayinserviceviewsname],
    [domainname],
    [emailrouteraccessapproval],
    [emailrouteraccessapprovalname],
    [employeeid],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [firstname],
    [fullname],
    [governmentid],
    [homephone],
    [importsequencenumber],
    [incomingemaildeliverymethod],
    [incomingemaildeliverymethodname],
    [internalemailaddress],
    [invitestatuscode],
    [invitestatuscodename],
    [isdisabled],
    [isdisabledname],
    [isemailaddressapprovedbyo365admin],
    [isintegrationuser],
    [isintegrationusername],
    [islicensed],
    [issyncwithdirectory],
    [jobtitle],
    [lastname],
    [middlename],
    [mobilealertemail],
    [mobileofflineprofileid],
    [mobileofflineprofileidname],
    [mobilephone],
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
    [nickname],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [outgoingemaildeliverymethod],
    [outgoingemaildeliverymethodname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [parentsystemuserid],
    [parentsystemuseriddsc],
    [parentsystemuseridname],
    [parentsystemuseridyominame],
    [passporthi],
    [passportlo],
    [personalemailaddress],
    [photourl],
    [positionid],
    [positionidname],
    [preferredaddresscode],
    [preferredaddresscodename],
    [preferredemailcode],
    [preferredemailcodename],
    [preferredphonecode],
    [preferredphonecodename],
    [processid],
    [queueid],
    [queueidname],
    [salutation],
    [setupuser],
    [setupusername],
    [sharepointemailaddress],
    [siteid],
    [siteiddsc],
    [siteidname],
    [skills],
    [stageid],
    [systemuserid],
    [territoryid],
    [territoryiddsc],
    [territoryidname],
    [timezoneruleversionnumber],
    [title],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [userlicensetype],
    [utcconversiontimezonecode],
    [versionnumber],
    [windowsliveid],
    [yammeremailaddress],
    [yammeruserid],
    [yomifirstname],
    [yomifullname],
    [yomilastname],
    [yomimiddlename]
) with view_metadata as
select
    [SystemUser].[AccessMode],
    AccessModePLTable.Value,
    [SystemUser].[Address1_AddressId],
    [SystemUser].[Address1_AddressTypeCode],
    Address1_AddressTypeCodePLTable.Value,
    [SystemUser].[Address1_City],
    [SystemUser].[Address1_Composite],
    [SystemUser].[Address1_Country],
    [SystemUser].[Address1_County],
    [SystemUser].[Address1_Fax],
    [SystemUser].[Address1_Latitude],
    [SystemUser].[Address1_Line1],
    [SystemUser].[Address1_Line2],
    [SystemUser].[Address1_Line3],
    [SystemUser].[Address1_Longitude],
    [SystemUser].[Address1_Name],
    [SystemUser].[Address1_PostalCode],
    [SystemUser].[Address1_PostOfficeBox],
    [SystemUser].[Address1_ShippingMethodCode],
    Address1_ShippingMethodCodePLTable.Value,
    [SystemUser].[Address1_StateOrProvince],
    [SystemUser].[Address1_Telephone1],
    [SystemUser].[Address1_Telephone2],
    [SystemUser].[Address1_Telephone3],
    [SystemUser].[Address1_UPSZone],
    [SystemUser].[Address1_UTCOffset],
    [SystemUser].[Address2_AddressId],
    [SystemUser].[Address2_AddressTypeCode],
    Address2_AddressTypeCodePLTable.Value,
    [SystemUser].[Address2_City],
    [SystemUser].[Address2_Composite],
    [SystemUser].[Address2_Country],
    [SystemUser].[Address2_County],
    [SystemUser].[Address2_Fax],
    [SystemUser].[Address2_Latitude],
    [SystemUser].[Address2_Line1],
    [SystemUser].[Address2_Line2],
    [SystemUser].[Address2_Line3],
    [SystemUser].[Address2_Longitude],
    [SystemUser].[Address2_Name],
    [SystemUser].[Address2_PostalCode],
    [SystemUser].[Address2_PostOfficeBox],
    [SystemUser].[Address2_ShippingMethodCode],
    Address2_ShippingMethodCodePLTable.Value,
    [SystemUser].[Address2_StateOrProvince],
    [SystemUser].[Address2_Telephone1],
    [SystemUser].[Address2_Telephone2],
    [SystemUser].[Address2_Telephone3],
    [SystemUser].[Address2_UPSZone],
    [SystemUser].[Address2_UTCOffset],
    [SystemUser].[ApplicationId],
    [SystemUser].[ApplicationIdUri],
    [SystemUser].[AzureActiveDirectoryObjectId],
    [SystemUser].[BusinessUnitId],
    --[SystemUser].[BusinessUnitIdDsc]
    0,
    [SystemUser].[BusinessUnitIdName],
    [SystemUser].[CalendarId],
    [SystemUser].[CALType],
    CALTypePLTable.Value,
    [SystemUser].[CreatedBy],
    --[SystemUser].[CreatedByDsc]
    0,
    [SystemUser].[CreatedByName],
    [SystemUser].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SystemUser].[CreatedOn],
			us.TimeZoneCode),
        [SystemUser].[CreatedOn],
    [SystemUser].[CreatedOnBehalfBy],
    --[SystemUser].[CreatedOnBehalfByDsc]
    0,
    [SystemUser].[CreatedOnBehalfByName],
    [SystemUser].[CreatedOnBehalfByYomiName],
    [SystemUser].[DefaultFiltersPopulated],
    [SystemUser].[DefaultMailbox],
    [SystemUser].[DefaultMailboxName],
    [SystemUser].[DefaultOdbFolderName],
    [SystemUser].[DisabledReason],
    [SystemUser].[DisplayInServiceViews],
    DisplayInServiceViewsPLTable.Value,
    [SystemUser].[DomainName],
    [SystemUser].[EmailRouterAccessApproval],
    EmailRouterAccessApprovalPLTable.Value,
    [SystemUser].[EmployeeId],
    cast([SystemUser].[EntityImage] as varbinary(max)),
    [SystemUser].[EntityImageId],
    [SystemUser].[EntityImage_Timestamp],
    [SystemUser].[EntityImage_URL],
    [SystemUser].[ExchangeRate],
    [SystemUser].[FirstName],
    [SystemUser].[FullName],
    [SystemUser].[GovernmentId],
    [SystemUser].[HomePhone],
    [SystemUser].[ImportSequenceNumber],
    [SystemUser].[IncomingEmailDeliveryMethod],
    IncomingEmailDeliveryMethodPLTable.Value,
    [SystemUser].[InternalEMailAddress],
    [SystemUser].[InviteStatusCode],
    InviteStatusCodePLTable.Value,
    [SystemUser].[IsDisabled],
    IsDisabledPLTable.Value,
    [SystemUser].[IsEmailAddressApprovedByO365Admin],
    [SystemUser].[IsIntegrationUser],
    IsIntegrationUserPLTable.Value,
    [SystemUser].[IsLicensed],
    [SystemUser].[IsSyncWithDirectory],
    [SystemUser].[JobTitle],
    [SystemUser].[LastName],
    [SystemUser].[MiddleName],
    [SystemUser].[MobileAlertEMail],
    [SystemUser].[MobileOfflineProfileId],
    [SystemUser].[MobileOfflineProfileIdName],
    [SystemUser].[MobilePhone],
    [SystemUser].[ModifiedBy],
    --[SystemUser].[ModifiedByDsc]
    0,
    [SystemUser].[ModifiedByName],
    [SystemUser].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SystemUser].[ModifiedOn],
			us.TimeZoneCode),
        [SystemUser].[ModifiedOn],
    [SystemUser].[ModifiedOnBehalfBy],
    --[SystemUser].[ModifiedOnBehalfByDsc]
    0,
    [SystemUser].[ModifiedOnBehalfByName],
    [SystemUser].[ModifiedOnBehalfByYomiName],
    [SystemUser].[NickName],
    [SystemUser].[OrganizationId],
    --[SystemUser].[OrganizationIdDsc]
    0,
    [SystemUser].[OrganizationIdName],
    [SystemUser].[OutgoingEmailDeliveryMethod],
    OutgoingEmailDeliveryMethodPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([SystemUser].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SystemUser].[OverriddenCreatedOn],
    [SystemUser].[ParentSystemUserId],
    --[SystemUser].[ParentSystemUserIdDsc]
    0,
    [SystemUser].[ParentSystemUserIdName],
    [SystemUser].[ParentSystemUserIdYomiName],
    [SystemUser].[PassportHi],
    [SystemUser].[PassportLo],
    [SystemUser].[PersonalEMailAddress],
    [SystemUser].[PhotoUrl],
    [SystemUser].[PositionId],
    [SystemUser].[PositionIdName],
    [SystemUser].[PreferredAddressCode],
    PreferredAddressCodePLTable.Value,
    [SystemUser].[PreferredEmailCode],
    PreferredEmailCodePLTable.Value,
    [SystemUser].[PreferredPhoneCode],
    PreferredPhoneCodePLTable.Value,
    [SystemUser].[ProcessId],
    [SystemUser].[QueueId],
    [SystemUser].[QueueIdName],
    [SystemUser].[Salutation],
    [SystemUser].[SetupUser],
    SetupUserPLTable.Value,
    [SystemUser].[SharePointEmailAddress],
    [SystemUser].[SiteId],
    --[SystemUser].[SiteIdDsc]
    0,
    [SystemUser].[SiteIdName],
    [SystemUser].[Skills],
    [SystemUser].[StageId],
    [SystemUser].[SystemUserId],
    [SystemUser].[TerritoryId],
    --[SystemUser].[TerritoryIdDsc]
    0,
    [SystemUser].[TerritoryIdName],
    [SystemUser].[TimeZoneRuleVersionNumber],
    [SystemUser].[Title],
    [SystemUser].[TransactionCurrencyId],
    [SystemUser].[TransactionCurrencyIdName],
    [SystemUser].[TraversedPath],
    [SystemUser].[UserLicenseType],
    [SystemUser].[UTCConversionTimeZoneCode],
    [SystemUser].[VersionNumber],
    [SystemUser].[WindowsLiveID],
    [SystemUser].[YammerEmailAddress],
    [SystemUser].[YammerUserId],
    [SystemUser].[YomiFirstName],
    [SystemUser].[YomiFullName],
    [SystemUser].[YomiLastName],
    [SystemUser].[YomiMiddleName]
from SystemUser
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AccessModePLTable] on 
		([AccessModePLTable].AttributeName = 'accessmode'
		and [AccessModePLTable].ObjectTypeCode = 8
		and [AccessModePLTable].AttributeValue = [SystemUser].[AccessMode]
		and [AccessModePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address1_AddressTypeCodePLTable] on 
		([Address1_AddressTypeCodePLTable].AttributeName = 'address1_addresstypecode'
		and [Address1_AddressTypeCodePLTable].ObjectTypeCode = 8
		and [Address1_AddressTypeCodePLTable].AttributeValue = [SystemUser].[Address1_AddressTypeCode]
		and [Address1_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address1_ShippingMethodCodePLTable] on 
		([Address1_ShippingMethodCodePLTable].AttributeName = 'address1_shippingmethodcode'
		and [Address1_ShippingMethodCodePLTable].ObjectTypeCode = 8
		and [Address1_ShippingMethodCodePLTable].AttributeValue = [SystemUser].[Address1_ShippingMethodCode]
		and [Address1_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_AddressTypeCodePLTable] on 
		([Address2_AddressTypeCodePLTable].AttributeName = 'address2_addresstypecode'
		and [Address2_AddressTypeCodePLTable].ObjectTypeCode = 8
		and [Address2_AddressTypeCodePLTable].AttributeValue = [SystemUser].[Address2_AddressTypeCode]
		and [Address2_AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [Address2_ShippingMethodCodePLTable] on 
		([Address2_ShippingMethodCodePLTable].AttributeName = 'address2_shippingmethodcode'
		and [Address2_ShippingMethodCodePLTable].ObjectTypeCode = 8
		and [Address2_ShippingMethodCodePLTable].AttributeValue = [SystemUser].[Address2_ShippingMethodCode]
		and [Address2_ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CALTypePLTable] on 
		([CALTypePLTable].AttributeName = 'caltype'
		and [CALTypePLTable].ObjectTypeCode = 8
		and [CALTypePLTable].AttributeValue = [SystemUser].[CALType]
		and [CALTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DisplayInServiceViewsPLTable] on 
		([DisplayInServiceViewsPLTable].AttributeName = 'displayinserviceviews'
		and [DisplayInServiceViewsPLTable].ObjectTypeCode = 8
		and [DisplayInServiceViewsPLTable].AttributeValue = [SystemUser].[DisplayInServiceViews]
		and [DisplayInServiceViewsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EmailRouterAccessApprovalPLTable] on 
		([EmailRouterAccessApprovalPLTable].AttributeName = 'emailrouteraccessapproval'
		and [EmailRouterAccessApprovalPLTable].ObjectTypeCode = 8
		and [EmailRouterAccessApprovalPLTable].AttributeValue = [SystemUser].[EmailRouterAccessApproval]
		and [EmailRouterAccessApprovalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IncomingEmailDeliveryMethodPLTable] on 
		([IncomingEmailDeliveryMethodPLTable].AttributeName = 'incomingemaildeliverymethod'
		and [IncomingEmailDeliveryMethodPLTable].ObjectTypeCode = 8
		and [IncomingEmailDeliveryMethodPLTable].AttributeValue = [SystemUser].[IncomingEmailDeliveryMethod]
		and [IncomingEmailDeliveryMethodPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InviteStatusCodePLTable] on 
		([InviteStatusCodePLTable].AttributeName = 'invitestatuscode'
		and [InviteStatusCodePLTable].ObjectTypeCode = 8
		and [InviteStatusCodePLTable].AttributeValue = [SystemUser].[InviteStatusCode]
		and [InviteStatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsDisabledPLTable] on 
		([IsDisabledPLTable].AttributeName = 'isdisabled'
		and [IsDisabledPLTable].ObjectTypeCode = 8
		and [IsDisabledPLTable].AttributeValue = [SystemUser].[IsDisabled]
		and [IsDisabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsIntegrationUserPLTable] on 
		([IsIntegrationUserPLTable].AttributeName = 'isintegrationuser'
		and [IsIntegrationUserPLTable].ObjectTypeCode = 8
		and [IsIntegrationUserPLTable].AttributeValue = [SystemUser].[IsIntegrationUser]
		and [IsIntegrationUserPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OutgoingEmailDeliveryMethodPLTable] on 
		([OutgoingEmailDeliveryMethodPLTable].AttributeName = 'outgoingemaildeliverymethod'
		and [OutgoingEmailDeliveryMethodPLTable].ObjectTypeCode = 8
		and [OutgoingEmailDeliveryMethodPLTable].AttributeValue = [SystemUser].[OutgoingEmailDeliveryMethod]
		and [OutgoingEmailDeliveryMethodPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PreferredAddressCodePLTable] on 
		([PreferredAddressCodePLTable].AttributeName = 'preferredaddresscode'
		and [PreferredAddressCodePLTable].ObjectTypeCode = 8
		and [PreferredAddressCodePLTable].AttributeValue = [SystemUser].[PreferredAddressCode]
		and [PreferredAddressCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PreferredEmailCodePLTable] on 
		([PreferredEmailCodePLTable].AttributeName = 'preferredemailcode'
		and [PreferredEmailCodePLTable].ObjectTypeCode = 8
		and [PreferredEmailCodePLTable].AttributeValue = [SystemUser].[PreferredEmailCode]
		and [PreferredEmailCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PreferredPhoneCodePLTable] on 
		([PreferredPhoneCodePLTable].AttributeName = 'preferredphonecode'
		and [PreferredPhoneCodePLTable].ObjectTypeCode = 8
		and [PreferredPhoneCodePLTable].AttributeValue = [SystemUser].[PreferredPhoneCode]
		and [PreferredPhoneCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SetupUserPLTable] on 
		([SetupUserPLTable].AttributeName = 'setupuser'
		and [SetupUserPLTable].ObjectTypeCode = 8
		and [SetupUserPLTable].AttributeValue = [SystemUser].[SetupUser]
		and [SetupUserPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(8) pdm
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
		[SystemUser].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 8)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[SystemUser].[BusinessUnitId] is not null 
	) 
)

)
GO
GRANT SELECT ON  [dbo].[FilteredSystemUser] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSystemUser] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
