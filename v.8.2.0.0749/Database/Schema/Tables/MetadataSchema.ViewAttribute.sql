CREATE TABLE [MetadataSchema].[ViewAttribute]
(
[ViewAttributeId] [uniqueidentifier] NOT NULL ROWGUIDCOL,
[AttributeId] [uniqueidentifier] NOT NULL,
[RelationshipId] [uniqueidentifier] NOT NULL,
[RemoteAttributeId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NOT NULL,
[ViewAttributeRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__ViewAttri__ViewA__265B8A40] DEFAULT (newid()),
[IsDenormalized] [bit] NOT NULL CONSTRAINT [DF__ViewAttri__IsDen__715E7D73] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__ViewAttri__Solut__23E9FD40] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__ViewAttri__Suppo__24DE2179] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__ViewAttri__Compo__25D245B2] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__ViewAttri__Overw__26C669EB] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__ViewAttri__IsMan__7405DFF4] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[ViewAttribute] ADD CONSTRAINT [XPKViewAttribute] PRIMARY KEY CLUSTERED  ([ViewAttributeId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_AttributeId] ON [MetadataSchema].[ViewAttribute] ([AttributeId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RelationshipId] ON [MetadataSchema].[ViewAttribute] ([RelationshipId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RemoteAttributeId] ON [MetadataSchema].[ViewAttribute] ([RemoteAttributeId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ViewAttribute_MetadataCache] ON [MetadataSchema].[ViewAttribute] ([SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_ViewAttribute_RowId] ON [MetadataSchema].[ViewAttribute] ([ViewAttributeRowId], [ViewAttributeId]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[ViewAttribute] ADD CONSTRAINT [view_attribute_attribute] FOREIGN KEY ([AttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
GO
ALTER TABLE [MetadataSchema].[ViewAttribute] ADD CONSTRAINT [view_attribute_relationship] FOREIGN KEY ([RelationshipId]) REFERENCES [dbo].[RelationshipIds] ([RelationshipId])
GO
ALTER TABLE [MetadataSchema].[ViewAttribute] ADD CONSTRAINT [view_attribute_remoteattribute] FOREIGN KEY ([RemoteAttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
GO
