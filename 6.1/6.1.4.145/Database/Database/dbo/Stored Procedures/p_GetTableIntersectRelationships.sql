

CREATE procedure p_GetTableIntersectRelationships(@tablename nvarchar(255) = null, @tableid uniqueidentifier = null) as
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

select 
    'SourceEntity' = e1.Name, 
    'LeftKey' = r1.Name, 
    LeftAttribute.Name as LeftKeyName,
    'IntersectEntity' = i1.Name, 
    'RightKey' = r2.Name, 
    RightAttribute.Name as RightKeyName,
    'TargetEntity' = e3.Name
from 
    EntityView e1, 
    RelationshipView r1, 
    EntityView i1,
    EntityView e3, 
    RelationshipView r2, 
    EntityView i2,
    AttributeView as RightAttribute,
    AttributeView as LeftAttribute
where e1.EntityId = r1.ReferencedEntityId
    and r1.ReferencingEntityId = i1.EntityId
    and e3.EntityId = r2.ReferencedEntityId
    and r2.ReferencingEntityId = i2.EntityId
    and i1.EntityId = i2.EntityId
    and e3.IsLookupTable = 0
    and e3.IsIntersect = 0
    and e3.IsSecurityIntersect = 0
    and e1.IsLookupTable = 0
    and e1.IsIntersect = 0
    and e1.IsSecurityIntersect = 0
    and e1.Name <> e3.Name
    and e1.EntityId = @tableid
    and e3.IsIntersect = 1
    and LeftAttribute.AttributeId = r1.ReferencingAttributeId
    and LeftAttribute.EntityId = r1.ReferencingEntityId
    and RightAttribute.AttributeId = r2.ReferencingAttributeId
    and RightAttribute.EntityId = r2.ReferencingEntityId
order by 1, 4
