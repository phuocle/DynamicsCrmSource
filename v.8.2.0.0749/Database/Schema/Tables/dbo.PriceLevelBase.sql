CREATE TABLE [dbo].[PriceLevelBase]
(
[PriceLevelId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ShippingMethodCode] [int] NULL,
[BeginDate] [datetime] NULL,
[PaymentMethodCode] [int] NULL,
[FreightTermsCode] [int] NULL,
[EndDate] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[StateCode] [int] NOT NULL,
[VersionNumber] [timestamp] NULL,
[StatusCode] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[PriceLevelBase] ADD CONSTRAINT [cndx_PrimaryKey_PriceLevel] PRIMARY KEY CLUSTERED  ([PriceLevelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[PriceLevelBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[PriceLevelBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_PriceLevel] ON [dbo].[PriceLevelBase] ([TransactionCurrencyId], [Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PriceLevelBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PriceLevelBase] ADD CONSTRAINT [transactioncurrency_pricelevel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
