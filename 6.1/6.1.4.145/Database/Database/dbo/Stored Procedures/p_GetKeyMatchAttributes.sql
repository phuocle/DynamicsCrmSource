

create procedure p_GetKeyMatchAttributes(@entityid uniqueidentifier, @referencedentityid uniqueidentifier) as
set nocount on

select a1.Name, a2.Name, a2.PhysicalName, a2.LogicalName
from RelationshipView rel, AttributeView a1, AttributeView a2
where rel.ReferencingEntityId = @entityid
  and rel.ReferencingAttributeId = a1.AttributeId
  and rel.ReferencedAttributeId = a2.AttributeId
  and a1.EntityId = @referencedentityid
