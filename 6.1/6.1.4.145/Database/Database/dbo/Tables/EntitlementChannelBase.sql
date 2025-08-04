CREATE TABLE [dbo].[EntitlementChannelBase] (
    [UTCConversionTimeZoneCode] INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [TotalTerms]                DECIMAL (23, 10) NULL,
    [Channel]                   INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [EntitlementId]             UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [RemainingTerms]            DECIMAL (23, 10) NULL,
    [EntitlementChannelId]      UNIQUEIDENTIFIER NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_EntitlementChannel] PRIMARY KEY CLUSTERED ([EntitlementChannelId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [entitlement_entitlementchannel_EntitlementId] FOREIGN KEY ([EntitlementId]) REFERENCES [dbo].[EntitlementBase] ([EntitlementId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_entitlementchannel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[EntitlementChannelBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_EntitlementId]
    ON [dbo].[EntitlementChannelBase]([EntitlementId] ASC) WITH (FILLFACTOR = 80);

