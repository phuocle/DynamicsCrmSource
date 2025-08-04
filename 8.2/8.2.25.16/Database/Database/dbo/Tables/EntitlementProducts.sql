CREATE TABLE [dbo].[EntitlementProducts] (
    [EntitlementProductId] UNIQUEIDENTIFIER CONSTRAINT [DF_EntitlementProducts_EntitlementProductId] DEFAULT (newid()) NOT NULL,
    [ProductId]            UNIQUEIDENTIFIER NOT NULL,
    [EntitlementId]        UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_EntitlementProducts] PRIMARY KEY CLUSTERED ([EntitlementProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [entitlement_entitlementproducts] FOREIGN KEY ([EntitlementId]) REFERENCES [dbo].[EntitlementBase] ([EntitlementId]),
    CONSTRAINT [product_entitlementProducts] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [UQ_EntitlementProducts] UNIQUE NONCLUSTERED ([ProductId] ASC, [EntitlementId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EntitlementProducts]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entitlement_products]
    ON [dbo].[EntitlementProducts]([EntitlementId] ASC) WITH (FILLFACTOR = 80);

