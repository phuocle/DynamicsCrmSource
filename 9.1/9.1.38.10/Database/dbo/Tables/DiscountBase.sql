CREATE TABLE [dbo].[DiscountBase] (
    [DiscountId]                UNIQUEIDENTIFIER NOT NULL,
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
    [Name]                      NVARCHAR (100)   NULL,
    [Amount]                    MONEY            NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [Amount_Base]               MONEY            NULL,
    [DiscountTypeId]            UNIQUEIDENTIFIER NOT NULL,
    [HighQuantity]              DECIMAL (23, 10) NOT NULL,
    [LowQuantity]               DECIMAL (23, 10) NOT NULL,
    [Percentage]                DECIMAL (23, 10) NULL,
    [StatusCode]                INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Discount] PRIMARY KEY CLUSTERED ([DiscountId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [discount_type_discounts] FOREIGN KEY ([DiscountTypeId]) REFERENCES [dbo].[DiscountTypeBase] ([DiscountTypeId]),
    CONSTRAINT [transactioncurrency_discount] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[DiscountBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DiscountBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_Core]
    ON [dbo].[DiscountBase]([StatusCode] ASC) WHERE ([StatusCode] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_discount_type_discounts]
    ON [dbo].[DiscountBase]([DiscountTypeId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_HighQuantity]
    ON [dbo].[DiscountBase]([HighQuantity] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Percentage]
    ON [dbo].[DiscountBase]([Percentage] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_LowQuantity]
    ON [dbo].[DiscountBase]([LowQuantity] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_CDA1506BA13B4634B02AB3A8AB7A5A8E]
    ON [dbo].[DiscountBase]([DiscountId] ASC)
    INCLUDE([Percentage], [LowQuantity], [HighQuantity], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

