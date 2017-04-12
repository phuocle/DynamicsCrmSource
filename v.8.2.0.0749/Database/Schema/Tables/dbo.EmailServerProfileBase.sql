CREATE TABLE [dbo].[EmailServerProfileBase]
(
[IncomingUserName] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[IncomingPartnerApplication] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[IncomingUseImpersonation] [bit] NULL CONSTRAINT [DF_EmailServerProfileBase_IncomingUseImpersonation] DEFAULT ((0)),
[ServerType] [int] NULL,
[ProcessEmailsReceivedAfter] [datetime] NULL,
[IncomingAuthenticationProtocol] [int] NULL CONSTRAINT [DF_EmailServerProfileBase_IncomingAuthenticationProtocol] DEFAULT ((0)),
[OutgoingServerLocation] [nvarchar] (1042) COLLATE Latin1_General_CI_AI NULL,
[UseSameSettingsForOutgoingConnections] [bit] NULL CONSTRAINT [DF_EmailServerProfileBase_UseSameSettingsForOutgoingConnections] DEFAULT ((1)),
[OutgoingAutoGrantDelegateAccess] [bit] NULL CONSTRAINT [DF_EmailServerProfileBase_OutgoingAutoGrantDelegateAccess] DEFAULT ((0)),
[StatusCode] [int] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[EncodingCodePage] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IncomingCredentialRetrieval] [int] NULL,
[MoveUndeliveredEmails] [bit] NULL CONSTRAINT [DF_EmailServerProfileBase_MoveUndeliveredEmails] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[EmailServerProfileId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[OutgoingUseSSL] [bit] NULL CONSTRAINT [DF_EmailServerProfileBase_OutgoingUseSSL] DEFAULT ((1)),
[OutgoingPortNumber] [int] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[IncomingUseSSL] [bit] NULL CONSTRAINT [DF_EmailServerProfileBase_IncomingUseSSL] DEFAULT ((1)),
[ModifiedBy] [uniqueidentifier] NULL,
[IncomingPortNumber] [int] NULL,
[OutgoingUsername] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[OutgoingCredentialRetrieval] [int] NULL,
[IncomingServerLocation] [nvarchar] (1042) COLLATE Latin1_General_CI_AI NULL,
[MaxConcurrentConnections] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[OutgoingPartnerApplication] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[OutgoingPassword] [varbinary] (max) NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ExchangeVersion] [int] NULL CONSTRAINT [DF_EmailServerProfileBase_ExchangeVersion] DEFAULT ((0)),
[MinPollingIntervalInMinutes] [int] NULL CONSTRAINT [DF_EmailServerProfileBase_MinPollingIntervalInMinutes] DEFAULT ((0)),
[OutgoingUseImpersonation] [bit] NULL,
[UseAutoDiscover] [bit] NULL CONSTRAINT [DF_EmailServerProfileBase_UseAutoDiscover] DEFAULT ((0)),
[IncomingPassword] [varbinary] (max) NULL,
[CreatedOn] [datetime] NULL,
[OutgoingAuthenticationProtocol] [int] NULL CONSTRAINT [DF_EmailServerProfileBase_OutgoingAuthenticationProtocol] DEFAULT ((0)),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_EmailServerProfileBase_OwnerIdType] DEFAULT ((8)),
[OwnerEmailAddress] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[SendEmailAlert] [bit] NULL CONSTRAINT [DF_EmailServerProfileBase_SendEmailAlert] DEFAULT ((0)),
[LastTestValidationStatus] [int] NULL,
[LastTestStartTime] [datetime] NULL,
[LastTestResponse] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[LastTestExecutionStatus] [int] NULL,
[LastTestRequest] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TimeoutMailboxConnection] [bit] NULL CONSTRAINT [DF_EmailServerProfileBase_TimeoutMailboxConnection] DEFAULT ((0)),
[LastTestTotalExecutionTime] [bigint] NULL,
[TimeoutMailboxConnectionAfterAmount] [int] NULL,
[EmailServerTypeName] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[ExchangeOnlineTenantId] [nvarchar] (36) COLLATE Latin1_General_CI_AI NULL,
[DefaultServerLocation] [nvarchar] (1042) COLLATE Latin1_General_CI_AI NULL,
[UseDefaultTenantId] [bit] NULL CONSTRAINT [DF_EmailServerProfileBase_UseDefaultTenantId] DEFAULT ((1)),
[LastAuthorizationStatus] [int] NULL,
[LastCrmMessage] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD CONSTRAINT [PK_EmailServerProfileBase] PRIMARY KEY CLUSTERED  ([EmailServerProfileId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_IncomingServerLocation] ON [dbo].[EmailServerProfileBase] ([IncomingServerLocation]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_Name] ON [dbo].[EmailServerProfileBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_OutgoingServerLocation] ON [dbo].[EmailServerProfileBase] ([OutgoingServerLocation]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_ServerType] ON [dbo].[EmailServerProfileBase] ([ServerType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD CONSTRAINT [business_unit_emailserverprofile] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[EmailServerProfileBase] ADD CONSTRAINT [owner_emailserverprofile] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
