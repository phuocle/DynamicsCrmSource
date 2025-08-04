CREATE TABLE [dbo].[LeadProduct] (
    [LeadProductId]             UNIQUEIDENTIFIER CONSTRAINT [DF_LeadProduct_LeadProductId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [LeadId]                    UNIQUEIDENTIFIER NOT NULL,
    [ProductId]                 UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_LeadProduct] PRIMARY KEY CLUSTERED ([LeadProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lead_products] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [product_leads] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]),
    CONSTRAINT [UQ_LeadProduct] UNIQUE NONCLUSTERED ([LeadId] ASC, [ProductId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[LeadProduct] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[LeadProduct]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_products]
    ON [dbo].[LeadProduct]([ProductId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

