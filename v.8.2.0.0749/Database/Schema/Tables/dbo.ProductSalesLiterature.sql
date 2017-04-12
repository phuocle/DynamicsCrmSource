CREATE TABLE [dbo].[ProductSalesLiterature]
(
[ProductId] [uniqueidentifier] NOT NULL,
[SalesLiteratureId] [uniqueidentifier] NOT NULL,
[ProductSalesLiteratureId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ProductSalesLiterature_ProductSalesLiteratureId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductSalesLiterature] ADD CONSTRAINT [cndx_PrimaryKey_ProductSalesLiterature] PRIMARY KEY CLUSTERED  ([ProductSalesLiteratureId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductSalesLiterature] ADD CONSTRAINT [UQ_ProductSalesLiterature] UNIQUE NONCLUSTERED  ([ProductId], [SalesLiteratureId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_products] ON [dbo].[ProductSalesLiterature] ([SalesLiteratureId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ProductSalesLiterature] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductSalesLiterature] ADD CONSTRAINT [product_sales_literature] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductSalesLiterature] ADD CONSTRAINT [sales_literature_products] FOREIGN KEY ([SalesLiteratureId]) REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId])
GO
