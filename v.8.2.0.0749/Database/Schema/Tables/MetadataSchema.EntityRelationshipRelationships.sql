CREATE TABLE [MetadataSchema].[EntityRelationshipRelationships]
(
[EntityRelationshipRelationshipsId] [uniqueidentifier] NOT NULL,
[EntityRelationshipId] [uniqueidentifier] NOT NULL,
[RelationshipId] [uniqueidentifier] NOT NULL,
[EntityRelationshipRelationshipsRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityRel__Entit__4E697B9A] DEFAULT (newid()),
[VersionNumber] [timestamp] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityRel__Solut__36FCD1B4] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityRel__Suppo__37F0F5ED] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__EntityRel__Compo__38E51A26] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__EntityRel__Overw__39D93E5F] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__EntityRel__IsMan__6E4D069E] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityRelationshipRelationships] ADD CONSTRAINT [XPKEntityRelationshipRelationships] PRIMARY KEY CLUSTERED  ([EntityRelationshipRelationshipsId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationshipIds] ON [MetadataSchema].[EntityRelationshipRelationships] ([EntityRelationshipId]) INCLUDE ([RelationshipId]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_EntityRelationshipRelationships_RowId] ON [MetadataSchema].[EntityRelationshipRelationships] ([EntityRelationshipRelationshipsRowId], [EntityRelationshipRelationshipsId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RelationshipIds] ON [MetadataSchema].[EntityRelationshipRelationships] ([RelationshipId]) INCLUDE ([EntityRelationshipId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationshipRelationships_MetadataCache] ON [MetadataSchema].[EntityRelationshipRelationships] ([SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityRelationshipRelationships] ADD CONSTRAINT [entityrelationshiprelationships_entityrelationshipid] FOREIGN KEY ([EntityRelationshipId]) REFERENCES [dbo].[EntityRelationshipIds] ([EntityRelationshipId])
GO
ALTER TABLE [MetadataSchema].[EntityRelationshipRelationships] ADD CONSTRAINT [entityrelationshiprelationships_relationshipid] FOREIGN KEY ([RelationshipId]) REFERENCES [dbo].[RelationshipIds] ([RelationshipId])
GO
