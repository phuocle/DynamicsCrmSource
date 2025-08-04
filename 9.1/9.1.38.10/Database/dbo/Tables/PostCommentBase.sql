CREATE TABLE [dbo].[PostCommentBase] (
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NOT NULL,
    [PostCommentId]             UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [PostId]                    UNIQUEIDENTIFIER NOT NULL,
    [Text]                      NVARCHAR (1000)  NULL,
    CONSTRAINT [PK_PostCommentBase] PRIMARY KEY NONCLUSTERED ([PostCommentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [Post_Comments] FOREIGN KEY ([PostId]) REFERENCES [dbo].[PostBase] ([PostId])
);


GO
ALTER TABLE [dbo].[PostCommentBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [ndx_Post]
    ON [dbo].[PostCommentBase]([PostId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CreatedOn]
    ON [dbo].[PostCommentBase]([CreatedOn] ASC) WITH (FILLFACTOR = 80);

