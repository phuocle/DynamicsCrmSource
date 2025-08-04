CREATE TABLE [dbo].[IncidentKnowledgeBaseRecord]
(
[KnowledgeBaseRecordId] [uniqueidentifier] NOT NULL,
[IncidentId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[IncidentKnowledgeBaseRecordId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_IncidentKnowledgeBaseRecord_IncidentKnowledgeBaseRecordId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[IncidentKnowledgeBaseRecord] ADD CONSTRAINT [cndx_PrimaryKey_IncidentKnowledgeBaseRecord] PRIMARY KEY CLUSTERED  ([IncidentKnowledgeBaseRecordId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_incident_knowledgebaserecord] ON [dbo].[IncidentKnowledgeBaseRecord] ([IncidentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[IncidentKnowledgeBaseRecord] ADD CONSTRAINT [UQ_IncidentKnowledgeBaseRecord] UNIQUE NONCLUSTERED  ([KnowledgeBaseRecordId], [IncidentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[IncidentKnowledgeBaseRecord] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[IncidentKnowledgeBaseRecord] ADD CONSTRAINT [incident_incidentknowledgebaserecord] FOREIGN KEY ([IncidentId]) REFERENCES [dbo].[IncidentBase] ([IncidentId])
GO
ALTER TABLE [dbo].[IncidentKnowledgeBaseRecord] ADD CONSTRAINT [knowledgebaserecord_incidentknowledgebaserecord] FOREIGN KEY ([KnowledgeBaseRecordId]) REFERENCES [dbo].[KnowledgeBaseRecordBase] ([KnowledgeBaseRecordId])
GO
