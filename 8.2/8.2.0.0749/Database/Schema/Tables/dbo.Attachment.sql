CREATE TABLE [dbo].[Attachment]
(
[VersionNumber] [timestamp] NULL,
[MimeType] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[Body] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Subject] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[FileName] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[FileSize] [int] NULL,
[AttachmentId] [uniqueidentifier] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Attachment] ADD CONSTRAINT [cndx_PrimaryKey_Attachment] PRIMARY KEY CLUSTERED  ([AttachmentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[Attachment] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
