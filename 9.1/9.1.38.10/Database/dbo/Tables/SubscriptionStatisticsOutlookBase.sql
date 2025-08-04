CREATE TABLE [dbo].[SubscriptionStatisticsOutlookBase] (
    [ObjectTypeCode]   INT              NOT NULL,
    [FullSyncRequired] BIT              CONSTRAINT [DF_SubscriptionStatisticsOutlookBase_FullSyncRequired] DEFAULT ((1)) NOT NULL,
    [SubscriptionId]   UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SubscriptionStatisticsOutlookBase] PRIMARY KEY CLUSTERED ([SubscriptionId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SubscriptionStatisticsOutlookBase] SET (LOCK_ESCALATION = DISABLE);

