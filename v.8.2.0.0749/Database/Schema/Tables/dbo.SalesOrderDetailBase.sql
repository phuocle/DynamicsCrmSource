CREATE TABLE [dbo].[SalesOrderDetailBase]
(
[SalesOrderDetailId] [uniqueidentifier] NOT NULL,
[SalesOrderId] [uniqueidentifier] NOT NULL,
[SalesRepId] [uniqueidentifier] NULL,
[IsProductOverridden] [bit] NULL CONSTRAINT [Set_To_Zero146] DEFAULT ((0)),
[IsCopied] [bit] NULL,
[QuantityShipped] [decimal] (23, 10) NULL,
[LineItemNumber] [int] NULL,
[QuantityBackordered] [decimal] (23, 10) NULL,
[UoMId] [uniqueidentifier] NULL,
[QuantityCancelled] [decimal] (23, 10) NULL,
[ProductId] [uniqueidentifier] NULL,
[RequestDeliveryBy] [datetime] NULL,
[Quantity] [decimal] (23, 10) NULL,
[PricingErrorCode] [int] NULL,
[ManualDiscountAmount] [money] NULL,
[ProductDescription] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[VolumeDiscountAmount] [money] NULL,
[PricePerUnit] [money] NULL,
[BaseAmount] [money] NULL,
[ExtendedAmount] [money] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsPriceOverridden] [bit] NULL,
[ShipTo_Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[Tax] [money] NULL,
[CreatedOn] [datetime] NULL,
[ShipTo_Line1] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ShipTo_Line2] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_Line3] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[ShipTo_City] [nvarchar] (80) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_StateOrProvince] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_Country] [nvarchar] (80) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_PostalCode] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[WillCall] [bit] NULL,
[ShipTo_Telephone] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_Fax] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_FreightTermsCode] [int] NULL,
[ShipTo_ContactName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[ShipTo_AddressId] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
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
[ProductTypeCode] [int] NOT NULL CONSTRAINT [DF_SalesOrderDetailBase_ProductTypeCode] DEFAULT ((1)),
[PropertyConfigurationStatus] [int] NOT NULL CONSTRAINT [DF_SalesOrderDetailBase_PropertyConfigurationStatus] DEFAULT ((2))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] ADD CONSTRAINT [cndx_PrimaryKey_SalesOrderDetail] PRIMARY KEY CLUSTERED  ([SalesOrderDetailId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleId] ON [dbo].[SalesOrderDetailBase] ([ParentBundleId]) WHERE ([ParentBundleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_order_details] ON [dbo].[SalesOrderDetailBase] ([ProductId]) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_ProductId] ON [dbo].[SalesOrderDetailBase] ([ProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_for_cascaderelationship_order_details] ON [dbo].[SalesOrderDetailBase] ([SalesOrderId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_salesorderdetail] ON [dbo].[SalesOrderDetailBase] ([SalesRepId]) WHERE ([SalesRepId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SalesOrderDetailBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] ADD CONSTRAINT [order_details] FOREIGN KEY ([SalesOrderId]) REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] ADD CONSTRAINT [product_order_details] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] ADD CONSTRAINT [productAssociation_salesorder_details] FOREIGN KEY ([ProductAssociationId]) REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] ADD CONSTRAINT [salesorderdetail_parent_salesorderdetail] FOREIGN KEY ([ParentBundleId]) REFERENCES [dbo].[SalesOrderDetailBase] ([SalesOrderDetailId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] ADD CONSTRAINT [system_user_salesorderdetail] FOREIGN KEY ([SalesRepId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] ADD CONSTRAINT [transactioncurrency_salesorderdetail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[SalesOrderDetailBase] ADD CONSTRAINT [unit_of_measurement_order_details] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
GO
