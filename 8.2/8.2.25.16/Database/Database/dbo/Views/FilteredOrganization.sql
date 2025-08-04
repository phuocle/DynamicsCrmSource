

--
-- report view for organization
--
create view dbo.[FilteredOrganization] (
    [aciwebendpointurl],
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
    [appdesignerexperienceenabled],
    [autoapplydefaultoncasecreate],
    [autoapplydefaultoncasecreatename],
    [autoapplydefaultoncaseupdate],
    [autoapplydefaultoncaseupdatename],
    [autoapplysla],
    [azureschedulerjobcollectionname],
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
    [categoryprefix],
    [contractprefix],
    [cortanaproactiveexperienceenabled],
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
    [createproductswithoutparentinactivestate],
    [currencydecimalprecision],
    [currencydisplayoption],
    [currencyformatcode],
    [currencyformatcodename],
    [currencysymbol],
    [currentbulkoperationnumber],
    [currentcampaignnumber],
    [currentcasenumber],
    [currentcategorynumber],
    [currentcontractnumber],
    [currentimportsequencenumber],
    [currentinvoicenumber],
    [currentkanumber],
    [currentkbnumber],
    [currentordernumber],
    [currentparsedtablenumber],
    [currentquotenumber],
    [dateformatcode],
    [dateformatcodename],
    [dateformatstring],
    [dateseparator],
    [dayssincerecordlastmodifiedmaxvalue],
    [decimalsymbol],
    [defaultcountrycode],
    [defaultcrmcustomname],
    [defaultemailserverprofileid],
    [defaultemailserverprofileidname],
    [defaultemailsettings],
    [defaultmobileofflineprofileid],
    [defaultmobileofflineprofileidname],
    [defaultrecurrenceendrangetype],
    [defaultrecurrenceendrangetypename],
    [defaultthemedata],
    [delegatedadminuserid],
    [disabledreason],
    [disablesocialcare],
    [discountcalculationmethod],
    [displaynavigationtour],
    [emailconnectionchannel],
    [emailcorrelationenabled],
    [emailsendpollingperiod],
    [enablebingmapsintegration],
    [enablelpauthoring],
    [enablemicrosoftflowintegration],
    [enablepricingoncreate],
    [enablesmartmatching],
    [enforcereadonlyplugins],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [expirechangetrackingindays],
    [expiresubscriptionsindays],
    [externalbaseurl],
    [externalpartycorrelationkeys],
    [externalpartyentitysettings],
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
    [globalappendurlparametersenabled],
    [globalhelpurl],
    [globalhelpurlenabled],
    [goalrollupexpirytime],
    [goalrollupfrequency],
    [grantaccesstonetworkservice],
    [hashdeltasubjectcount],
    [hashfilterkeywords],
    [hashmaxcount],
    [hashminaddresscount],
    [highcontrastthemedata],
    [ignoreinternalemail],
    [inactivitytimeoutenabled],
    [inactivitytimeoutinmins],
    [inactivitytimeoutreminderinmins],
    [incomingemailexchangeemailretrievalbatchsize],
    [initialversion],
    [integrationuserid],
    [invoiceprefix],
    [isactioncardenabled],
    [isactivityanalysisenabled],
    [isappmode],
    [isappointmentattachmentsyncenabled],
    [isassignedtaskssyncenabled],
    [isauditenabled],
    [isautodatacaptureenabled],
    [isautosaveenabled],
    [isconflictdetectionenabledformobileclient],
    [iscontactmailingaddresssyncenabled],
    [isdefaultcountrycodecheckenabled],
    [isdelegateaccessenabled],
    [isdelveactionhubintegrationenabled],
    [isdisabled],
    [isdisabledname],
    [isduplicatedetectionenabled],
    [isduplicatedetectionenabledforimport],
    [isduplicatedetectionenabledforofflinesync],
    [isduplicatedetectionenabledforonlinecreateupdate],
    [isemailmonitoringallowed],
    [isemailserverprofilecontentfilteringenabled],
    [isenabledforallroles],
    [isexternalsearchindexenabled],
    [isfiscalperiodmonthbased],
    [isfolderautocreatedonsp],
    [isfolderbasedtrackingenabled],
    [isfulltextsearchenabled],
    [ishierarchicalsecuritymodelenabled],
    [ismailboxforcedunlockingenabled],
    [ismailboxinactivebackoffenabled],
    [ismobileclientondemandsyncenabled],
    [ismobileofflineenabled],
    [isofficegraphenabled],
    [isonedriveenabled],
    [ispresenceenabled],
    [ispresenceenabledname],
    [ispreviewenabledforactioncard],
    [ispreviewforautocaptureenabled],
    [ispreviewforemailmonitoringallowed],
    [isreadauditenabled],
    [isregistered],
    [isregisteredname],
    [isrelationshipinsightsenabled],
    [isresourcebookingexchangesyncenabled],
    [issopintegrationenabled],
    [isuseraccessauditenabled],
    [isvintegrationcode],
    [kaprefix],
    [kbprefix],
    [kmsettings],
    [languagecode],
    [languagecodename],
    [localeid],
    [longdateformatcode],
    [mailboxintermittentissueminrange],
    [mailboxpermanentissueminrange],
    [maxappointmentdurationdays],
    [maxconditionsformobileofflinefilters],
    [maxdepthforhierarchicalsecuritymodel],
    [maxfolderbasedtrackingmappings],
    [maximumactivebusinessprocessflowsallowedperentity],
    [maximumdynamicpropertiesallowed],
    [maximumentitieswithactivesla],
    [maximumslakpiperentitywithactivesla],
    [maximumtrackingnumber],
    [maxproductsinbundle],
    [maxrecordsforexporttoexcel],
    [maxrecordsforlookupfilters],
    [maxsupportedinternetexplorerversion],
    [maxuploadfilesize],
    [maxverboseloggingmailbox],
    [maxverboseloggingsynccycles],
    [minaddressbooksyncinterval],
    [minofflinesyncinterval],
    [minoutlooksyncinterval],
    [mobileofflineminlicenseprod],
    [mobileofflineminlicensetrial],
    [mobileofflinesyncinterval],
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
    [officeappsautodeploymentenabled],
    [officegraphdelveurl],
    [oobpricecalculationenabled],
    [orderprefix],
    [organizationid],
    [orgdborgsettings],
    [orginsightsenabled],
    [parsedtablecolumnprefix],
    [parsedtableprefix],
    [pastexpansionwindow],
    [picture],
    [pinpointlanguagecode],
    [plugintracelogsetting],
    [plugintracelogsettingname],
    [pmdesignator],
    [postmessagewhitelistdomains],
    [powerbifeatureenabled],
    [pricingdecimalprecision],
    [privacystatementurl],
    [privilegeusergroupid],
    [privreportinggroupid],
    [privreportinggroupname],
    [productrecommendationsenabled],
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
    [rierrorstatus],
    [sampledataimportid],
    [schemanameprefix],
    [servestaticresourcesfromazurecdn],
    [sessiontimeoutenabled],
    [sessiontimeoutinmins],
    [sessiontimeoutreminderinmins],
    [sharepointdeploymenttype],
    [sharetopreviousowneronassign],
    [showkbarticledeprecationnotification],
    [showweeknumber],
    [showweeknumbername],
    [signupoutlookdownloadfwlink],
    [sitemapxml],
    [slapausestates],
    [socialinsightsenabled],
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
    [taskbasedflowenabled],
    [textanalyticsenabled],
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
    [unresolveemailaddressifmultiplematch],
    [useinbuiltrulefordefaultpricelistselection],
    [uselegacyapplicationmetadatasync],
    [uselegacyrendering],
    [usepositionhierarchy],
    [useraccessauditinginterval],
    [usereadform],
    [usergroupid],
    [useskypeprotocol],
    [utcconversiontimezonecode],
    [v3calloutconfighash],
    [versionnumber],
    [webresourcehash],
    [weekstartdaycode],
    [weekstartdaycodename],
    [widgetproperties],
    [yammergroupid],
    [yammernetworkpermalink],
    [yammeroauthaccesstokenexpired],
    [yammerpostmethod],
    [yearstartweekcode]
) with view_metadata as
select
    [Organization].[ACIWebEndpointUrl],
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
    [Organization].[AppDesignerExperienceEnabled],
    [Organization].[AutoApplyDefaultonCaseCreate],
    AutoApplyDefaultonCaseCreatePLTable.Value,
    [Organization].[AutoApplyDefaultonCaseUpdate],
    AutoApplyDefaultonCaseUpdatePLTable.Value,
    [Organization].[AutoApplySLA],
    [Organization].[AzureSchedulerJobCollectionName],
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
    [Organization].[CategoryPrefix],
    [Organization].[ContractPrefix],
    [Organization].[CortanaProactiveExperienceEnabled],
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
    [Organization].[CreateProductsWithoutParentInActiveState],
    [Organization].[CurrencyDecimalPrecision],
    [Organization].[CurrencyDisplayOption],
    [Organization].[CurrencyFormatCode],
    CurrencyFormatCodePLTable.Value,
    [Organization].[CurrencySymbol],
    [Organization].[CurrentBulkOperationNumber],
    [Organization].[CurrentCampaignNumber],
    [Organization].[CurrentCaseNumber],
    [Organization].[CurrentCategoryNumber],
    [Organization].[CurrentContractNumber],
    [Organization].[CurrentImportSequenceNumber],
    [Organization].[CurrentInvoiceNumber],
    [Organization].[CurrentKaNumber],
    [Organization].[CurrentKbNumber],
    [Organization].[CurrentOrderNumber],
    [Organization].[CurrentParsedTableNumber],
    [Organization].[CurrentQuoteNumber],
    [Organization].[DateFormatCode],
    DateFormatCodePLTable.Value,
    [Organization].[DateFormatString],
    [Organization].[DateSeparator],
    [Organization].[DaysSinceRecordLastModifiedMaxValue],
    [Organization].[DecimalSymbol],
    [Organization].[DefaultCountryCode],
    [Organization].[DefaultCrmCustomName],
    [Organization].[DefaultEmailServerProfileId],
    [Organization].[DefaultEmailServerProfileIdName],
    [Organization].[DefaultEmailSettings],
    [Organization].[DefaultMobileOfflineProfileId],
    [Organization].[DefaultMobileOfflineProfileIdName],
    [Organization].[DefaultRecurrenceEndRangeType],
    DefaultRecurrenceEndRangeTypePLTable.Value,
    [Organization].[DefaultThemeData],
    [Organization].[DelegatedAdminUserId],
    [Organization].[DisabledReason],
    [Organization].[DisableSocialCare],
    [Organization].[DiscountCalculationMethod],
    [Organization].[DisplayNavigationTour],
    [Organization].[EmailConnectionChannel],
    [Organization].[EmailCorrelationEnabled],
    [Organization].[EmailSendPollingPeriod],
    [Organization].[EnableBingMapsIntegration],
    [Organization].[EnableLPAuthoring],
    [Organization].[EnableMicrosoftFlowIntegration],
    [Organization].[EnablePricingOnCreate],
    [Organization].[EnableSmartMatching],
    [Organization].[EnforceReadOnlyPlugins],
    cast([Organization].[EntityImage] as varbinary(max)),
    [Organization].[EntityImageId],
    [Organization].[EntityImage_Timestamp],
    [Organization].[EntityImage_URL],
    [Organization].[ExpireChangeTrackingInDays],
    [Organization].[ExpireSubscriptionsInDays],
    [Organization].[ExternalBaseUrl],
    [Organization].[ExternalPartyCorrelationKeys],
    [Organization].[ExternalPartyEntitySettings],
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
    [Organization].[GlobalAppendUrlParametersEnabled],
    [Organization].[GlobalHelpUrl],
    [Organization].[GlobalHelpUrlEnabled],
    [Organization].[GoalRollupExpiryTime],
    [Organization].[GoalRollupFrequency],
    [Organization].[GrantAccessToNetworkService],
    [Organization].[HashDeltaSubjectCount],
    [Organization].[HashFilterKeywords],
    [Organization].[HashMaxCount],
    [Organization].[HashMinAddressCount],
    [Organization].[HighContrastThemeData],
    [Organization].[IgnoreInternalEmail],
    [Organization].[InactivityTimeoutEnabled],
    [Organization].[InactivityTimeoutInMins],
    [Organization].[InactivityTimeoutReminderInMins],
    [Organization].[IncomingEmailExchangeEmailRetrievalBatchSize],
    [Organization].[InitialVersion],
    [Organization].[IntegrationUserId],
    [Organization].[InvoicePrefix],
    [Organization].[IsActionCardEnabled],
    [Organization].[IsActivityAnalysisEnabled],
    [Organization].[IsAppMode],
    [Organization].[IsAppointmentAttachmentSyncEnabled],
    [Organization].[IsAssignedTasksSyncEnabled],
    [Organization].[IsAuditEnabled],
    [Organization].[IsAutoDataCaptureEnabled],
    [Organization].[IsAutoSaveEnabled],
    [Organization].[IsConflictDetectionEnabledForMobileClient],
    [Organization].[IsContactMailingAddressSyncEnabled],
    [Organization].[IsDefaultCountryCodeCheckEnabled],
    [Organization].[IsDelegateAccessEnabled],
    [Organization].[IsDelveActionHubIntegrationEnabled],
    [Organization].[IsDisabled],
    IsDisabledPLTable.Value,
    [Organization].[IsDuplicateDetectionEnabled],
    [Organization].[IsDuplicateDetectionEnabledForImport],
    [Organization].[IsDuplicateDetectionEnabledForOfflineSync],
    [Organization].[IsDuplicateDetectionEnabledForOnlineCreateUpdate],
    [Organization].[IsEmailMonitoringAllowed],
    [Organization].[IsEmailServerProfileContentFilteringEnabled],
    [Organization].[IsEnabledForAllRoles],
    [Organization].[IsExternalSearchIndexEnabled],
    [Organization].[IsFiscalPeriodMonthBased],
    [Organization].[IsFolderAutoCreatedonSP],
    [Organization].[IsFolderBasedTrackingEnabled],
    [Organization].[IsFullTextSearchEnabled],
    [Organization].[IsHierarchicalSecurityModelEnabled],
    [Organization].[IsMailboxForcedUnlockingEnabled],
    [Organization].[IsMailboxInactiveBackoffEnabled],
    [Organization].[IsMobileClientOnDemandSyncEnabled],
    [Organization].[IsMobileOfflineEnabled],
    [Organization].[IsOfficeGraphEnabled],
    [Organization].[IsOneDriveEnabled],
    [Organization].[IsPresenceEnabled],
    IsPresenceEnabledPLTable.Value,
    [Organization].[IsPreviewEnabledForActionCard],
    [Organization].[IsPreviewForAutoCaptureEnabled],
    [Organization].[IsPreviewForEmailMonitoringAllowed],
    [Organization].[IsReadAuditEnabled],
    [Organization].[IsRegistered],
    IsRegisteredPLTable.Value,
    [Organization].[IsRelationshipInsightsEnabled],
    [Organization].[IsResourceBookingExchangeSyncEnabled],
    [Organization].[IsSOPIntegrationEnabled],
    [Organization].[IsUserAccessAuditEnabled],
    [Organization].[ISVIntegrationCode],
    [Organization].[KaPrefix],
    [Organization].[KbPrefix],
    [Organization].[KMSettings],
    [Organization].[LanguageCode],
    LanguageCodePLTable.Value,
    [Organization].[LocaleId],
    [Organization].[LongDateFormatCode],
    [Organization].[MailboxIntermittentIssueMinRange],
    [Organization].[MailboxPermanentIssueMinRange],
    [Organization].[MaxAppointmentDurationDays],
    [Organization].[MaxConditionsForMobileOfflineFilters],
    [Organization].[MaxDepthForHierarchicalSecurityModel],
    [Organization].[MaxFolderBasedTrackingMappings],
    [Organization].[MaximumActiveBusinessProcessFlowsAllowedPerEntity],
    [Organization].[MaximumDynamicPropertiesAllowed],
    [Organization].[MaximumEntitiesWithActiveSLA],
    [Organization].[MaximumSLAKPIPerEntityWithActiveSLA],
    [Organization].[MaximumTrackingNumber],
    [Organization].[MaxProductsInBundle],
    [Organization].[MaxRecordsForExportToExcel],
    [Organization].[MaxRecordsForLookupFilters],
    [Organization].[MaxSupportedInternetExplorerVersion],
    [Organization].[MaxUploadFileSize],
    [Organization].[MaxVerboseLoggingMailbox],
    [Organization].[MaxVerboseLoggingSyncCycles],
    [Organization].[MinAddressBookSyncInterval],
    [Organization].[MinOfflineSyncInterval],
    [Organization].[MinOutlookSyncInterval],
    [Organization].[MobileOfflineMinLicenseProd],
    [Organization].[MobileOfflineMinLicenseTrial],
    [Organization].[MobileOfflineSyncInterval],
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
    [Organization].[OfficeAppsAutoDeploymentEnabled],
    [Organization].[OfficeGraphDelveUrl],
    [Organization].[OOBPriceCalculationEnabled],
    [Organization].[OrderPrefix],
    [Organization].[OrganizationId],
    [Organization].[OrgDbOrgSettings],
    [Organization].[OrgInsightsEnabled],
    [Organization].[ParsedTableColumnPrefix],
    [Organization].[ParsedTablePrefix],
    [Organization].[PastExpansionWindow],
    [Organization].[Picture],
    [Organization].[PinpointLanguageCode],
    [Organization].[PluginTraceLogSetting],
    PluginTraceLogSettingPLTable.Value,
    [Organization].[PMDesignator],
    [Organization].[PostMessageWhitelistDomains],
    [Organization].[PowerBiFeatureEnabled],
    [Organization].[PricingDecimalPrecision],
    [Organization].[PrivacyStatementUrl],
    [Organization].[PrivilegeUserGroupId],
    [Organization].[PrivReportingGroupId],
    [Organization].[PrivReportingGroupName],
    [Organization].[ProductRecommendationsEnabled],
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
    [Organization].[RiErrorStatus],
    [Organization].[SampleDataImportId],
    [Organization].[SchemaNamePrefix],
    [Organization].[ServeStaticResourcesFromAzureCDN],
    [Organization].[SessionTimeoutEnabled],
    [Organization].[SessionTimeoutInMins],
    [Organization].[SessionTimeoutReminderInMins],
    [Organization].[SharePointDeploymentType],
    [Organization].[ShareToPreviousOwnerOnAssign],
    [Organization].[ShowKBArticleDeprecationNotification],
    [Organization].[ShowWeekNumber],
    ShowWeekNumberPLTable.Value,
    [Organization].[SignupOutlookDownloadFWLink],
    [Organization].[SiteMapXml],
    [Organization].[SlaPauseStates],
    [Organization].[SocialInsightsEnabled],
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
    [Organization].[TaskBasedFlowEnabled],
    [Organization].[TextAnalyticsEnabled],
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
    [Organization].[UnresolveEmailAddressIfMultipleMatch],
    [Organization].[UseInbuiltRuleForDefaultPricelistSelection],
    [Organization].[UseLegacyApplicationMetadataSync],
    [Organization].[UseLegacyRendering],
    [Organization].[UsePositionHierarchy],
    [Organization].[UserAccessAuditingInterval],
    [Organization].[UseReadForm],
    [Organization].[UserGroupId],
    [Organization].[UseSkypeProtocol],
    [Organization].[UTCConversionTimeZoneCode],
    [Organization].[V3CalloutConfigHash],
    [Organization].[VersionNumber],
    [Organization].[WebResourceHash],
    [Organization].[WeekStartDayCode],
    WeekStartDayCodePLTable.Value,
    [Organization].[WidgetProperties],
    [Organization].[YammerGroupId],
    [Organization].[YammerNetworkPermalink],
    [Organization].[YammerOAuthAccessTokenExpired],
    [Organization].[YammerPostMethod],
    [Organization].[YearStartWeekCode]
