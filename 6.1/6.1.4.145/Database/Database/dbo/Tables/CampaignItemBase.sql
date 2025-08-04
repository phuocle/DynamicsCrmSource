CREATE TABLE [dbo].[CampaignItemBase] (
    [EntityType]     INT              NOT NULL,
    [EntityId]       UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]  ROWVERSION       NULL,
    [CampaignItemId] UNIQUEIDENTIFIER NOT NULL,
    [CampaignId]     UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_CampaignItem] PRIMARY KEY CLUSTERED ([CampaignItemId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [Campaign_RelatedEntities] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId]) NOT FOR REPLICATION,
    CONSTRAINT [AK1_CampaignItemBase] UNIQUE NONCLUSTERED ([CampaignId] ASC, [EntityId] ASC, [EntityType] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CampaignItemBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_SalesLiterature_CampaignItem]
    ON [dbo].[CampaignItemBase]([EntityId] ASC, [EntityType] ASC) WITH (FILLFACTOR = 80);

