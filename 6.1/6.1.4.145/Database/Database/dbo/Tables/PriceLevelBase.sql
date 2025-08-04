CREATE TABLE [dbo].[PriceLevelBase] (
    [PriceLevelId]              UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [ShippingMethodCode]        INT              NULL,
    [BeginDate]                 DATETIME         NULL,
    [PaymentMethodCode]         INT              NULL,
    [FreightTermsCode]          INT              NULL,
    [EndDate]                   DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [StateCode]                 INT              NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [StatusCode]                INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_PriceLevel] PRIMARY KEY CLUSTERED ([PriceLevelId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [transactioncurrency_pricelevel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[PriceLevelBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PriceLevelBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_PriceLevel]
    ON [dbo].[PriceLevelBase]([TransactionCurrencyId] ASC, [Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[PriceLevelBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[PriceLevelBase]([Name] ASC) WITH (FILLFACTOR = 80);

