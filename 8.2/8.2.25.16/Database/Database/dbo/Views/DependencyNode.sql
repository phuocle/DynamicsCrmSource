


--
-- base view for DependencyNode
--
create view dbo.[DependencyNode]
 (

    -- physical attributes
    [DependencyNodeId],
    [ComponentType],
    [ObjectId],
    [BaseSolutionId],
    [TopSolutionId],
    [ParentId],
    [IsSharedComponent],
    [IntroducedVersion]
) with view_metadata as
select

    -- physical attribute
    [DependencyNodeBase].[DependencyNodeId],
    [DependencyNodeBase].[ComponentType],
    [DependencyNodeBase].[ObjectId],
    [DependencyNodeBase].[BaseSolutionId],
    [DependencyNodeBase].[TopSolutionId],
    [DependencyNodeBase].[ParentId],
    [DependencyNodeBase].[IsSharedComponent],
    [DependencyNodeBase].[IntroducedVersion]
from [DependencyNodeBase] 
