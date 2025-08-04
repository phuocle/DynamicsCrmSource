CREATE TABLE [dbo].[PluginAssemblyBaseIds] (
    [PluginAssemblyId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_PluginAssemblyBaseIds] PRIMARY KEY CLUSTERED ([PluginAssemblyId] ASC)
);


GO
ALTER TABLE [dbo].[PluginAssemblyBaseIds] SET (LOCK_ESCALATION = DISABLE);

