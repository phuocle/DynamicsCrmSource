CREATE TABLE [dbo].[QuoteBase] (
    [QuoteId]                          UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [PriceLevelId]                     UNIQUEIDENTIFIER NULL,
    [OpportunityId]                    UNIQUEIDENTIFIER NULL,
    [QuoteNumber]                      NVARCHAR (100)   NOT NULL,
    [RevisionNumber]                   INT              NOT NULL,
    [Name]                             NVARCHAR (300)   NULL,
    [PricingErrorCode]                 INT              NULL,
    [Description]                      NVARCHAR (MAX)   NULL,
    [DiscountAmount]                   MONEY            NULL,
    [FreightAmount]                    MONEY            NULL,
    [TotalAmount]                      MONEY            NULL,
    [TotalLineItemAmount]              MONEY            NULL,
    [TotalLineItemDiscountAmount]      MONEY            NULL,
    [TotalAmountLessFreight]           MONEY            NULL,
    [EffectiveFrom]                    DATETIME         NULL,
    [TotalTax]                         MONEY            NULL,
    [TotalDiscountAmount]              MONEY            NULL,
    [EffectiveTo]                      DATETIME         NULL,
    [ExpiresOn]                        DATETIME         NULL,
    [ClosedOn]                         DATETIME         NULL,
    [RequestDeliveryBy]                DATETIME         NULL,
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
    [CampaignId]                       UNIQUEIDENTIFIER NULL,
    [ShipTo_AddressId]                 UNIQUEIDENTIFIER NULL,
    [ShipTo_ContactName]               NVARCHAR (150)   NULL,
    [BillTo_AddressId]                 UNIQUEIDENTIFIER NULL,
    [BillTo_ContactName]               NVARCHAR (150)   NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [UniqueDscId]                      UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]             INT              NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [TotalLineItemDiscountAmount_Base] MONEY            NULL,
    [TotalAmountLessFreight_Base]      MONEY            NULL,
    [DiscountAmount_Base]              MONEY            NULL,
    [FreightAmount_Base]               MONEY            NULL,
    [TotalAmount_Base]                 MONEY            NULL,
    [TotalDiscountAmount_Base]         MONEY            NULL,
    [TotalTax_Base]                    MONEY            NULL,
    [TotalLineItemAmount_Base]         MONEY            NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER CONSTRAINT [DF_QuoteBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [CustomerId]                       UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_QuoteBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [CustomerIdName]                   NVARCHAR (4000)  NULL,
    [CustomerIdType]                   INT              NULL,
    [CustomerIdYomiName]               NVARCHAR (4000)  NULL,
    [ProcessId]                        UNIQUEIDENTIFIER NULL,
    [ShipTo_Composite]                 NVARCHAR (MAX)   NULL,
    [StageId]                          UNIQUEIDENTIFIER NULL,
    [BillTo_Composite]                 NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_Quote] PRIMARY KEY CLUSTERED ([QuoteId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_quotes] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [campaign_quotes] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId]) NOT FOR REPLICATION,
    CONSTRAINT [opportunity_quotes] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_quotes] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [price_level_quotes] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_quote] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[QuoteBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[QuoteBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_Quote]
    ON [dbo].[QuoteBase]([OwningBusinessUnit] ASC, [QuoteNumber] ASC, [RevisionNumber] ASC, [UniqueDscId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_QuoteName]
    ON [dbo].[QuoteBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_quotes]
    ON [dbo].[QuoteBase]([CampaignId] ASC) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_quotes]
    ON [dbo].[QuoteBase]([OpportunityId] ASC) WHERE ([OpportunityId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_TotalAmount]
    ON [dbo].[QuoteBase]([TotalAmount] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[QuoteBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[QuoteBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_quote_customer_accounts]
    ON [dbo].[QuoteBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80);

