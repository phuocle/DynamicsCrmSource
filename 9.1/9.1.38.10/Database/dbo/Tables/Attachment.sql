CREATE TABLE [dbo].[Attachment] (
    [VersionNumber]  ROWVERSION       NULL,
    [MimeType]       NVARCHAR (256)   NULL,
    [FileSize]       INT              NULL,
    [Body]           VARCHAR (MAX)    NULL,
    [Subject]        NVARCHAR (2000)  NULL,
    [AttachmentId]   UNIQUEIDENTIFIER NOT NULL,
    [FileName]       NVARCHAR (255)   NULL,
    [Prefix]         NVARCHAR (5)     NULL,
    [StoragePointer] NVARCHAR (5)     NULL,
    [FilePointer]    NVARCHAR (255)   NULL,
    CONSTRAINT [cndx_PrimaryKey_Attachment] PRIMARY KEY CLUSTERED ([AttachmentId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[Attachment]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[Attachment] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[Attachment]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_AttachmentId_FileSize_Filter_Body]
    ON [dbo].[Attachment]([AttachmentId] ASC, [FileSize] ASC) WHERE ([Body] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_AttachmentId_FileSize_Filter_FilePointer]
    ON [dbo].[Attachment]([AttachmentId] ASC, [FileSize] ASC) WHERE ([FilePointer] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_FilePointer]
    ON [dbo].[Attachment]([FilePointer] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

