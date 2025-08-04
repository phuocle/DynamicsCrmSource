CREATE TABLE [dbo].[MetadataForMetadata] (
    [InstalledOn]              DATETIME         DEFAULT (getutcdate()) NOT NULL,
    [MetadataForMetadataXmlId] UNIQUEIDENTIFIER NOT NULL,
    [MetadataForMetadataXml]   NVARCHAR (MAX)   NOT NULL,
    [BuildVersion]             NVARCHAR (50)    NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_MetadataForMetadata] PRIMARY KEY CLUSTERED ([MetadataForMetadataXmlId] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_MetadataForMetadata_InstalledOn]
    ON [dbo].[MetadataForMetadata]([InstalledOn] DESC);


GO
CREATE NONCLUSTERED INDEX [ndx_MetadataForMetadata_BuildVersion]
    ON [dbo].[MetadataForMetadata]([BuildVersion] DESC);

