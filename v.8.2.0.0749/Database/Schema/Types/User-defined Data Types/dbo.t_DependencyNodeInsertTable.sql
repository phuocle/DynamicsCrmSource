CREATE TYPE [dbo].[t_DependencyNodeInsertTable] AS TABLE
(
[DependencyNodeId] [uniqueidentifier] NULL,
[ObjectId] [uniqueidentifier] NULL,
[ComponentType] [int] NULL,
[TopSolutionId] [uniqueidentifier] NULL,
[BaseSolutionId] [uniqueidentifier] NULL,
[ParentId] [uniqueidentifier] NULL
)
GO
