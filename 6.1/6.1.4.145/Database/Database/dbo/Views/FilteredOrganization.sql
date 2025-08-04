

--
-- report view for organization
--
create view dbo.[FilteredOrganization] (
    [acknowledgementtemplateid],
    [acknowledgementtemplateiddsc],
    [acknowledgementtemplateidname],
    [allowaddressbooksyncs],
    [allowautoresponsecreation],
    [allowautounsubscribe],
    [allowautounsubscribeacknowledgement],
    [allowclientmessagebarad],
    [allowentityonlyaudit],
    [allowmarketingemailexecution],
    [allowofflinescheduledsyncs],
    [allowoutlookscheduledsyncs],
    [allowunresolvedpartiesonemailsend],
    [allowuserformmodepreference],
    [allowusersseeappdownloadmessage],
    [allowwebexcelexport],
    [amdesignator],
    [basecurrencyid],
    [basecurrencyiddsc],
    [basecurrencyidname],
    [basecurrencyprecision],
    [basecurrencysymbol],
    [bingmapsapikey],
    [blockedattachments],
    [bulkoperationprefix],
    [businessclosurecalendarid],
    [calendartype],
    [campaignprefix],
    [cascadestatusupdate],
    [caseprefix],
    [contractprefix],
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
    [currencydecimalprecision],
    [currencydisplayoption],
    [currencyformatcode],
    [currencyformatcodename],
    [currencysymbol],
    [currentbulkoperationnumber],
    [currentcampaignnumber],
    [currentcasenumber],
    [currentcontractnumber],
    [currentimportsequencenumber],
    [currentinvoicenumber],
    [currentkbnumber],
    [currentordernumber],
    [currentparsedtablenumber],
    [currentquotenumber],
    [dateformatcode],
    [dateformatcodename],
    [dateformatstring],
    [dateseparator],
    [decimalsymbol],
    [defaultcountrycode],
    [defaultemailserverprofileid],
    [defaultemailserverprofileidname],
    [defaultemailsettings],
    [defaultrecurrenceendrangetype],
    [defaultrecurrenceendrangetypename],
    [disabledreason],
    [disablesocialcare],
    [emailconnectionchannel],
    [emailcorrelationenabled],
    [emailsendpollingperiod],
    [enablebingmapsintegration],
    [enablepricingoncreate],
    [enablesmartmatching],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [expiresubscriptionsindays],
    [featureset],
    [fiscalcalendarstart],
    [fiscalcalendarstartutc],
    [fiscalperiodformat],
    [fiscalperiodformatperiod],
    [fiscalperiodformatperiodname],
    [fiscalperiodtype],
    [fiscalsettingsupdated],
    [fiscalsettingsupdatedname],
    [fiscalyeardisplaycode],
    [fiscalyearformat],
    [fiscalyearformatprefix],
    [fiscalyearformatprefixname],
    [fiscalyearformatsuffix],
    [fiscalyearformatsuffixname],
    [fiscalyearformatyear],
    [fiscalyearformatyearname],
    [fiscalyearperiodconnect],
    [fullnameconventioncode],
    [fullnameconventioncodename],
    [futureexpansionwindow],
    [generatealertsforerrors],
    [generatealertsforinformation],
    [generatealertsforwarnings],
    [getstartedpanecontentenabled],
    [goalrollupexpirytime],
    [goalrollupfrequency],
    [grantaccesstonetworkservice],
    [hashdeltasubjectcount],
    [hashfilterkeywords],
    [hashmaxcount],
    [hashminaddresscount],
    [ignoreinternalemail],
    [incomingemailexchangeemailretrievalbatchsize],
    [initialversion],
    [integrationuserid],
    [invoiceprefix],
    [isappmode],
    [isauditenabled],
    [isautosaveenabled],
    [isdefaultcountrycodecheckenabled],
    [isdisabled],
    [isdisabledname],
    [isduplicatedetectionenabled],
    [isduplicatedetectionenabledforimport],
    [isduplicatedetectionenabledforofflinesync],
    [isduplicatedetectionenabledforonlinecreateupdate],
    [isemailserverprofilecontentfilteringenabled],
    [isfiscalperiodmonthbased],
    [ismailboxforcedunlockingenabled],
    [ismailboxinactivebackoffenabled],
    [ispresenceenabled],
    [ispresenceenabledname],
    [isregistered],
    [isregisteredname],
    [issopintegrationenabled],
    [isuseraccessauditenabled],
    [isvintegrationcode],
    [kbprefix],
    [languagecode],
    [languagecodename],
    [localeid],
    [longdateformatcode],
    [maxappointmentdurationdays],
    [maximumactivebusinessprocessflowsallowedperentity],
    [maximumtrackingnumber],
    [maxrecordsforexporttoexcel],
    [maxrecordsforlookupfilters],
    [maxuploadfilesize],
    [minaddressbooksyncinterval],
    [minofflinesyncinterval],
    [minoutlooksyncinterval],
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
    [negativecurrencyformatcode],
    [negativeformatcode],
    [negativeformatcodename],
    [nexttrackingnumber],
    [notifymailboxownerofemailserverlevelalerts],
    [numberformat],
    [numbergroupformat],
    [numberseparator],
    [orderprefix],
    [organizationid],
    [orgdborgsettings],
    [parsedtablecolumnprefix],
    [parsedtableprefix],
    [pastexpansionwindow],
    [picture],
    [pinpointlanguagecode],
    [pmdesignator],
    [pricingdecimalprecision],
    [privilegeusergroupid],
    [privreportinggroupid],
    [privreportinggroupname],
    [quickfindrecordlimitenabled],
    [quoteprefix],
    [recurrencedefaultnumberofoccurrences],
    [recurrenceexpansionjobbatchinterval],
    [recurrenceexpansionjobbatchsize],
    [recurrenceexpansionsynchcreatemax],
    [referencesitemapxml],
    [rendersecureiframeforemail],
    [reportinggroupid],
    [reportinggroupname],
    [reportscripterrors],
    [reportscripterrorsname],
    [requireapprovalforqueueemail],
    [requireapprovalforuseremail],
    [restrictstatusupdate],
    [sampledataimportid],
    [schemanameprefix],
    [sharetopreviousowneronassign],
    [showweeknumber],
    [showweeknumbername],
    [signupoutlookdownloadfwlink],
    [sitemapxml],
    [socialinsightsinstance],
    [socialinsightstermsaccepted],
    [sortid],
    [sqlaccessgroupid],
    [sqlaccessgroupname],
    [sqmenabled],
    [supportuserid],
    [suppresssla],
    [systemuserid],
    [tagmaxaggressivecycles],
    [tagpollingperiod],
    [timeformatcode],
    [timeformatcodename],
    [timeformatstring],
    [timeseparator],
    [timezoneruleversionnumber],
    [tokenexpiry],
    [trackingprefix],
    [trackingtokenidbase],
    [trackingtokeniddigits],
    [uniquespecifierlength],
    [useraccessauditinginterval],
    [usereadform],
    [usergroupid],
    [useskypeprotocol],
    [utcconversiontimezonecode],
    [v3calloutconfighash],
    [versionnumber],
    [weekstartdaycode],
    [weekstartdaycodename],
    [yammergroupid],
    [yammernetworkpermalink],
    [yammeroauthaccesstokenexpired],
    [yammerpostmethod],
    [yearstartweekcode]
) with view_metadata as
select
    [Organization].[AcknowledgementTemplateId],
    --[Organization].[AcknowledgementTemplateIdDsc]
    0,
    [Organization].[AcknowledgementTemplateIdName],
    [Organization].[AllowAddressBookSyncs],
    [Organization].[AllowAutoResponseCreation],
    [Organization].[AllowAutoUnsubscribe],
    [Organization].[AllowAutoUnsubscribeAcknowledgement],
    [Organization].[AllowClientMessageBarAd],
    [Organization].[AllowEntityOnlyAudit],
    [Organization].[AllowMarketingEmailExecution],
    [Organization].[AllowOfflineScheduledSyncs],
    [Organization].[AllowOutlookScheduledSyncs],
    [Organization].[AllowUnresolvedPartiesOnEmailSend],
    [Organization].[AllowUserFormModePreference],
    [Organization].[AllowUsersSeeAppdownloadMessage],
    [Organization].[AllowWebExcelExport],
    [Organization].[AMDesignator],
    [Organization].[BaseCurrencyId],
    --[Organization].[BaseCurrencyIdDsc]
    0,
    [Organization].[BaseCurrencyIdName],
    [Organization].[BaseCurrencyPrecision],
    [Organization].[BaseCurrencySymbol],
    [Organization].[BingMapsApiKey],
    [Organization].[BlockedAttachments],
    [Organization].[BulkOperationPrefix],
    [Organization].[BusinessClosureCalendarId],
    [Organization].[CalendarType],
    [Organization].[CampaignPrefix],
    [Organization].[CascadeStatusUpdate],
    [Organization].[CasePrefix],
    [Organization].[ContractPrefix],
    [Organization].[CreatedBy],
    --[Organization].[CreatedByDsc]
    0,
    [Organization].[CreatedByName],
    [Organization].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Organization].[CreatedOn],
			us.TimeZoneCode),
        [Organization].[CreatedOn],
    [Organization].[CreatedOnBehalfBy],
    --[Organization].[CreatedOnBehalfByDsc]
    0,
    [Organization].[CreatedOnBehalfByName],
    [Organization].[CreatedOnBehalfByYomiName],
    [Organization].[CurrencyDecimalPrecision],
    [Organization].[CurrencyDisplayOption],
    [Organization].[CurrencyFormatCode],
    CurrencyFormatCodePLTable.Value,
    [Organization].[CurrencySymbol],
    [Organization].[CurrentBulkOperationNumber],
    [Organization].[CurrentCampaignNumber],
    [Organization].[CurrentCaseNumber],
    [Organization].[CurrentContractNumber],
    [Organization].[CurrentImportSequenceNumber],
    [Organization].[CurrentInvoiceNumber],
    [Organization].[CurrentKbNumber],
    [Organization].[CurrentOrderNumber],
    [Organization].[CurrentParsedTableNumber],
    [Organization].[CurrentQuoteNumber],
    [Organization].[DateFormatCode],
    DateFormatCodePLTable.Value,
    [Organization].[DateFormatString],
    [Organization].[DateSeparator],
    [Organization].[DecimalSymbol],
    [Organization].[DefaultCountryCode],
    [Organization].[DefaultEmailServerProfileId],
    [Organization].[DefaultEmailServerProfileIdName],
    [Organization].[DefaultEmailSettings],
    [Organization].[DefaultRecurrenceEndRangeType],
    DefaultRecurrenceEndRangeTypePLTable.Value,
    [Organization].[DisabledReason],
    [Organization].[DisableSocialCare],
    [Organization].[EmailConnectionChannel],
    [Organization].[EmailCorrelationEnabled],
    [Organization].[EmailSendPollingPeriod],
    [Organization].[EnableBingMapsIntegration],
    [Organization].[EnablePricingOnCreate],
    [Organization].[EnableSmartMatching],
    cast([Organization].[EntityImage] as varbinary(max)),
    [Organization].[EntityImageId],
    [Organization].[EntityImage_Timestamp],
    [Organization].[EntityImage_URL],
    [Organization].[ExpireSubscriptionsInDays],
    [Organization].[FeatureSet],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Organization].[FiscalCalendarStart],
			us.TimeZoneCode),
        [Organization].[FiscalCalendarStart],
    [Organization].[FiscalPeriodFormat],
    [Organization].[FiscalPeriodFormatPeriod],
    FiscalPeriodFormatPeriodPLTable.Value,
    [Organization].[FiscalPeriodType],
    [Organization].[FiscalSettingsUpdated],
    FiscalSettingsUpdatedPLTable.Value,
    [Organization].[FiscalYearDisplayCode],
    [Organization].[FiscalYearFormat],
    [Organization].[FiscalYearFormatPrefix],
    FiscalYearFormatPrefixPLTable.Value,
    [Organization].[FiscalYearFormatSuffix],
    FiscalYearFormatSuffixPLTable.Value,
    [Organization].[FiscalYearFormatYear],
    FiscalYearFormatYearPLTable.Value,
    [Organization].[FiscalYearPeriodConnect],
    [Organization].[FullNameConventionCode],
    FullNameConventionCodePLTable.Value,
    [Organization].[FutureExpansionWindow],
    [Organization].[GenerateAlertsForErrors],
    [Organization].[GenerateAlertsForInformation],
    [Organization].[GenerateAlertsForWarnings],
    [Organization].[GetStartedPaneContentEnabled],
    [Organization].[GoalRollupExpiryTime],
    [Organization].[GoalRollupFrequency],
    [Organization].[GrantAccessToNetworkService],
    [Organization].[HashDeltaSubjectCount],
    [Organization].[HashFilterKeywords],
    [Organization].[HashMaxCount],
    [Organization].[HashMinAddressCount],
    [Organization].[IgnoreInternalEmail],
    [Organization].[IncomingEmailExchangeEmailRetrievalBatchSize],
    [Organization].[InitialVersion],
    [Organization].[IntegrationUserId],
    [Organization].[InvoicePrefix],
    [Organization].[IsAppMode],
    [Organization].[IsAuditEnabled],
    [Organization].[IsAutoSaveEnabled],
    [Organization].[IsDefaultCountryCodeCheckEnabled],
    [Organization].[IsDisabled],
    IsDisabledPLTable.Value,
    [Organization].[IsDuplicateDetectionEnabled],
    [Organization].[IsDuplicateDetectionEnabledForImport],
    [Organization].[IsDuplicateDetectionEnabledForOfflineSync],
    [Organization].[IsDuplicateDetectionEnabledForOnlineCreateUpdate],
    [Organization].[IsEmailServerProfileContentFilteringEnabled],
    [Organization].[IsFiscalPeriodMonthBased],
    [Organization].[IsMailboxForcedUnlockingEnabled],
    [Organization].[IsMailboxInactiveBackoffEnabled],
    [Organization].[IsPresenceEnabled],
    IsPresenceEnabledPLTable.Value,
    [Organization].[IsRegistered],
    IsRegisteredPLTable.Value,
    [Organization].[IsSOPIntegrationEnabled],
    [Organization].[IsUserAccessAuditEnabled],
    [Organization].[ISVIntegrationCode],
    [Organization].[KbPrefix],
    [Organization].[LanguageCode],
    LanguageCodePLTable.Value,
    [Organization].[LocaleId],
    [Organization].[LongDateFormatCode],
    [Organization].[MaxAppointmentDurationDays],
    [Organization].[MaximumActiveBusinessProcessFlowsAllowedPerEntity],
    [Organization].[MaximumTrackingNumber],
    [Organization].[MaxRecordsForExportToExcel],
    [Organization].[MaxRecordsForLookupFilters],
    [Organization].[MaxUploadFileSize],
    [Organization].[MinAddressBookSyncInterval],
    [Organization].[MinOfflineSyncInterval],
    [Organization].[MinOutlookSyncInterval],
    [Organization].[ModifiedBy],
    --[Organization].[ModifiedByDsc]
    0,
    [Organization].[ModifiedByName],
    [Organization].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Organization].[ModifiedOn],
			us.TimeZoneCode),
        [Organization].[ModifiedOn],
    [Organization].[ModifiedOnBehalfBy],
    --[Organization].[ModifiedOnBehalfByDsc]
    0,
    [Organization].[ModifiedOnBehalfByName],
    [Organization].[ModifiedOnBehalfByYomiName],
    [Organization].[Name],
    [Organization].[NegativeCurrencyFormatCode],
    [Organization].[NegativeFormatCode],
    NegativeFormatCodePLTable.Value,
    [Organization].[NextTrackingNumber],
    [Organization].[NotifyMailboxOwnerOfEmailServerLevelAlerts],
    [Organization].[NumberFormat],
    [Organization].[NumberGroupFormat],
    [Organization].[NumberSeparator],
    [Organization].[OrderPrefix],
    [Organization].[OrganizationId],
    [Organization].[OrgDbOrgSettings],
    [Organization].[ParsedTableColumnPrefix],
    [Organization].[ParsedTablePrefix],
    [Organization].[PastExpansionWindow],
    [Organization].[Picture],
    [Organization].[PinpointLanguageCode],
    [Organization].[PMDesignator],
    [Organization].[PricingDecimalPrecision],
    [Organization].[PrivilegeUserGroupId],
    [Organization].[PrivReportingGroupId],
    [Organization].[PrivReportingGroupName],
    [Organization].[QuickFindRecordLimitEnabled],
    [Organization].[QuotePrefix],
    [Organization].[RecurrenceDefaultNumberOfOccurrences],
    [Organization].[RecurrenceExpansionJobBatchInterval],
    [Organization].[RecurrenceExpansionJobBatchSize],
    [Organization].[RecurrenceExpansionSynchCreateMax],
    [Organization].[ReferenceSiteMapXml],
    [Organization].[RenderSecureIFrameForEmail],
    [Organization].[ReportingGroupId],
    [Organization].[ReportingGroupName],
    [Organization].[ReportScriptErrors],
    ReportScriptErrorsPLTable.Value,
    [Organization].[RequireApprovalForQueueEmail],
    [Organization].[RequireApprovalForUserEmail],
    [Organization].[RestrictStatusUpdate],
    [Organization].[SampleDataImportId],
    [Organization].[SchemaNamePrefix],
    [Organization].[ShareToPreviousOwnerOnAssign],
    [Organization].[ShowWeekNumber],
    ShowWeekNumberPLTable.Value,
    [Organization].[SignupOutlookDownloadFWLink],
    [Organization].[SiteMapXml],
    [Organization].[SocialInsightsInstance],
    [Organization].[SocialInsightsTermsAccepted],
    [Organization].[SortId],
    [Organization].[SqlAccessGroupId],
    [Organization].[SqlAccessGroupName],
    [Organization].[SQMEnabled],
    [Organization].[SupportUserId],
    [Organization].[SuppressSLA],
    [Organization].[SystemUserId],
    [Organization].[TagMaxAggressiveCycles],
    [Organization].[TagPollingPeriod],
    [Organization].[TimeFormatCode],
    TimeFormatCodePLTable.Value,
    [Organization].[TimeFormatString],
    [Organization].[TimeSeparator],
    [Organization].[TimeZoneRuleVersionNumber],
    [Organization].[TokenExpiry],
    [Organization].[TrackingPrefix],
    [Organization].[TrackingTokenIdBase],
    [Organization].[TrackingTokenIdDigits],
    [Organization].[UniqueSpecifierLength],
    [Organization].[UserAccessAuditingInterval],
    [Organization].[UseReadForm],
    [Organization].[UserGroupId],
    [Organization].[UseSkypeProtocol],
    [Organization].[UTCConversionTimeZoneCode],
    [Organization].[V3CalloutConfigHash],
    [Organization].[VersionNumber],
    [Organization].[WeekStartDayCode],
    WeekStartDayCodePLTable.Value,
    [Organization].[YammerGroupId],
    [Organization].[YammerNetworkPermalink],
    [Organization].[YammerOAuthAccessTokenExpired],
    [Organization].[YammerPostMethod],
    [Organization].[YearStartWeekCode]
