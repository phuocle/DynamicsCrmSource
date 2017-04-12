CREATE TABLE [dbo].[SubscriptionSyncEntryOfflineBase]
(
[SyncState] [tinyint] NOT NULL,
[SubscriptionId] [uniqueidentifier] NOT NULL,
[VersionNumber] [bigint] NOT NULL,
[ObjectTypeCode] [int] NOT NULL,
[ObjectId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionSyncEntryOfflineBase] ADD CONSTRAINT [PK_SubscriptionSyncEntryOfflineBase] PRIMARY KEY CLUSTERED  ([SubscriptionId], [ObjectId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionIdObjectTypeCode] ON [dbo].[SubscriptionSyncEntryOfflineBase] ([SubscriptionId], [ObjectTypeCode]) INCLUDE ([ObjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
