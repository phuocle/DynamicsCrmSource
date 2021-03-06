USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[EmailServerProfileBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[EmailServerProfileBase](
	[IncomingUserName] [nvarchar](250) NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[IncomingPartnerApplication] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[IncomingUseImpersonation] [bit] NULL,
	[ServerType] [int] NULL,
	[ProcessEmailsReceivedAfter] [datetime] NULL,
	[IncomingAuthenticationProtocol] [int] NULL,
	[OutgoingServerLocation] [nvarchar](1042) NULL,
	[UseSameSettingsForOutgoingConnections] [bit] NULL,
	[OutgoingAutoGrantDelegateAccess] [bit] NULL,
	[StatusCode] [int] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[EncodingCodePage] [nvarchar](100) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[IncomingCredentialRetrieval] [int] NULL,
	[MoveUndeliveredEmails] [bit] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[EmailServerProfileId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[OutgoingUseSSL] [bit] NULL,
	[OutgoingPortNumber] [int] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[IncomingUseSSL] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[IncomingPortNumber] [int] NULL,
	[OutgoingUsername] [nvarchar](250) NULL,
	[Description] [nvarchar](max) NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[OutgoingCredentialRetrieval] [int] NULL,
	[IncomingServerLocation] [nvarchar](1042) NULL,
	[MaxConcurrentConnections] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[OutgoingPartnerApplication] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NULL,
	[OutgoingPassword] [varbinary](max) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ExchangeVersion] [int] NULL,
	[MinPollingIntervalInMinutes] [int] NULL,
	[OutgoingUseImpersonation] [bit] NULL,
	[UseAutoDiscover] [bit] NULL,
	[IncomingPassword] [varbinary](max) NULL,
	[CreatedOn] [datetime] NULL,
	[OutgoingAuthenticationProtocol] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
	[OwnerEmailAddress] [nvarchar](250) NULL,
	[SendEmailAlert] [bit] NULL,
	[LastTestValidationStatus] [int] NULL,
	[LastTestStartTime] [datetime] NULL,
	[LastTestResponse] [nvarchar](max) NULL,
	[LastTestExecutionStatus] [int] NULL,
	[LastTestRequest] [nvarchar](max) NULL,
	[TimeoutMailboxConnection] [bit] NULL,
	[LastTestTotalExecutionTime] [bigint] NULL,
	[TimeoutMailboxConnectionAfterAmount] [int] NULL,
	[EmailServerTypeName] [nvarchar](250) NULL,
	[ExchangeOnlineTenantId] [nvarchar](36) NULL,
	[DefaultServerLocation] [nvarchar](1042) NULL,
	[UseDefaultTenantId] [bit] NULL,
	[LastAuthorizationStatus] [int] NULL,
	[LastCrmMessage] [nvarchar](max) NULL,
 CONSTRAINT [PK_EmailServerProfileBase] PRIMARY KEY CLUSTERED 
(
	[EmailServerProfileId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_EmailServerProfile_IncomingServerLocation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_IncomingServerLocation] ON [dbo].[EmailServerProfileBase]
(
	[IncomingServerLocation] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_EmailServerProfile_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_Name] ON [dbo].[EmailServerProfileBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_EmailServerProfile_OutgoingServerLocation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_OutgoingServerLocation] ON [dbo].[EmailServerProfileBase]
(
	[OutgoingServerLocation] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_EmailServerProfile_ServerType]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_ServerType] ON [dbo].[EmailServerProfileBase]
(
	[ServerType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_IncomingUseImpersonation]  DEFAULT ((0)) FOR [IncomingUseImpersonation]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_IncomingAuthenticationProtocol]  DEFAULT ((0)) FOR [IncomingAuthenticationProtocol]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_UseSameSettingsForOutgoingConnections]  DEFAULT ((1)) FOR [UseSameSettingsForOutgoingConnections]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_OutgoingAutoGrantDelegateAccess]  DEFAULT ((0)) FOR [OutgoingAutoGrantDelegateAccess]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_MoveUndeliveredEmails]  DEFAULT ((0)) FOR [MoveUndeliveredEmails]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_OutgoingUseSSL]  DEFAULT ((1)) FOR [OutgoingUseSSL]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_IncomingUseSSL]  DEFAULT ((1)) FOR [IncomingUseSSL]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_ExchangeVersion]  DEFAULT ((0)) FOR [ExchangeVersion]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_MinPollingIntervalInMinutes]  DEFAULT ((0)) FOR [MinPollingIntervalInMinutes]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_UseAutoDiscover]  DEFAULT ((0)) FOR [UseAutoDiscover]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_OutgoingAuthenticationProtocol]  DEFAULT ((0)) FOR [OutgoingAuthenticationProtocol]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_SendEmailAlert]  DEFAULT ((0)) FOR [SendEmailAlert]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_TimeoutMailboxConnection]  DEFAULT ((0)) FOR [TimeoutMailboxConnection]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD  CONSTRAINT [DF_EmailServerProfileBase_UseDefaultTenantId]  DEFAULT ((1)) FOR [UseDefaultTenantId]
GO
ALTER TABLE [dbo].[EmailServerProfileBase]  WITH CHECK ADD  CONSTRAINT [business_unit_emailserverprofile] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[EmailServerProfileBase] CHECK CONSTRAINT [business_unit_emailserverprofile]
GO
ALTER TABLE [dbo].[EmailServerProfileBase]  WITH CHECK ADD  CONSTRAINT [owner_emailserverprofile] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[EmailServerProfileBase] CHECK CONSTRAINT [owner_emailserverprofile]
GO
