CREATE TABLE [dbo].[OpportunityCompetitors]
(
[OpportunityId] [uniqueidentifier] NOT NULL,
[CompetitorId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[OpportunityCompetitorId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_OpportunityCompetitors_OpportunityCompetitorId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OpportunityCompetitors] ADD CONSTRAINT [cndx_PrimaryKey_OpportunityCompetitors] PRIMARY KEY CLUSTERED  ([OpportunityCompetitorId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_competitor_opportunities] ON [dbo].[OpportunityCompetitors] ([CompetitorId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OpportunityCompetitors] ADD CONSTRAINT [UQ_OpportunityCompetitors] UNIQUE NONCLUSTERED  ([OpportunityId], [CompetitorId]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OpportunityCompetitors] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OpportunityCompetitors] ADD CONSTRAINT [competitor_opportunities] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
ALTER TABLE [dbo].[OpportunityCompetitors] ADD CONSTRAINT [opportunity_competitors] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
