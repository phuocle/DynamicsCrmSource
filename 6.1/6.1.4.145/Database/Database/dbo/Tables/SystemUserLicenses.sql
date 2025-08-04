CREATE TABLE [dbo].[SystemUserLicenses] (
    [SystemUserId]        UNIQUEIDENTIFIER NOT NULL,
    [LicenseId]           UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]       ROWVERSION       NULL,
    [SystemUserLicenseId] UNIQUEIDENTIFIER CONSTRAINT [DF_SystemUserLicenses_SystemUserLicenseId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemUserLicenses] PRIMARY KEY CLUSTERED ([SystemUserLicenseId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SystemUserLicenses] UNIQUE NONCLUSTERED ([SystemUserId] ASC, [LicenseId] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_license_system_users]
    ON [dbo].[SystemUserLicenses]([LicenseId] ASC) WITH (FILLFACTOR = 80);

