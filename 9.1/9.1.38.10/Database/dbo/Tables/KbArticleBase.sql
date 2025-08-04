CREATE TABLE [dbo].[KbArticleBase] (
    [KbArticleTemplateId]   UNIQUEIDENTIFIER NOT NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [StatusCode]            INT              NULL,
    [KbArticleId]           UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]            DATETIME         NULL,
    [SubjectId]             UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [Number]                NVARCHAR (100)   NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [Content]               NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [StateCode]             INT              NOT NULL,
    [Title]                 NVARCHAR (500)   NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [CreatedOn]             DATETIME         NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [ArticleXml]            NVARCHAR (MAX)   NULL,
    [EntityImageId]         UNIQUEIDENTIFIER NULL,
    [KeyWords]              NVARCHAR (MAX)   NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]  INT              NULL,
    [LanguageCode]          INT              NULL,
    [Comments]              NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_KbArticle] PRIMARY KEY CLUSTERED ([KbArticleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [kb_article_template_kb_articles] FOREIGN KEY ([KbArticleTemplateId]) REFERENCES [dbo].[KbArticleTemplateBaseIds] ([KbArticleTemplateId]),
    CONSTRAINT [subject_kb_articles] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId]),
    CONSTRAINT [TransactionCurrency_KbArticle] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [AK1_KbArticleBase] UNIQUE NONCLUSTERED ([Number] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[KbArticleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[KbArticleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KbArticleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[KbArticleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_kb_article_template_kb_articles]
    ON [dbo].[KbArticleBase]([KbArticleTemplateId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_subject_kb_articles]
    ON [dbo].[KbArticleBase]([SubjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_333FD51EAC444778A569B24AB285CF4B]
    ON [dbo].[KbArticleBase]([KbArticleId] ASC)
    INCLUDE([Title], [Number]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_333FD51EAC444778A569B24AB285CF4B]
    ON [dbo].[KbArticleBase]([KbArticleId] ASC)
    INCLUDE([Title], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[KbArticleBase]([Title] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_333FD51EAC444778A569B24AB285CF4B]
    ON [dbo].[KbArticleBase]([Title] ASC, [KbArticleId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

