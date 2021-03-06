USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UserEntityInstanceDataBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserEntityInstanceDataBase](
	[CommonStart] [datetime] NULL,
	[ReminderTime] [datetime] NULL,
	[ToDoTitle] [nvarchar](2000) NULL,
	[FlagRequest] [nvarchar](50) NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ToDoOrdinalDate] [datetime] NULL,
	[DueDate] [datetime] NULL,
	[FlagStatus] [int] NULL,
	[FlagDueBy] [datetime] NULL,
	[ReminderSet] [bit] NULL,
	[ObjectId] [uniqueidentifier] NULL,
	[ToDoItemFlags] [int] NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[PersonalCategories] [nvarchar](max) NULL,
	[ToDoSubOrdinal] [nvarchar](50) NULL,
	[UserEntityInstanceDataId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CommonEnd] [datetime] NULL,
	[StartTime] [datetime] NULL,
	[OwnerIdType] [int] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Security]    Script Date: 4/10/2017 9:59:21 PM ******/
CREATE CLUSTERED INDEX [fndx_Security] ON [dbo].[UserEntityInstanceDataBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_PrimaryKey_UserEntityInstanceData]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[UserEntityInstanceDataBase] ADD  CONSTRAINT [ndx_PrimaryKey_UserEntityInstanceData] PRIMARY KEY NONCLUSTERED 
(
	[UserEntityInstanceDataId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserEntityInstanceDataBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ObjectIdTypeCode]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_ObjectIdTypeCode] ON [dbo].[UserEntityInstanceDataBase]
(
	[ObjectId] ASC,
	[ObjectTypeCode] ASC,
	[OwnerId] ASC,
	[OwnerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase] ADD  CONSTRAINT [DF_UserEntityInstanceDataBase_ReminderSet]  DEFAULT ((0)) FOR [ReminderSet]
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase] ADD  CONSTRAINT [DF_UserEntityInstanceDataBase_ObjectTypeCode]  DEFAULT ((0)) FOR [ObjectTypeCode]
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase] ADD  CONSTRAINT [DF_UserEntityInstanceDataBase_UserEntityInstanceDataId]  DEFAULT (newid()) FOR [UserEntityInstanceDataId]
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase] ADD  CONSTRAINT [DF_UserEntityInstanceDataBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase] ADD  CONSTRAINT [DF_UserEntityInstanceDataBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase]  WITH CHECK ADD  CONSTRAINT [owner_userentityinstancedata] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase] CHECK CONSTRAINT [owner_userentityinstancedata]
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase]  WITH CHECK ADD  CONSTRAINT [userentityinstancedata_businessunit] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase] CHECK CONSTRAINT [userentityinstancedata_businessunit]
GO
