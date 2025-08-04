CREATE TABLE [dbo].[TransactionCurrencyBase] (
    [StatusCode]            INT              NULL,
    [ModifiedOn]            DATETIME         NULL,
    [StateCode]             INT              NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]  INT              NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [CreatedOn]             DATETIME         NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NOT NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [CurrencySymbol]        NVARCHAR (13)    NOT NULL,
    [UniqueDscId]           UNIQUEIDENTIFIER NULL,
    [CurrencyName]          NVARCHAR (100)   NOT NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [ISOCurrencyCode]       NVARCHAR (5)     NOT NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [CurrencyPrecision]     INT              CONSTRAINT [DF_TransactionCurrencyBase_CurrencyPrecision] DEFAULT ((2)) NOT NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [EntityImageId]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_TransactionCurrency] PRIMARY KEY CLUSTERED ([TransactionCurrencyId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[TransactionCurrencyBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_ISOCurrencyCode]
    ON [dbo].[TransactionCurrencyBase]([ISOCurrencyCode] ASC, [UniqueDscId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CurrencyNameSymbol]
    ON [dbo].[TransactionCurrencyBase]([CurrencyName] ASC, [CurrencySymbol] ASC, [ExchangeRate] ASC, [CurrencyPrecision] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TransactionCurrencyBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

