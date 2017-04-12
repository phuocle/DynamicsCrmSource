CREATE TABLE [dbo].[MetadataTimestamp]
(
[VersionNumber] [timestamp] NOT NULL,
[CreatedOn] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MetadataTimestamp] ADD CONSTRAINT [MetadataTimestamp_PK] PRIMARY KEY CLUSTERED  ([VersionNumber]) ON [PRIMARY]
GO
