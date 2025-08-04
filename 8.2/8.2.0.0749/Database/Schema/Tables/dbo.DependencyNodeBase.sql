CREATE TABLE [dbo].[DependencyNodeBase]
(
[BaseSolutionId] [uniqueidentifier] NULL,
[TopSolutionId] [uniqueidentifier] NULL,
[ParentId] [uniqueidentifier] NULL,
[DependencyNodeId] [uniqueidentifier] NOT NULL,
[ComponentType] [int] NOT NULL CONSTRAINT [DF_DependencyNodeBase_ComponentType] DEFAULT ((0)),
[ObjectId] [uniqueidentifier] NULL,
[IsSharedComponent] [bit] NULL CONSTRAINT [DF_DependencyNodeBase_IsSharedComponent] DEFAULT ((0)),
[IntroducedVersion] [float] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DependencyNodeBase] ADD CONSTRAINT [cndx_PrimaryKey_DependencyNode] PRIMARY KEY CLUSTERED  ([DependencyNodeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_DependencyBaseSolutionId] ON [dbo].[DependencyNodeBase] ([BaseSolutionId]) WHERE ([BaseSolutionId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_DependencyObjectId] ON [dbo].[DependencyNodeBase] ([ObjectId], [ComponentType]) INCLUDE ([BaseSolutionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_DependencyTopSolutionId] ON [dbo].[DependencyNodeBase] ([TopSolutionId]) WHERE ([TopSolutionId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DependencyNodeBase] ADD CONSTRAINT [solution_base_dependencynode] FOREIGN KEY ([BaseSolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId])
GO
ALTER TABLE [dbo].[DependencyNodeBase] ADD CONSTRAINT [solution_top_dependencynode] FOREIGN KEY ([TopSolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId])
GO
