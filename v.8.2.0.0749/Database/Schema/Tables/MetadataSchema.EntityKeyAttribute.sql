CREATE TABLE [MetadataSchema].[EntityKeyAttribute]
(
[EntityKeyAttributeId] [uniqueidentifier] NOT NULL,
[EntityKeyId] [uniqueidentifier] NOT NULL,
[AttributeId] [uniqueidentifier] NOT NULL,
[IndexOrder] [int] NOT NULL,
[EntityKeyAttributeRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityKey__Entit__6D9A7035] DEFAULT (newid()),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__EntityKey__Compo__6E8E946E] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityKey__Solut__6F82B8A7] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238'),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__EntityKey__Overw__7076DCE0] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityKey__Suppo__716B0119] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__EntityKey__IsMan__725F2552] DEFAULT ((0)),
[VersionNumber] [timestamp] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] ADD CONSTRAINT [XPKEntityKeyAttribute] PRIMARY KEY CLUSTERED  ([EntityKeyAttributeId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_AttributeId] ON [MetadataSchema].[EntityKeyAttribute] ([AttributeId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityKeyId] ON [MetadataSchema].[EntityKeyAttribute] ([EntityKeyId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityKeyAttribute_SolutionId] ON [MetadataSchema].[EntityKeyAttribute] ([SolutionId], [OverwriteTime]) INCLUDE ([EntityKeyAttributeId], [VersionNumber]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] ADD CONSTRAINT [entitykeyattribute_attribute] FOREIGN KEY ([AttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] ADD CONSTRAINT [entitykeyattribute_entitykey] FOREIGN KEY ([EntityKeyId]) REFERENCES [dbo].[EntityKeyIds] ([EntityKeyId])
GO
