USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[LeadProduct]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadProduct](
	[ProductId] [uniqueidentifier] NOT NULL,
	[LeadId] [uniqueidentifier] NOT NULL,
	[LeadProductId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_LeadProduct] PRIMARY KEY CLUSTERED 
(
	[LeadProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_LeadProduct]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[LeadProduct] ADD  CONSTRAINT [UQ_LeadProduct] UNIQUE NONCLUSTERED 
(
	[LeadId] ASC,
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[LeadProduct]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_lead_products]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_products] ON [dbo].[LeadProduct]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadProduct] ADD  CONSTRAINT [DF_LeadProduct_LeadProductId]  DEFAULT (newid()) FOR [LeadProductId]
GO
ALTER TABLE [dbo].[LeadProduct]  WITH CHECK ADD  CONSTRAINT [lead_products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[LeadProduct] CHECK CONSTRAINT [lead_products]
GO
ALTER TABLE [dbo].[LeadProduct]  WITH CHECK ADD  CONSTRAINT [product_leads] FOREIGN KEY([LeadId])
REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[LeadProduct] CHECK CONSTRAINT [product_leads]
GO
