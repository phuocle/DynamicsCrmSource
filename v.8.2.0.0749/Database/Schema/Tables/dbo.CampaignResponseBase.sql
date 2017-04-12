CREATE TABLE [dbo].[CampaignResponseBase]
(
[ActivityId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignResponseBase] ADD CONSTRAINT [PK_CampaignResponseBase] PRIMARY KEY CLUSTERED  ([ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignResponseBase] WITH NOCHECK ADD CONSTRAINT [FK_CampaignResponseBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION
GO
