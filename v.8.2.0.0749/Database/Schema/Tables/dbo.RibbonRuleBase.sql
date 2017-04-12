CREATE TABLE [dbo].[RibbonRuleBase]
(
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RibbonRuleBase_OverwriteTime] DEFAULT ((0)),
[RuleType] [int] NOT NULL,
[Entity] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[RibbonRuleId] [uniqueidentifier] NOT NULL,
[RibbonCustomizationId] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RibbonRuleBase_ComponentState] DEFAULT ((0)),
[RuleId] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RibbonRuleBase_IsManaged] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[RibbonRuleUniqueId] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RibbonRuleBase_RibbonRuleUniqueId] DEFAULT (newid()),
[RuleDefinition] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RibbonRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonRuleBase] ADD CONSTRAINT [cndx_PrimaryKey_RibbonRule] PRIMARY KEY CLUSTERED  ([RibbonRuleId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RibbonRuleBase] ADD CONSTRAINT [UQ_RibbonRuleBase_UniqueRowId] UNIQUE NONCLUSTERED  ([RibbonRuleUniqueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RibbonRuleBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
