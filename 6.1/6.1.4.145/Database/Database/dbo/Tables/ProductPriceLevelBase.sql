CREATE TABLE [dbo].[ProductPriceLevelBase] (
    [PriceLevelId]              UNIQUEIDENTIFIER NOT NULL,
    [ProductPriceLevelId]       UNIQUEIDENTIFIER NOT NULL,
    [UoMId]                     UNIQUEIDENTIFIER NULL,
    [UoMScheduleId]             UNIQUEIDENTIFIER NULL,
    [DiscountTypeId]            UNIQUEIDENTIFIER NULL,
    [ProductId]                 UNIQUEIDENTIFIER NOT NULL,
    [Percentage]                DECIMAL (23, 10) NULL,
    [Amount]                    MONEY            NULL,
    [CreatedOn]                 DATETIME         NULL,
    [QuantitySellingCode]       INT              NULL,
    [RoundingPolicyCode]        INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [PricingMethodCode]         INT              NULL,
    [RoundingOptionCode]        INT              NULL,
    [RoundingOptionAmount]      MONEY            NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ImportSequenceNumber]      INT              NULL,
    [Amount_Base]               MONEY            NULL,
    [RoundingOptionAmount_Base] MONEY            NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ProductPriceLevel] PRIMARY KEY CLUSTERED ([ProductPriceLevelId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [discount_type_product_price_levels] FOREIGN KEY ([DiscountTypeId]) REFERENCES [dbo].[DiscountTypeBase] ([DiscountTypeId]) NOT FOR REPLICATION,
    CONSTRAINT [price_level_product_price_levels] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]) NOT FOR REPLICATION,
    CONSTRAINT [product_price_levels] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_productpricelevel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [unit_of_measure_schedule_product_price_level] FOREIGN KEY ([UoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId]) NOT FOR REPLICATION,
    CONSTRAINT [unit_of_measurement_product_price_levels] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId]) NOT FOR REPLICATION,
    CONSTRAINT [AK1_ProductPriceLevelBase] UNIQUE NONCLUSTERED ([ProductId] ASC, [UoMId] ASC, [PriceLevelId] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_price_level_product_price_levels]
    ON [dbo].[ProductPriceLevelBase]([PriceLevelId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_product_price_levels]
    ON [dbo].[ProductPriceLevelBase]([ProductId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductPriceLevelBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_discount_type_product_price_levels]
    ON [dbo].[ProductPriceLevelBase]([DiscountTypeId] ASC) WHERE ([DiscountTypeId] IS NOT NULL) WITH (FILLFACTOR = 80);

