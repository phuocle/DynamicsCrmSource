CREATE TABLE [dbo].[PostBase] (
    [Source]                    INT              NULL,
    [PostRegardingId]           UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [YammerRetryCount]          INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [Text]                      NVARCHAR (2000)  NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [YammerPostState]           INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [Type]                      INT              NULL,
    [PostToYammer]              BIT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NOT NULL,
    [PostId]                    UNIQUEIDENTIFIER NOT NULL,
    [Text_QF_prefix]            AS               (CONVERT([nvarchar](850),substring([Text],(1),(850)))),
    CONSTRAINT [PK_PostBase] PRIMARY KEY NONCLUSTERED ([PostId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[PostBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [ndx_ModifiedOn]
    ON [dbo].[PostBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_PostRegarding]
    ON [dbo].[PostBase]([PostRegardingId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CreatedBy]
    ON [dbo].[PostBase]([CreatedBy] ASC, [ModifiedOn] ASC)
    INCLUDE([PostId], [Source], [Type]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_ModifiedOnDesc]
    ON [dbo].[PostBase]([ModifiedOn] DESC, [PostId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_6CE1365ED12311E0A40F001E4FD6A143]
    ON [dbo].[PostBase]([PostId] ASC)
    INCLUDE([Text]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_6CE1365ED12311E0A40F001E4FD6A143]
    ON [dbo].[PostBase]([PostId] ASC)
    INCLUDE([CreatedOn], [CreatedBy]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Text]
    ON [dbo].[PostBase]([Text_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

