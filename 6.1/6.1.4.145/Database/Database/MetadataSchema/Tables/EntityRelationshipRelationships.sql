CREATE TABLE [MetadataSchema].[EntityRelationshipRelationships] (
    [EntityRelationshipRelationshipsId]    UNIQUEIDENTIFIER NOT NULL,
    [EntityRelationshipId]                 UNIQUEIDENTIFIER NOT NULL,
    [RelationshipId]                       UNIQUEIDENTIFIER NOT NULL,
    [EntityRelationshipRelationshipsRowId] UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [VersionNumber]                        ROWVERSION       NOT NULL,
    [SolutionId]                           UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]                 UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]                       TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                        DATETIME         DEFAULT ((0)) NOT NULL,
    [IsManaged]                            BIT              DEFAULT ((0)) NOT NULL,
    CONSTRAINT [XPKEntityRelationshipRelationships] PRIMARY KEY CLUSTERED ([EntityRelationshipRelationshipsId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [entityrelationshiprelationships_entityrelationshipid] FOREIGN KEY ([EntityRelationshipId]) REFERENCES [dbo].[EntityRelationshipIds] ([EntityRelationshipId]),
    CONSTRAINT [entityrelationshiprelationships_relationshipid] FOREIGN KEY ([RelationshipId]) REFERENCES [dbo].[RelationshipIds] ([RelationshipId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationshipRelationships_MetadataCache]
    ON [MetadataSchema].[EntityRelationshipRelationships]([SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationshipIds]
    ON [MetadataSchema].[EntityRelationshipRelationships]([EntityRelationshipId] ASC)
    INCLUDE([RelationshipId]);


GO
CREATE NONCLUSTERED INDEX [ndx_RelationshipIds]
    ON [MetadataSchema].[EntityRelationshipRelationships]([RelationshipId] ASC)
    INCLUDE([EntityRelationshipId]);

