CREATE TABLE [dbo].[CampaignActivityItemBase] (
    [CampaignActivityItemId]     UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [ImportSequenceNumber]       INT              NULL,
    [OverriddenCreatedOn]        DATETIME         NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [Name]                       NVARCHAR (100)   NULL,
    [CampaignActivityId]         UNIQUEIDENTIFIER NOT NULL,
    [ItemId]                     UNIQUEIDENTIFIER NOT NULL,
    [ItemObjectTypeCode]         INT              NOT NULL,
    [CampaignActivityIdType]     INT              NULL,
    [CampaignActivityIdName]     NVARCHAR (4000)  NULL,
    [CampaignActivityIdYomiName] NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_CampaignActivityItem] PRIMARY KEY CLUSTERED ([CampaignActivityItemId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [items_campaignactivity] FOREIGN KEY ([CampaignActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
);


GO
ALTER TABLE [dbo].[CampaignActivityItemBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CampaignActivityItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_ActivityPointer_CampaignActivityItems]
    ON [dbo].[CampaignActivityItemBase]([CampaignActivityId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_List_CampaignActivityItem]
    ON [dbo].[CampaignActivityItemBase]([ItemId] ASC, [ItemObjectTypeCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

