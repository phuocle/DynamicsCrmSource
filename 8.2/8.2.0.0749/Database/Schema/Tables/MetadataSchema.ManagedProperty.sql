CREATE TABLE [MetadataSchema].[ManagedProperty]
(
[ManagedPropertyId] [uniqueidentifier] NOT NULL,
[ManagedPropertyRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__ManagedPr__Manag__5FFEE747] DEFAULT (newid()),
[LogicalName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NOT NULL,
[ManagedPropertyType] [int] NOT NULL,
[Operation] [int] NULL,
[IsGlobalForOperation] [bit] NOT NULL CONSTRAINT [DF__ManagedPr__IsGlo__60F30B80] DEFAULT ((0)),
[EvaluationPriority] [int] NOT NULL,
[IsPrivate] [bit] NOT NULL CONSTRAINT [DF__ManagedPr__IsPri__61E72FB9] DEFAULT ((0)),
[DefaultValue] [bit] NOT NULL CONSTRAINT [DF__ManagedPr__Defau__62DB53F2] DEFAULT ((1)),
[ErrorCode] [int] NULL,
[EnablesMetadata] [bit] NULL,
[EnablesEntityName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[EnablesAttributeName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[EvaluationConditionClass] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[EvaluationConditionAssembly] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__ManagedPr__Solut__63CF782B] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__ManagedPr__Suppo__64C39C64] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__ManagedPr__Compo__65B7C09D] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__ManagedPr__Overw__66ABE4D6] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__ManagedPr__IsMan__67A0090F] DEFAULT ((0)),
[VersionNumber] [timestamp] NOT NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[ManagedProperty] ADD CONSTRAINT [PK_ManagedProperty] PRIMARY KEY CLUSTERED  ([ManagedPropertyId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ManagedProperty_Name] ON [MetadataSchema].[ManagedProperty] ([LogicalName]) ON [PRIMARY]
GO
