CREATE TABLE [dbo].[SystemFormBase]
(
[FormXmlManaged] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Version] [int] NULL,
[FormId] [uniqueidentifier] NOT NULL,
[PublishedOn] [datetime] NULL,
[FormXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[CanBeDeleted] [bit] NOT NULL CONSTRAINT [DF_SystemFormBase_CanBeDeleted] DEFAULT ((1)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_SystemFormBase_ComponentState] DEFAULT ((0)),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_SystemFormBase_IsCustomizable] DEFAULT ((1)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SystemFormBase_OverwriteTime] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SystemFormBase_IsManaged] DEFAULT ((0)),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[AncestorFormId] [uniqueidentifier] NULL,
[Type] [int] NULL CONSTRAINT [DF_SystemFormBase_Type] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SystemFormBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[VersionNumber] [timestamp] NULL,
[ObjectTypeCode] [int] NULL,
[FormIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SystemFormBase_FormIdUnique] DEFAULT (newid()),
[IsDefault] [bit] NOT NULL CONSTRAINT [DF_SystemFormBase_IsDefault] DEFAULT ((0)),
[FormPresentation] [int] NOT NULL CONSTRAINT [DF_SystemFormBase_FormPresentation] DEFAULT ((0)),
[FormActivationState] [int] NOT NULL CONSTRAINT [DF_SystemFormBase_FormActivationState] DEFAULT ((1)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[IsAIRMerged] [bit] NULL CONSTRAINT [DF_SystemFormBase_IsAIRMerged] DEFAULT ((0)),
[IsTabletEnabled] [bit] NOT NULL CONSTRAINT [DF_SystemFormBase_IsTabletEnabled] DEFAULT ((0)),
[UniqueName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[IsDesktopEnabled] [bit] NOT NULL CONSTRAINT [DF_SystemFormBase_IsDesktopEnabled] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemFormBase] ADD CONSTRAINT [cndx_PrimaryKey_SystemForm] PRIMARY KEY CLUSTERED  ([FormId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemFormBase] ADD CONSTRAINT [UQ_SystemFormBase_FormIdUnique] UNIQUE NONCLUSTERED  ([FormIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[SystemFormBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Type_ObjectType_Default] ON [dbo].[SystemFormBase] ([Type], [ObjectTypeCode], [IsDefault]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueName] ON [dbo].[SystemFormBase] ([UniqueName], [SolutionId], [ComponentState], [OverwriteTime]) WHERE ([Type]=(8)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemFormBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
