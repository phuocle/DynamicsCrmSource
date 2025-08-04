CREATE TABLE [dbo].[ProductAssociationBase]
(
[AssociatedProduct] [uniqueidentifier] NOT NULL,
[ProductId] [uniqueidentifier] NOT NULL,
[ProductAssociationId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ProductAssociation_ProductAssociationId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ProductAssociationBase_OrganizationId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[UoMId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[statuscode] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[Quantity] [decimal] (23, 10) NULL,
[ProductIsRequired] [int] NULL CONSTRAINT [DF_ProductAssociationBase_ProductIsRequired] DEFAULT ((1)),
[statecode] [int] NOT NULL CONSTRAINT [DF_ProductAssociationBase_statecode] DEFAULT ((2)),
[PropertyCustomizationStatus] [int] NOT NULL CONSTRAINT [DF_ProductAssociationBase_PropertyCustomizationStatus] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductAssociationBase] ADD CONSTRAINT [cndx_PrimaryKey_ProductAssociation] PRIMARY KEY CLUSTERED  ([ProductAssociationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_associated_product] ON [dbo].[ProductAssociationBase] ([AssociatedProduct]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ProductId] ON [dbo].[ProductAssociationBase] ([ProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductAssociationBase] ADD CONSTRAINT [UQ_ProductAssociation] UNIQUE NONCLUSTERED  ([ProductId], [AssociatedProduct], [UoMId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ProductAssociationBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductAssociationBase] ADD CONSTRAINT [Product_ProductAssociation_AssocProd] FOREIGN KEY ([AssociatedProduct]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductAssociationBase] ADD CONSTRAINT [Product_ProductAssociation_Prod] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductAssociationBase] ADD CONSTRAINT [transactioncurrency_ProductAssociation] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
