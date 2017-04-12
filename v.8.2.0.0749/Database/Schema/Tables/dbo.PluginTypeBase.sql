CREATE TABLE [dbo].[PluginTypeBase]
(
[FriendlyName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[PluginTypeId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[TypeName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[IsWorkflowActivity] [bit] NULL CONSTRAINT [DF_PluginTypeBase_IsWorkflowActivity] DEFAULT ((0)),
[PluginTypeIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_PluginTypeBase_PluginTypeIdUnique] DEFAULT (newid()),
[PluginAssemblyId] [uniqueidentifier] NULL,
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_PluginTypeBase_CustomizationLevel] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PluginTypeBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_PluginTypeBase_ComponentState] DEFAULT ((0)),
[Description] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[WorkflowActivityGroupName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_PluginTypeBase_IsManaged] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_PluginTypeBase_OverwriteTime] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[CustomWorkflowActivityInfo] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginTypeBase] ADD CONSTRAINT [cndx_PrimaryKey_PluginType] PRIMARY KEY CLUSTERED  ([PluginTypeId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [UQ1_PluginType] ON [dbo].[PluginTypeBase] ([FriendlyName], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_NameIsWorkflowActivity] ON [dbo].[PluginTypeBase] ([Name], [IsWorkflowActivity]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_pluginassembly_plugintype] ON [dbo].[PluginTypeBase] ([PluginAssemblyId]) INCLUDE ([ComponentState]) WHERE ([PluginAssemblyId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginTypeBase] ADD CONSTRAINT [UQ_PluginTypeBase_PluginTypeIdUnique] UNIQUE NONCLUSTERED  ([PluginTypeIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginTypeBase] ADD CONSTRAINT [UQ_PluginTypeBase_TypeMetadata] UNIQUE NONCLUSTERED  ([TypeName], [PluginAssemblyId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PluginTypeBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
