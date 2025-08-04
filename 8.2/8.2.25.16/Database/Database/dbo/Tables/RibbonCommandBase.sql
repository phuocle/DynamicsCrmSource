CREATE TABLE [dbo].[RibbonCommandBase] (
    [Entity]                NVARCHAR (50)    NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_RibbonCommandBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Command]               NVARCHAR (MAX)   NOT NULL,
    [ComponentState]        INT              CONSTRAINT [DF_RibbonCommandBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CommandDefinition]     NVARCHAR (MAX)   NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_RibbonCommandBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [RibbonCommandId]       UNIQUEIDENTIFIER NOT NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [RibbonCommandUniqueId] UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonCommandBase_RibbonCommandUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [RibbonCustomizationId] UNIQUEIDENTIFIER NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonCommandBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonCommand] PRIMARY KEY CLUSTERED ([RibbonCommandId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonCommandBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonCommandUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonCommandBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

