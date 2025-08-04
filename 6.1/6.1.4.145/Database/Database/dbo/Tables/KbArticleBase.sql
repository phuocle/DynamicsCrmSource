CREATE TABLE [dbo].[KbArticleBase] (
    [KbArticleId]           UNIQUEIDENTIFIER NOT NULL,
    [KbArticleTemplateId]   UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [SubjectId]             UNIQUEIDENTIFIER NOT NULL,
    [ArticleXml]            NVARCHAR (MAX)   NULL,
    [Title]                 NVARCHAR (500)   NULL,
    [Number]                NVARCHAR (100)   NULL,
    [Content]               NVARCHAR (MAX)   NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [Comments]              NVARCHAR (MAX)   NULL,
    [CreatedOn]             DATETIME         NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]            DATETIME         NULL,
    [StateCode]             INT              NOT NULL,
    [StatusCode]            INT              NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [KeyWords]              NVARCHAR (MAX)   NULL,
    [ImportSequenceNumber]  INT              NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [LanguageCode]          INT              NULL,
    [EntityImageId]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_KbArticle] PRIMARY KEY CLUSTERED ([KbArticleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [kb_article_template_kb_articles] FOREIGN KEY ([KbArticleTemplateId]) REFERENCES [dbo].[KbArticleTemplateBaseIds] ([KbArticleTemplateId]) NOT FOR REPLICATION,
    CONSTRAINT [subject_kb_articles] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_KbArticle] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [AK1_KbArticleBase] UNIQUE NONCLUSTERED ([Number] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[KbArticleBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KbArticleBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[KbArticleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_subject_kb_articles]
    ON [dbo].[KbArticleBase]([SubjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_kb_article_template_kb_articles]
    ON [dbo].[KbArticleBase]([KbArticleTemplateId] ASC) WITH (FILLFACTOR = 80);

