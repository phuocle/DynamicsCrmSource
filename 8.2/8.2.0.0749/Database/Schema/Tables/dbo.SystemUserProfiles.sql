CREATE TABLE [dbo].[SystemUserProfiles]
(
[SystemUserId] [uniqueidentifier] NOT NULL,
[FieldSecurityProfileId] [uniqueidentifier] NOT NULL,
[SystemUserProfileId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SystemUserProfiles_SystemUserProfileId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserProfiles] ADD CONSTRAINT [cndx_PrimaryKey_SystemUserProfiles] PRIMARY KEY CLUSTERED  ([SystemUserProfileId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_profile_system_users] ON [dbo].[SystemUserProfiles] ([FieldSecurityProfileId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserProfiles] ADD CONSTRAINT [UQ_SystemUserProfiles] UNIQUE NONCLUSTERED  ([SystemUserId], [FieldSecurityProfileId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserProfiles] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserProfiles] ADD CONSTRAINT [systemuser_systemuserprofiles] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
