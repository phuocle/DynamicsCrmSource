

CREATE procedure [dbo].[p_DetectUnitLoop](
 @UoMId uniqueidentifier, 
 @BaseUoMId uniqueidentifier) 
as
/*
	This proc is to be used to determine if creating one unit based on another would create a loop in the unit hierarchy.
It also detects if a loop already exists somewhere at or below the unit.

Pre-condition:
	We assume @UoMId and @BaseUoMId are in the same unit schedule.

Return Values : 
ErrorCode ErrorMessage
  '4'  'The BaseUoMId passed in is not valid' as ErrorMessage.'
  '3'  'The UoMId passed in is not valid' as ErrorMessage.'
  '2'  'Using this base unit would create a loop in the unit hierarchy.'
  '1'  'There is already a loop existing in the unit hierarchy.'
*/
set nocount on
Declare @TempBaseUnitId uniqueidentifier


   -- make sure that the @BaseUoMId is a valid unit id.
   IF not exists(select UoMId from UoMBase where UoMId = @BaseUoMId)
     BEGIN 
      select N'4' as ErrorCode,  N'The BaseUoMId passed in is not valid.' as ErrorMessage
      return 
     END

   -- make sure that the @UoMId is a valid unit id.
   IF not exists(select UoMId from UoMBase where UoMId = @UoMId)
     BEGIN 
      select N'3' as ErrorCode, N'The UoMId passed in is not valid.' as ErrorMessage
      return 
     END


select @TempBaseUnitId = @BaseUoMId 

create table #Ids ( IdVisited uniqueidentifier primary key)
WHILE ( 1 = 1 )

 BEGIN
   if (@TempBaseUnitId = @UoMId)
     -- while chasing down the base unit of the base unit (of the base unit...) you bumped into the unit.  this would create a loop	
     BEGIN
	select N'2' as ErrorCode, N'Using this base unit would create a loop in the unit hierarchy.' as ErrorMessage
	BREAK
     END

   select @TempBaseUnitId = BaseUoM from UoMBase  where UoMId = @TempBaseUnitId 

   IF (@TempBaseUnitId is null)
     BEGIN 
      -- This implies that there is a dead end to the unit->base unit-> chain and hence no fear of looping.	
      select N'0' as ErrorCode, N'This base unit is valid and would create no loop in the unit hierarchy.' as ErrorMessage
      BREAK
     END
   ELSE
     BEGIN 
	if exists (select * from #Ids where @TempBaseUnitId = IdVisited)
	  BEGIN
	      -- This should never happen.  if it does, that means there is already a loop in the 1.x database.
	      select N'1' as ErrorCode, N'There is already a loop existing in the unit hierarchy.' as ErrorMessage             
      	      BREAK
	  END
	else
	  BEGIN
		Insert into #Ids(IdVisited) values (@TempBaseUnitId)
		CONTINUE
	  END
     END
   BREAK 	
 END
