USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[Attachment]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Attachment](
	[VersionNumber] [timestamp] NULL,
	[MimeType] [nvarchar](256) NULL,
	[Body] [varchar](max) NULL,
	[Subject] [nvarchar](2000) NULL,
	[FileName] [nvarchar](255) NULL,
	[FileSize] [int] NULL,
	[AttachmentId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_Attachment] PRIMARY KEY CLUSTERED 
(
	[AttachmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[Attachment]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
