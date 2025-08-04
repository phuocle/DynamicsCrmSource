CREATE TABLE [dbo].[SystemUserRoles] (
    [SystemUserId]     UNIQUEIDENTIFIER NOT NULL,
    [RoleId]           UNIQUEIDENTIFIER NOT NULL,
    [SystemUserRoleId] UNIQUEIDENTIFIER CONSTRAINT [DF_SystemUserRoles_SystemUserRoleId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]    ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemUserRoles] PRIMARY KEY CLUSTERED ([SystemUserRoleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [role_system_users] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[RoleBaseIds] ([RoleId]) NOT FOR REPLICATION,
    CONSTRAINT [system_user_roles] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_SystemUserRoles] UNIQUE NONCLUSTERED ([SystemUserId] ASC, [RoleId] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_system_users]
    ON [dbo].[SystemUserRoles]([RoleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemUserRoles]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

