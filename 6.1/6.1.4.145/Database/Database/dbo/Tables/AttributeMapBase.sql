CREATE TABLE [dbo].[AttributeMapBase] (
    [ModifiedOn]           DATETIME         NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [IsSystem]             BIT              CONSTRAINT [DF_AttributeMapBase_IsSystem] DEFAULT ((0)) NOT NULL,
    [EntityMapId]          UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]            DATETIME         NULL,
    [TargetAttributeName]  NVARCHAR (50)    NOT NULL,
    [SourceAttributeName]  NVARCHAR (50)    NOT NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [ParentAttributeMapId] UNIQUEIDENTIFIER NULL,
    [AttributeMapId]       UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]       INT              CONSTRAINT [DF_AttributeMapBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [AttributeMapIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_AttributeMapBase_AttributeMapIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_AttributeMapBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_AttributeMapBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_AttributeMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_AttributeMap] PRIMARY KEY CLUSTERED ([AttributeMapId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_AttributeMapBase_AttributeMapIdUnique] UNIQUE NONCLUSTERED ([AttributeMapIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[AttributeMapBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entity_map_attribute_maps]
    ON [dbo].[AttributeMapBase]([EntityMapId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_names]
    ON [dbo].[AttributeMapBase]([TargetAttributeName] ASC, [SourceAttributeName] ASC)
    INCLUDE([EntityMapId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_attribute_map_attribute_maps]
    ON [dbo].[AttributeMapBase]([ParentAttributeMapId] ASC)
    INCLUDE([ComponentState]) WHERE ([ParentAttributeMapId] IS NOT NULL) WITH (FILLFACTOR = 80);

