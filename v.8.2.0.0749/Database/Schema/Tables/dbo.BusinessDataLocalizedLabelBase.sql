CREATE TABLE [dbo].[BusinessDataLocalizedLabelBase]
(
[Label] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[ObjectColumnNumber] [int] NOT NULL,
[BusinessDataLocalizedLabelId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[LanguageId] [int] NOT NULL,
[ObjectId] [uniqueidentifier] NULL,
[ObjectColumnName] [nvarchar] (128) COLLATE Latin1_General_CI_AI NOT NULL,
[ObjectIdTypeCode] [int] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[BusinessDataLocalizedLabelBase] ADD CONSTRAINT [ndx_PrimaryKey_BusinessDataLocalizedLabelId] PRIMARY KEY NONCLUSTERED  ([BusinessDataLocalizedLabelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_BusinessDataLocalizedLabel] ON [dbo].[BusinessDataLocalizedLabelBase] ([ObjectId], [ObjectIdTypeCode], [ObjectColumnNumber], [LanguageId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BusinessDataLocalizedLabelBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE FULLTEXT INDEX ON [dbo].[BusinessDataLocalizedLabelBase] KEY INDEX [ndx_PrimaryKey_BusinessDataLocalizedLabelId] ON [CRMFullTextCatalog]
GO
ALTER FULLTEXT INDEX ON [dbo].[BusinessDataLocalizedLabelBase] ADD ([Label] LANGUAGE 1033)
GO
