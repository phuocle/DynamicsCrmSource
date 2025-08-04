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
    CONSTRAINT [XPKEntityRelationshipRole] PRIMARY KEY CLUSTERED ([EntityRelationshipRoleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [entityrelationshiprole_entityid] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId]),
    CONSTRAINT [entityrelationshiprole_relationshipid] FOREIGN KEY ([EntityRelationshipId]) REFERENCES [dbo].[EntityRelationshipIds] ([EntityRelationshipId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationshipRole_MetadataCache]
    ON [MetadataSchema].[EntityRelationshipRole]([SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC);

