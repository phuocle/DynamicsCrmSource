CREATE TABLE [dbo].[ProductAssociationBase] (
    [ProductAssociationId]        UNIQUEIDENTIFIER CONSTRAINT [DF_ProductAssociationBase_ProductAssociationId] DEFAULT (newid()) NOT NULL,
    [CreatedOn]                   DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [OrganizationId]              UNIQUEIDENTIFIER CONSTRAINT [DF_ProductAssociationBase_OrganizationId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [ImportSequenceNumber]        INT              NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [AssociatedProduct]           UNIQUEIDENTIFIER NOT NULL,
    [ProductId]                   UNIQUEIDENTIFIER NOT NULL,
    [Quantity]                    DECIMAL (23, 10) NULL,
    [ProductIsRequired]           INT              CONSTRAINT [DF_ProductAssociationBase_ProductIsRequired] DEFAULT ((1)) NULL,
    [UoMId]                       UNIQUEIDENTIFIER NULL,
    [statecode]                   INT              CONSTRAINT [DF_ProductAssociationBase_statecode] DEFAULT ((2)) NOT NULL,
    [statuscode]                  INT              NULL,
    [PropertyCustomizationStatus] INT              CONSTRAINT [DF_ProductAssociationBase_PropertyCustomizationStatus] DEFAULT ((0)) NOT NULL,
    [ExchangeRate]                DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]       UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ProductAssociation] PRIMARY KEY CLUSTERED ([ProductAssociationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [Product_ProductAssociation_AssocProd] FOREIGN KEY ([AssociatedProduct]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [Product_ProductAssociation_Prod] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [transactioncurrency_ProductAssociation] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [UQ_ProductAssociation] UNIQUE NONCLUSTERED ([ProductId] ASC, [AssociatedProduct] ASC, [UoMId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[ProductAssociationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductAssociationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ProductId]
    ON [dbo].[ProductAssociationBase]([ProductId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_associated_product]
    ON [dbo].[ProductAssociationBase]([AssociatedProduct] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_4C71139BC6D447EFB994B18220D98D13]
    ON [dbo].[ProductAssociationBase]([ProductAssociationId] ASC)
    INCLUDE([AssociatedProduct], [ProductId], [ProductIsRequired], [Quantity], [UoMId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

