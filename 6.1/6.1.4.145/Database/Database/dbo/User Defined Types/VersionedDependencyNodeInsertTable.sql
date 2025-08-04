CREATE TYPE [dbo].[VersionedDependencyNodeInsertTable] AS TABLE (
    [DependencyNodeId]  UNIQUEIDENTIFIER NULL,
    [ObjectId]          UNIQUEIDENTIFIER NULL,
    [ComponentType]     INT              NULL,
    [TopSolutionId]     UNIQUEIDENTIFIER NULL,
    [BaseSolutionId]    UNIQUEIDENTIFIER NULL,
    [ParentId]          UNIQUEIDENTIFIER NULL,
    [IntroducedVersion] FLOAT (53)       NULL);

