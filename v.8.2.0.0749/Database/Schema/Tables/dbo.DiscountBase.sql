CREATE TABLE [dbo].[DiscountBase]
(
[DiscountId] [uniqueidentifier] NOT NULL,
[DiscountTypeId] [uniqueidentifier] NOT NULL,
[LowQuantity] [decimal] (23, 10) NULL,
[HighQuantity] [decimal] (23, 10) NULL,
[Percentage] [decimal] (23, 10) NULL,
[Amount] [money] NULL,
[StatusCode] [int] NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ImportSequenceNumber] [int] NULL,
[Amount_Base] [money] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DiscountBase] ADD CONSTRAINT [cndx_PrimaryKey_Discount] PRIMARY KEY CLUSTERED  ([DiscountId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_discount_type_discounts] ON [dbo].[DiscountBase] ([DiscountTypeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_HighQuantity] ON [dbo].[DiscountBase] ([HighQuantity]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_LowQuantity] ON [dbo].[DiscountBase] ([LowQuantity]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Percentage] ON [dbo].[DiscountBase] ([Percentage]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Core] ON [dbo].[DiscountBase] ([StatusCode]) WHERE ([StatusCode] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DiscountBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DiscountBase] ADD CONSTRAINT [discount_type_discounts] FOREIGN KEY ([DiscountTypeId]) REFERENCES [dbo].[DiscountTypeBase] ([DiscountTypeId])
GO
ALTER TABLE [dbo].[DiscountBase] ADD CONSTRAINT [transactioncurrency_discount] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
