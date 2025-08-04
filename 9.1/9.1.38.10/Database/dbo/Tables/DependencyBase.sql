CREATE TABLE [dbo].[DependencyBase] (
    [DependentComponentNodeId] UNIQUEIDENTIFIER NULL,
    [DependencyId]             UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [DependencyType]           INT              CONSTRAINT [DF_DependencyBase_DependencyType] DEFAULT ((0)) NOT NULL,
    [RequiredComponentNodeId]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_Unique_Dependency] PRIMARY KEY CLUSTERED ([DependencyId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [dependencynode_ancestor_dependency] FOREIGN KEY ([RequiredComponentNodeId]) REFERENCES [dbo].[DependencyNodeBase] ([DependencyNodeId]),
    CONSTRAINT [dependencynode_descendent_dependency] FOREIGN KEY ([DependentComponentNodeId]) REFERENCES [dbo].[DependencyNodeBase] ([DependencyNodeId])
);


GO
ALTER TABLE [dbo].[DependencyBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DependencyBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Descendent]
    ON [dbo].[DependencyBase]([DependentComponentNodeId] ASC)
    INCLUDE([DependencyId]) WHERE ([DependentComponentNodeId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_DependencyType]
    ON [dbo].[DependencyBase]([DependencyType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueDependencyNodes]
    ON [dbo].[DependencyBase]([RequiredComponentNodeId] ASC, [DependentComponentNodeId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Ancestor]
    ON [dbo].[DependencyBase]([RequiredComponentNodeId] ASC)
    INCLUDE([DependencyId]) WHERE ([RequiredComponentNodeId] IS NOT NULL) WITH (FILLFACTOR = 80);

