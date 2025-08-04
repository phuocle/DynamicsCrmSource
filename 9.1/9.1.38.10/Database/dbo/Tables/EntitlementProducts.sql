CREATE TABLE [dbo].[EntitlementProducts] (
    [EntitlementProductId]      UNIQUEIDENTIFIER CONSTRAINT [DF_EntitlementProducts_EntitlementProductId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ProductId]                 UNIQUEIDENTIFIER NOT NULL,
    [EntitlementId]             UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_EntitlementProducts] PRIMARY KEY CLUSTERED ([EntitlementProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [entitlement_entitlementproducts] FOREIGN KEY ([EntitlementId]) REFERENCES [dbo].[EntitlementBase] ([EntitlementId]),
    CONSTRAINT [product_entitlementProducts] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [UQ_EntitlementProducts] UNIQUE NONCLUSTERED ([ProductId] ASC, [EntitlementId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[EntitlementProducts] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EntitlementProducts]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entitlement_products]
    ON [dbo].[EntitlementProducts]([EntitlementId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

