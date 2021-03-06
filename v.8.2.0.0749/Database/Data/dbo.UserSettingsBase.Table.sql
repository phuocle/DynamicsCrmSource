USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UserSettingsBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserSettingsBase](
	[SystemUserId] [uniqueidentifier] NOT NULL,
	[BusinessUnitId] [uniqueidentifier] NOT NULL,
	[HomepageArea] [nvarchar](200) NULL,
	[PagingLimit] [int] NULL,
	[HomepageSubarea] [nvarchar](200) NULL,
	[DefaultCalendarView] [int] NULL,
	[WorkdayStartTime] [nvarchar](5) NULL,
	[WorkdayStopTime] [nvarchar](5) NULL,
	[IgnoreUnsolicitedEmail] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_IgnoreUnsolicitedEmail]  DEFAULT ((1)),
	[TimeZoneBias] [int] NOT NULL CONSTRAINT [Set_To_Zero167]  DEFAULT ((0)),
	[TimeZoneStandardBias] [int] NOT NULL CONSTRAINT [Set_To_Zero168]  DEFAULT ((0)),
	[TimeZoneDaylightBias] [int] NOT NULL CONSTRAINT [Set_To_Zero169]  DEFAULT ((0)),
	[TimeZoneCode] [smallint] NOT NULL CONSTRAINT [Set_To_Zero170]  DEFAULT ((0)),
	[TimeZoneStandardYear] [smallint] NOT NULL CONSTRAINT [Set_To_Zero171]  DEFAULT ((0)),
	[TimeZoneStandardMonth] [smallint] NOT NULL CONSTRAINT [Set_To_Zero172]  DEFAULT ((0)),
	[TimeZoneStandardDay] [smallint] NOT NULL CONSTRAINT [Set_To_Zero173]  DEFAULT ((0)),
	[TimeZoneStandardDayOfWeek] [smallint] NOT NULL CONSTRAINT [Set_To_Zero174]  DEFAULT ((0)),
	[TimeZoneStandardHour] [smallint] NOT NULL CONSTRAINT [Set_To_Zero175]  DEFAULT ((0)),
	[TimeZoneStandardMinute] [smallint] NOT NULL CONSTRAINT [Set_To_Zero176]  DEFAULT ((0)),
	[TimeZoneStandardSecond] [smallint] NOT NULL CONSTRAINT [Set_To_Zero177]  DEFAULT ((0)),
	[TimeZoneDaylightYear] [smallint] NOT NULL CONSTRAINT [Set_To_Zero178]  DEFAULT ((0)),
	[TimeZoneDaylightMonth] [smallint] NOT NULL CONSTRAINT [Set_To_Zero179]  DEFAULT ((0)),
	[TimeZoneDaylightDay] [smallint] NOT NULL CONSTRAINT [Set_To_Zero180]  DEFAULT ((0)),
	[TimeZoneDaylightDayOfWeek] [smallint] NOT NULL CONSTRAINT [Set_To_Zero181]  DEFAULT ((0)),
	[TimeZoneDaylightHour] [smallint] NOT NULL CONSTRAINT [Set_To_Zero182]  DEFAULT ((0)),
	[TimeZoneDaylightMinute] [smallint] NOT NULL CONSTRAINT [Set_To_Zero183]  DEFAULT ((0)),
	[TimeZoneDaylightSecond] [smallint] NOT NULL CONSTRAINT [Set_To_Zero184]  DEFAULT ((0)),
	[ModifiedBy] [uniqueidentifier] NULL,
	[AdvancedFindStartupMode] [smallint] NOT NULL CONSTRAINT [DF_UserSettingsBase_AdvancedFindStartupMode]  DEFAULT ((1)),
	[CreatedOn] [datetime] NULL,
	[TrackingTokenId] [int] NULL,
	[NextTrackingNumber] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[UserProfile] [nvarchar](1024) NULL,
	[NumberSeparator] [nvarchar](5) NOT NULL CONSTRAINT [DF_UserSettingsBase_NumberSeparator]  DEFAULT (','),
	[OutlookSyncInterval] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_OutlookSyncInterval]  DEFAULT ((900000)),
	[UseCrmFormForTask] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_UseCrmFormForTask]  DEFAULT ((1)),
	[PricingDecimalPrecision] [int] NULL CONSTRAINT [DF_UserSettingsBase_PricingDecimalPrecision]  DEFAULT ((2)),
	[SyncContactCompany] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_SyncContactCompany]  DEFAULT ((1)),
	[DateSeparator] [nvarchar](5) NOT NULL CONSTRAINT [DF_UserSettingsBase_DateSeparator]  DEFAULT ('/'),
	[LongDateFormatCode] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_LongDateFormatCode]  DEFAULT ((0)),
	[AllowEmailCredentials] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_AllowEmailCredentials]  DEFAULT ((0)),
	[FullNameConventionCode] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_FullNameConventionCode]  DEFAULT ((0)),
	[TimeSeparator] [nvarchar](5) NULL,
	[TimeFormatCode] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_TimeFormatCode]  DEFAULT ((0)),
	[NegativeFormatCode] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_NegativeFormatCode]  DEFAULT ((0)),
	[OfflineSyncInterval] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_OfflineSyncInterval]  DEFAULT ((900000)),
	[CalendarType] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_CalendarType]  DEFAULT ((2)),
	[CurrencySymbol] [nvarchar](13) NOT NULL CONSTRAINT [DF_UserSettingsBase_CurrencySymbol]  DEFAULT ('$'),
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[UILanguageId] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_UILanguageId]  DEFAULT ((0)),
	[UseCrmFormForContact] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_UseCrmFormForContact]  DEFAULT ((1)),
	[CurrencyFormatCode] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_CurrencyFormatCode]  DEFAULT ((0)),
	[AddressBookSyncInterval] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_AddressBookSyncInterval]  DEFAULT ((86400000)),
	[DecimalSymbol] [nvarchar](5) NOT NULL CONSTRAINT [DF_UserSettingsBase_DecimalSymbol]  DEFAULT ('.'),
	[UseCrmFormForEmail] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_UseCrmFormForEmail]  DEFAULT ((0)),
	[ShowWeekNumber] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_ShowWeekNumber]  DEFAULT ((0)),
	[NegativeCurrencyFormatCode] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_NegativeCurrencyFormatCode]  DEFAULT ((0)),
	[TimeFormatString] [nvarchar](255) NULL,
	[EmailUsername] [nvarchar](200) NULL,
	[DateFormatString] [nvarchar](255) NULL,
	[ReportScriptErrors] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_ReportScriptErrors]  DEFAULT ((1)),
	[UseImageStrips] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_UseImageStrips]  DEFAULT ((1)),
	[EmailPassword] [nvarchar](200) NULL,
	[DateFormatCode] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_DateFormatCode]  DEFAULT ((0)),
	[UseCrmFormForAppointment] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_UseCrmFormForAppointment]  DEFAULT ((0)),
	[IsDuplicateDetectionEnabledWhenGoingOnline] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_IsDuplicateDetectionEnabledWhenGoingOnline]  DEFAULT ((0)),
	[LocaleId] [int] NULL,
	[IncomingEmailFilteringMethod] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_IncomingEmailFilteringMethod]  DEFAULT ((2)),
	[CurrencyDecimalPrecision] [int] NULL CONSTRAINT [DF_UserSettingsBase_CurrencyDecimalPrecision]  DEFAULT ((2)),
	[AMDesignator] [nvarchar](25) NOT NULL CONSTRAINT [DF_UserSettingsBase_AMDesignator]  DEFAULT ('AM'),
	[NumberGroupFormat] [nvarchar](25) NULL,
	[HelpLanguageId] [int] NULL,
	[PMDesignator] [nvarchar](25) NOT NULL CONSTRAINT [DF_UserSettingsBase_PMDesignator]  DEFAULT ('PM'),
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[GetStartedPaneContentEnabled] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_GetStartedPaneContentEnabled]  DEFAULT ((1)),
	[AutoCreateContactOnPromote] [smallint] NOT NULL CONSTRAINT [DF_UserSettingsBase_AutoCreateContactOnPromote]  DEFAULT ((1)),
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[PersonalizationSettings] [nvarchar](max) NULL,
	[VisualizationPaneLayout] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_VisualizationPaneLayout]  DEFAULT ((1)),
	[DataValidationModeForExportToExcel] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_DataValidationModeForExportToExcel]  DEFAULT ((0)),
	[HomepageLayout] [nvarchar](1000) NULL,
	[IsSendAsAllowed] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_IsSendAsAllowed]  DEFAULT ((0)),
	[DefaultDashboardId] [uniqueidentifier] NULL,
	[EntityFormMode] [int] NOT NULL CONSTRAINT [DF_UserSettingsBase_EntityFormMode]  DEFAULT ((0)),
	[LastAlertsViewedTime] [datetime] NULL CONSTRAINT [DF_UserSettingsBase_LastAlertsViewedTime]  DEFAULT ((0)),
	[IsDefaultCountryCodeCheckEnabled] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_IsDefaultCountryCodeCheckEnabled]  DEFAULT ((0)),
	[DefaultCountryCode] [nvarchar](15) NULL,
	[IsGuidedHelpEnabled] [bit] NULL CONSTRAINT [DF_UserSettingsBase_IsGuidedHelpEnabled]  DEFAULT ((1)),
	[IsResourceBookingExchangeSyncEnabled] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_IsResourceBookingExchangeSyncEnabled]  DEFAULT ((0)),
	[IsAutoDataCaptureEnabled] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_IsAutoDataCaptureEnabled]  DEFAULT ((1)),
	[IsAppsForCrmAlertDismissed] [bit] NULL CONSTRAINT [DF_UserSettingsBase_IsAppsForCrmAlertDismissed]  DEFAULT ((0)),
	[DefaultSearchExperience] [int] NULL,
	[ResourceBookingExchangeSyncVersion] [bigint] NOT NULL CONSTRAINT [DF_UserSettingsBase_ResourceBookingExchangeSyncVersion]  DEFAULT ((0)),
	[SplitViewState] [bit] NOT NULL CONSTRAINT [DF_UserSettingsBase_SplitViewState]  DEFAULT ((1)),
 CONSTRAINT [cndx_PrimaryKey_UserSettings] PRIMARY KEY CLUSTERED 
