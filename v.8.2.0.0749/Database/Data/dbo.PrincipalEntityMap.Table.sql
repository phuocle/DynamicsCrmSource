USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PrincipalEntityMap]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PrincipalEntityMap](
	[ObjectTypeCode] [int] NOT NULL,
	[PrincipalId] [uniqueidentifier] NOT NULL,
	[PrincipalEntityMapId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PrincipalEntityMap_PrincipalEntityMapId]  DEFAULT (newid()),
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_PrincipalEntityMap] PRIMARY KEY CLUSTERED 
(
	[PrincipalEntityMapId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[PrincipalEntityMap] ([ObjectTypeCode], [PrincipalId], [PrincipalEntityMapId]) VALUES (1031, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'29f6a0b7-697e-45e0-b4e6-869cb2441ec8')
INSERT [dbo].[PrincipalEntityMap] ([ObjectTypeCode], [PrincipalId], [PrincipalEntityMapId]) VALUES (1112, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'736b5de8-d41c-4396-971b-a63670a2aa20')
INSERT [dbo].[PrincipalEntityMap] ([ObjectTypeCode], [PrincipalId], [PrincipalEntityMapId]) VALUES (2500, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'a9bd983d-31a7-4520-9e11-0bae6b3e410f')
INSERT [dbo].[PrincipalEntityMap] ([ObjectTypeCode], [PrincipalId], [PrincipalEntityMapId]) VALUES (2501, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'2bf31923-7bfc-4764-9147-9e51b913d223')
INSERT [dbo].[PrincipalEntityMap] ([ObjectTypeCode], [PrincipalId], [PrincipalEntityMapId]) VALUES (4120, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'64b4eed8-f1bf-47b0-9fd0-e2c16f5ef277')
INSERT [dbo].[PrincipalEntityMap] ([ObjectTypeCode], [PrincipalId], [PrincipalEntityMapId]) VALUES (4230, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'17b732f9-a3e4-4602-b7b0-1ed76745c6d8')
INSERT [dbo].[PrincipalEntityMap] ([ObjectTypeCode], [PrincipalId], [PrincipalEntityMapId]) VALUES (7001, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'f13e6f0f-ba6c-4f9b-aaec-17f3681e803d')
INSERT [dbo].[PrincipalEntityMap] ([ObjectTypeCode], [PrincipalId], [PrincipalEntityMapId]) VALUES (9973, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'03f51547-bc36-43ce-87d6-00ba89eea102')
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PrincipalEntityMap]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[PrincipalEntityMap]
(
	[PrincipalId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrincipalEntityMap]  WITH CHECK ADD  CONSTRAINT [owner_principalentitymap] FOREIGN KEY([PrincipalId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[PrincipalEntityMap] CHECK CONSTRAINT [owner_principalentitymap]
GO
