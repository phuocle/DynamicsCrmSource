USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SystemUserSyncMappingProfiles]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemUserSyncMappingProfiles](
	[SyncAttributeMappingProfileId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[SystemUserId] [uniqueidentifier] NOT NULL,
	[SystemUserSyncMappingProfileId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[SystemUserSyncMappingProfiles] ADD  CONSTRAINT [DF_SystemUserSyncMappingProfiles_SystemUserSyncMappingProfileId]  DEFAULT (newid()) FOR [SystemUserSyncMappingProfileId]
GO
ALTER TABLE [dbo].[SystemUserSyncMappingProfiles]  WITH CHECK ADD  CONSTRAINT [systemuser_systemusersyncmappingprofiles] FOREIGN KEY([SystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SystemUserSyncMappingProfiles] CHECK CONSTRAINT [systemuser_systemusersyncmappingprofiles]
GO
