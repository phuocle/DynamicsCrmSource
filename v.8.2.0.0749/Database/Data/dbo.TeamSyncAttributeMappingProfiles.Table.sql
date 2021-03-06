USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TeamSyncAttributeMappingProfiles]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TeamSyncAttributeMappingProfiles](
	[TeamSyncAttributeMappingProfileId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[TeamId] [uniqueidentifier] NOT NULL,
	[SyncAttributeMappingProfileId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TeamSyncAttributeMappingProfiles] ADD  CONSTRAINT [DF_TeamSyncAttributeMappingProfiles_TeamSyncAttributeMappingProfileId]  DEFAULT (newid()) FOR [TeamSyncAttributeMappingProfileId]
GO
ALTER TABLE [dbo].[TeamSyncAttributeMappingProfiles]  WITH CHECK ADD  CONSTRAINT [team_teamsyncattributemappingprofiles] FOREIGN KEY([TeamId])
REFERENCES [dbo].[TeamBase] ([TeamId])
GO
ALTER TABLE [dbo].[TeamSyncAttributeMappingProfiles] CHECK CONSTRAINT [team_teamsyncattributemappingprofiles]
GO
