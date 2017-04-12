CREATE TABLE [dbo].[TeamProfiles]
(
[VersionNumber] [timestamp] NULL,
[TeamProfileId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TeamProfiles_TeamProfileId] DEFAULT (newid()),
[FieldSecurityProfileId] [uniqueidentifier] NOT NULL,
[TeamId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamProfiles] ADD CONSTRAINT [cndx_PrimaryKey_TeamProfiles] PRIMARY KEY CLUSTERED  ([TeamProfileId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_profile_teamprofiles] ON [dbo].[TeamProfiles] ([FieldSecurityProfileId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_TeamIdFieldSecurityProfileId] ON [dbo].[TeamProfiles] ([TeamId], [FieldSecurityProfileId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TeamProfiles] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamProfiles] ADD CONSTRAINT [team_teamprofiles] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[TeamBase] ([TeamId])
GO
