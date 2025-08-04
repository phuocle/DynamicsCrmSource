CREATE TABLE [dbo].[Attachment] (
    [VersionNumber] ROWVERSION       NULL,
    [MimeType]      NVARCHAR (256)   NULL,
    [Body]          VARCHAR (MAX)    NULL,
    [Subject]       NVARCHAR (2000)  NULL,
    [FileName]      NVARCHAR (255)   NULL,
    [FileSize]      INT              NULL,
    [AttachmentId]  UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Attachment] PRIMARY KEY CLUSTERED ([AttachmentId] ASC) WITH (FILLFACTOR = 80)
);

