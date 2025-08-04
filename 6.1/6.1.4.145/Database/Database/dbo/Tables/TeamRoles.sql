CREATE TABLE [dbo].[TeamRoles] (
    [RoleId]        UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber] ROWVERSION       NULL,
    [TeamId]        UNIQUEIDENTIFIER NOT NULL,
    [TeamRoleId]    UNIQUEIDENTIFIER CONSTRAINT [DF_TeamRoles_TeamRoleId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_TeamRoles] PRIMARY KEY CLUSTERED ([TeamRoleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [role_teamroles] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[RoleBaseIds] ([RoleId]) NOT FOR REPLICATION,
    CONSTRAINT [team_teamroles] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[TeamBase] ([TeamId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_TeamIdRoleId]
    ON [dbo].[TeamRoles]([TeamId] ASC, [RoleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_teamroles]
    ON [dbo].[TeamRoles]([RoleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TeamRoles]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

