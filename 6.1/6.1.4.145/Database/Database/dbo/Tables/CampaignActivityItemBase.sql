CREATE TABLE [dbo].[CampaignActivityItemBase] (
    [ItemId]                 UNIQUEIDENTIFIER NOT NULL,
    [ItemObjectTypeCode]     INT              NOT NULL,
    [CampaignActivityItemId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [CampaignActivityId]     UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_CampaignActivityItem] PRIMARY KEY CLUSTERED ([CampaignActivityItemId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [items_campaignactivity] FOREIGN KEY ([CampaignActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CampaignActivityItemBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_ActivityPointer_CampaignActivityItems]
    ON [dbo].[CampaignActivityItemBase]([CampaignActivityId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_List_CampaignActivityItem]
    ON [dbo].[CampaignActivityItemBase]([ItemId] ASC, [ItemObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

