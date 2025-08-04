CREATE TABLE [dbo].[CampaignResponseBase] (
    [ActivityId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_CampaignResponseBase] PRIMARY KEY CLUSTERED ([ActivityId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [FK_CampaignResponseBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
);


GO
ALTER TABLE [dbo].[CampaignResponseBase] SET (LOCK_ESCALATION = DISABLE);

