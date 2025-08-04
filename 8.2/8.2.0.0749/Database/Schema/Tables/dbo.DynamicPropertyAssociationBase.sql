CREATE TABLE [dbo].[DynamicPropertyAssociationBase]
(
[ExchangeRate] [decimal] (23, 10) NULL,
[RegardingObjectid] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[AssociationStatus] [int] NULL CONSTRAINT [DF_DynamicPropertyAssociationBase_AssociationStatus] DEFAULT ((1)),
[DynamicPropertyAssociationId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[InheritanceState] [int] NULL,
[DynamicPropertyId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[RegardingObjectTypeCode] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyAssociationBase] ADD CONSTRAINT [cndx_PrimaryKey_DynamicPropertyAssociation] PRIMARY KEY CLUSTERED  ([DynamicPropertyAssociationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_DynamicPropertyId] ON [dbo].[DynamicPropertyAssociationBase] ([DynamicPropertyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_Product_DynamicPropertyAssociation] ON [dbo].[DynamicPropertyAssociationBase] ([RegardingObjectid]) WHERE ([RegardingObjectid] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DynamicPropertyAssociationBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyAssociationBase] ADD CONSTRAINT [DynamicPropertyAssociation_TransactionCurrency] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
