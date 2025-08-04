CREATE TABLE [dbo].[KbArticleTemplateBaseIds]
(
[KbArticleTemplateId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KbArticleTemplateBaseIds] ADD CONSTRAINT [PK_KbArticleTemplateBaseIds] PRIMARY KEY CLUSTERED  ([KbArticleTemplateId]) ON [PRIMARY]
GO
