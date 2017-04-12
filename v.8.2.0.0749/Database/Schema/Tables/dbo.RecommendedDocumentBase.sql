CREATE TABLE [dbo].[RecommendedDocumentBase]
(
[UTCConversionTimeZoneCode] [int] NULL,
[FileType] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Location] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[RecommendedDocumentId] [uniqueidentifier] NOT NULL,
[FullName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ReadUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[AbsoluteUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[AssociatedRecordName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[Title] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ContentType] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[EditUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[Author] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[IconClassName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NULL,
[Version] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[FileSize] [int] NULL,
[ExternalDocumentId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[Source] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ExternalModifiedBy] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendedDocumentBase] ADD CONSTRAINT [PK_recommendeddocumentBase] PRIMARY KEY CLUSTERED  ([RecommendedDocumentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[RecommendedDocumentBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_title] ON [dbo].[RecommendedDocumentBase] ([Title]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RecommendedDocumentBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendedDocumentBase] ADD CONSTRAINT [TransactionCurrency_recommendeddocument] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
