CREATE TABLE [dbo].[KnowledgeArticleViewsBase]
(
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[statecode] [int] NOT NULL,
[ImportSequenceNumber] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ViewDate] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[statuscode] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[KnowledgeArticleId] [uniqueidentifier] NULL,
[KnowledgeArticleView] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[KnowledgeArticleViewsId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[Location] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticleViewsBase] ADD CONSTRAINT [cndx_PrimaryKey_KnowledgeArticleViews] PRIMARY KEY NONCLUSTERED  ([KnowledgeArticleViewsId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews_createdon] ON [dbo].[KnowledgeArticleViewsBase] ([CreatedOn]) WHERE ([CreatedOn] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndxloc_KnowledgeArticleViews] ON [dbo].[KnowledgeArticleViewsBase] ([KnowledgeArticleId], [ViewDate], [Location]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews] ON [dbo].[KnowledgeArticleViewsBase] ([KnowledgeArticleViewsId]) INCLUDE ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews_modifiedon] ON [dbo].[KnowledgeArticleViewsBase] ([ModifiedOn]) WHERE ([ModifiedOn] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KnowledgeArticleViewsBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews_ViewDate] ON [dbo].[KnowledgeArticleViewsBase] ([ViewDate]) WHERE ([ViewDate] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticleViewsBase] ADD CONSTRAINT [knowledgearticle_views] FOREIGN KEY ([KnowledgeArticleId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleViewsBase] ADD CONSTRAINT [transactioncurrency_knowledgearticleviews] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
