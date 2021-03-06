USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ContractDetailBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractDetailBase](
	[ContractDetailId] [uniqueidentifier] NOT NULL,
	[ServiceAddress] [uniqueidentifier] NULL,
	[UoMId] [uniqueidentifier] NULL,
	[ProductId] [uniqueidentifier] NULL,
	[ProductSerialNumber] [nvarchar](100) NULL,
	[ContractId] [uniqueidentifier] NOT NULL,
	[LineItemOrder] [int] NULL,
	[ServiceContractUnitsCode] [int] NULL,
	[InitialQuantity] [int] NULL,
	[Title] [nvarchar](500) NULL,
	[EffectivityCalendar] [nvarchar](168) NULL,
	[ActiveOn] [datetime] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[ExpiresOn] [datetime] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[TotalAllotments] [int] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Rate] [money] NULL,
	[ModifiedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[Price] [money] NOT NULL,
	[Discount] [money] NULL,
	[Net] [money] NULL,
	[StateCode] [int] NOT NULL,
	[AllotmentsRemaining] [int] NULL,
	[StatusCode] [int] NULL,
	[AllotmentsUsed] [int] NULL,
	[UoMScheduleId] [uniqueidentifier] NULL,
	[DiscountPercentage] [decimal](23, 10) NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[Discount_Base] [money] NULL,
	[Rate_Base] [money] NULL,
	[Price_Base] [money] NULL,
	[Net_Base] [money] NULL,
	[AllotmentsOverage] [int] NULL,
	[CustomerId] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CustomerIdType] [int] NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
 CONSTRAINT [cndx_PrimaryKey_ContractDetail] PRIMARY KEY CLUSTERED 
(
	[ContractDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_contract_detail_unit_of_measure_schedule]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_detail_unit_of_measure_schedule] ON [dbo].[ContractDetailBase]
(
	[UoMScheduleId] ASC
)
WHERE ([UoMScheduleId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_customer_address_contract_line_items]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contract_line_items] ON [dbo].[ContractDetailBase]
(
	[ServiceAddress] ASC
)
WHERE ([ServiceAddress] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_product_contract_line_items]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_contract_line_items] ON [dbo].[ContractDetailBase]
(
	[ProductId] ASC
)
WHERE ([ProductId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContractDetailBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ContractDetailBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_contract_line_items]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_line_items] ON [dbo].[ContractDetailBase]
(
	[ContractId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_contractlineitem_customer_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contractlineitem_customer_accounts] ON [dbo].[ContractDetailBase]
(
	[CustomerId] ASC,
	[CustomerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContractDetailBase]  WITH CHECK ADD  CONSTRAINT [contract_detail_unit_of_measure_schedule] FOREIGN KEY([UoMScheduleId])
REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId])
GO
ALTER TABLE [dbo].[ContractDetailBase] CHECK CONSTRAINT [contract_detail_unit_of_measure_schedule]
GO
ALTER TABLE [dbo].[ContractDetailBase]  WITH CHECK ADD  CONSTRAINT [contract_line_items] FOREIGN KEY([ContractId])
REFERENCES [dbo].[ContractBase] ([ContractId])
GO
ALTER TABLE [dbo].[ContractDetailBase] CHECK CONSTRAINT [contract_line_items]
GO
ALTER TABLE [dbo].[ContractDetailBase]  WITH CHECK ADD  CONSTRAINT [customer_address_contract_line_items] FOREIGN KEY([ServiceAddress])
REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId])
GO
ALTER TABLE [dbo].[ContractDetailBase] CHECK CONSTRAINT [customer_address_contract_line_items]
GO
ALTER TABLE [dbo].[ContractDetailBase]  WITH CHECK ADD  CONSTRAINT [product_contract_line_items] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ContractDetailBase] CHECK CONSTRAINT [product_contract_line_items]
GO
ALTER TABLE [dbo].[ContractDetailBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_contractdetail] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ContractDetailBase] CHECK CONSTRAINT [transactioncurrency_contractdetail]
GO
ALTER TABLE [dbo].[ContractDetailBase]  WITH CHECK ADD  CONSTRAINT [unit_of_measurement_contract_line_items] FOREIGN KEY([UoMId])
REFERENCES [dbo].[UoMBase] ([UoMId])
GO
ALTER TABLE [dbo].[ContractDetailBase] CHECK CONSTRAINT [unit_of_measurement_contract_line_items]
GO
