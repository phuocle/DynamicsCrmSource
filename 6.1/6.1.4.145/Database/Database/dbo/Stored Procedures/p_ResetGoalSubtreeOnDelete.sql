


CREATE procedure [dbo].[p_ResetGoalSubtreeOnDelete](
 @ParentGoalId uniqueidentifier) 
as

set nocount on;
Declare @depth int;
select @depth = Depth from Goal where GoalId = @ParentGoalId;

   ---- make sure that the @ParentGoalId is a valid goal id.
   --IF not exists(select GoalId from GoalBase where GoalId = @ParentGoalId)
   --  BEGIN 
   --   select '4' as ErrorCode,  'The GoalId passed in is not valid.' as ErrorMessage
   --   return 
   --  END
   
   with traverseSubTrees( TreeId, Depth, Title, GoalId)As
(
--Anchor member
	Select NEWID(), Depth, Title, GoalId from dbo.GoalBase as G where ParentGoalId = @ParentGoalId
	
	UNION ALL 
-- Recursive member definition
Select t.TreeId, G1.Depth, G1.Title, G1.GoalId from dbo.GoalBase G1 Inner join traverseSubTrees as t on t.GoalId = G1.ParentGoalId

)

update Goal set Depth = g.Depth - @depth - 1, TreeId = t.TreeId  From Goal as g
 JOIN traverseSubTrees as t on t.GoalId = g.GoalId
   
 