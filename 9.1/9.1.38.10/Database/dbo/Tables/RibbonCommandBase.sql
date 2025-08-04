CREATE TABLE [dbo].[RibbonCommandBase] (
    [ComponentState]        INT              CONSTRAINT [DF_RibbonCommandBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CommandDefinition]     NVARCHAR (MAX)   NULL,
    [Command]               NVARCHAR (MAX)   NOT NULL,
    [Entity]                NVARCHAR (128)   NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_RibbonCommandBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonCommandBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [RibbonCommandId]       UNIQUEIDENTIFIER NOT NULL,
    [RibbonCommandUniqueId] UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonCommandBase_RibbonCommandUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [RibbonCustomizationId] UNIQUEIDENTIFIER NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_RibbonCommandBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]            DATETIME         NULL,
    [CreatedOn]             DATETIME         NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonCommand] PRIMARY KEY CLUSTERED ([RibbonCommandId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonCommandBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonCommandUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[RibbonCommandBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[RibbonCommandBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonCommandBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[RibbonCommandBase]([RibbonCommandId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_EntityOverwritetimeComponentStateRibbonCustomizationId]
    ON [dbo].[RibbonCommandBase]([Entity] ASC, [OverwriteTime] ASC, [ComponentState] ASC, [RibbonCustomizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_OverwritetimeComponentStateRibbonCustomizationId]
    ON [dbo].[RibbonCommandBase]([OverwriteTime] ASC, [ComponentState] ASC, [RibbonCustomizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

