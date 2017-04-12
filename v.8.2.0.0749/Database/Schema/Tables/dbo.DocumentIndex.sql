CREATE TABLE [dbo].[DocumentIndex]
(
[DocumentIndexId] [uniqueidentifier] NOT NULL,
[SubjectId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[IsPublished] [bit] NULL,
[DocumentTypeCode] [int] NOT NULL,
[DocumentId] [uniqueidentifier] NOT NULL,
[Location] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[Title] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[Number] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[KeyWords] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SearchText] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[IsLatestVersion] [bit] NULL CONSTRAINT [DF_DocumentIndex_IsLatestVersion] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[DocumentIndex] ADD CONSTRAINT [cndx_PrimaryKey_DocumentIndex] PRIMARY KEY CLUSTERED  ([DocumentIndexId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_KbArticle_DocumentIndex] ON [dbo].[DocumentIndex] ([DocumentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_KnowledgeArticle_DocumentIndex] ON [dbo].[DocumentIndex] ([IsPublished], [IsLatestVersion]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_is_primary_subject_for] ON [dbo].[DocumentIndex] ([SubjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DocumentIndex] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DocumentIndex] ADD CONSTRAINT [is_primary_subject_for] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
CREATE FULLTEXT INDEX ON [dbo].[DocumentIndex] KEY INDEX [cndx_PrimaryKey_DocumentIndex] ON [CRMFullTextCatalog]
GO
ALTER FULLTEXT INDEX ON [dbo].[DocumentIndex] ADD ([Title] LANGUAGE 1033)
GO
ALTER FULLTEXT INDEX ON [dbo].[DocumentIndex] ADD ([KeyWords] LANGUAGE 1033)
GO
ALTER FULLTEXT INDEX ON [dbo].[DocumentIndex] ADD ([SearchText] LANGUAGE 1033)
GO
