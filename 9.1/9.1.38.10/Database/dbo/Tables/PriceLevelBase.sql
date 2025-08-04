CREATE TABLE [dbo].[PriceLevelBase] (
    [PriceLevelId]              UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [BeginDate]                 DATETIME         NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [EndDate]                   DATETIME         NULL,
    [FreightTermsCode]          INT              NULL,
    [PaymentMethodCode]         INT              NULL,
    [ShippingMethodCode]        INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [StatusCode]                INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_PriceLevel] PRIMARY KEY CLUSTERED ([PriceLevelId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [transactioncurrency_pricelevel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[PriceLevelBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[PriceLevelBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PriceLevelBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_PriceLevel]
    ON [dbo].[PriceLevelBase]([TransactionCurrencyId] ASC, [Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[PriceLevelBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_EEC94B9198C343CAA2E64CB36DDF71FC]
    ON [dbo].[PriceLevelBase]([PriceLevelId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_EEC94B9198C343CAA2E64CB36DDF71FC]
    ON [dbo].[PriceLevelBase]([PriceLevelId] ASC)
    INCLUDE([Name], [TransactionCurrencyId], [EndDate], [BeginDate], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[PriceLevelBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_EEC94B9198C343CAA2E64CB36DDF71FC]
    ON [dbo].[PriceLevelBase]([Name] ASC, [PriceLevelId] ASC)
    INCLUDE([TransactionCurrencyId], [EndDate], [BeginDate], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

