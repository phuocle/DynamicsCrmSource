USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SubscriptionSyncInfo]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubscriptionSyncInfo](
	[EndTime] [datetime] NULL,
	[SubscriptionSyncInfoId] [int] IDENTITY(1,1) NOT NULL,
	[DeleteObjectCount] [int] NULL,
	[SubscriptionId] [uniqueidentifier] NULL,
	[SyncResult] [bit] NULL,
	[StartTime] [datetime] NULL,
	[DataSize] [int] NULL,
	[InsertObjectCount] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ClientVersion] [nvarchar](20) NULL,
 CONSTRAINT [cndx_PrimaryKey_SubscriptionSyncInfo] PRIMARY KEY CLUSTERED 
(
	[SubscriptionSyncInfoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_subscription_lookup]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_subscription_lookup] ON [dbo].[SubscriptionSyncInfo]
(
	[SubscriptionId] ASC
)
WHERE ([SubscriptionId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_syncinfo_cleanup]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_syncinfo_cleanup] ON [dbo].[SubscriptionSyncInfo]
(
	[StartTime] ASC
)
WHERE ([StartTime] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionSyncInfo]  WITH CHECK ADD  CONSTRAINT [subscription_subscriptionsyncinfo] FOREIGN KEY([SubscriptionId])
REFERENCES [dbo].[Subscription] ([SubscriptionId])
GO
ALTER TABLE [dbo].[SubscriptionSyncInfo] CHECK CONSTRAINT [subscription_subscriptionsyncinfo]
GO
