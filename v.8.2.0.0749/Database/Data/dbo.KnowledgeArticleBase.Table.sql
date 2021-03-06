USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[KnowledgeArticleBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KnowledgeArticleBase](
	[LanguageLocaleId] [uniqueidentifier] NULL,
	[ExpirationStatusId] [int] NULL,
	[ArticlePublicNumber] [nvarchar](127) NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[Content] [nvarchar](max) NULL,
	[UpdateContent] [bit] NULL,
	[MinorVersionNumber] [int] NOT NULL,
	[IsPrimary] [bit] NULL,
	[ParentArticleContentId] [uniqueidentifier] NULL,
	[stageid] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[RootArticleId] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[StateCode] [int] NOT NULL,
	[PublishStatusId] [int] NULL,
	[SetProductAssociations] [bit] NULL,
	[knowledgearticleId] [uniqueidentifier] NOT NULL,
	[Title] [nvarchar](4000) NULL,
	[traversedpath] [nvarchar](1250) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ExpirationDate] [datetime] NULL,
	[PublishOn] [datetime] NULL,
	[KnowledgeArticleViews] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ExpiredReviewOptions] [int] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[processid] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ExpirationStateId] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[IsRootArticle] [bit] NOT NULL,
	[Review] [int] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[MajorVersionNumber] [int] NOT NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[PreviousArticleContentId] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[IsLatestVersion] [bit] NOT NULL,
	[Keywords] [nvarchar](max) NULL,
	[ScheduledStatusId] [int] NULL,
	[SubjectId] [uniqueidentifier] NULL,
	[primaryauthorid] [uniqueidentifier] NULL,
	[ReadyForReview] [bit] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
	[KnowledgeArticleViews_State] [int] NULL,
	[KnowledgeArticleViews_Date] [datetime] NULL,
	[SetCategoryAssociations] [bit] NULL,
	[IsInternal] [bit] NULL,
	[Rating] [decimal](23, 10) NULL,
	[Rating_Sum] [decimal](23, 10) NULL,
	[Rating_State] [int] NULL,
	[Rating_Count] [int] NULL,
	[Rating_Date] [datetime] NULL,
 CONSTRAINT [PK_knowledgearticleBase] PRIMARY KEY CLUSTERED 
(
	[knowledgearticleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_KnowledgeArticleBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD  CONSTRAINT [ndx_KnowledgeArticleBase] UNIQUE NONCLUSTERED 
(
	[ArticlePublicNumber] ASC,
	[MajorVersionNumber] ASC,
	[MinorVersionNumber] ASC,
	[LanguageLocaleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_subject_knowledgearticles]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_knowledgearticles] ON [dbo].[KnowledgeArticleBase]
(
	[SubjectId] ASC
)
WHERE ([SubjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KnowledgeArticleBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[KnowledgeArticleBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[KnowledgeArticleBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD  CONSTRAINT [DF_KnowledgeArticleBase_MinorVersionNumber]  DEFAULT ((0)) FOR [MinorVersionNumber]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD  CONSTRAINT [DF_KnowledgeArticleBase_IsPrimary]  DEFAULT ((1)) FOR [IsPrimary]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD  CONSTRAINT [DF_KnowledgeArticleBase_KnowledgeArticleViews]  DEFAULT ((0)) FOR [KnowledgeArticleViews]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD  CONSTRAINT [DF_KnowledgeArticleBase_IsRootArticle]  DEFAULT ((0)) FOR [IsRootArticle]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD  CONSTRAINT [DF_KnowledgeArticleBase_MajorVersionNumber]  DEFAULT ((1)) FOR [MajorVersionNumber]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD  CONSTRAINT [DF_KnowledgeArticleBase_IsLatestVersion]  DEFAULT ((0)) FOR [IsLatestVersion]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD  CONSTRAINT [DF_KnowledgeArticleBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD  CONSTRAINT [DF_KnowledgeArticleBase_IsInternal]  DEFAULT ((0)) FOR [IsInternal]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase]  WITH CHECK ADD  CONSTRAINT [business_unit_knowledgearticle] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] CHECK CONSTRAINT [business_unit_knowledgearticle]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase]  WITH CHECK ADD  CONSTRAINT [knowledgearticle_languagelocaleid] FOREIGN KEY([LanguageLocaleId])
REFERENCES [dbo].[LanguageLocale] ([LanguageLocaleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] CHECK CONSTRAINT [knowledgearticle_languagelocaleid]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase]  WITH CHECK ADD  CONSTRAINT [knowledgearticle_parentarticle_contentid] FOREIGN KEY([ParentArticleContentId])
REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] CHECK CONSTRAINT [knowledgearticle_parentarticle_contentid]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase]  WITH CHECK ADD  CONSTRAINT [knowledgearticle_previousarticle_contentid] FOREIGN KEY([PreviousArticleContentId])
REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] CHECK CONSTRAINT [knowledgearticle_previousarticle_contentid]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase]  WITH CHECK ADD  CONSTRAINT [knowledgearticle_primaryauthorid] FOREIGN KEY([primaryauthorid])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] CHECK CONSTRAINT [knowledgearticle_primaryauthorid]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase]  WITH CHECK ADD  CONSTRAINT [knowledgearticle_rootarticle_id] FOREIGN KEY([RootArticleId])
REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] CHECK CONSTRAINT [knowledgearticle_rootarticle_id]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase]  WITH CHECK ADD  CONSTRAINT [owner_knowledgearticle] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] CHECK CONSTRAINT [owner_knowledgearticle]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase]  WITH CHECK ADD  CONSTRAINT [subject_knowledgearticles] FOREIGN KEY([SubjectId])
REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] CHECK CONSTRAINT [subject_knowledgearticles]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_knowledgearticle] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] CHECK CONSTRAINT [TransactionCurrency_knowledgearticle]
GO
