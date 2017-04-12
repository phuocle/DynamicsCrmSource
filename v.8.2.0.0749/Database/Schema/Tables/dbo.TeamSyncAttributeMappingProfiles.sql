CREATE TABLE [dbo].[TeamSyncAttributeMappingProfiles]
(
[TeamSyncAttributeMappingProfileId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TeamSyncAttributeMappingProfiles_TeamSyncAttributeMappingProfileId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL,
[TeamId] [uniqueidentifier] NOT NULL,
[SyncAttributeMappingProfileId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamSyncAttributeMappingProfiles] ADD CONSTRAINT [team_teamsyncattributemappingprofiles] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[TeamBase] ([TeamId])
GO
