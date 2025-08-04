CREATE TABLE [MetadataSchema].[EntityRelationship] (
    [EntityRelationshipId]    UNIQUEIDENTIFIER NOT NULL,
    [SchemaName]              NVARCHAR (255)   NULL,
    [EntityRelationshipType]  TINYINT          DEFAULT ((0)) NOT NULL,
    [IsCustomRelationship]    BIT              DEFAULT ((0)) NOT NULL,
    [EntityRelationshipRowId] UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [VersionNumber]           ROWVERSION       NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]          TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]           DATETIME         DEFAULT ((0)) NOT NULL,
    [IsCustomizable]          BIT              CONSTRAINT [DF_EntityRelationship_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsManaged]               BIT              DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]       NVARCHAR (48)    NULL,
    CONSTRAINT [XPKEntityRelationship] PRIMARY KEY CLUSTERED ([EntityRelationshipId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationship_Name]
    ON [MetadataSchema].[EntityRelationship]([SchemaName] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityRelationship_MetadataCache]
    ON [MetadataSchema].[EntityRelationship]([SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC);

