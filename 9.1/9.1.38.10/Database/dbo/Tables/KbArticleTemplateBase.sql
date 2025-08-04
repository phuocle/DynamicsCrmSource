CREATE TABLE [dbo].[KbArticleTemplateBase] (
    [LanguageCode]              INT              NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_KbArticleTemplateBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_KbArticleTemplateBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [Title]                     NVARCHAR (500)   NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_KbArticleTemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [StructureXml]              NVARCHAR (MAX)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [IsActive]                  BIT              CONSTRAINT [DF_KbArticleTemplateBase_IsActive] DEFAULT ((0)) NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [KbArticleTemplateId]       UNIQUEIDENTIFIER NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [KbArticleTemplateIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_KbArticleTemplateBase_KbArticleTemplateIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ComponentState]            INT              CONSTRAINT [DF_KbArticleTemplateBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [FormatXml]                 NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_KbArticleTemplateBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_KbArticleTemplate] PRIMARY KEY CLUSTERED ([KbArticleTemplateId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_KbArticleTemplateBase_KbArticleTemplateIdUnique] UNIQUE NONCLUSTERED ([KbArticleTemplateIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[KbArticleTemplateBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[KbArticleTemplateBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KbArticleTemplateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[KbArticleTemplateBase]([KbArticleTemplateId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_1D2C015C384A4AEE899367879E354DD6]
    ON [dbo].[KbArticleTemplateBase]([Title] ASC, [KbArticleTemplateId] ASC)
    INCLUDE([IsActive], [LanguageCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_1D2C015C384A4AEE899367879E354DD6]
    ON [dbo].[KbArticleTemplateBase]([KbArticleTemplateId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[KbArticleTemplateBase]([Title] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_1D2C015C384A4AEE899367879E354DD6]
    ON [dbo].[KbArticleTemplateBase]([KbArticleTemplateId] ASC)
    INCLUDE([Title], [IsActive], [LanguageCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

