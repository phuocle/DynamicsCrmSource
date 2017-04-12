CREATE TABLE [dbo].[OpportunityProductBase]
(
[ProductId] [uniqueidentifier] NULL,
[OpportunityProductId] [uniqueidentifier] NOT NULL,
[PricingErrorCode] [int] NULL,
[IsProductOverridden] [bit] NULL CONSTRAINT [Set_To_Zero122] DEFAULT ((0)),
[IsPriceOverridden] [bit] NULL,
[PricePerUnit] [money] NULL,
[OpportunityId] [uniqueidentifier] NOT NULL,
[BaseAmount] [money] NULL,
[ExtendedAmount] [money] NULL,
[UoMId] [uniqueidentifier] NULL,
[ManualDiscountAmount] [money] NULL,
[Quantity] [decimal] (23, 10) NULL CONSTRAINT [Set_To_Zero123] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[VolumeDiscountAmount] [money] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Tax] [money] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ProductDescription] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[BaseAmount_Base] [money] NULL,
[ManualDiscountAmount_Base] [money] NULL,
[VolumeDiscountAmount_Base] [money] NULL,
[PricePerUnit_Base] [money] NULL,
[Tax_Base] [money] NULL,
[ExtendedAmount_Base] [money] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[LineItemNumber] [int] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[SequenceNumber] [int] NULL,
[ProductTypeCode] [int] NOT NULL CONSTRAINT [DF_OpportunityProductBase_ProductTypeCode] DEFAULT ((1)),
[ParentBundleId] [uniqueidentifier] NULL,
[PropertyConfigurationStatus] [int] NOT NULL CONSTRAINT [DF_OpportunityProductBase_PropertyConfigurationStatus] DEFAULT ((2)),
[ProductAssociationId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[OpportunityProductBase] ADD CONSTRAINT [cndx_PrimaryKey_OpportunityProduct] PRIMARY KEY CLUSTERED  ([OpportunityProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_OpportunityProduct_modifiedon] ON [dbo].[OpportunityProductBase] ([ModifiedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_for_cascaderelationship_product_opportunities] ON [dbo].[OpportunityProductBase] ([OpportunityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleId] ON [dbo].[OpportunityProductBase] ([ParentBundleId]) WHERE ([ParentBundleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_products] ON [dbo].[OpportunityProductBase] ([ProductId]) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OpportunityProductBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OpportunityProductBase] ADD CONSTRAINT [opportunity_products] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[OpportunityProductBase] ADD CONSTRAINT [opportunityproduct_parent_opportunityproduct] FOREIGN KEY ([ParentBundleId]) REFERENCES [dbo].[OpportunityProductBase] ([OpportunityProductId])
GO
ALTER TABLE [dbo].[OpportunityProductBase] ADD CONSTRAINT [product_opportunities] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[OpportunityProductBase] ADD CONSTRAINT [productAssociation_opportunity_product] FOREIGN KEY ([ProductAssociationId]) REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId])
GO
ALTER TABLE [dbo].[OpportunityProductBase] ADD CONSTRAINT [transactioncurrency_opportunityproduct] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[OpportunityProductBase] ADD CONSTRAINT [unit_of_measurement_opportunity_products] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
GO
