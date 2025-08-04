CREATE TABLE [dbo].[IncidentKnowledgeBaseRecord] (
    [IncidentKnowledgeBaseRecordId] UNIQUEIDENTIFIER CONSTRAINT [DF_IncidentKnowledgeBaseRecord_IncidentKnowledgeBaseRecordId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [ImportSequenceNumber]          INT              NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [TimeZoneRuleVersionNumber]     INT              NULL,
    [UTCConversionTimeZoneCode]     INT              NULL,
    [Name]                          NVARCHAR (100)   NULL,
    [IncidentId]                    UNIQUEIDENTIFIER NOT NULL,
    [KnowledgeBaseRecordId]         UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_IncidentKnowledgeBaseRecord] PRIMARY KEY CLUSTERED ([IncidentKnowledgeBaseRecordId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [incident_incidentknowledgebaserecord] FOREIGN KEY ([IncidentId]) REFERENCES [dbo].[IncidentBase] ([IncidentId]),
    CONSTRAINT [knowledgebaserecord_incidentknowledgebaserecord] FOREIGN KEY ([KnowledgeBaseRecordId]) REFERENCES [dbo].[KnowledgeBaseRecordBase] ([KnowledgeBaseRecordId]),
    CONSTRAINT [UQ_IncidentKnowledgeBaseRecord] UNIQUE NONCLUSTERED ([KnowledgeBaseRecordId] ASC, [IncidentId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[IncidentKnowledgeBaseRecord] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[IncidentKnowledgeBaseRecord]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_incident_knowledgebaserecord]
    ON [dbo].[IncidentKnowledgeBaseRecord]([IncidentId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

