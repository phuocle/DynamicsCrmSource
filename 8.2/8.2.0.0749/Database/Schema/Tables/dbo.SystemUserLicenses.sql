CREATE TABLE [dbo].[SystemUserLicenses]
(
[SystemUserId] [uniqueidentifier] NOT NULL,
[LicenseId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[SystemUserLicenseId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SystemUserLicenses_SystemUserLicenseId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserLicenses] ADD CONSTRAINT [cndx_PrimaryKey_SystemUserLicenses] PRIMARY KEY CLUSTERED  ([SystemUserLicenseId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_license_system_users] ON [dbo].[SystemUserLicenses] ([LicenseId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserLicenses] ADD CONSTRAINT [UQ_SystemUserLicenses] UNIQUE NONCLUSTERED  ([SystemUserId], [LicenseId]) ON [PRIMARY]
GO
