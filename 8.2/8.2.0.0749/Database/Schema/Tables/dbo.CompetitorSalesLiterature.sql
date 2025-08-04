CREATE TABLE [dbo].[CompetitorSalesLiterature]
(
[CompetitorId] [uniqueidentifier] NOT NULL,
[SalesLiteratureId] [uniqueidentifier] NOT NULL,
[CompetitorSalesLiteratureId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_CompetitorSalesLiterature_CompetitorSalesLiteratureId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorSalesLiterature] ADD CONSTRAINT [cndx_PrimaryKey_CompetitorSalesLiterature] PRIMARY KEY CLUSTERED  ([CompetitorSalesLiteratureId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorSalesLiterature] ADD CONSTRAINT [UQ_CompetitorSalesLiterature] UNIQUE NONCLUSTERED  ([CompetitorId], [SalesLiteratureId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_competitors] ON [dbo].[CompetitorSalesLiterature] ([SalesLiteratureId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CompetitorSalesLiterature] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorSalesLiterature] ADD CONSTRAINT [competitor_sales_literature] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
ALTER TABLE [dbo].[CompetitorSalesLiterature] ADD CONSTRAINT [sales_literature_competitors] FOREIGN KEY ([SalesLiteratureId]) REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId])
GO
