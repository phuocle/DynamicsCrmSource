CREATE TABLE [dbo].[RibbonTabToCommandMapBase] (
    [TabId]                         NVARCHAR (200)   NOT NULL,
    [Entity]                        NVARCHAR (128)   NULL,
    [SolutionId]                    UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonTabToCommandMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]                INT              CONSTRAINT [DF_RibbonTabToCommandMapBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ControlId]                     NVARCHAR (MAX)   NULL,
    [RibbonTabToCommandMapUniqueId] UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonTabToCommandMapBase_RibbonTabToCommandMapUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SupportingSolutionId]          UNIQUEIDENTIFIER NULL,
    [Command]                       NVARCHAR (MAX)   NULL,
    [RibbonTabToCommandMapId]       UNIQUEIDENTIFIER NOT NULL,
    [IsManaged]                     BIT              CONSTRAINT [DF_RibbonTabToCommandMapBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [RibbonDiffId]                  UNIQUEIDENTIFIER NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]                 DATETIME         CONSTRAINT [DF_RibbonTabToCommandMapBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonTabToCommandMap] PRIMARY KEY CLUSTERED ([RibbonTabToCommandMapId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonTabToCommandMapBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonTabToCommandMapUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[RibbonTabToCommandMapBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[RibbonTabToCommandMapBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonTabToCommandMapBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_RibbonDiff_RibbonTabToCommandMap]
    ON [dbo].[RibbonTabToCommandMapBase]([RibbonDiffId] ASC)
    INCLUDE([ComponentState]) WHERE ([RibbonDiffId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[RibbonTabToCommandMapBase]([RibbonTabToCommandMapId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_OverwriteTimeEntity]
    ON [dbo].[RibbonTabToCommandMapBase]([OverwriteTime] ASC, [Entity] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_RibbonTabToCommandMap_TabId]
    ON [dbo].[RibbonTabToCommandMapBase]([TabId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

