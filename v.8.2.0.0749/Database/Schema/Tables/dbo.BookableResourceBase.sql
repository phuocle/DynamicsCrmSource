CREATE TABLE [dbo].[BookableResourceBase]
(
[OwnerId] [uniqueidentifier] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[AccountId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[StatusCode] [int] NULL,
[ProcessId] [uniqueidentifier] NULL,
[StageId] [uniqueidentifier] NULL,
[CalendarId] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[ResourceType] [int] NULL,
[StateCode] [int] NOT NULL,
[UserId] [uniqueidentifier] NULL,
[ContactId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[BookableResourceId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CreatedBy] [uniqueidentifier] NULL,
[TimeZone] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_BookableResourceBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBase] ADD CONSTRAINT [PK_bookableresourceBase] PRIMARY KEY CLUSTERED  ([BookableResourceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_bookableresource_AccountId] ON [dbo].[BookableResourceBase] ([AccountId]) WHERE ([AccountId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_bookableresources] ON [dbo].[BookableResourceBase] ([CalendarId]) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_bookableresource_ContactId] ON [dbo].[BookableResourceBase] ([ContactId]) WHERE ([ContactId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_for_cascaderelationship_systemuser_bookableresource_UserId] ON [dbo].[BookableResourceBase] ([UserId]) WHERE ([UserId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBase] ADD CONSTRAINT [account_bookableresource_AccountId] FOREIGN KEY ([AccountId]) REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[BookableResourceBase] ADD CONSTRAINT [business_unit_bookableresource] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceBase] ADD CONSTRAINT [calendar_bookableresources] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[BookableResourceBase] ADD CONSTRAINT [contact_bookableresource_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[BookableResourceBase] ADD CONSTRAINT [owner_bookableresource] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceBase] ADD CONSTRAINT [systemuser_bookableresource_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[BookableResourceBase] ADD CONSTRAINT [TransactionCurrency_bookableresource] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
