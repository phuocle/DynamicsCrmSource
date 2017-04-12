CREATE TABLE [dbo].[BookableResourceBookingBase]
(
[BookingStatus] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[BookingType] [int] NULL,
[StartTime] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[BookableResourceBookingId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[StatusCode] [int] NULL,
[StateCode] [int] NOT NULL,
[Duration] [int] NULL,
[StageId] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[EndTime] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[Resource] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[Header] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_BookableResourceBookingBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] ADD CONSTRAINT [PK_bookableresourcebookingBase] PRIMARY KEY CLUSTERED  ([BookableResourceBookingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceBookingBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceBookingBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceBookingBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceBookingBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] ADD CONSTRAINT [bookableresource_bookableresourcebooking_Resource] FOREIGN KEY ([Resource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId])
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] ADD CONSTRAINT [bookableresourcebookingheader_bookableresourcebooking_Header] FOREIGN KEY ([Header]) REFERENCES [dbo].[BookableResourceBookingHeaderBase] ([BookableResourceBookingHeaderId])
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] ADD CONSTRAINT [bookingstatus_bookableresourcebooking_BookingStatus] FOREIGN KEY ([BookingStatus]) REFERENCES [dbo].[BookingStatusBase] ([BookingStatusId])
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] ADD CONSTRAINT [business_unit_bookableresourcebooking] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] ADD CONSTRAINT [owner_bookableresourcebooking] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] ADD CONSTRAINT [TransactionCurrency_bookableresourcebooking] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
