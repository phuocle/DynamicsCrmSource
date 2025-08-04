CREATE TYPE [dbo].[t_DependencyNodeInsertTable] AS TABLE (
    [DependencyNodeId] UNIQUEIDENTIFIER NULL,
    [ObjectId]         UNIQUEIDENTIFIER NULL,
    [ComponentType]    INT              NULL,
    [TopSolutionId]    UNIQUEIDENTIFIER NULL,
    [BaseSolutionId]   UNIQUEIDENTIFIER NULL,
    [ParentId]         UNIQUEIDENTIFIER NULL);

