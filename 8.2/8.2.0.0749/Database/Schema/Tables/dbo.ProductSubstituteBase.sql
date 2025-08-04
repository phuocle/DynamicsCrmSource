CREATE TABLE [dbo].[ProductSubstituteBase]
(
[ProductId] [uniqueidentifier] NOT NULL,
[SubstitutedProductId] [uniqueidentifier] NOT NULL,
[ProductSubstituteId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ProductSubstitute_ProductSubstituteId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL,
[CreatedOn] [datetime] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[OrganizationId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ProductSubstituteBase_OrganizationId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[statuscode] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[statecode] [int] NOT NULL CONSTRAINT [DF_ProductSubstituteBase_statecode] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Direction] [int] NOT NULL CONSTRAINT [DF_ProductSubstituteBase_Direction] DEFAULT ((0)),
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[SalesRelationshipType] [int] NOT NULL CONSTRAINT [DF_ProductSubstituteBase_SalesRelationshipType] DEFAULT ((3)),
[ImportSequenceNumber] [int] NULL,
[ModifiedOn] [datetime] NULL,
[OverriddenCreatedOn] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductSubstituteBase] ADD CONSTRAINT [cndx_PrimaryKey_ProductSubstitute] PRIMARY KEY CLUSTERED  ([ProductSubstituteId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductSubstituteBase] ADD CONSTRAINT [UQ_ProductSubstitute] UNIQUE NONCLUSTERED  ([ProductId], [SubstitutedProductId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_substituted_product] ON [dbo].[ProductSubstituteBase] ([SubstitutedProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ProductSubstituteBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductSubstituteBase] ADD CONSTRAINT [product_ProductSubstitute_productid] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductSubstituteBase] ADD CONSTRAINT [product_ProductSubstitute_substitutedproductid] FOREIGN KEY ([SubstitutedProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductSubstituteBase] ADD CONSTRAINT [transactioncurrency_ProductSubstitute] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
