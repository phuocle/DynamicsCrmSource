CREATE TABLE [dbo].[SubscriptionStatisticsOfflineBase] (
    [FullSyncRequired] BIT              CONSTRAINT [DF_SubscriptionStatisticsOfflineBase_FullSyncRequired] DEFAULT ((1)) NOT NULL,
    [SubscriptionId]   UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode]   INT              NOT NULL,
    CONSTRAINT [PK_SubscriptionStatisticsOfflineBase] PRIMARY KEY CLUSTERED ([SubscriptionId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SubscriptionStatisticsOfflineBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ObjectTypeCode]
    ON [dbo].[SubscriptionStatisticsOfflineBase]([ObjectTypeCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

