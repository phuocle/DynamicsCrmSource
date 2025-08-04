CREATE TABLE [dbo].[TemplateBaseIds]
(
[TemplateId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TemplateBaseIds] ADD CONSTRAINT [PK_TemplateBaseIds] PRIMARY KEY CLUSTERED  ([TemplateId]) ON [PRIMARY]
GO
