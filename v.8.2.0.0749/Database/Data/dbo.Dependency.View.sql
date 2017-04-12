USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Dependency]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Dependency
--
create view [dbo].[Dependency]
 (
    -- logical attributes
    [DependentComponentType],
    [DependentComponentBaseSolutionId],
    [DependentComponentParentId],
    [RequiredComponentObjectId],
    [RequiredComponentType],
    [RequiredComponentBaseSolutionId],
    [RequiredComponentParentId],
    [DependentComponentObjectId],
    [RequiredComponentIntroducedVersion],

    -- physical attributes
    [DependencyId],
    [DependencyType],
    [RequiredComponentNodeId],
    [DependentComponentNodeId]
) with view_metadata as
select
    -- logical attributes
    [dependencynode_descendent_dependency].[ComponentType],
    [dependencynode_descendent_dependency].[BaseSolutionId],
    [dependencynode_descendent_dependency].[ParentId],
    [dependencynode_ancestor_dependency].[ObjectId],
    [dependencynode_ancestor_dependency].[ComponentType],
    [dependencynode_ancestor_dependency].[BaseSolutionId],
    [dependencynode_ancestor_dependency].[ParentId],
    [dependencynode_descendent_dependency].[ObjectId],
    [dependencynode_ancestor_dependency].[IntroducedVersion],

    -- physical attribute
    [DependencyBase].[DependencyId],
    [DependencyBase].[DependencyType],
    [DependencyBase].[RequiredComponentNodeId],
    [DependencyBase].[DependentComponentNodeId]
from [DependencyBase] 
    left join [DependencyNodeBase] [dependencynode_ancestor_dependency] on ([DependencyBase].[RequiredComponentNodeId] = [dependencynode_ancestor_dependency].[DependencyNodeId])
    left join [DependencyNodeBase] [dependencynode_descendent_dependency] on ([DependencyBase].[DependentComponentNodeId] = [dependencynode_descendent_dependency].[DependencyNodeId])

GO
