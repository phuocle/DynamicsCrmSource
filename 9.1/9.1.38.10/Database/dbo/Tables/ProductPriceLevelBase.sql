CREATE TABLE [dbo].[ProductPriceLevelBase] (
    [ProductPriceLevelId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [Amount]                    MONEY            NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [Amount_Base]               MONEY            NULL,
    [Percentage]                DECIMAL (23, 10) NULL,
    [PriceLevelId]              UNIQUEIDENTIFIER NOT NULL,
    [PricingMethodCode]         INT              NULL,
    [ProductId]                 UNIQUEIDENTIFIER NOT NULL,
    [QuantitySellingCode]       INT              NULL,
    [RoundingOptionAmount]      MONEY            NULL,
    [RoundingOptionAmount_Base] MONEY            NULL,
    [RoundingOptionCode]        INT              NULL,
    [RoundingPolicyCode]        INT              NULL,
    [UoMId]                     UNIQUEIDENTIFIER NULL,
    [UoMScheduleId]             UNIQUEIDENTIFIER NULL,
    [DiscountTypeId]            UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ProductPriceLevel] PRIMARY KEY CLUSTERED ([ProductPriceLevelId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [discount_type_product_price_levels] FOREIGN KEY ([DiscountTypeId]) REFERENCES [dbo].[DiscountTypeBase] ([DiscountTypeId]),
    CONSTRAINT [price_level_product_price_levels] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]),
    CONSTRAINT [product_price_levels] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [transactioncurrency_productpricelevel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [unit_of_measure_schedule_product_price_level] FOREIGN KEY ([UoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId]),
    CONSTRAINT [unit_of_measurement_product_price_levels] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId]),
    CONSTRAINT [AK1_ProductPriceLevelBase] UNIQUE NONCLUSTERED ([ProductId] ASC, [UoMId] ASC, [PriceLevelId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[ProductPriceLevelBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductPriceLevelBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_discount_type_product_price_levels]
    ON [dbo].[ProductPriceLevelBase]([DiscountTypeId] ASC) WHERE ([DiscountTypeId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_price_level_product_price_levels]
    ON [dbo].[ProductPriceLevelBase]([PriceLevelId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_product_price_levels]
    ON [dbo].[ProductPriceLevelBase]([ProductId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A2CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[ProductPriceLevelBase]([ProductPriceLevelId] ASC)
    INCLUDE([ProductId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

