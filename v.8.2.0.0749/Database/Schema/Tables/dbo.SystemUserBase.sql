CREATE TABLE [dbo].[SystemUserBase]
(
[SystemUserId] [uniqueidentifier] NOT NULL,
[TerritoryId] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[BusinessUnitId] [uniqueidentifier] NOT NULL,
[ParentSystemUserId] [uniqueidentifier] NULL,
[FirstName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[Salutation] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[MiddleName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[LastName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[PersonalEMailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[FullName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[NickName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Title] [nvarchar] (128) COLLATE Latin1_General_CI_AI NULL,
[InternalEMailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[JobTitle] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[MobileAlertEMail] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[PreferredEmailCode] [int] NULL,
[HomePhone] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[MobilePhone] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[PreferredPhoneCode] [int] NULL,
[PreferredAddressCode] [int] NULL,
[PhotoUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[DomainName] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NOT NULL,
[PassportLo] [int] NULL,
[CreatedOn] [datetime] NULL,
[PassportHi] [int] NULL,
[DisabledReason] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[EmployeeId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[IsDisabled] [bit] NULL,
[GovernmentId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[Skills] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[DisplayInServiceViews] [bit] NULL,
[CalendarId] [uniqueidentifier] NULL,
[ActiveDirectoryGuid] [uniqueidentifier] NULL,
[SetupUser] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_SetupUser] DEFAULT ((0)),
[SiteId] [uniqueidentifier] NULL,
[WindowsLiveID] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[IncomingEmailDeliveryMethod] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_IncomingEmailDeliveryMethod] DEFAULT ((1)),
[OutgoingEmailDeliveryMethod] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_OutgoingEmailDeliveryMethod] DEFAULT ((1)),
[ImportSequenceNumber] [int] NULL,
[AccessMode] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_AccessMode] DEFAULT ((0)),
[InviteStatusCode] [int] NULL CONSTRAINT [DF_SystemUserBase_InviteStatusCode] DEFAULT ((0)),
[IsActiveDirectoryUser] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_IsActiveDirectoryUser] DEFAULT ((1)),
[OverriddenCreatedOn] [datetime] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[YomiFullName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[YomiLastName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[YomiMiddleName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[YomiFirstName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[IsIntegrationUser] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_IsIntegrationUser] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[EmailRouterAccessApproval] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_EmailRouterAccessApproval] DEFAULT ((0)),
[DefaultFiltersPopulated] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_DefaultFiltersPopulated] DEFAULT ((0)),
[CALType] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_CALType] DEFAULT ((0)),
[QueueId] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[YammerEmailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[IsSyncWithDirectory] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_IsSyncWithDirectory] DEFAULT ((0)),
[DefaultMailbox] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[UserLicenseType] [int] NOT NULL CONSTRAINT [DF_SystemUserBase_UserLicenseType] DEFAULT ((3)),
[IsEmailAddressApprovedByO365Admin] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_IsEmailAddressApprovedByO365Admin] DEFAULT ((0)),
[YammerUserId] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[EntityImageId] [uniqueidentifier] NULL,
[IsLicensed] [bit] NOT NULL CONSTRAINT [DF_SystemUserBase_IsLicensed] DEFAULT ((0)),
[StageId] [uniqueidentifier] NULL,
[PositionId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[MobileOfflineProfileId] [uniqueidentifier] NULL,
[DefaultOdbFolderName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NOT NULL CONSTRAINT [DF_SystemUserBase_DefaultOdbFolderName] DEFAULT ('CRM'),
[SharePointEmailAddress] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[ApplicationIdUri] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[AzureActiveDirectoryObjectId] [uniqueidentifier] NULL,
[ApplicationId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserBase] ADD CONSTRAINT [cndx_PrimaryKey_SystemUser] PRIMARY KEY CLUSTERED  ([SystemUserId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserBase] ADD CONSTRAINT [UQ_SystemUserBaseActiveDirectoryGuid] UNIQUE NONCLUSTERED  ([ActiveDirectoryGuid]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_application_user] ON [dbo].[SystemUserBase] ([ApplicationId]) WHERE ([ApplicationId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_azure_active_directoryobjectid] ON [dbo].[SystemUserBase] ([AzureActiveDirectoryObjectId]) WHERE ([AzureActiveDirectoryObjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SystemUserBase] ([BusinessUnitId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_system_users] ON [dbo].[SystemUserBase] ([CalendarId]) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_firstname] ON [dbo].[SystemUserBase] ([FirstName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Cover] ON [dbo].[SystemUserBase] ([FullName], [YomiFullName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_internalemailaddress] ON [dbo].[SystemUserBase] ([InternalEMailAddress]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_isdisabledaccessmodetitle] ON [dbo].[SystemUserBase] ([IsDisabled], [AccessMode], [Title]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_IsLicensed] ON [dbo].[SystemUserBase] ([IsLicensed]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_IsSyncWithDirectory] ON [dbo].[SystemUserBase] ([IsSyncWithDirectory]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_lastname] ON [dbo].[SystemUserBase] ([LastName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_user_parent_user] ON [dbo].[SystemUserBase] ([ParentSystemUserId]) WHERE ([ParentSystemUserId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_site_system_users] ON [dbo].[SystemUserBase] ([SiteId]) WHERE ([SiteId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_territory_system_users] ON [dbo].[SystemUserBase] ([TerritoryId]) WHERE ([TerritoryId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserBase] ADD CONSTRAINT [business_unit_system_users] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SystemUserBase] ADD CONSTRAINT [calendar_system_users] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[SystemUserBase] ADD CONSTRAINT [position_users] FOREIGN KEY ([PositionId]) REFERENCES [dbo].[PositionBase] ([PositionId])
GO
ALTER TABLE [dbo].[SystemUserBase] ADD CONSTRAINT [queue_system_user] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId])
GO
ALTER TABLE [dbo].[SystemUserBase] ADD CONSTRAINT [site_system_users] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId])
GO
ALTER TABLE [dbo].[SystemUserBase] ADD CONSTRAINT [systemuser_defaultmailbox_mailbox] FOREIGN KEY ([DefaultMailbox]) REFERENCES [dbo].[MailboxBase] ([MailboxId])
GO
ALTER TABLE [dbo].[SystemUserBase] ADD CONSTRAINT [territory_system_users] FOREIGN KEY ([TerritoryId]) REFERENCES [dbo].[TerritoryBase] ([TerritoryId])
GO
ALTER TABLE [dbo].[SystemUserBase] ADD CONSTRAINT [TransactionCurrency_SystemUser] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[SystemUserBase] ADD CONSTRAINT [user_parent_user] FOREIGN KEY ([ParentSystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
