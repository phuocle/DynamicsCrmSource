USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RecommendedDocumentBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RecommendedDocumentBase](
	[UTCConversionTimeZoneCode] [int] NULL,
	[FileType] [nvarchar](200) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Location] [nvarchar](200) NULL,
	[RecommendedDocumentId] [uniqueidentifier] NOT NULL,
	[FullName] [nvarchar](160) NULL,
	[ReadUrl] [nvarchar](200) NULL,
	[AbsoluteUrl] [nvarchar](200) NULL,
	[VersionNumber] [timestamp] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[AssociatedRecordName] [nvarchar](160) NULL,
	[CreatedOn] [datetime] NULL,
	[Title] [nvarchar](160) NULL,
	[ContentType] [nvarchar](200) NULL,
	[EditUrl] [nvarchar](200) NULL,
	[Author] [nvarchar](256) NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[IconClassName] [nvarchar](160) NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[Version] [nvarchar](200) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[FileSize] [int] NULL,
	[ExternalDocumentId] [nvarchar](100) NULL,
	[Source] [nvarchar](256) NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ExternalModifiedBy] [nvarchar](256) NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[RegardingObjectTypeCode] [int] NULL,
 CONSTRAINT [PK_recommendeddocumentBase] PRIMARY KEY CLUSTERED 
(
	[RecommendedDocumentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RecommendedDocumentBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[RecommendedDocumentBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_title]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_title] ON [dbo].[RecommendedDocumentBase]
(
	[Title] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendedDocumentBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_recommendeddocument] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[RecommendedDocumentBase] CHECK CONSTRAINT [TransactionCurrency_recommendeddocument]
GO
