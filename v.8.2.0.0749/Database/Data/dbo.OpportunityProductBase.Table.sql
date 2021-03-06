USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[OpportunityProductBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OpportunityProductBase](
	[ProductId] [uniqueidentifier] NULL,
	[OpportunityProductId] [uniqueidentifier] NOT NULL,
	[PricingErrorCode] [int] NULL,
	[IsProductOverridden] [bit] NULL,
	[IsPriceOverridden] [bit] NULL,
	[PricePerUnit] [money] NULL,
	[OpportunityId] [uniqueidentifier] NOT NULL,
	[BaseAmount] [money] NULL,
	[ExtendedAmount] [money] NULL,
	[UoMId] [uniqueidentifier] NULL,
	[ManualDiscountAmount] [money] NULL,
	[Quantity] [decimal](23, 10) NULL,
	[CreatedOn] [datetime] NULL,
	[VolumeDiscountAmount] [money] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[Tax] [money] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ProductDescription] [nvarchar](500) NULL,
	[ModifiedOn] [datetime] NULL,
	[Description] [nvarchar](max) NULL,
	[VersionNumber] [timestamp] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
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
	[ProductTypeCode] [int] NOT NULL,
	[ParentBundleId] [uniqueidentifier] NULL,
	[PropertyConfigurationStatus] [int] NOT NULL,
	[ProductAssociationId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_OpportunityProduct] PRIMARY KEY CLUSTERED 
(
	[OpportunityProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_opportunity_products]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_products] ON [dbo].[OpportunityProductBase]
(
	[ProductId] ASC
)
WHERE ([ProductId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OpportunityProductBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OpportunityProductBase] ADD  CONSTRAINT [Set_To_Zero122]  DEFAULT ((0)) FOR [IsProductOverridden]
GO
ALTER TABLE [dbo].[OpportunityProductBase] ADD  CONSTRAINT [Set_To_Zero123]  DEFAULT ((0)) FOR [Quantity]
GO
ALTER TABLE [dbo].[OpportunityProductBase] ADD  CONSTRAINT [DF_OpportunityProductBase_ProductTypeCode]  DEFAULT ((1)) FOR [ProductTypeCode]
GO
ALTER TABLE [dbo].[OpportunityProductBase] ADD  CONSTRAINT [DF_OpportunityProductBase_PropertyConfigurationStatus]  DEFAULT ((2)) FOR [PropertyConfigurationStatus]
GO
ALTER TABLE [dbo].[OpportunityProductBase]  WITH CHECK ADD  CONSTRAINT [opportunity_products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[OpportunityProductBase] CHECK CONSTRAINT [opportunity_products]
GO
ALTER TABLE [dbo].[OpportunityProductBase]  WITH CHECK ADD  CONSTRAINT [opportunityproduct_parent_opportunityproduct] FOREIGN KEY([ParentBundleId])
REFERENCES [dbo].[OpportunityProductBase] ([OpportunityProductId])
GO
ALTER TABLE [dbo].[OpportunityProductBase] CHECK CONSTRAINT [opportunityproduct_parent_opportunityproduct]
GO
ALTER TABLE [dbo].[OpportunityProductBase]  WITH CHECK ADD  CONSTRAINT [product_opportunities] FOREIGN KEY([OpportunityId])
REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[OpportunityProductBase] CHECK CONSTRAINT [product_opportunities]
GO
ALTER TABLE [dbo].[OpportunityProductBase]  WITH CHECK ADD  CONSTRAINT [productAssociation_opportunity_product] FOREIGN KEY([ProductAssociationId])
REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId])
GO
ALTER TABLE [dbo].[OpportunityProductBase] CHECK CONSTRAINT [productAssociation_opportunity_product]
GO
ALTER TABLE [dbo].[OpportunityProductBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_opportunityproduct] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[OpportunityProductBase] CHECK CONSTRAINT [transactioncurrency_opportunityproduct]
GO
ALTER TABLE [dbo].[OpportunityProductBase]  WITH CHECK ADD  CONSTRAINT [unit_of_measurement_opportunity_products] FOREIGN KEY([UoMId])
REFERENCES [dbo].[UoMBase] ([UoMId])
GO
ALTER TABLE [dbo].[OpportunityProductBase] CHECK CONSTRAINT [unit_of_measurement_opportunity_products]
GO
