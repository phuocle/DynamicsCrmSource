CREATE TABLE [dbo].[SubscriptionManuallyTrackedObject]
(
[SubscriptionManuallyTrackedObjectId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SubscriptionManuallyTrackedObject_SubscriptionManuallyTrackedObjectId] DEFAULT (newid()),
[SubscriptionId] [uniqueidentifier] NOT NULL,
[ObjectId] [uniqueidentifier] NOT NULL,
[Track] [bit] NOT NULL CONSTRAINT [DF_SubscriptionManuallyTrackedObject_Track] DEFAULT ((0)),
[ObjectTypeCode] [int] NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionManuallyTrackedObject] ADD CONSTRAINT [ndx_PrimaryKey_SubscriptionManuallyTrackedObject] PRIMARY KEY NONCLUSTERED  ([SubscriptionManuallyTrackedObjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_subscriptionmanuallytrackedobject] ON [dbo].[SubscriptionManuallyTrackedObject] ([ObjectId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionManuallyTrackedObject] ON [dbo].[SubscriptionManuallyTrackedObject] ([SubscriptionId], [ObjectTypeCode], [ObjectId]) INCLUDE ([Track], [VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionManuallyTrackedObject] WITH NOCHECK ADD CONSTRAINT [subscription_subscriptionmanuallytrackedobject] FOREIGN KEY ([SubscriptionId]) REFERENCES [dbo].[Subscription] ([SubscriptionId])
GO
