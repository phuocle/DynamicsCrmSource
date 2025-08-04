CREATE TABLE [dbo].[ApplicationFileBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Body] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[FileId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ApplicationFileBase] ADD CONSTRAINT [cndx_PrimaryKey_ApplicationFile] PRIMARY KEY CLUSTERED  ([FileId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ApplicationFileBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
