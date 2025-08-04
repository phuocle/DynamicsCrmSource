CREATE TABLE [dbo].[ProductSubstituteBase] (
    [ProductId]                 UNIQUEIDENTIFIER NOT NULL,
    [SubstitutedProductId]      UNIQUEIDENTIFIER NOT NULL,
    [ProductSubstituteId]       UNIQUEIDENTIFIER CONSTRAINT [DF_ProductSubstitute_ProductSubstituteId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedOn]                 DATETIME         NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [OrganizationId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ProductSubstituteBase_OrganizationId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [statuscode]                INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              CONSTRAINT [DF_ProductSubstituteBase_statecode] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Direction]                 INT              CONSTRAINT [DF_ProductSubstituteBase_Direction] DEFAULT ((0)) NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [SalesRelationshipType]     INT              CONSTRAINT [DF_ProductSubstituteBase_SalesRelationshipType] DEFAULT ((3)) NOT NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_ProductSubstitute] PRIMARY KEY CLUSTERED ([ProductSubstituteId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [product_ProductSubstitute_productid] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [product_ProductSubstitute_substitutedproductid] FOREIGN KEY ([SubstitutedProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [transactioncurrency_ProductSubstitute] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [UQ_ProductSubstitute] UNIQUE NONCLUSTERED ([ProductId] ASC, [SubstitutedProductId] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductSubstituteBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_substituted_product]
    ON [dbo].[ProductSubstituteBase]([SubstitutedProductId] ASC) WITH (FILLFACTOR = 80);

