USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SystemUserProfiles]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemUserProfiles](
	[SystemUserId] [uniqueidentifier] NOT NULL,
	[FieldSecurityProfileId] [uniqueidentifier] NOT NULL,
	[SystemUserProfileId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SystemUserProfiles_SystemUserProfileId]  DEFAULT (newid()),
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_SystemUserProfiles] PRIMARY KEY CLUSTERED 
(
	[SystemUserProfileId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[SystemUserProfiles] ([SystemUserId], [FieldSecurityProfileId], [SystemUserProfileId]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'572329c1-a042-4e22-be47-367c6374ea45', N'e1f5ecca-f31d-e711-80d3-00155d00662d')
/****** Object:  Index [UQ_SystemUserProfiles]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SystemUserProfiles] ADD  CONSTRAINT [UQ_SystemUserProfiles] UNIQUE NONCLUSTERED 
(
	[SystemUserId] ASC,
	[FieldSecurityProfileId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserProfiles]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_profile_system_users]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_profile_system_users] ON [dbo].[SystemUserProfiles]
(
	[FieldSecurityProfileId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserProfiles]  WITH CHECK ADD  CONSTRAINT [systemuser_systemuserprofiles] FOREIGN KEY([SystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SystemUserProfiles] CHECK CONSTRAINT [systemuser_systemuserprofiles]
GO
