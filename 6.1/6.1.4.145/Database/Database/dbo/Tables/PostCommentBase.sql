CREATE TABLE [dbo].[PostCommentBase] (
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [Text]                      NVARCHAR (1000)  NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NOT NULL,
    [PostCommentId]             UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [PostId]                    UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_PostCommentBase] PRIMARY KEY NONCLUSTERED ([PostCommentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [Post_Comments] FOREIGN KEY ([PostId]) REFERENCES [dbo].[PostBase] ([PostId]) NOT FOR REPLICATION
);


GO
CREATE CLUSTERED INDEX [ndx_Post]
    ON [dbo].[PostCommentBase]([PostId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CreatedOn]
    ON [dbo].[PostCommentBase]([CreatedOn] ASC) WITH (FILLFACTOR = 80);

