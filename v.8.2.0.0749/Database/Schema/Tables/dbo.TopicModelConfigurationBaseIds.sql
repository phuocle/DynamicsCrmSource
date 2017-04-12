CREATE TABLE [dbo].[TopicModelConfigurationBaseIds]
(
[TopicModelConfigurationId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TopicModelConfigurationBaseIds] ADD CONSTRAINT [PK_TopicModelConfigurationBaseIds] PRIMARY KEY CLUSTERED  ([TopicModelConfigurationId]) ON [PRIMARY]
GO
