USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[QueueBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QueueBase](
	[QueueId] [uniqueidentifier] NOT NULL,
	[BusinessUnitId] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[EMailAddress] [nvarchar](100) NULL,
	[PrimaryUserId] [uniqueidentifier] NULL,
	[QueueTypeCode] [int] NULL,
	[Name] [nvarchar](200) NULL,
	[Description] [nvarchar](max) NULL,
	[QueueSemantics] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[IgnoreUnsolicitedEmail] [bit] NULL CONSTRAINT [DF_QueueBase_IgnoreUnsolicitedEmail]  DEFAULT ((0)),
	[IsFaxQueue] [bit] NULL CONSTRAINT [DF_QueueBase_IsFaxQueue]  DEFAULT ((0)),
	[EmailPassword] [nvarchar](200) NULL,
	[IncomingEmailDeliveryMethod] [int] NOT NULL CONSTRAINT [DF_QueueBase_IncomingEmailDeliveryMethod]  DEFAULT ((0)),
	[EmailUsername] [nvarchar](200) NULL,
	[OutgoingEmailDeliveryMethod] [int] NOT NULL CONSTRAINT [DF_QueueBase_OutgoingEmailDeliveryMethod]  DEFAULT ((0)),
	[AllowEmailCredentials] [bit] NOT NULL CONSTRAINT [DF_QueueBase_AllowEmailCredentials]  DEFAULT ((0)),
	[IncomingEmailFilteringMethod] [int] NOT NULL CONSTRAINT [DF_QueueBase_IncomingEmailFilteringMethod]  DEFAULT ((0)),
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[StatusCode] [int] NOT NULL CONSTRAINT [DF_QueueBase_StatusCode]  DEFAULT ((1)),
	[ImportSequenceNumber] [int] NULL,
	[StateCode] [int] NOT NULL CONSTRAINT [DF_QueueBase_StateCode]  DEFAULT ((0)),
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_QueueBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000'),
	[OverriddenCreatedOn] [datetime] NULL,
	[EmailRouterAccessApproval] [int] NOT NULL CONSTRAINT [DF_QueueBase_EmailRouterAccessApproval]  DEFAULT ((0)),
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_QueueBase_OwnerIdType]  DEFAULT ((8)),
	[IsEmailAddressApprovedByO365Admin] [bit] NOT NULL CONSTRAINT [DF_QueueBase_IsEmailAddressApprovedByO365Admin]  DEFAULT ((0)),
	[EntityImageId] [uniqueidentifier] NULL,
	[DefaultMailbox] [uniqueidentifier] NULL,
	[QueueViewType] [int] NOT NULL CONSTRAINT [DF_QueueBase_QueueViewType]  DEFAULT ((0)),
 CONSTRAINT [cndx_PrimaryKey_Queue] PRIMARY KEY CLUSTERED 
