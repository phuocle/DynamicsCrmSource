CREATE TABLE [dbo].[SystemUserSyncMappingProfiles] (
    [SyncAttributeMappingProfileId]  UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [SystemUserId]                   UNIQUEIDENTIFIER NOT NULL,
    [SystemUserSyncMappingProfileId] UNIQUEIDENTIFIER CONSTRAINT [DF_SystemUserSyncMappingProfiles_SystemUserSyncMappingProfileId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [systemuser_systemusersyncmappingprofiles] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
);


GO
ALTER TABLE [dbo].[SystemUserSyncMappingProfiles] SET (LOCK_ESCALATION = DISABLE);

