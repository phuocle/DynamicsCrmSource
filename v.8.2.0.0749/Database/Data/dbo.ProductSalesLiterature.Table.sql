USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ProductSalesLiterature]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductSalesLiterature](
	[ProductId] [uniqueidentifier] NOT NULL,
	[SalesLiteratureId] [uniqueidentifier] NOT NULL,
	[ProductSalesLiteratureId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_ProductSalesLiterature] PRIMARY KEY CLUSTERED 
(
	[ProductSalesLiteratureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_ProductSalesLiterature]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ProductSalesLiterature] ADD  CONSTRAINT [UQ_ProductSalesLiterature] UNIQUE NONCLUSTERED 
(
	[ProductId] ASC,
	[SalesLiteratureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ProductSalesLiterature]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_sales_literature_products]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_products] ON [dbo].[ProductSalesLiterature]
(
	[SalesLiteratureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductSalesLiterature] ADD  CONSTRAINT [DF_ProductSalesLiterature_ProductSalesLiteratureId]  DEFAULT (newid()) FOR [ProductSalesLiteratureId]
GO
ALTER TABLE [dbo].[ProductSalesLiterature]  WITH CHECK ADD  CONSTRAINT [product_sales_literature] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductSalesLiterature] CHECK CONSTRAINT [product_sales_literature]
GO
ALTER TABLE [dbo].[ProductSalesLiterature]  WITH CHECK ADD  CONSTRAINT [sales_literature_products] FOREIGN KEY([SalesLiteratureId])
REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId])
GO
ALTER TABLE [dbo].[ProductSalesLiterature] CHECK CONSTRAINT [sales_literature_products]
GO
