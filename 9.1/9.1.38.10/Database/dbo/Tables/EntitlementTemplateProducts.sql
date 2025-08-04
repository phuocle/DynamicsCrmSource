CREATE TABLE [dbo].[EntitlementTemplateProducts] (
    [EntitlementTemplateProductId] UNIQUEIDENTIFIER CONSTRAINT [DF_EntitlementTemplateProducts_EntitlementTemplateProductId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [ProductId]                    UNIQUEIDENTIFIER NOT NULL,
    [EntitlementTemplateId]        UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_EntitlementTemplateProducts] PRIMARY KEY CLUSTERED ([EntitlementTemplateProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [entitlementtemplate_entitlementtemplateproducts] FOREIGN KEY ([EntitlementTemplateId]) REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId]),
    CONSTRAINT [product_entitlementtemplateproducts] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [UQ_EntitlementTemplateProducts] UNIQUE NONCLUSTERED ([ProductId] ASC, [EntitlementTemplateId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[EntitlementTemplateProducts] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EntitlementTemplateProducts]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entitlementtemplate_products]
    ON [dbo].[EntitlementTemplateProducts]([EntitlementTemplateId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

