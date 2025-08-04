CREATE TABLE [dbo].[BusinessUnitNewsArticleBase] (
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [BusinessUnitNewsArticleId] UNIQUEIDENTIFIER NOT NULL,
    [ActiveOn]                  DATETIME         NULL,
    [ActiveUntil]               DATETIME         NULL,
    [NewsArticle]               NVARCHAR (MAX)   NULL,
    [ArticleTypeCode]           INT              NULL,
    [ShowOnHomepage]            BIT              CONSTRAINT [Set_To_Zero101] DEFAULT ((0)) NULL,
    [ArticleTitle]              NVARCHAR (300)   NULL,
    [ArticleUrl]                NVARCHAR (200)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_BusinessUnitNewsArticle] PRIMARY KEY CLUSTERED ([BusinessUnitNewsArticleId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[BusinessUnitNewsArticleBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BusinessUnitNewsArticleBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ArticleTitle]
    ON [dbo].[BusinessUnitNewsArticleBase]([ArticleTitle] ASC) WITH (FILLFACTOR = 80);

