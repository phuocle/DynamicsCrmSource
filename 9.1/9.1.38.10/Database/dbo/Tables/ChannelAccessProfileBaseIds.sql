CREATE TABLE [dbo].[ChannelAccessProfileBaseIds] (
    [ChannelAccessProfileId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_ChannelAccessProfileBaseIds] PRIMARY KEY CLUSTERED ([ChannelAccessProfileId] ASC)
);


GO
ALTER TABLE [dbo].[ChannelAccessProfileBaseIds] SET (LOCK_ESCALATION = DISABLE);

