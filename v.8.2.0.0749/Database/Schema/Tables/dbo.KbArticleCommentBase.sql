CREATE TABLE [dbo].[KbArticleCommentBase]
(
[KbArticleCommentId] [uniqueidentifier] NOT NULL,
[KbArticleId] [uniqueidentifier] NOT NULL,
[Title] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[CommentText] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[KbArticleCommentBase] ADD CONSTRAINT [cndx_PrimaryKey_KbArticleComment] PRIMARY KEY CLUSTERED  ([KbArticleCommentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_kbarticle_comments] ON [dbo].[KbArticleCommentBase] ([KbArticleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KbArticleCommentBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KbArticleCommentBase] ADD CONSTRAINT [kbarticle_comments] FOREIGN KEY ([KbArticleId]) REFERENCES [dbo].[KbArticleBase] ([KbArticleId])
GO
