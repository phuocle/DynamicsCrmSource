CREATE TABLE [dbo].[LeadCompetitors]
(
[LeadId] [uniqueidentifier] NOT NULL,
[CompetitorId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[LeadCompetitorId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_LeadCompetitors_LeadCompetitorId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadCompetitors] ADD CONSTRAINT [cndx_PrimaryKey_LeadCompetitors] PRIMARY KEY CLUSTERED  ([LeadCompetitorId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_competitor_leads] ON [dbo].[LeadCompetitors] ([CompetitorId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadCompetitors] ADD CONSTRAINT [UQ_LeadCompetitors] UNIQUE NONCLUSTERED  ([LeadId], [CompetitorId]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[LeadCompetitors] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadCompetitors] ADD CONSTRAINT [competitor_leads] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
ALTER TABLE [dbo].[LeadCompetitors] ADD CONSTRAINT [lead_competitors] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId])
GO
