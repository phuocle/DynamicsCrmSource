CREATE TABLE [dbo].[InvoiceBase] (
    [InvoiceId]                        UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_InvoiceBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [EmailAddress]                     NVARCHAR (256)   NULL,
    [ImportSequenceNumber]             INT              NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [Name]                             NVARCHAR (300)   NULL,
    [ProcessId]                        UNIQUEIDENTIFIER NULL,
    [StageId]                          UNIQUEIDENTIFIER NULL,
    [TraversedPath]                    NVARCHAR (1250)  NULL,
    [BillTo_City]                      NVARCHAR (80)    NULL,
    [BillTo_Composite]                 NVARCHAR (MAX)   NULL,
    [BillTo_Country]                   NVARCHAR (80)    NULL,
    [BillTo_Fax]                       NVARCHAR (50)    NULL,
    [BillTo_Line1]                     NVARCHAR (4000)  NULL,
    [BillTo_Line2]                     NVARCHAR (4000)  NULL,
    [BillTo_Line3]                     NVARCHAR (4000)  NULL,
    [BillTo_Name]                      NVARCHAR (200)   NULL,
    [BillTo_PostalCode]                NVARCHAR (20)    NULL,
    [BillTo_StateOrProvince]           NVARCHAR (50)    NULL,
    [BillTo_Telephone]                 NVARCHAR (50)    NULL,
    [CustomerId]                       UNIQUEIDENTIFIER NULL,
    [DateDelivered]                    DATETIME         NULL,
    [Description]                      NVARCHAR (MAX)   NULL,
    [DiscountAmount]                   MONEY            NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [DiscountAmount_Base]              MONEY            NULL,
    [DiscountPercentage]               DECIMAL (23, 10) NULL,
    [DueDate]                          DATETIME         NULL,
    [FreightAmount]                    MONEY            NULL,
    [FreightAmount_Base]               MONEY            NULL,
    [InvoiceNumber]                    NVARCHAR (100)   NOT NULL,
    [IsPriceLocked]                    BIT              NULL,
    [LastBackofficeSubmit]             DATETIME         NULL,
    [OpportunityId]                    UNIQUEIDENTIFIER NULL,
    [PaymentTermsCode]                 INT              NULL,
    [PriceLevelId]                     UNIQUEIDENTIFIER NULL,
    [PricingErrorCode]                 INT              NULL,
    [PriorityCode]                     INT              NULL,
    [SalesOrderId]                     UNIQUEIDENTIFIER NULL,
    [ShippingMethodCode]               INT              NULL,
    [ShipTo_City]                      NVARCHAR (80)    NULL,
    [ShipTo_Composite]                 NVARCHAR (MAX)   NULL,
    [ShipTo_Country]                   NVARCHAR (80)    NULL,
    [ShipTo_Fax]                       NVARCHAR (50)    NULL,
    [ShipTo_FreightTermsCode]          INT              NULL,
    [ShipTo_Line1]                     NVARCHAR (4000)  NULL,
    [ShipTo_Line2]                     NVARCHAR (4000)  NULL,
    [ShipTo_Line3]                     NVARCHAR (4000)  NULL,
    [ShipTo_Name]                      NVARCHAR (200)   NULL,
    [ShipTo_PostalCode]                NVARCHAR (20)    NULL,
    [ShipTo_StateOrProvince]           NVARCHAR (50)    NULL,
    [ShipTo_Telephone]                 NVARCHAR (50)    NULL,
    [StateCode]                        INT              NOT NULL,
    [StatusCode]                       INT              NULL,
    [TotalAmount]                      MONEY            NULL,
    [TotalAmount_Base]                 MONEY            NULL,
    [TotalAmountLessFreight]           MONEY            NULL,
    [TotalAmountLessFreight_Base]      MONEY            NULL,
    [TotalDiscountAmount]              MONEY            NULL,
    [TotalDiscountAmount_Base]         MONEY            NULL,
    [TotalLineItemAmount]              MONEY            NULL,
    [TotalLineItemAmount_Base]         MONEY            NULL,
    [TotalLineItemDiscountAmount]      MONEY            NULL,
    [TotalLineItemDiscountAmount_Base] MONEY            NULL,
    [TotalTax]                         MONEY            NULL,
    [TotalTax_Base]                    MONEY            NULL,
    [WillCall]                         BIT              NULL,
    [SLAId]                            UNIQUEIDENTIFIER NULL,
    [SLAInvokedId]                     UNIQUEIDENTIFIER NULL,
    [OnHoldTime]                       INT              NULL,
    [LastOnHoldTime]                   DATETIME         NULL,
    [EntityImageId]                    UNIQUEIDENTIFIER NULL,
    [CustomerIdName]                   NVARCHAR (4000)  NULL,
    [CustomerIdType]                   INT              NULL,
    [CustomerIdYomiName]               NVARCHAR (4000)  NULL,
    [SkipPriceCalculation]             INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Invoice] PRIMARY KEY CLUSTERED ([InvoiceId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_invoices] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [manualsla_invoice] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [opportunity_invoices] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]),
    CONSTRAINT [order_invoices] FOREIGN KEY ([SalesOrderId]) REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId]),
    CONSTRAINT [owner_invoices] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [price_level_invoices] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]),
    CONSTRAINT [transactioncurrency_invoice] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [AK1_InvoiceBase] UNIQUE NONCLUSTERED ([OwningBusinessUnit] ASC, [InvoiceNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[InvoiceBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[InvoiceBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[InvoiceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[InvoiceBase]([OwnerId] ASC, [StateCode] ASC)
    INCLUDE([Name], [TotalAmount], [CustomerId], [StatusCode], [InvoiceId], [ProcessId], [VersionNumber], [TransactionCurrencyId], [CustomerIdType], [CustomerIdName], [CustomerIdYomiName]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[InvoiceBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_invoices]
    ON [dbo].[InvoiceBase]([OpportunityId] ASC) WHERE ([OpportunityId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_order_invoices]
    ON [dbo].[InvoiceBase]([SalesOrderId] ASC) WHERE ([SalesOrderId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_invoice_customer_accounts]
    ON [dbo].[InvoiceBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D9EDB1394E8649DE9846BD5DD64CAEC4]
    ON [dbo].[InvoiceBase]([InvoiceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[InvoiceBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D9EDB1394E8649DE9846BD5DD64CAEC4]
    ON [dbo].[InvoiceBase]([InvoiceId] ASC)
    INCLUDE([Name], [TotalAmount], [CustomerId], [CustomerIdYomiName], [CustomerIdType], [CustomerIdName], [StatusCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D9EDB1394E8649DE9846BD5DD64CAEC4]
    ON [dbo].[InvoiceBase]([Name] ASC, [InvoiceId] ASC)
    INCLUDE([TotalAmount], [CustomerId], [CustomerIdYomiName], [CustomerIdType], [CustomerIdName], [StatusCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

