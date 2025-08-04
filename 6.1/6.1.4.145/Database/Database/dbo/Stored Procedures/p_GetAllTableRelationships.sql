

create procedure p_GetAllTableRelationships as
set nocount on
select 'SourceEntity' = e1.LogicalName, 
       'LeftKey' = r1.Name, 
       'IntersectEntity' = i1.LogicalName, 
       'RightKey' = r2.Name, 
       'TargetEntity' = e3.LogicalName
from EntityView e1, RelationshipView r1, EntityView i1,
     EntityView e3, RelationshipView r2, EntityView i2
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
order by 1, 3
