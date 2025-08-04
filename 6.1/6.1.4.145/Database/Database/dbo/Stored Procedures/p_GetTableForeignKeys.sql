

create procedure p_GetTableForeignKeys(@tablename nvarchar(255) = null, @tableid uniqueidentifier = null) as
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

select 'id' = rel.RelationshipId, referencingentity = rel.ReferencingEntityId, ReferencedEntityId, 'primarykey' = 0, 
        EntityView.Name, EntityView.PhysicalName, EntityView.LogicalName, 'relationshipname' = rel.Name
from RelationshipView rel join EntityView on (rel.ReferencedEntityId = EntityView.EntityId)
where rel.ReferencingEntityId = @tableid

