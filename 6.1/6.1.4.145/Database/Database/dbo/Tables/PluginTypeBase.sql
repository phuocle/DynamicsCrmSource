CREATE TABLE [dbo].[PluginTypeBase] (
    [FriendlyName]               NVARCHAR (256)   NOT NULL,
    [PluginTypeId]               UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                  DATETIME         NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [OrganizationId]             UNIQUEIDENTIFIER NOT NULL,
    [TypeName]                   NVARCHAR (256)   NOT NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [IsWorkflowActivity]         BIT              CONSTRAINT [DF_PluginTypeBase_IsWorkflowActivity] DEFAULT ((0)) NULL,
    [PluginTypeIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_PluginTypeBase_PluginTypeIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [PluginAssemblyId]           UNIQUEIDENTIFIER NULL,
    [CustomizationLevel]         INT              CONSTRAINT [DF_PluginTypeBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [SolutionId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_PluginTypeBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]             INT              CONSTRAINT [DF_PluginTypeBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [Description]                NVARCHAR (256)   NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]       UNIQUEIDENTIFIER NULL,
    [WorkflowActivityGroupName]  NVARCHAR (256)   NULL,
    [IsManaged]                  BIT              CONSTRAINT [DF_PluginTypeBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]              DATETIME         CONSTRAINT [DF_PluginTypeBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [Name]                       NVARCHAR (256)   NULL,
    [CustomWorkflowActivityInfo] NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_PluginType] PRIMARY KEY CLUSTERED ([PluginTypeId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_PluginTypeBase_PluginTypeIdUnique] UNIQUE NONCLUSTERED ([PluginTypeIdUnique] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_PluginTypeBase_TypeMetadata] UNIQUE NONCLUSTERED ([TypeName] ASC, [PluginAssemblyId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_pluginassembly_plugintype]
    ON [dbo].[PluginTypeBase]([PluginAssemblyId] ASC)
    INCLUDE([ComponentState]) WHERE ([PluginAssemblyId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [UQ1_PluginType]
    ON [dbo].[PluginTypeBase]([FriendlyName] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PluginTypeBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_NameIsWorkflowActivity]
    ON [dbo].[PluginTypeBase]([Name] ASC, [IsWorkflowActivity] ASC) WITH (FILLFACTOR = 80);

