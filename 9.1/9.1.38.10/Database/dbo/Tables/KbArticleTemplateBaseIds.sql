CREATE TABLE [dbo].[KbArticleTemplateBaseIds] (
    [KbArticleTemplateId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_KbArticleTemplateBaseIds] PRIMARY KEY CLUSTERED ([KbArticleTemplateId] ASC)
);


GO
ALTER TABLE [dbo].[KbArticleTemplateBaseIds] SET (LOCK_ESCALATION = DISABLE);

