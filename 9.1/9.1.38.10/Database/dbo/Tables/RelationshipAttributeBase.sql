CREATE TABLE [dbo].[RelationshipAttributeBase] (
    [RelationshipAttributeId] UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_RelationshipAttributeBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_RelationshipAttributeBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [ComponentState]          INT              CONSTRAINT [DF_RelationshipAttributeBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_RelationshipAttributeBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_RelationshipAttributeBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]          BIT              CONSTRAINT [DF_RelationshipAttributeBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [RelationshipId]          UNIQUEIDENTIFIER NOT NULL,
    [ReferencingAttributeId]  UNIQUEIDENTIFIER NOT NULL,
    [ReferencedAttributeId]   UNIQUEIDENTIFIER NOT NULL,
    [Name]                    NVARCHAR (128)   NULL,
    CONSTRAINT [cndx_PrimaryKey_RelationshipAttribute] PRIMARY KEY CLUSTERED ([RelationshipAttributeId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [referencedattribute_relationshipattribute] FOREIGN KEY ([ReferencedAttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [referencingattribute_relationshipattribute] FOREIGN KEY ([ReferencingAttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [relationship_relationshipattribute] FOREIGN KEY ([RelationshipId]) REFERENCES [dbo].[RelationshipIds] ([RelationshipId]),
    CONSTRAINT [UQ_RelationshipAttributeBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[RelationshipAttributeBase]([RelationshipAttributeId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_UniqueRelationshipAttribute]
    ON [dbo].[RelationshipAttributeBase]([ComponentState] ASC, [OverwriteTime] ASC, [ReferencedAttributeId] ASC, [ReferencingAttributeId] ASC, [RelationshipId] ASC)
    INCLUDE([RelationshipAttributeId]) WHERE ([ComponentState] IS NOT NULL AND [OverwriteTime] IS NOT NULL AND [ReferencedAttributeId] IS NOT NULL AND [ReferencingAttributeId] IS NOT NULL AND [RelationshipId] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

