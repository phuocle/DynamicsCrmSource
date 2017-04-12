CREATE TABLE [MetadataSchema].[IndexFilters]
(
[IndexFilterId] [uniqueidentifier] NOT NULL,
[IndexId] [uniqueidentifier] NOT NULL,
[AttributeId] [uniqueidentifier] NOT NULL,
[FilterOperator] [nvarchar] (64) COLLATE Latin1_General_CI_AI NOT NULL,
[FilterValue] [nvarchar] (512) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[IndexFilters] ADD CONSTRAINT [PK_IndexFilters] PRIMARY KEY CLUSTERED  ([IndexFilterId]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[IndexFilters] ADD CONSTRAINT [indexfilters_indexid] FOREIGN KEY ([IndexId]) REFERENCES [MetadataSchema].[EntityIndex] ([IndexId])
GO
