CREATE TABLE [dbo].[PluginTypeBaseIds]
(
[PluginTypeId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginTypeBaseIds] ADD CONSTRAINT [PK_PluginTypeBaseIds] PRIMARY KEY CLUSTERED  ([PluginTypeId]) ON [PRIMARY]
GO
