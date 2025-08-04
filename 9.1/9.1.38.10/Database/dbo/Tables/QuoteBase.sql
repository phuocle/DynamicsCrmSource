CREATE TABLE [dbo].[QuoteBase] (
    [QuoteId]                          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_QuoteBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
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
    [ClosedOn]                         DATETIME         NULL,
    [CustomerId]                       UNIQUEIDENTIFIER NULL,
    [Description]                      NVARCHAR (MAX)   NULL,
    [DiscountAmount]                   MONEY            NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [DiscountAmount_Base]              MONEY            NULL,
    [DiscountPercentage]               DECIMAL (23, 10) NULL,
    [EffectiveFrom]                    DATETIME         NULL,
    [EffectiveTo]                      DATETIME         NULL,
    [ExpiresOn]                        DATETIME         NULL,
    [FreightAmount]                    MONEY            NULL,
    [FreightAmount_Base]               MONEY            NULL,
    [FreightTermsCode]                 INT              NULL,
    [OpportunityId]                    UNIQUEIDENTIFIER NULL,
    [PaymentTermsCode]                 INT              NULL,
    [PriceLevelId]                     UNIQUEIDENTIFIER NULL,
    [PricingErrorCode]                 INT              NULL,
    [QuoteNumber]                      NVARCHAR (100)   NOT NULL,
    [RequestDeliveryBy]                DATETIME         NULL,
    [RevisionNumber]                   INT              NOT NULL,
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
    [UniqueDscId]                      UNIQUEIDENTIFIER NULL,
    [WillCall]                         BIT              NULL,
    [OnHoldTime]                       INT              NULL,
    [LastOnHoldTime]                   DATETIME         NULL,
    [SLAId]                            UNIQUEIDENTIFIER NULL,
    [SLAInvokedId]                     UNIQUEIDENTIFIER NULL,
    [CustomerIdName]                   NVARCHAR (4000)  NULL,
    [CustomerIdType]                   INT              NULL,
    [CustomerIdYomiName]               NVARCHAR (4000)  NULL,
    [CampaignId]                       UNIQUEIDENTIFIER NULL,
    [SkipPriceCalculation]             INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Quote] PRIMARY KEY CLUSTERED ([QuoteId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_quotes] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [campaign_quotes] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId]),
    CONSTRAINT [manualsla_quote] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [opportunity_quotes] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]),
    CONSTRAINT [owner_quotes] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [price_level_quotes] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]),
    CONSTRAINT [transactioncurrency_quote] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[QuoteBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[QuoteBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[QuoteBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_Quote]
    ON [dbo].[QuoteBase]([OwningBusinessUnit] ASC, [QuoteNumber] ASC, [RevisionNumber] ASC, [UniqueDscId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_QuoteBase_OwnerId_StateCode]
    ON [dbo].[QuoteBase]([OwnerId] ASC, [StateCode] ASC, [Name] ASC, [QuoteId] ASC)
    INCLUDE([TotalAmount], [CreatedOn], [CustomerId], [ProcessId], [VersionNumber], [TransactionCurrencyId], [CustomerIdYomiName], [CustomerIdType], [CustomerIdName]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[QuoteBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[QuoteBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_quote_customer_accounts]
    ON [dbo].[QuoteBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_QuoteName]
    ON [dbo].[QuoteBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_quotes]
    ON [dbo].[QuoteBase]([OpportunityId] ASC) WHERE ([OpportunityId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_TotalAmount]
    ON [dbo].[QuoteBase]([TotalAmount] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_quotes]
    ON [dbo].[QuoteBase]([CampaignId] ASC) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_E346BF9F95274FFE89D6748F53C1078A]
    ON [dbo].[QuoteBase]([Name] ASC, [QuoteId] ASC)
    INCLUDE([TotalAmount], [StateCode], [CreatedOn], [CustomerId], [CustomerIdYomiName], [CustomerIdType], [CustomerIdName], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_E346BF9F95274FFE89D6748F53C1078A]
    ON [dbo].[QuoteBase]([QuoteId] ASC)
    INCLUDE([Name], [TotalAmount], [StateCode], [CreatedOn], [CustomerId], [CustomerIdYomiName], [CustomerIdType], [CustomerIdName], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_E346BF9F95274FFE89D6748F53C1078A]
    ON [dbo].[QuoteBase]([QuoteId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

