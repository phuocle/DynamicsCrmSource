CREATE TABLE [dbo].[RibbonCommandBase]
(
[Entity] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RibbonCommandBase_OverwriteTime] DEFAULT ((0)),
[Command] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RibbonCommandBase_ComponentState] DEFAULT ((0)),
[CommandDefinition] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RibbonCommandBase_IsManaged] DEFAULT ((0)),
[RibbonCommandId] [uniqueidentifier] NOT NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[RibbonCommandUniqueId] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RibbonCommandBase_RibbonCommandUniqueId] DEFAULT (newid()),
[RibbonCustomizationId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RibbonCommandBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238')
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonCommandBase] ADD CONSTRAINT [cndx_PrimaryKey_RibbonCommand] PRIMARY KEY CLUSTERED  ([RibbonCommandId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonCommandBase] ADD CONSTRAINT [UQ_RibbonCommandBase_UniqueRowId] UNIQUE NONCLUSTERED  ([RibbonCommandUniqueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RibbonCommandBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
