CREATE TABLE [dbo].[ChannelAccessProfileRuleItemBaseIds] (
    [ChannelAccessProfileRuleItemId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_ChannelAccessProfileRuleItemBaseIds] PRIMARY KEY CLUSTERED ([ChannelAccessProfileRuleItemId] ASC)
);


GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleItemBaseIds] SET (LOCK_ESCALATION = DISABLE);

