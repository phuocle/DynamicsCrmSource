CREATE TABLE [dbo].[SubscriptionSyncEntryOfflineBase] (
    [ObjectId]       UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode] INT              NOT NULL,
    [SyncState]      TINYINT          NOT NULL,
    [SubscriptionId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]  BIGINT           NOT NULL,
    CONSTRAINT [PK_SubscriptionSyncEntryOfflineBase] PRIMARY KEY CLUSTERED ([SubscriptionId] ASC, [ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SubscriptionSyncEntryOfflineBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionIdObjectTypeCode]
    ON [dbo].[SubscriptionSyncEntryOfflineBase]([SubscriptionId] ASC, [ObjectTypeCode] ASC)
    INCLUDE([ObjectId], [SyncState]) WITH (FILLFACTOR = 100);

