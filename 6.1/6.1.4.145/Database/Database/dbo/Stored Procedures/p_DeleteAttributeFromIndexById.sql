


create procedure p_DeleteAttributeFromIndexById (@AttributeId uniqueidentifier, @indexid uniqueidentifier) as
set nocount on

delete IndexAttributes
where IndexId = @indexid and AttributeId = @AttributeId 

delete IndexFilters
where IndexId = @indexid and AttributeId = @AttributeId

-- Reset the order of the attributes to fill in holes
declare @currentOrder int
select @currentOrder = 0

declare @indexOrder int
declare @indexAttributeId uniqueidentifier

declare orderCursor cursor local FORWARD_ONLY READ_ONLY for
select IndexAttributeId, IndexOrder from IndexAttributes where IndexId = @indexid and IsIncludeAttribute = 0 order by IndexOrder asc

open orderCursor
fetch next from orderCursor into @indexAttributeId, @indexOrder
while (@@fetch_status = 0)
begin
	if (@indexOrder <> @currentOrder)
		update IndexAttributes set IndexOrder = @currentOrder where IndexAttributeId = @indexAttributeId
	
	select @currentOrder = @currentOrder + 1

    fetch next from orderCursor into @indexAttributeId, @indexOrder
end
close orderCursor
deallocate orderCursor  

-- Now do the same thing for include attributes
select @currentOrder = 0

declare includeAttributeOrderCursor cursor local FORWARD_ONLY READ_ONLY for
select IndexAttributeId, IndexOrder from IndexAttributes where IndexId = @indexid and IsIncludeAttribute = 1 order by IndexOrder asc

open includeAttributeOrderCursor
fetch next from includeAttributeOrderCursor into @indexAttributeId, @indexOrder
while (@@fetch_status = 0)
begin
	if (@indexOrder <> @currentOrder)
		update IndexAttributes set IndexOrder = @currentOrder where IndexAttributeId = @indexAttributeId
	
	select @currentOrder = @currentOrder + 1

    fetch next from includeAttributeOrderCursor into @indexAttributeId, @indexOrder
end
close includeAttributeOrderCursor
deallocate includeAttributeOrderCursor  

update EntityIndex set RecreateIndex = 1, ModifiedOn = getutcdate()
where IndexId = @indexid 
