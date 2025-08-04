

create procedure p_AddAttributeToIndex (@ObjectTypeCode int,
	@AttributeId uniqueidentifier, @indexType int) as
set nocount on

declare @indexid uniqueidentifier
set @indexid = null

select @indexid = ei.IndexId from EntityIndex ei
    join EntityView e on (e.EntityId = ei.EntityId)
where e.ObjectTypeCode = @ObjectTypeCode and ei.IndexType = @indexType

if (@indexid is null)
begin
	select @indexid = newid()

	declare @entityName nvarchar(64)
	select @entityName = e.Name from EntityView e join AttributeView a on a.EntityId = e.EntityId where a.AttributeId = @AttributeId
	
	declare @indexName nvarchar(128)
	select @indexName = N'ndx_SystemManaged_' + @entityName
	
	insert EntityIndex(IndexId, Name, EntityId, IsClustered, IsUnique, 
		SqlFillFactor, RecreateIndex, ModifiedOn, IndexType, IsPrimaryKey, IsUniqueConstraint)
	select @indexid, @indexName, EntityId, 0, 0, 80, 1,
		getutcdate(), @indexType, 0, 0 from EntityView where ObjectTypeCode = @ObjectTypeCode
end

declare @indexOrder int
select @indexOrder = max(IndexOrder) from IndexAttributes where IndexId = @indexid
if (@indexOrder is null)
	set @indexOrder = 0
else
	set @indexOrder = 1 + @indexOrder

insert IndexAttributes(IndexAttributeId, AttributeId, IndexId, IndexOrder)
values (newid(), @AttributeId, @indexid, @indexOrder)

update EntityIndex set RecreateIndex = 1, ModifiedOn = getutcdate()
where IndexId = @indexid 
