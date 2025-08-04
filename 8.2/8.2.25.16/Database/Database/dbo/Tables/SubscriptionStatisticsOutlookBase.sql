CREATE TABLE [dbo].[SubscriptionStatisticsOutlookBase] (
    [FullSyncRequired] BIT              CONSTRAINT [DF_SubscriptionStatisticsOutlookBase_FullSyncRequired] DEFAULT ((1)) NOT NULL,
    [ObjectTypeCode]   INT              NOT NULL,
    [SubscriptionId]   UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SubscriptionStatisticsOutlookBase] PRIMARY KEY CLUSTERED ([SubscriptionId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80)
);

