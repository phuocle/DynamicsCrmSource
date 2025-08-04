CREATE TABLE [dbo].[CompetitorSalesLiterature] (
    [CompetitorId]                UNIQUEIDENTIFIER NOT NULL,
    [SalesLiteratureId]           UNIQUEIDENTIFIER NOT NULL,
    [CompetitorSalesLiteratureId] UNIQUEIDENTIFIER CONSTRAINT [DF_CompetitorSalesLiterature_CompetitorSalesLiteratureId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]               ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_CompetitorSalesLiterature] PRIMARY KEY CLUSTERED ([CompetitorSalesLiteratureId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [competitor_sales_literature] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId]) NOT FOR REPLICATION,
    CONSTRAINT [sales_literature_competitors] FOREIGN KEY ([SalesLiteratureId]) REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_CompetitorSalesLiterature] UNIQUE NONCLUSTERED ([CompetitorId] ASC, [SalesLiteratureId] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_competitors]
    ON [dbo].[CompetitorSalesLiterature]([SalesLiteratureId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CompetitorSalesLiterature]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

