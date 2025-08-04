CREATE TABLE [dbo].[ChannelAccessProfileRuleBaseIds] (
    [ChannelAccessProfileRuleId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_ChannelAccessProfileRuleBaseIds] PRIMARY KEY CLUSTERED ([ChannelAccessProfileRuleId] ASC)
);


GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleBaseIds] SET (LOCK_ESCALATION = DISABLE);

