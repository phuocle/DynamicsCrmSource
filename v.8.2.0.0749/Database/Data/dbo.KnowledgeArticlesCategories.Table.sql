USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[KnowledgeArticlesCategories]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KnowledgeArticlesCategories](
	[VersionNumber] [timestamp] NULL,
	[KnowledgeArticleId] [uniqueidentifier] NOT NULL,
	[KnowledgeArticleCategoryId] [uniqueidentifier] NOT NULL,
	[CategoryId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_KnowledgeArticleCategories] PRIMARY KEY CLUSTERED 
(
	[KnowledgeArticleCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_KnowledgeArticleCategory]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[KnowledgeArticlesCategories] ADD  CONSTRAINT [UQ_KnowledgeArticleCategory] UNIQUE NONCLUSTERED 
(
	[KnowledgeArticleId] ASC,
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KnowledgeArticlesCategories]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticlesCategories] ADD  CONSTRAINT [DF_KnowledgeArticlesCategories_KnowledgeArticleCategoryId]  DEFAULT (newid()) FOR [KnowledgeArticleCategoryId]
GO
ALTER TABLE [dbo].[KnowledgeArticlesCategories]  WITH CHECK ADD  CONSTRAINT [category_knowledgearticle] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[CategoryBase] ([CategoryId])
GO
ALTER TABLE [dbo].[KnowledgeArticlesCategories] CHECK CONSTRAINT [category_knowledgearticle]
GO
ALTER TABLE [dbo].[KnowledgeArticlesCategories]  WITH CHECK ADD  CONSTRAINT [knowledgearticle_category] FOREIGN KEY([KnowledgeArticleId])
REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
ALTER TABLE [dbo].[KnowledgeArticlesCategories] CHECK CONSTRAINT [knowledgearticle_category]
GO
