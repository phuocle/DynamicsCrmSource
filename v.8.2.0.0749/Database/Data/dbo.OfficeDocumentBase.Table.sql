USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[OfficeDocumentBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[OfficeDocumentBase](
	[SHA256] [nvarchar](64) NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[DocumentType] [int] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ObjectId] [uniqueidentifier] NULL,
	[ClientData] [varchar](max) NULL,
	[FileLockState] [int] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](256) NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[FileSize] [int] NULL,
	[Content] [varchar](max) NULL,
	[OfficeDocumentId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[ObjectTypeCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_OfficeDocument] PRIMARY KEY CLUSTERED 
(
	[OfficeDocumentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OfficeDocumentBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_created_on]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_created_on] ON [dbo].[OfficeDocumentBase]
(
	[CreatedOn] ASC
)
INCLUDE ( 	[DocumentType]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OfficeDocumentBase] ADD  CONSTRAINT [DF_OfficeDocumentBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[OfficeDocumentBase] ADD  CONSTRAINT [DF_OfficeDocumentBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[OfficeDocumentBase]  WITH CHECK ADD  CONSTRAINT [owner_officedocument] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[OfficeDocumentBase] CHECK CONSTRAINT [owner_officedocument]
GO
