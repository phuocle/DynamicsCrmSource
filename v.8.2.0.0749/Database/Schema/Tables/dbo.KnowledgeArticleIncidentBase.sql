CREATE TABLE [dbo].[KnowledgeArticleIncidentBase]
(
[KnowledgeArticleIncidentId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_KnowledgeArticleIncidentBase_KnowledgeArticleIncidentId] DEFAULT (newid()),
[TimeZoneRuleVersionNumber] [int] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[statecode] [int] NOT NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[IncidentId] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[statuscode] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[IsSentToCustomer] [bit] NULL,
[KnowledgeArticleId] [uniqueidentifier] NULL,
[KnowledgeUsage] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase] ADD CONSTRAINT [cndx_PrimaryKey_KnowledgeArticleIncident] PRIMARY KEY NONCLUSTERED  ([KnowledgeArticleIncidentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleIncident_createdon] ON [dbo].[KnowledgeArticleIncidentBase] ([CreatedOn]) WHERE ([CreatedOn] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_knowledgearticle_incidents] ON [dbo].[KnowledgeArticleIncidentBase] ([IncidentId]) WHERE ([IncidentId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE CLUSTERED INDEX [cndx_for_cascaderelationship_incident_knowledgearticles] ON [dbo].[KnowledgeArticleIncidentBase] ([KnowledgeArticleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleIncident] ON [dbo].[KnowledgeArticleIncidentBase] ([KnowledgeArticleIncidentId]) INCLUDE ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleIncident_modifiedon] ON [dbo].[KnowledgeArticleIncidentBase] ([ModifiedOn]) WHERE ([ModifiedOn] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KnowledgeArticleIncidentBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase] ADD CONSTRAINT [incident_knowledgearticles] FOREIGN KEY ([KnowledgeArticleId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase] ADD CONSTRAINT [knowledgearticle_incidents] FOREIGN KEY ([IncidentId]) REFERENCES [dbo].[IncidentBase] ([IncidentId])
GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase] ADD CONSTRAINT [transactioncurrency_knowledgearticleincident] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
