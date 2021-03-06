USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ContactOrders]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContactOrders](
	[SalesOrderId] [uniqueidentifier] NOT NULL,
	[ContactId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[ContactOrderId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_ContactOrders] PRIMARY KEY CLUSTERED 
(
	[ContactOrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_ContactOrders]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ContactOrders] ADD  CONSTRAINT [UQ_ContactOrders] UNIQUE NONCLUSTERED 
(
	[ContactId] ASC,
	[SalesOrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContactOrders]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_order_contacts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_order_contacts] ON [dbo].[ContactOrders]
(
	[SalesOrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactOrders] ADD  CONSTRAINT [DF_ContactOrders_ContactOrderId]  DEFAULT (newid()) FOR [ContactOrderId]
GO
ALTER TABLE [dbo].[ContactOrders]  WITH CHECK ADD  CONSTRAINT [contact_orders] FOREIGN KEY([ContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ContactOrders] CHECK CONSTRAINT [contact_orders]
GO
ALTER TABLE [dbo].[ContactOrders]  WITH CHECK ADD  CONSTRAINT [order_contacts] FOREIGN KEY([SalesOrderId])
REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId])
GO
ALTER TABLE [dbo].[ContactOrders] CHECK CONSTRAINT [order_contacts]
GO
