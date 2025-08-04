

create procedure p_GetTablePrimaryKey(@tablename nvarchar(255) = null, @tableid uniqueidentifier = null) as
set nocount on

if @tablename is null and @tableid is null
begin
   RAISERROR ( 1074008071, 16, 127 ) WITH NOWAIT, SETERROR
   return
end 

if @tableid is null
begin
	select @tableid = EntityId
	from EntityView
	where Name = @tablename
end

select 'id' = AttributeId, referencingentity = EntityId, null, 'primarykey' = IsPKAttribute, 'relationshipname' = null, name = null
from AttributeView
where EntityId = @tableid
  and IsPKAttribute = 1
