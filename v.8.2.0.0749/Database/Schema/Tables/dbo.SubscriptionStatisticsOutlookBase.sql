CREATE TABLE [dbo].[SubscriptionStatisticsOutlookBase]
(
[FullSyncRequired] [bit] NOT NULL CONSTRAINT [DF_SubscriptionStatisticsOutlookBase_FullSyncRequired] DEFAULT ((1)),
[ObjectTypeCode] [int] NOT NULL,
[SubscriptionId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionStatisticsOutlookBase] ADD CONSTRAINT [PK_SubscriptionStatisticsOutlookBase] PRIMARY KEY CLUSTERED  ([SubscriptionId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
