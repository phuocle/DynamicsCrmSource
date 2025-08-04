CREATE TABLE [dbo].[KnowledgeArticlesCategories] (
    [KnowledgeArticleCategoryId] UNIQUEIDENTIFIER CONSTRAINT [DF_KnowledgeArticlesCategories_KnowledgeArticleCategoryId] DEFAULT (newid()) NOT NULL,
    [KnowledgeArticleId]         UNIQUEIDENTIFIER NOT NULL,
    [CategoryId]                 UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]              ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_KnowledgeArticleCategories] PRIMARY KEY CLUSTERED ([KnowledgeArticleCategoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [category_knowledgearticle] FOREIGN KEY ([CategoryId]) REFERENCES [dbo].[CategoryBase] ([CategoryId]),
    CONSTRAINT [knowledgearticle_category] FOREIGN KEY ([KnowledgeArticleId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId]),
    CONSTRAINT [UQ_KnowledgeArticleCategory] UNIQUE NONCLUSTERED ([KnowledgeArticleId] ASC, [CategoryId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[KnowledgeArticlesCategories] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KnowledgeArticlesCategories]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

