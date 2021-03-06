USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[QuoteDetailBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QuoteDetailBase](
	[QuoteDetailId] [uniqueidentifier] NOT NULL,
	[QuoteId] [uniqueidentifier] NOT NULL,
	[SalesRepId] [uniqueidentifier] NULL,
	[LineItemNumber] [int] NULL,
	[UoMId] [uniqueidentifier] NULL,
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
	[ShipTo_Name] [nvarchar](200) NULL,
	[IsPriceOverridden] [bit] NULL,
	[Tax] [money] NULL,
	[ShipTo_Line1] [nvarchar](4000) NULL,
	[CreatedOn] [datetime] NULL,
	[ShipTo_Line2] [nvarchar](4000) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ShipTo_Line3] [nvarchar](4000) NULL,
	[ShipTo_City] [nvarchar](80) NULL,
	[ModifiedOn] [datetime] NULL,
	[ShipTo_StateOrProvince] [nvarchar](50) NULL,
	[ShipTo_Country] [nvarchar](80) NULL,
	[ShipTo_PostalCode] [nvarchar](20) NULL,
	[WillCall] [bit] NULL,
	[IsProductOverridden] [bit] NULL,
	[ShipTo_Telephone] [nvarchar](50) NULL,
	[ShipTo_Fax] [nvarchar](50) NULL,
	[ShipTo_FreightTermsCode] [int] NULL,
	[ShipTo_AddressId] [uniqueidentifier] NULL,
	[ShipTo_ContactName] [nvarchar](150) NULL,
	[VersionNumber] [timestamp] NULL,
	[ImportSequenceNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
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
	[ProductTypeCode] [int] NOT NULL,
	[PropertyConfigurationStatus] [int] NOT NULL,
	[ParentBundleId] [uniqueidentifier] NULL,
	[ProductAssociationId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_QuoteDetail] PRIMARY KEY CLUSTERED 
(
	[QuoteDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_product_quote_details]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_quote_details] ON [dbo].[QuoteDetailBase]
(
	[ProductId] ASC
)
WHERE ([ProductId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_system_user_quotedetail]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_quotedetail] ON [dbo].[QuoteDetailBase]
(
	[SalesRepId] ASC
)
WHERE ([SalesRepId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[QuoteDetailBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QuoteDetailBase] ADD  CONSTRAINT [Set_To_Zero138]  DEFAULT ((0)) FOR [IsProductOverridden]
GO
ALTER TABLE [dbo].[QuoteDetailBase] ADD  CONSTRAINT [DF_QuoteDetailBase_ProductTypeCode]  DEFAULT ((1)) FOR [ProductTypeCode]
GO
ALTER TABLE [dbo].[QuoteDetailBase] ADD  CONSTRAINT [DF_QuoteDetailBase_PropertyConfigurationStatus]  DEFAULT ((2)) FOR [PropertyConfigurationStatus]
GO
ALTER TABLE [dbo].[QuoteDetailBase]  WITH CHECK ADD  CONSTRAINT [product_quote_details] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] CHECK CONSTRAINT [product_quote_details]
GO
ALTER TABLE [dbo].[QuoteDetailBase]  WITH CHECK ADD  CONSTRAINT [productAssociation_quote_details] FOREIGN KEY([ProductAssociationId])
REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] CHECK CONSTRAINT [productAssociation_quote_details]
GO
ALTER TABLE [dbo].[QuoteDetailBase]  WITH CHECK ADD  CONSTRAINT [quote_details] FOREIGN KEY([QuoteId])
REFERENCES [dbo].[QuoteBase] ([QuoteId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] CHECK CONSTRAINT [quote_details]
GO
ALTER TABLE [dbo].[QuoteDetailBase]  WITH CHECK ADD  CONSTRAINT [quotedetail_parent_quotedetail] FOREIGN KEY([ParentBundleId])
REFERENCES [dbo].[QuoteDetailBase] ([QuoteDetailId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] CHECK CONSTRAINT [quotedetail_parent_quotedetail]
GO
ALTER TABLE [dbo].[QuoteDetailBase]  WITH CHECK ADD  CONSTRAINT [system_user_quotedetail] FOREIGN KEY([SalesRepId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] CHECK CONSTRAINT [system_user_quotedetail]
GO
ALTER TABLE [dbo].[QuoteDetailBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_quotedetail] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] CHECK CONSTRAINT [transactioncurrency_quotedetail]
GO
ALTER TABLE [dbo].[QuoteDetailBase]  WITH CHECK ADD  CONSTRAINT [unit_of_measurement_quote_details] FOREIGN KEY([UoMId])
REFERENCES [dbo].[UoMBase] ([UoMId])
GO
ALTER TABLE [dbo].[QuoteDetailBase] CHECK CONSTRAINT [unit_of_measurement_quote_details]
GO
