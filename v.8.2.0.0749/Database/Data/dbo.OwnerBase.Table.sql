USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[OwnerBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OwnerBase](
	[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_OwnerBase_OwnerIdType]  DEFAULT ((8)),
	[OwnerId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](160) NULL,
	[VersionNumber] [timestamp] NULL,
	[YomiName] [nvarchar](160) NULL,
 CONSTRAINT [cndx_PrimaryKey_Owner] PRIMARY KEY CLUSTERED 
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[OwnerBase] ([OwnerIdType], [OwnerId], [Name], [YomiName]) VALUES (9, N'c7acfcbe-f31d-e711-80d3-00155d00662d', N'D365', NULL)
INSERT [dbo].[OwnerBase] ([OwnerIdType], [OwnerId], [Name], [YomiName]) VALUES (8, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'CRM Admin', N'CRM Admin')
INSERT [dbo].[OwnerBase] ([OwnerIdType], [OwnerId], [Name], [YomiName]) VALUES (8, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'SYSTEM', NULL)
INSERT [dbo].[OwnerBase] ([OwnerIdType], [OwnerId], [Name], [YomiName]) VALUES (8, N'627622a6-b9c2-4b57-99a5-83218bf7c431', N'INTEGRATION', NULL)
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OwnerBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
