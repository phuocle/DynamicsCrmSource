CREATE TABLE [dbo].[TeamSyncAttributeMappingProfiles] (
    [TeamSyncAttributeMappingProfileId] UNIQUEIDENTIFIER CONSTRAINT [DF_TeamSyncAttributeMappingProfiles_TeamSyncAttributeMappingProfileId] DEFAULT (newid()) NOT NULL,
    [TeamId]                            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                     ROWVERSION       NULL,
    [SyncAttributeMappingProfileId]     UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [team_teamsyncattributemappingprofiles] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[TeamBase] ([TeamId])
);


GO
ALTER TABLE [dbo].[TeamSyncAttributeMappingProfiles] SET (LOCK_ESCALATION = DISABLE);

