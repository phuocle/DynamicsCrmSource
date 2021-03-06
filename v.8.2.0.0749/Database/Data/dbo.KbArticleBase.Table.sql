USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[KbArticleBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KbArticleBase](
	[KbArticleId] [uniqueidentifier] NOT NULL,
	[KbArticleTemplateId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[SubjectId] [uniqueidentifier] NOT NULL,
	[ArticleXml] [nvarchar](max) NULL,
	[Title] [nvarchar](500) NULL,
	[Number] [nvarchar](100) NULL,
	[Content] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[Comments] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[StateCode] [int] NOT NULL,
	[StatusCode] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[KeyWords] [nvarchar](max) NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[LanguageCode] [int] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_KbArticle] PRIMARY KEY CLUSTERED 
(
	[KbArticleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [AK1_KbArticleBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[KbArticleBase] ADD  CONSTRAINT [AK1_KbArticleBase] UNIQUE NONCLUSTERED 
(
	[Number] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KbArticleBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[KbArticleBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_kb_article_template_kb_articles]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_kb_article_template_kb_articles] ON [dbo].[KbArticleBase]
(
	[KbArticleTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_subject_kb_articles]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_subject_kb_articles] ON [dbo].[KbArticleBase]
(
	[SubjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KbArticleBase]  WITH CHECK ADD  CONSTRAINT [kb_article_template_kb_articles] FOREIGN KEY([KbArticleTemplateId])
REFERENCES [dbo].[KbArticleTemplateBaseIds] ([KbArticleTemplateId])
GO
ALTER TABLE [dbo].[KbArticleBase] CHECK CONSTRAINT [kb_article_template_kb_articles]
GO
ALTER TABLE [dbo].[KbArticleBase]  WITH CHECK ADD  CONSTRAINT [subject_kb_articles] FOREIGN KEY([SubjectId])
REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
ALTER TABLE [dbo].[KbArticleBase] CHECK CONSTRAINT [subject_kb_articles]
GO
ALTER TABLE [dbo].[KbArticleBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_KbArticle] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[KbArticleBase] CHECK CONSTRAINT [TransactionCurrency_KbArticle]
GO
