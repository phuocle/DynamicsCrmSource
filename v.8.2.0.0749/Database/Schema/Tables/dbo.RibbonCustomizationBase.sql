CREATE TABLE [dbo].[RibbonCustomizationBase]
(
[VersionNumber] [timestamp] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RibbonCustomizationBase_IsManaged] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[RibbonCustomizationUniqueId] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RibbonCustomizationBase_RibbonCustomizationUniqueId] DEFAULT (newid()),
[OrganizationId] [uniqueidentifier] NOT NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RibbonCustomizationBase_OverwriteTime] DEFAULT ((0)),
[RibbonCustomizationId] [uniqueidentifier] NOT NULL,
[Entity] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RibbonCustomizationBase_ComponentState] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RibbonCustomizationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[PublishedOn] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonCustomizationBase] ADD CONSTRAINT [cndx_PrimaryKey_RibbonCustomization] PRIMARY KEY CLUSTERED  ([RibbonCustomizationId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonCustomizationBase] ADD CONSTRAINT [UQ_RibbonCustomizationBase_UniqueRowId] UNIQUE NONCLUSTERED  ([RibbonCustomizationUniqueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RibbonCustomizationBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
