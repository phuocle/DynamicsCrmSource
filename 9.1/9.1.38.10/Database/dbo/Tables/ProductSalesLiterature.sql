CREATE TABLE [dbo].[ProductSalesLiterature] (
    [ProductSalesLiteratureId]  UNIQUEIDENTIFIER CONSTRAINT [DF_ProductSalesLiterature_ProductSalesLiteratureId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ProductId]                 UNIQUEIDENTIFIER NOT NULL,
    [SalesLiteratureId]         UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ProductSalesLiterature] PRIMARY KEY CLUSTERED ([ProductSalesLiteratureId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [product_sales_literature] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [sales_literature_products] FOREIGN KEY ([SalesLiteratureId]) REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId]),
    CONSTRAINT [UQ_ProductSalesLiterature] UNIQUE NONCLUSTERED ([ProductId] ASC, [SalesLiteratureId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[ProductSalesLiterature] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductSalesLiterature]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_products]
    ON [dbo].[ProductSalesLiterature]([SalesLiteratureId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

