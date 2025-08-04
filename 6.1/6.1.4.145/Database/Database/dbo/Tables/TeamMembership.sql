CREATE TABLE [dbo].[TeamMembership] (
    [TeamId]           UNIQUEIDENTIFIER NOT NULL,
    [SystemUserId]     UNIQUEIDENTIFIER NOT NULL,
    [TeamMembershipId] UNIQUEIDENTIFIER CONSTRAINT [DF_TeamMembership_TeamMembershipId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]    ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_TeamMembership] PRIMARY KEY CLUSTERED ([TeamMembershipId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [system_user_team_membership] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [team_system_users] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[TeamBase] ([TeamId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_TeamMembership] UNIQUE NONCLUSTERED ([TeamId] ASC, [SystemUserId] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TeamMembership]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_system_user_team_membership]
    ON [dbo].[TeamMembership]([SystemUserId] ASC) WITH (FILLFACTOR = 80);

