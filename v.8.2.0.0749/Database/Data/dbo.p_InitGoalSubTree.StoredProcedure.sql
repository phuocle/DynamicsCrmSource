USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_InitGoalSubTree]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- Starting from GoalId, Initialize the SubTree rooted at @GoalId with @Tree and starting depth = @Depth


CREATE procedure [dbo].[p_InitGoalSubTree](
 @GoalId uniqueidentifier,
 @TreeId uniqueidentifier,
 @Depth int
) 
as

set nocount on;
  
 with traverseSubTrees(GoalId, Depth) As
(
--Anchor member
	Select @GoalId, @Depth  -- from dbo.GoalBase as G where GoalId = @GoalId
	
	UNION ALL 
-- Recursive member definition
Select G1.GoalId, t.Depth + 1 from dbo.GoalBase G1 Inner join traverseSubTrees as t on t.GoalId = G1.ParentGoalId
)

update Goal set Depth = t.Depth, TreeId = @TreeId  From Goal as g
 JOIN traverseSubTrees as t on t.GoalId = g.GoalId   
 
GO
