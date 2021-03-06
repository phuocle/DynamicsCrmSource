USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SystemUserBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemUserBase](
	[SystemUserId] [uniqueidentifier] NOT NULL,
	[TerritoryId] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[BusinessUnitId] [uniqueidentifier] NOT NULL,
	[ParentSystemUserId] [uniqueidentifier] NULL,
	[FirstName] [nvarchar](64) NULL,
	[Salutation] [nvarchar](20) NULL,
	[MiddleName] [nvarchar](50) NULL,
	[LastName] [nvarchar](64) NULL,
	[PersonalEMailAddress] [nvarchar](100) NULL,
	[FullName] [nvarchar](200) NULL,
	[NickName] [nvarchar](50) NULL,
	[Title] [nvarchar](128) NULL,
	[InternalEMailAddress] [nvarchar](100) NULL,
	[JobTitle] [nvarchar](100) NULL,
	[MobileAlertEMail] [nvarchar](100) NULL,
	[PreferredEmailCode] [int] NULL,
	[HomePhone] [nvarchar](50) NULL,
	[MobilePhone] [nvarchar](64) NULL,
	[PreferredPhoneCode] [int] NULL,
	[PreferredAddressCode] [int] NULL,
	[PhotoUrl] [nvarchar](200) NULL,
	[DomainName] [nvarchar](1024) NOT NULL,
	[PassportLo] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[PassportHi] [int] NULL,
	[DisabledReason] [nvarchar](500) NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[EmployeeId] [nvarchar](100) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[IsDisabled] [bit] NULL,
	[GovernmentId] [nvarchar](100) NULL,
	[VersionNumber] [timestamp] NULL,
	[Skills] [nvarchar](100) NULL,
	[DisplayInServiceViews] [bit] NULL,
	[CalendarId] [uniqueidentifier] NULL,
	[ActiveDirectoryGuid] [uniqueidentifier] NULL,
	[SetupUser] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_SetupUser]  DEFAULT ((0)),
	[SiteId] [uniqueidentifier] NULL,
	[WindowsLiveID] [nvarchar](1024) NULL,
	[IncomingEmailDeliveryMethod] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_IncomingEmailDeliveryMethod]  DEFAULT ((1)),
	[OutgoingEmailDeliveryMethod] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_OutgoingEmailDeliveryMethod]  DEFAULT ((1)),
	[ImportSequenceNumber] [int] NULL,
	[AccessMode] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_AccessMode]  DEFAULT ((0)),
	[InviteStatusCode] [int] NULL CONSTRAINT [DF_SystemUserBase_InviteStatusCode]  DEFAULT ((0)),
	[IsActiveDirectoryUser] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_IsActiveDirectoryUser]  DEFAULT ((1)),
	[OverriddenCreatedOn] [datetime] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[YomiFullName] [nvarchar](200) NULL,
	[YomiLastName] [nvarchar](64) NULL,
	[YomiMiddleName] [nvarchar](50) NULL,
	[YomiFirstName] [nvarchar](64) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[IsIntegrationUser] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_IsIntegrationUser]  DEFAULT ((0)),
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[EmailRouterAccessApproval] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_EmailRouterAccessApproval]  DEFAULT ((0)),
	[DefaultFiltersPopulated] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_DefaultFiltersPopulated]  DEFAULT ((0)),
	[CALType] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_CALType]  DEFAULT ((0)),
	[QueueId] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[YammerEmailAddress] [nvarchar](100) NULL,
	[IsSyncWithDirectory] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_IsSyncWithDirectory]  DEFAULT ((0)),
	[DefaultMailbox] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[UserLicenseType] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_UserLicenseType]  DEFAULT ((3)),
	[IsEmailAddressApprovedByO365Admin] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_IsEmailAddressApprovedByO365Admin]  DEFAULT ((0)),
	[YammerUserId] [nvarchar](64) NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[IsLicensed] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_IsLicensed]  DEFAULT ((0)),
	[StageId] [uniqueidentifier] NULL,
	[PositionId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[MobileOfflineProfileId] [uniqueidentifier] NULL,
	[DefaultOdbFolderName] [nvarchar](200) NOT NULL CONSTRAINT [DF_SystemUserBase_DefaultOdbFolderName]  DEFAULT ('CRM'),
	[SharePointEmailAddress] [nvarchar](1024) NULL,
	[ApplicationIdUri] [nvarchar](1024) NULL,
	[AzureActiveDirectoryObjectId] [uniqueidentifier] NULL,
	[ApplicationId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_SystemUser] PRIMARY KEY CLUSTERED 
(
	[SystemUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[SystemUserBase] ([SystemUserId], [TerritoryId], [OrganizationId], [BusinessUnitId], [ParentSystemUserId], [FirstName], [Salutation], [MiddleName], [LastName], [PersonalEMailAddress], [FullName], [NickName], [Title], [InternalEMailAddress], [JobTitle], [MobileAlertEMail], [PreferredEmailCode], [HomePhone], [MobilePhone], [PreferredPhoneCode], [PreferredAddressCode], [PhotoUrl], [DomainName], [PassportLo], [CreatedOn], [PassportHi], [DisabledReason], [ModifiedOn], [CreatedBy], [EmployeeId], [ModifiedBy], [IsDisabled], [GovernmentId], [Skills], [DisplayInServiceViews], [CalendarId], [ActiveDirectoryGuid], [SetupUser], [SiteId], [WindowsLiveID], [IncomingEmailDeliveryMethod], [OutgoingEmailDeliveryMethod], [ImportSequenceNumber], [AccessMode], [InviteStatusCode], [IsActiveDirectoryUser], [OverriddenCreatedOn], [UTCConversionTimeZoneCode], [TimeZoneRuleVersionNumber], [YomiFullName], [YomiLastName], [YomiMiddleName], [YomiFirstName], [CreatedOnBehalfBy], [ExchangeRate], [IsIntegrationUser], [ModifiedOnBehalfBy], [EmailRouterAccessApproval], [DefaultFiltersPopulated], [CALType], [QueueId], [TransactionCurrencyId], [YammerEmailAddress], [IsSyncWithDirectory], [DefaultMailbox], [ProcessId], [UserLicenseType], [IsEmailAddressApprovedByO365Admin], [YammerUserId], [EntityImageId], [IsLicensed], [StageId], [PositionId], [TraversedPath], [MobileOfflineProfileId], [DefaultOdbFolderName], [SharePointEmailAddress], [ApplicationIdUri], [AzureActiveDirectoryObjectId], [ApplicationId]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'CRM', NULL, NULL, N'Admin', NULL, N'CRM Admin', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'PHUOCLE\Administrator', NULL, CAST(N'2017-04-10 13:44:20.000' AS DateTime), NULL, NULL, CAST(N'2017-04-10 13:44:20.000' AS DateTime), NULL, NULL, NULL, 0, NULL, NULL, NULL, N'76221ab5-9084-4635-94dc-ceba969a1b3d', N'8ae54bbd-1219-41ca-97e0-41a81d1d9b65', 0, NULL, NULL, 1, 1, NULL, 0, 4, 1, NULL, NULL, NULL, N'CRM Admin', NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, 0, 0, N'dbf5ecca-f31d-e711-80d3-00155d00662d', NULL, NULL, 0, N'daf5ecca-f31d-e711-80d3-00155d00662d', NULL, 3, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, N'CRM', NULL, NULL, NULL, NULL)
INSERT [dbo].[SystemUserBase] ([SystemUserId], [TerritoryId], [OrganizationId], [BusinessUnitId], [ParentSystemUserId], [FirstName], [Salutation], [MiddleName], [LastName], [PersonalEMailAddress], [FullName], [NickName], [Title], [InternalEMailAddress], [JobTitle], [MobileAlertEMail], [PreferredEmailCode], [HomePhone], [MobilePhone], [PreferredPhoneCode], [PreferredAddressCode], [PhotoUrl], [DomainName], [PassportLo], [CreatedOn], [PassportHi], [DisabledReason], [ModifiedOn], [CreatedBy], [EmployeeId], [ModifiedBy], [IsDisabled], [GovernmentId], [Skills], [DisplayInServiceViews], [CalendarId], [ActiveDirectoryGuid], [SetupUser], [SiteId], [WindowsLiveID], [IncomingEmailDeliveryMethod], [OutgoingEmailDeliveryMethod], [ImportSequenceNumber], [AccessMode], [InviteStatusCode], [IsActiveDirectoryUser], [OverriddenCreatedOn], [UTCConversionTimeZoneCode], [TimeZoneRuleVersionNumber], [YomiFullName], [YomiLastName], [YomiMiddleName], [YomiFirstName], [CreatedOnBehalfBy], [ExchangeRate], [IsIntegrationUser], [ModifiedOnBehalfBy], [EmailRouterAccessApproval], [DefaultFiltersPopulated], [CALType], [QueueId], [TransactionCurrencyId], [YammerEmailAddress], [IsSyncWithDirectory], [DefaultMailbox], [ProcessId], [UserLicenseType], [IsEmailAddressApprovedByO365Admin], [YammerUserId], [EntityImageId], [IsLicensed], [StageId], [PositionId], [TraversedPath], [MobileOfflineProfileId], [DefaultOdbFolderName], [SharePointEmailAddress], [ApplicationIdUri], [AzureActiveDirectoryObjectId], [ApplicationId]) VALUES (N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'', NULL, NULL, N'SYSTEM', NULL, N'SYSTEM', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'', NULL, CAST(N'2017-04-10 13:44:18.917' AS DateTime), NULL, NULL, CAST(N'2017-04-10 13:44:18.917' AS DateTime), NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, N'0932f053-7d2f-4786-a6da-7466b0385e14', 0, NULL, NULL, 1, 1, NULL, 0, 0, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, 3, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, N'CRM', NULL, NULL, NULL, NULL)
INSERT [dbo].[SystemUserBase] ([SystemUserId], [TerritoryId], [OrganizationId], [BusinessUnitId], [ParentSystemUserId], [FirstName], [Salutation], [MiddleName], [LastName], [PersonalEMailAddress], [FullName], [NickName], [Title], [InternalEMailAddress], [JobTitle], [MobileAlertEMail], [PreferredEmailCode], [HomePhone], [MobilePhone], [PreferredPhoneCode], [PreferredAddressCode], [PhotoUrl], [DomainName], [PassportLo], [CreatedOn], [PassportHi], [DisabledReason], [ModifiedOn], [CreatedBy], [EmployeeId], [ModifiedBy], [IsDisabled], [GovernmentId], [Skills], [DisplayInServiceViews], [CalendarId], [ActiveDirectoryGuid], [SetupUser], [SiteId], [WindowsLiveID], [IncomingEmailDeliveryMethod], [OutgoingEmailDeliveryMethod], [ImportSequenceNumber], [AccessMode], [InviteStatusCode], [IsActiveDirectoryUser], [OverriddenCreatedOn], [UTCConversionTimeZoneCode], [TimeZoneRuleVersionNumber], [YomiFullName], [YomiLastName], [YomiMiddleName], [YomiFirstName], [CreatedOnBehalfBy], [ExchangeRate], [IsIntegrationUser], [ModifiedOnBehalfBy], [EmailRouterAccessApproval], [DefaultFiltersPopulated], [CALType], [QueueId], [TransactionCurrencyId], [YammerEmailAddress], [IsSyncWithDirectory], [DefaultMailbox], [ProcessId], [UserLicenseType], [IsEmailAddressApprovedByO365Admin], [YammerUserId], [EntityImageId], [IsLicensed], [StageId], [PositionId], [TraversedPath], [MobileOfflineProfileId], [DefaultOdbFolderName], [SharePointEmailAddress], [ApplicationIdUri], [AzureActiveDirectoryObjectId], [ApplicationId]) VALUES (N'627622a6-b9c2-4b57-99a5-83218bf7c431', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'', NULL, NULL, N'INTEGRATION', NULL, N'INTEGRATION', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'', NULL, CAST(N'2017-04-10 13:44:18.917' AS DateTime), NULL, NULL, CAST(N'2017-04-10 13:44:18.917' AS DateTime), NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, N'a31c96cc-9aa0-4517-b625-4f76b0f0dba4', 0, NULL, NULL, 1, 1, NULL, 0, 0, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, 3, 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, N'CRM', NULL, NULL, NULL, NULL)
/****** Object:  Index [UQ_SystemUserBaseActiveDirectoryGuid]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SystemUserBase] ADD  CONSTRAINT [UQ_SystemUserBaseActiveDirectoryGuid] UNIQUE NONCLUSTERED 
(
	[ActiveDirectoryGuid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_calendar_system_users]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_system_users] ON [dbo].[SystemUserBase]
(
	[CalendarId] ASC
)
WHERE ([CalendarId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_site_system_users]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_site_system_users] ON [dbo].[SystemUserBase]
(
	[SiteId] ASC
)
WHERE ([SiteId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_territory_system_users]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_territory_system_users] ON [dbo].[SystemUserBase]
(
	[TerritoryId] ASC
)
WHERE ([TerritoryId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_user_parent_user]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_user_parent_user] ON [dbo].[SystemUserBase]
(
	[ParentSystemUserId] ASC
)
WHERE ([ParentSystemUserId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_application_user]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_application_user] ON [dbo].[SystemUserBase]
(
	[ApplicationId] ASC
)
WHERE ([ApplicationId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_azure_active_directoryobjectid]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_azure_active_directoryobjectid] ON [dbo].[SystemUserBase]
(
	[AzureActiveDirectoryObjectId] ASC
)
WHERE ([AzureActiveDirectoryObjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Cover]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Cover] ON [dbo].[SystemUserBase]
(
	[FullName] ASC,
	[YomiFullName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_firstname]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_firstname] ON [dbo].[SystemUserBase]
(
	[FirstName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_internalemailaddress]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_internalemailaddress] ON [dbo].[SystemUserBase]
(
	[InternalEMailAddress] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_isdisabledaccessmodetitle]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_isdisabledaccessmodetitle] ON [dbo].[SystemUserBase]
(
	[IsDisabled] ASC,
	[AccessMode] ASC,
	[Title] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_lastname]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_lastname] ON [dbo].[SystemUserBase]
(
	[LastName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SystemUserBase]
(
	[BusinessUnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserBase]  WITH CHECK ADD  CONSTRAINT [business_unit_system_users] FOREIGN KEY([BusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SystemUserBase] CHECK CONSTRAINT [business_unit_system_users]
GO
ALTER TABLE [dbo].[SystemUserBase]  WITH CHECK ADD  CONSTRAINT [calendar_system_users] FOREIGN KEY([CalendarId])
REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[SystemUserBase] CHECK CONSTRAINT [calendar_system_users]
GO
ALTER TABLE [dbo].[SystemUserBase]  WITH CHECK ADD  CONSTRAINT [position_users] FOREIGN KEY([PositionId])
REFERENCES [dbo].[PositionBase] ([PositionId])
GO
ALTER TABLE [dbo].[SystemUserBase] CHECK CONSTRAINT [position_users]
GO
ALTER TABLE [dbo].[SystemUserBase]  WITH CHECK ADD  CONSTRAINT [queue_system_user] FOREIGN KEY([QueueId])
REFERENCES [dbo].[QueueBase] ([QueueId])
GO
ALTER TABLE [dbo].[SystemUserBase] CHECK CONSTRAINT [queue_system_user]
GO
ALTER TABLE [dbo].[SystemUserBase]  WITH CHECK ADD  CONSTRAINT [site_system_users] FOREIGN KEY([SiteId])
REFERENCES [dbo].[SiteBase] ([SiteId])
GO
ALTER TABLE [dbo].[SystemUserBase] CHECK CONSTRAINT [site_system_users]
GO
ALTER TABLE [dbo].[SystemUserBase]  WITH CHECK ADD  CONSTRAINT [systemuser_defaultmailbox_mailbox] FOREIGN KEY([DefaultMailbox])
REFERENCES [dbo].[MailboxBase] ([MailboxId])
GO
ALTER TABLE [dbo].[SystemUserBase] CHECK CONSTRAINT [systemuser_defaultmailbox_mailbox]
GO
ALTER TABLE [dbo].[SystemUserBase]  WITH CHECK ADD  CONSTRAINT [territory_system_users] FOREIGN KEY([TerritoryId])
REFERENCES [dbo].[TerritoryBase] ([TerritoryId])
GO
ALTER TABLE [dbo].[SystemUserBase] CHECK CONSTRAINT [territory_system_users]
GO
ALTER TABLE [dbo].[SystemUserBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_SystemUser] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[SystemUserBase] CHECK CONSTRAINT [TransactionCurrency_SystemUser]
GO
ALTER TABLE [dbo].[SystemUserBase]  WITH CHECK ADD  CONSTRAINT [user_parent_user] FOREIGN KEY([ParentSystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SystemUserBase] CHECK CONSTRAINT [user_parent_user]
GO
