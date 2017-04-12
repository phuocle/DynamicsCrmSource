CREATE TABLE [dbo].[InvoiceDetailBase]
(
[InvoiceDetailId] [uniqueidentifier] NOT NULL,
[SalesRepId] [uniqueidentifier] NULL,
[IsProductOverridden] [bit] NULL CONSTRAINT [Set_To_Zero114] DEFAULT ((0)),
[LineItemNumber] [int] NULL,
[IsCopied] [bit] NULL,
[InvoiceId] [uniqueidentifier] NOT NULL,
[QuantityBackordered] [decimal] (23, 10) NULL,
[UoMId] [uniqueidentifier] NULL,
[ProductId] [uniqueidentifier] NULL,
[ActualDeliveryOn] [datetime] NULL,
[Quantity] [decimal] (23, 10) NULL,
[ManualDiscountAmount] [money] NULL,
[ProductDescription] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[VolumeDiscountAmount] [money] NULL,
[PricePerUnit] [money] NULL,
[BaseAmount] [money] NULL,
[QuantityCancelled] [decimal] (23, 10) NULL,
[ShippingTrackingNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ExtendedAmount] [money] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsPriceOverridden] [bit] NULL,
[ShipTo_Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[PricingErrorCode] [int] NULL,
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
[QuantityShipped] [decimal] (23, 10) NULL,
[VersionNumber] [timestamp] NOT NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
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
[PropertyConfigurationStatus] [int] NOT NULL CONSTRAINT [DF_InvoiceDetailBase_PropertyConfigurationStatus] DEFAULT ((2)),
[ProductTypeCode] [int] NOT NULL CONSTRAINT [DF_InvoiceDetailBase_ProductTypeCode] DEFAULT ((1)),
[ProductAssociationId] [uniqueidentifier] NULL,
[ParentBundleId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[InvoiceDetailBase] ADD CONSTRAINT [cndx_PrimaryKey_InvoiceDetail] PRIMARY KEY CLUSTERED  ([InvoiceDetailId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_for_cascaderelationship_invoice_details] ON [dbo].[InvoiceDetailBase] ([InvoiceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleId] ON [dbo].[InvoiceDetailBase] ([ParentBundleId]) WHERE ([ParentBundleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_invoice_details] ON [dbo].[InvoiceDetailBase] ([ProductId]) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_ProductId] ON [dbo].[InvoiceDetailBase] ([ProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_invoicedetail] ON [dbo].[InvoiceDetailBase] ([SalesRepId]) WHERE ([SalesRepId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[InvoiceDetailBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[InvoiceDetailBase] ADD CONSTRAINT [invoice_details] FOREIGN KEY ([InvoiceId]) REFERENCES [dbo].[InvoiceBase] ([InvoiceId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] ADD CONSTRAINT [invoicedetail_parent_invoicedetail] FOREIGN KEY ([ParentBundleId]) REFERENCES [dbo].[InvoiceDetailBase] ([InvoiceDetailId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] ADD CONSTRAINT [product_invoice_details] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] ADD CONSTRAINT [productAssociation_invoice_details] FOREIGN KEY ([ProductAssociationId]) REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] ADD CONSTRAINT [system_user_invoicedetail] FOREIGN KEY ([SalesRepId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] ADD CONSTRAINT [transactioncurrency_invoicedetail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[InvoiceDetailBase] ADD CONSTRAINT [unit_of_measurement_invoice_details] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
GO
