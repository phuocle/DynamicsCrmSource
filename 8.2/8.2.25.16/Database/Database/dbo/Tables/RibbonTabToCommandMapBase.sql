CREATE TABLE [dbo].[RibbonTabToCommandMapBase] (
    [SolutionId]                    UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonTabToCommandMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [TabId]                         NVARCHAR (MAX)   NOT NULL,
    [RibbonTabToCommandMapUniqueId] UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonTabToCommandMapBase_RibbonTabToCommandMapUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Command]                       NVARCHAR (MAX)   NULL,
    [ComponentState]                INT              CONSTRAINT [DF_RibbonTabToCommandMapBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [RibbonTabToCommandMapId]       UNIQUEIDENTIFIER NOT NULL,
    [SupportingSolutionId]          UNIQUEIDENTIFIER NULL,
    [RibbonDiffId]                  UNIQUEIDENTIFIER NULL,
    [ControlId]                     NVARCHAR (MAX)   NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [IsManaged]                     BIT              CONSTRAINT [DF_RibbonTabToCommandMapBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [Entity]                        NVARCHAR (50)    NULL,
    [OverwriteTime]                 DATETIME         CONSTRAINT [DF_RibbonTabToCommandMapBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonTabToCommandMap] PRIMARY KEY CLUSTERED ([RibbonTabToCommandMapId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonTabToCommandMapBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonTabToCommandMapUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonTabToCommandMapBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_RibbonDiff_RibbonTabToCommandMap]
    ON [dbo].[RibbonTabToCommandMapBase]([RibbonDiffId] ASC)
    INCLUDE([ComponentState]) WHERE ([RibbonDiffId] IS NOT NULL) WITH (FILLFACTOR = 80);

