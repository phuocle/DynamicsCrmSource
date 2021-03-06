USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CompetitorProduct]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompetitorProduct](
	[CompetitorId] [uniqueidentifier] NOT NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[CompetitorProductId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_CompetitorProduct] PRIMARY KEY CLUSTERED 
(
	[CompetitorProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_CompetitorProduct]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[CompetitorProduct] ADD  CONSTRAINT [UQ_CompetitorProduct] UNIQUE NONCLUSTERED 
(
	[CompetitorId] ASC,
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CompetitorProduct]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_product_competitors]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_product_competitors] ON [dbo].[CompetitorProduct]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorProduct] ADD  CONSTRAINT [DF_CompetitorProduct_CompetitorProductId]  DEFAULT (newid()) FOR [CompetitorProductId]
GO
ALTER TABLE [dbo].[CompetitorProduct]  WITH CHECK ADD  CONSTRAINT [competitor_products] FOREIGN KEY([CompetitorId])
REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
ALTER TABLE [dbo].[CompetitorProduct] CHECK CONSTRAINT [competitor_products]
GO
ALTER TABLE [dbo].[CompetitorProduct]  WITH CHECK ADD  CONSTRAINT [product_competitors] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[CompetitorProduct] CHECK CONSTRAINT [product_competitors]
GO
