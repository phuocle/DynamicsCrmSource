CREATE TABLE [dbo].[MailMergeTemplateBaseIds] (
    [MailMergeTemplateId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_MailMergeTemplateBaseIds] PRIMARY KEY CLUSTERED ([MailMergeTemplateId] ASC)
);


GO
ALTER TABLE [dbo].[MailMergeTemplateBaseIds] SET (LOCK_ESCALATION = DISABLE);

