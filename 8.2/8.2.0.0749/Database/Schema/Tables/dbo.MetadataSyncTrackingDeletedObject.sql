CREATE TABLE [dbo].[MetadataSyncTrackingDeletedObject]
(
[CreatedOn] [datetime] NOT NULL CONSTRAINT [DF_MetadataSyncTrackingDeletedObject_CreatedOn] DEFAULT (getutcdate()),
[MetadataObjectTypeCode] [int] NOT NULL,
[ObjectId] [uniqueidentifier] NOT NULL,
[Timestamp] [timestamp] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MetadataSyncTrackingDeletedObject] ADD CONSTRAINT [cndx_PrimaryKey_MetadataSyncTrackingDeletedObjects] PRIMARY KEY CLUSTERED  ([Timestamp]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_MetadataSyncTrackingDeletedObjects] ON [dbo].[MetadataSyncTrackingDeletedObject] ([ObjectId], [MetadataObjectTypeCode]) ON [PRIMARY]
GO
