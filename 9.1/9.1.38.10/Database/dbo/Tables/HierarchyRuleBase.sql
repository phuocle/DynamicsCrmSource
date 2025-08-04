CREATE TABLE [dbo].[HierarchyRuleBase] (
    [IsManaged]                BIT              CONSTRAINT [DF_HierarchyRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]     UNIQUEIDENTIFIER NULL,
    [ComponentState]           INT              CONSTRAINT [DF_HierarchyRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [RelatedEntityLogicalName] NVARCHAR (128)   NOT NULL,
    [HierarchyRuleID]          UNIQUEIDENTIFIER NOT NULL,
    [Description]              NVARCHAR (MAX)   NULL,
    [PrimaryEntityLogicalName] NVARCHAR (128)   NOT NULL,
    [SortBy]                   UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [ShowDisabled]             BIT              CONSTRAINT [DF_HierarchyRuleBase_ShowDisabled] DEFAULT ((0)) NOT NULL,
    [OrganizationId]           UNIQUEIDENTIFIER NOT NULL,
    [Name]                     NVARCHAR (100)   NOT NULL,
    [IsCustomizable]           BIT              CONSTRAINT [DF_HierarchyRuleBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [SolutionId]               UNIQUEIDENTIFIER CONSTRAINT [DF_HierarchyRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [PrimaryEntityFormID]      UNIQUEIDENTIFIER NULL,
    [RelatedEntityFormId]      UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]        NVARCHAR (48)    NULL,
    [OverwriteTime]            DATETIME         CONSTRAINT [DF_HierarchyRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [PublishedOn]              DATETIME         NULL,
    [HierarchyRuleIDUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_HierarchyRuleBase_HierarchyRuleIDUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_HierarchyRuleID] PRIMARY KEY CLUSTERED ([HierarchyRuleID] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_HierarchyRuleBase_HierarchyRuleIDUnique] UNIQUE NONCLUSTERED ([HierarchyRuleIDUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[HierarchyRuleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[HierarchyRuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[HierarchyRuleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[HierarchyRuleBase]([HierarchyRuleID] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

