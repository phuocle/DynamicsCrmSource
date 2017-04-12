CREATE TABLE [dbo].[QuoteBase]
(
[QuoteId] [uniqueidentifier] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[PriceLevelId] [uniqueidentifier] NULL,
[OpportunityId] [uniqueidentifier] NULL,
[QuoteNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[RevisionNumber] [int] NOT NULL,
[Name] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[PricingErrorCode] [int] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
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
[CampaignId] [uniqueidentifier] NULL,
[ShipTo_AddressId] [uniqueidentifier] NULL,
[ShipTo_ContactName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[BillTo_AddressId] [uniqueidentifier] NULL,
[BillTo_ContactName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UniqueDscId] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
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
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_QuoteBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CustomerId] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_QuoteBase_OwnerIdType] DEFAULT ((8)),
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CustomerIdType] [int] NULL,
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ProcessId] [uniqueidentifier] NULL,
[ShipTo_Composite] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[StageId] [uniqueidentifier] NULL,
[BillTo_Composite] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[SLAId] [uniqueidentifier] NULL,
[LastOnHoldTime] [datetime] NULL,
[SLAInvokedId] [uniqueidentifier] NULL,
[OnHoldTime] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[QuoteBase] ADD CONSTRAINT [cndx_PrimaryKey_Quote] PRIMARY KEY CLUSTERED  ([QuoteId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_quotes] ON [dbo].[QuoteBase] ([CampaignId]) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_quote_customer_accounts] ON [dbo].[QuoteBase] ([CustomerId], [CustomerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_QuoteName] ON [dbo].[QuoteBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_quotes] ON [dbo].[QuoteBase] ([OpportunityId]) WHERE ([OpportunityId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[QuoteBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_Quote] ON [dbo].[QuoteBase] ([OwningBusinessUnit], [QuoteNumber], [RevisionNumber], [UniqueDscId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[QuoteBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_TotalAmount] ON [dbo].[QuoteBase] ([TotalAmount]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[QuoteBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QuoteBase] ADD CONSTRAINT [business_unit_quotes] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[QuoteBase] ADD CONSTRAINT [campaign_quotes] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId])
GO
ALTER TABLE [dbo].[QuoteBase] ADD CONSTRAINT [manualsla_quote] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[QuoteBase] ADD CONSTRAINT [opportunity_quotes] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[QuoteBase] ADD CONSTRAINT [owner_quotes] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[QuoteBase] ADD CONSTRAINT [price_level_quotes] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[QuoteBase] ADD CONSTRAINT [transactioncurrency_quote] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
