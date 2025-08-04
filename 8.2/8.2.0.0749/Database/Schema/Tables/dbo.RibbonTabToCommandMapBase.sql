CREATE TABLE [dbo].[RibbonTabToCommandMapBase]
(
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RibbonTabToCommandMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[TabId] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[RibbonTabToCommandMapUniqueId] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RibbonTabToCommandMapBase_RibbonTabToCommandMapUniqueId] DEFAULT (newid()),
[Command] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RibbonTabToCommandMapBase_ComponentState] DEFAULT ((0)),
[RibbonTabToCommandMapId] [uniqueidentifier] NOT NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[RibbonDiffId] [uniqueidentifier] NULL,
[ControlId] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RibbonTabToCommandMapBase_IsManaged] DEFAULT ((0)),
[Entity] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RibbonTabToCommandMapBase_OverwriteTime] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonTabToCommandMapBase] ADD CONSTRAINT [cndx_PrimaryKey_RibbonTabToCommandMap] PRIMARY KEY CLUSTERED  ([RibbonTabToCommandMapId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_RibbonDiff_RibbonTabToCommandMap] ON [dbo].[RibbonTabToCommandMapBase] ([RibbonDiffId]) INCLUDE ([ComponentState]) WHERE ([RibbonDiffId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonTabToCommandMapBase] ADD CONSTRAINT [UQ_RibbonTabToCommandMapBase_UniqueRowId] UNIQUE NONCLUSTERED  ([RibbonTabToCommandMapUniqueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RibbonTabToCommandMapBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
