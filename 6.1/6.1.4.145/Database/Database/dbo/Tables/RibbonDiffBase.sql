CREATE TABLE [dbo].[RibbonDiffBase] (
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [ComponentState]        INT              CONSTRAINT [DF_RibbonDiffBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [RDX]                   NVARCHAR (MAX)   NULL,
    [RibbonDiffUniqueId]    UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonDiffBase_RibbonDiffUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonDiffBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [RibbonCustomizationId] UNIQUEIDENTIFIER NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_RibbonDiffBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [Entity]                NVARCHAR (50)    NULL,
    [RibbonDiffId]          UNIQUEIDENTIFIER NOT NULL,
    [Sequence]              INT              NULL,
    [DiffId]                NVARCHAR (MAX)   NOT NULL,
    [ContextGroupId]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [TabId]                 NVARCHAR (MAX)   NOT NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_RibbonDiffBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [DiffType]              INT              CONSTRAINT [DF_RibbonDiffBase_DiffType] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonDiff] PRIMARY KEY CLUSTERED ([RibbonDiffId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonDiffBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonDiffUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonDiffBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

