CREATE TABLE [dbo].[TeamRoles]
(
[RoleId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[TeamId] [uniqueidentifier] NOT NULL,
[TeamRoleId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TeamRoles_TeamRoleId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamRoles] ADD CONSTRAINT [cndx_PrimaryKey_TeamRoles] PRIMARY KEY CLUSTERED  ([TeamRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_teamroles] ON [dbo].[TeamRoles] ([RoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_TeamIdRoleId] ON [dbo].[TeamRoles] ([TeamId], [RoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TeamRoles] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamRoles] ADD CONSTRAINT [role_teamroles] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[RoleBaseIds] ([RoleId])
GO
ALTER TABLE [dbo].[TeamRoles] ADD CONSTRAINT [team_teamroles] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[TeamBase] ([TeamId])
GO
