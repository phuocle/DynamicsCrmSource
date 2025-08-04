CREATE TABLE [dbo].[SubscriptionSyncEntryOutlookBase] (
    [SyncState]      TINYINT          NOT NULL,
    [ObjectTypeCode] INT              NOT NULL,
    [VersionNumber]  BIGINT           NOT NULL,
    [SubscriptionId] UNIQUEIDENTIFIER NOT NULL,
    [ObjectId]       UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SubscriptionSyncEntryOutlookBase] PRIMARY KEY CLUSTERED ([SubscriptionId] ASC, [ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SubscriptionSyncEntryOutlookBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionIdObjectTypeCode]
    ON [dbo].[SubscriptionSyncEntryOutlookBase]([SubscriptionId] ASC, [ObjectTypeCode] ASC)
    INCLUDE([ObjectId], [SyncState]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionIdsyncstate]
    ON [dbo].[SubscriptionSyncEntryOutlookBase]([SubscriptionId] ASC, [SyncState] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

