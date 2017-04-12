CREATE TABLE [dbo].[SalesLiteratureItemBase]
(
[SalesLiteratureItemId] [uniqueidentifier] NOT NULL,
[SalesLiteratureId] [uniqueidentifier] NOT NULL,
[IsCustomerViewable] [bit] NULL,
[AttachedDocumentUrl] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[Title] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[MimeType] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[AuthorName] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[Abstract] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[DocumentBody] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[KeyWords] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[FileName] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[FileTypeCode] [int] NULL,
[FileSize] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesLiteratureItemBase] ADD CONSTRAINT [cndx_PrimaryKey_SalesLiteratureItem] PRIMARY KEY CLUSTERED  ([SalesLiteratureItemId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_items] ON [dbo].[SalesLiteratureItemBase] ([SalesLiteratureId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title] ON [dbo].[SalesLiteratureItemBase] ([Title]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SalesLiteratureItemBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesLiteratureItemBase] ADD CONSTRAINT [sales_literature_items] FOREIGN KEY ([SalesLiteratureId]) REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId])
GO
