CREATE TABLE [dbo].[RibbonContextGroupBase] (
    [SolutionId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonContextGroupBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [OverwriteTime]              DATETIME         CONSTRAINT [DF_RibbonContextGroupBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [OrganizationId]             UNIQUEIDENTIFIER NOT NULL,
    [ContextGroupXml]            NVARCHAR (MAX)   NULL,
    [Entity]                     NVARCHAR (128)   NULL,
    [RibbonContextGroupId]       UNIQUEIDENTIFIER NOT NULL,
    [SupportingSolutionId]       UNIQUEIDENTIFIER NULL,
    [IsManaged]                  BIT              CONSTRAINT [DF_RibbonContextGroupBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ContextGroupId]             NVARCHAR (MAX)   NOT NULL,
    [RibbonContextGroupUniqueId] UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonContextGroupBase_RibbonContextGroupUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [RibbonCustomizationId]      UNIQUEIDENTIFIER NULL,
    [ComponentState]             INT              CONSTRAINT [DF_RibbonContextGroupBase_ComponentState] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonContextGroup] PRIMARY KEY CLUSTERED ([RibbonContextGroupId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonContextGroupBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonContextGroupUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[RibbonContextGroupBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[RibbonContextGroupBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonContextGroupBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[RibbonContextGroupBase]([RibbonContextGroupId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

