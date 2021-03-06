USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TeamRoles]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TeamRoles](
	[RoleId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[TeamId] [uniqueidentifier] NOT NULL,
	[TeamRoleId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_TeamRoles] PRIMARY KEY CLUSTERED 
(
	[TeamRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TeamRoles]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_role_teamroles]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_teamroles] ON [dbo].[TeamRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Unique_TeamIdRoleId]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_TeamIdRoleId] ON [dbo].[TeamRoles]
(
	[TeamId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamRoles] ADD  CONSTRAINT [DF_TeamRoles_TeamRoleId]  DEFAULT (newid()) FOR [TeamRoleId]
GO
ALTER TABLE [dbo].[TeamRoles]  WITH CHECK ADD  CONSTRAINT [role_teamroles] FOREIGN KEY([RoleId])
REFERENCES [dbo].[RoleBaseIds] ([RoleId])
GO
ALTER TABLE [dbo].[TeamRoles] CHECK CONSTRAINT [role_teamroles]
GO
ALTER TABLE [dbo].[TeamRoles]  WITH CHECK ADD  CONSTRAINT [team_teamroles] FOREIGN KEY([TeamId])
REFERENCES [dbo].[TeamBase] ([TeamId])
GO
ALTER TABLE [dbo].[TeamRoles] CHECK CONSTRAINT [team_teamroles]
GO
