USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ImportDataBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ImportDataBase](
	[CreatedOn] [datetime] NOT NULL,
	[LineNumber] [int] NULL,
	[RecordId] [uniqueidentifier] NULL,
	[Data] [nvarchar](max) NULL,
	[ModifiedOn] [datetime] NOT NULL,
	[ImportFileId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ImportDataId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[HasError] [bit] NULL,
	[StatusCode] [int] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ErrorType] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_ImportData] PRIMARY KEY CLUSTERED 
(
	[ImportDataId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_fileId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_fileId] ON [dbo].[ImportDataBase]
(
	[ImportFileId] ASC
)
WHERE ([ImportFileId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_BusinessUnit_ImportData]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportData] ON [dbo].[ImportDataBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ImportDataBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_idAndHasError]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_idAndHasError] ON [dbo].[ImportDataBase]
(
	[ImportDataId] ASC,
	[HasError] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_idAndLinenumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_idAndLinenumber] ON [dbo].[ImportDataBase]
(
	[ImportDataId] ASC,
	[LineNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ImportDataBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportDataBase] ADD  CONSTRAINT [DF_ImportDataBase_StateCode]  DEFAULT ((0)) FOR [StateCode]
GO
ALTER TABLE [dbo].[ImportDataBase] ADD  CONSTRAINT [DF_ImportDataBase_HasError]  DEFAULT ((0)) FOR [HasError]
GO
ALTER TABLE [dbo].[ImportDataBase] ADD  CONSTRAINT [DF_ImportDataBase_StatusCode]  DEFAULT ((1)) FOR [StatusCode]
GO
ALTER TABLE [dbo].[ImportDataBase] ADD  CONSTRAINT [DF_ImportDataBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[ImportDataBase] ADD  CONSTRAINT [DF_ImportDataBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ImportDataBase]  WITH CHECK ADD  CONSTRAINT [BusinessUnit_ImportData] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ImportDataBase] CHECK CONSTRAINT [BusinessUnit_ImportData]
GO
ALTER TABLE [dbo].[ImportDataBase]  WITH CHECK ADD  CONSTRAINT [ImportFile_ImportData] FOREIGN KEY([ImportFileId])
REFERENCES [dbo].[ImportFileBase] ([ImportFileId])
GO
ALTER TABLE [dbo].[ImportDataBase] CHECK CONSTRAINT [ImportFile_ImportData]
GO
ALTER TABLE [dbo].[ImportDataBase]  WITH CHECK ADD  CONSTRAINT [owner_importdatas] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ImportDataBase] CHECK CONSTRAINT [owner_importdatas]
GO
