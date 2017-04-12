CREATE TABLE [dbo].[EntitlementProducts]
(
[EntitlementProductId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_EntitlementProducts_EntitlementProductId] DEFAULT (newid()),
[ProductId] [uniqueidentifier] NOT NULL,
[EntitlementId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementProducts] ADD CONSTRAINT [cndx_PrimaryKey_EntitlementProducts] PRIMARY KEY CLUSTERED  ([EntitlementProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entitlement_products] ON [dbo].[EntitlementProducts] ([EntitlementId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementProducts] ADD CONSTRAINT [UQ_EntitlementProducts] UNIQUE NONCLUSTERED  ([ProductId], [EntitlementId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EntitlementProducts] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementProducts] ADD CONSTRAINT [entitlement_entitlementproducts] FOREIGN KEY ([EntitlementId]) REFERENCES [dbo].[EntitlementBase] ([EntitlementId])
GO
ALTER TABLE [dbo].[EntitlementProducts] ADD CONSTRAINT [product_entitlementProducts] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
