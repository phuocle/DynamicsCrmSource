CREATE TABLE [dbo].[TeamRoles] (
    [RoleId]        UNIQUEIDENTIFIER NOT NULL,
    [TeamId]        UNIQUEIDENTIFIER NOT NULL,
    [TeamRoleId]    UNIQUEIDENTIFIER CONSTRAINT [DF_TeamRoles_TeamRoleId] DEFAULT (newid()) NOT NULL,
    [VersionNumber] ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_TeamRoles] PRIMARY KEY CLUSTERED ([TeamRoleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [role_teamroles] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[RoleBaseIds] ([RoleId]),
    CONSTRAINT [team_teamroles] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[TeamBase] ([TeamId])
);


GO
ALTER TABLE [dbo].[TeamRoles] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TeamRoles]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_TeamIdRoleId]
    ON [dbo].[TeamRoles]([TeamId] ASC, [RoleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_teamroles]
    ON [dbo].[TeamRoles]([RoleId] ASC) WITH (FILLFACTOR = 80);

