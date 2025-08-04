CREATE TABLE [dbo].[License]
(
[LicenseId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[LicenseKey] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[InstalledOn] [datetime] NOT NULL,
[LicenseType] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[License] ADD CONSTRAINT [cndx_PrimaryKey_License] PRIMARY KEY CLUSTERED  ([LicenseId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
