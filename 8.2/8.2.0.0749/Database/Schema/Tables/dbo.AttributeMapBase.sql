CREATE TABLE [dbo].[AttributeMapBase]
(
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[IsSystem] [bit] NOT NULL CONSTRAINT [DF_AttributeMapBase_IsSystem] DEFAULT ((0)),
[EntityMapId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[TargetAttributeName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL,
[SourceAttributeName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ParentAttributeMapId] [uniqueidentifier] NULL,
[AttributeMapId] [uniqueidentifier] NOT NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_AttributeMapBase_ComponentState] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[AttributeMapIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_AttributeMapBase_AttributeMapIdUnique] DEFAULT (newid()),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_AttributeMapBase_IsManaged] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_AttributeMapBase_OverwriteTime] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AttributeMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238')
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AttributeMapBase] ADD CONSTRAINT [cndx_PrimaryKey_AttributeMap] PRIMARY KEY CLUSTERED  ([AttributeMapId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AttributeMapBase] ADD CONSTRAINT [UQ_AttributeMapBase_AttributeMapIdUnique] UNIQUE NONCLUSTERED  ([AttributeMapIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entity_map_attribute_maps] ON [dbo].[AttributeMapBase] ([EntityMapId]) INCLUDE ([ComponentState]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_attribute_map_attribute_maps] ON [dbo].[AttributeMapBase] ([ParentAttributeMapId]) INCLUDE ([ComponentState]) WHERE ([ParentAttributeMapId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SourceAttributeName] ON [dbo].[AttributeMapBase] ([SourceAttributeName], [IsSystem]) INCLUDE ([EntityMapId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_names] ON [dbo].[AttributeMapBase] ([TargetAttributeName], [SourceAttributeName]) INCLUDE ([EntityMapId], [IsSystem]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[AttributeMapBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
