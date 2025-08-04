

--
-- report view for usersettings
--
create view dbo.[FilteredUserSettings] 
(
    [addressbooksyncinterval],
    [advancedfindstartupmode],
    [allowemailcredentials],
    [allowemailcredentialsname],
    [amdesignator],
    [autocaptureuserstatus],
    [autocreatecontactonpromote],
    [businessunitid],
    [businessunitiddsc],
    [businessunitidname],
    [calendartype],
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
    [currencyformatcode],
    [currencysymbol],
    [datavalidationmodeforexporttoexcel],
    [datavalidationmodeforexporttoexcelname],
    [dateformatcode],
    [dateformatstring],
    [dateseparator],
    [decimalsymbol],
    [defaultcalendarview],
    [defaultcountrycode],
    [defaultdashboardid],
    [defaultsearchexperience],
    [defaultsearchexperiencename],
    [emailpassword],
    [emailusername],
    [entityformmode],
    [fullnameconventioncode],
    [getstartedpanecontentenabled],
    [helplanguageid],
    [homepagearea],
    [homepagelayout],
    [homepagesubarea],
    [ignoreunsolicitedemail],
    [ignoreunsolicitedemailname],
    [incomingemailfilteringmethod],
    [incomingemailfilteringmethodname],
    [isappsforcrmalertdismissed],
    [isautodatacaptureenabled],
    [isdefaultcountrycodecheckenabled],
    [isduplicatedetectionenabledwhengoingonline],
    [isemailconversationviewenabled],
    [isguidedhelpenabled],
    [isresourcebookingexchangesyncenabled],
    [issendasallowed],
    [lastalertsviewedtime],
    [lastalertsviewedtimeutc],
    [localeid],
    [longdateformatcode],
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
    [negativecurrencyformatcode],
    [negativeformatcode],
    [nexttrackingnumber],
    [numbergroupformat],
    [numberseparator],
    [offlinesyncinterval],
    [outlooksyncinterval],
    [paginglimit],
    [personalizationsettings],
    [pmdesignator],
    [pricingdecimalprecision],
    [reportscripterrors],
    [reportscripterrorsname],
    [resourcebookingexchangesyncversion],
    [selectedglobalfilterid],
    [showweeknumber],
    [splitviewstate],
    [synccontactcompany],
    [systemuserid],
    [timeformatcode],
    [timeformatstring],
    [timeseparator],
    [timezonebias],
    [timezonecode],
    [timezonedaylightbias],
    [timezonedaylightday],
    [timezonedaylightdayofweek],
    [timezonedaylighthour],
    [timezonedaylightminute],
    [timezonedaylightmonth],
    [timezonedaylightsecond],
    [timezonedaylightyear],
    [timezonestandardbias],
    [timezonestandardday],
    [timezonestandarddayofweek],
    [timezonestandardhour],
    [timezonestandardminute],
    [timezonestandardmonth],
    [timezonestandardsecond],
    [timezonestandardyear],
    [trackingtokenid],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [uilanguageid],
    [usecrmformforappointment],
    [usecrmformforcontact],
    [usecrmformforemail],
    [usecrmformfortask],
    [useimagestrips],
    [userprofile],
    [versionnumber],
    [visualizationpanelayout],
    [visualizationpanelayoutname],
    [workdaystarttime],
    [workdaystoptime]
) with view_metadata as
select
    [UserSettings].[AddressBookSyncInterval],
    [UserSettings].[AdvancedFindStartupMode],
    [UserSettings].[AllowEmailCredentials],
    AllowEmailCredentialsPLTable.Value,
    [UserSettings].[AMDesignator],
    [UserSettings].[AutoCaptureUserStatus],
    [UserSettings].[AutoCreateContactOnPromote],
    [UserSettings].[BusinessUnitId],
    --[UserSettings].[BusinessUnitIdDsc]
    0,
    [UserSettings].[BusinessUnitIdName],
    [UserSettings].[CalendarType],
    [UserSettings].[CreatedBy],
    --[UserSettings].[CreatedByDsc]
    0,
    [UserSettings].[CreatedByName],
    [UserSettings].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UserSettings].[CreatedOn],
			us.TimeZoneCode),
        [UserSettings].[CreatedOn],
    [UserSettings].[CreatedOnBehalfBy],
    --[UserSettings].[CreatedOnBehalfByDsc]
    0,
    [UserSettings].[CreatedOnBehalfByName],
    [UserSettings].[CreatedOnBehalfByYomiName],
    [UserSettings].[CurrencyDecimalPrecision],
    [UserSettings].[CurrencyFormatCode],
    [UserSettings].[CurrencySymbol],
    [UserSettings].[DataValidationModeForExportToExcel],
    DataValidationModeForExportToExcelPLTable.Value,
    [UserSettings].[DateFormatCode],
    [UserSettings].[DateFormatString],
    [UserSettings].[DateSeparator],
    [UserSettings].[DecimalSymbol],
    [UserSettings].[DefaultCalendarView],
    [UserSettings].[DefaultCountryCode],
    [UserSettings].[DefaultDashboardId],
    [UserSettings].[DefaultSearchExperience],
    DefaultSearchExperiencePLTable.Value,
    [UserSettings].[EmailPassword],
    [UserSettings].[EmailUsername],
    [UserSettings].[EntityFormMode],
    [UserSettings].[FullNameConventionCode],
    [UserSettings].[GetStartedPaneContentEnabled],
    [UserSettings].[HelpLanguageId],
    [UserSettings].[HomepageArea],
    [UserSettings].[HomepageLayout],
    [UserSettings].[HomepageSubarea],
    [UserSettings].[IgnoreUnsolicitedEmail],
    IgnoreUnsolicitedEmailPLTable.Value,
    [UserSettings].[IncomingEmailFilteringMethod],
    IncomingEmailFilteringMethodPLTable.Value,
    [UserSettings].[IsAppsForCrmAlertDismissed],
    [UserSettings].[IsAutoDataCaptureEnabled],
    [UserSettings].[IsDefaultCountryCodeCheckEnabled],
    [UserSettings].[IsDuplicateDetectionEnabledWhenGoingOnline],
    [UserSettings].[IsEmailConversationViewEnabled],
    [UserSettings].[IsGuidedHelpEnabled],
    [UserSettings].[IsResourceBookingExchangeSyncEnabled],
    [UserSettings].[IsSendAsAllowed],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UserSettings].[LastAlertsViewedTime],
			us.TimeZoneCode),
        [UserSettings].[LastAlertsViewedTime],
    [UserSettings].[LocaleId],
    [UserSettings].[LongDateFormatCode],
    [UserSettings].[ModifiedBy],
    --[UserSettings].[ModifiedByDsc]
    0,
    [UserSettings].[ModifiedByName],
    [UserSettings].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UserSettings].[ModifiedOn],
			us.TimeZoneCode),
        [UserSettings].[ModifiedOn],
    [UserSettings].[ModifiedOnBehalfBy],
    --[UserSettings].[ModifiedOnBehalfByDsc]
    0,
    [UserSettings].[ModifiedOnBehalfByName],
    [UserSettings].[ModifiedOnBehalfByYomiName],
    [UserSettings].[NegativeCurrencyFormatCode],
    [UserSettings].[NegativeFormatCode],
    [UserSettings].[NextTrackingNumber],
    [UserSettings].[NumberGroupFormat],
    [UserSettings].[NumberSeparator],
    [UserSettings].[OfflineSyncInterval],
    [UserSettings].[OutlookSyncInterval],
    [UserSettings].[PagingLimit],
    [UserSettings].[PersonalizationSettings],
    [UserSettings].[PMDesignator],
    [UserSettings].[PricingDecimalPrecision],
    [UserSettings].[ReportScriptErrors],
    ReportScriptErrorsPLTable.Value,
    [UserSettings].[ResourceBookingExchangeSyncVersion],
    [UserSettings].[SelectedGlobalFilterId],
    [UserSettings].[ShowWeekNumber],
    [UserSettings].[SplitViewState],
    [UserSettings].[SyncContactCompany],
    [UserSettings].[SystemUserId],
    [UserSettings].[TimeFormatCode],
    [UserSettings].[TimeFormatString],
    [UserSettings].[TimeSeparator],
    [UserSettings].[TimeZoneBias],
    [UserSettings].[TimeZoneCode],
    [UserSettings].[TimeZoneDaylightBias],
    [UserSettings].[TimeZoneDaylightDay],
    [UserSettings].[TimeZoneDaylightDayOfWeek],
    [UserSettings].[TimeZoneDaylightHour],
    [UserSettings].[TimeZoneDaylightMinute],
    [UserSettings].[TimeZoneDaylightMonth],
    [UserSettings].[TimeZoneDaylightSecond],
    [UserSettings].[TimeZoneDaylightYear],
    [UserSettings].[TimeZoneStandardBias],
    [UserSettings].[TimeZoneStandardDay],
    [UserSettings].[TimeZoneStandardDayOfWeek],
    [UserSettings].[TimeZoneStandardHour],
    [UserSettings].[TimeZoneStandardMinute],
    [UserSettings].[TimeZoneStandardMonth],
    [UserSettings].[TimeZoneStandardSecond],
    [UserSettings].[TimeZoneStandardYear],
    [UserSettings].[TrackingTokenId],
    [UserSettings].[TransactionCurrencyId],
    --[UserSettings].[TransactionCurrencyIdDsc]
    0,
    [UserSettings].[TransactionCurrencyIdName],
    [UserSettings].[UILanguageId],
    [UserSettings].[UseCrmFormForAppointment],
    [UserSettings].[UseCrmFormForContact],
    [UserSettings].[UseCrmFormForEmail],
    [UserSettings].[UseCrmFormForTask],
    [UserSettings].[UseImageStrips],
    [UserSettings].[UserProfile],
    [UserSettings].[VersionNumber],
    [UserSettings].[VisualizationPaneLayout],
    VisualizationPaneLayoutPLTable.Value,
    [UserSettings].[WorkdayStartTime],
    [UserSettings].[WorkdayStopTime]
