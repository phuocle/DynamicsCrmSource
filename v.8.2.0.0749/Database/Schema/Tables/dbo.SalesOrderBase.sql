CREATE TABLE [dbo].[SalesOrderBase]
(
[SalesOrderId] [uniqueidentifier] NOT NULL,
[OpportunityId] [uniqueidentifier] NULL,
[QuoteId] [uniqueidentifier] NULL,
[PriorityCode] [int] NULL,
[SubmitStatus] [int] NULL,
[SubmitDate] [datetime] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[SubmitStatusDescription] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[PriceLevelId] [uniqueidentifier] NULL,
[LastBackofficeSubmit] [datetime] NULL,
[OrderNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[Name] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[PricingErrorCode] [int] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
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
[ShipTo_Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[ShipTo_Line1] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_Line2] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_Line3] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_City] [nvarchar] (80) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_StateOrProvince] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_Country] [nvarchar] (80) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_PostalCode] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[WillCall] [bit] NULL,
[ShipTo_Telephone] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[BillTo_Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ShipTo_FreightTermsCode] [int] NULL,
[ShipTo_Fax] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[BillTo_Line1] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[BillTo_Line2] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[BillTo_Line3] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[BillTo_City] [nvarchar] (80) COLLATE Latin1_General_CI_AI NULL,
[BillTo_StateOrProvince] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[BillTo_Country] [nvarchar] (80) COLLATE Latin1_General_CI_AI NULL,
[BillTo_PostalCode] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[BillTo_Telephone] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[BillTo_Fax] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[DiscountPercentage] [decimal] (23, 10) NULL,
[BillTo_ContactName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[CampaignId] [uniqueidentifier] NULL,
[BillTo_AddressId] [uniqueidentifier] NULL,
[ShipTo_AddressId] [uniqueidentifier] NULL,
[IsPriceLocked] [bit] NULL,
[DateFulfilled] [datetime] NULL,
[ShipTo_ContactName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
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
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SalesOrderBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_SalesOrderBase_OwnerIdType] DEFAULT ((8)),
[CustomerIdType] [int] NULL,
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[StageId] [uniqueidentifier] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[ShipTo_Composite] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ProcessId] [uniqueidentifier] NULL,
[BillTo_Composite] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[SLAId] [uniqueidentifier] NULL,
[LastOnHoldTime] [datetime] NULL,
[SLAInvokedId] [uniqueidentifier] NULL,
[OnHoldTime] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD CONSTRAINT [cndx_PrimaryKey_SalesOrder] PRIMARY KEY CLUSTERED  ([SalesOrderId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_orders] ON [dbo].[SalesOrderBase] ([CampaignId]) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_order_customer_accounts] ON [dbo].[SalesOrderBase] ([CustomerId], [CustomerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_NameTotalAmount] ON [dbo].[SalesOrderBase] ([Name], [TotalAmount]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_sales_orders] ON [dbo].[SalesOrderBase] ([OpportunityId]) WHERE ([OpportunityId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SalesOrderBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD CONSTRAINT [AK1_SalesOrderBase] UNIQUE NONCLUSTERED  ([OwningBusinessUnit], [OrderNumber]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_quote_orders] ON [dbo].[SalesOrderBase] ([QuoteId]) WHERE ([QuoteId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SalesOrderBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SalesOrderBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD CONSTRAINT [business_unit_orders] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD CONSTRAINT [campaign_orders] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId])
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD CONSTRAINT [manualsla_salesorder] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD CONSTRAINT [opportunity_sales_orders] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD CONSTRAINT [owner_salesorders] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD CONSTRAINT [price_level_orders] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD CONSTRAINT [quote_orders] FOREIGN KEY ([QuoteId]) REFERENCES [dbo].[QuoteBase] ([QuoteId])
GO
ALTER TABLE [dbo].[SalesOrderBase] ADD CONSTRAINT [transactioncurrency_salesorder] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
