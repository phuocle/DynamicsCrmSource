CREATE TABLE [dbo].[License] (
    [LicenseId]                 UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [LicenseKey]                NVARCHAR (100)   NOT NULL,
    [InstalledOn]               DATETIME         NOT NULL,
    [LicenseType]               UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_License] PRIMARY KEY CLUSTERED ([LicenseId] ASC) WITH (FILLFACTOR = 80)
);

