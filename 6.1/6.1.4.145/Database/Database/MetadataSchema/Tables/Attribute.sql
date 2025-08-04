CREATE TABLE [MetadataSchema].[Attribute] (
    [AttributeId]                        UNIQUEIDENTIFIER NOT NULL,
    [AttributeTypeId]                    UNIQUEIDENTIFIER NULL,
    [Name]                               NVARCHAR (50)    NULL,
    [PhysicalName]                       NVARCHAR (50)    NULL,
    [Length]                             INT              NULL,
    [IsNullable]                         BIT              NULL,
    [XmlAbbreviation]                    NVARCHAR (50)    NULL,
    [EntityId]                           UNIQUEIDENTIFIER NOT NULL,
    [DefaultValue]                       NVARCHAR (100)   NULL,
    [ColumnNumber]                       INT              NOT NULL,
    [ValidForUpdateAPI]                  BIT              NULL,
    [LogicalName]                        NVARCHAR (50)    NOT NULL,
    [ValidForReadAPI]                    BIT              NULL,
    [ValidForCreateAPI]                  BIT              NULL,
    [VisibleToPlatform]                  BIT              CONSTRAINT [Set_To_One] DEFAULT ((1)) NULL,
    [IsPKAttribute]                      BIT              NULL,
    [IsCustomField]                      BIT              CONSTRAINT [DF_Attribute_IsCustomField] DEFAULT ((0)) NULL,
    [IsLogical]                          BIT              CONSTRAINT [Set_To_Zero3] DEFAULT ((0)) NOT NULL,
    [DisplayMask]                        INT              CONSTRAINT [Set_To_Zero4] DEFAULT ((0)) NULL,
    [AttributeOf]                        UNIQUEIDENTIFIER NULL,
    [ReferencedEntityObjectTypeCode]     INT              CONSTRAINT [Set_To_Zero5] DEFAULT ((0)) NOT NULL,
    [AggregateOf]                        UNIQUEIDENTIFIER NULL,
    [IsSortAttribute]                    BIT              CONSTRAINT [DF_Attribute_IsSortAttribute_0] DEFAULT ((0)) NOT NULL,
    [PrecisionValue]                     TINYINT          NULL,
    [PrecisionSource]                    TINYINT          NULL,
    [IsIdentity]                         BIT              CONSTRAINT [DF_Attribute_IsIdentity_0] DEFAULT ((0)) NOT NULL,
    [IsReplicated]                       BIT              CONSTRAINT [DF_Attribute_IsReplicated_1] DEFAULT ((1)) NOT NULL,
    [VersionNumber]                      ROWVERSION       NOT NULL,
    [YomiOf]                             UNIQUEIDENTIFIER NULL,
    [AttributeRowId]                     UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [AppDefaultValue]                    INT              NULL,
    [AttributeLogicalTypeId]             NVARCHAR (50)    NULL,
    [Locked]                             BIT              DEFAULT ((0)) NOT NULL,
    [AttributeImeModeId]                 NVARCHAR (50)    NULL,
    [AttributeRequiredLevelId]           NVARCHAR (50)    NULL,
    [MaxLength]                          INT              NULL,
    [MinValue]                           FLOAT (53)       NULL,
    [MaxValue]                           FLOAT (53)       NULL,
    [Accuracy]                           INT              NULL,
    [AccuracySource]                     INT              NULL,
    [LookupStyle]                        NVARCHAR (50)    NULL,
    [LookupBrowse]                       BIT              NULL,
    [ImeMode]                            NVARCHAR (50)    NULL,
    [HasMultipleLabels]                  BIT              DEFAULT ((0)) NOT NULL,
    [IsRowGuidAttribute]                 BIT              DEFAULT ((0)) NOT NULL,
    [IsBaseCurrency]                     BIT              NULL,
    [CalculationOf]                      UNIQUEIDENTIFIER NULL,
    [IsAuditEnabled]                     BIT              DEFAULT ((1)) NOT NULL,
    [UpgradeDefaultValue]                NVARCHAR (100)   NULL,
    [OptionSetId]                        UNIQUEIDENTIFIER NULL,
    [SolutionId]                         UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]               UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]                     TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                      DATETIME         DEFAULT ((0)) NOT NULL,
    [LinkedAttributeId]                  UNIQUEIDENTIFIER NULL,
    [InheritsFrom]                       UNIQUEIDENTIFIER NULL,
    [IsStoredOnPrimaryTable]             BIT              DEFAULT ((1)) NOT NULL,
    [IsInheritanceTypeAttribute]         BIT              DEFAULT ((0)) NOT NULL,
    [TableColumnName]                    NVARCHAR (50)    NULL,
    [IsUnmanagedAttribute]               BIT              CONSTRAINT [DF_Attribute_IsUnmanagedAttribute] DEFAULT ((0)) NOT NULL,
    [IsOneWayBooleanAttribute]           BIT              CONSTRAINT [DF_Attribute_IsOneWayBooleanAttribute] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                     BIT              CONSTRAINT [DF_Attribute_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsRenameable]                       BIT              CONSTRAINT [DF_Attribute_IsRenameable] DEFAULT ((1)) NOT NULL,
    [CanModifySearchSettings]            BIT              CONSTRAINT [DF_Attribute_CanModifySearchSettings] DEFAULT ((1)) NOT NULL,
    [CanModifyRequirementLevelSettings]  BIT              CONSTRAINT [DF_Attribute_CanModifyRequirementLevelSettings] DEFAULT ((1)) NOT NULL,
    [CanBeSecuredForCreate]              BIT              CONSTRAINT [DF_Attribute_CanBeSecuredForCreate] DEFAULT ((0)) NOT NULL,
    [CanBeSecuredForRead]                BIT              CONSTRAINT [DF_Attribute_CanBeSecuredForRead] DEFAULT ((0)) NOT NULL,
    [CanBeSecuredForUpdate]              BIT              CONSTRAINT [DF_Attribute_CanBeSecuredForUpdate] DEFAULT ((0)) NOT NULL,
    [IsSecured]                          BIT              CONSTRAINT [DF_Attribute_IsSecured] DEFAULT ((0)) NOT NULL,
    [DeprecatedVersion]                  NVARCHAR (24)    NULL,
    [IsManaged]                          BIT              DEFAULT ((0)) NOT NULL,
    [ManagedPropertyLogicalName]         NVARCHAR (100)   NULL,
    [ManagedPropertyParentComponentType] INT              NULL,
    [ManagedPropertyParentAttributeName] NVARCHAR (100)   NULL,
    [CanModifyAdditionalSettings]        BIT              CONSTRAINT [DF_Attribute_CanModifyAdditionalSettings] DEFAULT ((1)) NOT NULL,
    [ValuesFromRelationshipAttribute]    UNIQUEIDENTIFIER NULL,
    [CanModifyAuditSettings]             BIT              CONSTRAINT [DF_Attribute_CanModifyAuditSettings] DEFAULT ((1)) NOT NULL,
    [IntroducedVersion]                  NVARCHAR (48)    NULL,
    [IsEncrypted]                        BIT              DEFAULT ((0)) NOT NULL,
    CONSTRAINT [XPKAttribute] PRIMARY KEY CLUSTERED ([AttributeId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [aggregate_attribute_of] FOREIGN KEY ([AggregateOf]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [attribute_attributeid] FOREIGN KEY ([AttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [attribute_entity_membership] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId]),
    CONSTRAINT [attribute_of] FOREIGN KEY ([AttributeOf]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [attribute_optionsetid] FOREIGN KEY ([OptionSetId]) REFERENCES [dbo].[OptionSetIds] ([OptionSetId]),
    CONSTRAINT [FK__Attribute__Attri__2F10007B] FOREIGN KEY ([AttributeTypeId]) REFERENCES [MetadataSchema].[AttributeTypes] ([AttributeTypeId]) NOT FOR REPLICATION,
    CONSTRAINT [yomi_of] FOREIGN KEY ([YomiOf]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
);


GO
CREATE NONCLUSTERED INDEX [attr_column_name]
    ON [MetadataSchema].[Attribute]([EntityId] ASC, [Name] ASC);


GO
CREATE NONCLUSTERED INDEX [attr_column_number]
    ON [MetadataSchema].[Attribute]([EntityId] ASC, [ColumnNumber] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_attr_logicalname]
    ON [MetadataSchema].[Attribute]([LogicalName] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_attr_name]
    ON [MetadataSchema].[Attribute]([Name] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_attr_physicalname]
    ON [MetadataSchema].[Attribute]([PhysicalName] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_Attribute_PhysicalName]
    ON [MetadataSchema].[Attribute]([EntityId] ASC, [PhysicalName] ASC);


GO
CREATE NONCLUSTERED INDEX [XIF12Attribute]
    ON [MetadataSchema].[Attribute]([AttributeTypeId] ASC);


GO
CREATE NONCLUSTERED INDEX [XIF13Attribute]
    ON [MetadataSchema].[Attribute]([EntityId] ASC, [AttributeTypeId] ASC, [ValidForReadAPI] ASC);


GO
CREATE NONCLUSTERED INDEX [XIF54Attribute]
    ON [MetadataSchema].[Attribute]([AttributeOf] ASC);


GO
CREATE NONCLUSTERED INDEX [XIF55Attribute]
    ON [MetadataSchema].[Attribute]([AggregateOf] ASC);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Attribute_RowId]
    ON [MetadataSchema].[Attribute]([AttributeRowId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_Attribute_MetadataCache]
    ON [MetadataSchema].[Attribute]([SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_YomiOf]
    ON [MetadataSchema].[Attribute]([YomiOf] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_OptionSetId]
    ON [MetadataSchema].[Attribute]([OptionSetId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_AttributeLinkAttributeId]
    ON [MetadataSchema].[Attribute]([LinkedAttributeId] ASC);

