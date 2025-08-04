CREATE TABLE [dbo].[TopicModelConfigurationBaseIds] (
    [TopicModelConfigurationId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_TopicModelConfigurationBaseIds] PRIMARY KEY CLUSTERED ([TopicModelConfigurationId] ASC)
);


GO
ALTER TABLE [dbo].[TopicModelConfigurationBaseIds] SET (LOCK_ESCALATION = DISABLE);

