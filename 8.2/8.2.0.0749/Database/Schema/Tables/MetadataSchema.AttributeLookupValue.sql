CREATE TABLE [MetadataSchema].[AttributeLookupValue]
(
[AttributeLookupValueId] [uniqueidentifier] NOT NULL,
[AttributeLookupValueRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Attribute__Attri__396E5EB4] DEFAULT (newid()),
[AttributeId] [uniqueidentifier] NOT NULL,
[EntityId] [int] NOT NULL,
[VersionNumber] [timestamp] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Attribute__Solut__10D728CC] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Attribute__Suppo__11CB4D05] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__Attribute__Compo__12BF713E] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__Attribute__Overw__13B39577] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsMan__6B7099F3] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[AttributeLookupValue] ADD CONSTRAINT [XPKAttributeLookupValue] PRIMARY KEY CLUSTERED  ([AttributeLookupValueId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [NDX_AttrLookupValAttrIdEntityIdCompState] ON [MetadataSchema].[AttributeLookupValue] ([AttributeId], [EntityId], [ComponentState], [SolutionId], [OverwriteTime]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_AttributeLookupValue_RowId] ON [MetadataSchema].[AttributeLookupValue] ([AttributeLookupValueRowId], [AttributeLookupValueId]) ON [PRIMARY]
GO
