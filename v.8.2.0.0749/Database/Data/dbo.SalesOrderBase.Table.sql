USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SalesOrderBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesOrderBase](
	[SalesOrderId] [uniqueidentifier] NOT NULL,
	[OpportunityId] [uniqueidentifier] NULL,
	[QuoteId] [uniqueidentifier] NULL,
	[PriorityCode] [int] NULL,
	[SubmitStatus] [int] NULL,
	[SubmitDate] [datetime] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[SubmitStatusDescription] [nvarchar](max) NULL,
	[PriceLevelId] [uniqueidentifier] NULL,
	[LastBackofficeSubmit] [datetime] NULL,
	[OrderNumber] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](300) NULL,
	[PricingErrorCode] [int] NULL,
	[Description] [nvarchar](max) NULL,
	[DiscountAmount] [money] NULL,
	[FreightAmount] [money] NULL,
	[TotalAmount] [money] NULL,
	[TotalLineItemAmount] [money] NULL,
	[TotalLineItemDiscountAmount] [money] NULL,
	[TotalAmountLessFreight] [money] NULL,
	[TotalDiscountAmount] [money] NULL,
	[RequestDeliveryBy] [datetime] NULL,
	[TotalTax] [money] NULL,
	[ShippingMethodCode] [int] NULL,
	[PaymentTermsCode] [int] NULL,
	[FreightTermsCode] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[StateCode] [int] NOT NULL,
	[StatusCode] [int] NULL,
	[ShipTo_Name] [nvarchar](200) NULL,
	[VersionNumber] [timestamp] NULL,
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
	[BillTo_ContactName] [nvarchar](150) NULL,
	[CampaignId] [uniqueidentifier] NULL,
	[BillTo_AddressId] [uniqueidentifier] NULL,
	[ShipTo_AddressId] [uniqueidentifier] NULL,
	[IsPriceLocked] [bit] NULL,
	[DateFulfilled] [datetime] NULL,
	[ShipTo_ContactName] [nvarchar](150) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TotalLineItemAmount_Base] [money] NULL,
	[TotalDiscountAmount_Base] [money] NULL,
	[TotalAmountLessFreight_Base] [money] NULL,
	[TotalAmount_Base] [money] NULL,
	[DiscountAmount_Base] [money] NULL,
	[FreightAmount_Base] [money] NULL,
	[TotalLineItemDiscountAmount_Base] [money] NULL,
	[TotalTax_Base] [money] NULL,
	[CustomerId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
	[CustomerIdType] [int] NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
	[StageId] [uniqueidentifier] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[ShipTo_Composite] [nvarchar](max) NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[BillTo_Composite] [nvarchar](max) NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[SLAId] [uniqueidentifier] NULL,
	[LastOnHoldTime] [datetime] NULL,
	[SLAInvokedId] [uniqueidentifier] NULL,
	[OnHoldTime] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_SalesOrder] PRIMARY KEY CLUSTERED 
(
	[SalesOrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [AK1_SalesOrderBase]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SalesOrderBase] ADD  CONSTRAINT [AK1_SalesOrderBase] UNIQUE NONCLUSTERED 
(
	[OwningBusinessUnit] ASC,
	[OrderNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_campaign_orders]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_orders] ON [dbo].[SalesOrderBase]
(
	[CampaignId] ASC
)
WHERE ([CampaignId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_opportunity_sales_orders]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_sales_orders] ON [dbo].[SalesOrderBase]
(
	[OpportunityId] ASC
)
WHERE ([OpportunityId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_quote_orders]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_quote_orders] ON [dbo].[SalesOrderBase]
(
	[QuoteId] ASC
)
WHERE ([QuoteId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SalesOrderBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SalesOrderBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_order_customer_accounts]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_order_customer_accounts] ON [dbo].[SalesOrderBase]
(
	[CustomerId] ASC,
	[CustomerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_NameTotalAmount]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_NameTotalAmount] ON [dbo].[SalesOrderBase]
(
	[Name] ASC,
	[TotalAmount] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SalesOrderBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD  CONSTRAINT [DF_SalesOrderBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD  CONSTRAINT [DF_SalesOrderBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[SalesOrderBase]  WITH CHECK ADD  CONSTRAINT [business_unit_orders] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SalesOrderBase] CHECK CONSTRAINT [business_unit_orders]
GO
ALTER TABLE [dbo].[SalesOrderBase]  WITH CHECK ADD  CONSTRAINT [campaign_orders] FOREIGN KEY([CampaignId])
REFERENCES [dbo].[CampaignBase] ([CampaignId])
GO
ALTER TABLE [dbo].[SalesOrderBase] CHECK CONSTRAINT [campaign_orders]
GO
ALTER TABLE [dbo].[SalesOrderBase]  WITH CHECK ADD  CONSTRAINT [manualsla_salesorder] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[SalesOrderBase] CHECK CONSTRAINT [manualsla_salesorder]
GO
ALTER TABLE [dbo].[SalesOrderBase]  WITH CHECK ADD  CONSTRAINT [opportunity_sales_orders] FOREIGN KEY([OpportunityId])
REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[SalesOrderBase] CHECK CONSTRAINT [opportunity_sales_orders]
GO
ALTER TABLE [dbo].[SalesOrderBase]  WITH CHECK ADD  CONSTRAINT [owner_salesorders] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SalesOrderBase] CHECK CONSTRAINT [owner_salesorders]
GO
ALTER TABLE [dbo].[SalesOrderBase]  WITH CHECK ADD  CONSTRAINT [price_level_orders] FOREIGN KEY([PriceLevelId])
REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[SalesOrderBase] CHECK CONSTRAINT [price_level_orders]
GO
ALTER TABLE [dbo].[SalesOrderBase]  WITH CHECK ADD  CONSTRAINT [quote_orders] FOREIGN KEY([QuoteId])
REFERENCES [dbo].[QuoteBase] ([QuoteId])
GO
ALTER TABLE [dbo].[SalesOrderBase] CHECK CONSTRAINT [quote_orders]
GO
ALTER TABLE [dbo].[SalesOrderBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_salesorder] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[SalesOrderBase] CHECK CONSTRAINT [transactioncurrency_salesorder]
GO
