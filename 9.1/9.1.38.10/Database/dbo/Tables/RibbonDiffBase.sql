CREATE TABLE [dbo].[RibbonDiffBase] (
    [DiffType]              INT              CONSTRAINT [DF_RibbonDiffBase_DiffType] DEFAULT ((0)) NOT NULL,
    [IsAppAware]            BIT              CONSTRAINT [DF_RibbonDiffBase_IsAppAware] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_RibbonDiffBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [RibbonDiffUniqueId]    UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonDiffBase_RibbonDiffUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Entity]                NVARCHAR (128)   NULL,
    [RibbonDiffId]          UNIQUEIDENTIFIER NOT NULL,
    [DiffId]                NVARCHAR (MAX)   NOT NULL,
    [Sequence]              INT              NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonDiffBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ContextGroupId]        UNIQUEIDENTIFIER NULL,
    [RibbonCustomizationId] UNIQUEIDENTIFIER NULL,
    [RDX]                   NVARCHAR (MAX)   NULL,
    [TabId]                 NVARCHAR (200)   NOT NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_RibbonDiffBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]        INT              CONSTRAINT [DF_RibbonDiffBase_ComponentState] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonDiff] PRIMARY KEY CLUSTERED ([RibbonDiffId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonDiffBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonDiffUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[RibbonDiffBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[RibbonDiffBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonDiffBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[RibbonDiffBase]([RibbonDiffId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_RibbonDiff_TabIdDiffTypeOverwriteTimeComponentState]
    ON [dbo].[RibbonDiffBase]([TabId] ASC, [DiffType] ASC, [OverwriteTime] ASC, [ComponentState] ASC)
    INCLUDE([Entity]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_DiffType]
    ON [dbo].[RibbonDiffBase]([DiffType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

