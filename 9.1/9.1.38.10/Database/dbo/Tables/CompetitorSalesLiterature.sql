CREATE TABLE [dbo].[CompetitorSalesLiterature] (
    [CompetitorSalesLiteratureId] UNIQUEIDENTIFIER CONSTRAINT [DF_CompetitorSalesLiterature_CompetitorSalesLiteratureId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [ImportSequenceNumber]        INT              NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [Name]                        NVARCHAR (100)   NULL,
    [CompetitorId]                UNIQUEIDENTIFIER NOT NULL,
    [SalesLiteratureId]           UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_CompetitorSalesLiterature] PRIMARY KEY CLUSTERED ([CompetitorSalesLiteratureId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [competitor_sales_literature] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId]),
    CONSTRAINT [sales_literature_competitors] FOREIGN KEY ([SalesLiteratureId]) REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId]),
    CONSTRAINT [UQ_CompetitorSalesLiterature] UNIQUE NONCLUSTERED ([CompetitorId] ASC, [SalesLiteratureId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[CompetitorSalesLiterature] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CompetitorSalesLiterature]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_competitors]
    ON [dbo].[CompetitorSalesLiterature]([SalesLiteratureId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

