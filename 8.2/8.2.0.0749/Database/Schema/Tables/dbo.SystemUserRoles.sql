CREATE TABLE [dbo].[SystemUserRoles]
(
[SystemUserId] [uniqueidentifier] NOT NULL,
[RoleId] [uniqueidentifier] NOT NULL,
[SystemUserRoleId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SystemUserRoles_SystemUserRoleId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserRoles] ADD CONSTRAINT [cndx_PrimaryKey_SystemUserRoles] PRIMARY KEY CLUSTERED  ([SystemUserRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_system_users] ON [dbo].[SystemUserRoles] ([RoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserRoles] ADD CONSTRAINT [UQ_SystemUserRoles] UNIQUE NONCLUSTERED  ([SystemUserId], [RoleId]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserRoles] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserRoles] ADD CONSTRAINT [role_system_users] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[RoleBaseIds] ([RoleId])
GO
ALTER TABLE [dbo].[SystemUserRoles] ADD CONSTRAINT [system_user_roles] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
