

create procedure p_GetTablesReferencedBy(@tablename nvarchar(255) = null, @tableid uniqueidentifier = null) as
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

select EntityView.*
from EntityView, RelationshipView
where EntityView.EntityId = RelationshipView.ReferencingEntityId
  and RelationshipView.ReferencedEntityId = @tableid
