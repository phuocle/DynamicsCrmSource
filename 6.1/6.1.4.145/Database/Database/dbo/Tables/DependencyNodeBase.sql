CREATE TABLE [dbo].[DependencyNodeBase] (
    [BaseSolutionId]    UNIQUEIDENTIFIER NULL,
    [TopSolutionId]     UNIQUEIDENTIFIER NULL,
    [ParentId]          UNIQUEIDENTIFIER NULL,
    [DependencyNodeId]  UNIQUEIDENTIFIER NOT NULL,
    [ComponentType]     INT              CONSTRAINT [DF_DependencyNodeBase_ComponentType] DEFAULT ((0)) NOT NULL,
    [ObjectId]          UNIQUEIDENTIFIER NULL,
    [IsSharedComponent] BIT              CONSTRAINT [DF_DependencyNodeBase_IsSharedComponent] DEFAULT ((0)) NULL,
    [IntroducedVersion] FLOAT (53)       NULL,
    CONSTRAINT [cndx_PrimaryKey_DependencyNode] PRIMARY KEY CLUSTERED ([DependencyNodeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [solution_base_dependencynode] FOREIGN KEY ([BaseSolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId]) NOT FOR REPLICATION,
    CONSTRAINT [solution_top_dependencynode] FOREIGN KEY ([TopSolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [fndx_DependencyBaseSolutionId]
    ON [dbo].[DependencyNodeBase]([BaseSolutionId] ASC) WHERE ([BaseSolutionId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_DependencyTopSolutionId]
    ON [dbo].[DependencyNodeBase]([TopSolutionId] ASC) WHERE ([TopSolutionId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_DependencyObjectId]
    ON [dbo].[DependencyNodeBase]([ObjectId] ASC, [ComponentType] ASC)
    INCLUDE([BaseSolutionId]) WITH (FILLFACTOR = 80);

