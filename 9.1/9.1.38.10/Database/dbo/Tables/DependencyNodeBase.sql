CREATE TABLE [dbo].[DependencyNodeBase] (
    [BaseSolutionId]    UNIQUEIDENTIFIER NULL,
    [ObjectId]          UNIQUEIDENTIFIER NULL,
    [TopSolutionId]     UNIQUEIDENTIFIER NULL,
    [VersionNumber]     ROWVERSION       NULL,
    [ParentId]          UNIQUEIDENTIFIER NULL,
    [IsSharedComponent] BIT              CONSTRAINT [DF_DependencyNodeBase_IsSharedComponent] DEFAULT ((0)) NULL,
    [DependencyNodeId]  UNIQUEIDENTIFIER NOT NULL,
    [IntroducedVersion] FLOAT (53)       NULL,
    [ComponentType]     INT              CONSTRAINT [DF_DependencyNodeBase_ComponentType] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_DependencyNode] PRIMARY KEY CLUSTERED ([DependencyNodeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [solution_base_dependencynode] FOREIGN KEY ([BaseSolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId]),
    CONSTRAINT [solution_top_dependencynode] FOREIGN KEY ([TopSolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId])
);


GO
ALTER TABLE [dbo].[DependencyNodeBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DependencyNodeBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_DependencyTopSolutionId]
    ON [dbo].[DependencyNodeBase]([TopSolutionId] ASC) WHERE ([TopSolutionId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_DependencyObjectId]
    ON [dbo].[DependencyNodeBase]([ObjectId] ASC, [ComponentType] ASC)
    INCLUDE([BaseSolutionId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_DependencyBaseSolutionId]
    ON [dbo].[DependencyNodeBase]([BaseSolutionId] ASC) WHERE ([BaseSolutionId] IS NOT NULL) WITH (FILLFACTOR = 80);

