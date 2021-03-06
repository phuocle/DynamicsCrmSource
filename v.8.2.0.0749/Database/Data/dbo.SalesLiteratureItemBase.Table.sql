USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SalesLiteratureItemBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[SalesLiteratureItemBase](
	[SalesLiteratureItemId] [uniqueidentifier] NOT NULL,
	[SalesLiteratureId] [uniqueidentifier] NOT NULL,
	[IsCustomerViewable] [bit] NULL,
	[AttachedDocumentUrl] [nvarchar](500) NULL,
	[Title] [nvarchar](200) NULL,
	[MimeType] [nvarchar](256) NULL,
	[AuthorName] [nvarchar](500) NULL,
	[Abstract] [nvarchar](max) NULL,
	[DocumentBody] [varchar](max) NULL,
	[CreatedOn] [datetime] NULL,
	[KeyWords] [nvarchar](max) NULL,
	[FileName] [nvarchar](255) NULL,
	[FileTypeCode] [int] NULL,
	[FileSize] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_SalesLiteratureItem] PRIMARY KEY CLUSTERED 
(
	[SalesLiteratureItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SalesLiteratureItemBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_sales_literature_items]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_items] ON [dbo].[SalesLiteratureItemBase]
(
	[SalesLiteratureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesLiteratureItemBase]  WITH CHECK ADD  CONSTRAINT [sales_literature_items] FOREIGN KEY([SalesLiteratureId])
REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId])
GO
ALTER TABLE [dbo].[SalesLiteratureItemBase] CHECK CONSTRAINT [sales_literature_items]
GO
