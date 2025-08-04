CREATE TABLE [MetadataSchema].[EntityKey] (
    [EntityKeyId]          UNIQUEIDENTIFIER NOT NULL,
    [EntityId]             UNIQUEIDENTIFIER NOT NULL,
    [EntityKeyRowId]       UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [ComponentState]       TINYINT          DEFAULT ((0)) NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [OverwriteTime]        DATETIME         DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [Name]                 NVARCHAR (64)    NOT NULL,
    [LogicalName]          NVARCHAR (64)    NOT NULL,
    [IndexId]              UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [IntroducedVersion]    NVARCHAR (48)    NULL,
    [IsCustomizable]       BIT              DEFAULT ((0)) NULL,
    [IsManaged]            BIT              DEFAULT ((0)) NOT NULL,
    [EntityKeyIndexStatus] INT              DEFAULT ((0)) NOT NULL,
    [AsyncJobId]           UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [VersionNumber]        ROWVERSION       NOT NULL,
    CONSTRAINT [XPKEntityKey] PRIMARY KEY CLUSTERED ([EntityKeyId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [entitykey_entity] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityId]
    ON [MetadataSchema].[EntityKey]([EntityId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityKey_SolutionId]
    ON [MetadataSchema].[EntityKey]([SolutionId] ASC, [OverwriteTime] ASC)
    INCLUDE([EntityKeyId], [VersionNumber]);

