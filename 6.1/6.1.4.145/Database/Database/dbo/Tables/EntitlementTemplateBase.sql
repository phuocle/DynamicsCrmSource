CREATE TABLE [dbo].[EntitlementTemplateBase] (
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TotalTerms]                DECIMAL (23, 10) NULL,
    [DecreaseRemainingOn]       INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [EntitlementTemplateId]     UNIQUEIDENTIFIER NOT NULL,
    [Name]                      NVARCHAR (160)   NULL,
    [EndDate]                   DATETIME         NULL,
    [RestrictCaseCreation]      BIT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [AllocationTypeCode]        INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [KbAccessLevel]             INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [StartDate]                 DATETIME         NULL,
    [SLAId]                     UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_EntitlementTemplate] PRIMARY KEY CLUSTERED ([EntitlementTemplateId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_entitlementtemplate] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[EntitlementTemplateBase]([Name] ASC) WITH (FILLFACTOR = 80);

