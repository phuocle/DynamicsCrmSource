USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[OfficeGraphDocumentBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OfficeGraphDocumentBase](
	[ReadUrl] [nvarchar](100) NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ViewCount] [int] NULL,
	[FileType] [nvarchar](2000) NULL,
	[Rank] [int] NULL,
	[CreatedBy] [nvarchar](2000) NULL,
	[FileExtension] [nvarchar](2000) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[AuthorNames] [nvarchar](2000) NULL,
	[DocumentPreviewMetadata] [nvarchar](200) NULL,
	[ModifiedBy] [nvarchar](2000) NULL,
	[CreatedTime] [datetime] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[QueryType] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[DocumentLastModifiedOn] [datetime] NULL,
	[DocumentId] [nvarchar](100) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[PreviewImageUrl] [nvarchar](2000) NULL,
	[WebLocationUrl] [nvarchar](2000) NULL,
	[SecondaryFileExtension] [nvarchar](2000) NULL,
	[VersionNumber] [timestamp] NULL,
	[OfficeGraphDocumentId] [uniqueidentifier] NOT NULL,
	[DocumentLastModifiedBy] [nvarchar](100) NULL,
	[SiteUrl] [nvarchar](100) NULL,
	[SiteTitle] [nvarchar](100) NULL,
	[Title] [nvarchar](100) NULL,
	[ModifiedTime] [datetime] NULL,
 CONSTRAINT [PK_officegraphdocumentBase] PRIMARY KEY CLUSTERED 
(
	[OfficeGraphDocumentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OfficeGraphDocumentBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[OfficeGraphDocumentBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_title]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_title] ON [dbo].[OfficeGraphDocumentBase]
(
	[Title] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OfficeGraphDocumentBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_officegraphdocument] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[OfficeGraphDocumentBase] CHECK CONSTRAINT [TransactionCurrency_officegraphdocument]
GO
