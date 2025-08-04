CREATE TABLE [dbo].[KbArticleTemplateBase] (
    [KbArticleTemplateId]       UNIQUEIDENTIFIER NOT NULL,
    [StructureXml]              NVARCHAR (MAX)   NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [FormatXml]                 NVARCHAR (MAX)   NULL,
    [Title]                     NVARCHAR (500)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [IsActive]                  BIT              CONSTRAINT [Set_To_Zero115] DEFAULT ((0)) NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [LanguageCode]              INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_KbArticleTemplateBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_KbArticleTemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ComponentState]            INT              CONSTRAINT [DF_KbArticleTemplateBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [KbArticleTemplateIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_KbArticleTemplateBase_KbArticleTemplateIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_KbArticleTemplateBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_KbArticleTemplateBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_KbArticleTemplate] PRIMARY KEY CLUSTERED ([KbArticleTemplateId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_KbArticleTemplateBase_KbArticleTemplateIdUnique] UNIQUE NONCLUSTERED ([KbArticleTemplateIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[KbArticleTemplateBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KbArticleTemplateBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

