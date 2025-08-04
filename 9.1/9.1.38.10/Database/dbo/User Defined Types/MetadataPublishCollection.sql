CREATE TYPE [dbo].[MetadataPublishCollection] AS TABLE (
    [ObjectId]       UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode] INT              NOT NULL,
    [ComponentState] TINYINT          NOT NULL,
    PRIMARY KEY CLUSTERED ([ObjectId] ASC, [ObjectTypeCode] ASC, [ComponentState] ASC));

