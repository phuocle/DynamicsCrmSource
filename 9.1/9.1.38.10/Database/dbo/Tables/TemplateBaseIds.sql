CREATE TABLE [dbo].[TemplateBaseIds] (
    [TemplateId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_TemplateBaseIds] PRIMARY KEY CLUSTERED ([TemplateId] ASC)
);


GO
ALTER TABLE [dbo].[TemplateBaseIds] SET (LOCK_ESCALATION = DISABLE);

