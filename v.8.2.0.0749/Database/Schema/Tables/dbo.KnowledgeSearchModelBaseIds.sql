CREATE TABLE [dbo].[KnowledgeSearchModelBaseIds]
(
[KnowledgeSearchModelId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeSearchModelBaseIds] ADD CONSTRAINT [PK_KnowledgeSearchModelBaseIds] PRIMARY KEY CLUSTERED  ([KnowledgeSearchModelId]) ON [PRIMARY]
GO
