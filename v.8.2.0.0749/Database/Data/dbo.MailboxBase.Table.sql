USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[MailboxBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MailboxBase](
	[ProcessingStateCode] [int] NOT NULL CONSTRAINT [DF_MailboxBase_ProcessingStateCode]  DEFAULT ((0)),
	[ACTDeliveryMethod] [int] NULL CONSTRAINT [DF_MailboxBase_ACTDeliveryMethod]  DEFAULT ((0)),
	[UTCConversionTimeZoneCode] [int] NULL,
	[OutgoingEmailDeliveryMethod] [int] NULL CONSTRAINT [DF_MailboxBase_OutgoingEmailDeliveryMethod]  DEFAULT ((0)),
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[NoEmailCount] [int] NULL,
	[MailboxId] [uniqueidentifier] NOT NULL,
	[EnabledForIncomingEmail] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_EnabledForIncomingEmail]  DEFAULT ((1)),
	[NoACTCount] [int] NULL,
	[EmailAddress] [nvarchar](100) NULL,
	[ReceivingPostponedUntil] [datetime] NULL CONSTRAINT [DF_MailboxBase_ReceivingPostponedUntil]  DEFAULT ((0)),
	[OutgoingEmailStatus] [int] NULL CONSTRAINT [DF_MailboxBase_OutgoingEmailStatus]  DEFAULT ((0)),
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[MailboxProcessingContext] [int] NULL,
	[EmailRouterAccessApproval] [int] NOT NULL CONSTRAINT [DF_MailboxBase_EmailRouterAccessApproval]  DEFAULT ((0)),
	[IncomingEmailDeliveryMethod] [int] NULL CONSTRAINT [DF_MailboxBase_IncomingEmailDeliveryMethod]  DEFAULT ((0)),
	[PostponeTestEmailConfigurationUntil] [datetime] NULL CONSTRAINT [DF_MailboxBase_PostponeTestEmailConfigurationUntil]  DEFAULT ((0)),
	[EmailServerProfile] [uniqueidentifier] NULL,
	[EnabledForACT] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_EnabledForACT]  DEFAULT ((1)),
	[TestMailboxAccessCompletedOn] [datetime] NULL CONSTRAINT [DF_MailboxBase_TestMailboxAccessCompletedOn]  DEFAULT ((0)),
	[ModifiedOn] [datetime] NULL,
	[StateCode] [int] NOT NULL CONSTRAINT [DF_MailboxBase_StateCode]  DEFAULT ((0)),
	[ProcessEmailReceivedAfter] [datetime] NULL CONSTRAINT [DF_MailboxBase_ProcessEmailReceivedAfter]  DEFAULT ((0)),
	[PostponeMailboxProcessingUntil] [datetime] NOT NULL CONSTRAINT [DF_MailboxBase_PostponeMailboxProcessingUntil]  DEFAULT ((0)),
	[OwnerId] [uniqueidentifier] NOT NULL,
	[LastActiveOn] [datetime] NOT NULL CONSTRAINT [DF_MailboxBase_LastActiveOn]  DEFAULT ((0)),
	[TimeZoneRuleVersionNumber] [int] NULL,
	[LastAutoDiscoveredOn] [datetime] NULL CONSTRAINT [DF_MailboxBase_LastAutoDiscoveredOn]  DEFAULT ((0)),
	[TestEmailConfigurationScheduled] [bit] NULL CONSTRAINT [DF_MailboxBase_TestEmailConfigurationScheduled]  DEFAULT ((0)),
	[IsEmailAddressApprovedByO365Admin] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_IsEmailAddressApprovedByO365Admin]  DEFAULT ((0)),
	[ModifiedBy] [uniqueidentifier] NULL,
	[Password] [varbinary](max) NULL,
	[ExchangeSyncStateXml] [nvarchar](max) NULL,
	[ProcessAndDeleteEmails] [bit] NULL CONSTRAINT [DF_MailboxBase_ProcessAndDeleteEmails]  DEFAULT ((0)),
	[RegardingObjectId] [uniqueidentifier] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[StatusCode] [int] NOT NULL CONSTRAINT [DF_MailboxBase_StatusCode]  DEFAULT ((1)),
	[ReceivingPostponedUntilForACT] [datetime] NULL CONSTRAINT [DF_MailboxBase_ReceivingPostponedUntilForACT]  DEFAULT ((0)),
	[VersionNumber] [timestamp] NULL,
	[UndeliverableFolder] [nvarchar](256) NULL,
	[Name] [nvarchar](200) NOT NULL,
	[IsForwardMailbox] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_IsForwardMailbox]  DEFAULT ((0)),
	[PostponeSendingUntil] [datetime] NOT NULL CONSTRAINT [DF_MailboxBase_PostponeSendingUntil]  DEFAULT ((0)),
	[TestEmailConfigurationRetryCount] [int] NOT NULL CONSTRAINT [DF_MailboxBase_TestEmailConfigurationRetryCount]  DEFAULT ((0)),
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[AllowEmailConnectorToUseCredentials] [bit] NULL CONSTRAINT [DF_MailboxBase_AllowEmailConnectorToUseCredentials]  DEFAULT ((0)),
	[HostId] [nvarchar](256) NULL,
	[LastMessageId] [nvarchar](320) NULL,
	[IncomingEmailStatus] [int] NULL CONSTRAINT [DF_MailboxBase_IncomingEmailStatus]  DEFAULT ((0)),
	[Username] [nvarchar](200) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[EWSURL] [nvarchar](1042) NULL,
	[TransientFailureCount] [int] NOT NULL CONSTRAINT [DF_MailboxBase_TransientFailureCount]  DEFAULT ((0)),
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[IsACTSyncOrgFlagSet] [bit] NULL CONSTRAINT [DF_MailboxBase_IsACTSyncOrgFlagSet]  DEFAULT ((0)),
	[ACTStatus] [int] NULL CONSTRAINT [DF_MailboxBase_ACTStatus]  DEFAULT ((0)),
	[EnabledForOutgoingEmail] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_EnabledForOutgoingEmail]  DEFAULT ((1)),
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_MailboxBase_OwnerIdType]  DEFAULT ((8)),
	[LastSuccessfulSyncCompletedOn] [datetime] NULL,
	[ProcessedTimes] [int] NULL,
	[AverageTotalDuration] [int] NULL,
	[LastSyncErrorOccurredOn] [datetime] NULL,
	[ItemsFailedForLastSync] [int] NULL,
	[LastSyncErrorMachineName] [nvarchar](160) NULL,
	[LastSyncErrorCode] [int] NULL,
	[ItemsProcessedForLastSync] [int] NULL,
	[LastSyncStartedOn] [datetime] NULL,
	[LastSyncError] [nvarchar](1024) NULL,
	[LastSyncErrorCount] [int] NULL,
	[OrgMarkedAsPrimaryForExchangeSync] [bit] NULL CONSTRAINT [DF_MailboxBase_OrgMarkedAsPrimaryForExchangeSync]  DEFAULT ((0)),
	[LastDuration] [int] NULL,
	[ForcedUnlockCount] [int] NOT NULL CONSTRAINT [DF_MailboxBase_ForcedUnlockCount]  DEFAULT ((0)),
	[ProcessingLastAttemptedOn] [datetime] NULL,
	[IsServiceAccount] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_IsServiceAccount]  DEFAULT ((0)),
	[VerboseLoggingEnabled] [int] NOT NULL CONSTRAINT [DF_MailboxBase_VerboseLoggingEnabled]  DEFAULT ((0)),
	[FolderHierarchy] [nvarchar](max) NULL,
	[LastMailboxForcedUnlockOccurredOn] [datetime] NULL,
	[OfficeAppsDeploymentCompleteOn] [datetime] NULL,
	[PostponeOfficeAppsDeploymentUntil] [datetime] NULL CONSTRAINT [DF_MailboxBase_PostponeOfficeAppsDeploymentUntil]  DEFAULT ((0)),
	[OfficeAppsDeploymentScheduled] [bit] NULL CONSTRAINT [DF_MailboxBase_OfficeAppsDeploymentScheduled]  DEFAULT ((0)),
	[MailboxStatus] [int] NULL CONSTRAINT [DF_MailboxBase_MailboxStatus]  DEFAULT ((0)),
	[OfficeAppsDeploymentError] [nvarchar](1024) NULL,
	[OfficeAppsDeploymentStatus] [int] NULL CONSTRAINT [DF_MailboxBase_OfficeAppsDeploymentStatus]  DEFAULT ((0)),
 CONSTRAINT [PK_mailboxBase] PRIMARY KEY CLUSTERED 
