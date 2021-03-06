USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SubscriptionClients]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubscriptionClients](
	[ClientId] [uniqueidentifier] NOT NULL,
	[MachineName] [nvarchar](200) NULL,
	[SubscriptionId] [uniqueidentifier] NOT NULL,
	[IsPrimaryClient] [bit] NULL,
	[SubscriptionClientId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_SubscriptionClients] PRIMARY KEY CLUSTERED 
(
	[SubscriptionClientId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UQ_SubscriptionClients]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SubscriptionClients] ADD  CONSTRAINT [UQ_SubscriptionClients] UNIQUE NONCLUSTERED 
(
	[SubscriptionId] ASC,
	[MachineName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Cover]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Cover] ON [dbo].[SubscriptionClients]
(
	[SubscriptionId] ASC,
	[ClientId] ASC,
	[IsPrimaryClient] ASC,
	[MachineName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionClients]  WITH CHECK ADD  CONSTRAINT [subscriptionclients_subscription] FOREIGN KEY([SubscriptionId])
REFERENCES [dbo].[Subscription] ([SubscriptionId])
GO
ALTER TABLE [dbo].[SubscriptionClients] CHECK CONSTRAINT [subscriptionclients_subscription]
GO