from Organization
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [CurrencyFormatCodePLTable] on 
		([CurrencyFormatCodePLTable].AttributeName = 'currencyformatcode'
		and [CurrencyFormatCodePLTable].ObjectTypeCode = 1019
		and [CurrencyFormatCodePLTable].AttributeValue = [Organization].[CurrencyFormatCode]
		and [CurrencyFormatCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DateFormatCodePLTable] on 
		([DateFormatCodePLTable].AttributeName = 'dateformatcode'
		and [DateFormatCodePLTable].ObjectTypeCode = 1019
		and [DateFormatCodePLTable].AttributeValue = [Organization].[DateFormatCode]
		and [DateFormatCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DefaultRecurrenceEndRangeTypePLTable] on 
		([DefaultRecurrenceEndRangeTypePLTable].AttributeName = 'defaultrecurrenceendrangetype'
		and [DefaultRecurrenceEndRangeTypePLTable].ObjectTypeCode = 1019
		and [DefaultRecurrenceEndRangeTypePLTable].AttributeValue = [Organization].[DefaultRecurrenceEndRangeType]
		and [DefaultRecurrenceEndRangeTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FiscalPeriodFormatPeriodPLTable] on 
		([FiscalPeriodFormatPeriodPLTable].AttributeName = 'fiscalperiodformatperiod'
		and [FiscalPeriodFormatPeriodPLTable].ObjectTypeCode = 1019
		and [FiscalPeriodFormatPeriodPLTable].AttributeValue = [Organization].[FiscalPeriodFormatPeriod]
		and [FiscalPeriodFormatPeriodPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FiscalSettingsUpdatedPLTable] on 
		([FiscalSettingsUpdatedPLTable].AttributeName = 'fiscalsettingsupdated'
		and [FiscalSettingsUpdatedPLTable].ObjectTypeCode = 1019
		and [FiscalSettingsUpdatedPLTable].AttributeValue = [Organization].[FiscalSettingsUpdated]
		and [FiscalSettingsUpdatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FiscalYearFormatPrefixPLTable] on 
		([FiscalYearFormatPrefixPLTable].AttributeName = 'fiscalyearformatprefix'
		and [FiscalYearFormatPrefixPLTable].ObjectTypeCode = 1019
		and [FiscalYearFormatPrefixPLTable].AttributeValue = [Organization].[FiscalYearFormatPrefix]
		and [FiscalYearFormatPrefixPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FiscalYearFormatSuffixPLTable] on 
		([FiscalYearFormatSuffixPLTable].AttributeName = 'fiscalyearformatsuffix'
		and [FiscalYearFormatSuffixPLTable].ObjectTypeCode = 1019
		and [FiscalYearFormatSuffixPLTable].AttributeValue = [Organization].[FiscalYearFormatSuffix]
		and [FiscalYearFormatSuffixPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FiscalYearFormatYearPLTable] on 
		([FiscalYearFormatYearPLTable].AttributeName = 'fiscalyearformatyear'
		and [FiscalYearFormatYearPLTable].ObjectTypeCode = 1019
		and [FiscalYearFormatYearPLTable].AttributeValue = [Organization].[FiscalYearFormatYear]
		and [FiscalYearFormatYearPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FullNameConventionCodePLTable] on 
		([FullNameConventionCodePLTable].AttributeName = 'fullnameconventioncode'
		and [FullNameConventionCodePLTable].ObjectTypeCode = 1019
		and [FullNameConventionCodePLTable].AttributeValue = [Organization].[FullNameConventionCode]
		and [FullNameConventionCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsDisabledPLTable] on 
		([IsDisabledPLTable].AttributeName = 'isdisabled'
		and [IsDisabledPLTable].ObjectTypeCode = 1019
		and [IsDisabledPLTable].AttributeValue = [Organization].[IsDisabled]
		and [IsDisabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPresenceEnabledPLTable] on 
		([IsPresenceEnabledPLTable].AttributeName = 'ispresenceenabled'
		and [IsPresenceEnabledPLTable].ObjectTypeCode = 1019
		and [IsPresenceEnabledPLTable].AttributeValue = [Organization].[IsPresenceEnabled]
		and [IsPresenceEnabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegisteredPLTable] on 
		([IsRegisteredPLTable].AttributeName = 'isregistered'
		and [IsRegisteredPLTable].ObjectTypeCode = 1019
		and [IsRegisteredPLTable].AttributeValue = [Organization].[IsRegistered]
		and [IsRegisteredPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LanguageCodePLTable] on 
		([LanguageCodePLTable].AttributeName = 'languagecode'
		and [LanguageCodePLTable].ObjectTypeCode = 1019
		and [LanguageCodePLTable].AttributeValue = [Organization].[LanguageCode]
		and [LanguageCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [NegativeFormatCodePLTable] on 
		([NegativeFormatCodePLTable].AttributeName = 'negativeformatcode'
		and [NegativeFormatCodePLTable].ObjectTypeCode = 1019
		and [NegativeFormatCodePLTable].AttributeValue = [Organization].[NegativeFormatCode]
		and [NegativeFormatCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ReportScriptErrorsPLTable] on 
		([ReportScriptErrorsPLTable].AttributeName = 'reportscripterrors'
		and [ReportScriptErrorsPLTable].ObjectTypeCode = 1019
		and [ReportScriptErrorsPLTable].AttributeValue = [Organization].[ReportScriptErrors]
		and [ReportScriptErrorsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShowWeekNumberPLTable] on 
		([ShowWeekNumberPLTable].AttributeName = 'showweeknumber'
		and [ShowWeekNumberPLTable].ObjectTypeCode = 1019
		and [ShowWeekNumberPLTable].AttributeValue = [Organization].[ShowWeekNumber]
		and [ShowWeekNumberPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TimeFormatCodePLTable] on 
		([TimeFormatCodePLTable].AttributeName = 'timeformatcode'
		and [TimeFormatCodePLTable].ObjectTypeCode = 1019
		and [TimeFormatCodePLTable].AttributeValue = [Organization].[TimeFormatCode]
		and [TimeFormatCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [WeekStartDayCodePLTable] on 
		([WeekStartDayCodePLTable].AttributeName = 'weekstartdaycode'
		and [WeekStartDayCodePLTable].ObjectTypeCode = 1019
		and [WeekStartDayCodePLTable].AttributeValue = [Organization].[WeekStartDayCode]
		and [WeekStartDayCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1019) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Organization].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOrganization] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOrganization] TO [CRMReaderRole]
    AS [dbo];

