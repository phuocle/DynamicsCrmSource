CREATE TABLE [dbo].[DynamicPropertyAssociationBase] (
    [DynamicPropertyAssociationId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [RegardingObjectid]            UNIQUEIDENTIFIER NULL,
    [DynamicPropertyId]            UNIQUEIDENTIFIER NOT NULL,
    [AssociationStatus]            INT              CONSTRAINT [DF_DynamicPropertyAssociationBase_AssociationStatus] DEFAULT ((1)) NULL,
    [InheritanceState]             INT              NULL,
    [ExchangeRate]                 DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]        UNIQUEIDENTIFIER NULL,
    [RegardingObjectTypeCode]      INT              NULL,
    [RegardingObjectIdYomiName]    NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_DynamicPropertyAssociation] PRIMARY KEY CLUSTERED ([DynamicPropertyAssociationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [DynamicPropertyAssociation_TransactionCurrency] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[DynamicPropertyAssociationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DynamicPropertyAssociationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_DynamicPropertyId]
    ON [dbo].[DynamicPropertyAssociationBase]([DynamicPropertyId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_Product_DynamicPropertyAssociation]
    ON [dbo].[DynamicPropertyAssociationBase]([RegardingObjectid] ASC) WHERE ([RegardingObjectid] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

