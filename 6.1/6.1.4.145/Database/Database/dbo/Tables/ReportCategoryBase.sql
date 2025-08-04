CREATE TABLE [dbo].[ReportCategoryBase] (
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [CategoryCode]              INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ReportCategoryId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ReportId]                  UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_ReportCategoryBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_ReportCategoryBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [ReportCategoryIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_ReportCategoryBase_ReportCategoryIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComponentState]            INT              CONSTRAINT [DF_ReportCategoryBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_ReportCategoryBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_ReportCategoryBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ReportCategory] PRIMARY KEY CLUSTERED ([ReportCategoryId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ReportCategoryBase_ReportCategoryIdUnique] UNIQUE NONCLUSTERED ([ReportCategoryIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportcategories]
    ON [dbo].[ReportCategoryBase]([ReportId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ReportCategoryBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

