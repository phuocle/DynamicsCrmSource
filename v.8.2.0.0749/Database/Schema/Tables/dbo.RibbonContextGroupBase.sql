CREATE TABLE [dbo].[RibbonContextGroupBase]
(
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RibbonContextGroupBase_OverwriteTime] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RibbonContextGroupBase_IsManaged] DEFAULT ((0)),
[Entity] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[RibbonContextGroupId] [uniqueidentifier] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RibbonContextGroupBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NULL,
[ContextGroupXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[RibbonContextGroupUniqueId] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RibbonContextGroupBase_RibbonContextGroupUniqueId] DEFAULT (newid()),
[ContextGroupId] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[RibbonCustomizationId] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RibbonContextGroupBase_ComponentState] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonContextGroupBase] ADD CONSTRAINT [cndx_PrimaryKey_RibbonContextGroup] PRIMARY KEY CLUSTERED  ([RibbonContextGroupId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonContextGroupBase] ADD CONSTRAINT [UQ_RibbonContextGroupBase_UniqueRowId] UNIQUE NONCLUSTERED  ([RibbonContextGroupUniqueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RibbonContextGroupBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
