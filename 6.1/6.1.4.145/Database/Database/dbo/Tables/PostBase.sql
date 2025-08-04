CREATE TABLE [dbo].[PostBase] (
    [PostId]                    UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [PostRegardingId]           UNIQUEIDENTIFIER NOT NULL,
    [YammerRetryCount]          INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Text]                      NVARCHAR (2000)  NULL,
    [CreatedOn]                 DATETIME         NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [Source]                    INT              NULL,
    [Type]                      INT              NULL,
    [PostToYammer]              BIT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [YammerPostState]           INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    CONSTRAINT [PK_PostBase] PRIMARY KEY NONCLUSTERED ([PostId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [post_PostRegardings] FOREIGN KEY ([PostRegardingId]) REFERENCES [dbo].[PostRegardingBase] ([PostRegardingId]) NOT FOR REPLICATION
);


GO
CREATE CLUSTERED INDEX [ndx_ModifiedOn]
    ON [dbo].[PostBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CreatedBy]
    ON [dbo].[PostBase]([CreatedBy] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_PostRegarding]
    ON [dbo].[PostBase]([PostRegardingId] ASC) WITH (FILLFACTOR = 80);

