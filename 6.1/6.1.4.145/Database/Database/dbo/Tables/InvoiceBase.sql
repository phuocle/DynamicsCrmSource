CREATE TABLE [dbo].[InvoiceBase] (
    [InvoiceId]                        UNIQUEIDENTIFIER NOT NULL,
    [OpportunityId]                    UNIQUEIDENTIFIER NULL,
    [PriorityCode]                     INT              NULL,
    [SalesOrderId]                     UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [LastBackofficeSubmit]             DATETIME         NULL,
    [PriceLevelId]                     UNIQUEIDENTIFIER NULL,
    [InvoiceNumber]                    NVARCHAR (100)   NOT NULL,
    [Name]                             NVARCHAR (300)   NULL,
    [Description]                      NVARCHAR (MAX)   NULL,
    [DiscountAmount]                   MONEY            NULL,
    [FreightAmount]                    MONEY            NULL,
    [TotalAmount]                      MONEY            NULL,
    [TotalLineItemAmount]              MONEY            NULL,
    [TotalLineItemDiscountAmount]      MONEY            NULL,
    [TotalAmountLessFreight]           MONEY            NULL,
    [TotalDiscountAmount]              MONEY            NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [TotalTax]                         MONEY            NULL,
    [ShippingMethodCode]               INT              NULL,
    [PaymentTermsCode]                 INT              NULL,
    [CreatedOn]                        DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [StateCode]                        INT              NOT NULL,
    [StatusCode]                       INT              NULL,
    [ShipTo_Name]                      NVARCHAR (200)   NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [PricingErrorCode]                 INT              NULL,
    [ShipTo_Line1]                     NVARCHAR (4000)  NULL,
    [ShipTo_Line2]                     NVARCHAR (4000)  NULL,
    [ShipTo_Line3]                     NVARCHAR (4000)  NULL,
    [ShipTo_City]                      NVARCHAR (80)    NULL,
    [ShipTo_StateOrProvince]           NVARCHAR (50)    NULL,
    [ShipTo_Country]                   NVARCHAR (80)    NULL,
    [ShipTo_PostalCode]                NVARCHAR (20)    NULL,
    [WillCall]                         BIT              NULL,
    [ShipTo_Telephone]                 NVARCHAR (50)    NULL,
    [BillTo_Name]                      NVARCHAR (200)   NULL,
    [ShipTo_FreightTermsCode]          INT              NULL,
    [ShipTo_Fax]                       NVARCHAR (50)    NULL,
    [BillTo_Line1]                     NVARCHAR (4000)  NULL,
    [BillTo_Line2]                     NVARCHAR (4000)  NULL,
    [BillTo_Line3]                     NVARCHAR (4000)  NULL,
    [BillTo_City]                      NVARCHAR (80)    NULL,
    [BillTo_StateOrProvince]           NVARCHAR (50)    NULL,
    [BillTo_Country]                   NVARCHAR (80)    NULL,
    [BillTo_PostalCode]                NVARCHAR (20)    NULL,
    [BillTo_Telephone]                 NVARCHAR (50)    NULL,
    [BillTo_Fax]                       NVARCHAR (50)    NULL,
    [DiscountPercentage]               DECIMAL (23, 10) NULL,
    [IsPriceLocked]                    BIT              NULL,
    [DateDelivered]                    DATETIME         NULL,
    [DueDate]                          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [ImportSequenceNumber]             INT              NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [TotalLineItemAmount_Base]         MONEY            NULL,
    [TotalLineItemDiscountAmount_Base] MONEY            NULL,
    [TotalTax_Base]                    MONEY            NULL,
    [TotalAmountLessFreight_Base]      MONEY            NULL,
    [DiscountAmount_Base]              MONEY            NULL,
    [TotalAmount_Base]                 MONEY            NULL,
    [FreightAmount_Base]               MONEY            NULL,
    [TotalDiscountAmount_Base]         MONEY            NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER CONSTRAINT [DF_InvoiceBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CustomerId]                       UNIQUEIDENTIFIER NULL,
    [CustomerIdType]                   INT              NULL,
    [CustomerIdName]                   NVARCHAR (4000)  NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_InvoiceBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [CustomerIdYomiName]               NVARCHAR (4000)  NULL,
    [ProcessId]                        UNIQUEIDENTIFIER NULL,
    [ShipTo_Composite]                 NVARCHAR (MAX)   NULL,
    [StageId]                          UNIQUEIDENTIFIER NULL,
    [BillTo_Composite]                 NVARCHAR (MAX)   NULL,
    [EntityImageId]                    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Invoice] PRIMARY KEY CLUSTERED ([InvoiceId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_invoices] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [opportunity_invoices] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]) NOT FOR REPLICATION,
    CONSTRAINT [order_invoices] FOREIGN KEY ([SalesOrderId]) REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_invoices] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [price_level_invoices] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_invoice] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [AK1_InvoiceBase] UNIQUE NONCLUSTERED ([OwningBusinessUnit] ASC, [InvoiceNumber] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[InvoiceBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_order_invoices]
    ON [dbo].[InvoiceBase]([SalesOrderId] ASC) WHERE ([SalesOrderId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_invoice_customer_accounts]
    ON [dbo].[InvoiceBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[InvoiceBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_invoices]
    ON [dbo].[InvoiceBase]([OpportunityId] ASC) WHERE ([OpportunityId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[InvoiceBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[InvoiceBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[InvoiceBase]([Name] ASC) WITH (FILLFACTOR = 80);

