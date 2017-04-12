CREATE TABLE [MetadataSchema].[EntityRelationship]
(
[EntityRelationshipId] [uniqueidentifier] NOT NULL,
[SchemaName] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[EntityRelationshipType] [tinyint] NOT NULL CONSTRAINT [DF__EntityRel__Entit__45D43599] DEFAULT ((0)),
[IsCustomRelationship] [bit] NOT NULL CONSTRAINT [DF__EntityRel__IsCus__46C859D2] DEFAULT ((0)),
[EntityRelationshipRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityRel__Entit__47BC7E0B] DEFAULT (newid()),
[VersionNumber] [timestamp] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityRel__Solut__2D73677A] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityRel__Suppo__2E678BB3] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__EntityRel__Compo__2F5BAFEC] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__EntityRel__Overw__304FD425] DEFAULT ((0)),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_EntityRelationship_IsCustomizable] DEFAULT ((1)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__EntityRel__IsMan__6D58E265] DEFAULT ((0)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[CanChangeHierarchicalSettings] [bit] NOT NULL CONSTRAINT [DF__EntityRel__CanCh__7F985988] DEFAULT ((0)),
[IsHierarchical] [bit] NOT NULL CONSTRAINT [DF__EntityRel__IsHie__055132DE] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityRelationship] ADD CONSTRAINT [XPKEntityRelationship] PRIMARY KEY CLUSTERED  ([EntityRelationshipId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationship_RowId] ON [MetadataSchema].[EntityRelationship] ([EntityRelationshipRowId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationship_Name] ON [MetadataSchema].[EntityRelationship] ([SchemaName]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationship_MetadataCache] ON [MetadataSchema].[EntityRelationship] ([SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationship_SolutionId] ON [MetadataSchema].[EntityRelationship] ([SolutionId], [OverwriteTime]) INCLUDE ([EntityRelationshipId], [VersionNumber]) ON [PRIMARY]
GO
