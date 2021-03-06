USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[InvoiceDetailBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InvoiceDetailBase](
	[InvoiceDetailId] [uniqueidentifier] NOT NULL,
	[SalesRepId] [uniqueidentifier] NULL,
	[IsProductOverridden] [bit] NULL,
	[LineItemNumber] [int] NULL,
	[IsCopied] [bit] NULL,
	[InvoiceId] [uniqueidentifier] NOT NULL,
	[QuantityBackordered] [decimal](23, 10) NULL,
	[UoMId] [uniqueidentifier] NULL,
	[ProductId] [uniqueidentifier] NULL,
	[ActualDeliveryOn] [datetime] NULL,
	[Quantity] [decimal](23, 10) NULL,
	[ManualDiscountAmount] [money] NULL,
	[ProductDescription] [nvarchar](500) NULL,
	[VolumeDiscountAmount] [money] NULL,
	[PricePerUnit] [money] NULL,
	[BaseAmount] [money] NULL,
	[QuantityCancelled] [decimal](23, 10) NULL,
	[ShippingTrackingNumber] [nvarchar](100) NULL,
	[ExtendedAmount] [money] NULL,
	[Description] [nvarchar](max) NULL,
	[IsPriceOverridden] [bit] NULL,
	[ShipTo_Name] [nvarchar](200) NULL,
	[PricingErrorCode] [int] NULL,
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
	[QuantityShipped] [decimal](23, 10) NULL,
	[VersionNumber] [timestamp] NOT NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[VolumeDiscountAmount_Base] [money] NULL,
	[BaseAmount_Base] [money] NULL,
	[PricePerUnit_Base] [money] NULL,
	[Tax_Base] [money] NULL,
	[ExtendedAmount_Base] [money] NULL,
	[ManualDiscountAmount_Base] [money] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[SequenceNumber] [int] NULL,
	[PropertyConfigurationStatus] [int] NOT NULL,
	[ProductTypeCode] [int] NOT NULL,
	[ProductAssociationId] [uniqueidentifier] NULL,
	[ParentBundleId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_InvoiceDetail] PRIMARY KEY CLUSTERED 
(
	[InvoiceDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_product_invoice_details]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_invoice_details] ON [dbo].[InvoiceDetailBase]
(
	[ProductId] ASC
)
WHERE ([ProductId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_system_user_invoicedetail]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_invoicedetail] ON [dbo].[InvoiceDetailBase]
(
	[SalesRepId] ASC
)
WHERE ([SalesRepId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[InvoiceDetailBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[InvoiceDetailBase] ADD  CONSTRAINT [Set_To_Zero114]  DEFAULT ((0)) FOR [IsProductOverridden]
GO
ALTER TABLE [dbo].[InvoiceDetailBase] ADD  CONSTRAINT [DF_InvoiceDetailBase_PropertyConfigurationStatus]  DEFAULT ((2)) FOR [PropertyConfigurationStatus]
GO
ALTER TABLE [dbo].[InvoiceDetailBase] ADD  CONSTRAINT [DF_InvoiceDetailBase_ProductTypeCode]  DEFAULT ((1)) FOR [ProductTypeCode]
GO
ALTER TABLE [dbo].[InvoiceDetailBase]  WITH CHECK ADD  CONSTRAINT [invoice_details] FOREIGN KEY([InvoiceId])
REFERENCES [dbo].[InvoiceBase] ([InvoiceId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] CHECK CONSTRAINT [invoice_details]
GO
ALTER TABLE [dbo].[InvoiceDetailBase]  WITH CHECK ADD  CONSTRAINT [invoicedetail_parent_invoicedetail] FOREIGN KEY([ParentBundleId])
REFERENCES [dbo].[InvoiceDetailBase] ([InvoiceDetailId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] CHECK CONSTRAINT [invoicedetail_parent_invoicedetail]
GO
ALTER TABLE [dbo].[InvoiceDetailBase]  WITH CHECK ADD  CONSTRAINT [product_invoice_details] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] CHECK CONSTRAINT [product_invoice_details]
GO
ALTER TABLE [dbo].[InvoiceDetailBase]  WITH CHECK ADD  CONSTRAINT [productAssociation_invoice_details] FOREIGN KEY([ProductAssociationId])
REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] CHECK CONSTRAINT [productAssociation_invoice_details]
GO
ALTER TABLE [dbo].[InvoiceDetailBase]  WITH CHECK ADD  CONSTRAINT [system_user_invoicedetail] FOREIGN KEY([SalesRepId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] CHECK CONSTRAINT [system_user_invoicedetail]
GO
ALTER TABLE [dbo].[InvoiceDetailBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_invoicedetail] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] CHECK CONSTRAINT [transactioncurrency_invoicedetail]
GO
ALTER TABLE [dbo].[InvoiceDetailBase]  WITH CHECK ADD  CONSTRAINT [unit_of_measurement_invoice_details] FOREIGN KEY([UoMId])
REFERENCES [dbo].[UoMBase] ([UoMId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] CHECK CONSTRAINT [unit_of_measurement_invoice_details]
GO
