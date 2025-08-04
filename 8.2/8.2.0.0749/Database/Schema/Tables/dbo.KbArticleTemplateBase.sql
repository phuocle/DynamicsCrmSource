CREATE TABLE [dbo].[KbArticleTemplateBase]
(
[KbArticleTemplateId] [uniqueidentifier] NOT NULL,
[StructureXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[FormatXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Title] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsActive] [bit] NULL CONSTRAINT [Set_To_Zero115] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[LanguageCode] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_KbArticleTemplateBase_IsCustomizable] DEFAULT ((1)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_KbArticleTemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_KbArticleTemplateBase_ComponentState] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[KbArticleTemplateIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_KbArticleTemplateBase_KbArticleTemplateIdUnique] DEFAULT (newid()),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_KbArticleTemplateBase_IsManaged] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_KbArticleTemplateBase_OverwriteTime] DEFAULT ((0)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[KbArticleTemplateBase] ADD CONSTRAINT [cndx_PrimaryKey_KbArticleTemplate] PRIMARY KEY CLUSTERED  ([KbArticleTemplateId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KbArticleTemplateBase] ADD CONSTRAINT [UQ_KbArticleTemplateBase_KbArticleTemplateIdUnique] UNIQUE NONCLUSTERED  ([KbArticleTemplateIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KbArticleTemplateBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
