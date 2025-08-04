CREATE TABLE [dbo].[DiscountBase] (
    [DiscountId]            UNIQUEIDENTIFIER NOT NULL,
    [DiscountTypeId]        UNIQUEIDENTIFIER NOT NULL,
    [LowQuantity]           DECIMAL (23, 10) NULL,
    [HighQuantity]          DECIMAL (23, 10) NULL,
    [Percentage]            DECIMAL (23, 10) NULL,
    [Amount]                MONEY            NULL,
    [StatusCode]            INT              NULL,
    [CreatedOn]             DATETIME         NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]            DATETIME         NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [ImportSequenceNumber]  INT              NULL,
    [Amount_Base]           MONEY            NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Discount] PRIMARY KEY CLUSTERED ([DiscountId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [discount_type_discounts] FOREIGN KEY ([DiscountTypeId]) REFERENCES [dbo].[DiscountTypeBase] ([DiscountTypeId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_discount] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DiscountBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Core]
    ON [dbo].[DiscountBase]([StatusCode] ASC) WHERE ([StatusCode] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_discount_type_discounts]
    ON [dbo].[DiscountBase]([DiscountTypeId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_LowQuantity]
    ON [dbo].[DiscountBase]([LowQuantity] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Percentage]
    ON [dbo].[DiscountBase]([Percentage] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_HighQuantity]
    ON [dbo].[DiscountBase]([HighQuantity] ASC) WITH (FILLFACTOR = 80);

