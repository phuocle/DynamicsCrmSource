CREATE TABLE [MetadataSchema].[IndexAttributes] (
    [IndexAttributeId]   UNIQUEIDENTIFIER NOT NULL,
    [AttributeId]        UNIQUEIDENTIFIER NULL,
    [IndexId]            UNIQUEIDENTIFIER NULL,
    [IndexOrder]         INT              NULL,
    [IsIncludeAttribute] BIT              DEFAULT ((0)) NOT NULL,
    [SortDescending]     BIT              DEFAULT ((0)) NOT NULL,
    PRIMARY KEY CLUSTERED ([IndexAttributeId] ASC),
    CONSTRAINT [indexattributes_attribute] FOREIGN KEY ([AttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [indexattributes_entityindex] FOREIGN KEY ([IndexId]) REFERENCES [MetadataSchema].[EntityIndex] ([IndexId]),
    CONSTRAINT [UQ_IndexIdAttributeId] UNIQUE NONCLUSTERED ([IndexId] ASC, [AttributeId] ASC)
);

