CREATE TABLE [MetadataSchema].[EntityRelationshipRole]
(
[EntityRelationshipRoleId] [uniqueidentifier] NOT NULL,
[EntityRelationshipId] [uniqueidentifier] NOT NULL,
[EntityId] [uniqueidentifier] NOT NULL,
[RelationshipRoleType] [tinyint] NOT NULL,
[NavPaneDisplayOption] [tinyint] NULL,
[NavPaneArea] [tinyint] NULL,
[NavPaneOrder] [int] NULL,
[NavPaneIcon] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[NavPaneOffline] [bit] NULL,
[NavPaneQueryApi] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[NavPaneViewId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[NavPaneIsCustomizable] [bit] NULL,
[EntityRelationshipRoleRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityRel__Entit__55167929] DEFAULT (newid()),
[VersionNumber] [timestamp] NOT NULL,
[IntersectEntityAttributeId] [uniqueidentifier] NULL,
[AssociationRoleOrdinal] [int] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityRel__Solut__32381C97] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityRel__Suppo__332C40D0] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__EntityRel__Compo__34206509] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__EntityRel__Overw__35148942] DEFAULT ((0)),
[NavPaneId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__EntityRel__IsMan__6F412AD7] DEFAULT ((0)),
[LogicalName] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[NavigationPropertyName] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityRelationshipRole] ADD CONSTRAINT [XPKEntityRelationshipRole] PRIMARY KEY CLUSTERED  ([EntityRelationshipRoleId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [EntityRelationshipRole_ComponentStateOverwriteTime] ON [MetadataSchema].[EntityRelationshipRole] ([ComponentState], [OverwriteTime]) INCLUDE ([EntityRelationshipRoleId], [VersionNumber]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityId] ON [MetadataSchema].[EntityRelationshipRole] ([EntityId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationshipRole_SolutionImport] ON [MetadataSchema].[EntityRelationshipRole] ([EntityRelationshipId], [RelationshipRoleType], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_EntityRelationshipRole_RowId] ON [MetadataSchema].[EntityRelationshipRole] ([EntityRelationshipRoleRowId], [EntityRelationshipRoleId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationshipRole_MetadataCache] ON [MetadataSchema].[EntityRelationshipRole] ([SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityRelationshipRole] ADD CONSTRAINT [entityrelationshiprole_entityid] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId])
GO
ALTER TABLE [MetadataSchema].[EntityRelationshipRole] ADD CONSTRAINT [entityrelationshiprole_relationshipid] FOREIGN KEY ([EntityRelationshipId]) REFERENCES [dbo].[EntityRelationshipIds] ([EntityRelationshipId])
GO
