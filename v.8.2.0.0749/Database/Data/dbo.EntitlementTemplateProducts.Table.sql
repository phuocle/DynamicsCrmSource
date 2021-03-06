USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[EntitlementTemplateProducts]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntitlementTemplateProducts](
	[EntitlementTemplateProductId] [uniqueidentifier] NOT NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[EntitlementTemplateId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_EntitlementTemplateProducts] PRIMARY KEY CLUSTERED 
(
	[EntitlementTemplateProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_EntitlementTemplateProducts]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[EntitlementTemplateProducts] ADD  CONSTRAINT [UQ_EntitlementTemplateProducts] UNIQUE NONCLUSTERED 
(
	[ProductId] ASC,
	[EntitlementTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EntitlementTemplateProducts]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_entitlementtemplate_products]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entitlementtemplate_products] ON [dbo].[EntitlementTemplateProducts]
(
	[EntitlementTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementTemplateProducts] ADD  CONSTRAINT [DF_EntitlementTemplateProducts_EntitlementTemplateProductId]  DEFAULT (newid()) FOR [EntitlementTemplateProductId]
GO
ALTER TABLE [dbo].[EntitlementTemplateProducts]  WITH CHECK ADD  CONSTRAINT [entitlementtemplate_entitlementtemplateproducts] FOREIGN KEY([EntitlementTemplateId])
REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId])
GO
ALTER TABLE [dbo].[EntitlementTemplateProducts] CHECK CONSTRAINT [entitlementtemplate_entitlementtemplateproducts]
GO
ALTER TABLE [dbo].[EntitlementTemplateProducts]  WITH CHECK ADD  CONSTRAINT [product_entitlementtemplateproducts] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[EntitlementTemplateProducts] CHECK CONSTRAINT [product_entitlementtemplateproducts]
GO
