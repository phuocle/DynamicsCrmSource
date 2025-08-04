CREATE TABLE [dbo].[KnowledgeArticleBase] (
    [IsPrimary]                   BIT              CONSTRAINT [DF_KnowledgeArticleBase_IsPrimary] DEFAULT ((1)) NULL,
    [traversedpath]               NVARCHAR (1250)  NULL,
    [OwnerId]                     UNIQUEIDENTIFIER NOT NULL,
    [StateCode]                   INT              NOT NULL,
    [processid]                   UNIQUEIDENTIFIER NULL,
    [ExpiredReviewOptions]        INT              NULL,
    [PublishOn]                   DATETIME         NULL,
    [primaryauthorid]             UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]        INT              NULL,
    [ReadyForReview]              BIT              NULL,
    [ExpirationDate]              DATETIME         NULL,
    [Review]                      INT              NULL,
    [TransactionCurrencyId]       UNIQUEIDENTIFIER NULL,
    [MajorVersionNumber]          INT              CONSTRAINT [DF_KnowledgeArticleBase_MajorVersionNumber] DEFAULT ((1)) NOT NULL,
    [OwningBusinessUnit]          UNIQUEIDENTIFIER NULL,
    [MinorVersionNumber]          INT              CONSTRAINT [DF_KnowledgeArticleBase_MinorVersionNumber] DEFAULT ((0)) NOT NULL,
    [IsLatestVersion]             BIT              CONSTRAINT [DF_KnowledgeArticleBase_IsLatestVersion] DEFAULT ((0)) NOT NULL,
    [Title]                       NVARCHAR (4000)  NULL,
    [SubjectId]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [Description]                 NVARCHAR (MAX)   NULL,
    [knowledgearticleId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [StatusCode]                  INT              NULL,
    [ArticlePublicNumber]         NVARCHAR (127)   NOT NULL,
    [UpdateContent]               BIT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [ExpirationStatusId]          INT              NULL,
    [ParentArticleContentId]      UNIQUEIDENTIFIER NULL,
    [ScheduledStatusId]           INT              NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [PublishStatusId]             INT              NULL,
    [ExpirationStateId]           INT              NULL,
    [Rating]                      DECIMAL (23, 10) NULL,
    [KnowledgeArticleViews]       INT              CONSTRAINT [DF_KnowledgeArticleBase_KnowledgeArticleViews] DEFAULT ((0)) NULL,
    [ExchangeRate]                DECIMAL (23, 10) NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [LanguageLocaleId]            UNIQUEIDENTIFIER NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [Keywords]                    NVARCHAR (MAX)   NULL,
    [stageid]                     UNIQUEIDENTIFIER NULL,
    [PreviousArticleContentId]    UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [RootArticleId]               UNIQUEIDENTIFIER NULL,
    [SetCategoryAssociations]     BIT              NULL,
    [IsInternal]                  BIT              CONSTRAINT [DF_KnowledgeArticleBase_IsInternal] DEFAULT ((0)) NULL,
    [Content]                     NVARCHAR (MAX)   NULL,
    [CreatedOn]                   DATETIME         NULL,
    [IsRootArticle]               BIT              CONSTRAINT [DF_KnowledgeArticleBase_IsRootArticle] DEFAULT ((0)) NOT NULL,
    [OwnerIdType]                 INT              CONSTRAINT [DF_KnowledgeArticleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [KnowledgeArticleViews_Date]  DATETIME         NULL,
    [Rating_State]                INT              NULL,
    [Rating_Date]                 DATETIME         NULL,
    [Rating_Count]                INT              NULL,
    [KnowledgeArticleViews_State] INT              NULL,
    [Rating_Sum]                  DECIMAL (23, 10) NULL,
    [SetProductAssociations]      BIT              NULL,
    [Keywords_QF_prefix]          AS               (CONVERT([nvarchar](850),substring([Keywords],(1),(850)))),
    [Content_QF_prefix]           AS               (CONVERT([nvarchar](850),substring([Content],(1),(850)))),
    [Description_QF_prefix]       AS               (CONVERT([nvarchar](850),substring([Description],(1),(850)))),
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
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[KnowledgeArticleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[KnowledgeArticleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[KnowledgeArticleBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticle_modifiedon]
    ON [dbo].[KnowledgeArticleBase]([ModifiedOn] ASC) WHERE ([ModifiedOn] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KnowledgeArticleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticle_PublishOn]
    ON [dbo].[KnowledgeArticleBase]([PublishOn] ASC) WHERE ([PublishOn] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticle_expirationdate]
    ON [dbo].[KnowledgeArticleBase]([ExpirationDate] ASC) WHERE ([ExpirationDate] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[KnowledgeArticleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ArticleNumber]
    ON [dbo].[KnowledgeArticleBase]([ArticlePublicNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_parentarticlecontentid]
    ON [dbo].[KnowledgeArticleBase]([ParentArticleContentId] ASC) WHERE ([ParentArticleContentId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_knowledgearticles]
    ON [dbo].[KnowledgeArticleBase]([SubjectId] ASC) WHERE ([SubjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_previousarticlecontentid]
    ON [dbo].[KnowledgeArticleBase]([PreviousArticleContentId] ASC) WHERE ([PreviousArticleContentId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_knowledgearticle_rootarticle]
    ON [dbo].[KnowledgeArticleBase]([RootArticleId] ASC) WHERE ([RootArticleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_primaryauthorid]
    ON [dbo].[KnowledgeArticleBase]([primaryauthorid] ASC) WHERE ([primaryauthorid] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_owningbusinessunit]
    ON [dbo].[KnowledgeArticleBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[KnowledgeArticleBase]([ArticlePublicNumber] ASC, [StateCode] ASC, [StatusCode] ASC, [LanguageLocaleId] ASC)
    INCLUDE([OwnerId], [IsRootArticle], [IsPrimary], [IsLatestVersion], [MajorVersionNumber], [MinorVersionNumber], [ParentArticleContentId], [RootArticleId], [Description]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticle_Title]
    ON [dbo].[KnowledgeArticleBase]([Title] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_41c8b73e9cb64a999323532be502f234]
    ON [dbo].[KnowledgeArticleBase]([Rating] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_bacebbde18e243a7b3fb4bbdf2b2c0e5]
    ON [dbo].[KnowledgeArticleBase]([KnowledgeArticleViews] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_2D48CD9A92894373B6153BD5CDACFA8A]
    ON [dbo].[KnowledgeArticleBase]([knowledgearticleId] ASC)
    INCLUDE([ArticlePublicNumber], [CreatedOn], [MajorVersionNumber], [MinorVersionNumber], [Content], [ModifiedOn], [Description], [IsLatestVersion], [Keywords], [KnowledgeArticleViews], [LanguageLocaleId], [Title], [IsPrimary], [StatusCode], [StateCode], [Rating], [IsRootArticle], [IsInternal], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_2D48CD9A92894373B6153BD5CDACFA8A]
    ON [dbo].[KnowledgeArticleBase]([ArticlePublicNumber] ASC, [knowledgearticleId] ASC)
    INCLUDE([CreatedOn], [MajorVersionNumber], [MinorVersionNumber], [Content], [ModifiedOn], [Description], [IsLatestVersion], [Keywords], [KnowledgeArticleViews], [LanguageLocaleId], [Title], [IsPrimary], [StatusCode], [StateCode], [Rating], [IsRootArticle], [IsInternal], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_2D48CD9A92894373B6153BD5CDACFA8A]
    ON [dbo].[KnowledgeArticleBase]([knowledgearticleId] ASC)
    INCLUDE([Content], [Description], [Keywords], [Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_knowledgearticle_languagelocaleid]
    ON [dbo].[KnowledgeArticleBase]([LanguageLocaleId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Keywords]
    ON [dbo].[KnowledgeArticleBase]([Keywords_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Content]
    ON [dbo].[KnowledgeArticleBase]([Content_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Description]
    ON [dbo].[KnowledgeArticleBase]([Description_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

