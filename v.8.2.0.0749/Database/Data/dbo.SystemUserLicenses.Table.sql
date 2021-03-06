USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SystemUserLicenses]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemUserLicenses](
	[SystemUserId] [uniqueidentifier] NOT NULL,
	[LicenseId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[SystemUserLicenseId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_SystemUserLicenses] PRIMARY KEY CLUSTERED 
(
	[SystemUserLicenseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_SystemUserLicenses]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SystemUserLicenses] ADD  CONSTRAINT [UQ_SystemUserLicenses] UNIQUE NONCLUSTERED 
(
	[SystemUserId] ASC,
	[LicenseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_license_system_users]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_license_system_users] ON [dbo].[SystemUserLicenses]
(
	[LicenseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserLicenses] ADD  CONSTRAINT [DF_SystemUserLicenses_SystemUserLicenseId]  DEFAULT (newid()) FOR [SystemUserLicenseId]
GO
