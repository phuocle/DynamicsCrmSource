CREATE TABLE [dbo].[EntitlementTemplateChannelBase] (
    [ExchangeRate]                 DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]        UNIQUEIDENTIFIER NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [CreatedOn]                    DATETIME         NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [EntitlementTemplateChannelId] UNIQUEIDENTIFIER NOT NULL,
    [Channel]                      INT              NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [EntitlementTemplateId]        UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]         INT              NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [TotalTerms]                   DECIMAL (23, 10) NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_EntitlementTemplateChannel] PRIMARY KEY CLUSTERED ([EntitlementTemplateChannelId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [entitlementtemplate_entitlementchannel_entitlementtemplateid] FOREIGN KEY ([EntitlementTemplateId]) REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_entitlementtemplatechannel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_EntitlementTemplateId]
    ON [dbo].[EntitlementTemplateChannelBase]([EntitlementTemplateId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[EntitlementTemplateChannelBase]([Name] ASC) WITH (FILLFACTOR = 80);