from UserSettings
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AllowEmailCredentialsPLTable] on 
		([AllowEmailCredentialsPLTable].AttributeName = 'allowemailcredentials'
		and [AllowEmailCredentialsPLTable].ObjectTypeCode = 150
		and [AllowEmailCredentialsPLTable].AttributeValue = [UserSettings].[AllowEmailCredentials]
		and [AllowEmailCredentialsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DataValidationModeForExportToExcelPLTable] on 
		([DataValidationModeForExportToExcelPLTable].AttributeName = 'datavalidationmodeforexporttoexcel'
		and [DataValidationModeForExportToExcelPLTable].ObjectTypeCode = 150
		and [DataValidationModeForExportToExcelPLTable].AttributeValue = [UserSettings].[DataValidationModeForExportToExcel]
		and [DataValidationModeForExportToExcelPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DefaultSearchExperiencePLTable] on 
		([DefaultSearchExperiencePLTable].AttributeName = 'defaultsearchexperience'
		and [DefaultSearchExperiencePLTable].ObjectTypeCode = 150
		and [DefaultSearchExperiencePLTable].AttributeValue = [UserSettings].[DefaultSearchExperience]
		and [DefaultSearchExperiencePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IgnoreUnsolicitedEmailPLTable] on 
		([IgnoreUnsolicitedEmailPLTable].AttributeName = 'ignoreunsolicitedemail'
		and [IgnoreUnsolicitedEmailPLTable].ObjectTypeCode = 150
		and [IgnoreUnsolicitedEmailPLTable].AttributeValue = [UserSettings].[IgnoreUnsolicitedEmail]
		and [IgnoreUnsolicitedEmailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IncomingEmailFilteringMethodPLTable] on 
		([IncomingEmailFilteringMethodPLTable].AttributeName = 'incomingemailfilteringmethod'
		and [IncomingEmailFilteringMethodPLTable].ObjectTypeCode = 150
		and [IncomingEmailFilteringMethodPLTable].AttributeValue = [UserSettings].[IncomingEmailFilteringMethod]
		and [IncomingEmailFilteringMethodPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ReportScriptErrorsPLTable] on 
		([ReportScriptErrorsPLTable].AttributeName = 'reportscripterrors'
		and [ReportScriptErrorsPLTable].ObjectTypeCode = 150
		and [ReportScriptErrorsPLTable].AttributeValue = [UserSettings].[ReportScriptErrors]
		and [ReportScriptErrorsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [VisualizationPaneLayoutPLTable] on 
		([VisualizationPaneLayoutPLTable].AttributeName = 'visualizationpanelayout'
		and [VisualizationPaneLayoutPLTable].ObjectTypeCode = 150
		and [VisualizationPaneLayoutPLTable].AttributeValue = [UserSettings].[VisualizationPaneLayout]
		and [VisualizationPaneLayoutPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(150) pdm
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
		[UserSettings].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 150)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[UserSettings].[BusinessUnitId] is not null 
	) 
)

)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUserSettings] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUserSettings] TO [CRMReaderRole]
    AS [dbo];

