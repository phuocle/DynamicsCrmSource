CREATE TYPE [dbo].[VersionedDependencyNodeInsertTable] AS TABLE
(
[DependencyNodeId] [uniqueidentifier] NULL,
[ObjectId] [uniqueidentifier] NULL,
[ComponentType] [int] NULL,
[TopSolutionId] [uniqueidentifier] NULL,
[BaseSolutionId] [uniqueidentifier] NULL,
[ParentId] [uniqueidentifier] NULL,
[IntroducedVersion] [float] NULL
)
GO
