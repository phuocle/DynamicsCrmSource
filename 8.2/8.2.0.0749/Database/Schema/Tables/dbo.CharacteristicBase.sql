CREATE TABLE [dbo].[CharacteristicBase]
(
[ExchangeRate] [decimal] (23, 10) NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[CharacteristicId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[StatusCode] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[CharacteristicType] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_CharacteristicBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CharacteristicBase] ADD CONSTRAINT [PK_characteristicBase] PRIMARY KEY CLUSTERED  ([CharacteristicId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[CharacteristicBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[CharacteristicBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[CharacteristicBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CharacteristicBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CharacteristicBase] ADD CONSTRAINT [business_unit_characteristic] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[CharacteristicBase] ADD CONSTRAINT [owner_characteristic] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[CharacteristicBase] ADD CONSTRAINT [TransactionCurrency_characteristic] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
