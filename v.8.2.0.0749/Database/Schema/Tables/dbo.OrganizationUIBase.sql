CREATE TABLE [dbo].[OrganizationUIBase]
(
[FormId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[FormXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[FieldXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ObjectTypeCode] [int] NULL,
[PreviewXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[PreviewColumnsetXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Version] [int] NULL,
[OutlookShortcutIcon] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[GridIcon] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[FormIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_OrganizationUIBase_FormIdUnique] DEFAULT (newid()),
[LargeEntityIcon] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_OrganizationUIBase_OverwriteTime] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_OrganizationUIBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_OrganizationUIBase_ComponentState] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_OrganizationUIBase_IsManaged] DEFAULT ((0)),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_OrganizationUIBase_IsCustomizable] DEFAULT ((1))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
