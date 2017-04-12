CREATE TABLE [dbo].[RoleTemplatePrivileges]
(
[RoleTemplateId] [uniqueidentifier] NOT NULL,
[PrivilegeId] [uniqueidentifier] NOT NULL,
[IsBasic] [bit] NOT NULL CONSTRAINT [Set_To_Zero141] DEFAULT ((0)),
[IsLocal] [bit] NOT NULL CONSTRAINT [Set_To_Zero142] DEFAULT ((0)),
[IsDeep] [bit] NOT NULL CONSTRAINT [Set_To_Zero143] DEFAULT ((0)),
[IsGlobal] [bit] NOT NULL CONSTRAINT [Set_To_Zero144] DEFAULT ((0)),
[Upgrading] [bit] NOT NULL CONSTRAINT [DF_RoleTemplatePrivileges_Upgrading] DEFAULT ((1)),
[RoleTemplatePrivilegeId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RoleTemplatePrivileges_RoleTemplatePrivilegeId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoleTemplatePrivileges] ADD CONSTRAINT [cndx_PrimaryKey_RoleTemplatePrivileges] PRIMARY KEY CLUSTERED  ([RoleTemplatePrivilegeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_privilege_role_templates] ON [dbo].[RoleTemplatePrivileges] ([PrivilegeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoleTemplatePrivileges] ADD CONSTRAINT [UQ_RoleTemplatePrivileges] UNIQUE NONCLUSTERED  ([RoleTemplateId], [PrivilegeId]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoleTemplatePrivileges] ADD CONSTRAINT [privilege_role_templates] FOREIGN KEY ([PrivilegeId]) REFERENCES [dbo].[PrivilegeBase] ([PrivilegeId])
GO
