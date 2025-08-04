CREATE TABLE [dbo].[KnowledgeArticleBase] (
    [LanguageLocaleId]            UNIQUEIDENTIFIER NULL,
    [ExpirationStatusId]          INT              NULL,
    [ArticlePublicNumber]         NVARCHAR (127)   NOT NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [Description]                 NVARCHAR (MAX)   NULL,
    [Content]                     NVARCHAR (MAX)   NULL,
    [UpdateContent]               BIT              NULL,
    [MinorVersionNumber]          INT              CONSTRAINT [DF_KnowledgeArticleBase_MinorVersionNumber] DEFAULT ((0)) NOT NULL,
    [IsPrimary]                   BIT              CONSTRAINT [DF_KnowledgeArticleBase_IsPrimary] DEFAULT ((1)) NULL,
    [ParentArticleContentId]      UNIQUEIDENTIFIER NULL,
    [stageid]                     UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [RootArticleId]               UNIQUEIDENTIFIER NULL,
    [StatusCode]                  INT              NULL,
    [StateCode]                   INT              NOT NULL,
    [PublishStatusId]             INT              NULL,
    [SetProductAssociations]      BIT              NULL,
    [knowledgearticleId]          UNIQUEIDENTIFIER NOT NULL,
    [Title]                       NVARCHAR (4000)  NULL,
    [traversedpath]               NVARCHAR (1250)  NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [ExpirationDate]              DATETIME         NULL,
    [PublishOn]                   DATETIME         NULL,
    [KnowledgeArticleViews]       INT              CONSTRAINT [DF_KnowledgeArticleBase_KnowledgeArticleViews] DEFAULT ((0)) NULL,
    [ImportSequenceNumber]        INT              NULL,
    [ExpiredReviewOptions]        INT              NULL,
    [TransactionCurrencyId]       UNIQUEIDENTIFIER NULL,
    [CreatedOn]                   DATETIME         NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [processid]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ExpirationStateId]           INT              NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [IsRootArticle]               BIT              CONSTRAINT [DF_KnowledgeArticleBase_IsRootArticle] DEFAULT ((0)) NOT NULL,
    [Review]                      INT              NULL,
    [OwnerId]                     UNIQUEIDENTIFIER NOT NULL,
    [ExchangeRate]                DECIMAL (23, 10) NULL,
    [MajorVersionNumber]          INT              CONSTRAINT [DF_KnowledgeArticleBase_MajorVersionNumber] DEFAULT ((1)) NOT NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [PreviousArticleContentId]    UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [IsLatestVersion]             BIT              CONSTRAINT [DF_KnowledgeArticleBase_IsLatestVersion] DEFAULT ((0)) NOT NULL,
    [Keywords]                    NVARCHAR (MAX)   NULL,
    [ScheduledStatusId]           INT              NULL,
    [SubjectId]                   UNIQUEIDENTIFIER NULL,
    [primaryauthorid]             UNIQUEIDENTIFIER NULL,
    [ReadyForReview]              BIT              NULL,
    [OwningBusinessUnit]          UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                 INT              CONSTRAINT [DF_KnowledgeArticleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [KnowledgeArticleViews_State] INT              NULL,
    [KnowledgeArticleViews_Date]  DATETIME         NULL,
    [SetCategoryAssociations]     BIT              NULL,
    [IsInternal]                  BIT              CONSTRAINT [DF_KnowledgeArticleBase_IsInternal] DEFAULT ((0)) NULL,
    [Rating]                      DECIMAL (23, 10) NULL,
    [Rating_Sum]                  DECIMAL (23, 10) NULL,
    [Rating_State]                INT              NULL,
    [Rating_Count]                INT              NULL,
    [Rating_Date]                 DATETIME         NULL,
    CONSTRAINT [PK_knowledgearticleBase] PRIMARY KEY CLUSTERED ([knowledgearticleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_knowledgearticle] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [knowledgearticle_languagelocaleid] FOREIGN KEY ([LanguageLocaleId]) REFERENCES [dbo].[LanguageLocale] ([LanguageLocaleId]),
    CONSTRAINT [knowledgearticle_parentarticle_contentid] FOREIGN KEY ([ParentArticleContentId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId]),
    CONSTRAINT [knowledgearticle_previousarticle_contentid] FOREIGN KEY ([PreviousArticleContentId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId]),
    CONSTRAINT [knowledgearticle_primaryauthorid] FOREIGN KEY ([primaryauthorid]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [knowledgearticle_rootarticle_id] FOREIGN KEY ([RootArticleId]) REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId]),
    CONSTRAINT [owner_knowledgearticle] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [subject_knowledgearticles] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId]),
    CONSTRAINT [TransactionCurrency_knowledgearticle] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [ndx_KnowledgeArticleBase] UNIQUE NONCLUSTERED ([ArticlePublicNumber] ASC, [MajorVersionNumber] ASC, [MinorVersionNumber] ASC, [LanguageLocaleId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[KnowledgeArticleBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KnowledgeArticleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[KnowledgeArticleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_knowledgearticles]
    ON [dbo].[KnowledgeArticleBase]([SubjectId] ASC) WHERE ([SubjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticle_PublishOn]
    ON [dbo].[KnowledgeArticleBase]([PublishOn] ASC) WHERE ([PublishOn] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticle_expirationdate]
    ON [dbo].[KnowledgeArticleBase]([ExpirationDate] ASC) WHERE ([ExpirationDate] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticle_modifiedon]
    ON [dbo].[KnowledgeArticleBase]([ModifiedOn] ASC) WHERE ([ModifiedOn] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_previousarticlecontentid]
    ON [dbo].[KnowledgeArticleBase]([PreviousArticleContentId] ASC) WHERE ([PreviousArticleContentId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[KnowledgeArticleBase]([ArticlePublicNumber] ASC, [StateCode] ASC, [StatusCode] ASC, [LanguageLocaleId] ASC)
    INCLUDE([OwnerId], [IsRootArticle], [IsPrimary], [IsLatestVersion], [MajorVersionNumber], [MinorVersionNumber], [ParentArticleContentId], [RootArticleId], [Description]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_knowledgearticle_rootarticle]
    ON [dbo].[KnowledgeArticleBase]([RootArticleId] ASC) WHERE ([RootArticleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_owningbusinessunit]
    ON [dbo].[KnowledgeArticleBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ArticleNumber]
    ON [dbo].[KnowledgeArticleBase]([ArticlePublicNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[KnowledgeArticleBase]([Title] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_parentarticlecontentid]
    ON [dbo].[KnowledgeArticleBase]([ParentArticleContentId] ASC) WHERE ([ParentArticleContentId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_primaryauthorid]
    ON [dbo].[KnowledgeArticleBase]([primaryauthorid] ASC) WHERE ([primaryauthorid] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_bacebbde18e243a7b3fb4bbdf2b2c0e5]
    ON [dbo].[KnowledgeArticleBase]([KnowledgeArticleViews] ASC) WITH (FILLFACTOR = 80);

