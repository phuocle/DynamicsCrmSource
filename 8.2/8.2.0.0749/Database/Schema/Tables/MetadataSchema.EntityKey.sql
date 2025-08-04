CREATE TABLE [MetadataSchema].[EntityKey]
(
[EntityKeyId] [uniqueidentifier] NOT NULL,
[EntityId] [uniqueidentifier] NOT NULL,
[EntityKeyRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityKey__Entit__5E582CA5] DEFAULT (newid()),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__EntityKey__Compo__5F4C50DE] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityKey__Solut__60407517] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238'),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__EntityKey__Overw__61349950] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityKey__Suppo__6228BD89] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[Name] [nvarchar] (64) COLLATE Latin1_General_CI_AI NOT NULL,
[LogicalName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NOT NULL,
[IndexId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityKey__Index__631CE1C2] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[IsCustomizable] [bit] NULL CONSTRAINT [DF__EntityKey__IsCus__641105FB] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__EntityKey__IsMan__65052A34] DEFAULT ((0)),
[EntityKeyIndexStatus] [int] NOT NULL CONSTRAINT [DF__EntityKey__Entit__65F94E6D] DEFAULT ((0)),
[AsyncJobId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__EntityKey__Async__66ED72A6] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[VersionNumber] [timestamp] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD CONSTRAINT [XPKEntityKey] PRIMARY KEY CLUSTERED  ([EntityKeyId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityId] ON [MetadataSchema].[EntityKey] ([EntityId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityKey_SolutionId] ON [MetadataSchema].[EntityKey] ([SolutionId], [OverwriteTime]) INCLUDE ([EntityKeyId], [VersionNumber]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD CONSTRAINT [entitykey_entity] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId])
GO
