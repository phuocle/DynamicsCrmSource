CREATE TABLE [dbo].[MetadataForMetadata]
(
[InstalledOn] [datetime] NOT NULL CONSTRAINT [DF__MetadataF__Insta__0A15E7FB] DEFAULT (getutcdate()),
[MetadataForMetadataXmlId] [uniqueidentifier] NOT NULL,
[MetadataForMetadataXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[BuildVersion] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[MetadataForMetadata] ADD CONSTRAINT [cndx_PrimaryKey_MetadataForMetadata] PRIMARY KEY CLUSTERED  ([MetadataForMetadataXmlId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_MetadataForMetadata_BuildVersion] ON [dbo].[MetadataForMetadata] ([BuildVersion] DESC) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_MetadataForMetadata_InstalledOn] ON [dbo].[MetadataForMetadata] ([InstalledOn] DESC) ON [PRIMARY]
GO
