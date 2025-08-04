CREATE TABLE [dbo].[RibbonRuleBase] (
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_RibbonRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [RuleType]              INT              NOT NULL,
    [Entity]                NVARCHAR (50)    NULL,
    [RibbonRuleId]          UNIQUEIDENTIFIER NOT NULL,
    [RibbonCustomizationId] UNIQUEIDENTIFIER NULL,
    [ComponentState]        INT              CONSTRAINT [DF_RibbonRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [RuleId]                NVARCHAR (MAX)   NOT NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_RibbonRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [RibbonRuleUniqueId]    UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonRuleBase_RibbonRuleUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [RuleDefinition]        NVARCHAR (MAX)   NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonRule] PRIMARY KEY CLUSTERED ([RibbonRuleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonRuleBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonRuleUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonRuleBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

