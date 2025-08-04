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
    [SolutionId]          UNIQUEIDENTIFIER DEFAULT ('FD140AAD-4DF4-11DD-BD17-0019B9312238') NOT NULL,
    [OverwriteTime]       DATETIME         DEFAULT ((0)) NOT NULL,
    [ComponentState]      TINYINT          DEFAULT ((0)) NOT NULL,
    [CompressionType]     NVARCHAR (10)    CONSTRAINT [DEFAULT_COMPRESSION] DEFAULT (NULL) NULL,
    PRIMARY KEY CLUSTERED ([IndexId] ASC),
    CONSTRAINT [entityindex_entity] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId])
);


GO
ALTER TABLE [MetadataSchema].[EntityIndex] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityId]
    ON [MetadataSchema].[EntityIndex]([EntityId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityIndex_ModifiedOn]
    ON [MetadataSchema].[EntityIndex]([ModifiedOn] ASC);

