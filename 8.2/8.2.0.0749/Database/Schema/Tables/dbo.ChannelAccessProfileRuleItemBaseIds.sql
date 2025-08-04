CREATE TABLE [dbo].[ChannelAccessProfileRuleItemBaseIds]
(
[ChannelAccessProfileRuleItemId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleItemBaseIds] ADD CONSTRAINT [PK_ChannelAccessProfileRuleItemBaseIds] PRIMARY KEY CLUSTERED  ([ChannelAccessProfileRuleItemId]) ON [PRIMARY]
GO