(
	[QueueId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[QueueBase] ([QueueId], [BusinessUnitId], [OrganizationId], [EMailAddress], [PrimaryUserId], [QueueTypeCode], [Name], [Description], [QueueSemantics], [CreatedOn], [CreatedBy], [ModifiedBy], [ModifiedOn], [IgnoreUnsolicitedEmail], [IsFaxQueue], [EmailPassword], [IncomingEmailDeliveryMethod], [EmailUsername], [OutgoingEmailDeliveryMethod], [AllowEmailCredentials], [IncomingEmailFilteringMethod], [TransactionCurrencyId], [ExchangeRate], [StatusCode], [ImportSequenceNumber], [StateCode], [OwningBusinessUnit], [OwnerId], [OverriddenCreatedOn], [EmailRouterAccessApproval], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwnerIdType], [IsEmailAddressApprovedByO365Admin], [EntityImageId], [DefaultMailbox], [QueueViewType]) VALUES (N'c8acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, NULL, N'<D365>', N'D365', NULL, CAST(N'2017-04-10 13:43:59.000' AS DateTime), NULL, NULL, CAST(N'2017-04-10 13:43:59.000' AS DateTime), 0, 0, NULL, 0, NULL, 0, 0, 0, NULL, NULL, 1, NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'c7acfcbe-f31d-e711-80d3-00155d00662d', NULL, 0, NULL, NULL, 9, 0, NULL, N'c9acfcbe-f31d-e711-80d3-00155d00662d', 1)
INSERT [dbo].[QueueBase] ([QueueId], [BusinessUnitId], [OrganizationId], [EMailAddress], [PrimaryUserId], [QueueTypeCode], [Name], [Description], [QueueSemantics], [CreatedOn], [CreatedBy], [ModifiedBy], [ModifiedOn], [IgnoreUnsolicitedEmail], [IsFaxQueue], [EmailPassword], [IncomingEmailDeliveryMethod], [EmailUsername], [OutgoingEmailDeliveryMethod], [AllowEmailCredentials], [IncomingEmailFilteringMethod], [TransactionCurrencyId], [ExchangeRate], [StatusCode], [ImportSequenceNumber], [StateCode], [OwningBusinessUnit], [OwnerId], [OverriddenCreatedOn], [EmailRouterAccessApproval], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwnerIdType], [IsEmailAddressApprovedByO365Admin], [EntityImageId], [DefaultMailbox], [QueueViewType]) VALUES (N'dbf5ecca-f31d-e711-80d3-00155d00662d', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, NULL, N'<CRM Admin>', N'CRM Admin', NULL, CAST(N'2017-04-10 13:44:20.000' AS DateTime), NULL, NULL, CAST(N'2017-04-10 13:44:20.000' AS DateTime), 0, 0, NULL, 0, NULL, 0, 0, 0, NULL, NULL, 1, NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d', NULL, 0, NULL, NULL, 8, 0, NULL, N'dcf5ecca-f31d-e711-80d3-00155d00662d', 1)
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_queues]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_queues] ON [dbo].[QueueBase]
(
	[BusinessUnitId] ASC
)
WHERE ([BusinessUnitId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_queues2]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_queues2] ON [dbo].[QueueBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_queue_primary_user]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_queue_primary_user] ON [dbo].[QueueBase]
(
	[PrimaryUserId] ASC
)
WHERE ([PrimaryUserId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[QueueBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Email]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Email] ON [dbo].[QueueBase]
(
	[EMailAddress] ASC,
	[IgnoreUnsolicitedEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[QueueBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[QueueBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QueueBase]  WITH CHECK ADD  CONSTRAINT [business_unit_queues] FOREIGN KEY([BusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[QueueBase] CHECK CONSTRAINT [business_unit_queues]
GO
ALTER TABLE [dbo].[QueueBase]  WITH CHECK ADD  CONSTRAINT [business_unit_queues2] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[QueueBase] CHECK CONSTRAINT [business_unit_queues2]
GO
ALTER TABLE [dbo].[QueueBase]  WITH CHECK ADD  CONSTRAINT [owner_queues] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[QueueBase] CHECK CONSTRAINT [owner_queues]
GO
ALTER TABLE [dbo].[QueueBase]  WITH CHECK ADD  CONSTRAINT [queue_defaultmailbox_mailbox] FOREIGN KEY([DefaultMailbox])
REFERENCES [dbo].[MailboxBase] ([MailboxId])
GO
ALTER TABLE [dbo].[QueueBase] CHECK CONSTRAINT [queue_defaultmailbox_mailbox]
GO
ALTER TABLE [dbo].[QueueBase]  WITH CHECK ADD  CONSTRAINT [queue_primary_user] FOREIGN KEY([PrimaryUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[QueueBase] CHECK CONSTRAINT [queue_primary_user]
GO
ALTER TABLE [dbo].[QueueBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_Queue] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[QueueBase] CHECK CONSTRAINT [TransactionCurrency_Queue]
GO
