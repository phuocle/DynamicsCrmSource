CREATE TABLE [dbo].[PostLikeBase] (
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [PostId]                    UNIQUEIDENTIFIER NOT NULL,
    [PostLikeId]                UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_PostLikeBase] PRIMARY KEY CLUSTERED ([PostLikeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [Post_Likes] FOREIGN KEY ([PostId]) REFERENCES [dbo].[PostBase] ([PostId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_createdby]
    ON [dbo].[PostLikeBase]([CreatedBy] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_CreatedByPostId]
    ON [dbo].[PostLikeBase]([PostId] ASC, [CreatedBy] ASC) WITH (FILLFACTOR = 80);

