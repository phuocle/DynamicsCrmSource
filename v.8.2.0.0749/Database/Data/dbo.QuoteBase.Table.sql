USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[QuoteBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QuoteBase](
	[QuoteId] [uniqueidentifier] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[PriceLevelId] [uniqueidentifier] NULL,
	[OpportunityId] [uniqueidentifier] NULL,
	[QuoteNumber] [nvarchar](100) NOT NULL,
	[RevisionNumber] [int] NOT NULL,
	[Name] [nvarchar](300) NULL,
	[PricingErrorCode] [int] NULL,
	[Description] [nvarchar](max) NULL,
	[DiscountAmount] [money] NULL,
	[FreightAmount] [money] NULL,
	[TotalAmount] [money] NULL,
	[TotalLineItemAmount] [money] NULL,
	[TotalLineItemDiscountAmount] [money] NULL,
	[TotalAmountLessFreight] [money] NULL,
	[EffectiveFrom] [datetime] NULL,
	[TotalTax] [money] NULL,
	[TotalDiscountAmount] [money] NULL,
	[EffectiveTo] [datetime] NULL,
	[ExpiresOn] [datetime] NULL,
	[ClosedOn] [datetime] NULL,
	[RequestDeliveryBy] [datetime] NULL,
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
	[CampaignId] [uniqueidentifier] NULL,
	[ShipTo_AddressId] [uniqueidentifier] NULL,
	[ShipTo_ContactName] [nvarchar](150) NULL,
	[BillTo_AddressId] [uniqueidentifier] NULL,
	[BillTo_ContactName] [nvarchar](150) NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[UniqueDscId] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[TotalLineItemDiscountAmount_Base] [money] NULL,
	[TotalAmountLessFreight_Base] [money] NULL,
	[DiscountAmount_Base] [money] NULL,
	[FreightAmount_Base] [money] NULL,
	[TotalAmount_Base] [money] NULL,
	[TotalDiscountAmount_Base] [money] NULL,
	[TotalTax_Base] [money] NULL,
	[TotalLineItemAmount_Base] [money] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CustomerId] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[CustomerIdType] [int] NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[ShipTo_Composite] [nvarchar](max) NULL,
	[StageId] [uniqueidentifier] NULL,
	[BillTo_Composite] [nvarchar](max) NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[SLAId] [uniqueidentifier] NULL,
	[LastOnHoldTime] [datetime] NULL,
	[SLAInvokedId] [uniqueidentifier] NULL,
	[OnHoldTime] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_Quote] PRIMARY KEY CLUSTERED 
(
	[QuoteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_campaign_quotes]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_quotes] ON [dbo].[QuoteBase]
(
	[CampaignId] ASC
)
WHERE ([CampaignId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_opportunity_quotes]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_quotes] ON [dbo].[QuoteBase]
(
	[OpportunityId] ASC
)
WHERE ([OpportunityId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_QuoteName]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_QuoteName] ON [dbo].[QuoteBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[QuoteBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_TotalAmount]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_TotalAmount] ON [dbo].[QuoteBase]
(
	[TotalAmount] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[QuoteBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_quote_customer_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_quote_customer_accounts] ON [dbo].[QuoteBase]
(
	[CustomerId] ASC,
	[CustomerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[QuoteBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Unique_Quote]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_Quote] ON [dbo].[QuoteBase]
(
	[OwningBusinessUnit] ASC,
	[QuoteNumber] ASC,
	[RevisionNumber] ASC,
	[UniqueDscId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QuoteBase] ADD  CONSTRAINT [DF_QuoteBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[QuoteBase] ADD  CONSTRAINT [DF_QuoteBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[QuoteBase]  WITH CHECK ADD  CONSTRAINT [business_unit_quotes] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[QuoteBase] CHECK CONSTRAINT [business_unit_quotes]
GO
ALTER TABLE [dbo].[QuoteBase]  WITH CHECK ADD  CONSTRAINT [campaign_quotes] FOREIGN KEY([CampaignId])
REFERENCES [dbo].[CampaignBase] ([CampaignId])
GO
ALTER TABLE [dbo].[QuoteBase] CHECK CONSTRAINT [campaign_quotes]
GO
ALTER TABLE [dbo].[QuoteBase]  WITH CHECK ADD  CONSTRAINT [manualsla_quote] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[QuoteBase] CHECK CONSTRAINT [manualsla_quote]
GO
ALTER TABLE [dbo].[QuoteBase]  WITH CHECK ADD  CONSTRAINT [opportunity_quotes] FOREIGN KEY([OpportunityId])
REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[QuoteBase] CHECK CONSTRAINT [opportunity_quotes]
GO
ALTER TABLE [dbo].[QuoteBase]  WITH CHECK ADD  CONSTRAINT [owner_quotes] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[QuoteBase] CHECK CONSTRAINT [owner_quotes]
GO
ALTER TABLE [dbo].[QuoteBase]  WITH CHECK ADD  CONSTRAINT [price_level_quotes] FOREIGN KEY([PriceLevelId])
REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[QuoteBase] CHECK CONSTRAINT [price_level_quotes]
GO
ALTER TABLE [dbo].[QuoteBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_quote] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[QuoteBase] CHECK CONSTRAINT [transactioncurrency_quote]
GO
