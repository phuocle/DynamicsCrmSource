CREATE TABLE [dbo].[KbArticleCommentBase] (
    [Title]              NVARCHAR (200)   NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [KbArticleId]        UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [KbArticleCommentId] UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [CommentText]        NVARCHAR (MAX)   NULL,
    [CreatedOn]          DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_KbArticleComment] PRIMARY KEY CLUSTERED ([KbArticleCommentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [kbarticle_comments] FOREIGN KEY ([KbArticleId]) REFERENCES [dbo].[KbArticleBase] ([KbArticleId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[KbArticleCommentBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[KbArticleCommentBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KbArticleCommentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_kbarticle_comments]
    ON [dbo].[KbArticleCommentBase]([KbArticleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[KbArticleCommentBase]([Title] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_10C7B6CA2A0849A4A8CF3D2F16B87A6C]
    ON [dbo].[KbArticleCommentBase]([KbArticleCommentId] ASC)
    INCLUDE([Title], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_10C7B6CA2A0849A4A8CF3D2F16B87A6C]
    ON [dbo].[KbArticleCommentBase]([KbArticleCommentId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_10C7B6CA2A0849A4A8CF3D2F16B87A6C]
    ON [dbo].[KbArticleCommentBase]([Title] ASC, [KbArticleCommentId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

