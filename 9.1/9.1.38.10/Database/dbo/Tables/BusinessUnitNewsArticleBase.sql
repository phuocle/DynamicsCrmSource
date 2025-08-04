CREATE TABLE [dbo].[BusinessUnitNewsArticleBase] (
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [NewsArticle]               NVARCHAR (MAX)   NULL,
    [ActiveUntil]               DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ArticleUrl]                NVARCHAR (200)   NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ArticleTitle]              NVARCHAR (300)   NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ShowOnHomepage]            BIT              CONSTRAINT [DF_BusinessUnitNewsArticleBase_ShowOnHomepage] DEFAULT ((0)) NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ActiveOn]                  DATETIME         NULL,
    [ArticleTypeCode]           INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [BusinessUnitNewsArticleId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_BusinessUnitNewsArticle] PRIMARY KEY CLUSTERED ([BusinessUnitNewsArticleId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[BusinessUnitNewsArticleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[BusinessUnitNewsArticleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BusinessUnitNewsArticleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ArticleTitle]
    ON [dbo].[BusinessUnitNewsArticleBase]([ArticleTitle] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D2CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[BusinessUnitNewsArticleBase]([BusinessUnitNewsArticleId] ASC)
    INCLUDE([ArticleTitle]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D2CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[BusinessUnitNewsArticleBase]([BusinessUnitNewsArticleId] ASC)
    INCLUDE([ArticleTitle], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D2CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[BusinessUnitNewsArticleBase]([ArticleTitle] ASC, [BusinessUnitNewsArticleId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

