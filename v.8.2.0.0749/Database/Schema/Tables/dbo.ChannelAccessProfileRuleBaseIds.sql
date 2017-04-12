CREATE TABLE [dbo].[ChannelAccessProfileRuleBaseIds]
(
[ChannelAccessProfileRuleId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleBaseIds] ADD CONSTRAINT [PK_ChannelAccessProfileRuleBaseIds] PRIMARY KEY CLUSTERED  ([ChannelAccessProfileRuleId]) ON [PRIMARY]
GO
