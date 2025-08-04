CREATE TABLE [dbo].[EntitlementChannelBase] (
    [EntitlementChannelId]      UNIQUEIDENTIFIER NOT NULL,
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
    [Channel]                   INT              NULL,
    [EntitlementId]             UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [RemainingTerms]            DECIMAL (23, 10) NULL,
    [TotalTerms]                DECIMAL (23, 10) NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_EntitlementChannel] PRIMARY KEY CLUSTERED ([EntitlementChannelId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [entitlement_entitlementchannel_EntitlementId] FOREIGN KEY ([EntitlementId]) REFERENCES [dbo].[EntitlementBase] ([EntitlementId]),
    CONSTRAINT [TransactionCurrency_entitlementchannel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[EntitlementChannelBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EntitlementChannelBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_EntitlementId]
    ON [dbo].[EntitlementChannelBase]([EntitlementId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[EntitlementChannelBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

