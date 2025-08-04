CREATE TABLE [dbo].[KbArticleCommentBase] (
    [KbArticleCommentId] UNIQUEIDENTIFIER NOT NULL,
    [KbArticleId]        UNIQUEIDENTIFIER NOT NULL,
    [Title]              NVARCHAR (200)   NULL,
    [CommentText]        NVARCHAR (MAX)   NULL,
    [CreatedOn]          DATETIME         NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_KbArticleComment] PRIMARY KEY CLUSTERED ([KbArticleCommentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [kbarticle_comments] FOREIGN KEY ([KbArticleId]) REFERENCES [dbo].[KbArticleBase] ([KbArticleId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[KbArticleCommentBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KbArticleCommentBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[KbArticleCommentBase]([Title] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_kbarticle_comments]
    ON [dbo].[KbArticleCommentBase]([KbArticleId] ASC) WITH (FILLFACTOR = 80);

