


--
-- base view for RuntimeDependency
--
create view dbo.[RuntimeDependency]
 (

    -- physical attributes
    [DependencyId],
    [DependentComponentNodeId],
    [RequiredComponentNodeId],
    [DependentComponentType],
    [RequiredComponentType],
    [CreatedTime],
    [RequiredComponentModifiedTime],
    [IsPublished]
) with view_metadata as
select

    -- physical attribute
    [RuntimeDependencyBase].[DependencyId],
    [RuntimeDependencyBase].[DependentComponentNodeId],
    [RuntimeDependencyBase].[RequiredComponentNodeId],
    [RuntimeDependencyBase].[DependentComponentType],
    [RuntimeDependencyBase].[RequiredComponentType],
    [RuntimeDependencyBase].[CreatedTime],
    [RuntimeDependencyBase].[RequiredComponentModifiedTime],
    [RuntimeDependencyBase].[IsPublished]
from [RuntimeDependencyBase] 
