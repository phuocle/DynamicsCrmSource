USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PrincipalObjectAccessReadSnapshot]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PrincipalObjectAccessReadSnapshot](
	[ObjectTypeCode] [int] NOT NULL,
	[Count] [bigint] NOT NULL,
	[PrincipalId] [uniqueidentifier] NOT NULL,
	[PrincipalObjectAccessReadSnapshotId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_PrincipalObjectAccessReadSnapshotId]  DEFAULT (newid()),
	[TeamPrincipalsCount] [bigint] NOT NULL CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_TeamPrincipalsCount]  DEFAULT ((0)),
	[ChildUserPrincipalsCount] [bigint] NOT NULL CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_ChildUserPrincipalsCount]  DEFAULT ((0)),
	[RecordCountForOwnerIDPercentOfTotalRows] [int] NULL,
	[RecordCountForOwnerID] [bigint] NULL,
	[RecordCountForOwningBU] [bigint] NULL,
	[RecordCountForOwningBUPercentOfTotalRows] [int] NULL,
	[CountPercentOfTotalRows] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Index [cndx_PrincipalObjectAccessReadSnapshot_PrincipalObject]    Script Date: 4/10/2017 9:59:22 PM ******/
CREATE UNIQUE CLUSTERED INDEX [cndx_PrincipalObjectAccessReadSnapshot_PrincipalObject] ON [dbo].[PrincipalObjectAccessReadSnapshot]
(
	[PrincipalId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
INSERT [dbo].[PrincipalObjectAccessReadSnapshot] ([ObjectTypeCode], [Count], [PrincipalId], [PrincipalObjectAccessReadSnapshotId], [TeamPrincipalsCount], [ChildUserPrincipalsCount], [RecordCountForOwnerIDPercentOfTotalRows], [RecordCountForOwnerID], [RecordCountForOwningBU], [RecordCountForOwningBUPercentOfTotalRows], [CountPercentOfTotalRows]) VALUES (2010, 24, N'94f9b696-f31d-e711-80d3-00155d00662d', N'b9b0f7af-294b-473d-8351-52f45d42fabd', 0, 0, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[PrincipalObjectAccessReadSnapshot] ([ObjectTypeCode], [Count], [PrincipalId], [PrincipalObjectAccessReadSnapshotId], [TeamPrincipalsCount], [ChildUserPrincipalsCount], [RecordCountForOwnerIDPercentOfTotalRows], [RecordCountForOwnerID], [RecordCountForOwningBU], [RecordCountForOwningBUPercentOfTotalRows], [CountPercentOfTotalRows]) VALUES (9100, 54, N'94f9b696-f31d-e711-80d3-00155d00662d', N'23a4628e-49ba-4c11-8145-a3fce2358051', 0, 0, NULL, NULL, NULL, NULL, NULL)
/****** Object:  Index [ndx_PrimaryKey_PrincipalObjectAccessReadSnapshot]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[PrincipalObjectAccessReadSnapshot] ADD  CONSTRAINT [ndx_PrimaryKey_PrincipalObjectAccessReadSnapshot] PRIMARY KEY NONCLUSTERED 
(
	[PrincipalObjectAccessReadSnapshotId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
