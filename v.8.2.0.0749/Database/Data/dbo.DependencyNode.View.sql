USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[DependencyNode]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for DependencyNode
--
create view [dbo].[DependencyNode]
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

GO
