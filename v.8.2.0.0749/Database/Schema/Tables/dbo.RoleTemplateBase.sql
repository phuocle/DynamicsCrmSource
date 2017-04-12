CREATE TABLE [dbo].[RoleTemplateBase]
(
[RoleTemplateId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[Upgrading] [bit] NOT NULL CONSTRAINT [DF_RoleTemplateBase_Upgrading] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoleTemplateBase] ADD CONSTRAINT [cndx_PrimaryKey_RoleTemplate] PRIMARY KEY CLUSTERED  ([RoleTemplateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[RoleTemplateBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
