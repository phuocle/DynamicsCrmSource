CREATE TABLE [dbo].[EntitlementTemplateProducts] (
    [EntitlementTemplateProductId] UNIQUEIDENTIFIER CONSTRAINT [DF_EntitlementTemplateProducts_EntitlementTemplateProductId] DEFAULT (newid()) NOT NULL,
    [ProductId]                    UNIQUEIDENTIFIER NOT NULL,
    [EntitlementTemplateId]        UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_EntitlementTemplateProducts] PRIMARY KEY CLUSTERED ([EntitlementTemplateProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [entitlementtemplate_entitlementtemplateproducts] FOREIGN KEY ([EntitlementTemplateId]) REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId]),
    CONSTRAINT [product_entitlementtemplateproducts] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [UQ_EntitlementTemplateProducts] UNIQUE NONCLUSTERED ([ProductId] ASC, [EntitlementTemplateId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EntitlementTemplateProducts]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entitlementtemplate_products]
    ON [dbo].[EntitlementTemplateProducts]([EntitlementTemplateId] ASC) WITH (FILLFACTOR = 80);

