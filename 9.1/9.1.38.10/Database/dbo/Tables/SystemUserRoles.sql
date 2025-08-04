CREATE TABLE [dbo].[SystemUserRoles] (
    [SystemUserId]     UNIQUEIDENTIFIER NOT NULL,
    [RoleId]           UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]    ROWVERSION       NULL,
    [SystemUserRoleId] UNIQUEIDENTIFIER CONSTRAINT [DF_SystemUserRoles_SystemUserRoleId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemUserRoles] PRIMARY KEY CLUSTERED ([SystemUserRoleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [role_system_users] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[RoleBaseIds] ([RoleId]),
    CONSTRAINT [system_user_roles] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [UQ_SystemUserRoles] UNIQUE NONCLUSTERED ([SystemUserId] ASC, [RoleId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SystemUserRoles] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemUserRoles]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_system_users]
    ON [dbo].[SystemUserRoles]([RoleId] ASC) WITH (FILLFACTOR = 80);

