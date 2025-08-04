CREATE TABLE [dbo].[BookingStatusBase]
(
[Status] [int] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[Description] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[VersionNumber] [timestamp] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[StateCode] [int] NOT NULL,
[BookingStatusId] [uniqueidentifier] NOT NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_BookingStatusBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookingStatusBase] ADD CONSTRAINT [PK_bookingstatusBase] PRIMARY KEY CLUSTERED  ([BookingStatusId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookingStatusBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookingStatusBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookingStatusBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookingStatusBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookingStatusBase] ADD CONSTRAINT [business_unit_bookingstatus] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookingStatusBase] ADD CONSTRAINT [owner_bookingstatus] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookingStatusBase] ADD CONSTRAINT [TransactionCurrency_bookingstatus] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
