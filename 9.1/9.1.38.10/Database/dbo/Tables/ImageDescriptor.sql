CREATE TABLE [dbo].[ImageDescriptor] (
    [FileType]          NVARCHAR (256)   NULL,
    [ImageData]         IMAGE            NULL,
    [Title]             NVARCHAR (200)   NULL,
    [ImageURL]          NVARCHAR (200)   NULL,
    [ObjectTypeCode]    INT              NULL,
    [ImageTimestamp]    BIGINT           NULL,
    [ImageDescriptorId] UNIQUEIDENTIFIER NOT NULL,
    [Size]              INT              NULL,
    [ObjectId]          UNIQUEIDENTIFIER NULL,
    [ImageTags]         NVARCHAR (512)   NULL,
    [ImagePixelHeight]  INT              NULL,
    [MimeType]          NVARCHAR (256)   NULL,
    [FileLocation]      NVARCHAR (512)   NULL,
    [FullImageURL]      NVARCHAR (256)   NULL,
    [ImagePixelWidth]   INT              NULL,
    [ColorDepthBits]    INT              NULL,
    [FileName]          NVARCHAR (256)   NULL,
    [ImageDescription]  NVARCHAR (512)   NULL,
    [FileSizeBytes]     INT              NULL,
    [FullImageData]     IMAGE            NULL,
    [FileId]            UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ImageDescriptor] PRIMARY KEY CLUSTERED ([ImageDescriptorId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [FileAttachment_ImageDescriptor_FileId] FOREIGN KEY ([FileId]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ImageDescriptor]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
ALTER TABLE [dbo].[ImageDescriptor] SET (LOCK_ESCALATION = DISABLE);

