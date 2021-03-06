USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[IncidentKnowledgeBaseRecord]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IncidentKnowledgeBaseRecord](
	[KnowledgeBaseRecordId] [uniqueidentifier] NOT NULL,
	[IncidentId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[IncidentKnowledgeBaseRecordId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_IncidentKnowledgeBaseRecord] PRIMARY KEY CLUSTERED 
(
	[IncidentKnowledgeBaseRecordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_IncidentKnowledgeBaseRecord]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[IncidentKnowledgeBaseRecord] ADD  CONSTRAINT [UQ_IncidentKnowledgeBaseRecord] UNIQUE NONCLUSTERED 
(
	[KnowledgeBaseRecordId] ASC,
	[IncidentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[IncidentKnowledgeBaseRecord]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_incident_knowledgebaserecord]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_incident_knowledgebaserecord] ON [dbo].[IncidentKnowledgeBaseRecord]
(
	[IncidentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[IncidentKnowledgeBaseRecord] ADD  CONSTRAINT [DF_IncidentKnowledgeBaseRecord_IncidentKnowledgeBaseRecordId]  DEFAULT (newid()) FOR [IncidentKnowledgeBaseRecordId]
GO
ALTER TABLE [dbo].[IncidentKnowledgeBaseRecord]  WITH CHECK ADD  CONSTRAINT [incident_incidentknowledgebaserecord] FOREIGN KEY([IncidentId])
REFERENCES [dbo].[IncidentBase] ([IncidentId])
GO
ALTER TABLE [dbo].[IncidentKnowledgeBaseRecord] CHECK CONSTRAINT [incident_incidentknowledgebaserecord]
GO
ALTER TABLE [dbo].[IncidentKnowledgeBaseRecord]  WITH CHECK ADD  CONSTRAINT [knowledgebaserecord_incidentknowledgebaserecord] FOREIGN KEY([KnowledgeBaseRecordId])
REFERENCES [dbo].[KnowledgeBaseRecordBase] ([KnowledgeBaseRecordId])
GO
ALTER TABLE [dbo].[IncidentKnowledgeBaseRecord] CHECK CONSTRAINT [knowledgebaserecord_incidentknowledgebaserecord]
GO
