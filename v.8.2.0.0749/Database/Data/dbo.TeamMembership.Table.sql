USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TeamMembership]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TeamMembership](
	[TeamId] [uniqueidentifier] NOT NULL,
	[SystemUserId] [uniqueidentifier] NOT NULL,
	[TeamMembershipId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TeamMembership_TeamMembershipId]  DEFAULT (newid()),
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_TeamMembership] PRIMARY KEY CLUSTERED 
(
	[TeamMembershipId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[TeamMembership] ([TeamId], [SystemUserId], [TeamMembershipId]) VALUES (N'c7acfcbe-f31d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'def5ecca-f31d-e711-80d3-00155d00662d')
/****** Object:  Index [UQ_TeamMembership]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[TeamMembership] ADD  CONSTRAINT [UQ_TeamMembership] UNIQUE NONCLUSTERED 
(
	[TeamId] ASC,
	[SystemUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TeamMembership]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_system_user_team_membership]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_system_user_team_membership] ON [dbo].[TeamMembership]
(
	[SystemUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamMembership]  WITH CHECK ADD  CONSTRAINT [system_user_team_membership] FOREIGN KEY([SystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[TeamMembership] CHECK CONSTRAINT [system_user_team_membership]
GO
ALTER TABLE [dbo].[TeamMembership]  WITH CHECK ADD  CONSTRAINT [team_system_users] FOREIGN KEY([TeamId])
REFERENCES [dbo].[TeamBase] ([TeamId])
GO
ALTER TABLE [dbo].[TeamMembership] CHECK CONSTRAINT [team_system_users]
GO
