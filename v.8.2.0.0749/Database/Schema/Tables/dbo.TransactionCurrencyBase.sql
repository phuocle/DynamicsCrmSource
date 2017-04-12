CREATE TABLE [dbo].[TransactionCurrencyBase]
(
[StatusCode] [int] NULL,
[ModifiedOn] [datetime] NULL,
[StateCode] [int] NOT NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NOT NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CurrencySymbol] [nvarchar] (13) COLLATE Latin1_General_CI_AI NOT NULL,
[UniqueDscId] [uniqueidentifier] NULL,
[CurrencyName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ISOCurrencyCode] [nvarchar] (5) COLLATE Latin1_General_CI_AI NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CurrencyPrecision] [int] NOT NULL CONSTRAINT [DF_TransactionCurrencyBase_CurrencyPrecision] DEFAULT ((2)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[EntityImageId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TransactionCurrencyBase] ADD CONSTRAINT [cndx_PrimaryKey_TransactionCurrency] PRIMARY KEY CLUSTERED  ([TransactionCurrencyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_CurrencyNameSymbol] ON [dbo].[TransactionCurrencyBase] ([CurrencyName], [CurrencySymbol], [ExchangeRate], [CurrencyPrecision]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_ISOCurrencyCode] ON [dbo].[TransactionCurrencyBase] ([ISOCurrencyCode], [UniqueDscId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[TransactionCurrencyBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TransactionCurrencyBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
