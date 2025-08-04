CREATE TABLE [dbo].[ProductAssociation] (
    [AssociatedProduct]    UNIQUEIDENTIFIER NOT NULL,
    [ProductId]            UNIQUEIDENTIFIER NOT NULL,
    [ProductAssociationId] UNIQUEIDENTIFIER CONSTRAINT [DF_ProductAssociation_ProductAssociationId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_ProductAssociation] PRIMARY KEY CLUSTERED ([ProductAssociationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [associated_product] FOREIGN KEY ([AssociatedProduct]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [product_association] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_ProductAssociation] UNIQUE NONCLUSTERED ([ProductId] ASC, [AssociatedProduct] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductAssociation]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_associated_product]
    ON [dbo].[ProductAssociation]([AssociatedProduct] ASC) WITH (FILLFACTOR = 80);

