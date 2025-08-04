CREATE TABLE [dbo].[TeamMembership]
(
[TeamId] [uniqueidentifier] NOT NULL,
[SystemUserId] [uniqueidentifier] NOT NULL,
[TeamMembershipId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TeamMembership_TeamMembershipId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamMembership] ADD CONSTRAINT [cndx_PrimaryKey_TeamMembership] PRIMARY KEY CLUSTERED  ([TeamMembershipId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_system_user_team_membership] ON [dbo].[TeamMembership] ([SystemUserId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamMembership] ADD CONSTRAINT [UQ_TeamMembership] UNIQUE NONCLUSTERED  ([TeamId], [SystemUserId]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TeamMembership] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamMembership] ADD CONSTRAINT [system_user_team_membership] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[TeamMembership] ADD CONSTRAINT [team_system_users] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[TeamBase] ([TeamId])
GO
