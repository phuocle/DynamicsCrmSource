CREATE TABLE [dbo].[SubscriptionSyncEntryOutlookBase] (
    [ObjectTypeCode] INT              NOT NULL,
    [ObjectId]       UNIQUEIDENTIFIER NOT NULL,
    [SubscriptionId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]  BIGINT           NOT NULL,
    [SyncState]      TINYINT          NOT NULL,
    CONSTRAINT [PK_SubscriptionSyncEntryOutlookBase] PRIMARY KEY CLUSTERED ([SubscriptionId] ASC, [ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionIdObjectTypeCode]
    ON [dbo].[SubscriptionSyncEntryOutlookBase]([SubscriptionId] ASC, [ObjectTypeCode] ASC)
    INCLUDE([ObjectId]) WITH (FILLFACTOR = 80);

