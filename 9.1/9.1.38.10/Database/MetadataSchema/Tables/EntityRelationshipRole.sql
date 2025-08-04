CREATE TABLE [MetadataSchema].[EntityRelationshipRole] (
    [EntityRelationshipRoleId]    UNIQUEIDENTIFIER NOT NULL,
    [EntityRelationshipId]        UNIQUEIDENTIFIER NOT NULL,
    [EntityId]                    UNIQUEIDENTIFIER NOT NULL,
    [RelationshipRoleType]        TINYINT          NOT NULL,
    [NavPaneDisplayOption]        TINYINT          NULL,
    [NavPaneArea]                 TINYINT          NULL,
    [NavPaneOrder]                INT              NULL,
    [NavPaneIcon]                 NVARCHAR (255)   NULL,
    [NavPaneOffline]              BIT              NULL,
    [NavPaneQueryApi]             NVARCHAR (100)   NULL,
    [NavPaneViewId]               NVARCHAR (100)   NULL,
    [NavPaneIsCustomizable]       BIT              NULL,
    [EntityRelationshipRoleRowId] UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [VersionNumber]               ROWVERSION       NOT NULL,
    [IntersectEntityAttributeId]  UNIQUEIDENTIFIER NULL,
    [AssociationRoleOrdinal]      INT              NULL,
    [SolutionId]                  UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]              TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]               DATETIME         DEFAULT ((0)) NOT NULL,
    [NavPaneId]                   NVARCHAR (100)   NULL,
    [IsManaged]                   BIT              DEFAULT ((0)) NOT NULL,
    [LogicalName]                 NVARCHAR (255)   NULL,
    [NavigationPropertyName]      NVARCHAR (255)   NULL,
    [RecordId]                    BIGINT           IDENTITY (1, 1) NOT NULL,
    CONSTRAINT [XPKEntityRelationshipRole] PRIMARY KEY NONCLUSTERED ([EntityRelationshipRoleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [entityrelationshiprole_entityid] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId]),
    CONSTRAINT [entityrelationshiprole_relationshipid] FOREIGN KEY ([EntityRelationshipId]) REFERENCES [dbo].[EntityRelationshipIds] ([EntityRelationshipId])
);


GO
ALTER TABLE [MetadataSchema].[EntityRelationshipRole] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [ndx_EntityRelationshipRole_RecordId]
    ON [MetadataSchema].[EntityRelationshipRole]([RecordId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityId]
    ON [MetadataSchema].[EntityRelationshipRole]([EntityId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationshipRole_MetadataCache]
    ON [MetadataSchema].[EntityRelationshipRole]([SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_EntityRelationshipRole_RowId]
    ON [MetadataSchema].[EntityRelationshipRole]([EntityRelationshipRoleRowId] ASC, [EntityRelationshipRoleId] ASC);


GO
CREATE NONCLUSTERED INDEX [EntityRelationshipRole_ComponentStateOverwriteTime]
    ON [MetadataSchema].[EntityRelationshipRole]([ComponentState] ASC, [OverwriteTime] ASC)
    INCLUDE([EntityRelationshipRoleId], [VersionNumber]);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationshipRole_SolutionImport]
    ON [MetadataSchema].[EntityRelationshipRole]([EntityRelationshipId] ASC, [RelationshipRoleType] ASC, [ComponentState] ASC, [OverwriteTime] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationshipId_Included_VersionNumberNavigationPropertyName]
    ON [MetadataSchema].[EntityRelationshipRole]([EntityRelationshipId] ASC)
    INCLUDE([VersionNumber], [NavigationPropertyName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

