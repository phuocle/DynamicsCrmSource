CREATE TABLE [dbo].[SubscriptionStatisticsOfflineBase] (
    [SubscriptionId]   UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode]   INT              NOT NULL,
    [FullSyncRequired] BIT              CONSTRAINT [DF_SubscriptionStatisticsOfflineBase_FullSyncRequired] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_SubscriptionStatisticsOfflineBase] PRIMARY KEY CLUSTERED ([SubscriptionId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80)
);