(
	[SystemUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[UserSettingsBase] ([SystemUserId], [BusinessUnitId], [HomepageArea], [PagingLimit], [HomepageSubarea], [DefaultCalendarView], [WorkdayStartTime], [WorkdayStopTime], [IgnoreUnsolicitedEmail], [TimeZoneBias], [TimeZoneStandardBias], [TimeZoneDaylightBias], [TimeZoneCode], [TimeZoneStandardYear], [TimeZoneStandardMonth], [TimeZoneStandardDay], [TimeZoneStandardDayOfWeek], [TimeZoneStandardHour], [TimeZoneStandardMinute], [TimeZoneStandardSecond], [TimeZoneDaylightYear], [TimeZoneDaylightMonth], [TimeZoneDaylightDay], [TimeZoneDaylightDayOfWeek], [TimeZoneDaylightHour], [TimeZoneDaylightMinute], [TimeZoneDaylightSecond], [ModifiedBy], [AdvancedFindStartupMode], [CreatedOn], [TrackingTokenId], [NextTrackingNumber], [ModifiedOn], [CreatedBy], [UserProfile], [NumberSeparator], [OutlookSyncInterval], [UseCrmFormForTask], [PricingDecimalPrecision], [SyncContactCompany], [DateSeparator], [LongDateFormatCode], [AllowEmailCredentials], [FullNameConventionCode], [TimeSeparator], [TimeFormatCode], [NegativeFormatCode], [OfflineSyncInterval], [CalendarType], [CurrencySymbol], [TransactionCurrencyId], [UILanguageId], [UseCrmFormForContact], [CurrencyFormatCode], [AddressBookSyncInterval], [DecimalSymbol], [UseCrmFormForEmail], [ShowWeekNumber], [NegativeCurrencyFormatCode], [TimeFormatString], [EmailUsername], [DateFormatString], [ReportScriptErrors], [UseImageStrips], [EmailPassword], [DateFormatCode], [UseCrmFormForAppointment], [IsDuplicateDetectionEnabledWhenGoingOnline], [LocaleId], [IncomingEmailFilteringMethod], [CurrencyDecimalPrecision], [AMDesignator], [NumberGroupFormat], [HelpLanguageId], [PMDesignator], [CreatedOnBehalfBy], [GetStartedPaneContentEnabled], [AutoCreateContactOnPromote], [ModifiedOnBehalfBy], [PersonalizationSettings], [VisualizationPaneLayout], [DataValidationModeForExportToExcel], [HomepageLayout], [IsSendAsAllowed], [DefaultDashboardId], [EntityFormMode], [LastAlertsViewedTime], [IsDefaultCountryCodeCheckEnabled], [DefaultCountryCode], [IsGuidedHelpEnabled], [IsResourceBookingExchangeSyncEnabled], [IsAutoDataCaptureEnabled], [IsAppsForCrmAlertDismissed], [DefaultSearchExperience], [ResourceBookingExchangeSyncVersion], [SplitViewState]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'<Default>', 50, N'', 0, N'08:00', N'17:00', 1, -420, 0, -60, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, 1, CAST(N'2017-04-10 13:44:20.000' AS DateTime), 1, NULL, CAST(N'2017-04-10 13:44:20.000' AS DateTime), NULL, NULL, N',', 900000, 1, 2, 1, N'/', 2, 0, 1, N':', 0, 1, 900000, 0, N'$', NULL, 0, 1, 0, 86400000, N'.', 0, 0, 0, N'h:mm tt', NULL, N'M/d/yyyy', 1, 1, NULL, 2, 0, 0, 1033, 1, 2, N'AM', N'3', 0, N'PM', NULL, 1, 1, NULL, NULL, 1, 0, NULL, 0, NULL, 0, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, NULL, 1, 0, 1, NULL, NULL, 0, 1)
/****** Object:  Index [AK1_UserSettingsBase_TrackingTokenId]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[UserSettingsBase] ADD  CONSTRAINT [AK1_UserSettingsBase_TrackingTokenId] UNIQUE NONCLUSTERED 
(
	[TrackingTokenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserSettingsBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[UserSettingsBase]
(
	[BusinessUnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserSettingsBase]  WITH CHECK ADD  CONSTRAINT [business_unit_user_settings] FOREIGN KEY([BusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[UserSettingsBase] CHECK CONSTRAINT [business_unit_user_settings]
GO
ALTER TABLE [dbo].[UserSettingsBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_usersettings] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserSettingsBase] CHECK CONSTRAINT [transactioncurrency_usersettings]
GO
ALTER TABLE [dbo].[UserSettingsBase]  WITH CHECK ADD  CONSTRAINT [user_settings] FOREIGN KEY([SystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[UserSettingsBase] CHECK CONSTRAINT [user_settings]
GO
