CREATE TABLE [dbo].[LeadProduct]
(
[ProductId] [uniqueidentifier] NOT NULL,
[LeadId] [uniqueidentifier] NOT NULL,
[LeadProductId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_LeadProduct_LeadProductId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadProduct] ADD CONSTRAINT [cndx_PrimaryKey_LeadProduct] PRIMARY KEY CLUSTERED  ([LeadProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadProduct] ADD CONSTRAINT [UQ_LeadProduct] UNIQUE NONCLUSTERED  ([LeadId], [ProductId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_products] ON [dbo].[LeadProduct] ([ProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[LeadProduct] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadProduct] ADD CONSTRAINT [lead_products] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[LeadProduct] ADD CONSTRAINT [product_leads] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId])
GO
