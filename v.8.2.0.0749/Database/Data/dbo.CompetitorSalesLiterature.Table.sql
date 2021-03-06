USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CompetitorSalesLiterature]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompetitorSalesLiterature](
	[CompetitorId] [uniqueidentifier] NOT NULL,
	[SalesLiteratureId] [uniqueidentifier] NOT NULL,
	[CompetitorSalesLiteratureId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_CompetitorSalesLiterature] PRIMARY KEY CLUSTERED 
(
	[CompetitorSalesLiteratureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_CompetitorSalesLiterature]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[CompetitorSalesLiterature] ADD  CONSTRAINT [UQ_CompetitorSalesLiterature] UNIQUE NONCLUSTERED 
(
	[CompetitorId] ASC,
	[SalesLiteratureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CompetitorSalesLiterature]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_sales_literature_competitors]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_competitors] ON [dbo].[CompetitorSalesLiterature]
(
	[SalesLiteratureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorSalesLiterature] ADD  CONSTRAINT [DF_CompetitorSalesLiterature_CompetitorSalesLiteratureId]  DEFAULT (newid()) FOR [CompetitorSalesLiteratureId]
GO
ALTER TABLE [dbo].[CompetitorSalesLiterature]  WITH CHECK ADD  CONSTRAINT [competitor_sales_literature] FOREIGN KEY([CompetitorId])
REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
ALTER TABLE [dbo].[CompetitorSalesLiterature] CHECK CONSTRAINT [competitor_sales_literature]
GO
ALTER TABLE [dbo].[CompetitorSalesLiterature]  WITH CHECK ADD  CONSTRAINT [sales_literature_competitors] FOREIGN KEY([SalesLiteratureId])
REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId])
GO
ALTER TABLE [dbo].[CompetitorSalesLiterature] CHECK CONSTRAINT [sales_literature_competitors]
GO
