USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PrincipalObjectAttributeAccessBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PrincipalObjectAttributeAccessBase](
	[ObjectId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[PrincipalId] [uniqueidentifier] NOT NULL,
	[AttributeId] [uniqueidentifier] NOT NULL,
	[ReadAccess] [bit] NOT NULL,
	[PrincipalObjectAttributeAccessId] [uniqueidentifier] NOT NULL,
	[UpdateAccess] [bit] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[PrincipalIdType] [int] NOT NULL,
	[ObjectTypeCode] [int] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Index [cndx_Security]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE UNIQUE CLUSTERED INDEX [cndx_Security] ON [dbo].[PrincipalObjectAttributeAccessBase]
(
	[PrincipalId] ASC,
	[AttributeId] ASC,
	[ObjectId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_PrimaryKey_PrincipalObjectAttributeAccess]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[PrincipalObjectAttributeAccessBase] ADD  CONSTRAINT [ndx_PrimaryKey_PrincipalObjectAttributeAccess] PRIMARY KEY NONCLUSTERED 
(
	[PrincipalObjectAttributeAccessId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PrincipalObjectAttributeAccessBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_SecuredEntity_PrincipalObjectAttributeAccess]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_SecuredEntity_PrincipalObjectAttributeAccess] ON [dbo].[PrincipalObjectAttributeAccessBase]
(
	[ObjectId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_team_principalobjectattributeaccess_principalid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_team_principalobjectattributeaccess_principalid] ON [dbo].[PrincipalObjectAttributeAccessBase]
(
	[PrincipalId] ASC,
	[PrincipalIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrincipalObjectAttributeAccessBase] ADD  CONSTRAINT [DF_PrincipalObjectAttributeAccessBase_ReadAccess]  DEFAULT ((0)) FOR [ReadAccess]
GO
ALTER TABLE [dbo].[PrincipalObjectAttributeAccessBase] ADD  CONSTRAINT [DF_PrincipalObjectAttributeAccessBase_PrincipalObjectAttributeAccessId]  DEFAULT (newid()) FOR [PrincipalObjectAttributeAccessId]
GO
ALTER TABLE [dbo].[PrincipalObjectAttributeAccessBase] ADD  CONSTRAINT [DF_PrincipalObjectAttributeAccessBase_UpdateAccess]  DEFAULT ((0)) FOR [UpdateAccess]
GO
