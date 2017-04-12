SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


CREATE procedure [dbo].[p_DetectBusinessLoop](
 @ParentId uniqueidentifier, 
 @ChildId uniqueidentifier) 
as
/*
	This proc is to be used to determine if parenting one business to another would create a loop inside the business hierarchy.
It also detects if a loop already exists somewhere at or above the parent business

Return Values : 
ErrorCode ErrorMessage
  '4'  'The ParentId passed in is not valid'
  '3'  'The ChildId passed in is not valid'
  '2'  'This association would create a loop in the database.'
  '1'  'There is already a loop existing in the database.'
*/
set nocount on
Declare @TempParentId uniqueidentifier

	

   -- make sure that the @ParentId is a valid business id.
   IF not exists(select BusinessUnitId from BusinessUnitBase where BusinessUnitId = @ParentId)
     BEGIN 
      select N'4' as ErrorCode,  N'The ParentId passed in is not valid.' as ErrorMessage
      return 
     END

   -- make sure that the @ChildId is a valid account id.
   IF not exists(select BusinessUnitId from BusinessUnitBase where BusinessUnitId = @ChildId)
     BEGIN 
      select N'3' as ErrorCode, N'The ChildId passed in is not valid.' as ErrorMessage
      return 
     END


select @TempParentId = @ParentId 

create table #Ids ( IdVisited uniqueidentifier primary key)
WHILE ( 1 = 1 )

 BEGIN
   if (@TempParentId = @ChildId)
     -- while chasing the parent of the parent (of the parent...) you bumped into the child.  this would create a loop	
     BEGIN
	select N'2' as ErrorCode, N'This association would create a loop in the database.' as ErrorMessage
	BREAK
     END

   select @TempParentId = ParentBusinessUnitId from BusinessUnitBase  where BusinessUnitId = @TempParentId	

   IF (@TempParentId is null)
     BEGIN 
      -- This implies that there is a dead end to the parent->grand parent-> chain and hence no fear of looping.	
      select N'0' as ErrorCode, N'This association is valid and would create no loop in the database.' as ErrorMessage
      BREAK
     END
   ELSE
     BEGIN 
	if exists (select 1 from #Ids where @TempParentId = IdVisited)
	  BEGIN
	      -- This should never happen.  if it does, that means some one has been mucking with the DB from the backend.	
	      select N'1' as ErrorCode, N'There is already a loop existing in the database.' as ErrorMessage             
      	      BREAK
	  END
	else
	  BEGIN
		Insert into #Ids(IdVisited) values (@TempParentId)
		CONTINUE
	  END
     END
   BREAK 	
 END
GO