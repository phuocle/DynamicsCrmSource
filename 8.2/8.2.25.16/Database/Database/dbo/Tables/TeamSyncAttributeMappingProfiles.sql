CREATE TABLE [dbo].[TeamSyncAttributeMappingProfiles] (
    [TeamSyncAttributeMappingProfileId] UNIQUEIDENTIFIER CONSTRAINT [DF_TeamSyncAttributeMappingProfiles_TeamSyncAttributeMappingProfileId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]                     ROWVERSION       NULL,
    [TeamId]                            UNIQUEIDENTIFIER NOT NULL,
    [SyncAttributeMappingProfileId]     UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [team_teamsyncattributemappingprofiles] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[TeamBase] ([TeamId])
);

