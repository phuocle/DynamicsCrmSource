CREATE TABLE [dbo].[OpportunityProductBase] (
    [ProductId]                 UNIQUEIDENTIFIER NULL,
    [OpportunityProductId]      UNIQUEIDENTIFIER NOT NULL,
    [PricingErrorCode]          INT              NULL,
    [IsProductOverridden]       BIT              CONSTRAINT [Set_To_Zero122] DEFAULT ((0)) NULL,
    [IsPriceOverridden]         BIT              NULL,
    [PricePerUnit]              MONEY            NULL,
    [OpportunityId]             UNIQUEIDENTIFIER NOT NULL,
    [BaseAmount]                MONEY            NULL,
    [ExtendedAmount]            MONEY            NULL,
    [UoMId]                     UNIQUEIDENTIFIER NULL,
    [ManualDiscountAmount]      MONEY            NULL,
    [Quantity]                  DECIMAL (23, 10) CONSTRAINT [Set_To_Zero123] DEFAULT ((0)) NULL,
    [CreatedOn]                 DATETIME         NULL,
    [VolumeDiscountAmount]      MONEY            NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [Tax]                       MONEY            NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ProductDescription]        NVARCHAR (500)   NULL,
    [ModifiedOn]                DATETIME         NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [BaseAmount_Base]           MONEY            NULL,
    [ManualDiscountAmount_Base] MONEY            NULL,
    [VolumeDiscountAmount_Base] MONEY            NULL,
    [PricePerUnit_Base]         MONEY            NULL,
    [Tax_Base]                  MONEY            NULL,
    [ExtendedAmount_Base]       MONEY            NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [LineItemNumber]            INT              NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    [SequenceNumber]            INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_OpportunityProduct] PRIMARY KEY NONCLUSTERED ([OpportunityProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [opportunity_products] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [product_opportunities] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_opportunityproduct] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [unit_of_measurement_opportunity_products] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[OpportunityProductBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE CLUSTERED INDEX [cndx_for_cascaderelationship_product_opportunities]
    ON [dbo].[OpportunityProductBase]([OpportunityId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OpportunityProductBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_products]
    ON [dbo].[OpportunityProductBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80);

