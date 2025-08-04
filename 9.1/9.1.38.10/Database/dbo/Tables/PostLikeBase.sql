CREATE TABLE [dbo].[PostLikeBase] (
    [PostId]                    UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [PostLikeId]                UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    CONSTRAINT [PK_PostLikeBase] PRIMARY KEY CLUSTERED ([PostLikeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [Post_Likes] FOREIGN KEY ([PostId]) REFERENCES [dbo].[PostBase] ([PostId])
);


GO
ALTER TABLE [dbo].[PostLikeBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_CreatedByPostId]
    ON [dbo].[PostLikeBase]([PostId] ASC, [CreatedBy] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_createdby]
    ON [dbo].[PostLikeBase]([CreatedBy] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A95B1BE784DD11E0A0F51CC1DE634CFE]
    ON [dbo].[PostLikeBase]([PostLikeId] ASC)
    INCLUDE([PostId], [CreatedBy]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

