CREATE TABLE [dbo].[CompetitorProduct]
(
[CompetitorId] [uniqueidentifier] NOT NULL,
[ProductId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[CompetitorProductId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_CompetitorProduct_CompetitorProductId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorProduct] ADD CONSTRAINT [cndx_PrimaryKey_CompetitorProduct] PRIMARY KEY CLUSTERED  ([CompetitorProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorProduct] ADD CONSTRAINT [UQ_CompetitorProduct] UNIQUE NONCLUSTERED  ([CompetitorId], [ProductId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_product_competitors] ON [dbo].[CompetitorProduct] ([ProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CompetitorProduct] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorProduct] ADD CONSTRAINT [competitor_products] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
ALTER TABLE [dbo].[CompetitorProduct] ADD CONSTRAINT [product_competitors] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
