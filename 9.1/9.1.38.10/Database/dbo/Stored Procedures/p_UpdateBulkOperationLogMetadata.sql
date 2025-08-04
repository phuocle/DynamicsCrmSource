

create	procedure dbo.p_UpdateBulkOperationLogMetadata

as
begin;

	declare @resultCode int = -1 -- default uninitialized result code
	
	update Entity
	set IsIntersect = 1, IsCustomizable = 0
	where LogicalName in ('bulkoperationlog')
	
	-- count the number of rows that were effected by metadata change
	set @resultCode = (select count(EntityId) from Entity where LogicalName in ('bulkoperationlog'))
	
	select @resultCode as 'numberOfItemsChanged'

end;