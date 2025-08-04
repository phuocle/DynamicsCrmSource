CREATE TABLE [dbo].[BookableResourceCharacteristicBase]
(
[ProcessId] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[StatusCode] [int] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[BookableResourceCharacteristicId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[Characteristic] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Resource] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[RatingValue] [uniqueidentifier] NULL,
[StageId] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_BookableResourceCharacteristicBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] ADD CONSTRAINT [PK_bookableresourcecharacteristicBase] PRIMARY KEY CLUSTERED  ([BookableResourceCharacteristicId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceCharacteristicBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceCharacteristicBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceCharacteristicBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceCharacteristicBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] ADD CONSTRAINT [bookableresource_bookableresourcecharacteristic_Resource] FOREIGN KEY ([Resource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId])
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] ADD CONSTRAINT [business_unit_bookableresourcecharacteristic] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] ADD CONSTRAINT [characteristic_bookableresourcecharacteristic_Characteristic] FOREIGN KEY ([Characteristic]) REFERENCES [dbo].[CharacteristicBase] ([CharacteristicId])
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] ADD CONSTRAINT [owner_bookableresourcecharacteristic] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] ADD CONSTRAINT [ratingvalue_bookableresourcecharacteristic_RatingValue] FOREIGN KEY ([RatingValue]) REFERENCES [dbo].[RatingValueBase] ([RatingValueId])
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] ADD CONSTRAINT [TransactionCurrency_bookableresourcecharacteristic] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
