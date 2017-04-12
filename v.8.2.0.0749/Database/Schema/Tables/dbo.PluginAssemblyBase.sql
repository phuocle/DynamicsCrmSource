CREATE TABLE [dbo].[PluginAssemblyBase]
(
[SourceHash] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_PluginAssemblyBase_CustomizationLevel] DEFAULT ((0)),
[Content] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[Path] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Version] [nvarchar] (48) COLLATE Latin1_General_CI_AI NOT NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[PluginAssemblyId] [uniqueidentifier] NOT NULL,
[Culture] [nvarchar] (32) COLLATE Latin1_General_CI_AI NOT NULL,
[SourceType] [int] NOT NULL,
[PluginAssemblyIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_PluginAssemblyBase_PluginAssemblyIdUnique] DEFAULT (newid()),
[PublicKeyToken] [nvarchar] (32) COLLATE Latin1_General_CI_AI NOT NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_PluginAssemblyBase_OverwriteTime] DEFAULT ((0)),
[IsolationMode] [int] NOT NULL CONSTRAINT [DF_PluginAssemblyBase_IsolationMode] DEFAULT ((1)),
[Minor] [int] NOT NULL CONSTRAINT [DF_PluginAssemblyBase_Minor] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PluginAssemblyBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[Major] [int] NOT NULL CONSTRAINT [DF_PluginAssemblyBase_Major] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_PluginAssemblyBase_IsManaged] DEFAULT ((0)),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_PluginAssemblyBase_ComponentState] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[IsHidden] [bit] NOT NULL CONSTRAINT [DF_PluginAssemblyBase_IsHidden] DEFAULT ((0)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_PluginAssemblyBase_IsCustomizable] DEFAULT ((1))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginAssemblyBase] ADD CONSTRAINT [cndx_PrimaryKey_pluginassembly] PRIMARY KEY CLUSTERED  ([PluginAssemblyId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginAssemblyBase] ADD CONSTRAINT [UQ_PluginAssemblyBase_AssemblyMetadata] UNIQUE NONCLUSTERED  ([Name], [Major], [Minor], [Culture], [PublicKeyToken], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginAssemblyBase] ADD CONSTRAINT [UQ_PluginAssemblyBase_PluginAssemblyIdUnique] UNIQUE NONCLUSTERED  ([PluginAssemblyIdUnique]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PluginAssemblyBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
