CREATE TABLE [dbo].[ProductSubstitute] (
    [ProductId]            UNIQUEIDENTIFIER NOT NULL,
    [SubstitutedProductId] UNIQUEIDENTIFIER NOT NULL,
    [ProductSubstituteId]  UNIQUEIDENTIFIER CONSTRAINT [DF_ProductSubstitute_ProductSubstituteId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_ProductSubstitute] PRIMARY KEY CLUSTERED ([ProductSubstituteId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [product_substitute] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [substituted_product] FOREIGN KEY ([SubstitutedProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_ProductSubstitute] UNIQUE NONCLUSTERED ([ProductId] ASC, [SubstitutedProductId] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductSubstitute]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_substituted_product]
    ON [dbo].[ProductSubstitute]([SubstitutedProductId] ASC) WITH (FILLFACTOR = 80);

