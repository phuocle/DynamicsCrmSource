CREATE TABLE [MetadataSchema].[IndexFilters] (
    [IndexFilterId]  UNIQUEIDENTIFIER NOT NULL,
    [IndexId]        UNIQUEIDENTIFIER NOT NULL,
    [AttributeId]    UNIQUEIDENTIFIER NOT NULL,
    [FilterOperator] NVARCHAR (64)    NOT NULL,
    [FilterValue]    NVARCHAR (512)   NULL,
    CONSTRAINT [PK_IndexFilters] PRIMARY KEY CLUSTERED ([IndexFilterId] ASC),
    CONSTRAINT [indexfilters_indexid] FOREIGN KEY ([IndexId]) REFERENCES [MetadataSchema].[EntityIndex] ([IndexId])
);

