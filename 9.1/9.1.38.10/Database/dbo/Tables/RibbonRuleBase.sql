CREATE TABLE [dbo].[RibbonRuleBase] (
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_RibbonRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [RibbonRuleUniqueId]    UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonRuleBase_RibbonRuleUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [RuleType]              INT              NOT NULL,
    [RibbonRuleId]          UNIQUEIDENTIFIER NOT NULL,
    [RibbonCustomizationId] UNIQUEIDENTIFIER NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_RibbonRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ComponentState]        INT              CONSTRAINT [DF_RibbonRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [RuleId]                NVARCHAR (MAX)   NOT NULL,
    [RuleDefinition]        NVARCHAR (MAX)   NULL,
    [Entity]                NVARCHAR (128)   NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [CreatedOn]             DATETIME         NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]            DATETIME         NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonRule] PRIMARY KEY CLUSTERED ([RibbonRuleId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonRuleBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonRuleUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[RibbonRuleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[RibbonRuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonRuleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[RibbonRuleBase]([RibbonRuleId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_RuleType]
    ON [dbo].[RibbonRuleBase]([RuleType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_OverwriteTimeRuleTypeEntity]
    ON [dbo].[RibbonRuleBase]([OverwriteTime] ASC, [RuleType] ASC, [Entity] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

