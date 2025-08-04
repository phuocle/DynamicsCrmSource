CREATE TABLE [dbo].[DynamicPropertyAssociationBase] (
    [ExchangeRate]                 DECIMAL (23, 10) NULL,
    [RegardingObjectid]            UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TransactionCurrencyId]        UNIQUEIDENTIFIER NULL,
    [CreatedOn]                    DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [AssociationStatus]            INT              CONSTRAINT [DF_DynamicPropertyAssociationBase_AssociationStatus] DEFAULT ((1)) NULL,
    [DynamicPropertyAssociationId] UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [InheritanceState]             INT              NULL,
    [DynamicPropertyId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [RegardingObjectTypeCode]      INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_DynamicPropertyAssociation] PRIMARY KEY CLUSTERED ([DynamicPropertyAssociationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [DynamicPropertyAssociation_TransactionCurrency] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DynamicPropertyAssociationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_Product_DynamicPropertyAssociation]
    ON [dbo].[DynamicPropertyAssociationBase]([RegardingObjectid] ASC) WHERE ([RegardingObjectid] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_DynamicPropertyId]
    ON [dbo].[DynamicPropertyAssociationBase]([DynamicPropertyId] ASC) WITH (FILLFACTOR = 80);

