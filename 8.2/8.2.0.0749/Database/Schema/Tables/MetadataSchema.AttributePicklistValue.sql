CREATE TABLE [MetadataSchema].[AttributePicklistValue]
(
[AttributePicklistValueId] [uniqueidentifier] NOT NULL,
[AttributePicklistValueRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Attribute__Attri__34A9A997] DEFAULT (newid()),
[Value] [int] NOT NULL,
[State_Status_Value] [int] NULL,
[InvariantName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[DisplayOrder] [int] NULL,
[VersionNumber] [timestamp] NOT NULL,
[OptionSetId] [uniqueidentifier] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Attribute__Solut__159BDDE9] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Attribute__Suppo__16900222] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__Attribute__Compo__1784265B] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__Attribute__Overw__18784A94] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsMan__6C64BE2C] DEFAULT ((0)),
[TransitionData] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Color] [nvarchar] (10) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[AttributePicklistValue] ADD CONSTRAINT [XPKAttributePicklistValue] PRIMARY KEY CLUSTERED  ([AttributePicklistValueId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_AttributePicklistValue_RowId] ON [MetadataSchema].[AttributePicklistValue] ([AttributePicklistValueRowId], [AttributePicklistValueId]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_AttributePicklistValue] ON [MetadataSchema].[AttributePicklistValue] ([OptionSetId], [Value], [ComponentState], [SolutionId], [OverwriteTime]) INCLUDE ([AttributePicklistValueId], [DisplayOrder], [InvariantName], [State_Status_Value]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_AttributePicklistValue_MetadataCache] ON [MetadataSchema].[AttributePicklistValue] ([SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[AttributePicklistValue] ADD CONSTRAINT [option_optionsetid] FOREIGN KEY ([OptionSetId]) REFERENCES [dbo].[OptionSetIds] ([OptionSetId])
GO
