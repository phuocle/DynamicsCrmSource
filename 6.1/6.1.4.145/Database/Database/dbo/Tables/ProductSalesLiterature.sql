CREATE TABLE [dbo].[ProductSalesLiterature] (
    [ProductId]                UNIQUEIDENTIFIER NOT NULL,
    [SalesLiteratureId]        UNIQUEIDENTIFIER NOT NULL,
    [ProductSalesLiteratureId] UNIQUEIDENTIFIER CONSTRAINT [DF_ProductSalesLiterature_ProductSalesLiteratureId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_ProductSalesLiterature] PRIMARY KEY CLUSTERED ([ProductSalesLiteratureId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [product_sales_literature] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [sales_literature_products] FOREIGN KEY ([SalesLiteratureId]) REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_ProductSalesLiterature] UNIQUE NONCLUSTERED ([ProductId] ASC, [SalesLiteratureId] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductSalesLiterature]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_products]
    ON [dbo].[ProductSalesLiterature]([SalesLiteratureId] ASC) WITH (FILLFACTOR = 80);

