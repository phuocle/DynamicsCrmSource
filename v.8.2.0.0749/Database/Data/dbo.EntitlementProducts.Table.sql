USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[EntitlementProducts]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntitlementProducts](
	[EntitlementProductId] [uniqueidentifier] NOT NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[EntitlementId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_EntitlementProducts] PRIMARY KEY CLUSTERED 
(
	[EntitlementProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_EntitlementProducts]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[EntitlementProducts] ADD  CONSTRAINT [UQ_EntitlementProducts] UNIQUE NONCLUSTERED 
(
	[ProductId] ASC,
	[EntitlementId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EntitlementProducts]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_entitlement_products]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entitlement_products] ON [dbo].[EntitlementProducts]
(
	[EntitlementId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementProducts] ADD  CONSTRAINT [DF_EntitlementProducts_EntitlementProductId]  DEFAULT (newid()) FOR [EntitlementProductId]
GO
ALTER TABLE [dbo].[EntitlementProducts]  WITH CHECK ADD  CONSTRAINT [entitlement_entitlementproducts] FOREIGN KEY([EntitlementId])
REFERENCES [dbo].[EntitlementBase] ([EntitlementId])
GO
ALTER TABLE [dbo].[EntitlementProducts] CHECK CONSTRAINT [entitlement_entitlementproducts]
GO
ALTER TABLE [dbo].[EntitlementProducts]  WITH CHECK ADD  CONSTRAINT [product_entitlementProducts] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[EntitlementProducts] CHECK CONSTRAINT [product_entitlementProducts]
GO
