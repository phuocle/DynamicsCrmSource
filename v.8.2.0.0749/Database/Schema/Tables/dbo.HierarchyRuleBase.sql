CREATE TABLE [dbo].[HierarchyRuleBase]
(
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_IsManaged] DEFAULT ((0)),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_ComponentState] DEFAULT ((0)),
[RelatedEntityLogicalName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL,
[HierarchyRuleID] [uniqueidentifier] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[PrimaryEntityLogicalName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL,
[SortBy] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ShowDisabled] [bit] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_ShowDisabled] DEFAULT ((0)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_IsCustomizable] DEFAULT ((1)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[PrimaryEntityFormID] [uniqueidentifier] NULL,
[RelatedEntityFormId] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_OverwriteTime] DEFAULT ((0)),
[PublishedOn] [datetime] NULL,
[HierarchyRuleIDUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_HierarchyRuleBase_HierarchyRuleIDUnique] DEFAULT (newid())
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[HierarchyRuleBase] ADD CONSTRAINT [cndx_PrimaryKey_HierarchyRuleID] PRIMARY KEY CLUSTERED  ([HierarchyRuleID], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[HierarchyRuleBase] ADD CONSTRAINT [UQ_HierarchyRuleBase_HierarchyRuleIDUnique] UNIQUE NONCLUSTERED  ([HierarchyRuleIDUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[HierarchyRuleBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
