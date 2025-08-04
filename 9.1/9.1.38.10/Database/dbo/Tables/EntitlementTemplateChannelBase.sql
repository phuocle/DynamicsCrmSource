CREATE TABLE [dbo].[EntitlementTemplateChannelBase] (
    [EntitlementTemplateChannelId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [Channel]                      INT              NULL,
    [EntitlementTemplateId]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [TotalTerms]                   DECIMAL (23, 10) NULL,
    [ExchangeRate]                 DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]        UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_EntitlementTemplateChannel] PRIMARY KEY CLUSTERED ([EntitlementTemplateChannelId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [entitlementtemplate_entitlementchannel_entitlementtemplateid] FOREIGN KEY ([EntitlementTemplateId]) REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId]),
    CONSTRAINT [TransactionCurrency_entitlementtemplatechannel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[EntitlementTemplateChannelBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EntitlementTemplateChannelBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_EntitlementTemplateId]
    ON [dbo].[EntitlementTemplateChannelBase]([EntitlementTemplateId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[EntitlementTemplateChannelBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

