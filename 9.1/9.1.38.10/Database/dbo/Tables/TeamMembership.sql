CREATE TABLE [dbo].[TeamMembership] (
    [TeamId]           UNIQUEIDENTIFIER NOT NULL,
    [SystemUserId]     UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]    ROWVERSION       NULL,
    [TeamMembershipId] UNIQUEIDENTIFIER CONSTRAINT [DF_TeamMembership_TeamMembershipId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_TeamMembership] PRIMARY KEY CLUSTERED ([TeamMembershipId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [system_user_team_membership] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [team_system_users] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[TeamBase] ([TeamId]),
    CONSTRAINT [UQ_TeamMembership] UNIQUE NONCLUSTERED ([TeamId] ASC, [SystemUserId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[TeamMembership] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TeamMembership]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_system_user_team_membership]
    ON [dbo].[TeamMembership]([SystemUserId] ASC)
    INCLUDE([TeamId]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_systemuseridteamid]
    ON [dbo].[TeamMembership]([SystemUserId] ASC, [TeamId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_maxVersion]
    ON [dbo].[TeamMembership]([SystemUserId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

