CREATE TABLE [dbo].[CampaignActivityItemBase]
(
[ItemId] [uniqueidentifier] NOT NULL,
[ItemObjectTypeCode] [int] NOT NULL,
[CampaignActivityItemId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[CampaignActivityId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignActivityItemBase] ADD CONSTRAINT [cndx_PrimaryKey_CampaignActivityItem] PRIMARY KEY CLUSTERED  ([CampaignActivityItemId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_ActivityPointer_CampaignActivityItems] ON [dbo].[CampaignActivityItemBase] ([CampaignActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_List_CampaignActivityItem] ON [dbo].[CampaignActivityItemBase] ([ItemId], [ItemObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CampaignActivityItemBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignActivityItemBase] ADD CONSTRAINT [items_campaignactivity] FOREIGN KEY ([CampaignActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
