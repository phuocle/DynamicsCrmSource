CREATE TABLE [dbo].[RatingValueBase]
(
[OwnerId] [uniqueidentifier] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Value] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[RatingValueId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[RatingModel] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_RatingValueBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RatingValueBase] ADD CONSTRAINT [PK_ratingvalueBase] PRIMARY KEY CLUSTERED  ([RatingValueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[RatingValueBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[RatingValueBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[RatingValueBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RatingValueBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RatingValueBase] ADD CONSTRAINT [business_unit_ratingvalue] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[RatingValueBase] ADD CONSTRAINT [owner_ratingvalue] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[RatingValueBase] ADD CONSTRAINT [ratingmodel_ratingvalue_RatingModel] FOREIGN KEY ([RatingModel]) REFERENCES [dbo].[RatingModelBase] ([RatingModelId])
GO
ALTER TABLE [dbo].[RatingValueBase] ADD CONSTRAINT [TransactionCurrency_ratingvalue] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
