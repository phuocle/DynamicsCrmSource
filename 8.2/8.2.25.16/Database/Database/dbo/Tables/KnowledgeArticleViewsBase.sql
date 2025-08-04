CREATE TABLE [dbo].[KnowledgeArticleViewsBase] (
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ViewDate]                  DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [statuscode]                INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [KnowledgeArticleId]        UNIQUEIDENTIFIER NULL,
    [KnowledgeArticleView]      INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [KnowledgeArticleViewsId]   UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [Location]                  INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_KnowledgeArticleViews] PRIMARY KEY NONCLUSTERED ([KnowledgeArticleViewsId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [knowledgearticle_views] FOREIGN KEY ([KnowledgeArticleId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId]),
    CONSTRAINT [transactioncurrency_knowledgearticleviews] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews]
    ON [dbo].[KnowledgeArticleViewsBase]([KnowledgeArticleViewsId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KnowledgeArticleViewsBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndxloc_KnowledgeArticleViews]
    ON [dbo].[KnowledgeArticleViewsBase]([KnowledgeArticleId] ASC, [ViewDate] ASC, [Location] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews_ViewDate]
    ON [dbo].[KnowledgeArticleViewsBase]([ViewDate] ASC) WHERE ([ViewDate] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews_createdon]
    ON [dbo].[KnowledgeArticleViewsBase]([CreatedOn] ASC) WHERE ([CreatedOn] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews_modifiedon]
    ON [dbo].[KnowledgeArticleViewsBase]([ModifiedOn] ASC) WHERE ([ModifiedOn] IS NOT NULL) WITH (FILLFACTOR = 80);

