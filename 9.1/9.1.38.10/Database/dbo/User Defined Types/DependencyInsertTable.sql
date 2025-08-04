CREATE TYPE [dbo].[DependencyInsertTable] AS TABLE (
    [DependencyId]             UNIQUEIDENTIFIER NULL,
    [RequiredComponentNodeId]  UNIQUEIDENTIFIER NULL,
    [DependencyType]           INT              NULL,
    [DependentComponentNodeId] UNIQUEIDENTIFIER NULL);

