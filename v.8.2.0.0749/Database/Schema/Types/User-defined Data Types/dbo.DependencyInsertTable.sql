CREATE TYPE [dbo].[DependencyInsertTable] AS TABLE
(
[DependencyId] [uniqueidentifier] NULL,
[RequiredComponentNodeId] [uniqueidentifier] NULL,
[DependencyType] [int] NULL,
[DependentComponentNodeId] [uniqueidentifier] NULL
)
GO
