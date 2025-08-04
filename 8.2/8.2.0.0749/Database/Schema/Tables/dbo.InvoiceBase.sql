CREATE TABLE [dbo].[InvoiceBase]
(
[InvoiceId] [uniqueidentifier] NOT NULL,
[OpportunityId] [uniqueidentifier] NULL,
[PriorityCode] [int] NULL,
[SalesOrderId] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[LastBackofficeSubmit] [datetime] NULL,
[PriceLevelId] [uniqueidentifier] NULL,
[InvoiceNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[Name] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
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
[ShipTo_Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[PricingErrorCode] [int] NULL,
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
[IsPriceLocked] [bit] NULL,
[DateDelivered] [datetime] NULL,
[DueDate] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
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
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_InvoiceBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CustomerId] [uniqueidentifier] NULL,
[CustomerIdType] [int] NULL,
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_InvoiceBase_OwnerIdType] DEFAULT ((8)),
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ProcessId] [uniqueidentifier] NULL,
[ShipTo_Composite] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[StageId] [uniqueidentifier] NULL,
[BillTo_Composite] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[EntityImageId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[OnHoldTime] [int] NULL,
[LastOnHoldTime] [datetime] NULL,
[SLAInvokedId] [uniqueidentifier] NULL,
[SLAId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[InvoiceBase] ADD CONSTRAINT [cndx_PrimaryKey_Invoice] PRIMARY KEY CLUSTERED  ([InvoiceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_invoice_customer_accounts] ON [dbo].[InvoiceBase] ([CustomerId], [CustomerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[InvoiceBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_invoices] ON [dbo].[InvoiceBase] ([OpportunityId]) WHERE ([OpportunityId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[InvoiceBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[InvoiceBase] ADD CONSTRAINT [AK1_InvoiceBase] UNIQUE NONCLUSTERED  ([OwningBusinessUnit], [InvoiceNumber]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_order_invoices] ON [dbo].[InvoiceBase] ([SalesOrderId]) WHERE ([SalesOrderId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[InvoiceBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[InvoiceBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[InvoiceBase] ADD CONSTRAINT [business_unit_invoices] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[InvoiceBase] ADD CONSTRAINT [manualsla_invoice] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[InvoiceBase] ADD CONSTRAINT [opportunity_invoices] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[InvoiceBase] ADD CONSTRAINT [order_invoices] FOREIGN KEY ([SalesOrderId]) REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId])
GO
ALTER TABLE [dbo].[InvoiceBase] ADD CONSTRAINT [owner_invoices] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[InvoiceBase] ADD CONSTRAINT [price_level_invoices] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[InvoiceBase] ADD CONSTRAINT [transactioncurrency_invoice] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
