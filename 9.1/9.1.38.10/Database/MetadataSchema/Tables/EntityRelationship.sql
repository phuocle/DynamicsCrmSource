CREATE TABLE [MetadataSchema].[EntityRelationship] (
    [EntityRelationshipId]          UNIQUEIDENTIFIER NOT NULL,
    [SchemaName]                    NVARCHAR (255)   NULL,
    [EntityRelationshipType]        TINYINT          DEFAULT ((0)) NOT NULL,
    [IsCustomRelationship]          BIT              DEFAULT ((0)) NOT NULL,
    [EntityRelationshipRowId]       UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [VersionNumber]                 ROWVERSION       NOT NULL,
    [SolutionId]                    UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]          UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]                TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                 DATETIME         DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                BIT              CONSTRAINT [DF_EntityRelationship_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsManaged]                     BIT              DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]             NVARCHAR (48)    NULL,
    [CanChangeHierarchicalSettings] BIT              DEFAULT ((0)) NOT NULL,
    [IsHierarchical]                BIT              DEFAULT ((0)) NOT NULL,
    [RecordId]                      BIGINT           IDENTITY (1, 1) NOT NULL,
    CONSTRAINT [XPKEntityRelationship] PRIMARY KEY NONCLUSTERED ([EntityRelationshipId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC)
);


GO
ALTER TABLE [MetadataSchema].[EntityRelationship] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [ndx_EntityRelationship_RecordId]
    ON [MetadataSchema].[EntityRelationship]([RecordId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationship_MetadataCache]
    ON [MetadataSchema].[EntityRelationship]([SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationship_Name]
    ON [MetadataSchema].[EntityRelationship]([SchemaName] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationship_SolutionId]
    ON [MetadataSchema].[EntityRelationship]([SolutionId] ASC, [OverwriteTime] ASC)
    INCLUDE([EntityRelationshipId], [VersionNumber]);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationship_RowId]
    ON [MetadataSchema].[EntityRelationship]([EntityRelationshipRowId] ASC);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_UniqueEntityRelationship]
    ON [MetadataSchema].[EntityRelationship]([ComponentState] ASC, [OverwriteTime] ASC, [SchemaName] ASC)
    INCLUDE([EntityRelationshipId]) WHERE ([ComponentState] IS NOT NULL AND [OverwriteTime] IS NOT NULL AND [SchemaName] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

