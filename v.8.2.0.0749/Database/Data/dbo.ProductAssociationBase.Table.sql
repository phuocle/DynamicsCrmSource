USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ProductAssociationBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductAssociationBase](
	[AssociatedProduct] [uniqueidentifier] NOT NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[ProductAssociationId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[UoMId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[statuscode] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[Quantity] [decimal](23, 10) NULL,
	[ProductIsRequired] [int] NULL,
	[statecode] [int] NOT NULL,
	[PropertyCustomizationStatus] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_ProductAssociation] PRIMARY KEY CLUSTERED 
(
	[ProductAssociationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_ProductAssociation]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ProductAssociationBase] ADD  CONSTRAINT [UQ_ProductAssociation] UNIQUE NONCLUSTERED 
(
	[ProductId] ASC,
	[AssociatedProduct] ASC,
	[UoMId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ProductAssociationBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_associated_product]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_associated_product] ON [dbo].[ProductAssociationBase]
(
	[AssociatedProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ProductId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ProductId] ON [dbo].[ProductAssociationBase]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductAssociationBase] ADD  CONSTRAINT [DF_ProductAssociation_ProductAssociationId]  DEFAULT (newid()) FOR [ProductAssociationId]
GO
ALTER TABLE [dbo].[ProductAssociationBase] ADD  CONSTRAINT [DF_ProductAssociationBase_OrganizationId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OrganizationId]
GO
ALTER TABLE [dbo].[ProductAssociationBase] ADD  CONSTRAINT [DF_ProductAssociationBase_ProductIsRequired]  DEFAULT ((1)) FOR [ProductIsRequired]
GO
ALTER TABLE [dbo].[ProductAssociationBase] ADD  CONSTRAINT [DF_ProductAssociationBase_statecode]  DEFAULT ((2)) FOR [statecode]
GO
ALTER TABLE [dbo].[ProductAssociationBase] ADD  CONSTRAINT [DF_ProductAssociationBase_PropertyCustomizationStatus]  DEFAULT ((0)) FOR [PropertyCustomizationStatus]
GO
ALTER TABLE [dbo].[ProductAssociationBase]  WITH CHECK ADD  CONSTRAINT [Product_ProductAssociation_AssocProd] FOREIGN KEY([AssociatedProduct])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductAssociationBase] CHECK CONSTRAINT [Product_ProductAssociation_AssocProd]
GO
ALTER TABLE [dbo].[ProductAssociationBase]  WITH CHECK ADD  CONSTRAINT [Product_ProductAssociation_Prod] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductAssociationBase] CHECK CONSTRAINT [Product_ProductAssociation_Prod]
GO
ALTER TABLE [dbo].[ProductAssociationBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_ProductAssociation] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ProductAssociationBase] CHECK CONSTRAINT [transactioncurrency_ProductAssociation]
GO
