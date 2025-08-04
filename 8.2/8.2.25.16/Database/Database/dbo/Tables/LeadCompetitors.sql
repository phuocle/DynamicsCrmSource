CREATE TABLE [dbo].[LeadCompetitors] (
    [LeadId]           UNIQUEIDENTIFIER NOT NULL,
    [CompetitorId]     UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]    ROWVERSION       NULL,
    [LeadCompetitorId] UNIQUEIDENTIFIER CONSTRAINT [DF_LeadCompetitors_LeadCompetitorId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_LeadCompetitors] PRIMARY KEY CLUSTERED ([LeadCompetitorId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [competitor_leads] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId]),
    CONSTRAINT [lead_competitors] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]),
    CONSTRAINT [UQ_LeadCompetitors] UNIQUE NONCLUSTERED ([LeadId] ASC, [CompetitorId] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[LeadCompetitors]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_competitor_leads]
    ON [dbo].[LeadCompetitors]([CompetitorId] ASC) WITH (FILLFACTOR = 80);

