CREATE TABLE [dbo].[RatingModelBase]
(
[UTCConversionTimeZoneCode] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[StateCode] [int] NOT NULL,
[OverriddenCreatedOn] [datetime] NULL,
[RatingModelId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[StatusCode] [int] NULL,
[MinRatingValue] [int] NULL,
[ModifiedOn] [datetime] NULL,
[MaxRatingValue] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_RatingModelBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RatingModelBase] ADD CONSTRAINT [PK_ratingmodelBase] PRIMARY KEY CLUSTERED  ([RatingModelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[RatingModelBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[RatingModelBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[RatingModelBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RatingModelBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RatingModelBase] ADD CONSTRAINT [business_unit_ratingmodel] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[RatingModelBase] ADD CONSTRAINT [owner_ratingmodel] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[RatingModelBase] ADD CONSTRAINT [TransactionCurrency_ratingmodel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