(
	[MailboxId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON
GO
INSERT [dbo].[MailboxBase] ([ProcessingStateCode], [ACTDeliveryMethod], [UTCConversionTimeZoneCode], [OutgoingEmailDeliveryMethod], [ModifiedOnBehalfBy], [NoEmailCount], [MailboxId], [EnabledForIncomingEmail], [NoACTCount], [EmailAddress], [ReceivingPostponedUntil], [OutgoingEmailStatus], [OrganizationId], [MailboxProcessingContext], [EmailRouterAccessApproval], [IncomingEmailDeliveryMethod], [PostponeTestEmailConfigurationUntil], [EmailServerProfile], [EnabledForACT], [TestMailboxAccessCompletedOn], [ModifiedOn], [StateCode], [ProcessEmailReceivedAfter], [PostponeMailboxProcessingUntil], [OwnerId], [LastActiveOn], [TimeZoneRuleVersionNumber], [LastAutoDiscoveredOn], [TestEmailConfigurationScheduled], [IsEmailAddressApprovedByO365Admin], [ModifiedBy], [Password], [ExchangeSyncStateXml], [ProcessAndDeleteEmails], [RegardingObjectId], [EntityImageId], [CreatedOn], [StatusCode], [ReceivingPostponedUntilForACT], [UndeliverableFolder], [Name], [IsForwardMailbox], [PostponeSendingUntil], [TestEmailConfigurationRetryCount], [CreatedOnBehalfBy], [AllowEmailConnectorToUseCredentials], [HostId], [LastMessageId], [IncomingEmailStatus], [Username], [CreatedBy], [EWSURL], [TransientFailureCount], [OwningBusinessUnit], [IsACTSyncOrgFlagSet], [ACTStatus], [EnabledForOutgoingEmail], [RegardingObjectIdName], [RegardingObjectTypeCode], [OwnerIdType], [LastSuccessfulSyncCompletedOn], [ProcessedTimes], [AverageTotalDuration], [LastSyncErrorOccurredOn], [ItemsFailedForLastSync], [LastSyncErrorMachineName], [LastSyncErrorCode], [ItemsProcessedForLastSync], [LastSyncStartedOn], [LastSyncError], [LastSyncErrorCount], [OrgMarkedAsPrimaryForExchangeSync], [LastDuration], [ForcedUnlockCount], [ProcessingLastAttemptedOn], [IsServiceAccount], [VerboseLoggingEnabled], [FolderHierarchy], [LastMailboxForcedUnlockOccurredOn], [OfficeAppsDeploymentCompleteOn], [PostponeOfficeAppsDeploymentUntil], [OfficeAppsDeploymentScheduled], [MailboxStatus], [OfficeAppsDeploymentError], [OfficeAppsDeploymentStatus]) VALUES (0, 0, NULL, 0, NULL, NULL, N'c9acfcbe-f31d-e711-80d3-00155d00662d', 1, NULL, NULL, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, 0, CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'2017-04-10 13:43:59.000' AS DateTime), 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'9999-12-31 23:59:59.000' AS DateTime), N'c7acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:43:59.000' AS DateTime), NULL, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, 0, N'00000000-0000-0000-0000-000000000000', NULL, NULL, 0, N'c8acfcbe-f31d-e711-80d3-00155d00662d', NULL, CAST(N'2017-04-10 13:43:59.000' AS DateTime), 2, CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, N'<D365>', 0, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, NULL, 0, NULL, NULL, 0, NULL, N'00000000-0000-0000-0000-000000000000', NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 0, 1, N'<D365>', 2020, 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[MailboxBase] ([ProcessingStateCode], [ACTDeliveryMethod], [UTCConversionTimeZoneCode], [OutgoingEmailDeliveryMethod], [ModifiedOnBehalfBy], [NoEmailCount], [MailboxId], [EnabledForIncomingEmail], [NoACTCount], [EmailAddress], [ReceivingPostponedUntil], [OutgoingEmailStatus], [OrganizationId], [MailboxProcessingContext], [EmailRouterAccessApproval], [IncomingEmailDeliveryMethod], [PostponeTestEmailConfigurationUntil], [EmailServerProfile], [EnabledForACT], [TestMailboxAccessCompletedOn], [ModifiedOn], [StateCode], [ProcessEmailReceivedAfter], [PostponeMailboxProcessingUntil], [OwnerId], [LastActiveOn], [TimeZoneRuleVersionNumber], [LastAutoDiscoveredOn], [TestEmailConfigurationScheduled], [IsEmailAddressApprovedByO365Admin], [ModifiedBy], [Password], [ExchangeSyncStateXml], [ProcessAndDeleteEmails], [RegardingObjectId], [EntityImageId], [CreatedOn], [StatusCode], [ReceivingPostponedUntilForACT], [UndeliverableFolder], [Name], [IsForwardMailbox], [PostponeSendingUntil], [TestEmailConfigurationRetryCount], [CreatedOnBehalfBy], [AllowEmailConnectorToUseCredentials], [HostId], [LastMessageId], [IncomingEmailStatus], [Username], [CreatedBy], [EWSURL], [TransientFailureCount], [OwningBusinessUnit], [IsACTSyncOrgFlagSet], [ACTStatus], [EnabledForOutgoingEmail], [RegardingObjectIdName], [RegardingObjectTypeCode], [OwnerIdType], [LastSuccessfulSyncCompletedOn], [ProcessedTimes], [AverageTotalDuration], [LastSyncErrorOccurredOn], [ItemsFailedForLastSync], [LastSyncErrorMachineName], [LastSyncErrorCode], [ItemsProcessedForLastSync], [LastSyncStartedOn], [LastSyncError], [LastSyncErrorCount], [OrgMarkedAsPrimaryForExchangeSync], [LastDuration], [ForcedUnlockCount], [ProcessingLastAttemptedOn], [IsServiceAccount], [VerboseLoggingEnabled], [FolderHierarchy], [LastMailboxForcedUnlockOccurredOn], [OfficeAppsDeploymentCompleteOn], [PostponeOfficeAppsDeploymentUntil], [OfficeAppsDeploymentScheduled], [MailboxStatus], [OfficeAppsDeploymentError], [OfficeAppsDeploymentStatus]) VALUES (0, 0, NULL, 1, NULL, NULL, N'daf5ecca-f31d-e711-80d3-00155d00662d', 1, NULL, NULL, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'2017-04-10 13:44:20.000' AS DateTime), 0, CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'9999-12-31 23:59:59.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:20.000' AS DateTime), NULL, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, 0, N'00000000-0000-0000-0000-000000000000', NULL, NULL, 0, N'd9f5ecca-f31d-e711-80d3-00155d00662d', NULL, CAST(N'2017-04-10 13:44:20.000' AS DateTime), 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, N'CRM Admin', 0, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, NULL, 0, NULL, NULL, 0, NULL, N'00000000-0000-0000-0000-000000000000', NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 0, 1, N'CRM Admin', 8, 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[MailboxBase] ([ProcessingStateCode], [ACTDeliveryMethod], [UTCConversionTimeZoneCode], [OutgoingEmailDeliveryMethod], [ModifiedOnBehalfBy], [NoEmailCount], [MailboxId], [EnabledForIncomingEmail], [NoACTCount], [EmailAddress], [ReceivingPostponedUntil], [OutgoingEmailStatus], [OrganizationId], [MailboxProcessingContext], [EmailRouterAccessApproval], [IncomingEmailDeliveryMethod], [PostponeTestEmailConfigurationUntil], [EmailServerProfile], [EnabledForACT], [TestMailboxAccessCompletedOn], [ModifiedOn], [StateCode], [ProcessEmailReceivedAfter], [PostponeMailboxProcessingUntil], [OwnerId], [LastActiveOn], [TimeZoneRuleVersionNumber], [LastAutoDiscoveredOn], [TestEmailConfigurationScheduled], [IsEmailAddressApprovedByO365Admin], [ModifiedBy], [Password], [ExchangeSyncStateXml], [ProcessAndDeleteEmails], [RegardingObjectId], [EntityImageId], [CreatedOn], [StatusCode], [ReceivingPostponedUntilForACT], [UndeliverableFolder], [Name], [IsForwardMailbox], [PostponeSendingUntil], [TestEmailConfigurationRetryCount], [CreatedOnBehalfBy], [AllowEmailConnectorToUseCredentials], [HostId], [LastMessageId], [IncomingEmailStatus], [Username], [CreatedBy], [EWSURL], [TransientFailureCount], [OwningBusinessUnit], [IsACTSyncOrgFlagSet], [ACTStatus], [EnabledForOutgoingEmail], [RegardingObjectIdName], [RegardingObjectTypeCode], [OwnerIdType], [LastSuccessfulSyncCompletedOn], [ProcessedTimes], [AverageTotalDuration], [LastSyncErrorOccurredOn], [ItemsFailedForLastSync], [LastSyncErrorMachineName], [LastSyncErrorCode], [ItemsProcessedForLastSync], [LastSyncStartedOn], [LastSyncError], [LastSyncErrorCount], [OrgMarkedAsPrimaryForExchangeSync], [LastDuration], [ForcedUnlockCount], [ProcessingLastAttemptedOn], [IsServiceAccount], [VerboseLoggingEnabled], [FolderHierarchy], [LastMailboxForcedUnlockOccurredOn], [OfficeAppsDeploymentCompleteOn], [PostponeOfficeAppsDeploymentUntil], [OfficeAppsDeploymentScheduled], [MailboxStatus], [OfficeAppsDeploymentError], [OfficeAppsDeploymentStatus]) VALUES (0, 0, NULL, 0, NULL, NULL, N'dcf5ecca-f31d-e711-80d3-00155d00662d', 1, NULL, NULL, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, 0, CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'2017-04-10 13:44:20.000' AS DateTime), 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'9999-12-31 23:59:59.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:20.000' AS DateTime), NULL, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, 0, N'00000000-0000-0000-0000-000000000000', NULL, NULL, 0, N'dbf5ecca-f31d-e711-80d3-00155d00662d', NULL, CAST(N'2017-04-10 13:44:20.000' AS DateTime), 2, CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, N'<CRM Admin>', 0, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, NULL, 0, NULL, NULL, 0, NULL, N'00000000-0000-0000-0000-000000000000', NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 0, 1, N'<CRM Admin>', 2020, 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
/****** Object:  Index [fndx_Mailbox_IsServiceAccount]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Mailbox_IsServiceAccount] ON [dbo].[MailboxBase]
(
	[EmailServerProfile] ASC,
	[IsServiceAccount] ASC
)
WHERE ([EmailServerProfile] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MailboxBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[MailboxBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Mailbox_EmailServerProfile]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Mailbox_EmailServerProfile] ON [dbo].[MailboxBase]
(
	[EmailServerProfile] ASC
)
WHERE ([EmailServerProfile] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Mailbox_MailboxQueueManagerDequeue]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Mailbox_MailboxQueueManagerDequeue] ON [dbo].[MailboxBase]
(
	[ProcessingStateCode] ASC,
	[PostponeMailboxProcessingUntil] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Mailbox_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Mailbox_Name] ON [dbo].[MailboxBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Mailbox_Regarding]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Mailbox_Regarding] ON [dbo].[MailboxBase]
(
	[RegardingObjectTypeCode] ASC,
	[RegardingObjectId] ASC
)
INCLUDE ( 	[StateCode],
	[IncomingEmailDeliveryMethod],
	[ACTDeliveryMethod],
	[EnabledForIncomingEmail],
	[EnabledForACT]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_regardingobjectid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_regardingobjectid] ON [dbo].[MailboxBase]
(
	[RegardingObjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[MailboxBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MailboxBase]  WITH CHECK ADD  CONSTRAINT [business_unit_mailbox] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[MailboxBase] CHECK CONSTRAINT [business_unit_mailbox]
GO
ALTER TABLE [dbo].[MailboxBase]  WITH CHECK ADD  CONSTRAINT [emailserverprofile_mailbox] FOREIGN KEY([EmailServerProfile])
REFERENCES [dbo].[EmailServerProfileBase] ([EmailServerProfileId])
GO
ALTER TABLE [dbo].[MailboxBase] CHECK CONSTRAINT [emailserverprofile_mailbox]
GO
ALTER TABLE [dbo].[MailboxBase]  WITH CHECK ADD  CONSTRAINT [owner_mailbox] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[MailboxBase] CHECK CONSTRAINT [owner_mailbox]
GO
