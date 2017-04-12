CREATE TABLE [dbo].[SubscriptionStatisticsOfflineBase]
(
[SubscriptionId] [uniqueidentifier] NOT NULL,
[ObjectTypeCode] [int] NOT NULL,
[FullSyncRequired] [bit] NOT NULL CONSTRAINT [DF_SubscriptionStatisticsOfflineBase_FullSyncRequired] DEFAULT ((1))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionStatisticsOfflineBase] ADD CONSTRAINT [PK_SubscriptionStatisticsOfflineBase] PRIMARY KEY CLUSTERED  ([SubscriptionId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
