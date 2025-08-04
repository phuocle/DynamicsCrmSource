CREATE TABLE [MetadataSchema].[EntityIndex] (
    [IndexId]            UNIQUEIDENTIFIER NOT NULL,
    [Name]               NVARCHAR (128)   NOT NULL,
    [EntityId]           UNIQUEIDENTIFIER NULL,
    [IsClustered]        BIT              NULL,
    [IsUnique]           BIT              NULL,
    [SqlFillFactor]      INT              DEFAULT ((80)) NULL,
    [RecreateIndex]      BIT              NULL,
    [ModifiedOn]         DATETIME         NULL,
    [IndexType]          INT              NULL,
    [IsPrimaryKey]       BIT              NULL,
    [IsUniqueConstraint] BIT              NOT NULL,
    PRIMARY KEY CLUSTERED ([IndexId] ASC),
    CONSTRAINT [entityindex_entity] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId])
);

