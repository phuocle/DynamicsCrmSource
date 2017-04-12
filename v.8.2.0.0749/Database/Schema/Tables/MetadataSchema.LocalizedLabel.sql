CREATE TABLE [MetadataSchema].[LocalizedLabel]
(
[LocalizedLabelId] [uniqueidentifier] NOT NULL,
[LocalizedLabelRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Localized__Local__2B203F5D] DEFAULT (newid()),
[LanguageId] [int] NOT NULL,
[ObjectId] [uniqueidentifier] NOT NULL,
[ObjectColumnName] [sys].[sysname] NOT NULL,
[Label] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[VersionNumber] [timestamp] NOT NULL,
[LabelTypeCode] [int] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Localized__Solut__28AEB25D] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Localized__Suppo__29A2D696] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__Localized__Compo__2A96FACF] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__Localized__Overw__2B8B1F08] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__Localized__IsMan__70354F10] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[LocalizedLabel] ADD CONSTRAINT [XPKLocalizedLabel] PRIMARY KEY CLUSTERED  ([LocalizedLabelId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [LocalizedLabel_ComponentStateOverwriteTime] ON [MetadataSchema].[LocalizedLabel] ([LanguageId], [OverwriteTime], [SolutionId], [ComponentState]) INCLUDE ([IsManaged], [Label], [LabelTypeCode], [LocalizedLabelId], [LocalizedLabelRowId], [ObjectColumnName], [ObjectId], [SupportingSolutionId], [VersionNumber]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_LocalizedLabel_RowId] ON [MetadataSchema].[LocalizedLabel] ([LocalizedLabelRowId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_LocalizedLabel] ON [MetadataSchema].[LocalizedLabel] ([ObjectId], [LabelTypeCode], [ObjectColumnName], [LanguageId]) INCLUDE ([Label]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[LocalizedLabel] ADD CONSTRAINT [UQ_LocalizedLabelCheck] UNIQUE NONCLUSTERED  ([ObjectId], [ObjectColumnName], [LanguageId], [OverwriteTime], [ComponentState]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_LocalizedLabel_ForPublish] ON [MetadataSchema].[LocalizedLabel] ([ObjectId], [OverwriteTime]) INCLUDE ([ComponentState], [LocalizedLabelId], [LocalizedLabelRowId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_localizedlabel_fegetformxml] ON [MetadataSchema].[LocalizedLabel] ([OverwriteTime], [LanguageId], [ObjectId], [ObjectColumnName], [ComponentState], [LocalizedLabelId], [LocalizedLabelRowId]) INCLUDE ([Label]) ON [PRIMARY]
GO
