CREATE TABLE [dbo].[ReportCategoryBase] (
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_ReportCategoryBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [CategoryCode]              INT              NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_ReportCategoryBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ReportCategoryIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_ReportCategoryBase_ReportCategoryIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ComponentState]            INT              CONSTRAINT [DF_ReportCategoryBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ReportId]                  UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_ReportCategoryBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_ReportCategoryBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ReportCategoryId]          UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ReportCategory] PRIMARY KEY CLUSTERED ([ReportCategoryId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ReportCategoryBase_ReportCategoryIdUnique] UNIQUE NONCLUSTERED ([ReportCategoryIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ReportCategoryBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ReportCategoryBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportcategories]
    ON [dbo].[ReportCategoryBase]([ReportId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ReportCategoryBase]([ReportCategoryId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

