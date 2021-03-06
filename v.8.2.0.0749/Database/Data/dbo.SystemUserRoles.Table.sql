USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SystemUserRoles]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemUserRoles](
	[SystemUserId] [uniqueidentifier] NOT NULL,
	[RoleId] [uniqueidentifier] NOT NULL,
	[SystemUserRoleId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SystemUserRoles_SystemUserRoleId]  DEFAULT (newid()),
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_SystemUserRoles] PRIMARY KEY CLUSTERED 
(
	[SystemUserRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[SystemUserRoles] ([SystemUserId], [RoleId], [SystemUserRoleId]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'3eb1fcbe-f31d-e711-80d3-00155d00662d', N'e2f5ecca-f31d-e711-80d3-00155d00662d')
/****** Object:  Index [UQ_SystemUserRoles]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SystemUserRoles] ADD  CONSTRAINT [UQ_SystemUserRoles] UNIQUE NONCLUSTERED 
(
	[SystemUserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserRoles]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_role_system_users]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_system_users] ON [dbo].[SystemUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserRoles]  WITH CHECK ADD  CONSTRAINT [role_system_users] FOREIGN KEY([RoleId])
REFERENCES [dbo].[RoleBaseIds] ([RoleId])
GO
ALTER TABLE [dbo].[SystemUserRoles] CHECK CONSTRAINT [role_system_users]
GO
ALTER TABLE [dbo].[SystemUserRoles]  WITH CHECK ADD  CONSTRAINT [system_user_roles] FOREIGN KEY([SystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SystemUserRoles] CHECK CONSTRAINT [system_user_roles]
GO