from Organization
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AutoApplyDefaultonCaseCreatePLTable] on 
		([AutoApplyDefaultonCaseCreatePLTable].AttributeName = 'autoapplydefaultoncasecreate'
		and [AutoApplyDefaultonCaseCreatePLTable].ObjectTypeCode = 1019
		and [AutoApplyDefaultonCaseCreatePLTable].AttributeValue = [Organization].[AutoApplyDefaultonCaseCreate]
		and [AutoApplyDefaultonCaseCreatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [AutoApplyDefaultonCaseUpdatePLTable] on 
		([AutoApplyDefaultonCaseUpdatePLTable].AttributeName = 'autoapplydefaultoncaseupdate'
		and [AutoApplyDefaultonCaseUpdatePLTable].ObjectTypeCode = 1019
		and [AutoApplyDefaultonCaseUpdatePLTable].AttributeValue = [Organization].[AutoApplyDefaultonCaseUpdate]
		and [AutoApplyDefaultonCaseUpdatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
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
    left outer join StringMap [PluginTraceLogSettingPLTable] on 
		([PluginTraceLogSettingPLTable].AttributeName = 'plugintracelogsetting'
		and [PluginTraceLogSettingPLTable].ObjectTypeCode = 1019
		and [PluginTraceLogSettingPLTable].AttributeValue = [Organization].[PluginTraceLogSetting]
		and [PluginTraceLogSettingPLTable].LangId = 
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
    ON OBJECT::[dbo].[FilteredOrganization] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOrganization] TO [CRMReaderRole]
    AS [dbo];

