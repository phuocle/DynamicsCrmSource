CREATE TABLE [dbo].[TeamProfiles] (
    [VersionNumber]          ROWVERSION       NULL,
    [TeamProfileId]          UNIQUEIDENTIFIER CONSTRAINT [DF_TeamProfiles_TeamProfileId] DEFAULT (newid()) NOT NULL,
    [FieldSecurityProfileId] UNIQUEIDENTIFIER NOT NULL,
    [TeamId]                 UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_TeamProfiles] PRIMARY KEY CLUSTERED ([TeamProfileId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [team_teamprofiles] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[TeamBase] ([TeamId])
);


GO
ALTER TABLE [dbo].[TeamProfiles] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TeamProfiles]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_TeamIdFieldSecurityProfileId]
    ON [dbo].[TeamProfiles]([TeamId] ASC, [FieldSecurityProfileId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_profile_teamprofiles]
    ON [dbo].[TeamProfiles]([FieldSecurityProfileId] ASC) WITH (FILLFACTOR = 80);

