CREATE TABLE [dbo].[AttributeMapBase] (
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]       INT              CONSTRAINT [DF_AttributeMapBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [AttributeMapIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_AttributeMapBase_AttributeMapIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]           DATETIME         NULL,
    [AttributeMapId]       UNIQUEIDENTIFIER NOT NULL,
    [ParentAttributeMapId] UNIQUEIDENTIFIER NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [TargetAttributeName]  NVARCHAR (128)   NOT NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [SourceAttributeName]  NVARCHAR (128)   NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_AttributeMapBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [EntityMapId]          UNIQUEIDENTIFIER NOT NULL,
    [IsSystem]             BIT              CONSTRAINT [DF_AttributeMapBase_IsSystem] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_AttributeMapBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [CreatedOn]            DATETIME         NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_AttributeMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_AttributeMap] PRIMARY KEY CLUSTERED ([AttributeMapId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_AttributeMapBase_AttributeMapIdUnique] UNIQUE NONCLUSTERED ([AttributeMapIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[AttributeMapBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[AttributeMapBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_SourceAttributeName]
    ON [dbo].[AttributeMapBase]([SourceAttributeName] ASC, [IsSystem] ASC)
    INCLUDE([EntityMapId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_names]
    ON [dbo].[AttributeMapBase]([TargetAttributeName] ASC, [SourceAttributeName] ASC)
    INCLUDE([EntityMapId], [IsSystem]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_attribute_map_attribute_maps]
    ON [dbo].[AttributeMapBase]([ParentAttributeMapId] ASC)
    INCLUDE([ComponentState]) WHERE ([ParentAttributeMapId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entity_map_attribute_maps]
    ON [dbo].[AttributeMapBase]([EntityMapId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[AttributeMapBase]([AttributeMapId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

