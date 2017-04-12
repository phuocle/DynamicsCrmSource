CREATE TABLE [dbo].[EntitlementTemplateProducts]
(
[EntitlementTemplateProductId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_EntitlementTemplateProducts_EntitlementTemplateProductId] DEFAULT (newid()),
[ProductId] [uniqueidentifier] NOT NULL,
[EntitlementTemplateId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementTemplateProducts] ADD CONSTRAINT [cndx_PrimaryKey_EntitlementTemplateProducts] PRIMARY KEY CLUSTERED  ([EntitlementTemplateProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entitlementtemplate_products] ON [dbo].[EntitlementTemplateProducts] ([EntitlementTemplateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementTemplateProducts] ADD CONSTRAINT [UQ_EntitlementTemplateProducts] UNIQUE NONCLUSTERED  ([ProductId], [EntitlementTemplateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EntitlementTemplateProducts] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementTemplateProducts] ADD CONSTRAINT [entitlementtemplate_entitlementtemplateproducts] FOREIGN KEY ([EntitlementTemplateId]) REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId])
GO
ALTER TABLE [dbo].[EntitlementTemplateProducts] ADD CONSTRAINT [product_entitlementtemplateproducts] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
