CREATE TABLE [MetadataSchema].[RelationshipExtraCondition]
(
[ConditionId] [uniqueidentifier] NOT NULL ROWGUIDCOL,
[RelationshipId] [uniqueidentifier] NOT NULL,
[AttributeId] [uniqueidentifier] NOT NULL,
[ConditionOp] [tinyint] NOT NULL CONSTRAINT [DF__Relations__Condi__49D9D0A7] DEFAULT ((0)),
[Value] [int] NOT NULL CONSTRAINT [DF__Relations__Value__4ACDF4E0] DEFAULT ((0)),
[RelationshipExtraConditionRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Relations__Relat__237F1D95] DEFAULT (newid()),
[VersionNumber] [timestamp] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Relations__Solut__1F254823] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Relations__Suppo__20196C5C] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__Relations__Compo__210D9095] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__Relations__Overw__2201B4CE] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__Relations__IsMan__7311BBBB] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[RelationshipExtraCondition] ADD CONSTRAINT [extra_condition_condition_op_values] CHECK (([ConditionOp]>=(0) AND [ConditionOp]<(6)))
GO
ALTER TABLE [MetadataSchema].[RelationshipExtraCondition] ADD CONSTRAINT [XPKRelationshipExtraCondition] PRIMARY KEY CLUSTERED  ([ConditionId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_AttributeId] ON [MetadataSchema].[RelationshipExtraCondition] ([AttributeId]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RelationshipExtraCondition_RowId] ON [MetadataSchema].[RelationshipExtraCondition] ([RelationshipExtraConditionRowId], [ConditionId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RelationshipId] ON [MetadataSchema].[RelationshipExtraCondition] ([RelationshipId]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[RelationshipExtraCondition] ADD CONSTRAINT [extra_condition_attribute] FOREIGN KEY ([AttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
GO
ALTER TABLE [MetadataSchema].[RelationshipExtraCondition] ADD CONSTRAINT [extra_condition_relationship] FOREIGN KEY ([RelationshipId]) REFERENCES [dbo].[RelationshipIds] ([RelationshipId])
GO
