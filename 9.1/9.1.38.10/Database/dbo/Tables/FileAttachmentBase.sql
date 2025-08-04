CREATE TABLE [dbo].[FileAttachmentBase] (
    [FileName]           NVARCHAR (255)   NULL,
    [ObjectTypeCode]     INT              NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [FilePointer]        NVARCHAR (255)   NULL,
    [ObjectId]           UNIQUEIDENTIFIER NULL,
    [StoragePointer]     NVARCHAR (5)     NULL,
    [FileSizeInBytes]    BIGINT           NULL,
    [Prefix]             NVARCHAR (5)     NULL,
    [RegardingFieldName] NVARCHAR (255)   NULL,
    [CreatedOn]          DATETIME         NULL,
    [FileAttachmentId]   UNIQUEIDENTIFIER NOT NULL,
    [MimeType]           NVARCHAR (256)   NULL,
    [ObjectIdTypeCode]   INT              NULL,
    [Body]               VARCHAR (MAX)    NULL,
    [IsCommitted]        BIT              CONSTRAINT [DF_FileAttachmentBase_IsCommitted] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_FileAttachment] PRIMARY KEY NONCLUSTERED ([FileAttachmentId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[FileAttachmentBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [cndx_FileAttachment]
    ON [dbo].[FileAttachmentBase]([ObjectId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[FileAttachmentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_FilePointer]
    ON [dbo].[FileAttachmentBase]([FilePointer] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_FileAttachmentIdCreatedOn]
    ON [dbo].[FileAttachmentBase]([FileAttachmentId] ASC, [CreatedOn] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_FileAttachmentId_FileSizeInBytes_Filter_Body]
    ON [dbo].[FileAttachmentBase]([FileAttachmentId] ASC, [FileSizeInBytes] ASC) WHERE ([IsCommitted]=(1) AND [Body] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_FileAttachmentId_CreatedOn_Filter_IsCommitted]
    ON [dbo].[FileAttachmentBase]([FileAttachmentId] ASC, [CreatedOn] ASC) WHERE ([IsCommitted]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

