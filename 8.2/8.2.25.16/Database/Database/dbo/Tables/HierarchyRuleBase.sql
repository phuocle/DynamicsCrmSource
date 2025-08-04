CREATE TABLE [dbo].[HierarchyRuleBase] (
    [IsManaged]                BIT              CONSTRAINT [DF_HierarchyRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ComponentState]           INT              CONSTRAINT [DF_HierarchyRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [RelatedEntityLogicalName] NVARCHAR (50)    NOT NULL,
    [HierarchyRuleID]          UNIQUEIDENTIFIER NOT NULL,
    [Description]              NVARCHAR (MAX)   NULL,
    [SupportingSolutionId]     UNIQUEIDENTIFIER NULL,
    [PrimaryEntityLogicalName] NVARCHAR (50)    NOT NULL,
    [SortBy]                   UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [OrganizationId]           UNIQUEIDENTIFIER NOT NULL,
    [ShowDisabled]             BIT              CONSTRAINT [DF_HierarchyRuleBase_ShowDisabled] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]        NVARCHAR (48)    NULL,
    [Name]                     NVARCHAR (100)   NOT NULL,
    [IsCustomizable]           BIT              CONSTRAINT [DF_HierarchyRuleBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [SolutionId]               UNIQUEIDENTIFIER CONSTRAINT [DF_HierarchyRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [PrimaryEntityFormID]      UNIQUEIDENTIFIER NULL,
    [RelatedEntityFormId]      UNIQUEIDENTIFIER NULL,
    [OverwriteTime]            DATETIME         CONSTRAINT [DF_HierarchyRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [PublishedOn]              DATETIME         NULL,
    [HierarchyRuleIDUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_HierarchyRuleBase_HierarchyRuleIDUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_HierarchyRuleID] PRIMARY KEY CLUSTERED ([HierarchyRuleID] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_HierarchyRuleBase_HierarchyRuleIDUnique] UNIQUE NONCLUSTERED ([HierarchyRuleIDUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[HierarchyRuleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

