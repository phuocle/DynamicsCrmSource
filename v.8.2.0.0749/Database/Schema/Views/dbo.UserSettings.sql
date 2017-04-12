SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for UserSettings
--
create view [dbo].[UserSettings]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [BusinessUnitIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [SystemUserId],
    [BusinessUnitId],
    [HomepageArea],
    [PagingLimit],
    [HomepageSubarea],
    [DefaultCalendarView],
    [WorkdayStartTime],
    [WorkdayStopTime],
    [IgnoreUnsolicitedEmail],
    [TimeZoneBias],
    [TimeZoneStandardBias],
    [TimeZoneDaylightBias],
    [TimeZoneCode],
    [TimeZoneStandardYear],
    [TimeZoneStandardMonth],
    [TimeZoneStandardDay],
    [TimeZoneStandardDayOfWeek],
    [TimeZoneStandardHour],
    [TimeZoneStandardMinute],
    [TimeZoneStandardSecond],
    [TimeZoneDaylightYear],
    [TimeZoneDaylightMonth],
    [TimeZoneDaylightDay],
    [TimeZoneDaylightDayOfWeek],
    [TimeZoneDaylightHour],
    [TimeZoneDaylightMinute],
    [TimeZoneDaylightSecond],
    [ModifiedBy],
    [AdvancedFindStartupMode],
    [CreatedOn],
    [TrackingTokenId],
    [NextTrackingNumber],
    [ModifiedOn],
    [CreatedBy],
    [VersionNumber],
    [UserProfile],
    [NumberSeparator],
    [OutlookSyncInterval],
    [UseCrmFormForTask],
    [PricingDecimalPrecision],
    [SyncContactCompany],
    [DateSeparator],
    [LongDateFormatCode],
    [AllowEmailCredentials],
    [FullNameConventionCode],
    [TimeSeparator],
    [TimeFormatCode],
    [NegativeFormatCode],
    [OfflineSyncInterval],
    [CalendarType],
    [CurrencySymbol],
    [TransactionCurrencyId],
    [UILanguageId],
    [UseCrmFormForContact],
    [CurrencyFormatCode],
    [AddressBookSyncInterval],
    [DecimalSymbol],
    [UseCrmFormForEmail],
    [ShowWeekNumber],
    [NegativeCurrencyFormatCode],
    [TimeFormatString],
    [EmailUsername],
    [DateFormatString],
    [ReportScriptErrors],
    [UseImageStrips],
    [EmailPassword],
    [DateFormatCode],
    [UseCrmFormForAppointment],
    [IsDuplicateDetectionEnabledWhenGoingOnline],
    [LocaleId],
    [IncomingEmailFilteringMethod],
    [CurrencyDecimalPrecision],
    [AMDesignator],
    [NumberGroupFormat],
    [HelpLanguageId],
    [PMDesignator],
    [PersonalizationSettings],
    [VisualizationPaneLayout],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [GetStartedPaneContentEnabled],
    [HomepageLayout],
    [DefaultDashboardId],
    [IsSendAsAllowed],
    [AutoCreateContactOnPromote],
    [DataValidationModeForExportToExcel],
    [EntityFormMode],
    [IsDefaultCountryCodeCheckEnabled],
    [DefaultCountryCode],
    [LastAlertsViewedTime],
    [IsGuidedHelpEnabled],
    [IsAppsForCrmAlertDismissed],
    [DefaultSearchExperience],
    [SplitViewState],
    [IsResourceBookingExchangeSyncEnabled],
    [ResourceBookingExchangeSyncVersion],
    [IsAutoDataCaptureEnabled]
) with view_metadata as
select
    -- logical attributes
    [lk_usersettingsbase_modifiedonbehalfby].[FullName],
    [lk_usersettingsbase_modifiedonbehalfby].[YomiFullName],
    [lk_usersettingsbase_createdonbehalfby].[YomiFullName],
    [lk_usersettingsbase_createdonbehalfby].[FullName],
    [business_unit_user_settings].[Name],
    [lk_usersettingsbase_modifiedby].[FullName],
    [lk_usersettingsbase_modifiedby].[YomiFullName],
    [lk_usersettingsbase_createdby].[FullName],
    [lk_usersettingsbase_createdby].[YomiFullName],
    [transactioncurrency_usersettings].[CurrencyName],

    -- physical attribute
    [UserSettingsBase].[SystemUserId],
    [UserSettingsBase].[BusinessUnitId],
    [UserSettingsBase].[HomepageArea],
    [UserSettingsBase].[PagingLimit],
    [UserSettingsBase].[HomepageSubarea],
    [UserSettingsBase].[DefaultCalendarView],
    [UserSettingsBase].[WorkdayStartTime],
    [UserSettingsBase].[WorkdayStopTime],
    [UserSettingsBase].[IgnoreUnsolicitedEmail],
    [UserSettingsBase].[TimeZoneBias],
    [UserSettingsBase].[TimeZoneStandardBias],
    [UserSettingsBase].[TimeZoneDaylightBias],
    [UserSettingsBase].[TimeZoneCode],
    [UserSettingsBase].[TimeZoneStandardYear],
    [UserSettingsBase].[TimeZoneStandardMonth],
    [UserSettingsBase].[TimeZoneStandardDay],
    [UserSettingsBase].[TimeZoneStandardDayOfWeek],
    [UserSettingsBase].[TimeZoneStandardHour],
    [UserSettingsBase].[TimeZoneStandardMinute],
    [UserSettingsBase].[TimeZoneStandardSecond],
    [UserSettingsBase].[TimeZoneDaylightYear],
    [UserSettingsBase].[TimeZoneDaylightMonth],
    [UserSettingsBase].[TimeZoneDaylightDay],
    [UserSettingsBase].[TimeZoneDaylightDayOfWeek],
    [UserSettingsBase].[TimeZoneDaylightHour],
    [UserSettingsBase].[TimeZoneDaylightMinute],
    [UserSettingsBase].[TimeZoneDaylightSecond],
    [UserSettingsBase].[ModifiedBy],
    [UserSettingsBase].[AdvancedFindStartupMode],
    [UserSettingsBase].[CreatedOn],
    [UserSettingsBase].[TrackingTokenId],
    [UserSettingsBase].[NextTrackingNumber],
    [UserSettingsBase].[ModifiedOn],
    [UserSettingsBase].[CreatedBy],
    [UserSettingsBase].[VersionNumber],
    [UserSettingsBase].[UserProfile],
    [UserSettingsBase].[NumberSeparator],
    [UserSettingsBase].[OutlookSyncInterval],
    [UserSettingsBase].[UseCrmFormForTask],
    [UserSettingsBase].[PricingDecimalPrecision],
    [UserSettingsBase].[SyncContactCompany],
    [UserSettingsBase].[DateSeparator],
    [UserSettingsBase].[LongDateFormatCode],
    [UserSettingsBase].[AllowEmailCredentials],
    [UserSettingsBase].[FullNameConventionCode],
    [UserSettingsBase].[TimeSeparator],
    [UserSettingsBase].[TimeFormatCode],
    [UserSettingsBase].[NegativeFormatCode],
    [UserSettingsBase].[OfflineSyncInterval],
    [UserSettingsBase].[CalendarType],
    [UserSettingsBase].[CurrencySymbol],
    [UserSettingsBase].[TransactionCurrencyId],
    [UserSettingsBase].[UILanguageId],
    [UserSettingsBase].[UseCrmFormForContact],
    [UserSettingsBase].[CurrencyFormatCode],
    [UserSettingsBase].[AddressBookSyncInterval],
    [UserSettingsBase].[DecimalSymbol],
    [UserSettingsBase].[UseCrmFormForEmail],
    [UserSettingsBase].[ShowWeekNumber],
    [UserSettingsBase].[NegativeCurrencyFormatCode],
    [UserSettingsBase].[TimeFormatString],
    [UserSettingsBase].[EmailUsername],
    [UserSettingsBase].[DateFormatString],
    [UserSettingsBase].[ReportScriptErrors],
    [UserSettingsBase].[UseImageStrips],
    [UserSettingsBase].[EmailPassword],
    [UserSettingsBase].[DateFormatCode],
    [UserSettingsBase].[UseCrmFormForAppointment],
    [UserSettingsBase].[IsDuplicateDetectionEnabledWhenGoingOnline],
    [UserSettingsBase].[LocaleId],
    [UserSettingsBase].[IncomingEmailFilteringMethod],
    [UserSettingsBase].[CurrencyDecimalPrecision],
    [UserSettingsBase].[AMDesignator],
    [UserSettingsBase].[NumberGroupFormat],
    [UserSettingsBase].[HelpLanguageId],
    [UserSettingsBase].[PMDesignator],
    [UserSettingsBase].[PersonalizationSettings],
    [UserSettingsBase].[VisualizationPaneLayout],
    [UserSettingsBase].[CreatedOnBehalfBy],
    [UserSettingsBase].[ModifiedOnBehalfBy],
    [UserSettingsBase].[GetStartedPaneContentEnabled],
    [UserSettingsBase].[HomepageLayout],
    [UserSettingsBase].[DefaultDashboardId],
    [UserSettingsBase].[IsSendAsAllowed],
    [UserSettingsBase].[AutoCreateContactOnPromote],
    [UserSettingsBase].[DataValidationModeForExportToExcel],
    [UserSettingsBase].[EntityFormMode],
    [UserSettingsBase].[IsDefaultCountryCodeCheckEnabled],
    [UserSettingsBase].[DefaultCountryCode],
    [UserSettingsBase].[LastAlertsViewedTime],
    [UserSettingsBase].[IsGuidedHelpEnabled],
    [UserSettingsBase].[IsAppsForCrmAlertDismissed],
    [UserSettingsBase].[DefaultSearchExperience],
    [UserSettingsBase].[SplitViewState],
    [UserSettingsBase].[IsResourceBookingExchangeSyncEnabled],
    [UserSettingsBase].[ResourceBookingExchangeSyncVersion],
    [UserSettingsBase].[IsAutoDataCaptureEnabled]
from [UserSettingsBase] 
    left join [BusinessUnitBase] [business_unit_user_settings] on ([UserSettingsBase].[BusinessUnitId] = [business_unit_user_settings].[BusinessUnitId])
    left join [SystemUserBase] [lk_usersettingsbase_createdby] with(nolock) on ([UserSettingsBase].[CreatedBy] = [lk_usersettingsbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_usersettingsbase_createdonbehalfby] with(nolock) on ([UserSettingsBase].[CreatedOnBehalfBy] = [lk_usersettingsbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_usersettingsbase_modifiedby] with(nolock) on ([UserSettingsBase].[ModifiedBy] = [lk_usersettingsbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_usersettingsbase_modifiedonbehalfby] with(nolock) on ([UserSettingsBase].[ModifiedOnBehalfBy] = [lk_usersettingsbase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_usersettings] on ([UserSettingsBase].[TransactionCurrencyId] = [transactioncurrency_usersettings].[TransactionCurrencyId])
GO
