CREATE TABLE [dbo].[License] (
    [LicenseId]                 UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [LicenseType]               UNIQUEIDENTIFIER NULL,
    [InstalledOn]               DATETIME         NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [LicenseKey]                NVARCHAR (100)   NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_License] PRIMARY KEY CLUSTERED ([LicenseId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[License] SET (LOCK_ESCALATION = DISABLE);

