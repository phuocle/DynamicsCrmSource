CREATE TABLE [dbo].[SystemUserProfiles] (
    [SystemUserProfileId]    UNIQUEIDENTIFIER CONSTRAINT [DF_SystemUserProfiles_SystemUserProfileId] DEFAULT (newid()) NOT NULL,
    [SystemUserId]           UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [FieldSecurityProfileId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemUserProfiles] PRIMARY KEY CLUSTERED ([SystemUserProfileId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [systemuser_systemuserprofiles] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [UQ_SystemUserProfiles] UNIQUE NONCLUSTERED ([SystemUserId] ASC, [FieldSecurityProfileId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SystemUserProfiles] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemUserProfiles]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_profile_system_users]
    ON [dbo].[SystemUserProfiles]([FieldSecurityProfileId] ASC) WITH (FILLFACTOR = 80);

