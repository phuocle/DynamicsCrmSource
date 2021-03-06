USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SystemUserManagerMap]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemUserManagerMap](
	[HierarchyLevel] [int] NOT NULL,
	[SystemUserManagerMapId] [uniqueidentifier] NOT NULL,
	[ParentSystemUserId] [uniqueidentifier] NOT NULL,
	[SystemUserId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL
) ON [PRIMARY]

GO
/****** Object:  Index [cndx_SystemUserManagerMap]    Script Date: 4/10/2017 9:59:18 PM ******/
CREATE UNIQUE CLUSTERED INDEX [cndx_SystemUserManagerMap] ON [dbo].[SystemUserManagerMap]
(
	[ParentSystemUserId] ASC,
	[SystemUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserManagerMap]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserManagerMap] ADD  CONSTRAINT [DF_SystemUserManagerMap_HierarchyLevel]  DEFAULT ((0)) FOR [HierarchyLevel]
GO
