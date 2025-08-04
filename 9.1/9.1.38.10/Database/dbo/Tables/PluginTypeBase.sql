CREATE TABLE [dbo].[PluginTypeBase] (
    [PluginTypeId]               UNIQUEIDENTIFIER NOT NULL,
    [TypeName]                   NVARCHAR (256)   NOT NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [SolutionId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_PluginTypeBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IsWorkflowActivity]         BIT              CONSTRAINT [DF_PluginTypeBase_IsWorkflowActivity] DEFAULT ((0)) NULL,
    [ComponentState]             INT              CONSTRAINT [DF_PluginTypeBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]       UNIQUEIDENTIFIER NULL,
    [OverwriteTime]              DATETIME         CONSTRAINT [DF_PluginTypeBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Description]                NVARCHAR (256)   NULL,
    [FriendlyName]               NVARCHAR (256)   NOT NULL,
    [WorkflowActivityGroupName]  NVARCHAR (256)   NULL,
    [IsManaged]                  BIT              CONSTRAINT [DF_PluginTypeBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [PluginAssemblyId]           UNIQUEIDENTIFIER NULL,
    [PluginTypeIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_PluginTypeBase_PluginTypeIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [CustomizationLevel]         INT              CONSTRAINT [DF_PluginTypeBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CreatedOn]                  DATETIME         NULL,
    [Name]                       NVARCHAR (256)   NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [OrganizationId]             UNIQUEIDENTIFIER NOT NULL,
    [CustomWorkflowActivityInfo] NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_PluginType] PRIMARY KEY CLUSTERED ([PluginTypeId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_PluginTypeBase_PluginTypeIdUnique] UNIQUE NONCLUSTERED ([PluginTypeIdUnique] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_PluginTypeBase_TypeMetadata] UNIQUE NONCLUSTERED ([TypeName] ASC, [PluginAssemblyId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[PluginTypeBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[PluginTypeBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [UQ1_PluginType]
    ON [dbo].[PluginTypeBase]([FriendlyName] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PluginTypeBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_pluginassembly_plugintype]
    ON [dbo].[PluginTypeBase]([PluginAssemblyId] ASC)
    INCLUDE([ComponentState]) WHERE ([PluginAssemblyId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_NameIsWorkflowActivity]
    ON [dbo].[PluginTypeBase]([Name] ASC, [IsWorkflowActivity] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[PluginTypeBase]([PluginTypeId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_57619F7D716E4EFC9BEF29EBCE84782E]
    ON [dbo].[PluginTypeBase]([PluginTypeId] ASC)
    INCLUDE([Name], [TypeName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_57619F7D716E4EFC9BEF29EBCE84782E]
    ON [dbo].[PluginTypeBase]([Name] ASC, [PluginTypeId] ASC)
    INCLUDE([TypeName], [IsWorkflowActivity], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_57619F7D716E4EFC9BEF29EBCE84782E]
    ON [dbo].[PluginTypeBase]([PluginTypeId] ASC)
    INCLUDE([Name], [TypeName], [IsWorkflowActivity], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

