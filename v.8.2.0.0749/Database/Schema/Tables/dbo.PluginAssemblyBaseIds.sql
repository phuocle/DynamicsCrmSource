CREATE TABLE [dbo].[PluginAssemblyBaseIds]
(
[PluginAssemblyId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginAssemblyBaseIds] ADD CONSTRAINT [PK_PluginAssemblyBaseIds] PRIMARY KEY CLUSTERED  ([PluginAssemblyId]) ON [PRIMARY]
GO
