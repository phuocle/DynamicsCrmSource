CREATE TABLE [dbo].[OfficeGraphDocumentBase]
(
[ReadUrl] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ViewCount] [int] NULL,
[FileType] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[Rank] [int] NULL,
[CreatedBy] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[FileExtension] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[AuthorNames] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[DocumentPreviewMetadata] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[CreatedTime] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[QueryType] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[DocumentLastModifiedOn] [datetime] NULL,
[DocumentId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[PreviewImageUrl] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[WebLocationUrl] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[SecondaryFileExtension] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[OfficeGraphDocumentId] [uniqueidentifier] NOT NULL,
[DocumentLastModifiedBy] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[SiteUrl] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[SiteTitle] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[Title] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedTime] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OfficeGraphDocumentBase] ADD CONSTRAINT [PK_officegraphdocumentBase] PRIMARY KEY CLUSTERED  ([OfficeGraphDocumentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[OfficeGraphDocumentBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_title] ON [dbo].[OfficeGraphDocumentBase] ([Title]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OfficeGraphDocumentBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OfficeGraphDocumentBase] ADD CONSTRAINT [TransactionCurrency_officegraphdocument] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
