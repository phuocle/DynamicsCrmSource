CREATE TABLE [dbo].[BookableResourceBookingHeaderBase]
(
[BookableResourceBookingHeaderId] [uniqueidentifier] NOT NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[OverriddenCreatedOn] [datetime] NULL,
[StageId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[StatusCode] [int] NULL,
[StateCode] [int] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[StartTime] [datetime] NULL,
[Duration] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[EndTime] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_BookableResourceBookingHeaderBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase] ADD CONSTRAINT [PK_bookableresourcebookingheaderBase] PRIMARY KEY CLUSTERED  ([BookableResourceBookingHeaderId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceBookingHeaderBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceBookingHeaderBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceBookingHeaderBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceBookingHeaderBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase] ADD CONSTRAINT [business_unit_bookableresourcebookingheader] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase] ADD CONSTRAINT [owner_bookableresourcebookingheader] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase] ADD CONSTRAINT [TransactionCurrency_bookableresourcebookingheader] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
