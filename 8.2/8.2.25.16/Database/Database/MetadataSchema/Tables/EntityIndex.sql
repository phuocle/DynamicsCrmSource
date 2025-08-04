CREATE TABLE [MetadataSchema].[EntityIndex] (
    [IndexId]             UNIQUEIDENTIFIER NOT NULL,
    [Name]                NVARCHAR (128)   NOT NULL,
    [EntityId]            UNIQUEIDENTIFIER NULL,
    [IsClustered]         BIT              NULL,
    [IsUnique]            BIT              NULL,
    [SqlFillFactor]       INT              DEFAULT ((80)) NULL,
    [RecreateIndex]       BIT              NULL,
    [ModifiedOn]          DATETIME         NULL,
    [IndexType]           INT              NULL,
    [IsPrimaryKey]        BIT              NULL,
    [IsUniqueConstraint]  BIT              NOT NULL,
    [State]               INT              CONSTRAINT [DF_EntityIndex_State] DEFAULT ((0)) NOT NULL,
    [KeyIndexAttributeId] UNIQUEIDENTIFIER NULL,
    PRIMARY KEY CLUSTERED ([IndexId] ASC),
    CONSTRAINT [entityindex_entity] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityId]
    ON [MetadataSchema].[EntityIndex]([EntityId] ASC);

