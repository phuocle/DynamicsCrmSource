CREATE TABLE [dbo].[CompetitorProduct] (
    [CompetitorId]        UNIQUEIDENTIFIER NOT NULL,
    [ProductId]           UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]       ROWVERSION       NULL,
    [CompetitorProductId] UNIQUEIDENTIFIER CONSTRAINT [DF_CompetitorProduct_CompetitorProductId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_CompetitorProduct] PRIMARY KEY CLUSTERED ([CompetitorProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [competitor_products] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId]) NOT FOR REPLICATION,
    CONSTRAINT [product_competitors] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_CompetitorProduct] UNIQUE NONCLUSTERED ([CompetitorId] ASC, [ProductId] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CompetitorProduct]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_product_competitors]
    ON [dbo].[CompetitorProduct]([ProductId] ASC) WITH (FILLFACTOR = 80);

