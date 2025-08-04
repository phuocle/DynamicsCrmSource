CREATE TABLE [dbo].[CampaignItemBase] (
    [CampaignItemId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [CampaignId]                UNIQUEIDENTIFIER NOT NULL,
    [EntityId]                  UNIQUEIDENTIFIER NOT NULL,
    [EntityType]                INT              NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_CampaignItem] PRIMARY KEY CLUSTERED ([CampaignItemId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [Campaign_RelatedEntities] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId]),
    CONSTRAINT [AK1_CampaignItemBase] UNIQUE NONCLUSTERED ([CampaignId] ASC, [EntityId] ASC, [EntityType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[CampaignItemBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CampaignItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_SalesLiterature_CampaignItem]
    ON [dbo].[CampaignItemBase]([EntityId] ASC, [EntityType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

