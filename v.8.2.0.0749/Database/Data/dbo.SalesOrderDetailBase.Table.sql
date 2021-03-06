USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SalesOrderDetailBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesOrderDetailBase](
	[SalesOrderDetailId] [uniqueidentifier] NOT NULL,
	[SalesOrderId] [uniqueidentifier] NOT NULL,
	[SalesRepId] [uniqueidentifier] NULL,
	[IsProductOverridden] [bit] NULL,
	[IsCopied] [bit] NULL,
	[QuantityShipped] [decimal](23, 10) NULL,
	[LineItemNumber] [int] NULL,
	[QuantityBackordered] [decimal](23, 10) NULL,
	[UoMId] [uniqueidentifier] NULL,
	[QuantityCancelled] [decimal](23, 10) NULL,
	[ProductId] [uniqueidentifier] NULL,
	[RequestDeliveryBy] [datetime] NULL,
	[Quantity] [decimal](23, 10) NULL,
	[PricingErrorCode] [int] NULL,
	[ManualDiscountAmount] [money] NULL,
	[ProductDescription] [nvarchar](500) NULL,
	[VolumeDiscountAmount] [money] NULL,
	[PricePerUnit] [money] NULL,
	[BaseAmount] [money] NULL,
	[ExtendedAmount] [money] NULL,
	[Description] [nvarchar](max) NULL,
	[IsPriceOverridden] [bit] NULL,
	[ShipTo_Name] [nvarchar](200) NULL,
	[Tax] [money] NULL,
	[CreatedOn] [datetime] NULL,
	[ShipTo_Line1] [nvarchar](4000) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ShipTo_Line2] [nvarchar](4000) NULL,
	[ShipTo_Line3] [nvarchar](4000) NULL,
	[ModifiedOn] [datetime] NULL,
	[ShipTo_City] [nvarchar](80) NULL,
	[ShipTo_StateOrProvince] [nvarchar](50) NULL,
	[ShipTo_Country] [nvarchar](80) NULL,
	[ShipTo_PostalCode] [nvarchar](20) NULL,
	[WillCall] [bit] NULL,
	[ShipTo_Telephone] [nvarchar](50) NULL,
	[ShipTo_Fax] [nvarchar](50) NULL,
	[ShipTo_FreightTermsCode] [int] NULL,
	[ShipTo_ContactName] [nvarchar](150) NULL,
	[VersionNumber] [timestamp] NULL,
	[ShipTo_AddressId] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[BaseAmount_Base] [money] NULL,
	[PricePerUnit_Base] [money] NULL,
	[VolumeDiscountAmount_Base] [money] NULL,
	[ExtendedAmount_Base] [money] NULL,
	[Tax_Base] [money] NULL,
	[ManualDiscountAmount_Base] [money] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[SequenceNumber] [int] NULL,
	[ProductAssociationId] [uniqueidentifier] NULL,
	[ParentBundleId] [uniqueidentifier] NULL,
	[ProductTypeCode] [int] NOT NULL,
	[PropertyConfigurationStatus] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_SalesOrderDetail] PRIMARY KEY CLUSTERED 
(
	[SalesOrderDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_product_order_details]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_order_details] ON [dbo].[SalesOrderDetailBase]
(
	[ProductId] ASC
)
WHERE ([ProductId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_system_user_salesorderdetail]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_salesorderdetail] ON [dbo].[SalesOrderDetailBase]
(
	[SalesRepId] ASC
)
WHERE ([SalesRepId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SalesOrderDetailBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] ADD  CONSTRAINT [Set_To_Zero146]  DEFAULT ((0)) FOR [IsProductOverridden]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] ADD  CONSTRAINT [DF_SalesOrderDetailBase_ProductTypeCode]  DEFAULT ((1)) FOR [ProductTypeCode]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] ADD  CONSTRAINT [DF_SalesOrderDetailBase_PropertyConfigurationStatus]  DEFAULT ((2)) FOR [PropertyConfigurationStatus]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase]  WITH CHECK ADD  CONSTRAINT [order_details] FOREIGN KEY([SalesOrderId])
REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] CHECK CONSTRAINT [order_details]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase]  WITH CHECK ADD  CONSTRAINT [product_order_details] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] CHECK CONSTRAINT [product_order_details]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase]  WITH CHECK ADD  CONSTRAINT [productAssociation_salesorder_details] FOREIGN KEY([ProductAssociationId])
REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] CHECK CONSTRAINT [productAssociation_salesorder_details]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase]  WITH CHECK ADD  CONSTRAINT [salesorderdetail_parent_salesorderdetail] FOREIGN KEY([ParentBundleId])
REFERENCES [dbo].[SalesOrderDetailBase] ([SalesOrderDetailId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] CHECK CONSTRAINT [salesorderdetail_parent_salesorderdetail]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase]  WITH CHECK ADD  CONSTRAINT [system_user_salesorderdetail] FOREIGN KEY([SalesRepId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] CHECK CONSTRAINT [system_user_salesorderdetail]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_salesorderdetail] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] CHECK CONSTRAINT [transactioncurrency_salesorderdetail]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase]  WITH CHECK ADD  CONSTRAINT [unit_of_measurement_order_details] FOREIGN KEY([UoMId])
REFERENCES [dbo].[UoMBase] ([UoMId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] CHECK CONSTRAINT [unit_of_measurement_order_details]
GO
