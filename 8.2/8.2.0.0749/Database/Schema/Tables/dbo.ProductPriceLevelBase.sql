CREATE TABLE [dbo].[ProductPriceLevelBase]
(
[PriceLevelId] [uniqueidentifier] NOT NULL,
[ProductPriceLevelId] [uniqueidentifier] NOT NULL,
[UoMId] [uniqueidentifier] NULL,
[UoMScheduleId] [uniqueidentifier] NULL,
[DiscountTypeId] [uniqueidentifier] NULL,
[ProductId] [uniqueidentifier] NOT NULL,
[Percentage] [decimal] (23, 10) NULL,
[Amount] [money] NULL,
[CreatedOn] [datetime] NULL,
[QuantitySellingCode] [int] NULL,
[RoundingPolicyCode] [int] NULL,
[ModifiedOn] [datetime] NULL,
[PricingMethodCode] [int] NULL,
[RoundingOptionCode] [int] NULL,
[RoundingOptionAmount] [money] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[Amount_Base] [money] NULL,
[RoundingOptionAmount_Base] [money] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[StageId] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] ADD CONSTRAINT [cndx_PrimaryKey_ProductPriceLevel] PRIMARY KEY CLUSTERED  ([ProductPriceLevelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_discount_type_product_price_levels] ON [dbo].[ProductPriceLevelBase] ([DiscountTypeId]) WHERE ([DiscountTypeId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_price_level_product_price_levels] ON [dbo].[ProductPriceLevelBase] ([PriceLevelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_product_price_levels] ON [dbo].[ProductPriceLevelBase] ([ProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] ADD CONSTRAINT [AK1_ProductPriceLevelBase] UNIQUE NONCLUSTERED  ([ProductId], [UoMId], [PriceLevelId]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ProductPriceLevelBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] ADD CONSTRAINT [discount_type_product_price_levels] FOREIGN KEY ([DiscountTypeId]) REFERENCES [dbo].[DiscountTypeBase] ([DiscountTypeId])
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] ADD CONSTRAINT [price_level_product_price_levels] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] ADD CONSTRAINT [product_price_levels] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] ADD CONSTRAINT [transactioncurrency_productpricelevel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] ADD CONSTRAINT [unit_of_measure_schedule_product_price_level] FOREIGN KEY ([UoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId])
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] ADD CONSTRAINT [unit_of_measurement_product_price_levels] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
GO
