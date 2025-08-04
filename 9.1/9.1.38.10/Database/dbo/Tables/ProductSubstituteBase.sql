CREATE TABLE [dbo].[ProductSubstituteBase] (
    [ProductSubstituteId]       UNIQUEIDENTIFIER CONSTRAINT [DF_ProductSubstituteBase_ProductSubstituteId] DEFAULT (newid()) NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ProductSubstituteBase_OrganizationId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ProductId]                 UNIQUEIDENTIFIER NOT NULL,
    [SalesRelationshipType]     INT              CONSTRAINT [DF_ProductSubstituteBase_SalesRelationshipType] DEFAULT ((3)) NOT NULL,
    [statecode]                 INT              CONSTRAINT [DF_ProductSubstituteBase_statecode] DEFAULT ((0)) NOT NULL,
    [statuscode]                INT              NULL,
    [SubstitutedProductId]      UNIQUEIDENTIFIER NOT NULL,
    [Direction]                 INT              CONSTRAINT [DF_ProductSubstituteBase_Direction] DEFAULT ((0)) NOT NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ProductSubstitute] PRIMARY KEY CLUSTERED ([ProductSubstituteId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [product_ProductSubstitute_productid] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [product_ProductSubstitute_substitutedproductid] FOREIGN KEY ([SubstitutedProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [transactioncurrency_ProductSubstitute] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [UQ_ProductSubstitute] UNIQUE NONCLUSTERED ([ProductId] ASC, [SubstitutedProductId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[ProductSubstituteBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductSubstituteBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_substituted_product]
    ON [dbo].[ProductSubstituteBase]([SubstitutedProductId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_35B66ED8756443B5AA6E7B02F3679E0A]
    ON [dbo].[ProductSubstituteBase]([ProductSubstituteId] ASC)
    INCLUDE([ProductId], [SubstitutedProductId], [SalesRelationshipType], [Direction], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

