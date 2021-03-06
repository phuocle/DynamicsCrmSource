USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ProductSubstituteBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductSubstituteBase](
	[ProductId] [uniqueidentifier] NOT NULL,
	[SubstitutedProductId] [uniqueidentifier] NOT NULL,
	[ProductSubstituteId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedOn] [datetime] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[statuscode] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[statecode] [int] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[Direction] [int] NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[SalesRelationshipType] [int] NOT NULL,
	[ImportSequenceNumber] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
 CONSTRAINT [cndx_PrimaryKey_ProductSubstitute] PRIMARY KEY CLUSTERED 
(
	[ProductSubstituteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_ProductSubstitute]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ProductSubstituteBase] ADD  CONSTRAINT [UQ_ProductSubstitute] UNIQUE NONCLUSTERED 
(
	[ProductId] ASC,
	[SubstitutedProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ProductSubstituteBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_substituted_product]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_substituted_product] ON [dbo].[ProductSubstituteBase]
(
	[SubstitutedProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductSubstituteBase] ADD  CONSTRAINT [DF_ProductSubstitute_ProductSubstituteId]  DEFAULT (newid()) FOR [ProductSubstituteId]
GO
ALTER TABLE [dbo].[ProductSubstituteBase] ADD  CONSTRAINT [DF_ProductSubstituteBase_OrganizationId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OrganizationId]
GO
ALTER TABLE [dbo].[ProductSubstituteBase] ADD  CONSTRAINT [DF_ProductSubstituteBase_statecode]  DEFAULT ((0)) FOR [statecode]
GO
ALTER TABLE [dbo].[ProductSubstituteBase] ADD  CONSTRAINT [DF_ProductSubstituteBase_Direction]  DEFAULT ((0)) FOR [Direction]
GO
ALTER TABLE [dbo].[ProductSubstituteBase] ADD  CONSTRAINT [DF_ProductSubstituteBase_SalesRelationshipType]  DEFAULT ((3)) FOR [SalesRelationshipType]
GO
ALTER TABLE [dbo].[ProductSubstituteBase]  WITH CHECK ADD  CONSTRAINT [product_ProductSubstitute_productid] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductSubstituteBase] CHECK CONSTRAINT [product_ProductSubstitute_productid]
GO
ALTER TABLE [dbo].[ProductSubstituteBase]  WITH CHECK ADD  CONSTRAINT [product_ProductSubstitute_substitutedproductid] FOREIGN KEY([SubstitutedProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductSubstituteBase] CHECK CONSTRAINT [product_ProductSubstitute_substitutedproductid]
GO
ALTER TABLE [dbo].[ProductSubstituteBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_ProductSubstitute] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ProductSubstituteBase] CHECK CONSTRAINT [transactioncurrency_ProductSubstitute]
GO
