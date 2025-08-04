CREATE TABLE [dbo].[ChannelAccessProfileBaseIds]
(
[ChannelAccessProfileId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelAccessProfileBaseIds] ADD CONSTRAINT [PK_ChannelAccessProfileBaseIds] PRIMARY KEY CLUSTERED  ([ChannelAccessProfileId]) ON [PRIMARY]
GO
