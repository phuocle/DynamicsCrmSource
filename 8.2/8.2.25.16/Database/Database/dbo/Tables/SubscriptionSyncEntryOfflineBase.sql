CREATE TABLE [dbo].[SubscriptionSyncEntryOfflineBase] (
    [SyncState]      TINYINT          NOT NULL,
    [SubscriptionId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]  BIGINT           NOT NULL,
    [ObjectTypeCode] INT              NOT NULL,
    [ObjectId]       UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SubscriptionSyncEntryOfflineBase] PRIMARY KEY CLUSTERED ([SubscriptionId] ASC, [ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionIdObjectTypeCode]
    ON [dbo].[SubscriptionSyncEntryOfflineBase]([SubscriptionId] ASC, [ObjectTypeCode] ASC)
    INCLUDE([ObjectId]) WITH (FILLFACTOR = 80);

