CREATE TABLE [dbo].[LeadCompetitors] (
    [LeadCompetitorId]          UNIQUEIDENTIFIER CONSTRAINT [DF_LeadCompetitors_LeadCompetitorId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [CompetitorId]              UNIQUEIDENTIFIER NOT NULL,
    [LeadId]                    UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_LeadCompetitors] PRIMARY KEY CLUSTERED ([LeadCompetitorId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [competitor_leads] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId]),
    CONSTRAINT [lead_competitors] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]),
    CONSTRAINT [UQ_LeadCompetitors] UNIQUE NONCLUSTERED ([LeadId] ASC, [CompetitorId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[LeadCompetitors] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[LeadCompetitors]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_competitor_leads]
    ON [dbo].[LeadCompetitors]([CompetitorId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

