CREATE TABLE [dbo].[MetadataForMetadata] (
    [InstalledOn]              DATETIME         DEFAULT (getutcdate()) NOT NULL,
    [MetadataForMetadataXmlId] UNIQUEIDENTIFIER NOT NULL,
    [MetadataForMetadataXml]   NVARCHAR (MAX)   NOT NULL,
    [BuildVersion]             NVARCHAR (50)    NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_MetadataForMetadata] PRIMARY KEY CLUSTERED ([MetadataForMetadataXmlId] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[MetadataForMetadata]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[MetadataForMetadata] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_MetadataForMetadata_InstalledOn]
    ON [dbo].[MetadataForMetadata]([InstalledOn] DESC);


GO
CREATE NONCLUSTERED INDEX [ndx_MetadataForMetadata_BuildVersion]
    ON [dbo].[MetadataForMetadata]([BuildVersion] DESC);

