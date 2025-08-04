CREATE TABLE [dbo].[OpportunityCompetitors] (
    [OpportunityId]           UNIQUEIDENTIFIER NOT NULL,
    [CompetitorId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [OpportunityCompetitorId] UNIQUEIDENTIFIER CONSTRAINT [DF_OpportunityCompetitors_OpportunityCompetitorId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_OpportunityCompetitors] PRIMARY KEY CLUSTERED ([OpportunityCompetitorId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [competitor_opportunities] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId]) NOT FOR REPLICATION,
    CONSTRAINT [opportunity_competitors] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_OpportunityCompetitors] UNIQUE NONCLUSTERED ([OpportunityId] ASC, [CompetitorId] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OpportunityCompetitors]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_competitor_opportunities]
    ON [dbo].[OpportunityCompetitors]([CompetitorId] ASC) WITH (FILLFACTOR = 80);

