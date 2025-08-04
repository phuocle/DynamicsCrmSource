CREATE TABLE [dbo].[KbArticleBase]
(
[KbArticleId] [uniqueidentifier] NOT NULL,
[KbArticleTemplateId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[SubjectId] [uniqueidentifier] NOT NULL,
[ArticleXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Title] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[Number] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[Content] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Comments] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[StateCode] [int] NOT NULL,
[StatusCode] [int] NULL,
[VersionNumber] [timestamp] NULL,
[KeyWords] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[LanguageCode] [int] NULL,
[EntityImageId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[KbArticleBase] ADD CONSTRAINT [cndx_PrimaryKey_KbArticle] PRIMARY KEY CLUSTERED  ([KbArticleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_kb_article_template_kb_articles] ON [dbo].[KbArticleBase] ([KbArticleTemplateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KbArticleBase] ADD CONSTRAINT [AK1_KbArticleBase] UNIQUE NONCLUSTERED  ([Number]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[KbArticleBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_subject_kb_articles] ON [dbo].[KbArticleBase] ([SubjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KbArticleBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KbArticleBase] ADD CONSTRAINT [kb_article_template_kb_articles] FOREIGN KEY ([KbArticleTemplateId]) REFERENCES [dbo].[KbArticleTemplateBaseIds] ([KbArticleTemplateId])
GO
ALTER TABLE [dbo].[KbArticleBase] ADD CONSTRAINT [subject_kb_articles] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
ALTER TABLE [dbo].[KbArticleBase] ADD CONSTRAINT [TransactionCurrency_KbArticle] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
