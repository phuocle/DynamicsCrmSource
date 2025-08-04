CREATE TABLE [dbo].[MetadataSyncTrackingDeletedObject] (
    [CreatedOn]              DATETIME         CONSTRAINT [DF_MetadataSyncTrackingDeletedObject_CreatedOn] DEFAULT (getutcdate()) NOT NULL,
    [MetadataObjectTypeCode] INT              NOT NULL,
    [ObjectId]               UNIQUEIDENTIFIER NOT NULL,
    [Timestamp]              ROWVERSION       NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_MetadataSyncTrackingDeletedObjects] PRIMARY KEY CLUSTERED ([Timestamp] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_MetadataSyncTrackingDeletedObjects]
    ON [dbo].[MetadataSyncTrackingDeletedObject]([ObjectId] ASC, [MetadataObjectTypeCode] ASC);

