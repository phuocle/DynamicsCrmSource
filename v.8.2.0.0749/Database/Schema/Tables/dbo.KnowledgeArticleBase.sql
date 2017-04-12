CREATE TABLE [dbo].[KnowledgeArticleBase]
(
[LanguageLocaleId] [uniqueidentifier] NULL,
[ExpirationStatusId] [int] NULL,
[ArticlePublicNumber] [nvarchar] (127) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Content] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[UpdateContent] [bit] NULL,
[MinorVersionNumber] [int] NOT NULL CONSTRAINT [DF_KnowledgeArticleBase_MinorVersionNumber] DEFAULT ((0)),
[IsPrimary] [bit] NULL CONSTRAINT [DF_KnowledgeArticleBase_IsPrimary] DEFAULT ((1)),
[ParentArticleContentId] [uniqueidentifier] NULL,
[stageid] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[RootArticleId] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[StateCode] [int] NOT NULL,
[PublishStatusId] [int] NULL,
[SetProductAssociations] [bit] NULL,
[knowledgearticleId] [uniqueidentifier] NOT NULL,
[Title] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[traversedpath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ExpirationDate] [datetime] NULL,
[PublishOn] [datetime] NULL,
[KnowledgeArticleViews] [int] NULL CONSTRAINT [DF_KnowledgeArticleBase_KnowledgeArticleViews] DEFAULT ((0)),
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
[IsRootArticle] [bit] NOT NULL CONSTRAINT [DF_KnowledgeArticleBase_IsRootArticle] DEFAULT ((0)),
[Review] [int] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[MajorVersionNumber] [int] NOT NULL CONSTRAINT [DF_KnowledgeArticleBase_MajorVersionNumber] DEFAULT ((1)),
[TimeZoneRuleVersionNumber] [int] NULL,
[PreviousArticleContentId] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[IsLatestVersion] [bit] NOT NULL CONSTRAINT [DF_KnowledgeArticleBase_IsLatestVersion] DEFAULT ((0)),
[Keywords] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ScheduledStatusId] [int] NULL,
[SubjectId] [uniqueidentifier] NULL,
[primaryauthorid] [uniqueidentifier] NULL,
[ReadyForReview] [bit] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_KnowledgeArticleBase_OwnerIdType] DEFAULT ((8)),
[KnowledgeArticleViews_State] [int] NULL,
[KnowledgeArticleViews_Date] [datetime] NULL,
[SetCategoryAssociations] [bit] NULL,
[IsInternal] [bit] NULL CONSTRAINT [DF_KnowledgeArticleBase_IsInternal] DEFAULT ((0)),
[Rating] [decimal] (23, 10) NULL,
[Rating_Sum] [decimal] (23, 10) NULL,
[Rating_State] [int] NULL,
[Rating_Count] [int] NULL,
[Rating_Date] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD CONSTRAINT [PK_knowledgearticleBase] PRIMARY KEY CLUSTERED  ([knowledgearticleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ArticleNumber] ON [dbo].[KnowledgeArticleBase] ([ArticlePublicNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD CONSTRAINT [ndx_KnowledgeArticleBase] UNIQUE NONCLUSTERED  ([ArticlePublicNumber], [MajorVersionNumber], [MinorVersionNumber], [LanguageLocaleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Cover] ON [dbo].[KnowledgeArticleBase] ([ArticlePublicNumber], [StateCode], [StatusCode], [LanguageLocaleId]) INCLUDE ([Description], [IsLatestVersion], [IsPrimary], [IsRootArticle], [MajorVersionNumber], [MinorVersionNumber], [OwnerId], [ParentArticleContentId], [RootArticleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticle_expirationdate] ON [dbo].[KnowledgeArticleBase] ([ExpirationDate]) WHERE ([ExpirationDate] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_bacebbde18e243a7b3fb4bbdf2b2c0e5] ON [dbo].[KnowledgeArticleBase] ([KnowledgeArticleViews]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticle_modifiedon] ON [dbo].[KnowledgeArticleBase] ([ModifiedOn]) WHERE ([ModifiedOn] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[KnowledgeArticleBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_owningbusinessunit] ON [dbo].[KnowledgeArticleBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_parentarticlecontentid] ON [dbo].[KnowledgeArticleBase] ([ParentArticleContentId]) WHERE ([ParentArticleContentId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_previousarticlecontentid] ON [dbo].[KnowledgeArticleBase] ([PreviousArticleContentId]) WHERE ([PreviousArticleContentId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_primaryauthorid] ON [dbo].[KnowledgeArticleBase] ([primaryauthorid]) WHERE ([primaryauthorid] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticle_PublishOn] ON [dbo].[KnowledgeArticleBase] ([PublishOn]) WHERE ([PublishOn] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_knowledgearticle_rootarticle] ON [dbo].[KnowledgeArticleBase] ([RootArticleId]) WHERE ([RootArticleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[KnowledgeArticleBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_knowledgearticles] ON [dbo].[KnowledgeArticleBase] ([SubjectId]) WHERE ([SubjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[KnowledgeArticleBase] ([Title]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KnowledgeArticleBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD CONSTRAINT [business_unit_knowledgearticle] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD CONSTRAINT [knowledgearticle_languagelocaleid] FOREIGN KEY ([LanguageLocaleId]) REFERENCES [dbo].[LanguageLocale] ([LanguageLocaleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD CONSTRAINT [knowledgearticle_parentarticle_contentid] FOREIGN KEY ([ParentArticleContentId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD CONSTRAINT [knowledgearticle_previousarticle_contentid] FOREIGN KEY ([PreviousArticleContentId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD CONSTRAINT [knowledgearticle_primaryauthorid] FOREIGN KEY ([primaryauthorid]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD CONSTRAINT [knowledgearticle_rootarticle_id] FOREIGN KEY ([RootArticleId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD CONSTRAINT [owner_knowledgearticle] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD CONSTRAINT [subject_knowledgearticles] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
ALTER TABLE [dbo].[KnowledgeArticleBase] ADD CONSTRAINT [TransactionCurrency_knowledgearticle] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
