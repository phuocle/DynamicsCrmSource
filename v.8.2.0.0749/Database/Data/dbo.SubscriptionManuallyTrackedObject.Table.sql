USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SubscriptionManuallyTrackedObject]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubscriptionManuallyTrackedObject](
	[SubscriptionManuallyTrackedObjectId] [uniqueidentifier] NOT NULL,
	[SubscriptionId] [uniqueidentifier] NOT NULL,
	[ObjectId] [uniqueidentifier] NOT NULL,
	[Track] [bit] NOT NULL,
	[ObjectTypeCode] [int] NULL,
	[VersionNumber] [timestamp] NULL
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_PrimaryKey_SubscriptionManuallyTrackedObject]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SubscriptionManuallyTrackedObject] ADD  CONSTRAINT [ndx_PrimaryKey_SubscriptionManuallyTrackedObject] PRIMARY KEY NONCLUSTERED 
(
	[SubscriptionManuallyTrackedObjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_contact_subscriptionmanuallytrackedobject]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_subscriptionmanuallytrackedobject] ON [dbo].[SubscriptionManuallyTrackedObject]
(
	[ObjectId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_SubscriptionManuallyTrackedObject]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_SubscriptionManuallyTrackedObject] ON [dbo].[SubscriptionManuallyTrackedObject]
(
	[SubscriptionId] ASC,
	[ObjectTypeCode] ASC,
	[ObjectId] ASC
)
INCLUDE ( 	[Track],
	[VersionNumber]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionManuallyTrackedObject] ADD  CONSTRAINT [DF_SubscriptionManuallyTrackedObject_SubscriptionManuallyTrackedObjectId]  DEFAULT (newid()) FOR [SubscriptionManuallyTrackedObjectId]
GO
ALTER TABLE [dbo].[SubscriptionManuallyTrackedObject] ADD  CONSTRAINT [DF_SubscriptionManuallyTrackedObject_Track]  DEFAULT ((0)) FOR [Track]
GO
ALTER TABLE [dbo].[SubscriptionManuallyTrackedObject]  WITH NOCHECK ADD  CONSTRAINT [subscription_subscriptionmanuallytrackedobject] FOREIGN KEY([SubscriptionId])
REFERENCES [dbo].[Subscription] ([SubscriptionId])
GO
ALTER TABLE [dbo].[SubscriptionManuallyTrackedObject] CHECK CONSTRAINT [subscription_subscriptionmanuallytrackedobject]
GO
