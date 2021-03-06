USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[InvoiceBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InvoiceBase](
	[InvoiceId] [uniqueidentifier] NOT NULL,
	[OpportunityId] [uniqueidentifier] NULL,
	[PriorityCode] [int] NULL,
	[SalesOrderId] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[LastBackofficeSubmit] [datetime] NULL,
	[PriceLevelId] [uniqueidentifier] NULL,
	[InvoiceNumber] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](300) NULL,
	[Description] [nvarchar](max) NULL,
	[DiscountAmount] [money] NULL,
	[FreightAmount] [money] NULL,
	[TotalAmount] [money] NULL,
	[TotalLineItemAmount] [money] NULL,
	[TotalLineItemDiscountAmount] [money] NULL,
	[TotalAmountLessFreight] [money] NULL,
	[TotalDiscountAmount] [money] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[TotalTax] [money] NULL,
	[ShippingMethodCode] [int] NULL,
	[PaymentTermsCode] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[StateCode] [int] NOT NULL,
	[StatusCode] [int] NULL,
	[ShipTo_Name] [nvarchar](200) NULL,
	[VersionNumber] [timestamp] NULL,
	[PricingErrorCode] [int] NULL,
	[ShipTo_Line1] [nvarchar](4000) NULL,
	[ShipTo_Line2] [nvarchar](4000) NULL,
	[ShipTo_Line3] [nvarchar](4000) NULL,
	[ShipTo_City] [nvarchar](80) NULL,
	[ShipTo_StateOrProvince] [nvarchar](50) NULL,
	[ShipTo_Country] [nvarchar](80) NULL,
	[ShipTo_PostalCode] [nvarchar](20) NULL,
	[WillCall] [bit] NULL,
	[ShipTo_Telephone] [nvarchar](50) NULL,
	[BillTo_Name] [nvarchar](200) NULL,
	[ShipTo_FreightTermsCode] [int] NULL,
	[ShipTo_Fax] [nvarchar](50) NULL,
	[BillTo_Line1] [nvarchar](4000) NULL,
	[BillTo_Line2] [nvarchar](4000) NULL,
	[BillTo_Line3] [nvarchar](4000) NULL,
	[BillTo_City] [nvarchar](80) NULL,
	[BillTo_StateOrProvince] [nvarchar](50) NULL,
	[BillTo_Country] [nvarchar](80) NULL,
	[BillTo_PostalCode] [nvarchar](20) NULL,
	[BillTo_Telephone] [nvarchar](50) NULL,
	[BillTo_Fax] [nvarchar](50) NULL,
	[DiscountPercentage] [decimal](23, 10) NULL,
	[IsPriceLocked] [bit] NULL,
	[DateDelivered] [datetime] NULL,
	[DueDate] [datetime] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[TotalLineItemAmount_Base] [money] NULL,
	[TotalLineItemDiscountAmount_Base] [money] NULL,
	[TotalTax_Base] [money] NULL,
	[TotalAmountLessFreight_Base] [money] NULL,
	[DiscountAmount_Base] [money] NULL,
	[TotalAmount_Base] [money] NULL,
	[FreightAmount_Base] [money] NULL,
	[TotalDiscountAmount_Base] [money] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CustomerId] [uniqueidentifier] NULL,
	[CustomerIdType] [int] NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[OwnerIdType] [int] NOT NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[ShipTo_Composite] [nvarchar](max) NULL,
	[StageId] [uniqueidentifier] NULL,
	[BillTo_Composite] [nvarchar](max) NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[OnHoldTime] [int] NULL,
	[LastOnHoldTime] [datetime] NULL,
	[SLAInvokedId] [uniqueidentifier] NULL,
	[SLAId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Invoice] PRIMARY KEY CLUSTERED 
(
	[InvoiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [AK1_InvoiceBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[InvoiceBase] ADD  CONSTRAINT [AK1_InvoiceBase] UNIQUE NONCLUSTERED 
(
	[OwningBusinessUnit] ASC,
	[InvoiceNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_opportunity_invoices]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_invoices] ON [dbo].[InvoiceBase]
(
	[OpportunityId] ASC
)
WHERE ([OpportunityId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_order_invoices]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_order_invoices] ON [dbo].[InvoiceBase]
(
	[SalesOrderId] ASC
)
WHERE ([SalesOrderId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[InvoiceBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[InvoiceBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_invoice_customer_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_invoice_customer_accounts] ON [dbo].[InvoiceBase]
(
	[CustomerId] ASC,
	[CustomerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[InvoiceBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[InvoiceBase] ADD  CONSTRAINT [DF_InvoiceBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[InvoiceBase] ADD  CONSTRAINT [DF_InvoiceBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[InvoiceBase]  WITH CHECK ADD  CONSTRAINT [business_unit_invoices] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[InvoiceBase] CHECK CONSTRAINT [business_unit_invoices]
GO
ALTER TABLE [dbo].[InvoiceBase]  WITH CHECK ADD  CONSTRAINT [manualsla_invoice] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[InvoiceBase] CHECK CONSTRAINT [manualsla_invoice]
GO
ALTER TABLE [dbo].[InvoiceBase]  WITH CHECK ADD  CONSTRAINT [opportunity_invoices] FOREIGN KEY([OpportunityId])
REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[InvoiceBase] CHECK CONSTRAINT [opportunity_invoices]
GO
ALTER TABLE [dbo].[InvoiceBase]  WITH CHECK ADD  CONSTRAINT [order_invoices] FOREIGN KEY([SalesOrderId])
REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId])
GO
ALTER TABLE [dbo].[InvoiceBase] CHECK CONSTRAINT [order_invoices]
GO
ALTER TABLE [dbo].[InvoiceBase]  WITH CHECK ADD  CONSTRAINT [owner_invoices] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[InvoiceBase] CHECK CONSTRAINT [owner_invoices]
GO
ALTER TABLE [dbo].[InvoiceBase]  WITH CHECK ADD  CONSTRAINT [price_level_invoices] FOREIGN KEY([PriceLevelId])
REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[InvoiceBase] CHECK CONSTRAINT [price_level_invoices]
GO
ALTER TABLE [dbo].[InvoiceBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_invoice] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[InvoiceBase] CHECK CONSTRAINT [transactioncurrency_invoice]
GO
