CREATE TABLE [dbo].[KnowledgeArticleIncidentBase] (
    [KnowledgeArticleIncidentId] UNIQUEIDENTIFIER CONSTRAINT [DF_KnowledgeArticleIncidentBase_KnowledgeArticleIncidentId] DEFAULT (newid()) NOT NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [CreatedOn]                  DATETIME         NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [ImportSequenceNumber]       INT              NULL,
    [OverriddenCreatedOn]        DATETIME         NULL,
    [ExchangeRate]               DECIMAL (23, 10) NULL,
    [statecode]                  INT              NOT NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [IncidentId]                 UNIQUEIDENTIFIER NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [statuscode]                 INT              NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]      UNIQUEIDENTIFIER NULL,
    [IsSentToCustomer]           BIT              NULL,
    [KnowledgeArticleId]         UNIQUEIDENTIFIER NULL,
    [KnowledgeUsage]             INT              NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_KnowledgeArticleIncident] PRIMARY KEY NONCLUSTERED ([KnowledgeArticleIncidentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [incident_knowledgearticles] FOREIGN KEY ([KnowledgeArticleId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId]),
    CONSTRAINT [knowledgearticle_incidents] FOREIGN KEY ([IncidentId]) REFERENCES [dbo].[IncidentBase] ([IncidentId]),
    CONSTRAINT [transactioncurrency_knowledgearticleincident] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE CLUSTERED INDEX [cndx_for_cascaderelationship_incident_knowledgearticles]
    ON [dbo].[KnowledgeArticleIncidentBase]([KnowledgeArticleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KnowledgeArticleIncidentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleIncident]
    ON [dbo].[KnowledgeArticleIncidentBase]([KnowledgeArticleIncidentId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_knowledgearticle_incidents]
    ON [dbo].[KnowledgeArticleIncidentBase]([IncidentId] ASC) WHERE ([IncidentId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleIncident_modifiedon]
    ON [dbo].[KnowledgeArticleIncidentBase]([ModifiedOn] ASC) WHERE ([ModifiedOn] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleIncident_createdon]
    ON [dbo].[KnowledgeArticleIncidentBase]([CreatedOn] ASC) WHERE ([CreatedOn] IS NOT NULL) WITH (FILLFACTOR = 80);

