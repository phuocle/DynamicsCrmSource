CREATE TYPE [dbo].[MetadataPublishCollection] AS TABLE
(
[ObjectId] [uniqueidentifier] NOT NULL,
[ObjectTypeCode] [int] NOT NULL,
[ComponentState] [tinyint] NOT NULL,
PRIMARY KEY CLUSTERED  ([ObjectId], [ObjectTypeCode], [ComponentState])
)
GO
