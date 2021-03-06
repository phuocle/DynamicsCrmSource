USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[KnowledgeArticleViewsBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KnowledgeArticleViewsBase](
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[statecode] [int] NOT NULL,
	[ImportSequenceNumber] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
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
/****** Object:  Index [cndx_PrimaryKey_KnowledgeArticleViews]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[KnowledgeArticleViewsBase] ADD  CONSTRAINT [cndx_PrimaryKey_KnowledgeArticleViews] PRIMARY KEY NONCLUSTERED 
(
	[KnowledgeArticleViewsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KnowledgeArticleViewsBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_KnowledgeArticleViews]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleViews] ON [dbo].[KnowledgeArticleViewsBase]
(
	[KnowledgeArticleViewsId] ASC
)
INCLUDE ( 	[VersionNumber]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndxloc_KnowledgeArticleViews]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndxloc_KnowledgeArticleViews] ON [dbo].[KnowledgeArticleViewsBase]
(
	[KnowledgeArticleId] ASC,
	[ViewDate] ASC,
	[Location] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticleViewsBase]  WITH CHECK ADD  CONSTRAINT [knowledgearticle_views] FOREIGN KEY([KnowledgeArticleId])
REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleViewsBase] CHECK CONSTRAINT [knowledgearticle_views]
GO
ALTER TABLE [dbo].[KnowledgeArticleViewsBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_knowledgearticleviews] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[KnowledgeArticleViewsBase] CHECK CONSTRAINT [transactioncurrency_knowledgearticleviews]
GO
