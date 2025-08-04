CREATE TABLE [dbo].[KnowledgeArticleIncidentBase] (
    [KnowledgeArticleIncidentId] UNIQUEIDENTIFIER CONSTRAINT [DF_KnowledgeArticleIncidentBase_KnowledgeArticleIncidentId] DEFAULT (newid()) NOT NULL,
    [CreatedOn]                  DATETIME         NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [ImportSequenceNumber]       INT              NULL,
    [OverriddenCreatedOn]        DATETIME         NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [IncidentId]                 UNIQUEIDENTIFIER NULL,
    [KnowledgeArticleId]         UNIQUEIDENTIFIER NULL,
    [KnowledgeUsage]             INT              NULL,
    [IsSentToCustomer]           BIT              NULL,
    [statecode]                  INT              NOT NULL,
    [statuscode]                 INT              NULL,
    [TransactionCurrencyId]      UNIQUEIDENTIFIER NULL,
    [ExchangeRate]               DECIMAL (23, 10) NULL,
    CONSTRAINT [cndx_PrimaryKey_KnowledgeArticleIncident] PRIMARY KEY NONCLUSTERED ([KnowledgeArticleIncidentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [incident_knowledgearticles] FOREIGN KEY ([KnowledgeArticleId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId]),
    CONSTRAINT [knowledgearticle_incidents] FOREIGN KEY ([IncidentId]) REFERENCES [dbo].[IncidentBase] ([IncidentId]),
    CONSTRAINT [transactioncurrency_knowledgearticleincident] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [cndx_for_cascaderelationship_incident_knowledgearticles]
    ON [dbo].[KnowledgeArticleIncidentBase]([KnowledgeArticleId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KnowledgeArticleIncidentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleIncident_createdon]
    ON [dbo].[KnowledgeArticleIncidentBase]([CreatedOn] ASC) WHERE ([CreatedOn] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleIncident]
    ON [dbo].[KnowledgeArticleIncidentBase]([KnowledgeArticleIncidentId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleIncident_modifiedon]
    ON [dbo].[KnowledgeArticleIncidentBase]([ModifiedOn] ASC) WHERE ([ModifiedOn] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_knowledgearticle_incidents]
    ON [dbo].[KnowledgeArticleIncidentBase]([IncidentId] ASC) WHERE ([IncidentId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_B7C4636998574CB79EF7FB8A3B2947C4]
    ON [dbo].[KnowledgeArticleIncidentBase]([KnowledgeArticleIncidentId] ASC)
    INCLUDE([IncidentId], [KnowledgeArticleId], [KnowledgeUsage], [IsSentToCustomer], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

