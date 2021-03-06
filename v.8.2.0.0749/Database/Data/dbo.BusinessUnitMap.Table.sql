USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BusinessUnitMap]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BusinessUnitMap](
	[BusinessUnitMapId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_BusinessUnitMap_BusinessUnitMapId]  DEFAULT (newid()),
	[VersionNumber] [timestamp] NULL,
	[SubBusinessId] [uniqueidentifier] NOT NULL,
	[BusinessId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Index [cndx_Cover]    Script Date: 4/10/2017 9:59:22 PM ******/
CREATE UNIQUE CLUSTERED INDEX [cndx_Cover] ON [dbo].[BusinessUnitMap]
(
	[BusinessId] ASC,
	[SubBusinessId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
INSERT [dbo].[BusinessUnitMap] ([BusinessUnitMapId], [SubBusinessId], [BusinessId]) VALUES (N'7c8a1457-e12f-46f2-8ae8-93b384b50bbf', N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'c6acfcbe-f31d-e711-80d3-00155d00662d')
/****** Object:  Index [ndx_PrimaryKey_BusinessUnitMap]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[BusinessUnitMap] ADD  CONSTRAINT [ndx_PrimaryKey_BusinessUnitMap] PRIMARY KEY NONCLUSTERED 
(
	[BusinessUnitMapId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BusinessUnitMap]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_business_map_constraint]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_map_constraint] ON [dbo].[BusinessUnitMap]
(
	[SubBusinessId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BusinessUnitMap]  WITH CHECK ADD  CONSTRAINT [bizmap_businessid_businessunit] FOREIGN KEY([BusinessId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BusinessUnitMap] CHECK CONSTRAINT [bizmap_businessid_businessunit]
GO
ALTER TABLE [dbo].[BusinessUnitMap]  WITH CHECK ADD  CONSTRAINT [bizmap_subbusinessid_businessunit] FOREIGN KEY([SubBusinessId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BusinessUnitMap] CHECK CONSTRAINT [bizmap_subbusinessid_businessunit]
GO
