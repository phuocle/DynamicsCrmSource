CREATE TABLE [dbo].[PluginTypeBaseIds] (
    [PluginTypeId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_PluginTypeBaseIds] PRIMARY KEY CLUSTERED ([PluginTypeId] ASC)
);


GO
ALTER TABLE [dbo].[PluginTypeBaseIds] SET (LOCK_ESCALATION = DISABLE);

