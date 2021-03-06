USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ProductPriceLevelBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductPriceLevelBase](
	[PriceLevelId] [uniqueidentifier] NOT NULL,
	[ProductPriceLevelId] [uniqueidentifier] NOT NULL,
	[UoMId] [uniqueidentifier] NULL,
	[UoMScheduleId] [uniqueidentifier] NULL,
	[DiscountTypeId] [uniqueidentifier] NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[Percentage] [decimal](23, 10) NULL,
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
	[ExchangeRate] [decimal](23, 10) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[Amount_Base] [money] NULL,
	[RoundingOptionAmount_Base] [money] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[StageId] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
 CONSTRAINT [cndx_PrimaryKey_ProductPriceLevel] PRIMARY KEY CLUSTERED 
(
	[ProductPriceLevelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [AK1_ProductPriceLevelBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ProductPriceLevelBase] ADD  CONSTRAINT [AK1_ProductPriceLevelBase] UNIQUE NONCLUSTERED 
(
	[ProductId] ASC,
	[UoMId] ASC,
	[PriceLevelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_discount_type_product_price_levels]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_discount_type_product_price_levels] ON [dbo].[ProductPriceLevelBase]
(
	[DiscountTypeId] ASC
)
WHERE ([DiscountTypeId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ProductPriceLevelBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_price_level_product_price_levels]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_price_level_product_price_levels] ON [dbo].[ProductPriceLevelBase]
(
	[PriceLevelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_product_price_levels]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_product_price_levels] ON [dbo].[ProductPriceLevelBase]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductPriceLevelBase]  WITH CHECK ADD  CONSTRAINT [discount_type_product_price_levels] FOREIGN KEY([DiscountTypeId])
REFERENCES [dbo].[DiscountTypeBase] ([DiscountTypeId])
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] CHECK CONSTRAINT [discount_type_product_price_levels]
GO
ALTER TABLE [dbo].[ProductPriceLevelBase]  WITH CHECK ADD  CONSTRAINT [price_level_product_price_levels] FOREIGN KEY([PriceLevelId])
REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] CHECK CONSTRAINT [price_level_product_price_levels]
GO
ALTER TABLE [dbo].[ProductPriceLevelBase]  WITH CHECK ADD  CONSTRAINT [product_price_levels] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] CHECK CONSTRAINT [product_price_levels]
GO
ALTER TABLE [dbo].[ProductPriceLevelBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_productpricelevel] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] CHECK CONSTRAINT [transactioncurrency_productpricelevel]
GO
ALTER TABLE [dbo].[ProductPriceLevelBase]  WITH CHECK ADD  CONSTRAINT [unit_of_measure_schedule_product_price_level] FOREIGN KEY([UoMScheduleId])
REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId])
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] CHECK CONSTRAINT [unit_of_measure_schedule_product_price_level]
GO
ALTER TABLE [dbo].[ProductPriceLevelBase]  WITH CHECK ADD  CONSTRAINT [unit_of_measurement_product_price_levels] FOREIGN KEY([UoMId])
REFERENCES [dbo].[UoMBase] ([UoMId])
GO
ALTER TABLE [dbo].[ProductPriceLevelBase] CHECK CONSTRAINT [unit_of_measurement_product_price_levels]
GO
