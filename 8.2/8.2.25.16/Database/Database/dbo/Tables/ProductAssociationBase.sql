CREATE TABLE [dbo].[ProductAssociationBase] (
    [AssociatedProduct]           UNIQUEIDENTIFIER NOT NULL,
    [ProductId]                   UNIQUEIDENTIFIER NOT NULL,
    [ProductAssociationId]        UNIQUEIDENTIFIER CONSTRAINT [DF_ProductAssociation_ProductAssociationId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [OrganizationId]              UNIQUEIDENTIFIER CONSTRAINT [DF_ProductAssociationBase_OrganizationId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [UoMId]                       UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOn]                   DATETIME         NULL,
    [ExchangeRate]                DECIMAL (23, 10) NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [statuscode]                  INT              NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TransactionCurrencyId]       UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]        INT              NULL,
    [Quantity]                    DECIMAL (23, 10) NULL,
    [ProductIsRequired]           INT              CONSTRAINT [DF_ProductAssociationBase_ProductIsRequired] DEFAULT ((1)) NULL,
    [statecode]                   INT              CONSTRAINT [DF_ProductAssociationBase_statecode] DEFAULT ((2)) NOT NULL,
    [PropertyCustomizationStatus] INT              CONSTRAINT [DF_ProductAssociationBase_PropertyCustomizationStatus] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ProductAssociation] PRIMARY KEY CLUSTERED ([ProductAssociationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [Product_ProductAssociation_AssocProd] FOREIGN KEY ([AssociatedProduct]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [Product_ProductAssociation_Prod] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [transactioncurrency_ProductAssociation] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [UQ_ProductAssociation] UNIQUE NONCLUSTERED ([ProductId] ASC, [AssociatedProduct] ASC, [UoMId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductAssociationBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ProductId]
    ON [dbo].[ProductAssociationBase]([ProductId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_associated_product]
    ON [dbo].[ProductAssociationBase]([AssociatedProduct] ASC) WITH (FILLFACTOR = 80);

