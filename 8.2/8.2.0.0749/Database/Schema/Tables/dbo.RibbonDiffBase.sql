CREATE TABLE [dbo].[RibbonDiffBase]
(
[SupportingSolutionId] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RibbonDiffBase_ComponentState] DEFAULT ((0)),
[RDX] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[RibbonDiffUniqueId] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RibbonDiffBase_RibbonDiffUniqueId] DEFAULT (newid()),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RibbonDiffBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[RibbonCustomizationId] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RibbonDiffBase_IsManaged] DEFAULT ((0)),
[Entity] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[RibbonDiffId] [uniqueidentifier] NOT NULL,
[Sequence] [int] NULL,
[DiffId] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[ContextGroupId] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[TabId] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RibbonDiffBase_OverwriteTime] DEFAULT ((0)),
[DiffType] [int] NOT NULL CONSTRAINT [DF_RibbonDiffBase_DiffType] DEFAULT ((0)),
[IsAppAware] [bit] NOT NULL CONSTRAINT [DF_RibbonDiffBase_IsAppAware] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonDiffBase] ADD CONSTRAINT [cndx_PrimaryKey_RibbonDiff] PRIMARY KEY CLUSTERED  ([RibbonDiffId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonDiffBase] ADD CONSTRAINT [UQ_RibbonDiffBase_UniqueRowId] UNIQUE NONCLUSTERED  ([RibbonDiffUniqueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RibbonDiffBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
