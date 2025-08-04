CREATE TABLE [dbo].[SalesOrderBase] (
    [SalesOrderId]                     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_SalesOrderBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
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
    [BillTo_AddressId]                 UNIQUEIDENTIFIER NULL,
    [BillTo_City]                      NVARCHAR (80)    NULL,
    [BillTo_Composite]                 NVARCHAR (MAX)   NULL,
    [BillTo_ContactName]               NVARCHAR (150)   NULL,
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
    [DateFulfilled]                    DATETIME         NULL,
    [Description]                      NVARCHAR (MAX)   NULL,
    [DiscountAmount]                   MONEY            NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [DiscountAmount_Base]              MONEY            NULL,
    [DiscountPercentage]               DECIMAL (23, 10) NULL,
    [FreightAmount]                    MONEY            NULL,
    [FreightAmount_Base]               MONEY            NULL,
    [FreightTermsCode]                 INT              NULL,
    [IsPriceLocked]                    BIT              NULL,
    [LastBackofficeSubmit]             DATETIME         NULL,
    [OpportunityId]                    UNIQUEIDENTIFIER NULL,
    [OrderNumber]                      NVARCHAR (100)   NOT NULL,
    [PaymentTermsCode]                 INT              NULL,
    [PriceLevelId]                     UNIQUEIDENTIFIER NULL,
    [PricingErrorCode]                 INT              NULL,
    [PriorityCode]                     INT              NULL,
    [QuoteId]                          UNIQUEIDENTIFIER NULL,
    [RequestDeliveryBy]                DATETIME         NULL,
    [ShippingMethodCode]               INT              NULL,
    [ShipTo_AddressId]                 UNIQUEIDENTIFIER NULL,
    [ShipTo_City]                      NVARCHAR (80)    NULL,
    [ShipTo_Composite]                 NVARCHAR (MAX)   NULL,
    [ShipTo_ContactName]               NVARCHAR (150)   NULL,
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
    [SubmitDate]                       DATETIME         NULL,
    [SubmitStatus]                     INT              NULL,
    [SubmitStatusDescription]          NVARCHAR (MAX)   NULL,
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
    [OnHoldTime]                       INT              NULL,
    [LastOnHoldTime]                   DATETIME         NULL,
    [SLAId]                            UNIQUEIDENTIFIER NULL,
    [SLAInvokedId]                     UNIQUEIDENTIFIER NULL,
    [EntityImageId]                    UNIQUEIDENTIFIER NULL,
    [CustomerIdName]                   NVARCHAR (4000)  NULL,
    [CustomerIdType]                   INT              NULL,
    [CustomerIdYomiName]               NVARCHAR (4000)  NULL,
    [CampaignId]                       UNIQUEIDENTIFIER NULL,
    [SkipPriceCalculation]             INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_SalesOrder] PRIMARY KEY CLUSTERED ([SalesOrderId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_orders] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [campaign_orders] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId]),
    CONSTRAINT [manualsla_salesorder] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [opportunity_sales_orders] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]),
    CONSTRAINT [owner_salesorders] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [price_level_orders] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]),
    CONSTRAINT [quote_orders] FOREIGN KEY ([QuoteId]) REFERENCES [dbo].[QuoteBase] ([QuoteId]),
    CONSTRAINT [transactioncurrency_salesorder] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [AK1_SalesOrderBase] UNIQUE NONCLUSTERED ([OwningBusinessUnit] ASC, [OrderNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SalesOrderBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SalesOrderBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SalesOrderBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SalesOrderBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SalesOrderBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_orders]
    ON [dbo].[SalesOrderBase]([CampaignId] ASC) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_order_customer_accounts]
    ON [dbo].[SalesOrderBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_quote_orders]
    ON [dbo].[SalesOrderBase]([QuoteId] ASC) WHERE ([QuoteId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_NameTotalAmount]
    ON [dbo].[SalesOrderBase]([Name] ASC, [TotalAmount] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_sales_orders]
    ON [dbo].[SalesOrderBase]([OpportunityId] ASC) WHERE ([OpportunityId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D26E6749E832426BB4CB222AB902CE7C]
    ON [dbo].[SalesOrderBase]([SalesOrderId] ASC)
    INCLUDE([Name], [TotalAmount], [StatusCode], [CustomerId], [CustomerIdYomiName], [CustomerIdName], [CustomerIdType], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D26E6749E832426BB4CB222AB902CE7C]
    ON [dbo].[SalesOrderBase]([SalesOrderId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D26E6749E832426BB4CB222AB902CE7C]
    ON [dbo].[SalesOrderBase]([Name] ASC, [SalesOrderId] ASC)
    INCLUDE([TotalAmount], [StatusCode], [CustomerId], [CustomerIdYomiName], [CustomerIdName], [CustomerIdType], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

