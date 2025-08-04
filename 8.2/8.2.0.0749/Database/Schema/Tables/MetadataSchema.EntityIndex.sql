CREATE TABLE [MetadataSchema].[EntityIndex]
(
[IndexId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (128) COLLATE Latin1_General_CI_AI NOT NULL,
[EntityId] [uniqueidentifier] NULL,
[IsClustered] [bit] NULL,
[IsUnique] [bit] NULL,
[SqlFillFactor] [int] NULL CONSTRAINT [DF__EntityInd__SqlFi__39A368DE] DEFAULT ((80)),
[RecreateIndex] [bit] NULL,
[ModifiedOn] [datetime] NULL,
[IndexType] [int] NULL,
[IsPrimaryKey] [bit] NULL,
[IsUniqueConstraint] [bit] NOT NULL,
[State] [int] NOT NULL CONSTRAINT [DF_EntityIndex_State] DEFAULT ((0)),
[KeyIndexAttributeId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityIndex] ADD CONSTRAINT [PK__EntityIndex__38AF44A5] PRIMARY KEY CLUSTERED  ([IndexId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityId] ON [MetadataSchema].[EntityIndex] ([EntityId]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityIndex] ADD CONSTRAINT [entityindex_entity] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId])
GO
