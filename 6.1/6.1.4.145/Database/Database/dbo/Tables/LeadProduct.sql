CREATE TABLE [dbo].[LeadProduct] (
    [ProductId]     UNIQUEIDENTIFIER NOT NULL,
    [LeadId]        UNIQUEIDENTIFIER NOT NULL,
    [LeadProductId] UNIQUEIDENTIFIER CONSTRAINT [DF_LeadProduct_LeadProductId] DEFAULT (newid()) NOT NULL,
    [VersionNumber] ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_LeadProduct] PRIMARY KEY CLUSTERED ([LeadProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lead_products] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [product_leads] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_LeadProduct] UNIQUE NONCLUSTERED ([LeadId] ASC, [ProductId] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_products]
    ON [dbo].[LeadProduct]([ProductId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[LeadProduct]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

