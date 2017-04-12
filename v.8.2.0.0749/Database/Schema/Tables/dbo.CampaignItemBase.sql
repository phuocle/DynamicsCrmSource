CREATE TABLE [dbo].[CampaignItemBase]
(
[EntityType] [int] NOT NULL,
[EntityId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[CampaignItemId] [uniqueidentifier] NOT NULL,
[CampaignId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignItemBase] ADD CONSTRAINT [cndx_PrimaryKey_CampaignItem] PRIMARY KEY CLUSTERED  ([CampaignItemId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignItemBase] ADD CONSTRAINT [AK1_CampaignItemBase] UNIQUE NONCLUSTERED  ([CampaignId], [EntityId], [EntityType]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_SalesLiterature_CampaignItem] ON [dbo].[CampaignItemBase] ([EntityId], [EntityType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CampaignItemBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignItemBase] ADD CONSTRAINT [Campaign_RelatedEntities] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId])
GO
