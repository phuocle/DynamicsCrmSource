

CREATE procedure [dbo].[p_DetectProductKitLoop](
 @KitId uniqueidentifier, 
 @ProductId uniqueidentifier) 
as
/*
This proc is to be used to determine if adding a product to a kit would create a loop inside the kit hierarchy.

Return Values : 
ErrorCode ErrorMessage
  '4'  'The KitId passed in is not valid' as ErrorMessage.'
  '3'  'The ProductId passed in is not valid' as ErrorMessage.'
  '2'  'This association would create a loop in the database.'
  '1'  'There is already a loop existing in the database.'
*/
set nocount on
Declare @TempParentId uniqueidentifier

	

   -- make sure that the @KitId is a valid product id.
   IF not exists(select ProductId from ProductBase where ProductId = @KitId)
     BEGIN 
      select N'4' as ErrorCode,  N'The KitId passed in is not valid.' as ErrorMessage
      return 
     END

   -- make sure that the @ProductId is a valid product id.
   IF not exists(select ProductId from ProductBase where ProductId = @ProductId)
     BEGIN 
      select N'3' as ErrorCode, N'The ProductId passed in is not valid.' as ErrorMessage
      return 
     END


select @TempParentId = @KitId 

create table #Ids ( IdVisited uniqueidentifier primary key)
WHILE ( 1 = 1 )

 BEGIN
   if (@TempParentId = @ProductId)
     -- while chasing the parent of the parent (of the parent...) you bumped into the child.  this would create a loop	
     BEGIN
	select N'2' as ErrorCode, N'This association would create a loop in the database.' as ErrorMessage
	BREAK
     END

   IF EXISTS (select ProductId from ProductAssociation where AssociatedProduct = @TempParentId)
     BEGIN
   	select @TempParentId = ProductId from ProductAssociation where AssociatedProduct = @TempParentId
     END
   ELSE
     BEGIN
	select @TempParentId = null
     END	

   IF (@TempParentId is null)
     BEGIN 
      -- This implies that there is a dead end to the parent->grand parent-> chain and hence no fear of looping.	
      select N'0' as ErrorCode, N'This association is valid and would create no loop in the database.' as ErrorMessage
      BREAK
     END
   ELSE
     BEGIN 
	if exists (select * from #Ids where @TempParentId = IdVisited)
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
