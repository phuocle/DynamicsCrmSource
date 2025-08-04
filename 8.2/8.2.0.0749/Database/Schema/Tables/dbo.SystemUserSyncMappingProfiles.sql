CREATE TABLE [dbo].[SystemUserSyncMappingProfiles]
(
[SyncAttributeMappingProfileId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[SystemUserId] [uniqueidentifier] NOT NULL,
[SystemUserSyncMappingProfileId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SystemUserSyncMappingProfiles_SystemUserSyncMappingProfileId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserSyncMappingProfiles] ADD CONSTRAINT [systemuser_systemusersyncmappingprofiles] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
