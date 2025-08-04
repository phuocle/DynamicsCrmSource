CREATE TABLE [dbo].[TransactionCurrencyBase] (
    [CurrencyPrecision]     INT              CONSTRAINT [DF_TransactionCurrencyBase_CurrencyPrecision] DEFAULT ((2)) NOT NULL,
    [ModifiedOn]            DATETIME         NULL,
    [UniqueDscId]           UNIQUEIDENTIFIER NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [StatusCode]            INT              NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [ImportSequenceNumber]  INT              NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NOT NULL,
    [ExchangeRate]          DECIMAL (23, 10) NOT NULL,
    [CreatedOn]             DATETIME         NULL,
    [StateCode]             INT              NOT NULL,
    [CurrencyName]          NVARCHAR (100)   NOT NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [EntityImageId]         UNIQUEIDENTIFIER NULL,
    [ISOCurrencyCode]       NVARCHAR (5)     NOT NULL,
    [CurrencySymbol]        NVARCHAR (13)    NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_TransactionCurrency] PRIMARY KEY CLUSTERED ([TransactionCurrencyId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[TransactionCurrencyBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_ISOCurrencyCode]
    ON [dbo].[TransactionCurrencyBase]([ISOCurrencyCode] ASC, [UniqueDscId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TransactionCurrencyBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[TransactionCurrencyBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CurrencyNameSymbol]
    ON [dbo].[TransactionCurrencyBase]([CurrencyName] ASC, [CurrencySymbol] ASC, [ExchangeRate] ASC, [CurrencyPrecision] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_21E59CB2069142D5B17E0B0AB552E427]
    ON [dbo].[TransactionCurrencyBase]([TransactionCurrencyId] ASC)
    INCLUDE([CurrencyName], [ISOCurrencyCode], [CurrencySymbol], [ExchangeRate], [CurrencyPrecision], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_21E59CB2069142D5B17E0B0AB552E427]
    ON [dbo].[TransactionCurrencyBase]([TransactionCurrencyId] ASC)
    INCLUDE([CurrencyName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_21E59CB2069142D5B17E0B0AB552E427]
    ON [dbo].[TransactionCurrencyBase]([CurrencyName] ASC, [TransactionCurrencyId] ASC)
    INCLUDE([ISOCurrencyCode], [CurrencySymbol], [ExchangeRate], [CurrencyPrecision], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

