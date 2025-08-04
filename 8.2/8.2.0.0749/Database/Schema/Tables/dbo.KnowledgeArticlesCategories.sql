CREATE TABLE [dbo].[KnowledgeArticlesCategories]
(
[VersionNumber] [timestamp] NULL,
[KnowledgeArticleId] [uniqueidentifier] NOT NULL,
[KnowledgeArticleCategoryId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_KnowledgeArticlesCategories_KnowledgeArticleCategoryId] DEFAULT (newid()),
[CategoryId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticlesCategories] ADD CONSTRAINT [cndx_PrimaryKey_KnowledgeArticleCategories] PRIMARY KEY CLUSTERED  ([KnowledgeArticleCategoryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticlesCategories] ADD CONSTRAINT [UQ_KnowledgeArticleCategory] UNIQUE NONCLUSTERED  ([KnowledgeArticleId], [CategoryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KnowledgeArticlesCategories] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticlesCategories] ADD CONSTRAINT [category_knowledgearticle] FOREIGN KEY ([CategoryId]) REFERENCES [dbo].[CategoryBase] ([CategoryId])
GO
ALTER TABLE [dbo].[KnowledgeArticlesCategories] ADD CONSTRAINT [knowledgearticle_category] FOREIGN KEY ([KnowledgeArticleId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
