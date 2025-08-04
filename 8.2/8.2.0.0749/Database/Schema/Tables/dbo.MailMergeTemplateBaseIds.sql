CREATE TABLE [dbo].[MailMergeTemplateBaseIds]
(
[MailMergeTemplateId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MailMergeTemplateBaseIds] ADD CONSTRAINT [PK_MailMergeTemplateBaseIds] PRIMARY KEY CLUSTERED  ([MailMergeTemplateId]) ON [PRIMARY]
GO
