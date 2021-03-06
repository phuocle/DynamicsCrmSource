USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ImportLogBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ImportLogBase](
	[ModifiedBy] [uniqueidentifier] NULL,
	[SequenceNumber] [int] NOT NULL,
	[LineNumber] [int] NULL,
	[AdditionalInfo] [nvarchar](max) NULL,
	[LogPhaseCode] [int] NULL,
	[StateCode] [int] NOT NULL CONSTRAINT [DF_ImportLogBase_StateCode]  DEFAULT ((0)),
	[ErrorNumber] [int] NULL,
	[StatusCode] [int] NOT NULL CONSTRAINT [DF_ImportLogBase_StatusCode]  DEFAULT ((1)),
	[CreatedOn] [datetime] NOT NULL,
	[ImportLogId] [uniqueidentifier] NOT NULL,
	[ErrorDescription] [nvarchar](512) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NOT NULL,
	[HeaderColumn] [nvarchar](max) NULL,
	[ColumnValue] [nvarchar](max) NULL,
	[ImportDataId] [uniqueidentifier] NULL,
	[ImportFileId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ImportLogBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000'),
	[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ImportLogBase_OwnerIdType]  DEFAULT ((8)),
 CONSTRAINT [cndx_PrimaryKey_ImportLog] PRIMARY KEY CLUSTERED 
(
	[ImportLogId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[ImportLogBase] ([ModifiedBy], [SequenceNumber], [LineNumber], [AdditionalInfo], [LogPhaseCode], [StateCode], [ErrorNumber], [StatusCode], [CreatedOn], [ImportLogId], [ErrorDescription], [CreatedBy], [OwningBusinessUnit], [ModifiedOn], [HeaderColumn], [ColumnValue], [ImportDataId], [ImportFileId], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [OwnerId], [OwnerIdType]) VALUES (NULL, 1, NULL, N'907BB5EF0D4FFBDACC378A71987FBF5397FAD21E', NULL, 1, NULL, 1, CAST(N'2017-04-10 14:26:21.197' AS DateTime), N'6cfa32b0-eda3-4565-88b4-264272a6ef32', NULL, NULL, NULL, CAST(N'2017-04-10 14:26:21.197' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 8)
INSERT [dbo].[ImportLogBase] ([ModifiedBy], [SequenceNumber], [LineNumber], [AdditionalInfo], [LogPhaseCode], [StateCode], [ErrorNumber], [StatusCode], [CreatedOn], [ImportLogId], [ErrorDescription], [CreatedBy], [OwningBusinessUnit], [ModifiedOn], [HeaderColumn], [ColumnValue], [ImportDataId], [ImportFileId], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [OwnerId], [OwnerIdType]) VALUES (NULL, 1, NULL, N'BE57ADAD922A86F7467318805CA4A76CAAB5920B', NULL, 1, NULL, 1, CAST(N'2017-04-10 14:22:42.837' AS DateTime), N'c88fe1fd-5d4d-441c-81be-ffa52e096c9b', NULL, NULL, NULL, CAST(N'2017-04-10 14:22:42.837' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 8)
/****** Object:  Index [fndx_for_cascaderelationship_BusinessUnit_ImportLogs]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportLogs] ON [dbo].[ImportLogBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_importdata]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_importdata] ON [dbo].[ImportLogBase]
(
	[ImportDataId] ASC
)
WHERE ([ImportDataId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_importfile]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_importfile] ON [dbo].[ImportLogBase]
(
	[ImportFileId] ASC
)
WHERE ([ImportFileId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ImportLogBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ImportLogBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportLogBase]  WITH CHECK ADD  CONSTRAINT [BusinessUnit_ImportLogs] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ImportLogBase] CHECK CONSTRAINT [BusinessUnit_ImportLogs]
GO
ALTER TABLE [dbo].[ImportLogBase]  WITH CHECK ADD  CONSTRAINT [ImportLog_ImportData] FOREIGN KEY([ImportDataId])
REFERENCES [dbo].[ImportDataBase] ([ImportDataId])
GO
ALTER TABLE [dbo].[ImportLogBase] CHECK CONSTRAINT [ImportLog_ImportData]
GO
ALTER TABLE [dbo].[ImportLogBase]  WITH CHECK ADD  CONSTRAINT [ImportLog_ImportFile] FOREIGN KEY([ImportFileId])
REFERENCES [dbo].[ImportFileBase] ([ImportFileId])
GO
ALTER TABLE [dbo].[ImportLogBase] CHECK CONSTRAINT [ImportLog_ImportFile]
GO
ALTER TABLE [dbo].[ImportLogBase]  WITH CHECK ADD  CONSTRAINT [owner_importlogs] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ImportLogBase] CHECK CONSTRAINT [owner_importlogs]
GO
