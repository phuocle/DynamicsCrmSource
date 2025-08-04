CREATE TABLE [dbo].[EntitlementTemplateBase] (
    [EntitlementTemplateId]     UNIQUEIDENTIFIER NOT NULL,
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
    [Name]                      NVARCHAR (160)   NULL,
    [AllocationTypeCode]        INT              NULL,
    [DecreaseRemainingOn]       INT              NULL,
    [EndDate]                   DATETIME         NULL,
    [KbAccessLevel]             INT              NULL,
    [RestrictCaseCreation]      BIT              NULL,
    [SLAId]                     UNIQUEIDENTIFIER NULL,
    [StartDate]                 DATETIME         NULL,
    [TotalTerms]                DECIMAL (23, 10) NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [entitytype]                INT              CONSTRAINT [DF_EntitlementTemplateBase_entitytype] DEFAULT ((0)) NULL,
    CONSTRAINT [cndx_PrimaryKey_EntitlementTemplate] PRIMARY KEY CLUSTERED ([EntitlementTemplateId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_entitlementtemplate] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[EntitlementTemplateBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[EntitlementTemplateBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[EntitlementTemplateBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D608FC5CCFC7454C960A94A947BB6DD2]
    ON [dbo].[EntitlementTemplateBase]([EntitlementTemplateId] ASC)
    INCLUDE([Name], [EndDate], [StartDate], [SLAId], [AllocationTypeCode], [TotalTerms], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D608FC5CCFC7454C960A94A947BB6DD2]
    ON [dbo].[EntitlementTemplateBase]([EntitlementTemplateId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D608FC5CCFC7454C960A94A947BB6DD2]
    ON [dbo].[EntitlementTemplateBase]([Name] ASC, [EntitlementTemplateId] ASC)
    INCLUDE([EndDate], [StartDate], [SLAId], [AllocationTypeCode], [TotalTerms], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

