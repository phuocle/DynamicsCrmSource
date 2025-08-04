CREATE TABLE [dbo].[ImageDescriptor]
(
[Title] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ImageURL] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ObjectTypeCode] [int] NULL,
[ImageDescriptorId] [uniqueidentifier] NOT NULL,
[Size] [int] NULL,
[ImageData] [image] NULL,
[FileType] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ImageTimestamp] [bigint] NULL,
[ObjectId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImageDescriptor] ADD CONSTRAINT [cndx_PrimaryKey_ImageDescriptor] PRIMARY KEY CLUSTERED  ([ImageDescriptorId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
