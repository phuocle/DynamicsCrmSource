CREATE TABLE [MetadataSchema].[Attribute]
(
[AttributeId] [uniqueidentifier] NOT NULL,
[AttributeTypeId] [uniqueidentifier] NULL,
[Name] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[PhysicalName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Length] [int] NULL,
[IsNullable] [bit] NULL,
[XmlAbbreviation] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[EntityId] [uniqueidentifier] NOT NULL,
[DefaultValue] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ColumnNumber] [int] NOT NULL,
[ValidForUpdateAPI] [bit] NULL,
[LogicalName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL,
[ValidForReadAPI] [bit] NULL,
[ValidForCreateAPI] [bit] NULL,
[VisibleToPlatform] [bit] NULL CONSTRAINT [Set_To_One] DEFAULT ((1)),
[IsPKAttribute] [bit] NULL,
[IsCustomField] [bit] NULL CONSTRAINT [DF_Attribute_IsCustomField] DEFAULT ((0)),
[IsLogical] [bit] NOT NULL CONSTRAINT [Set_To_Zero3] DEFAULT ((0)),
[DisplayMask] [int] NULL CONSTRAINT [Set_To_Zero4] DEFAULT ((0)),
[AttributeOf] [uniqueidentifier] NULL,
[ReferencedEntityObjectTypeCode] [int] NOT NULL CONSTRAINT [Set_To_Zero5] DEFAULT ((0)),
[AggregateOf] [uniqueidentifier] NULL,
[IsSortAttribute] [bit] NOT NULL CONSTRAINT [DF_Attribute_IsSortAttribute_0] DEFAULT ((0)),
[PrecisionValue] [tinyint] NULL,
[PrecisionSource] [tinyint] NULL,
[IsIdentity] [bit] NOT NULL CONSTRAINT [DF_Attribute_IsIdentity_0] DEFAULT ((0)),
[IsReplicated] [bit] NOT NULL CONSTRAINT [DF_Attribute_IsReplicated_1] DEFAULT ((1)),
[VersionNumber] [timestamp] NOT NULL,
[YomiOf] [uniqueidentifier] NULL,
[AttributeRowId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Attribute__Attri__0C9BB83D] DEFAULT (newid()),
[AppDefaultValue] [int] NULL,
[AttributeLogicalTypeId] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Locked] [bit] NOT NULL CONSTRAINT [DF__Attribute__Locke__0D8FDC76] DEFAULT ((0)),
[AttributeImeModeId] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[AttributeRequiredLevelId] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[MaxLength] [int] NULL,
[MinValue] [float] NULL,
[MaxValue] [float] NULL,
[Accuracy] [int] NULL,
[AccuracySource] [int] NULL,
[LookupStyle] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[LookupBrowse] [bit] NULL,
[ImeMode] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[HasMultipleLabels] [bit] NOT NULL CONSTRAINT [DF__Attribute__HasMu__31CD3CEC] DEFAULT ((0)),
[IsRowGuidAttribute] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsRow__3F27380A] DEFAULT ((0)),
[IsBaseCurrency] [bit] NULL,
[CalculationOf] [uniqueidentifier] NULL,
[IsAuditEnabled] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsAud__706A593A] DEFAULT ((1)),
[UpgradeDefaultValue] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[OptionSetId] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Attribute__Solut__0C1273AF] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__Attribute__Suppo__0D0697E8] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ComponentState] [tinyint] NOT NULL CONSTRAINT [DF__Attribute__Compo__0DFABC21] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF__Attribute__Overw__0EEEE05A] DEFAULT ((0)),
[LinkedAttributeId] [uniqueidentifier] NULL,
[InheritsFrom] [uniqueidentifier] NULL,
[IsStoredOnPrimaryTable] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsSto__3DA9CF43] DEFAULT ((1)),
[IsInheritanceTypeAttribute] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsInh__3E9DF37C] DEFAULT ((0)),
[TableColumnName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[IsUnmanagedAttribute] [bit] NOT NULL CONSTRAINT [DF_Attribute_IsUnmanagedAttribute] DEFAULT ((0)),
[IsOneWayBooleanAttribute] [bit] NOT NULL CONSTRAINT [DF_Attribute_IsOneWayBooleanAttribute] DEFAULT ((0)),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_Attribute_IsCustomizable] DEFAULT ((1)),
[IsRenameable] [bit] NOT NULL CONSTRAINT [DF_Attribute_IsRenameable] DEFAULT ((1)),
[CanModifySearchSettings] [bit] NOT NULL CONSTRAINT [DF_Attribute_CanModifySearchSettings] DEFAULT ((1)),
[CanModifyRequirementLevelSettings] [bit] NOT NULL CONSTRAINT [DF_Attribute_CanModifyRequirementLevelSettings] DEFAULT ((1)),
[CanBeSecuredForCreate] [bit] NOT NULL CONSTRAINT [DF_Attribute_CanBeSecuredForCreate] DEFAULT ((0)),
[CanBeSecuredForRead] [bit] NOT NULL CONSTRAINT [DF_Attribute_CanBeSecuredForRead] DEFAULT ((0)),
[CanBeSecuredForUpdate] [bit] NOT NULL CONSTRAINT [DF_Attribute_CanBeSecuredForUpdate] DEFAULT ((0)),
[IsSecured] [bit] NOT NULL CONSTRAINT [DF_Attribute_IsSecured] DEFAULT ((0)),
[DeprecatedVersion] [nvarchar] (24) COLLATE Latin1_General_CI_AI NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsMan__6A7C75BA] DEFAULT ((0)),
[ManagedPropertyLogicalName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ManagedPropertyParentComponentType] [int] NULL,
[ManagedPropertyParentAttributeName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CanModifyAdditionalSettings] [bit] NOT NULL CONSTRAINT [DF_Attribute_CanModifyAdditionalSettings] DEFAULT ((1)),
[ValuesFromRelationshipAttribute] [uniqueidentifier] NULL,
[CanModifyAuditSettings] [bit] NOT NULL CONSTRAINT [DF_Attribute_CanModifyAuditSettings] DEFAULT ((1)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[IsEncrypted] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsEnc__5AC5FC35] DEFAULT ((0)),
[SourceType] [int] NOT NULL CONSTRAINT [DF__Attribute__Sourc__7CBBECDD] DEFAULT ((0)),
[FormulaDefinition] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SourceTypeMask] [int] NOT NULL CONSTRAINT [DF__Attribute__Sourc__7DB01116] DEFAULT ((0)),
[Behavior] [int] NULL,
[CanModifyBehavior] [bit] NULL,
[CanModifyGlobalFilterSettings] [bit] NOT NULL CONSTRAINT [DF__Attribute__CanMo__57AB2F16] DEFAULT ((1)),
[CanModifyIsSortableSettings] [bit] NOT NULL CONSTRAINT [DF__Attribute__CanMo__589F534F] DEFAULT ((1)),
[IsGlobalFilterEnabled] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsGlo__7723DA6F] DEFAULT ((0)),
[IsSearchable] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsSea__7A00471A] DEFAULT ((0)),
[IsFilterable] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsFil__7AF46B53] DEFAULT ((0)),
[IsRetrievable] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsRet__7BE88F8C] DEFAULT ((0)),
[IsFilterableSetBySystem] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsFil__7CDCB3C5] DEFAULT ((0)),
[IsRetrievableSetBySystem] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsRet__7DD0D7FE] DEFAULT ((0)),
[IsSortableEnabled] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsSor__7EC4FC37] DEFAULT ((0)),
[IsActive] [bit] NOT NULL CONSTRAINT [DF__Attribute__IsAct__7D5CA209] DEFAULT ((1))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[Attribute] ADD CONSTRAINT [XPKAttribute] PRIMARY KEY CLUSTERED  ([AttributeId], [SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [XIF55Attribute] ON [MetadataSchema].[Attribute] ([AggregateOf]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [XIF54Attribute] ON [MetadataSchema].[Attribute] ([AttributeOf]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Attribute_RowId] ON [MetadataSchema].[Attribute] ([AttributeRowId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [XIF12Attribute] ON [MetadataSchema].[Attribute] ([AttributeTypeId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Attribute_ComponentStateOverwriteTime] ON [MetadataSchema].[Attribute] ([ComponentState], [OverwriteTime]) INCLUDE ([AttributeId], [VersionNumber]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Attribute_SolutionImport] ON [MetadataSchema].[Attribute] ([ComponentState], [OverwriteTime], [InheritsFrom], [CanBeSecuredForRead], [IsSecured]) INCLUDE ([AttributeId], [AttributeOf], [AttributeTypeId], [CalculationOf], [ColumnNumber], [EntityId], [HasMultipleLabels], [IsCustomField], [IsEncrypted], [IsInheritanceTypeAttribute], [IsLogical], [IsPKAttribute], [IsRowGuidAttribute], [IsStoredOnPrimaryTable], [LogicalName], [Name], [PhysicalName], [TableColumnName], [ValidForReadAPI], [XmlAbbreviation]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [XIF13Attribute] ON [MetadataSchema].[Attribute] ([EntityId], [AttributeTypeId], [ValidForReadAPI]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [attr_column_number] ON [MetadataSchema].[Attribute] ([EntityId], [ColumnNumber]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Attribute_EntityId_ColumnNumber] ON [MetadataSchema].[Attribute] ([EntityId], [ColumnNumber]) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [attr_column_name] ON [MetadataSchema].[Attribute] ([EntityId], [Name]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_attribute_fegetformxml] ON [MetadataSchema].[Attribute] ([EntityId], [OverwriteTime], [ComponentState], [AttributeOf], [AggregateOf], [ValidForCreateAPI], [ValidForUpdateAPI], [ValidForReadAPI], [AttributeTypeId], [AttributeId], [SolutionId], [AttributeRowId]) INCLUDE ([DisplayMask], [IsCustomField], [IsNullable], [Length], [LogicalName], [SourceTypeMask]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Attribute_PhysicalName] ON [MetadataSchema].[Attribute] ([EntityId], [PhysicalName]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_AttributeLinkAttributeId] ON [MetadataSchema].[Attribute] ([LinkedAttributeId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_attr_logicalname] ON [MetadataSchema].[Attribute] ([LogicalName]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_attr_name] ON [MetadataSchema].[Attribute] ([Name]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_OptionSetId] ON [MetadataSchema].[Attribute] ([OptionSetId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_attr_physicalname] ON [MetadataSchema].[Attribute] ([PhysicalName]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Attribute_MetadataCache] ON [MetadataSchema].[Attribute] ([SolutionId], [ComponentState], [OverwriteTime]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Attribute_SolutionId] ON [MetadataSchema].[Attribute] ([SolutionId], [OverwriteTime]) INCLUDE ([AttributeId], [VersionNumber]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_YomiOf] ON [MetadataSchema].[Attribute] ([YomiOf]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[Attribute] ADD CONSTRAINT [aggregate_attribute_of] FOREIGN KEY ([AggregateOf]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
GO
ALTER TABLE [MetadataSchema].[Attribute] ADD CONSTRAINT [attribute_entity_membership] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId])
GO
ALTER TABLE [MetadataSchema].[Attribute] ADD CONSTRAINT [attribute_of] FOREIGN KEY ([AttributeOf]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
GO
ALTER TABLE [MetadataSchema].[Attribute] ADD CONSTRAINT [attribute_optionsetid] FOREIGN KEY ([OptionSetId]) REFERENCES [dbo].[OptionSetIds] ([OptionSetId])
GO
ALTER TABLE [MetadataSchema].[Attribute] WITH NOCHECK ADD CONSTRAINT [FK__Attribute__Attri__2F10007B] FOREIGN KEY ([AttributeTypeId]) REFERENCES [MetadataSchema].[AttributeTypes] ([AttributeTypeId]) NOT FOR REPLICATION
GO
ALTER TABLE [MetadataSchema].[Attribute] ADD CONSTRAINT [yomi_of] FOREIGN KEY ([YomiOf]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
GO
