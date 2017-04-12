CREATE TABLE [dbo].[ContractTemplateBaseIds]
(
[ContractTemplateId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContractTemplateBaseIds] ADD CONSTRAINT [PK_ContractTemplateBaseIds] PRIMARY KEY CLUSTERED  ([ContractTemplateId]) ON [PRIMARY]
GO
