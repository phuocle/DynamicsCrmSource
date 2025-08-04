CREATE TABLE [dbo].[SalesOrderBase] (
    [SalesOrderId]                     UNIQUEIDENTIFIER NOT NULL,
    [OpportunityId]                    UNIQUEIDENTIFIER NULL,
    [QuoteId]                          UNIQUEIDENTIFIER NULL,
    [PriorityCode]                     INT              NULL,
    [SubmitStatus]                     INT              NULL,
    [SubmitDate]                       DATETIME         NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [SubmitStatusDescription]          NVARCHAR (MAX)   NULL,
    [PriceLevelId]                     UNIQUEIDENTIFIER NULL,
    [LastBackofficeSubmit]             DATETIME         NULL,
    [OrderNumber]                      NVARCHAR (100)   NOT NULL,
    [Name]                             NVARCHAR (300)   NULL,
    [PricingErrorCode]                 INT              NULL,
    [Description]                      NVARCHAR (MAX)   NULL,
    [DiscountAmount]                   MONEY            NULL,
    [FreightAmount]                    MONEY            NULL,
    [TotalAmount]                      MONEY            NULL,
    [TotalLineItemAmount]              MONEY            NULL,
    [TotalLineItemDiscountAmount]      MONEY            NULL,
    [TotalAmountLessFreight]           MONEY            NULL,
    [TotalDiscountAmount]              MONEY            NULL,
    [RequestDeliveryBy]                DATETIME         NULL,
    [TotalTax]                         MONEY            NULL,
    [ShippingMethodCode]               INT              NULL,
    [PaymentTermsCode]                 INT              NULL,
    [FreightTermsCode]                 INT              NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [CreatedOn]                        DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [StateCode]                        INT              NOT NULL,
    [StatusCode]                       INT              NULL,
    [ShipTo_Name]                      NVARCHAR (200)   NULL,
    [VersionNumber]                    ROWVERSION       NULL,
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
    [BillTo_ContactName]               NVARCHAR (150)   NULL,
    [CampaignId]                       UNIQUEIDENTIFIER NULL,
    [BillTo_AddressId]                 UNIQUEIDENTIFIER NULL,
    [ShipTo_AddressId]                 UNIQUEIDENTIFIER NULL,
    [IsPriceLocked]                    BIT              NULL,
    [DateFulfilled]                    DATETIME         NULL,
    [ShipTo_ContactName]               NVARCHAR (150)   NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [ImportSequenceNumber]             INT              NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [TotalLineItemAmount_Base]         MONEY            NULL,
    [TotalDiscountAmount_Base]         MONEY            NULL,
    [TotalAmountLessFreight_Base]      MONEY            NULL,
    [TotalAmount_Base]                 MONEY            NULL,
    [DiscountAmount_Base]              MONEY            NULL,
    [FreightAmount_Base]               MONEY            NULL,
    [TotalLineItemDiscountAmount_Base] MONEY            NULL,
    [TotalTax_Base]                    MONEY            NULL,
    [CustomerId]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER CONSTRAINT [DF_SalesOrderBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_SalesOrderBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [CustomerIdType]                   INT              NULL,
    [CustomerIdName]                   NVARCHAR (4000)  NULL,
    [CustomerIdYomiName]               NVARCHAR (4000)  NULL,
    [StageId]                          UNIQUEIDENTIFIER NULL,
    [EntityImageId]                    UNIQUEIDENTIFIER NULL,
    [ShipTo_Composite]                 NVARCHAR (MAX)   NULL,
    [ProcessId]                        UNIQUEIDENTIFIER NULL,
    [BillTo_Composite]                 NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_SalesOrder] PRIMARY KEY CLUSTERED ([SalesOrderId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_orders] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [campaign_orders] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId]) NOT FOR REPLICATION,
    CONSTRAINT [opportunity_sales_orders] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_salesorders] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [price_level_orders] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]) NOT FOR REPLICATION,
    CONSTRAINT [quote_orders] FOREIGN KEY ([QuoteId]) REFERENCES [dbo].[QuoteBase] ([QuoteId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_salesorder] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [AK1_SalesOrderBase] UNIQUE NONCLUSTERED ([OwningBusinessUnit] ASC, [OrderNumber] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SalesOrderBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_NameTotalAmount]
    ON [dbo].[SalesOrderBase]([Name] ASC, [TotalAmount] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_sales_orders]
    ON [dbo].[SalesOrderBase]([OpportunityId] ASC) WHERE ([OpportunityId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SalesOrderBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SalesOrderBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_quote_orders]
    ON [dbo].[SalesOrderBase]([QuoteId] ASC) WHERE ([QuoteId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SalesOrderBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_order_customer_accounts]
    ON [dbo].[SalesOrderBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_orders]
    ON [dbo].[SalesOrderBase]([CampaignId] ASC) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR = 80);

