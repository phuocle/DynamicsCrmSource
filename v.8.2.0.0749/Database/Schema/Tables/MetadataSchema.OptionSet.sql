CREATE TABLE [MetadataSchema].[OptionSet]
(
[OptionSetId] [uniqueidentifier] NOT NULL,
[OptionSetRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__OptionSet__Optio__771756C9] DEFAULT (newid()),
[Name] [nvarchar] (123) COLLATE Latin1_General_CI_AI NOT NULL,
[OptionSetType] [tinyint] NOT NULL CONSTRAINT [DF__OptionSet__Optio__79F3C374] DEFAULT ((0)),
[IsGlobal] [bit] NOT NULL CONSTRAINT [DF__OptionSet__IsGlo__7AE7E7AD] DEFAULT ((0)),
[IsCustomOptionSet] [bit] NOT NULL CONSTRAINT [DF__OptionSet__IsCus__7BDC0BE6] DEFAULT ((0)),
[VersionNumber] [timestamp] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__OptionSet__Solut__074DBE92] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__OptionSet__Suppo__0841E2CB] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__OptionSet__Compo__09360704] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__OptionSet__Overw__0A2A2B3D] DEFAULT ((0)),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_OptionSet_IsCustomizable] DEFAULT ((1)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__OptionSet__IsMan__71297349] DEFAULT ((0)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[OptionSet] ADD CONSTRAINT [PK_OptionSet] PRIMARY KEY CLUSTERED  ([OptionSetId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_OptionSet_Name] ON [MetadataSchema].[OptionSet] ([Name]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_OptionSet_RowId] ON [MetadataSchema].[OptionSet] ([OptionSetRowId], [OptionSetId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_OptionSet_SolutionId] ON [MetadataSchema].[OptionSet] ([SolutionId], [OverwriteTime]) INCLUDE ([OptionSetId], [VersionNumber]) ON [PRIMARY]
GO
