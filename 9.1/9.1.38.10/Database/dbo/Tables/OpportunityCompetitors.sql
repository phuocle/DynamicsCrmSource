CREATE TABLE [dbo].[OpportunityCompetitors] (
    [OpportunityCompetitorId]   UNIQUEIDENTIFIER CONSTRAINT [DF_OpportunityCompetitors_OpportunityCompetitorId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [CompetitorId]              UNIQUEIDENTIFIER NOT NULL,
    [OpportunityId]             UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_OpportunityCompetitors] PRIMARY KEY CLUSTERED ([OpportunityCompetitorId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [competitor_opportunities] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId]),
    CONSTRAINT [opportunity_competitors] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]),
    CONSTRAINT [UQ_OpportunityCompetitors] UNIQUE NONCLUSTERED ([OpportunityId] ASC, [CompetitorId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[OpportunityCompetitors] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OpportunityCompetitors]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_competitor_opportunities]
    ON [dbo].[OpportunityCompetitors]([CompetitorId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

