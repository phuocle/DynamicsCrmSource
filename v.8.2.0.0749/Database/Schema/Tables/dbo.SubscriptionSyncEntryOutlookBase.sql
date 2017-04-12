CREATE TABLE [dbo].[SubscriptionSyncEntryOutlookBase]
(
[ObjectTypeCode] [int] NOT NULL,
[ObjectId] [uniqueidentifier] NOT NULL,
[SubscriptionId] [uniqueidentifier] NOT NULL,
[VersionNumber] [bigint] NOT NULL,
[SyncState] [tinyint] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionSyncEntryOutlookBase] ADD CONSTRAINT [PK_SubscriptionSyncEntryOutlookBase] PRIMARY KEY CLUSTERED  ([SubscriptionId], [ObjectId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionIdObjectTypeCode] ON [dbo].[SubscriptionSyncEntryOutlookBase] ([SubscriptionId], [ObjectTypeCode]) INCLUDE ([ObjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
