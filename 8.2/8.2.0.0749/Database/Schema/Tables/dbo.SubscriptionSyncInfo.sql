CREATE TABLE [dbo].[SubscriptionSyncInfo]
(
[EndTime] [datetime] NULL,
[SubscriptionSyncInfoId] [int] NOT NULL IDENTITY(1, 1),
[DeleteObjectCount] [int] NULL,
[SubscriptionId] [uniqueidentifier] NULL,
[SyncResult] [bit] NULL,
[StartTime] [datetime] NULL,
[DataSize] [int] NULL,
[InsertObjectCount] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ClientVersion] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionSyncInfo] ADD CONSTRAINT [cndx_PrimaryKey_SubscriptionSyncInfo] PRIMARY KEY CLUSTERED  ([SubscriptionSyncInfoId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_syncinfo_cleanup] ON [dbo].[SubscriptionSyncInfo] ([StartTime]) WHERE ([StartTime] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_subscription_lookup] ON [dbo].[SubscriptionSyncInfo] ([SubscriptionId]) WHERE ([SubscriptionId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionSyncInfo] ADD CONSTRAINT [subscription_subscriptionsyncinfo] FOREIGN KEY ([SubscriptionId]) REFERENCES [dbo].[Subscription] ([SubscriptionId])
GO
