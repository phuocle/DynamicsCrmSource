CREATE TABLE [MetadataSchema].[Relationship]
(
[RelationshipId] [uniqueidentifier] NOT NULL ROWGUIDCOL,
[Name] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[ReferencingEntityId] [uniqueidentifier] NOT NULL,
[ReferencingAttributeId] [uniqueidentifier] NOT NULL,
[ReferencedEntityId] [uniqueidentifier] NOT NULL,
[ReferencedAttributeId] [uniqueidentifier] NOT NULL,
[RelationshipType] [int] NULL,
[IsLogical] [bit] NOT NULL CONSTRAINT [Set_To_Zero_Relationship_IsLogical] DEFAULT ((0)),
[CascadeDelete] [tinyint] NOT NULL CONSTRAINT [DF__Relations__Casca__42F7C8EE] DEFAULT ((2)),
[CascadeAssign] [tinyint] NULL CONSTRAINT [DF__Relations__Casca__4050666D] DEFAULT ((0)),
[CascadeShare] [tinyint] NULL CONSTRAINT [DF__Relations__Casca__41448AA6] DEFAULT ((0)),
[CascadeUnShare] [tinyint] NULL CONSTRAINT [DF__Relations__Casca__4238AEDF] DEFAULT ((0)),
[CascadeMerge] [tinyint] NULL CONSTRAINT [DF__Relations__Casca__432CD318] DEFAULT ((0)),
[CascadeReparent] [tinyint] NULL CONSTRAINT [DF__Relations__Casca__4420F751] DEFAULT ((0)),
[CascadeLinkMask] [bigint] NULL CONSTRAINT [DF__Relations__Casca__45151B8A] DEFAULT ((0)),
[IsCustomRelationship] [bit] NOT NULL CONSTRAINT [Set_To_Zero_Relationship_IsCustomRelationship] DEFAULT ((0)),
[IsValidForAdvancedFind] [bit] NOT NULL CONSTRAINT [Set_To_Zero_Relationship_IsValidForAdvancedFind] DEFAULT ((0)),
[VersionNumber] [timestamp] NOT NULL,
[RelationshipRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Relations__Relat__1CD22006] DEFAULT (newid()),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Relations__Solut__1A609306] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Relations__Suppo__1B54B73F] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__Relations__Compo__1C48DB78] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__Relations__Overw__1D3CFFB1] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__Relations__IsMan__721D9782] DEFAULT ((0)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[CascadeRollupView] [tinyint] NULL
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[Relationship] ADD CONSTRAINT [relationship_cascade_flag_values] CHECK ((([CascadeDelete] IS NULL OR [CascadeDelete]>=(0) AND [CascadeDelete]<(4)) AND ([CascadeAssign] IS NULL OR [CascadeAssign]>=(0) AND [CascadeAssign]<(6)) AND ([CascadeShare] IS NULL OR [CascadeShare]>=(0) AND [CascadeShare]<(6)) AND ([CascadeUnShare] IS NULL OR [CascadeUnShare]>=(0) AND [CascadeUnShare]<(6)) AND ([CascadeMerge] IS NULL OR [CascadeMerge]>=(0) AND [CascadeMerge]<(4)) AND ([CascadeReparent] IS NULL OR [CascadeReparent]>=(0) AND [CascadeReparent]<(6))))
GO
ALTER TABLE [MetadataSchema].[Relationship] ADD CONSTRAINT [XPKRelationship] PRIMARY KEY CLUSTERED  ([RelationshipId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Relationship_ComponentStateOverwriteTime] ON [MetadataSchema].[Relationship] ([ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Relationship_Name] ON [MetadataSchema].[Relationship] ([Name]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Relationship_ReferencedAttributeId] ON [MetadataSchema].[Relationship] ([ReferencedAttributeId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ReferencedEntityId] ON [MetadataSchema].[Relationship] ([ReferencedEntityId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Relationship_ReferencingAttributeId] ON [MetadataSchema].[Relationship] ([ReferencingAttributeId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_relationship_fegetformxml] ON [MetadataSchema].[Relationship] ([ReferencingAttributeId], [ComponentState], [OverwriteTime]) INCLUDE ([ReferencedEntityId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Relationship_ReferencingEntityIdReferencedEntityId] ON [MetadataSchema].[Relationship] ([ReferencingEntityId], [ReferencedEntityId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Relationship_RowId] ON [MetadataSchema].[Relationship] ([RelationshipRowId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Relationship_MetadataCache] ON [MetadataSchema].[Relationship] ([SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[Relationship] ADD CONSTRAINT [relationship_referenced_attribute] FOREIGN KEY ([ReferencedAttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
GO
ALTER TABLE [MetadataSchema].[Relationship] ADD CONSTRAINT [relationship_referenced_entity] FOREIGN KEY ([ReferencedEntityId]) REFERENCES [dbo].[EntityIds] ([EntityId])
GO
ALTER TABLE [MetadataSchema].[Relationship] ADD CONSTRAINT [relationship_referencing_attribute] FOREIGN KEY ([ReferencingAttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
GO
ALTER TABLE [MetadataSchema].[Relationship] ADD CONSTRAINT [relationship_referencing_entity] FOREIGN KEY ([ReferencingEntityId]) REFERENCES [dbo].[EntityIds] ([EntityId])
GO
