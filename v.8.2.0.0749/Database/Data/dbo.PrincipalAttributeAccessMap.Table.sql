USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PrincipalAttributeAccessMap]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PrincipalAttributeAccessMap](
	[PrincipalId] [uniqueidentifier] NOT NULL,
	[ReadAccess] [int] NOT NULL CONSTRAINT [DF_PrincipalAttributeAccessMap_ReadAccess]  DEFAULT ((0)),
	[CreateAccess] [int] NOT NULL CONSTRAINT [DF_PrincipalAttributeAccessMap_CreateAccess]  DEFAULT ((0)),
	[AttributeId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[UpdateAccess] [int] NOT NULL CONSTRAINT [DF_PrincipalAttributeAccessMap_UpdateAccess]  DEFAULT ((0)),
	[PrincipalAttributeAccessMapId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PrincipalAttributeAccessMap_PrincipalAttributeAccessMapId]  DEFAULT (newid())
) ON [PRIMARY]

GO
/****** Object:  Index [cndx_Security]    Script Date: 4/10/2017 9:59:20 PM ******/
CREATE UNIQUE CLUSTERED INDEX [cndx_Security] ON [dbo].[PrincipalAttributeAccessMap]
(
	[PrincipalId] ASC,
	[AttributeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
INSERT [dbo].[PrincipalAttributeAccessMap] ([PrincipalId], [ReadAccess], [CreateAccess], [AttributeId], [UpdateAccess], [PrincipalAttributeAccessMapId]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', 4, 4, N'306845ef-446a-42e5-8df8-11c31bafaded', 4, N'f5b8ea00-b1c4-4b54-a885-5ebabd75e29b')
INSERT [dbo].[PrincipalAttributeAccessMap] ([PrincipalId], [ReadAccess], [CreateAccess], [AttributeId], [UpdateAccess], [PrincipalAttributeAccessMapId]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', 0, 4, N'4cfdc3df-aa2a-4929-844d-ac6c7f9233aa', 4, N'a90c2b49-554c-4e99-9a0a-798ad1ea23fe')
INSERT [dbo].[PrincipalAttributeAccessMap] ([PrincipalId], [ReadAccess], [CreateAccess], [AttributeId], [UpdateAccess], [PrincipalAttributeAccessMapId]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', 4, 0, N'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd', 0, N'b0c0deb6-211a-407c-bcbc-87f041e4f906')
/****** Object:  Index [ndx_PrimaryKey_PrincipalAttributeAccessMap]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[PrincipalAttributeAccessMap] ADD  CONSTRAINT [ndx_PrimaryKey_PrincipalAttributeAccessMap] PRIMARY KEY NONCLUSTERED 
(
	[PrincipalAttributeAccessMapId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PrincipalAttributeAccessMap]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrincipalAttributeAccessMap]  WITH CHECK ADD  CONSTRAINT [owner_principalattributeaccessmap] FOREIGN KEY([PrincipalId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[PrincipalAttributeAccessMap] CHECK CONSTRAINT [owner_principalattributeaccessmap]
GO
