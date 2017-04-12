CREATE TABLE [dbo].[QuoteDetailBase]
(
[QuoteDetailId] [uniqueidentifier] NOT NULL,
[QuoteId] [uniqueidentifier] NOT NULL,
[SalesRepId] [uniqueidentifier] NULL,
[LineItemNumber] [int] NULL,
[UoMId] [uniqueidentifier] NULL,
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
[ShipTo_Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[IsPriceOverridden] [bit] NULL,
[Tax] [money] NULL,
[ShipTo_Line1] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ShipTo_Line2] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ShipTo_Line3] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_City] [nvarchar] (80) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[ShipTo_StateOrProvince] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_Country] [nvarchar] (80) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_PostalCode] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[WillCall] [bit] NULL,
[IsProductOverridden] [bit] NULL CONSTRAINT [Set_To_Zero138] DEFAULT ((0)),
[ShipTo_Telephone] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_Fax] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_FreightTermsCode] [int] NULL,
[ShipTo_AddressId] [uniqueidentifier] NULL,
[ShipTo_ContactName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[Tax_Base] [money] NULL,
[ExtendedAmount_Base] [money] NULL,
[PricePerUnit_Base] [money] NULL,
[BaseAmount_Base] [money] NULL,
[ManualDiscountAmount_Base] [money] NULL,
[VolumeDiscountAmount_Base] [money] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[SequenceNumber] [int] NULL,
[ProductTypeCode] [int] NOT NULL CONSTRAINT [DF_QuoteDetailBase_ProductTypeCode] DEFAULT ((1)),
[PropertyConfigurationStatus] [int] NOT NULL CONSTRAINT [DF_QuoteDetailBase_PropertyConfigurationStatus] DEFAULT ((2)),
[ParentBundleId] [uniqueidentifier] NULL,
[ProductAssociationId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[QuoteDetailBase] ADD CONSTRAINT [cndx_PrimaryKey_QuoteDetail] PRIMARY KEY CLUSTERED  ([QuoteDetailId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleId] ON [dbo].[QuoteDetailBase] ([ParentBundleId]) WHERE ([ParentBundleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_quote_details] ON [dbo].[QuoteDetailBase] ([ProductId]) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_ProductId] ON [dbo].[QuoteDetailBase] ([ProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_for_cascaderelationship_quote_details] ON [dbo].[QuoteDetailBase] ([QuoteId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_quotedetail] ON [dbo].[QuoteDetailBase] ([SalesRepId]) WHERE ([SalesRepId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[QuoteDetailBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QuoteDetailBase] ADD CONSTRAINT [product_quote_details] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] ADD CONSTRAINT [productAssociation_quote_details] FOREIGN KEY ([ProductAssociationId]) REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] ADD CONSTRAINT [quote_details] FOREIGN KEY ([QuoteId]) REFERENCES [dbo].[QuoteBase] ([QuoteId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] ADD CONSTRAINT [quotedetail_parent_quotedetail] FOREIGN KEY ([ParentBundleId]) REFERENCES [dbo].[QuoteDetailBase] ([QuoteDetailId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] ADD CONSTRAINT [system_user_quotedetail] FOREIGN KEY ([SalesRepId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] ADD CONSTRAINT [transactioncurrency_quotedetail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] ADD CONSTRAINT [unit_of_measurement_quote_details] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
GO
