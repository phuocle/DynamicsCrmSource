CREATE TABLE [dbo].[CampaignActivityBase]
(
[ActivityId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignActivityBase] ADD CONSTRAINT [PK_CampaignActivityBase] PRIMARY KEY CLUSTERED  ([ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignActivityBase] WITH NOCHECK ADD CONSTRAINT [FK_CampaignActivityBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION
GO
