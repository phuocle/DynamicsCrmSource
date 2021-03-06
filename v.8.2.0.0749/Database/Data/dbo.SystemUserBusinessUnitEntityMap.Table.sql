USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SystemUserBusinessUnitEntityMap]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemUserBusinessUnitEntityMap](
	[ReadPrivilegeDepth] [int] NULL,
	[SystemUserBusinessUnitEntityMapId] [uniqueidentifier] NOT NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[SystemUserId] [uniqueidentifier] NOT NULL,
	[BusinessUnitId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL
) ON [PRIMARY]

GO
/****** Object:  Index [cndx_Cover]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE CLUSTERED INDEX [cndx_Cover] ON [dbo].[SystemUserBusinessUnitEntityMap]
(
	[SystemUserId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_PrimaryKey_SystemUserBusinessUnitEntityMap]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SystemUserBusinessUnitEntityMap] ADD  CONSTRAINT [ndx_PrimaryKey_SystemUserBusinessUnitEntityMap] PRIMARY KEY NONCLUSTERED 
(
	[SystemUserBusinessUnitEntityMapId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserBusinessUnitEntityMap]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SystemUserBusinessUnitEntityMap]
(
	[SystemUserId] ASC,
	[BusinessUnitId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserBusinessUnitEntityMap] ADD  CONSTRAINT [DF_SystemUserBusinessUnitEntityMap_SystemUserBusinessUnitEntityMapId]  DEFAULT (newid()) FOR [SystemUserBusinessUnitEntityMapId]
GO
ALTER TABLE [dbo].[SystemUserBusinessUnitEntityMap]  WITH CHECK ADD  CONSTRAINT [systemuserbusinessunitentitymap_businessunitid_businessunit] FOREIGN KEY([BusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SystemUserBusinessUnitEntityMap] CHECK CONSTRAINT [systemuserbusinessunitentitymap_businessunitid_businessunit]
GO
ALTER TABLE [dbo].[SystemUserBusinessUnitEntityMap]  WITH CHECK ADD  CONSTRAINT [systemuserbusinessunitentitymap_systemuserid_systemuser] FOREIGN KEY([SystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SystemUserBusinessUnitEntityMap] CHECK CONSTRAINT [systemuserbusinessunitentitymap_systemuserid_systemuser]
GO
