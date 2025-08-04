CREATE TABLE [dbo].[SystemUserProfiles] (
    [SystemUserId]           UNIQUEIDENTIFIER NOT NULL,
    [FieldSecurityProfileId] UNIQUEIDENTIFIER NOT NULL,
    [SystemUserProfileId]    UNIQUEIDENTIFIER CONSTRAINT [DF_SystemUserProfiles_SystemUserProfileId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]          ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemUserProfiles] PRIMARY KEY CLUSTERED ([SystemUserProfileId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [systemuser_systemuserprofiles] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_SystemUserProfiles] UNIQUE NONCLUSTERED ([SystemUserId] ASC, [FieldSecurityProfileId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_profile_system_users]
    ON [dbo].[SystemUserProfiles]([FieldSecurityProfileId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemUserProfiles]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

