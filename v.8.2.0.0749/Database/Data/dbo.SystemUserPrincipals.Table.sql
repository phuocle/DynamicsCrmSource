USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SystemUserPrincipals]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemUserPrincipals](
	[SystemUserPrincipalId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SystemUserPrincipals_SystemUserPrincipalId]  DEFAULT (newid()),
	[VersionNumber] [timestamp] NULL,
	[PrincipalId] [uniqueidentifier] NOT NULL,
	[SystemUserId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Index [cndx_SystemUserPrincipals]    Script Date: 4/10/2017 9:59:18 PM ******/
CREATE UNIQUE CLUSTERED INDEX [cndx_SystemUserPrincipals] ON [dbo].[SystemUserPrincipals]
(
	[SystemUserId] ASC,
	[PrincipalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
INSERT [dbo].[SystemUserPrincipals] ([SystemUserPrincipalId], [PrincipalId], [SystemUserId]) VALUES (N'f06b1a63-9211-46e2-ae43-9f33009dc7b5', N'c7acfcbe-f31d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[SystemUserPrincipals] ([SystemUserPrincipalId], [PrincipalId], [SystemUserId]) VALUES (N'8f9be20e-85c5-439c-8374-c94b66927187', N'94f9b696-f31d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[SystemUserPrincipals] ([SystemUserPrincipalId], [PrincipalId], [SystemUserId]) VALUES (N'9705ee5b-0e0f-4b93-bab4-cbf54fc0f19d', N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[SystemUserPrincipals] ([SystemUserPrincipalId], [PrincipalId], [SystemUserId]) VALUES (N'370b16a5-c0fc-47fc-ad20-dd51a9eeec6d', N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d')
/****** Object:  Index [ndx_PrimaryKey_SystemUserPrincipals]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SystemUserPrincipals] ADD  CONSTRAINT [ndx_PrimaryKey_SystemUserPrincipals] PRIMARY KEY NONCLUSTERED 
(
	[SystemUserPrincipalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserPrincipals]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_PrincipalIdSystemUser]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_PrincipalIdSystemUser] ON [dbo].[SystemUserPrincipals]
(
	[PrincipalId] ASC
)
INCLUDE ( 	[SystemUserId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserPrincipals]  WITH CHECK ADD  CONSTRAINT [sup_principalid_systemuser] FOREIGN KEY([SystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SystemUserPrincipals] CHECK CONSTRAINT [sup_principalid_systemuser]
GO
