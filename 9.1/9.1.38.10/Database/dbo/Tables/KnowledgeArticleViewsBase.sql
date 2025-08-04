CREATE TABLE [dbo].[KnowledgeArticleViewsBase] (
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [KnowledgeArticleViewsId]   UNIQUEIDENTIFIER NOT NULL,
    [KnowledgeArticleId]        UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ViewDate]                  DATETIME         NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [Location]                  INT              NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [KnowledgeArticleView]      INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_KnowledgeArticleViews] PRIMARY KEY NONCLUSTERED ([KnowledgeArticleViewsId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [knowledgearticle_views] FOREIGN KEY ([KnowledgeArticleId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId]),
    CONSTRAINT [transactioncurrency_knowledgearticleviews] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[KnowledgeArticleViewsBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KnowledgeArticleViewsBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews]
    ON [dbo].[KnowledgeArticleViewsBase]([KnowledgeArticleViewsId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews_modifiedon]
    ON [dbo].[KnowledgeArticleViewsBase]([ModifiedOn] ASC) WHERE ([ModifiedOn] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews_createdon]
    ON [dbo].[KnowledgeArticleViewsBase]([CreatedOn] ASC) WHERE ([CreatedOn] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews_ViewDate]
    ON [dbo].[KnowledgeArticleViewsBase]([ViewDate] ASC) WHERE ([ViewDate] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndxloc_KnowledgeArticleViews]
    ON [dbo].[KnowledgeArticleViewsBase]([KnowledgeArticleId] ASC, [ViewDate] ASC, [Location] ASC) WITH (FILLFACTOR = 80);

