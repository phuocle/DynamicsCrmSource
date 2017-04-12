CREATE TABLE [dbo].[TemplateBase]
(
[TemplateId] [uniqueidentifier] NOT NULL,
[Subject] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[IsPersonal] [bit] NULL CONSTRAINT [Set_To_Zero149] DEFAULT ((0)),
[MimeType] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[TemplateTypeCode] [int] NOT NULL CONSTRAINT [DF_TemplateBase_TemplateTypeCode] DEFAULT ((8)),
[Body] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Title] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[PresentationXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[SubjectPresentationXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[GenerationTypeCode] [int] NULL CONSTRAINT [DF_TemplateBase_GenerationTypeCode] DEFAULT ((0)),
[LanguageCode] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_TemplateBase_ComponentState] DEFAULT ((0)),
[TemplateIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_TemplateBase_TemplateIdUnique] DEFAULT (newid()),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_TemplateBase_IsManaged] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_TemplateBase_IsCustomizable] DEFAULT ((1)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_TemplateBase_OverwriteTime] DEFAULT ((0)),
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TemplateBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_TemplateBase_OwnerIdType] DEFAULT ((8)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[IsRecommended] [bit] NULL CONSTRAINT [DF_TemplateBase_IsRecommended] DEFAULT ((0)),
[OpenCount] [int] NULL,
[ReplyRate] [int] NULL,
[ReplyCount] [int] NULL,
[UsedCount] [int] NULL,
[OpenRate] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[TemplateBase] ADD CONSTRAINT [cndx_PrimaryKey_Template] PRIMARY KEY CLUSTERED  ([TemplateId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[TemplateBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_templates] ON [dbo].[TemplateBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TemplateBase] ADD CONSTRAINT [UQ_TemplateBase_TemplateIdUnique] UNIQUE NONCLUSTERED  ([TemplateIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Title] ON [dbo].[TemplateBase] ([Title], [LanguageCode], [TemplateTypeCode], [IsPersonal]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TemplateBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
