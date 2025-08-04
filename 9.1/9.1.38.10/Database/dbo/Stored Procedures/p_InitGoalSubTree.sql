

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
 